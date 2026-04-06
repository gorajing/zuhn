#!/usr/bin/env npx tsx
/**
 * ask.ts — The Synthesis Engine
 *
 * Turns Zuhn from a filing cabinet into an oracle.
 * Retrieves relevant insights, principles, and tensions,
 * then synthesizes an answer using ONLY your curated knowledge.
 *
 * Usage:
 *   npm run ask "How should I handle a prospect happy with GPT-4o?"
 *   npm run ask "What's the relationship between vulnerability and sales?"
 *   npm run ask "Prep me for my Anthropic interview"
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { initDb } from "./lib/db";
import { hybridSearch } from "./lib/vector-search";
import { searchInsights } from "./lib/search";
import { embedText, isOllamaAvailable } from "./lib/embeddings";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");

// ─── Types ──────────────────────────────────────────────────────────

interface RetrievedItem {
  id: string;
  type: "insight" | "principle" | "tension";
  title: string;
  stance: string;
  confidence: string;
  domain: string;
  topic: string;
  content: string;
  score: number;
}

// ─── Retrieval ──────────────────────────────────────────────────────

async function retrieveContext(query: string): Promise<RetrievedItem[]> {
  const db = initDb();
  const items: RetrievedItem[] = [];

  // 1. Hybrid search for insights (keyword + semantic)
  // Sanitize query for FTS5 (remove special chars that break syntax)
  const sanitized = query.replace(/[?!@#$%^&*(){}[\]|\\:;"'<>,./~`]/g, " ").trim();

  let searchResults: Array<{ id: string; score: number }> = [];

  try {
    // Generate query embedding for semantic search
    const ollamaUp = await isOllamaAvailable();
    if (ollamaUp) {
      const queryEmbedding = await embedText(sanitized);
      const hybridResults = hybridSearch(db, sanitized, queryEmbedding, { limit: 12 });
      searchResults = hybridResults.map((r) => ({ id: r.id, score: r.score }));
    } else {
      // Ollama unavailable — keyword-only
      const kwResults = searchInsights(db, sanitized, { limit: 12 });
      searchResults = kwResults.map((r) => ({ id: r.id, score: r.score }));
    }
  } catch {
    // Fall back to keyword-only if hybrid fails
    try {
      const kwResults = searchInsights(db, sanitized, { limit: 12 });
      searchResults = kwResults.map((r) => ({ id: r.id, score: r.score }));
    } catch {
      searchResults = [];
    }
  }

  // 2. Load full insight data for each result
  for (const result of searchResults) {
    const row = db
      .prepare("SELECT id, domain, topic, title, one_line, confidence, file_path, stance FROM insights WHERE id = ?")
      .get(result.id) as {
        id: string; domain: string; topic: string; title: string;
        one_line: string; confidence: string; file_path: string; stance: string;
      } | undefined;

    if (!row) continue;

    // Read the full standard resolution from the file
    let standard = row.one_line;
    const fullPath = row.file_path.startsWith("/") ? row.file_path : join(PROJECT_ROOT, row.file_path);
    if (existsSync(fullPath)) {
      try {
        const raw = readFileSync(fullPath, "utf-8");
        const { data } = matter(raw);
        if (data.resolutions?.standard) {
          standard = data.resolutions.standard;
        }
      } catch {}
    }

    items.push({
      id: row.id,
      type: "insight",
      title: row.title,
      stance: row.stance || "",
      confidence: row.confidence,
      domain: row.domain,
      topic: row.topic,
      content: standard,
      score: result.score,
    });
  }

  // 3. Search principles separately (they're not in the insights table)
  const principleFiles = require("fast-glob").sync("principles/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
  });

  const queryLower = query.toLowerCase();
  const queryTerms = queryLower.split(/\s+/).filter((t: string) => t.length > 3);

  const scoredPrinciples: Array<{ item: RetrievedItem; score: number }> = [];

  for (const filePath of principleFiles) {
    const raw = readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    if (!data.id || !data.title) continue;

    const title = (data.title as string).toLowerCase();
    const summary = (data.summary as string || "").toLowerCase();
    const text = title + " " + summary;

    // Simple keyword relevance scoring for principles
    let score = 0;
    for (const term of queryTerms) {
      if (text.includes(term)) score += 1;
    }

    if (score > 0) {
      scoredPrinciples.push({
        item: {
          id: data.id as string,
          type: "principle",
          title: data.title as string,
          stance: "",
          confidence: data.confidence as string || "high",
          domain: data.domain as string || "",
          topic: "",
          content: data.summary as string || "",
          score,
        },
        score,
      });
    }
  }

  // Take top 5 principles
  scoredPrinciples.sort((a, b) => b.score - a.score);
  for (const sp of scoredPrinciples.slice(0, 5)) {
    items.push(sp.item);
  }

  // 4. Check for relevant tensions
  const tensionsDir = join(KB_ROOT, "tensions");
  if (existsSync(tensionsDir)) {
    const tensionFiles = require("fs").readdirSync(tensionsDir)
      .filter((f: string) => f.endsWith(".md") && f !== "_index.md");

    for (const file of tensionFiles) {
      const raw = readFileSync(join(tensionsDir, file), "utf-8");
      const { data, content } = matter(raw);
      if (!data.id) continue;

      const text = ((data.title as string) || "").toLowerCase() + " " + content.toLowerCase();
      let score = 0;
      for (const term of queryTerms) {
        if (text.includes(term)) score += 1;
      }

      if (score > 0) {
        items.push({
          id: data.id as string,
          type: "tension",
          title: data.title as string || "",
          stance: "",
          confidence: "",
          domain: "",
          topic: "",
          content: content.slice(0, 500),
          score,
        });
      }
    }
  }

  db.close();
  return items;
}

// ─── Context Assembly ───────────────────────────────────────────────

function assembleContext(query: string, items: RetrievedItem[]): string {
  let context = `# QUERY\n${query}\n\n`;

  // Group by type
  const insights = items.filter((i) => i.type === "insight");
  const principles = items.filter((i) => i.type === "principle");
  const tensions = items.filter((i) => i.type === "tension");

  if (principles.length > 0) {
    context += "# PRINCIPLES (compressed patterns from multiple insights)\n\n";
    for (const p of principles) {
      context += `## [${p.id}] ${p.title}\n`;
      context += `Confidence: ${p.confidence} | Domain: ${p.domain}\n`;
      context += `${p.content}\n\n`;
    }
  }

  if (insights.length > 0) {
    context += "# INSIGHTS (individual knowledge cards)\n\n";
    for (const i of insights) {
      context += `## [${i.id}] ${i.title}\n`;
      context += `Stance: ${i.stance}\n`;
      context += `Confidence: ${i.confidence} | ${i.domain}/${i.topic}\n`;
      context += `${i.content}\n\n`;
    }
  }

  if (tensions.length > 0) {
    context += "# TENSIONS (unresolved contradictions)\n\n";
    for (const t of tensions) {
      context += `## [${t.id}] ${t.title}\n`;
      context += `${t.content}\n\n`;
    }
  }

  return context;
}

// ─── Synthesis ──────────────────────────────────────────────────────

function synthesize(query: string, context: string): string {
  const systemPrompt = `You are Zuhn, a personal knowledge oracle.

STRICT RULES:
1. Answer the user's question using ONLY the provided knowledge base context.
2. Cite your sources inline using [INS-XXXXXX-XXXX] or [PRI-XXXXXX-XXXX] format.
3. If the context contains a Tension, explain both sides and the variable that resolves it.
4. If the context does not contain the answer, say: "My knowledge base does not contain the answer to this. Consider adding a source on this topic."
5. Do NOT use any knowledge from outside the provided context. Do NOT hallucinate.
6. Be direct, actionable, and concise. Structure your answer with clear sections if the question is complex.
7. End with a "Sources" section listing every ID you cited.`;

  const fullPrompt = `${systemPrompt}\n\n---\n\n${context}`;

  const tmpFile = `/tmp/zuhn-ask-${Date.now()}.md`;
  writeFileSync(tmpFile, fullPrompt, "utf-8");

  try {
    const output = execFileSync("claude", ["-p", readFileSync(tmpFile, "utf-8")], {
      cwd: PROJECT_ROOT,
      timeout: 2 * 60 * 1000,
      encoding: "utf-8",
      maxBuffer: 5 * 1024 * 1024,
    });

    // Clean up
    try { require("fs").unlinkSync(tmpFile); } catch {}

    return output;
  } catch (err) {
    try { require("fs").unlinkSync(tmpFile); } catch {}
    return `Synthesis failed: ${err instanceof Error ? err.message : "unknown error"}`;
  }
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const query = process.argv.slice(2).join(" ").trim();

  if (!query) {
    console.log("Usage: npm run ask \"your question here\"");
    console.log("");
    console.log("Examples:");
    console.log('  npm run ask "How should I handle a prospect happy with GPT-4o?"');
    console.log('  npm run ask "What connects vulnerability to enterprise sales?"');
    console.log('  npm run ask "Prep me for my Anthropic interview"');
    process.exit(1);
  }

  // 1. Retrieve
  console.log("Searching knowledge base...\n");
  const items = await retrieveContext(query);

  if (items.length === 0) {
    console.log("No relevant insights found. Consider ingesting sources on this topic.");
    return;
  }

  const insights = items.filter((i) => i.type === "insight").length;
  const principles = items.filter((i) => i.type === "principle").length;
  const tensions = items.filter((i) => i.type === "tension").length;
  console.log(`Retrieved: ${insights} insights, ${principles} principles, ${tensions} tensions\n`);

  // 2. Assemble context
  const context = assembleContext(query, items);

  // 3. Synthesize
  console.log("Synthesizing answer...\n");
  console.log("─".repeat(60));
  console.log();

  const answer = synthesize(query, context);
  console.log(answer);

  console.log();
  console.log("─".repeat(60));
}

main().catch((err) => {
  console.error("ask.ts failed:", err);
  process.exit(1);
});

#!/usr/bin/env npx tsx

// ─── Zuhn MCP Server ────────────────────────────────────────────────
// Read-only MCP server exposing Zuhn's knowledge base to any AI agent.
// Tools: zuhn_search, zuhn_recall, zuhn_browse, zuhn_flags, zuhn_tensions, zuhn_stats

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { join } from "node:path";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import matter from "gray-matter";

import { initDb } from "./lib/db";
import { searchInsights } from "./lib/search";
import { isOllamaAvailable, embedText } from "./lib/embeddings";
import { initVectorTable, hybridSearch } from "./lib/vector-search";

// ─── Constants ───────────────────────────────────────────────────────

const KB_ROOT = join(__dirname, "../knowledge-base");
const PROJECT_ROOT = join(__dirname, "..");

// ─── Server Setup ────────────────────────────────────────────────────

const server = new McpServer({
  name: "zuhn",
  version: "1.0.0",
});

// ─── Tool: zuhn_search ───────────────────────────────────────────────
// Hybrid search (FTS5 + vector if Ollama available, keyword-only fallback)

server.registerTool("zuhn_search", {
  description:
    "Search Zuhn's knowledge base using hybrid keyword + semantic search. " +
    "Returns insights and principles ranked by relevance. " +
    "Falls back to keyword-only search if Ollama is not running.",
  inputSchema: {
    query: z.string().describe("Natural language search query"),
    domain: z
      .string()
      .optional()
      .describe("Filter by domain (e.g. ai-development, startups, investing)"),
    tag: z.string().optional().describe("Filter by tag"),
    limit: z
      .number()
      .optional()
      .default(10)
      .describe("Max results (default 10)"),
  },
}, async ({ query, domain, tag, limit }) => {
  const db = initDb();

  try {
    const ollamaUp = await isOllamaAvailable();

    if (ollamaUp) {
      // Hybrid search: keyword + semantic
      initVectorTable(db);
      const queryEmbedding = await embedText(query);
      const results = hybridSearch(db, query, queryEmbedding, {
        limit,
        domain,
        tag,
      });

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              {
                mode: "hybrid",
                count: results.length,
                results: results.map((r) => ({
                  id: r.id,
                  title: r.title,
                  one_line: r.one_line,
                  domain: r.domain,
                  topic: r.topic,
                  confidence: r.confidence,
                  tags: r.tags.split(" "),
                  score: Number(r.score.toFixed(6)),
                  match_type: r.match_type,
                })),
              },
              null,
              2
            ),
          },
        ],
      };
    }

    // Fallback: keyword-only search
    const results = searchInsights(db, query, { limit, domain, tag });

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            {
              mode: "keyword",
              note: "Ollama not running — using keyword search only. Start Ollama for hybrid semantic search.",
              count: results.length,
              results: results.map((r) => ({
                id: r.id,
                title: r.title,
                one_line: r.one_line,
                domain: r.domain,
                topic: r.topic,
                confidence: r.confidence,
                tags: r.tags.split(" "),
              })),
            },
            null,
            2
          ),
        },
      ],
    };
  } finally {
    db.close();
  }
});

// ─── Tool: zuhn_recall ───────────────────────────────────────────────
// Read full content of any entity by ID

server.registerTool("zuhn_recall", {
  description:
    "Retrieve the full content of a Zuhn entity (insight, principle, tension, source) by ID. " +
    "Returns the complete YAML frontmatter and markdown body.",
  inputSchema: {
    id: z
      .string()
      .describe(
        "Entity ID (e.g. INS-260321-5857, PRI-260321-A1F3, T-260321-BD6F, SRC-260320-1234)"
      ),
  },
}, async ({ id }) => {
  // Determine file location from ID prefix
  const prefix = id.split("-")[0];
  let searchDirs: string[] = [];

  if (prefix === "INS") {
    // Insights live under domains/*/topics/
    searchDirs = readdirSync(join(KB_ROOT, "domains"), {
      withFileTypes: true,
    })
      .filter((d) => d.isDirectory())
      .flatMap((domain) => {
        const domainPath = join(KB_ROOT, "domains", domain.name);
        return readdirSync(domainPath, { withFileTypes: true })
          .filter((t) => t.isDirectory())
          .map((topic) => join(domainPath, topic.name));
      });
  } else if (prefix === "PRI") {
    // Principles live at knowledge-base/principles/{domain}/
    const principlesRoot = join(KB_ROOT, "principles");
    searchDirs = existsSync(principlesRoot)
      ? readdirSync(principlesRoot, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .map((domain) => join(principlesRoot, domain.name))
      : [];
  } else if (prefix === "T") {
    searchDirs = [join(KB_ROOT, "tensions")];
  } else if (prefix === "SRC") {
    searchDirs = [join(KB_ROOT, "sources")];
  } else if (prefix === "MM") {
    searchDirs = [join(KB_ROOT, "mental-models")];
  }

  // Search for the file
  for (const dir of searchDirs) {
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const filePath = join(dir, file);
      const raw = readFileSync(filePath, "utf-8");
      const parsed = matter(raw);
      if (parsed.data.id === id) {
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(
                {
                  id,
                  file_path: filePath.replace(PROJECT_ROOT + "/", ""),
                  frontmatter: parsed.data,
                  body: parsed.content.trim(),
                },
                null,
                2
              ),
            },
          ],
        };
      }
    }
  }

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify({ error: `Entity ${id} not found` }),
      },
    ],
  };
});

// ─── Tool: zuhn_browse ───────────────────────────────────────────────
// List insights/principles in a domain or topic

server.registerTool("zuhn_browse", {
  description:
    "Browse Zuhn's knowledge base by domain and optionally topic. " +
    "Lists all insights and principles with their one-line summaries.",
  inputSchema: {
    domain: z
      .string()
      .describe(
        "Domain to browse (e.g. ai-development, startups, investing)"
      ),
    topic: z
      .string()
      .optional()
      .describe("Specific topic within domain (e.g. claude-code, agent-patterns)"),
  },
}, async ({ domain, topic }) => {
  const db = initDb();

  try {
    let query: string;
    let params: string[];

    if (topic) {
      query =
        "SELECT id, title, one_line, domain, topic, confidence, tags FROM insights WHERE domain = ? AND topic = ? AND status = 'active' ORDER BY confidence DESC, date_extracted DESC";
      params = [domain, topic];
    } else {
      query =
        "SELECT id, title, one_line, domain, topic, confidence, tags FROM insights WHERE domain = ? AND status = 'active' ORDER BY topic, confidence DESC";
      params = [domain];
    }

    const insights = db.prepare(query).all(...params) as Array<{
      id: string;
      title: string;
      one_line: string;
      domain: string;
      topic: string;
      confidence: string;
      tags: string;
    }>;

    // Principles live at knowledge-base/principles/{domain}/
    const principlesDir = join(KB_ROOT, "principles", domain);
    const principles: Array<{
      id: string;
      title: string;
      summary: string;
      confidence: string;
      supporting_count: number;
    }> = [];

    if (existsSync(principlesDir)) {
      const files = readdirSync(principlesDir).filter(
        (f) => f.endsWith(".md") && f !== "_index.md"
      );
      for (const file of files) {
        const raw = readFileSync(join(principlesDir, file), "utf-8");
        const parsed = matter(raw);
        const d = parsed.data;
        principles.push({
          id: d.id,
          title: d.title,
          summary: d.summary || d.resolutions?.one_line || "",
          confidence: d.confidence,
          supporting_count: d.supporting_count || 0,
        });
      }
    }

    // Get topic list for this domain
    const domainPath = join(KB_ROOT, "domains", domain);
    const topics = existsSync(domainPath)
      ? readdirSync(domainPath, { withFileTypes: true })
          .filter((d) => d.isDirectory() && d.name !== "principles")
          .map((d) => d.name)
      : [];

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            {
              domain,
              topic: topic || "all",
              topics,
              insight_count: insights.length,
              principle_count: principles.length,
              insights: insights.map((i) => ({
                id: i.id,
                title: i.title,
                one_line: i.one_line,
                topic: i.topic,
                confidence: i.confidence,
                tags: i.tags.split(" "),
              })),
              principles,
            },
            null,
            2
          ),
        },
      ],
    };
  } finally {
    db.close();
  }
});

// ─── Tool: zuhn_flags ────────────────────────────────────────────────
// Current learning mechanism flags

server.registerTool("zuhn_flags", {
  description:
    "Get current learning mechanism flags from Zuhn. Shows COMPRESS (topics needing compression), " +
    "DISCOVER (cross-topic clusters), GAP (knowledge gaps), and TRANSFER (cross-domain principle transfers).",
  inputSchema: {},
}, async () => {
  const flagsPath = join(KB_ROOT, "meta", "flags.md");

  if (!existsSync(flagsPath)) {
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({
            error: "No flags file found. Run `npm run learn` first.",
          }),
        },
      ],
    };
  }

  const raw = readFileSync(flagsPath, "utf-8");

  // Parse structured data from flags.md
  const sections: Record<string, string[]> = {};
  let currentSection = "";

  for (const line of raw.split("\n")) {
    if (line.startsWith("## ")) {
      currentSection = line.replace("## ", "").trim();
      sections[currentSection] = [];
    } else if (currentSection && line.startsWith("- ")) {
      sections[currentSection].push(line.replace("- ", "").trim());
    }
  }

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          {
            compress: sections["COMPRESS"] || [],
            discover: sections["DISCOVER"] || [],
            gaps: sections["GAP"] || [],
            transfers: sections["TRANSFER"] || [],
          },
          null,
          2
        ),
      },
    ],
  };
});

// ─── Tool: zuhn_tensions ─────────────────────────────────────────────
// Active unresolved tensions

server.registerTool("zuhn_tensions", {
  description:
    "List active tensions in Zuhn's knowledge base. Tensions are contradictions or " +
    "competing ideas between insights that haven't been resolved yet.",
  inputSchema: {
    status: z
      .enum(["unresolved", "resolved", "all"])
      .optional()
      .default("unresolved")
      .describe("Filter by tension status (default: unresolved)"),
  },
}, async ({ status }) => {
  const tensionsDir = join(KB_ROOT, "tensions");

  if (!existsSync(tensionsDir)) {
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({ tensions: [], count: 0 }),
        },
      ],
    };
  }

  const files = readdirSync(tensionsDir).filter(
    (f) => f.endsWith(".md") && f !== "_index.md"
  );

  const tensions: Array<{
    id: string;
    title: string;
    status: string;
    side_a: string[];
    side_b: string[];
    type?: string;
  }> = [];

  for (const file of files) {
    const raw = readFileSync(join(tensionsDir, file), "utf-8");
    const parsed = matter(raw);
    const d = parsed.data;

    if (status === "all" || d.status === status) {
      tensions.push({
        id: d.id,
        title: d.title,
        status: d.status,
        side_a: d.side_a || [],
        side_b: d.side_b || [],
        type: d.type,
      });
    }
  }

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify({ count: tensions.length, tensions }, null, 2),
      },
    ],
  };
});

// ─── Tool: zuhn_stats ────────────────────────────────────────────────
// Knowledge base overview

server.registerTool("zuhn_stats", {
  description:
    "Get an overview of Zuhn's knowledge base: total insights, principles, sources, " +
    "tensions, domains, and per-domain breakdowns.",
  inputSchema: {},
}, async () => {
  const db = initDb();

  try {
    // Count insights by domain
    const domainCounts = db
      .prepare(
        "SELECT domain, topic, COUNT(*) as count FROM insights WHERE status = 'active' GROUP BY domain, topic ORDER BY domain, count DESC"
      )
      .all() as Array<{ domain: string; topic: string; count: number }>;

    // Total insights
    const totalInsights = (
      db
        .prepare("SELECT COUNT(*) as count FROM insights WHERE status = 'active'")
        .get() as { count: number }
    ).count;

    // Principles live at knowledge-base/principles/{domain}/
    const domainPrinciples: Record<string, number> = {};
    const principlesRoot = join(KB_ROOT, "principles");
    if (existsSync(principlesRoot)) {
      for (const domain of readdirSync(principlesRoot, { withFileTypes: true })) {
        if (!domain.isDirectory()) continue;
        const count = readdirSync(join(principlesRoot, domain.name)).filter(
          (f) => f.endsWith(".md") && f !== "_index.md"
        ).length;
        domainPrinciples[domain.name] = count;
      }
    }

    const totalPrinciples = Object.values(domainPrinciples).reduce(
      (a, b) => a + b,
      0
    );

    // Sources live in subdirectories: sources/youtube/, sources/blog/, etc.
    const sourcesDir = join(KB_ROOT, "sources");
    let totalSources = 0;
    if (existsSync(sourcesDir)) {
      for (const sub of readdirSync(sourcesDir, { withFileTypes: true })) {
        if (sub.isDirectory()) {
          totalSources += readdirSync(join(sourcesDir, sub.name)).filter(
            (f) => f.endsWith(".md") && f !== "_index.md"
          ).length;
        }
      }
    }

    // Count tensions
    const tensionsDir = join(KB_ROOT, "tensions");
    let totalTensions = 0;
    let unresolvedTensions = 0;
    if (existsSync(tensionsDir)) {
      const tensionFiles = readdirSync(tensionsDir).filter(
        (f) => f.endsWith(".md") && f !== "_index.md"
      );
      totalTensions = tensionFiles.length;
      for (const file of tensionFiles) {
        const raw = readFileSync(join(tensionsDir, file), "utf-8");
        const parsed = matter(raw);
        if (parsed.data.status === "unresolved") unresolvedTensions++;
      }
    }

    // Build per-domain breakdown
    const domains: Record<
      string,
      { insights: number; principles: number; topics: Record<string, number> }
    > = {};
    for (const row of domainCounts) {
      if (!domains[row.domain]) {
        domains[row.domain] = {
          insights: 0,
          principles: domainPrinciples[row.domain] || 0,
          topics: {},
        };
      }
      domains[row.domain].insights += row.count;
      domains[row.domain].topics[row.topic] = row.count;
    }

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            {
              total_insights: totalInsights,
              total_principles: totalPrinciples,
              total_sources: totalSources,
              total_tensions: totalTensions,
              unresolved_tensions: unresolvedTensions,
              domain_count: Object.keys(domains).length,
              domains,
            },
            null,
            2
          ),
        },
      ],
    };
  } finally {
    db.close();
  }
});

// ─── Phase 19: Write Tools ──────────────────────────────────────────

// Tool: zuhn_queue_source — Queue a URL for daemon processing
server.registerTool("zuhn_queue_source", {
  description:
    "Queue a URL or text for ingestion into Zuhn's knowledge base. " +
    "The daemon will process it autonomously. Does NOT auto-ingest — " +
    "queues for the processing pipeline.",
  inputSchema: {
    url: z.string().optional().describe("URL to ingest"),
    text: z.string().optional().describe("Raw text to ingest (provide with title)"),
    title: z.string().optional().describe("Title for text pastes"),
    mode: z.enum(["heavy", "fast", "auto"]).optional().default("auto").describe("Processing mode"),
  },
  annotations: { readOnlyHint: false },
}, async (params) => {
  const db = initDb();
  try {
    if (!params.url && !params.text) {
      return { content: [{ type: "text" as const, text: "Error: provide 'url' or 'text' + 'title'" }] };
    }

    const now = new Date();
    const id = `INB-${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${Math.random().toString(16).slice(2, 6).toUpperCase()}`;

    if (params.url) {
      db.prepare("INSERT INTO inbox_queue (id, url, type, source_channel, processing_mode) VALUES (?, ?, 'url', 'mcp', ?)").run(id, params.url, params.mode || "auto");
    } else {
      const slug = (params.title || "paste").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60);
      const filePath = join(KB_ROOT, "inbox", `${slug}-${id}.txt`);
      require("fs").writeFileSync(filePath, params.text!, "utf-8");
      db.prepare("INSERT INTO inbox_queue (id, type, source_channel, processing_mode, file_path) VALUES (?, 'paste', 'mcp', ?, ?)").run(id, params.mode || "auto", filePath);
    }

    return { content: [{ type: "text" as const, text: JSON.stringify({ queued: true, id, mode: params.mode || "auto" }) }] };
  } finally {
    db.close();
  }
});

// Tool: zuhn_submit_insights — Submit pre-extracted insights
server.registerTool("zuhn_submit_insights", {
  description:
    "Submit pre-extracted insights to Zuhn. Validates via Zod schema. " +
    "Insights are flagged as mcp_submitted for morning briefing review.",
  inputSchema: {
    source_id: z.string().describe("Source ID (SRC-XXXXXX-XXXX)"),
    insights_json: z.string().describe("JSON string matching the extraction schema"),
  },
  annotations: { readOnlyHint: false },
}, async (params) => {
  try {
    const tmpFile = `/tmp/zuhn-mcp-extract-${Date.now()}.json`;
    require("fs").writeFileSync(tmpFile, params.insights_json, "utf-8");

    const { execFileSync } = require("child_process");
    const result = execFileSync("npx", ["tsx", "scripts/extract.ts", "--source", params.source_id, "--file", tmpFile], {
      cwd: PROJECT_ROOT,
      timeout: 60_000,
    }).toString();

    try { require("fs").unlinkSync(tmpFile); } catch {}

    const countMatch = result.match(/Created: (\d+)/);
    const count = countMatch ? parseInt(countMatch[1], 10) : 0;

    return { content: [{ type: "text" as const, text: JSON.stringify({ created: count, source: "mcp" }) }] };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { content: [{ type: "text" as const, text: JSON.stringify({ error: msg }) }] };
  }
});

// Tool: zuhn_flag_tension — Flag a potential tension for review
server.registerTool("zuhn_flag_tension", {
  description:
    "Flag a potential tension between two insights. Does NOT auto-create — " +
    "queues for human review in the morning briefing.",
  inputSchema: {
    insight_a: z.string().describe("First insight ID (INS-XXXXXX-XXXX)"),
    insight_b: z.string().describe("Second insight ID (INS-XXXXXX-XXXX)"),
    reason: z.string().describe("Why these insights are in tension"),
  },
  annotations: { readOnlyHint: false },
}, async (params) => {
  const candidatesPath = join(KB_ROOT, "meta", "tension-candidates.json");
  let candidates: { candidate_count: number; candidates: unknown[] } = { candidate_count: 0, candidates: [] };
  if (existsSync(candidatesPath)) {
    try { candidates = JSON.parse(readFileSync(candidatesPath, "utf-8")); } catch {}
  }

  const pairKey = [params.insight_a, params.insight_b].sort().join("|");
  candidates.candidates.push({
    pair_key: pairKey,
    id_a: params.insight_a,
    id_b: params.insight_b,
    source: "mcp-flagged",
    reason: params.reason,
    polarity_score: 10,
  });
  candidates.candidate_count = candidates.candidates.length;

  require("fs").writeFileSync(candidatesPath, JSON.stringify(candidates, null, 2), "utf-8");

  return { content: [{ type: "text" as const, text: JSON.stringify({ queued: true, pair_key: pairKey }) }] };
});

// Tool: zuhn_log_feedback — Log insight usage for the feedback loop
server.registerTool("zuhn_log_feedback", {
  description:
    "Log that an insight was used, cited, or found irrelevant. " +
    "Feeds the monthly feedback loop for priority recalibration.",
  inputSchema: {
    insight_id: z.string().describe("Insight ID (INS-XXXXXX-XXXX)"),
    feedback_type: z.enum(["used", "cited", "irrelevant"]).describe("Type of feedback"),
  },
  annotations: { readOnlyHint: false },
}, async (params) => {
  const feedbackPath = join(KB_ROOT, "meta", "inbox-feedback.json");
  let feedback: unknown[] = [];
  if (existsSync(feedbackPath)) {
    try { feedback = JSON.parse(readFileSync(feedbackPath, "utf-8")); } catch {}
  }

  feedback.push({
    insight_id: params.insight_id,
    type: params.feedback_type,
    timestamp: new Date().toISOString(),
  });

  require("fs").writeFileSync(feedbackPath, JSON.stringify(feedback, null, 2), "utf-8");

  return { content: [{ type: "text" as const, text: JSON.stringify({ logged: true }) }] };
});

// ─── Start Server ────────────────────────────────────────────────────

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Zuhn MCP server failed:", err);
  process.exit(1);
});

#!/usr/bin/env npx tsx
/**
 * quality-score.ts — Hybrid Insight Quality Scorer (IQS)
 *
 * Combines deterministic topology (embedding novelty) with
 * LLM semantic judgment (retrospective sampling via Opus sub-agent).
 *
 * Architecture boundary respected:
 *   - TypeScript: validates structure, computes embedding distance
 *   - LLM: evaluates semantic quality (stance defensibility, actionability, specificity)
 *
 * Usage:
 *   npx tsx scripts/quality-score.ts                    # Score recent batch (last 24h)
 *   npx tsx scripts/quality-score.ts --sample 20        # Score 20 random recent insights
 *   npx tsx scripts/quality-score.ts --id INS-260328-X  # Score specific insight
 *   npx tsx scripts/quality-score.ts --eval             # Run against Golden Eval Set
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, appendFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import { initDb } from "./lib/db";
import { initVectorTable } from "./lib/vector-search";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const SCORES_FILE = join(KB_ROOT, "meta", "quality-scores.jsonl");

// ─── Types ──────────────────────────────────────────────────────────

interface InsightForScoring {
  id: string;
  title: string;
  stance: string;
  oneLine: string;
  standard: string;
  domain: string;
  topic: string;
  tags: string[];
  filePath: string;
}

interface NoveltyScore {
  insightId: string;
  nearestId: string;
  nearestTitle: string;
  cosineSimilarity: number;
  noveltyScore: number; // 0-2: 0 = duplicate, 1 = related, 2 = novel
}

interface SemanticScore {
  insightId: string;
  stanceDefensibility: number; // 0-3: is the stance a falsifiable directional claim?
  actionability: number;       // 0-3: can someone DO something with this?
  specificity: number;         // 0-2: concrete details vs generic platitude?
  reasoning: string;           // LLM's explanation
  totalSemantic: number;       // 0-8
}

interface InsightQualityScore {
  timestamp: string;
  insightId: string;
  title: string;
  novelty: NoveltyScore;
  semantic: SemanticScore | null; // null if not sampled for LLM review
  totalIQS: number; // 0-10
}

// ─── Novelty Scoring (Deterministic — Embedding Distance) ───────────

function computeNovelty(insightId: string): NoveltyScore | null {
  try {
    const db = initDb();
    initVectorTable(db);

    // First, get this insight's embedding
    const selfRow = db.prepare("SELECT embedding FROM embeddings WHERE id = ?")
      .get(insightId) as { embedding: Buffer } | undefined;

    if (!selfRow) {
      db.close();
      return null;
    }

    // Find nearest neighbors using vec0 MATCH syntax (k=2: self + nearest)
    // vec0 v0.1.x requires `embedding MATCH ?` with a direct value — not a subquery.
    // The <-> operator is only available in later sqlite-vec versions.
    const results = db.prepare(`
      SELECT id, distance
      FROM embeddings
      WHERE embedding MATCH ?
      AND k = 2
    `).all(selfRow.embedding) as { id: string; distance: number }[];

    // Filter out self (distance 0) and take the nearest neighbor
    const result = results.find(r => r.id !== insightId);

    if (!result) {
      db.close();
      return null;
    }

    // Get the nearest insight's title
    const nearest = db.prepare("SELECT title FROM insights WHERE id = ?")
      .get(result.id) as { title: string } | undefined;

    db.close();

    // Convert distance to similarity (vec0 returns cosine distance after L2 normalization)
    const similarity = 1 - result.distance;

    // Score: 0 = near-duplicate (sim > 0.85), 1 = related (0.65-0.85), 2 = novel (< 0.65)
    let noveltyScore: number;
    if (similarity > 0.85) noveltyScore = 0;
    else if (similarity > 0.65) noveltyScore = 1;
    else noveltyScore = 2;

    return {
      insightId,
      nearestId: result.id,
      nearestTitle: nearest?.title || "unknown",
      cosineSimilarity: Math.round(similarity * 1000) / 1000,
      noveltyScore,
    };
  } catch (err) {
    console.error(`[novelty] failed for ${insightId}:`, (err as Error).message);
    return null;
  }
}

// ─── Semantic Scoring (LLM Sampling — Opus Sub-Agent) ───────────────

function scoreSemantic(insight: InsightForScoring): SemanticScore | null {
  const prompt = `You are a ruthless quality reviewer for a knowledge base. Score this insight
on three dimensions. Be harsh — most insights should score 4-6 out of 10, not 8-10.

INSIGHT:
Title: ${insight.title}
Stance: ${insight.stance}
One-line: ${insight.oneLine}
Full: ${insight.standard}
Domain: ${insight.domain}/${insight.topic}

SCORING RUBRIC:

1. STANCE DEFENSIBILITY (0-3):
   0 = No real stance ("X is important", "Y is interesting")
   1 = Vague direction ("X tends to be better than Y")
   2 = Clear directional claim with implicit mechanism ("X causes Y because Z")
   3 = Falsifiable, specific, surprising claim that could be proven wrong

2. ACTIONABILITY (0-3):
   0 = Pure observation, no practical use
   1 = Interesting framing but no clear action
   2 = Clear implication for behavior ("do X instead of Y")
   3 = Specific, implementable tactic with measurable outcome

3. SPECIFICITY (0-2):
   0 = Generic platitude that could apply to anything
   1 = Domain-specific but lacks concrete detail
   2 = Contains specific numbers, named examples, or concrete mechanisms

Respond ONLY with this exact JSON format, nothing else:
{"stance": N, "action": N, "spec": N, "reasoning": "1-2 sentences explaining your scores"}`;

  try {
    const output = execFileSync("claude", ["-p", prompt], {
      cwd: PROJECT_ROOT,
      timeout: 60 * 1000,
      encoding: "utf-8",
      maxBuffer: 1024 * 1024,
    });

    // Extract JSON from output (may have surrounding text)
    const jsonMatch = output.match(/\{[^}]+\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      insightId: insight.id,
      stanceDefensibility: parsed.stance || 0,
      actionability: parsed.action || 0,
      specificity: parsed.spec || 0,
      reasoning: parsed.reasoning || "",
      totalSemantic: (parsed.stance || 0) + (parsed.action || 0) + (parsed.spec || 0),
    };
  } catch {
    return null;
  }
}

// ─── Load Insights ──────────────────────────────────────────────────

async function loadRecentInsights(hours: number = 24): Promise<InsightForScoring[]> {
  const files = await fg("domains/**/*.md", {
    cwd: KB_ROOT,
    absolute: true,
    ignore: ["**/_summary.md", "**/_overview.md"],
  });

  const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000).toISOString().split("T")[0];
  const insights: InsightForScoring[] = [];

  for (const filePath of files) {
    const raw = readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    if (!data.id || !data.date_extracted) continue;
    if (data.date_extracted < cutoff) continue;

    insights.push({
      id: data.id as string,
      title: (data.title as string) || "",
      stance: (data.stance as string) || "",
      oneLine: (data.resolutions as any)?.one_line || "",
      standard: (data.resolutions as any)?.standard || "",
      domain: (data.domain as string) || "",
      topic: (data.topic as string) || "",
      tags: (data.tags as string[]) || [],
      filePath,
    });
  }

  return insights;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const sampleSize = args.includes("--sample")
    ? parseInt(args[args.indexOf("--sample") + 1])
    : 10;
  const specificId = args.includes("--id")
    ? args[args.indexOf("--id") + 1]
    : null;

  console.log("╔══════════════════════════════════════╗");
  console.log("║   Insight Quality Scorer (IQS)       ║");
  console.log("╚══════════════════════════════════════╝");
  console.log();

  // 1. Load insights
  let insights: InsightForScoring[];
  if (specificId) {
    insights = (await loadRecentInsights(720)).filter((i) => i.id === specificId);
    if (insights.length === 0) {
      console.log(`Insight ${specificId} not found.`);
      return;
    }
  } else {
    insights = await loadRecentInsights(48);
    console.log(`Found ${insights.length} recent insights (last 48h).`);

    // Random sample
    if (insights.length > sampleSize) {
      const shuffled = insights.sort(() => Math.random() - 0.5);
      insights = shuffled.slice(0, sampleSize);
    }
    console.log(`Sampling ${insights.length} for quality scoring.`);
  }

  if (insights.length === 0) {
    console.log("No insights to score.");
    return;
  }

  console.log();

  // 2. Score each insight
  const scores: InsightQualityScore[] = [];

  for (let i = 0; i < insights.length; i++) {
    const insight = insights[i];
    console.log(`[${i + 1}/${insights.length}] ${insight.id} — ${insight.title.slice(0, 50)}...`);

    // Novelty (deterministic)
    const novelty = computeNovelty(insight.id);

    // Semantic (LLM — every sampled insight gets scored)
    const semantic = scoreSemantic(insight);

    // Compute total IQS
    const noveltyPoints = novelty?.noveltyScore ?? 1;
    const semanticPoints = semantic?.totalSemantic ?? 4; // default 4/8 if LLM fails
    const totalIQS = Math.round((noveltyPoints + semanticPoints) * 10) / 10;

    const score: InsightQualityScore = {
      timestamp: new Date().toISOString(),
      insightId: insight.id,
      title: insight.title,
      novelty: novelty || { insightId: insight.id, nearestId: "", nearestTitle: "", cosineSimilarity: 0, noveltyScore: 1 },
      semantic,
      totalIQS,
    };

    scores.push(score);

    // Display
    const noveltyLabel = novelty ? `novelty=${novelty.noveltyScore}/2 (nearest: ${novelty.cosineSimilarity})` : "novelty=?";
    const semanticLabel = semantic
      ? `stance=${semantic.stanceDefensibility}/3 action=${semantic.actionability}/3 spec=${semantic.specificity}/2`
      : "semantic=pending";
    console.log(`  ${noveltyLabel}`);
    console.log(`  ${semanticLabel}`);
    console.log(`  IQS: ${totalIQS}/10`);
    console.log();

    // Log to file (dedup: skip if this insight was already scored)
    if (existsSync(SCORES_FILE)) {
      const existing = readFileSync(SCORES_FILE, "utf-8");
      if (existing.includes(`"insightId":"${insight.id}"`)) {
        // Already scored — skip to avoid inflating benchmark averages
      } else {
        appendFileSync(SCORES_FILE, JSON.stringify(score) + "\n");
      }
    } else {
      appendFileSync(SCORES_FILE, JSON.stringify(score) + "\n");
    }
  }

  // 3. Summary
  const avgIQS = scores.reduce((s, sc) => s + sc.totalIQS, 0) / scores.length;
  const avgNovelty = scores.reduce((s, sc) => s + sc.novelty.noveltyScore, 0) / scores.length;
  const avgSemantic = scores
    .filter((sc) => sc.semantic)
    .reduce((s, sc) => s + (sc.semantic?.totalSemantic || 0), 0) / scores.filter((sc) => sc.semantic).length;

  console.log("╔══════════════════════════════════════╗");
  console.log("║        IQS — Batch Results           ║");
  console.log("╠══════════════════════════════════════╣");
  console.log(`║  Insights scored:    ${scores.length.toString().padStart(14)} ║`);
  console.log(`║  Avg IQS:           ${avgIQS.toFixed(1).padStart(12)}/10 ║`);
  console.log(`║  Avg Novelty:       ${avgNovelty.toFixed(1).padStart(13)}/2 ║`);
  console.log(`║  Avg Semantic:      ${avgSemantic.toFixed(1).padStart(13)}/8 ║`);

  // Breakdown
  const lowQuality = scores.filter((sc) => sc.totalIQS < 4);
  const midQuality = scores.filter((sc) => sc.totalIQS >= 4 && sc.totalIQS < 7);
  const highQuality = scores.filter((sc) => sc.totalIQS >= 7);
  console.log(`║  Low (<4):          ${lowQuality.length.toString().padStart(14)} ║`);
  console.log(`║  Mid (4-7):         ${midQuality.length.toString().padStart(14)} ║`);
  console.log(`║  High (>7):         ${highQuality.length.toString().padStart(14)} ║`);
  console.log("╚══════════════════════════════════════╝");

  // Flag low-quality insights
  if (lowQuality.length > 0) {
    console.log("\n⚠ Low-quality insights (review recommended):");
    for (const sc of lowQuality) {
      console.log(`  ${sc.insightId}: ${sc.title.slice(0, 60)} (IQS: ${sc.totalIQS})`);
    }
  }
}

main().catch((err) => {
  console.error("quality-score.ts failed:", err);
  process.exit(1);
});

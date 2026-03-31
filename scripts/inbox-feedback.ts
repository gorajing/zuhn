#!/usr/bin/env npx tsx
/**
 * inbox-feedback.ts — Monthly usage tracking and priority recalibration.
 *
 * Analyzes which autonomously-extracted insights were actually used
 * (referenced in decisions, compressed into principles, cited in tensions)
 * and adjusts priority scoring weights for future ingestion.
 *
 * Usage:
 *   npx tsx scripts/inbox-feedback.ts
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import { initDb } from "./lib/db";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const META_DIR = join(KB_ROOT, "meta");
const FEEDBACK_PATH = join(META_DIR, "inbox-feedback.json");

async function main(): Promise<void> {
  console.log(`
╔══════════════════════════════════════╗
║     Zuhn — Feedback Analysis         ║
╚══════════════════════════════════════╝
`);

  const db = initDb();

  // 1. Get all committed inbox items with their source IDs
  const committed = db
    .prepare(
      "SELECT id, source_id, source_channel, processing_mode, insights_extracted, queued_at FROM inbox_queue WHERE status = 'committed' AND source_id IS NOT NULL"
    )
    .all() as Array<{
    id: string;
    source_id: string;
    source_channel: string;
    processing_mode: string;
    insights_extracted: number;
    queued_at: string;
  }>;

  console.log(`Committed inbox items: ${committed.length}\n`);

  if (committed.length === 0) {
    console.log("No committed items to analyze. Run the daemon first.");
    return;
  }

  // 2. For each source, check if its insights were used
  const principleFiles = await fg("**/*.md", {
    cwd: join(KB_ROOT, "principles"),
    absolute: true,
  });

  const tensionFiles = await fg("*.md", {
    cwd: join(KB_ROOT, "tensions"),
    absolute: true,
    ignore: ["_index.md"],
  });

  const decisionFiles = await fg("*.md", {
    cwd: join(KB_ROOT, "decisions"),
    absolute: true,
  });

  // Build a set of all insight IDs referenced in principles, tensions, decisions
  const referencedIds = new Set<string>();

  for (const f of principleFiles) {
    const raw = readFileSync(f, "utf-8");
    const matches = raw.match(/INS-\d{6}-[A-F0-9]{4}/g);
    if (matches) matches.forEach((id) => referencedIds.add(id));
  }

  for (const f of tensionFiles) {
    const raw = readFileSync(f, "utf-8");
    const matches = raw.match(/INS-\d{6}-[A-F0-9]{4}/g);
    if (matches) matches.forEach((id) => referencedIds.add(id));
  }

  for (const f of decisionFiles) {
    const raw = readFileSync(f, "utf-8");
    const matches = raw.match(/INS-\d{6}-[A-F0-9]{4}/g);
    if (matches) matches.forEach((id) => referencedIds.add(id));
  }

  // Also load MCP feedback log
  let mcpFeedback: Array<{ insight_id: string; type: string }> = [];
  if (existsSync(FEEDBACK_PATH)) {
    try {
      mcpFeedback = JSON.parse(readFileSync(FEEDBACK_PATH, "utf-8"));
    } catch {}
  }
  for (const fb of mcpFeedback) {
    if (fb.type === "used" || fb.type === "cited") {
      referencedIds.add(fb.insight_id);
    }
  }

  console.log(`Referenced insight IDs (in principles/tensions/decisions): ${referencedIds.size}\n`);

  // 3. For each committed source, find its insights and check usage
  const channelStats: Record<
    string,
    { total: number; used: number; insights: number }
  > = {};
  const modeStats: Record<
    string,
    { total: number; used: number; insights: number }
  > = {};

  for (const item of committed) {
    const channel = item.source_channel;
    const mode = item.processing_mode;

    if (!channelStats[channel]) channelStats[channel] = { total: 0, used: 0, insights: 0 };
    if (!modeStats[mode]) modeStats[mode] = { total: 0, used: 0, insights: 0 };

    channelStats[channel].total++;
    modeStats[mode].total++;
    channelStats[channel].insights += item.insights_extracted;
    modeStats[mode].insights += item.insights_extracted;

    // Check if any insights from this source are referenced
    const sourceInsights = db
      .prepare("SELECT id FROM insights WHERE file_path LIKE ?")
      .all(`%${item.source_id}%`) as Array<{ id: string }>;

    // Also check by looking at insights created around the same time
    // (source_id might not be in file_path)
    const hasUsed = sourceInsights.some((si) => referencedIds.has(si.id));
    if (hasUsed) {
      channelStats[channel].used++;
      modeStats[mode].used++;
    }
  }

  // 4. Report
  console.log("## Usage by Source Channel\n");
  for (const [channel, stats] of Object.entries(channelStats)) {
    const rate = stats.total > 0 ? ((stats.used / stats.total) * 100).toFixed(1) : "0.0";
    console.log(
      `  ${channel}: ${stats.total} sources, ${stats.insights} insights, ${rate}% usage rate`
    );
  }

  console.log("\n## Usage by Processing Mode\n");
  for (const [mode, stats] of Object.entries(modeStats)) {
    const rate = stats.total > 0 ? ((stats.used / stats.total) * 100).toFixed(1) : "0.0";
    console.log(
      `  ${mode}: ${stats.total} sources, ${stats.insights} insights, ${rate}% usage rate`
    );
  }

  // 5. Write report to meta
  const report = {
    generated_at: new Date().toISOString(),
    total_committed: committed.length,
    total_referenced: referencedIds.size,
    by_channel: channelStats,
    by_mode: modeStats,
    recommendations: [] as string[],
  };

  // Generate recommendations
  for (const [channel, stats] of Object.entries(channelStats)) {
    const rate = stats.total > 0 ? stats.used / stats.total : 0;
    if (rate < 0.1 && stats.total >= 5) {
      report.recommendations.push(
        `Channel "${channel}" has ${(rate * 100).toFixed(0)}% usage — consider reducing priority weight.`
      );
    }
    if (rate > 0.5 && stats.total >= 3) {
      report.recommendations.push(
        `Channel "${channel}" has ${(rate * 100).toFixed(0)}% usage — high value, consider increasing priority weight.`
      );
    }
  }

  writeFileSync(
    join(META_DIR, "inbox-feedback-report.json"),
    JSON.stringify(report, null, 2),
    "utf-8"
  );

  if (report.recommendations.length > 0) {
    console.log("\n## Recommendations\n");
    for (const rec of report.recommendations) {
      console.log(`  → ${rec}`);
    }
  }

  console.log(`\nReport written to meta/inbox-feedback-report.json`);
}

main().catch((err) => {
  console.error("Feedback analysis error:", err);
  process.exit(1);
});

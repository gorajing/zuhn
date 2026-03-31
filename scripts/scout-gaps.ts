#!/usr/bin/env npx tsx
/**
 * scout-gaps.ts — Gap source discovery.
 *
 * Finds the sparsest topics in the knowledge base and suggests
 * high-quality sources to fill them. Creates bounties for human approval.
 *
 * Usage:
 *   npx tsx scripts/scout-gaps.ts          — Top 10 gaps
 *   npx tsx scripts/scout-gaps.ts --top 5  — Top 5 gaps
 */

import { execFile } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import fg from "fast-glob";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const META_DIR = join(KB_ROOT, "meta");
const BOUNTIES_PATH = join(META_DIR, "bounties.json");
const FLAGS_PATH = join(META_DIR, "flags.md");

const topN = parseInt(
  process.argv.find((a, i) => process.argv[i - 1] === "--top") ?? "10",
  10
);

interface GapTopic {
  topic: string;
  insightCount: number;
  gapAppearances: number;
  score: number;
}

function generateBountyId(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hash = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `BOUNTY-${yy}${mm}${dd}-${hash}`;
}

async function findGaps(): Promise<GapTopic[]> {
  if (!existsSync(FLAGS_PATH)) {
    console.log("No flags.md found. Run npm run learn first.");
    return [];
  }

  const flags = readFileSync(FLAGS_PATH, "utf-8");
  const gapSection = flags.match(/## GAP\n([\s\S]*?)(?=## |$)/)?.[1] ?? "";

  // Parse gap lines: "- domain/topic has N insights but related domain/topic has only M"
  const gapCounts: Record<string, { count: number; appearances: number }> = {};

  for (const line of gapSection.split("\n")) {
    const match = line.match(/related (\S+) has only (\d+)/);
    if (match) {
      const topic = match[1];
      const count = parseInt(match[2], 10);
      if (!gapCounts[topic]) {
        gapCounts[topic] = { count, appearances: 0 };
      }
      gapCounts[topic].appearances++;
    }
  }

  // Score and sort
  const gaps: GapTopic[] = Object.entries(gapCounts).map(
    ([topic, { count, appearances }]) => ({
      topic,
      insightCount: count,
      gapAppearances: appearances,
      score: appearances * (1 / Math.max(count, 1)),
    })
  );

  gaps.sort((a, b) => b.score - a.score);
  return gaps.slice(0, topN);
}

async function searchSources(gap: GapTopic): Promise<string> {
  const promptFile = `/tmp/zuhn-gap-${gap.topic.replace("/", "-")}.md`;
  const prompt = `The Zuhn knowledge base has a gap in "${gap.topic}".
It currently has ${gap.insightCount} insights while related topics have significantly more.
This gap appears ${gap.gapAppearances} times in cross-topic analysis.

Find 5 high-quality sources (YouTube talks, blog posts, research papers,
podcast episodes) that would provide deep, actionable insights on this topic.

Prefer:
- Long-form content (>20 min talks, >2000 word articles)
- Named experts with credentials in this specific area
- Sources that offer CONTRARIAN or UNEXPECTED perspectives
- Content from the last 2 years

For each source, write a JSON file to /tmp/zuhn-gap-result-${gap.topic.replace("/", "-")}.json:
{
  "suggested_sources": [
    {
      "url": "https://...",
      "title": "Title of the source",
      "author": "Author name and credentials",
      "quality_rationale": "Why this source is high-quality for this topic",
      "estimated_yield": 8
    }
  ]
}

Use WebSearch to find sources. Write the result using Bash: cat > /tmp/zuhn-gap-result-${gap.topic.replace("/", "-")}.json << 'JSONEOF' ... JSONEOF
Be thorough and selective.`;

  await writeFile(promptFile, prompt, "utf-8");

  return new Promise((resolve) => {
    execFile(
      "claude",
      [
        "--print",
        "--model",
        "opus",
        "--max-turns",
        "10",
        "--allowedTools",
        "WebSearch,Bash,Read,Write",
        "-p",
        `Execute the exact instructions in ${promptFile}`,
      ],
      {
        cwd: PROJECT_ROOT,
        timeout: 3 * 60 * 1000,
        maxBuffer: 5 * 1024 * 1024,
      },
      (error) => {
        try { require("fs").unlinkSync(promptFile); } catch {}
        // Read result from file
        const resultFile = `/tmp/zuhn-gap-result-${gap.topic.replace("/", "-")}.json`;
        let result = '{"suggested_sources":[]}';
        try {
          result = readFileSync(resultFile, "utf-8");
          require("fs").unlinkSync(resultFile);
        } catch {}
        resolve(error ? '{"suggested_sources":[]}' : result);
      }
    );
  });
}

function parseSources(output: string): Array<{
  url: string;
  title: string;
  author: string;
  quality_rationale: string;
  estimated_yield: number;
}> {
  const match = output.match(/\{[\s\S]*"suggested_sources"[\s\S]*\}/);
  if (match) {
    try {
      const parsed = JSON.parse(match[0]);
      return parsed.suggested_sources || [];
    } catch {}
  }
  return [];
}

async function main(): Promise<void> {
  console.log(`
╔══════════════════════════════════════╗
║       Zuhn — Gap Scout               ║
╚══════════════════════════════════════╝
`);

  const gaps = await findGaps();
  if (gaps.length === 0) {
    console.log("No gap flags found.");
    return;
  }

  console.log(`Scouting sources for ${gaps.length} gap topics:\n`);
  for (const g of gaps) {
    console.log(`  ${g.topic}: ${g.insightCount} insights, ${g.gapAppearances} gap appearances`);
  }
  console.log();

  // Load existing bounties
  let bounties: Array<Record<string, unknown>> = [];
  if (existsSync(BOUNTIES_PATH)) {
    try { bounties = JSON.parse(readFileSync(BOUNTIES_PATH, "utf-8")); } catch {}
  }

  const today = new Date().toISOString().slice(0, 10);
  let totalSources = 0;

  for (const gap of gaps) {
    console.log(`\n── Scouting: ${gap.topic} (${gap.insightCount} insights) ──`);

    const output = await searchSources(gap);
    const sources = parseSources(output);

    if (sources.length > 0) {
      const bounty = {
        id: generateBountyId(),
        type: "gap-fill",
        target_topic: gap.topic,
        current_insights: gap.insightCount,
        gap_appearances: gap.gapAppearances,
        suggested_sources: sources,
        created_at: today,
        status: "pending",
      };

      bounties.push(bounty);
      totalSources += sources.length;

      for (const s of sources) {
        console.log(`  📎 ${s.title.slice(0, 60)} — ${s.author.slice(0, 40)}`);
        console.log(`     Est. yield: ${s.estimated_yield} insights`);
      }
    } else {
      console.log(`  No sources found.`);
    }
  }

  writeFileSync(BOUNTIES_PATH, JSON.stringify(bounties, null, 2), "utf-8");

  console.log(`
── Gap Scout Summary ──
  Topics scouted: ${gaps.length}
  Sources found: ${totalSources}
  Bounties written: → meta/bounties.json
  ACTION: Review in morning briefing. Run /ingest on approved URLs.
`);
}

main().catch((err) => {
  console.error("Gap Scout error:", err);
  process.exit(1);
});

#!/usr/bin/env npx tsx
/**
 * extract-session.ts — Process queued session insights
 *
 * Reads /tmp/zuhn-session-queue.jsonl (written by zuhn_queue_session_insight
 * MCP tool), formats the observations into extraction-ready JSON, and routes
 * through the standard extract.ts pipeline.
 *
 * Usage: npm run extract-session [--dry-run]
 */

import { readFileSync, existsSync, unlinkSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const PROJECT_ROOT = join(__dirname, "..");
const QUEUE_PATH = "/tmp/zuhn-session-queue.jsonl";

interface QueuedInsight {
  observation: string;
  domain: string | null;
  topic: string | null;
  stance: string | null;
  queued_at: string;
}

function parseArgs(argv: string[]): { dryRun: boolean } {
  return { dryRun: argv.includes("--dry-run") };
}

async function main(): Promise<void> {
  const { dryRun } = parseArgs(process.argv);

  // 1. Read queue
  if (!existsSync(QUEUE_PATH)) {
    console.log("No session queue found at /tmp/zuhn-session-queue.jsonl");
    console.log("Use the zuhn_queue_session_insight MCP tool to queue insights during a session.");
    process.exit(0);
  }

  const raw = readFileSync(QUEUE_PATH, "utf-8").trim();
  if (!raw) {
    console.log("Session queue is empty.");
    process.exit(0);
  }

  const lines = raw.split("\n").filter(Boolean);
  const queued: QueuedInsight[] = [];

  for (const line of lines) {
    try {
      queued.push(JSON.parse(line) as QueuedInsight);
    } catch {
      console.warn(`Warning: Skipping malformed queue entry: ${line.slice(0, 80)}`);
    }
  }

  console.log(`Found ${queued.length} queued insight(s) from session.\n`);

  if (dryRun) {
    console.log("── Dry Run ──");
    for (const q of queued) {
      console.log(`  Domain: ${q.domain ?? "(auto-detect)"}`);
      console.log(`  Topic:  ${q.topic ?? "(auto-detect)"}`);
      console.log(`  Stance: ${q.stance ?? "(needs stance)"}`);
      console.log(`  Obs:    ${q.observation.slice(0, 120)}`);
      console.log();
    }
    process.exit(0);
  }

  // 2. Format as extraction JSON
  const insights = queued.map((q, i) => ({
    domain: q.domain ?? "ai-development",
    topic: q.topic ?? "session-observations",
    title: q.observation.slice(0, 80),
    stance: q.stance ?? q.observation.slice(0, 120),
    actionability: "reference" as const,
    confidence: "medium" as const,
    shelf_life: "evergreen" as const,
    tags: ["session-insight"],
    resolutions: {
      one_line: q.observation.slice(0, 200),
      standard: q.observation,
    },
  }));

  const extractJson = {
    source_summary: `Session insights queued via MCP tool (${queued.length} observations from ${queued[0]?.queued_at?.slice(0, 10) ?? "unknown"})`,
    insights,
  };

  // 3. Write to temp file
  const tmpFile = `/tmp/zuhn-extract-session-${Date.now()}.json`;
  await writeFile(tmpFile, JSON.stringify(extractJson, null, 2), "utf-8");
  console.log(`Written extraction JSON to ${tmpFile}`);

  // 4. Run extract.ts
  console.log("\nRunning extract.ts...");
  try {
    execFileSync("npx", ["tsx", "scripts/extract.ts", "--file", tmpFile, "--post-ingest"], {
      stdio: "inherit",
      cwd: PROJECT_ROOT,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Extract failed: ${msg}`);
    process.exit(1);
  }

  // 5. Clear the queue
  unlinkSync(QUEUE_PATH);
  console.log(`\nCleared session queue. ${queued.length} insight(s) extracted.`);
}

main().catch((err) => {
  console.error("extract-session.ts failed:", err);
  process.exit(1);
});

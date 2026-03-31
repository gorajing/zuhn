#!/usr/bin/env npx tsx
/**
 * daemon.ts — The Autonomous Knowledge Metabolism orchestrator.
 *
 * Phase 19: Watches the inbox for new sources, spawns headless Claude Code
 * sub-agents for extraction, and manages the full Titanium Pipeline
 * (ensemble extraction → merge → verify → deep read).
 *
 * Three layers of reliability:
 *   Layer 1: File watcher (chokidar) — instant detection
 *   Layer 2: Cron sweep (setInterval) — crash recovery every 30 min
 *   Layer 3: SessionStart hook — surfaces results in morning briefing
 *
 * Usage:
 *   npm run daemon:start    — Start the daemon
 *   npm run daemon:status   — Show queue depth and agent count
 *   npm run daemon:stop     — Graceful shutdown
 */

import { execFile, ChildProcess } from "node:child_process";
import { watch, existsSync, readdirSync, readFileSync } from "node:fs";
import { writeFile, mkdir, unlink, rename } from "node:fs/promises";
import { join, extname } from "node:path";
import { initDb } from "./lib/db";
import { generateInsightId } from "./lib/generate-id";
import type Database from "better-sqlite3";

// ─── Configuration ──────────────────────────────────────────────────

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const INBOX_DIR = join(KB_ROOT, "inbox");
const PROCESSED_DIR = join(INBOX_DIR, "processed");
const REVIEW_DIR = join(INBOX_DIR, "review");
const FAILED_DIR = join(INBOX_DIR, "failed");
const META_DIR = join(KB_ROOT, "meta");
const PID_FILE = "/tmp/zuhn-daemon.pid";
const LOG_FILE = join(META_DIR, "daemon.log");
const STATUS_FILE = join(META_DIR, "daemon-status.json");

const MAX_CONCURRENT_AGENTS = parseInt(
  process.env.ZUHN_MAX_AGENTS ?? "3",
  10
);
const CRON_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes
const AGENT_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes per agent
const WORD_COUNT_HEAVY_THRESHOLD = 3000;
const PRIORITY_HEAVY_THRESHOLD = 5;

const AUDIO_EXTS = new Set([".m4a", ".mp3", ".wav", ".ogg", ".webm", ".flac"]);
const PDF_EXTS = new Set([".pdf"]);

// ─── State ──────────────────────────────────────────────────────────

let db: Database.Database;
let activeAgents: Map<string, ChildProcess> = new Map(); // inboxId → process
let backoffSeconds = 60;
let consecutiveSuccesses = 0;
let shuttingDown = false;

// ─── Logging ────────────────────────────────────────────────────────

async function log(level: string, msg: string): Promise<void> {
  const line = `[${new Date().toISOString()}] [${level}] ${msg}`;
  console.log(line);
  try {
    const { appendFile } = await import("node:fs/promises");
    await appendFile(LOG_FILE, line + "\n");
  } catch {
    // Logging should never crash the daemon
  }
}

// ─── Queue Operations (SQLite) ──────────────────────────────────────

function generateInboxId(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hash = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `INB-${yy}${mm}${dd}-${hash}`;
}

function enqueue(
  url: string | null,
  filePath: string | null,
  channel: string = "folder"
): string {
  const id = generateInboxId();
  const type = filePath
    ? AUDIO_EXTS.has(extname(filePath).toLowerCase())
      ? "audio"
      : PDF_EXTS.has(extname(filePath).toLowerCase())
        ? "pdf"
        : "file"
    : "url";

  db.prepare(`
    INSERT INTO inbox_queue (id, url, type, source_channel, file_path)
    VALUES (?, ?, ?, ?, ?)
  `).run(id, url, type, channel, filePath);

  return id;
}

function getNextPending(): InboxItem | undefined {
  // Get the next item that needs processing — any non-terminal state
  // Terminal states: committed, failed, filtered, review
  return db
    .prepare(
      `SELECT * FROM inbox_queue
       WHERE status NOT IN ('committed', 'failed', 'filtered', 'review')
       ORDER BY
         CASE WHEN status != 'pending' THEN 0 ELSE 1 END,
         priority_score DESC,
         queued_at ASC
       LIMIT 1`
    )
    .get() as InboxItem | undefined;
}

function updateStatus(
  id: string,
  status: string,
  extra: Record<string, unknown> = {}
): void {
  const sets = ["status = ?", "updated_at = datetime('now')"];
  const values: unknown[] = [status];

  for (const [key, val] of Object.entries(extra)) {
    sets.push(`${key} = ?`);
    values.push(val);
  }

  values.push(id);
  db.prepare(
    `UPDATE inbox_queue SET ${sets.join(", ")} WHERE id = ?`
  ).run(...values);
}

function incrementAttempts(id: string, error: string): void {
  db.prepare(
    `UPDATE inbox_queue SET attempts = attempts + 1, last_error = ?,
     updated_at = datetime('now') WHERE id = ?`
  ).run(error, id);
}

interface InboxItem {
  id: string;
  url: string | null;
  type: string;
  source_channel: string;
  processing_mode: string;
  priority_score: number;
  status: string;
  file_path: string | null;
  source_id: string | null;
  attempts: number;
  last_error: string | null;
  word_count: number | null;
  insights_extracted: number;
  agent_a_file: string | null;
  agent_b_file: string | null;
  merged_file: string | null;
  deep_read_findings: string | null;
  queued_at: string;
  updated_at: string;
}

// ─── Agent Spawning ─────────────────────────────────────────────────

/**
 * Spawn a headless Claude Code sub-agent.
 * Writes the prompt to a temp file to avoid shell escaping issues.
 * Tracks the ChildProcess for zombie protection.
 */
async function spawnOpusAgent(
  inboxId: string,
  prompt: string
): Promise<{ success: boolean; output: string }> {
  // Write prompt to temp file (avoids ARG_MAX and shell escaping)
  const promptFile = `/tmp/zuhn-task-${inboxId}-${Date.now()}.md`;
  await writeFile(promptFile, prompt, "utf-8");

  return new Promise((resolve) => {
    const proc = execFile(
      "claude",
      [
        "--print",
        "--model",
        "opus",
        "--max-turns",
        "25",
        "-p",
        `Execute the exact instructions in ${promptFile}`,
      ],
      {
        cwd: PROJECT_ROOT,
        timeout: AGENT_TIMEOUT_MS,
        maxBuffer: 10 * 1024 * 1024, // 10MB output buffer
      },
      (error, stdout, stderr) => {
        // Clean up prompt file
        unlink(promptFile).catch(() => {});

        // Remove from active agents
        activeAgents.delete(inboxId);

        if (error) {
          const errMsg = stderr || error.message;
          // Check for rate limiting
          if (
            errMsg.includes("429") ||
            errMsg.includes("rate") ||
            errMsg.includes("Too Many Requests")
          ) {
            log("WARN", `Rate limited on ${inboxId}. Backing off ${backoffSeconds}s.`);
            consecutiveSuccesses = 0;
            resolve({ success: false, output: `RATE_LIMITED: ${errMsg}` });
          } else {
            resolve({ success: false, output: errMsg });
          }
        } else {
          consecutiveSuccesses++;
          if (consecutiveSuccesses >= 3 && backoffSeconds > 60) {
            backoffSeconds = Math.max(60, backoffSeconds / 2);
            log("INFO", `Backoff reduced to ${backoffSeconds}s after 3 successes.`);
          }
          resolve({ success: true, output: stdout });
        }
      }
    );

    // Track for zombie protection
    activeAgents.set(inboxId, proc);
  });
}

// ─── Pipeline Steps ─────────────────────────────────────────────────

async function processItem(item: InboxItem): Promise<void> {
  if (shuttingDown) return;

  try {
    switch (item.status) {
      case "pending":
        await stepPrefilter(item);
        break;
      case "ingesting":
        await stepIngest(item);
        break;
      case "extracting":
        await stepExtract(item);
        break;
      case "extracting_a":
        if (!item.agent_a_file) {
          await stepExtractA(item);
        } else {
          await stepExtractB(item);
        }
        break;
      case "extracting_b":
        await stepMerge(item);
        break;
      case "merging":
        await stepVerify(item);
        break;
      case "verifying":
        await stepDeepRead(item);
        break;
      case "deep_reading":
        await stepCommit(item);
        break;
      // Fast mode states
      case "extracting":
        await stepCommitFast(item);
        break;
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    await log("ERROR", `Item ${item.id} failed at ${item.status}: ${msg}`);
    incrementAttempts(item.id, msg);

    const updated = db
      .prepare("SELECT attempts FROM inbox_queue WHERE id = ?")
      .get(item.id) as { attempts: number } | undefined;

    if (updated && updated.attempts >= 3) {
      updateStatus(item.id, "failed");
      await log("ERROR", `Item ${item.id} permanently failed after 3 attempts.`);
    }
  }
}

async function stepPrefilter(item: InboxItem): Promise<void> {
  await log("INFO", `Pre-filtering ${item.id}: ${item.url || item.file_path}`);

  // Check for duplicate URL
  if (item.url) {
    const existing = db
      .prepare("SELECT id FROM inbox_queue WHERE url = ? AND id != ? AND status = 'committed'")
      .get(item.url, item.id);
    if (existing) {
      updateStatus(item.id, "filtered", { last_error: "Duplicate URL" });
      await log("INFO", `Filtered ${item.id}: duplicate URL.`);
      return;
    }
  }

  // Pass pre-filter → move to ingesting (next loop picks it up)
  updateStatus(item.id, "ingesting");
}

async function stepIngest(item: InboxItem): Promise<void> {
  await log("INFO", `Ingesting ${item.id}...`);

  const source = item.url || item.file_path;
  if (!source) {
    updateStatus(item.id, "failed", { last_error: "No URL or file path" });
    return;
  }

  // Run ingest.ts mechanically (no agent needed)
  const result = await new Promise<{ success: boolean; output: string }>(
    (resolve) => {
      execFile(
        "npx",
        ["tsx", "scripts/ingest.ts", source],
        { cwd: PROJECT_ROOT, timeout: 5 * 60 * 1000 },
        (error, stdout, stderr) => {
          if (error) {
            resolve({ success: false, output: stderr || error.message });
          } else {
            resolve({ success: true, output: stdout });
          }
        }
      );
    }
  );

  if (!result.success) {
    // "Already ingested" is a success — extract the existing SRC-ID
    const alreadyMatch = result.output.match(
      /already ingested as (SRC-\d{6}-[A-F0-9]{4})/
    );
    if (alreadyMatch) {
      await log("INFO", `${item.id} already ingested as ${alreadyMatch[1]}. Skipping to extraction.`);
      // Look up word count from existing source file
      const srcFiles = require("fast-glob").sync(
        `${KB_ROOT}/sources/**/*.md`,
        { absolute: true }
      ) as string[];
      for (const sf of srcFiles) {
        const content = readFileSync(sf, "utf-8");
        if (content.includes(alreadyMatch[1])) {
          const wc = content.match(/word_count: (\d+)/);
          if (wc) {
            result.output += `\nWord count: ${wc[1]}`;
          }
          break;
        }
      }
      result.success = true;
    } else {
      incrementAttempts(item.id, result.output);
      await log("ERROR", `Ingest failed for ${item.id}: ${result.output}`);
      return;
    }
  }

  // Extract SRC-ID and word count from output
  const srcMatch = result.output.match(/SRC-\d{6}-[A-F0-9]{4}/);
  const wordMatch = result.output.match(/Word count: ([\d,]+)|word_count: ([\d,]+)|([\d,]+) words/);
  const sourceId = srcMatch?.[0] ?? null;
  const wordCount = wordMatch
    ? parseInt((wordMatch[1] || wordMatch[2] || wordMatch[3]).replace(/,/g, ""), 10)
    : null;

  // Determine processing mode
  let mode = item.processing_mode;
  if (mode === "auto") {
    const isHeavy =
      (wordCount && wordCount > WORD_COUNT_HEAVY_THRESHOLD) ||
      item.type === "audio" ||
      item.type === "pdf" ||
      item.priority_score > PRIORITY_HEAVY_THRESHOLD;
    mode = isHeavy ? "heavy" : "fast";
  }

  updateStatus(item.id, mode === "heavy" ? "extracting_a" : "extracting", {
    source_id: sourceId,
    word_count: wordCount,
    processing_mode: mode,
  });

  await log(
    "INFO",
    `Ingested ${item.id} as ${sourceId} (${wordCount} words, mode: ${mode}).`
  );
}

async function stepExtract(item: InboxItem): Promise<void> {
  // Fast mode: single agent
  await log("INFO", `Fast extraction for ${item.id} (${item.source_id})...`);

  const prompt = `Read the source file for ${item.source_id} in the Zuhn knowledge base at ${PROJECT_ROOT}.
Find it with: grep -rl "${item.source_id}" ${KB_ROOT}/sources/

Extract 5-12 insights following the workflow in skills/extract/SKILL.md.
Check existing topics: ls ${KB_ROOT}/domains/*/
Every insight needs a STANCE — a directional claim that could be true or false.
Write JSON to /tmp/zuhn-extract-${item.source_id}.json
Run: npx tsx scripts/extract.ts --source ${item.source_id} --file /tmp/zuhn-extract-${item.source_id}.json
Do NOT run --post-ingest.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    // Count insights from output
    const countMatch = result.output.match(/Created: (\d+)/);
    const count = countMatch ? parseInt(countMatch[1], 10) : 0;
    updateStatus(item.id, "committed", { insights_extracted: count });
    await log("INFO", `Fast extraction complete for ${item.id}: ${count} insights.`);
  } else if (result.output.startsWith("RATE_LIMITED")) {
    // Don't increment attempts for rate limits — just pause
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    incrementAttempts(item.id, result.output);
  }
}

async function stepExtractB(item: InboxItem): Promise<void> {
  // Heavy mode: Agent B (independent, different focus)
  await log("INFO", `Extraction Agent B for ${item.id}...`);

  const prompt = `Read the source file for ${item.source_id} in the Zuhn knowledge base at ${PROJECT_ROOT}.
Find it with: grep -rl "${item.source_id}" ${KB_ROOT}/sources/

Extract 5-12 insights following skills/extract/SKILL.md.
Check existing topics: ls ${KB_ROOT}/domains/*/

IMPORTANT: Focus on NON-OBVIOUS insights — counter-intuitive claims, tensions with conventional wisdom, and cross-domain applications. Prioritize insights that would SURPRISE someone familiar with the topic.

Every insight needs a STANCE. Write JSON to /tmp/zuhn-extract-B-${item.source_id}.json
Do NOT run extract.ts — just write the JSON file.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    updateStatus(item.id, "merging", {
      agent_b_file: `/tmp/zuhn-extract-B-${item.source_id}.json`,
    });
    await log("INFO", `Agent B complete for ${item.id}.`);
  } else if (result.output.startsWith("RATE_LIMITED")) {
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    incrementAttempts(item.id, result.output);
  }
}

// stepExtractA is the first heavy mode extraction
// Called when status is "extracting_a"
// (processItem routes pending → prefilter → ingest → extracting_a)
// The actual Agent A extraction:
async function stepExtractA(item: InboxItem): Promise<void> {
  await log("INFO", `Extraction Agent A for ${item.id} (${item.source_id})...`);

  const prompt = `Read the source file for ${item.source_id} in the Zuhn knowledge base at ${PROJECT_ROOT}.
Find it with: grep -rl "${item.source_id}" ${KB_ROOT}/sources/

Extract 5-12 insights following skills/extract/SKILL.md.
Check existing topics: ls ${KB_ROOT}/domains/*/
Every insight needs a STANCE — a directional claim that could be true or false.
Write JSON to /tmp/zuhn-extract-A-${item.source_id}.json
Do NOT run extract.ts — just write the JSON file.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    // Stay at extracting_a — just set agent_a_file.
    // Next loop: extracting_a + agent_a_file → runs Agent B.
    updateStatus(item.id, "extracting_a", {
      agent_a_file: `/tmp/zuhn-extract-A-${item.source_id}.json`,
    });
    await log("INFO", `Agent A complete for ${item.id}. Proceeding to Agent B.`);
  } else if (result.output.startsWith("RATE_LIMITED")) {
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    incrementAttempts(item.id, result.output);
  }
}

async function stepMerge(item: InboxItem): Promise<void> {
  await log("INFO", `Merging ensemble results for ${item.id}...`);

  const prompt = `You have two independent extraction results for ${item.source_id}.

Agent A: ${item.agent_a_file}
Agent B: ${item.agent_b_file}

Read both JSON files. Merge them:
1. Insights both agents found (similar title/stance): keep the better version, mark confidence "high"
2. Insights only one agent found: keep, mark confidence "medium"
3. Remove exact duplicates
4. Ensure all insights have defensible stances (not descriptions)

Write merged result to /tmp/zuhn-extract-merged-${item.source_id}.json

Use the same JSON format as the input files. Output the merged JSON only.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    updateStatus(item.id, "verifying", {
      merged_file: `/tmp/zuhn-extract-merged-${item.source_id}.json`,
    });
    await log("INFO", `Merge complete for ${item.id}.`);
  } else if (result.output.startsWith("RATE_LIMITED")) {
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    incrementAttempts(item.id, result.output);
  }
}

async function stepVerify(item: InboxItem): Promise<void> {
  await log("INFO", `Verifying extraction quality for ${item.id}...`);

  const prompt = `You are a quality verifier for the Zuhn knowledge base at ${PROJECT_ROOT}.
Review the extraction at ${item.merged_file} for ${item.source_id}.

Check EACH insight:
- Stance is a directional claim (could be true or false), NOT a description
- Topic maps to an existing topic (run: ls ${KB_ROOT}/domains/*/)
- Confidence level is calibrated (not all "high")
- Tags are meaningful and consistent
- one_line and standard resolutions are substantive

Fix any issues you find directly in the JSON.
Write verified JSON to /tmp/zuhn-extract-verified-${item.source_id}.json
Then run: npx tsx scripts/extract.ts --source ${item.source_id} --file /tmp/zuhn-extract-verified-${item.source_id}.json

Report: N insights passed, M fixed, K flagged.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    const countMatch = result.output.match(/Created: (\d+)/);
    const count = countMatch ? parseInt(countMatch[1], 10) : 0;

    // Check if priority warrants deep read
    if (item.priority_score > 8) {
      updateStatus(item.id, "deep_reading", { insights_extracted: count });
      await log("INFO", `Verified ${item.id}: ${count} insights. Proceeding to deep read.`);
    } else {
      updateStatus(item.id, "committed", { insights_extracted: count });
      await log("INFO", `Verified and committed ${item.id}: ${count} insights.`);
    }
  } else if (result.output.startsWith("RATE_LIMITED")) {
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    // Verification failure → review queue
    const attempts = (item.attempts || 0) + 1;
    if (attempts >= 2) {
      updateStatus(item.id, "review", { last_error: result.output });
      await log("WARN", `${item.id} sent to review after verification failure.`);
    } else {
      incrementAttempts(item.id, result.output);
    }
  }
}

async function stepDeepRead(item: InboxItem): Promise<void> {
  await log("INFO", `Deep reading ${item.id} for tensions and connections...`);

  const prompt = `You are a deep reader for the Zuhn knowledge base at ${PROJECT_ROOT}.
Source ${item.source_id} was just extracted with ${item.insights_extracted} insights.

Search for connections to existing knowledge:

1. TENSIONS: Search for insights that contradict newly extracted ones:
   npx tsx scripts/search.ts "[key phrase from new insight]" --hybrid

2. SUPPORTING EVIDENCE: Do new insights strengthen existing principles?
   Check: ls ${KB_ROOT}/principles/

3. CROSS-DOMAIN: Do insights from this source's domain have unexpected
   applications in other domains?

Write findings to /tmp/zuhn-deep-read-${item.source_id}.json:
{
  "source_id": "${item.source_id}",
  "potential_tensions": [{"new_insight": "...", "existing": "...", "reason": "..."}],
  "supporting_evidence": [{"new_insight": "...", "principle": "...", "how": "..."}],
  "cross_domain": [{"insight": "...", "target_domain": "...", "connection": "..."}]
}

Be selective — only flag genuinely surprising or high-value findings.`;

  const result = await spawnOpusAgent(item.id, prompt);

  if (result.success) {
    updateStatus(item.id, "committed", {
      deep_read_findings: `/tmp/zuhn-deep-read-${item.source_id}.json`,
    });
    await log("INFO", `Deep read complete for ${item.id}.`);

    // Append findings to meta/inbox-deep-reads.json
    try {
      const deepReadPath = join(META_DIR, "inbox-deep-reads.json");
      let existing: unknown[] = [];
      if (existsSync(deepReadPath)) {
        existing = JSON.parse(readFileSync(deepReadPath, "utf-8"));
      }
      const findingsPath = `/tmp/zuhn-deep-read-${item.source_id}.json`;
      if (existsSync(findingsPath)) {
        const findings = JSON.parse(readFileSync(findingsPath, "utf-8"));
        existing.push(findings);
        await writeFile(deepReadPath, JSON.stringify(existing, null, 2), "utf-8");
      }
    } catch {
      // Non-critical — deep read data is supplementary
    }
  } else if (result.output.startsWith("RATE_LIMITED")) {
    await sleep(backoffSeconds * 1000);
    backoffSeconds = Math.min(backoffSeconds * 2, 900);
  } else {
    // Deep read failure is non-critical — commit without it
    updateStatus(item.id, "committed", {
      last_error: `Deep read failed: ${result.output}`,
    });
    await log("WARN", `Deep read failed for ${item.id}, committing without.`);
  }
}

async function stepCommit(item: InboxItem): Promise<void> {
  updateStatus(item.id, "committed");
  await log("INFO", `✓ ${item.id} fully committed (heavy mode, ${item.insights_extracted} insights).`);
}

async function stepCommitFast(item: InboxItem): Promise<void> {
  updateStatus(item.id, "committed");
  await log("INFO", `✓ ${item.id} committed (fast mode).`);
}

// ─── Main Loop ──────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processQueue(): Promise<void> {
  if (shuttingDown) return;
  if (activeAgents.size >= MAX_CONCURRENT_AGENTS) return;

  const item = getNextPending();
  if (!item) return;

  // Handle extracting_a state (needs to call stepExtractA, not processItem's switch)
  if (item.status === "extracting_a" && !item.agent_a_file) {
    await stepExtractA(item);
    return;
  }

  await processItem(item);
}

async function cronSweep(): Promise<void> {
  await log("INFO", "Cron sweep running...");

  // 1. Find stuck items (in processing state > 15 min with no active agent)
  const stuck = db
    .prepare(
      `SELECT * FROM inbox_queue
       WHERE status IN ('extracting_a','extracting_b','extracting','merging','verifying','deep_reading')
       AND updated_at < datetime('now', '-15 minutes')`
    )
    .all() as InboxItem[];

  for (const item of stuck) {
    if (!activeAgents.has(item.id)) {
      await log("WARN", `Resetting stuck item ${item.id} (was ${item.status}).`);
      incrementAttempts(item.id, `Stuck in ${item.status} for >15 min`);
    }
  }

  // 2. Retry failed items with attempts < 3
  const retryable = db
    .prepare(
      `SELECT * FROM inbox_queue WHERE status = 'failed' AND attempts < 3`
    )
    .all() as InboxItem[];

  for (const item of retryable) {
    await log("INFO", `Retrying failed item ${item.id} (attempt ${item.attempts + 1}).`);
    updateStatus(item.id, "pending");
  }

  // 3. Run post-processing batch
  await log("INFO", "Running post-processing batch (embed + learn + views)...");
  await new Promise<void>((resolve) => {
    execFile(
      "npx",
      ["tsx", "scripts/post-ingest.ts"],
      { cwd: PROJECT_ROOT, timeout: 10 * 60 * 1000 },
      (error) => {
        if (error) {
          log("ERROR", `Post-ingest failed: ${error.message}`);
        }
        resolve();
      }
    );
  });

  // 3b. Run autoknowledge on any unextracted sources (self-improving loop)
  await log("INFO", "Running autoknowledge (self-improving extraction loop)...");
  await new Promise<void>((resolve) => {
    execFile(
      "npx",
      ["tsx", "scripts/autoknowledge.ts", "--limit", "10"],
      { cwd: PROJECT_ROOT, timeout: 20 * 60 * 1000 },
      (error) => {
        if (error) {
          log("ERROR", `Autoknowledge failed: ${error.message}`);
        } else {
          log("INFO", "Autoknowledge cycle complete.");
        }
        resolve();
      }
    );
  });

  // 4. Garbage collect processed/ older than 7 days
  try {
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const files = readdirSync(PROCESSED_DIR);
    for (const f of files) {
      const stat = require("fs").statSync(join(PROCESSED_DIR, f));
      if (stat.mtimeMs < cutoff) {
        await unlink(join(PROCESSED_DIR, f));
      }
    }
  } catch {
    // Non-critical
  }

  // 5. Write status
  await writeStatus();
}

// ─── File Watcher ───────────────────────────────────────────────────

function startWatcher(): void {
  const watcher = watch(INBOX_DIR, { recursive: false }, (event, filename) => {
    if (!filename || shuttingDown) return;

    const fullPath = join(INBOX_DIR, filename);
    const ext = extname(filename).toLowerCase();

    // Ignore directories and system files
    if (filename.startsWith(".") || filename === "queue.json") return;

    // URL text files
    if (ext === ".txt" && filename !== "queue.json") {
      try {
        const content = readFileSync(fullPath, "utf-8");
        const urls = content
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l && !l.startsWith("#"));

        for (const url of urls) {
          const id = enqueue(url, null, "folder");
          log("INFO", `Queued ${id} from ${filename}: ${url}`);
        }

        // Move txt to processed
        rename(fullPath, join(PROCESSED_DIR, filename)).catch(() => {});
      } catch {
        // File might not exist yet (event fired early)
      }
    }

    // Audio/PDF files
    if (AUDIO_EXTS.has(ext) || PDF_EXTS.has(ext)) {
      const id = enqueue(null, fullPath, "folder");
      log("INFO", `Queued ${id} from file drop: ${filename}`);
    }

    // Trigger processing
    processQueue().catch((err) => log("ERROR", `Queue processing error: ${err}`));
  });

  log("INFO", `File watcher started on ${INBOX_DIR}`);
}

// ─── Status & Heartbeat ─────────────────────────────────────────────

async function writeStatus(): Promise<void> {
  const pending = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'pending'")
    .get() as { n: number };
  const processing = db
    .prepare(
      "SELECT COUNT(*) as n FROM inbox_queue WHERE status IN ('extracting_a','extracting_b','extracting','merging','verifying','deep_reading','pre_filtering','ingesting')"
    )
    .get() as { n: number };
  const committed = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'committed'")
    .get() as { n: number };
  const failed = db
    .prepare("SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'failed'")
    .get() as { n: number };

  const status = {
    daemon_pid: process.pid,
    heartbeat: new Date().toISOString(),
    agents_active: activeAgents.size,
    agents_max: MAX_CONCURRENT_AGENTS,
    queue: {
      pending: pending.n,
      processing: processing.n,
      committed: committed.n,
      failed: failed.n,
    },
    backoff_seconds: backoffSeconds,
  };

  await writeFile(STATUS_FILE, JSON.stringify(status, null, 2), "utf-8");
}

// ─── Graceful Shutdown (Zombie Protection) ──────────────────────────

function gracefulShutdown(signal: string): void {
  log("INFO", `Received ${signal}. Shutting down gracefully...`);
  shuttingDown = true;

  // Kill all active sub-agents
  for (const [id, proc] of Array.from(activeAgents.entries())) {
    log("INFO", `Killing agent for ${id} (PID ${proc.pid})...`);
    proc.kill("SIGTERM");

    // Reset their status back to pending for recovery
    try {
      db.prepare(
        `UPDATE inbox_queue SET status = 'pending', updated_at = datetime('now')
         WHERE id = ? AND status IN ('extracting_a','extracting_b','extracting','merging','verifying','deep_reading')`
      ).run(id);
    } catch {
      // DB might be closed
    }
  }

  // Clean up PID file
  try {
    require("fs").unlinkSync(PID_FILE);
  } catch {}

  log("INFO", "Daemon stopped.");
  process.exit(0);
}

// ─── Entry Point ────────────────────────────────────────────────────

async function main(): Promise<void> {
  // Handle --status flag
  if (process.argv.includes("--status")) {
    try {
      const status = JSON.parse(readFileSync(STATUS_FILE, "utf-8"));
      console.log(JSON.stringify(status, null, 2));
    } catch {
      console.log("Daemon is not running (no status file).");
    }
    process.exit(0);
  }

  // Initialize
  await mkdir(INBOX_DIR, { recursive: true });
  await mkdir(PROCESSED_DIR, { recursive: true });
  await mkdir(REVIEW_DIR, { recursive: true });
  await mkdir(FAILED_DIR, { recursive: true });
  await mkdir(META_DIR, { recursive: true });

  db = initDb();

  // Write PID file
  await writeFile(PID_FILE, String(process.pid), "utf-8");

  // Register shutdown handlers
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("uncaughtException", (err) => {
    log("FATAL", `Uncaught exception: ${err.message}`);
    gracefulShutdown("uncaughtException");
  });

  console.log(`
╔══════════════════════════════════════╗
║       Zuhn Daemon — Phase 19         ║
╚══════════════════════════════════════╝

  PID: ${process.pid}
  Inbox: ${INBOX_DIR}
  Max agents: ${MAX_CONCURRENT_AGENTS}
  Processing: heavy (>3000 words) / fast (≤3000 words)
  Cron sweep: every 30 minutes

  Drop URLs or files into ${INBOX_DIR}
  Or POST to http://localhost:${process.env.ZUHN_INBOX_PORT ?? "7777"}/inbox

  Press Ctrl+C to stop.
`);

  // Layer 1: Start file watcher
  startWatcher();

  // Layer 2: Start cron sweep
  setInterval(() => {
    cronSweep().catch((err) => log("ERROR", `Cron sweep error: ${err}`));
  }, CRON_INTERVAL_MS);

  // Main processing loop
  await writeStatus();

  while (!shuttingDown) {
    await processQueue();
    await writeStatus();
    await sleep(5000); // Poll every 5 seconds
  }
}

main().catch((err) => {
  console.error("Daemon fatal error:", err);
  process.exit(1);
});

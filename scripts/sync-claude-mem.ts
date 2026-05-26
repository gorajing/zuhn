#!/usr/bin/env npx tsx
/**
 * sync-claude-mem.ts — Adapter: claude-mem session digests → Zuhn sources.
 *
 * claude-mem auto-captures every Claude Code session and compresses it to
 * ~/.claude-mem/claude-mem.db. This reads those digests (READ-ONLY) and writes
 * one Zuhn "session" source per new session. It does NOT extract insights —
 * the normal extract→gate flow authors stances and filters quality, so the
 * epistemic layer stays the single gatekeeper for what enters the KB.
 *
 * Idempotent: a session always maps to the same SRC id + filename (salted by
 * memory_session_id), and a watermark tracks what's been synced.
 *
 * Usage:
 *   npm run sync-claude-mem            # write new session sources
 *   npm run sync-claude-mem -- --dry-run
 *
 * Next step after a sync (authors stances + runs the quality gate, with a
 * stricter bar for the noisier session source):
 *   ZUHN_GATE_BLOCKING_CHECKS=stance_present,stance_directional npm run autoknowledge
 */

import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import Database from "better-sqlite3";
import matter from "gray-matter";

import { buildSessionSource, latestPerSession, readNewSummaries, readSdkSession } from "./lib/claude-mem";
import { KB_ROOT } from "./lib/kb-root";

const CLAUDE_MEM_DB = process.env.CLAUDE_MEM_DATA_DIR
  ? join(process.env.CLAUDE_MEM_DATA_DIR, "claude-mem.db")
  : join(homedir(), ".claude-mem", "claude-mem.db");
const WATERMARK_PATH = join(KB_ROOT, "meta", "claude-mem-sync.json");
const SESSION_DIR = join(KB_ROOT, "sources", "session");
const MAX_TRACKED_IDS = 5000;

interface Watermark {
  last_epoch: number;
  synced_session_ids: string[];
  updated_at: string;
}

function readWatermark(): Watermark {
  try {
    const w = JSON.parse(readFileSync(WATERMARK_PATH, "utf-8"));
    return {
      last_epoch: typeof w.last_epoch === "number" ? w.last_epoch : 0,
      synced_session_ids: Array.isArray(w.synced_session_ids) ? w.synced_session_ids : [],
      updated_at: typeof w.updated_at === "string" ? w.updated_at : "",
    };
  } catch {
    return { last_epoch: 0, synced_session_ids: [], updated_at: "" };
  }
}

function writeWatermark(w: Watermark): void {
  mkdirSync(dirname(WATERMARK_PATH), { recursive: true });
  writeFileSync(WATERMARK_PATH, JSON.stringify(w, null, 2) + "\n", "utf-8");
}

function main(): void {
  const dryRun = process.argv.includes("--dry-run");

  if (!existsSync(CLAUDE_MEM_DB)) {
    console.log(`claude-mem DB not found at ${CLAUDE_MEM_DB}`);
    console.log("Install it first:  npx claude-mem install   (then run some sessions). Nothing to sync.");
    return; // exit 0 — graceful, not an error
  }

  const db = new Database(CLAUDE_MEM_DB, { readonly: true, fileMustExist: true });
  const watermark = readWatermark();
  const alreadySynced = new Set(watermark.synced_session_ids);

  let summaries;
  try {
    summaries = readNewSummaries(db, watermark.last_epoch);
  } catch (err) {
    console.error(`Could not read session_summaries — claude-mem's schema may have changed: ${(err as Error).message}`);
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    console.error(`Tables present: ${tables.map((t) => (t as { name: string }).name).join(", ")}`);
    db.close();
    process.exit(1); // fail loud — schema drift needs a code fix, not a silent skip
  }

  // Collapse multiple rows per session to the latest, then drop already-synced
  // (the >= watermark also re-includes same-epoch siblings from the last run).
  const unique = latestPerSession(summaries);
  const pending = unique.filter((s) => !alreadySynced.has(s.memory_session_id));

  console.log(
    `claude-mem sync — ${unique.length} session(s) at/after watermark, ${pending.length} new${dryRun ? " (dry-run)" : ""}.`
  );

  if (pending.length === 0) {
    db.close();
    return;
  }

  if (!dryRun) mkdirSync(SESSION_DIR, { recursive: true });

  let created = 0;
  let skipped = 0;
  let maxEpoch = watermark.last_epoch;
  const newIds: string[] = [];

  for (const summary of pending) {
    maxEpoch = Math.max(maxEpoch, summary.created_at_epoch);

    const src = buildSessionSource(summary, readSdkSession(db, summary.memory_session_id));

    // An empty digest (no learned/completed/etc.) has nothing to extract — skip
    // WITHOUT marking it synced, so a later, fuller summary for the same session
    // still gets picked up rather than being dropped as "already synced".
    if (!src.body.trim()) {
      skipped++;
      continue;
    }

    // Has content → record as synced (a source exists or is being created).
    newIds.push(summary.memory_session_id);

    const path = join(SESSION_DIR, `${src.slug}.md`);
    if (existsSync(path)) {
      skipped++;
      continue; // already written in a prior run
    }

    if (dryRun) {
      console.log(`  WOULD create  ${src.id}  ${src.title}`);
      created++;
      continue;
    }

    writeFileSync(path, matter.stringify(src.body, src.data), "utf-8");
    console.log(`  created  ${src.id}  ${src.title}`);
    created++;
  }

  db.close();

  if (!dryRun) {
    const merged = [...watermark.synced_session_ids, ...newIds];
    writeWatermark({
      last_epoch: maxEpoch,
      synced_session_ids: merged.slice(-MAX_TRACKED_IDS),
      updated_at: new Date().toISOString(),
    });
  }

  console.log(`\n${dryRun ? "Would create" : "Created"} ${created} session source(s)${skipped ? `, skipped ${skipped}` : ""}.`);
  if (!dryRun && created > 0) {
    console.log(
      "Next: author stances + gate them —\n" +
        "  ZUHN_GATE_BLOCKING_CHECKS=stance_present,stance_directional npm run autoknowledge"
    );
  }
}

main();

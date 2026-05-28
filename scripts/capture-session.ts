#!/usr/bin/env npx tsx
/**
 * capture-session.ts — Claude Code SessionEnd hook → Zuhn "session" source.
 *
 * Reads the hook's stdin JSON ({ session_id, transcript_path, ... }), parses the
 * transcript into a clean conversation, and writes one Zuhn session source. It
 * does NOT extract insights — that stays the deliberate, gated autoknowledge
 * step (so Phase 8's "no auto-extraction" holds; only capture is automated).
 *
 * Designed to be a safe hook: never throws, never blocks the session, exits 0.
 *
 * Hook usage (settings.json SessionEnd): piped the hook JSON on stdin.
 * Manual/testing:
 *   npx tsx scripts/capture-session.ts --transcript <path.jsonl> --session <id> --dry-run
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

import { buildTranscriptSource } from "./lib/transcript";
import { KB_ROOT } from "./lib/kb-root";

const SESSION_DIR = join(KB_ROOT, "sources", "session");

interface HookInput {
  session_id?: string;
  transcript_path?: string;
}

function readStdin(): string {
  try {
    return readFileSync(0, "utf-8");
  } catch {
    return "";
  }
}

function resolveInput(argv: string[]): { transcriptPath?: string; sessionId?: string } {
  const tIdx = argv.indexOf("--transcript");
  if (tIdx !== -1) {
    const sIdx = argv.indexOf("--session");
    return { transcriptPath: argv[tIdx + 1], sessionId: sIdx !== -1 ? argv[sIdx + 1] : "manual" };
  }
  // Hook mode: JSON on stdin. Guard against a TTY (no pipe) so manual runs
  // without --transcript don't block waiting on fd 0.
  if (process.stdin.isTTY) return {};
  const raw = readStdin().trim();
  if (!raw) return {};
  try {
    const input = JSON.parse(raw) as HookInput;
    return { transcriptPath: input.transcript_path, sessionId: input.session_id };
  } catch {
    return {};
  }
}

function main(): void {
  const dryRun = process.argv.includes("--dry-run");
  const { transcriptPath, sessionId } = resolveInput(process.argv);

  // Graceful no-op on missing/odd input — a hook must never break the session.
  if (!transcriptPath || !existsSync(transcriptPath)) {
    if (dryRun) console.log(`No transcript (${transcriptPath ?? "none"}) — nothing to capture.`);
    return;
  }

  let src;
  try {
    const jsonl = readFileSync(transcriptPath, "utf-8");
    src = buildTranscriptSource(jsonl, sessionId ?? transcriptPath);
  } catch (err) {
    if (dryRun) console.log(`Could not read/parse transcript: ${(err as Error).message}`);
    return; // never throw out of a hook
  }

  if (!src) {
    if (dryRun) console.log("Transcript had no usable conversation — skipping.");
    return;
  }

  const path = join(SESSION_DIR, `${src.slug}.md`);
  if (existsSync(path)) {
    if (dryRun) console.log(`Already captured: ${src.id} → ${path}`);
    return; // idempotent
  }

  if (dryRun) {
    console.log(`WOULD write ${src.id}  "${src.title}"  (${src.data.word_count} words) → ${path}`);
    return;
  }

  try {
    mkdirSync(SESSION_DIR, { recursive: true });
    writeFileSync(path, matter.stringify(src.body, src.data), "utf-8");
    console.log(`Zuhn: captured session ${src.id} — run 'npm run autoknowledge' to extract + gate.`);
  } catch {
    // Swallow — a capture failure must not surface as a session error.
  }
}

main();

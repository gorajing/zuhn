// ─── Chronological Log ─────────────────────────────────────────────
//
// Append-only, human-readable, grep-friendly record of knowledge base
// events. Written to knowledge-base/meta/log.md by default.
//
// Format is locked — see docs/superpowers/plans/2026-04-08-concise-brief-mode.md
// "Phase 2 — Chronological log" section for the rules and rationale.
//
// Entry format:
//
//   ## [YYYY-MM-DD] <action> | <scope>
//   <1-3 body lines — what changed and why>
//
// Rules:
//   - One header line: `## [date] action | scope`
//   - `action` ∈ LOG_ACTIONS (enum below)
//   - `scope` is a canonical artifact ID for single-artifact actions
//     (SRC-/INS-/PRI-/PRED-/DEC-/T- prefix) OR a topic path for aggregate
//     actions (e.g. `startups/fundraising` for compression runs)
//   - Body: 1-3 lines maximum. Longer bodies are truncated with a warning.
//   - Empty bodies are rejected. Callers must explain what changed.
//   - Newest entries appended at the bottom, never inserted in the middle.
//   - No retroactive edits. Corrections are a new entry referencing the old.
//
// What this is NOT: a second database, a structured event store, a query
// surface with its own indexes, or a replacement for the connections table.
// It is a plain markdown file you can grep or read top-to-bottom. If this
// module ever feels like it needs schemas, parsing, or a query API — stop
// and question the scope.

import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// ─── Canonical enum ─────────────────────────────────────────────────
// This enum is intentionally not sacred. Add `archive`, `health`, or
// other buckets later only if those become meaningful user-visible events.
// Adding a new action should be a deliberate decision, not a quick edit.

export const LOG_ACTIONS = [
  "ingest",
  "extract",
  "compress",
  "predict",
  "decide",
  "resolve",
  "tension",
] as const;

export type LogAction = (typeof LOG_ACTIONS)[number];

// ─── Default log path ───────────────────────────────────────────────

const KB_ROOT = join(__dirname, "../../knowledge-base");
const DEFAULT_LOG_PATH = join(KB_ROOT, "meta", "log.md");

// ─── File header ────────────────────────────────────────────────────

const FILE_HEADER = `# Zuhn Knowledge Base Log

Append-only chronological record of events in the knowledge base.
Format: \`## [YYYY-MM-DD] action | scope\` followed by 1-3 body lines.
Newest entries at the bottom, never rewritten.

`;

// ─── Body helpers ───────────────────────────────────────────────────

/**
 * Flatten user-provided text into a single grep-friendly line suitable
 * for a log body. Collapses embedded newlines and runs of whitespace
 * into single spaces, trims, and optionally truncates to a max length.
 *
 * Call sites that source body text from user input (prediction claims,
 * decision contexts, resolution notes, source titles) should normalize
 * through this function before passing to logEntry/safeLogEntry.
 * Otherwise a multiline claim becomes a multiline log body, which
 * weakens the grep-friendly format discipline.
 */
export function normalizeBodyLine(text: string, maxLen: number = 160): string {
  const flattened = text.replace(/\s+/g, " ").trim();
  if (flattened.length <= maxLen) return flattened;
  return flattened.slice(0, maxLen - 1) + "…";
}

// ─── Public API ─────────────────────────────────────────────────────

export interface LogEntryInput {
  action: LogAction;
  scope: string;
  body: string;
  /** Override the log file path. Defaults to knowledge-base/meta/log.md. */
  logPath?: string;
}

/**
 * Append a structured entry to the chronological log.
 *
 * This function is the single source of truth for the log format. All
 * pipeline scripts (ingest, extract, create-principles, predict, decide,
 * resolve) should call this rather than writing to log.md directly.
 *
 * Validates the action enum, rejects empty bodies, truncates bodies
 * longer than 3 lines with a warning, and creates the file (with header)
 * on first write.
 */
export function logEntry(input: LogEntryInput): void {
  const { action, scope, body } = input;
  const logPath = input.logPath ?? DEFAULT_LOG_PATH;

  // Validate action
  if (!LOG_ACTIONS.includes(action as LogAction)) {
    throw new Error(
      `logEntry: invalid action "${action}". Must be one of: ${LOG_ACTIONS.join(", ")}`
    );
  }

  // Validate scope
  if (!scope || scope.trim().length === 0) {
    throw new Error("logEntry: scope must be a non-empty string");
  }

  // Validate + normalize body
  const trimmed = body?.trim() ?? "";
  if (trimmed.length === 0) {
    throw new Error(
      "logEntry: body must be a non-empty 1-3 line description of what changed"
    );
  }

  const lines = trimmed.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
  let finalLines = lines;
  if (lines.length > 3) {
    console.warn(
      `logEntry: body for ${action} | ${scope} had ${lines.length} lines, truncating to 3`
    );
    finalLines = lines.slice(0, 3);
  }

  // Format the entry
  const date = new Date().toISOString().slice(0, 10);
  const entry = `## [${date}] ${action} | ${scope}\n${finalLines.join("\n")}\n`;

  // Ensure parent dir exists
  const dir = dirname(logPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  // Create file with header if it doesn't exist yet
  if (!existsSync(logPath)) {
    writeFileSync(logPath, FILE_HEADER + entry + "\n", "utf-8");
    return;
  }

  // Append to existing file, ensuring a blank line between entries
  appendFileSync(logPath, entry + "\n", "utf-8");
}

/**
 * Pipeline-safe wrapper around logEntry that converts errors into warnings.
 *
 * Use this in pipeline scripts (ingest, extract, create-principles, etc.)
 * where a logging failure should not break the main workflow. Validation
 * errors get logged to console.warn rather than thrown; the caller
 * proceeds normally.
 *
 * Tests should use logEntry directly so validation errors fail loudly.
 */
export function safeLogEntry(input: LogEntryInput): void {
  try {
    logEntry(input);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(
      `log: failed to record ${input.action} entry for ${input.scope}: ${msg}`
    );
  }
}

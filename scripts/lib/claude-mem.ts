/**
 * claude-mem.ts (lib) — Read claude-mem's session digests and turn them into
 * Zuhn "session" source files.
 *
 * claude-mem (the Claude Code memory plugin) auto-captures every session and
 * compresses it to a row in ~/.claude-mem/claude-mem.db. This adapter consumes
 * those digests read-only and emits Zuhn source files — it does NOT extract
 * insights or author stances. The normal extract→gate flow does that, so the
 * epistemic layer (stances, quality gate, dedup) stays the single source of
 * truth for what enters the KB.
 *
 * Defensive by design: claude-mem moves fast (README v6 / plugin v13), so we
 * read SELECT * and access fields with `?? ""` — a renamed/missing column
 * blanks one field rather than crashing the sync.
 */

import type Database from "better-sqlite3";
import { generateSourceId } from "./generate-id";
import { slugify } from "./ingest/slug";

// ─── Types (claude-mem schema, read defensively) ──────────────────────

/** A row of claude-mem's `session_summaries` (fields optional — drift-tolerant). */
export interface ClaudeMemSummary {
  memory_session_id: string;
  created_at_epoch: number;
  /** claude-mem's within-session sequence; tie-breaks rows sharing an epoch. */
  prompt_number?: number;
  project?: string;
  request?: string;
  investigated?: string;
  learned?: string;
  completed?: string;
  next_steps?: string;
  notes?: string;
}

/** A row of claude-mem's `sdk_sessions` (for the human-facing title). */
export interface SdkSession {
  memory_session_id: string;
  custom_title?: string;
  project?: string;
  user_prompt?: string;
}

/** A Zuhn source ready to write to sources/session/<slug>.md. */
export interface SessionSource {
  id: string;
  slug: string;
  title: string;
  body: string;
  data: Record<string, string | number>;
}

// ─── Title / body composition (pure) ──────────────────────────────────

function firstLine(text: string, max = 60): string {
  const line = text.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
  return line.length > max ? line.slice(0, max - 1) + "…" : line;
}

/**
 * Human-facing title: claude-mem's custom_title if set, else "<project>: <first
 * line of the request>", else a dated fallback. Provenance stays honest — the
 * title comes from the session, not from extraction time.
 */
export function deriveSessionTitle(summary: ClaudeMemSummary, sdk?: SdkSession): string {
  const custom = sdk?.custom_title?.trim();
  if (custom) return custom;

  const project = (summary.project ?? sdk?.project ?? "").trim();
  const req = firstLine(summary.request ?? sdk?.user_prompt ?? "");
  if (project && req) return `${project}: ${req}`;
  if (req) return req;
  if (project) return `${project} session`;
  // Date-INDEPENDENT fallback. The slug appends the session-id tag for
  // uniqueness, so the title must not carry a date — otherwise a title-less
  // session would get a new slug/filename each day and re-syncs would
  // duplicate it instead of hitting the file-exists short-circuit.
  return "Claude Code session";
}

const SECTIONS: Array<{ key: keyof ClaudeMemSummary; heading: string }> = [
  { key: "request", heading: "Request" },
  { key: "investigated", heading: "Investigated" },
  { key: "learned", heading: "Learned" },
  { key: "completed", heading: "Completed" },
  { key: "next_steps", heading: "Next steps" },
  { key: "notes", heading: "Notes" },
];

/** Compose the digest fields into a readable markdown body (non-empty only). */
export function composeSessionBody(summary: ClaudeMemSummary): string {
  const parts: string[] = [];
  for (const { key, heading } of SECTIONS) {
    const value = String(summary[key] ?? "").trim();
    if (value) parts.push(`## ${heading}\n\n${value}`);
  }
  return parts.join("\n\n");
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Build a Zuhn "session" source from a claude-mem summary. The slug is salted
 * by memory_session_id and is date-independent, so the same session always maps
 * to the same filename — re-syncs are idempotent via the file-exists check (+
 * the sync watermark). The SRC id is assigned once, at first sync.
 */
export function buildSessionSource(
  summary: ClaudeMemSummary,
  sdk?: SdkSession,
  date = new Date().toISOString().slice(0, 10)
): SessionSource {
  const title = deriveSessionTitle(summary, sdk);
  const sessionTag = summary.memory_session_id.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "session";
  const slug = `${slugify(title)}-${sessionTag}`;
  const body = composeSessionBody(summary);
  const id = generateSourceId(slug, summary.memory_session_id);

  return {
    id,
    slug,
    title,
    body,
    data: {
      id,
      type: "session",
      title,
      date_ingested: date,
      insight_count: 0,
      word_count: wordCount(body),
    },
  };
}

// ─── DB reads (read-only, drift-tolerant) ─────────────────────────────

/**
 * Read session summaries created on/after `sinceEpoch`, oldest first. Inclusive
 * (`>=`) so siblings sharing the watermark epoch aren't missed — the caller
 * dedups by memory_session_id. SELECT * so a missing/renamed column blanks a
 * field rather than throwing; only memory_session_id + created_at_epoch are
 * structurally required.
 */
export function readNewSummaries(
  db: Database.Database,
  sinceEpoch: number
): ClaudeMemSummary[] {
  const rows = db
    .prepare(
      "SELECT * FROM session_summaries WHERE created_at_epoch >= ? ORDER BY created_at_epoch ASC"
    )
    .all(sinceEpoch) as Record<string, unknown>[];

  let dropped = 0;
  const summaries = rows
    .map((r): ClaudeMemSummary | null => {
      const id = typeof r.memory_session_id === "string" ? r.memory_session_id : "";
      // Coerce a string epoch (type drift) rather than silently dropping it.
      const epoch =
        typeof r.created_at_epoch === "number" ? r.created_at_epoch : Number(r.created_at_epoch);
      if (!id || !Number.isFinite(epoch)) {
        dropped++;
        return null;
      }
      return {
        memory_session_id: id,
        created_at_epoch: epoch,
        prompt_number: asOptNumber(r.prompt_number),
        project: asOptString(r.project),
        request: asOptString(r.request),
        investigated: asOptString(r.investigated),
        learned: asOptString(r.learned),
        completed: asOptString(r.completed),
        next_steps: asOptString(r.next_steps),
        notes: asOptString(r.notes),
      };
    })
    .filter((s): s is ClaudeMemSummary => s !== null);

  // Surface drift rather than letting a malformed table look like "0 new".
  if (dropped > 0) {
    console.warn(
      `WARN: skipped ${dropped} session_summaries row(s) missing memory_session_id/created_at_epoch — claude-mem schema may have drifted.`
    );
  }
  return summaries;
}

/**
 * Collapse multiple summaries that share a memory_session_id down to the latest
 * one (highest created_at_epoch). claude-mem can write several summaries per
 * session (it tracks prompt_number), so the sync must process each session once.
 */
export function latestPerSession(summaries: ClaudeMemSummary[]): ClaudeMemSummary[] {
  const byId = new Map<string, ClaudeMemSummary>();
  for (const s of summaries) {
    const prev = byId.get(s.memory_session_id);
    if (!prev || isLaterSummary(s, prev)) byId.set(s.memory_session_id, s);
  }
  return [...byId.values()];
}

/** Later = higher epoch; on an epoch tie, higher prompt_number (claude-mem's
 *  within-session sequence) so a stale/empty same-epoch row can't win. */
function isLaterSummary(a: ClaudeMemSummary, b: ClaudeMemSummary): boolean {
  if (a.created_at_epoch !== b.created_at_epoch) return a.created_at_epoch > b.created_at_epoch;
  return (a.prompt_number ?? 0) >= (b.prompt_number ?? 0);
}

/** Look up the sdk_sessions row for a session id (for the title). Best-effort. */
export function readSdkSession(
  db: Database.Database,
  memorySessionId: string
): SdkSession | undefined {
  try {
    const row = db
      .prepare("SELECT * FROM sdk_sessions WHERE memory_session_id = ?")
      .get(memorySessionId) as Record<string, unknown> | undefined;
    if (!row) return undefined;
    return {
      memory_session_id: memorySessionId,
      custom_title: asOptString(row.custom_title),
      project: asOptString(row.project),
      user_prompt: asOptString(row.user_prompt),
    };
  } catch {
    return undefined; // sdk_sessions absent/changed — title falls back to summary
  }
}

function asOptString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function asOptNumber(value: unknown): number | undefined {
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

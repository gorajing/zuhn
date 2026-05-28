/**
 * transcript.ts (lib) — Turn a Claude Code session transcript (.jsonl) into a
 * clean Zuhn "session" source. MECHANICAL only — no LLM. The heavy lifting
 * (authoring stances) stays with autoknowledge's claude-CLI extraction, and the
 * gate filters quality, so this is just aggressive noise-stripping + framing.
 *
 * Transcript reality (verified against a real 38MB/11.8k-line transcript):
 *   - Each line is a JSON object with a top-level `type`.
 *   - Signal: type "user" with STRING message.content (real prompts) and type
 *     "assistant" with `text` content-blocks (response prose).
 *   - Noise to drop: attachment/system/custom-title/etc. lines, tool_use and
 *     tool_result blocks, assistant `thinking` blocks, subagent isSidechain
 *     entries, and framework injections (<system-reminder>, <command-*>, ...).
 */

import { generateSourceId } from "./generate-id";
import { slugify } from "./ingest/slug";

export interface Turn {
  role: "user" | "assistant";
  text: string;
}

export interface TranscriptSource {
  id: string;
  slug: string;
  title: string;
  body: string;
  data: Record<string, string | number>;
}

/** Default body cap (~chars). Long sessions are truncated to keep extraction
 *  tractable; the keep-tail keeps the most recent reasoning. */
export const DEFAULT_BODY_CAP = 60_000;

// Framework-injected user turns (not the human's words) — system reminders,
// slash-command scaffolding, local command output, hook stdout. These are
// noise for a "what did I reason about" digest.
const FRAMEWORK_NOISE = /^<(system-reminder|command-name|command-message|command-args|local-command-stdout|local-command-stderr)>/;

function textFromContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .filter(
        (b): b is { type: string; text: string } =>
          !!b && typeof b === "object" && (b as { type?: unknown }).type === "text" &&
          typeof (b as { text?: unknown }).text === "string"
      )
      .map((b) => b.text)
      .join("\n");
  }
  return "";
}

/** Parse a transcript JSONL string into clean user/assistant turns. */
export function parseTranscript(jsonl: string): Turn[] {
  const turns: Turn[] = [];
  for (const line of jsonl.split("\n")) {
    if (!line.trim()) continue;

    let obj: Record<string, unknown>;
    try {
      obj = JSON.parse(line) as Record<string, unknown>;
    } catch {
      continue; // tolerate a partially-flushed final line
    }

    if (obj.isSidechain === true) continue; // subagent transcript — not the main thread
    const type = obj.type;
    if (type !== "user" && type !== "assistant") continue;

    const message = obj.message as { content?: unknown } | undefined;
    const text = textFromContent(message?.content).trim();
    if (!text) continue; // tool_result / tool_use / thinking-only → nothing to keep

    if (type === "user" && FRAMEWORK_NOISE.test(text)) continue; // injected, not human

    turns.push({ role: type, text });
  }
  return turns;
}

function firstSentence(text: string, max = 70): string {
  const line = text.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
  return line.length > max ? line.slice(0, max - 1) + "…" : line;
}

/**
 * Render turns into a readable markdown conversation, capped to `cap` chars by
 * keeping the TAIL (most-recent reasoning) and noting the truncation.
 */
export function renderConversation(turns: Turn[], cap = DEFAULT_BODY_CAP): string {
  const blocks = turns.map((t) => `**${t.role === "user" ? "User" : "Assistant"}:** ${t.text}`);
  let body = blocks.join("\n\n");
  if (body.length > cap) {
    body = "_[earlier turns truncated]_\n\n" + body.slice(body.length - cap);
  }
  return body;
}

/**
 * Build a Zuhn "session" source from a transcript. Title = first real user
 * prompt; slug/id salted by sessionId (date-independent → idempotent re-capture).
 * Returns null when the transcript has no usable conversation.
 */
export function buildTranscriptSource(
  jsonl: string,
  sessionId: string,
  date = new Date().toISOString().slice(0, 10),
  cap = DEFAULT_BODY_CAP
): TranscriptSource | null {
  const turns = parseTranscript(jsonl);
  if (turns.length === 0) return null;

  const firstUser = turns.find((t) => t.role === "user");
  const title = firstUser ? firstSentence(firstUser.text) : "Claude Code session";
  const body = renderConversation(turns, cap);

  const tag = sessionId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "session";
  const slug = `${slugify(title)}-${tag}`;
  const id = generateSourceId(slug, sessionId);

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
      word_count: body.split(/\s+/).filter(Boolean).length,
    },
  };
}

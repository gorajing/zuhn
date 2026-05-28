import { describe, expect, it } from "vitest";

import {
  buildTranscriptSource,
  parseTranscript,
  renderConversation,
  DEFAULT_BODY_CAP,
  type Turn,
} from "./transcript";

// Build a transcript JSONL string from line objects.
function jsonl(objs: unknown[]): string {
  return objs.map((o) => JSON.stringify(o)).join("\n");
}

const FIXTURE = jsonl([
  { type: "user", isSidechain: false, message: { role: "user", content: "First real prompt" } },
  {
    type: "assistant",
    message: {
      role: "assistant",
      content: [
        { type: "thinking", thinking: "internal reasoning" },
        { type: "text", text: "Assistant reply" },
        { type: "tool_use", name: "Bash", input: {} },
      ],
    },
  },
  // tool_result (user, array content, no text block) → dropped
  { type: "user", message: { role: "user", content: [{ type: "tool_result", content: "huge output" }] } },
  // subagent → dropped
  { type: "user", isSidechain: true, message: { role: "user", content: "sidechain prompt" } },
  // non-conversation line → dropped
  { type: "attachment", foo: 1 },
  // framework injection → dropped
  { type: "user", message: { role: "user", content: "<system-reminder>noise</system-reminder>" } },
  "not valid json",
]);

describe("parseTranscript", () => {
  it("keeps only real user prompts + assistant text, dropping all noise", () => {
    const turns = parseTranscript(FIXTURE);
    expect(turns).toEqual<Turn[]>([
      { role: "user", text: "First real prompt" },
      { role: "assistant", text: "Assistant reply" },
    ]);
  });

  it("extracts text blocks from array content but skips tool/thinking blocks", () => {
    const t = parseTranscript(
      jsonl([
        { type: "user", message: { role: "user", content: [{ type: "text", text: "typed with attachment" }] } },
      ])
    );
    expect(t).toEqual([{ role: "user", text: "typed with attachment" }]);
  });

  it("tolerates malformed lines and empty input", () => {
    expect(parseTranscript("not json\n\n{bad")).toEqual([]);
    expect(parseTranscript("")).toEqual([]);
  });
});

describe("renderConversation", () => {
  it("labels turns and caps to the tail with a truncation note", () => {
    const long: Turn[] = [
      { role: "user", text: "X".repeat(100) },
      { role: "assistant", text: "Y".repeat(100) },
    ];
    const out = renderConversation(long, 50);
    expect(out.length).toBeLessThanOrEqual(50 + "_[earlier turns truncated]_\n\n".length);
    expect(out).toContain("earlier turns truncated");
    expect(out.endsWith("Y")).toBe(true); // tail kept
  });

  it("formats user/assistant labels when under the cap", () => {
    const out = renderConversation([{ role: "user", text: "hi" }, { role: "assistant", text: "yo" }]);
    expect(out).toBe("**User:** hi\n\n**Assistant:** yo");
    expect(DEFAULT_BODY_CAP).toBeGreaterThan(0);
  });
});

describe("buildTranscriptSource", () => {
  it("builds a 'session' source titled by the first user prompt, salted by session id", () => {
    const src = buildTranscriptSource(FIXTURE, "sess-xyz12345", "2026-05-26");
    expect(src).not.toBeNull();
    expect(src!.title).toBe("First real prompt");
    expect(src!.id).toMatch(/^SRC-\d{6}-[A-F0-9]{4}$/);
    expect(src!.slug).toContain("sessxyz1"); // first 8 alphanumerics of session id
    expect(src!.data.type).toBe("session");
    expect(src!.data.date_ingested).toBe("2026-05-26");
    expect(src!.body).toContain("**User:** First real prompt");
    expect(src!.body).toContain("**Assistant:** Assistant reply");
  });

  it("returns null when there's no usable conversation", () => {
    expect(buildTranscriptSource("", "s")).toBeNull();
    expect(buildTranscriptSource(jsonl([{ type: "attachment" }, { type: "system" }]), "s")).toBeNull();
  });

  it("is deterministic for a given session id", () => {
    const a = buildTranscriptSource(FIXTURE, "sess-1", "2026-05-26");
    const b = buildTranscriptSource(FIXTURE, "sess-1", "2026-05-26");
    expect(a!.id).toBe(b!.id);
    expect(a!.slug).toBe(b!.slug);
  });
});

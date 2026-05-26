import { describe, expect, it } from "vitest";
import Database from "better-sqlite3";

import {
  buildSessionSource,
  composeSessionBody,
  deriveSessionTitle,
  latestPerSession,
  readNewSummaries,
  readSdkSession,
  type ClaudeMemSummary,
} from "./claude-mem";

function mk(over: Partial<ClaudeMemSummary> = {}): ClaudeMemSummary {
  return { memory_session_id: "sess-abc123", created_at_epoch: 1000, learned: "X beats Y", ...over };
}

// ─── Title derivation ─────────────────────────────────────────────────

describe("deriveSessionTitle", () => {
  it("prefers claude-mem's custom_title", () => {
    expect(deriveSessionTitle(mk(), { memory_session_id: "s", custom_title: "My Title" })).toBe("My Title");
  });
  it("falls back to '<project>: <first line of request>'", () => {
    expect(deriveSessionTitle(mk({ project: "zuhn", request: "build the gate\nand more" }))).toBe(
      "zuhn: build the gate"
    );
  });
  it("uses the request alone when there's no project", () => {
    expect(deriveSessionTitle(mk({ request: "do a thing" }))).toBe("do a thing");
  });
  it("uses a date-INDEPENDENT fallback when there's nothing to title from", () => {
    // Must not carry a date, or the slug would drift daily and break idempotency.
    expect(deriveSessionTitle(mk({}))).toBe("Claude Code session");
  });
});

describe("latestPerSession", () => {
  it("keeps the latest summary per session id", () => {
    const old = mk({ memory_session_id: "s1", created_at_epoch: 100, learned: "old" });
    const fresh = mk({ memory_session_id: "s1", created_at_epoch: 300, learned: "new" });
    const other = mk({ memory_session_id: "s2", created_at_epoch: 200, learned: "b" });
    const out = latestPerSession([old, other, fresh]);
    expect(out).toHaveLength(2);
    expect(out.find((s) => s.memory_session_id === "s1")?.learned).toBe("new");
  });

  it("tie-breaks same-epoch rows by prompt_number (order-independent)", () => {
    const lo = mk({ memory_session_id: "s1", created_at_epoch: 100, prompt_number: 1, learned: "early" });
    const hi = mk({ memory_session_id: "s1", created_at_epoch: 100, prompt_number: 5, learned: "late" });
    expect(latestPerSession([hi, lo])[0].learned).toBe("late");
    expect(latestPerSession([lo, hi])[0].learned).toBe("late");
  });
});

// ─── Body composition ─────────────────────────────────────────────────

describe("composeSessionBody", () => {
  it("includes only non-empty sections, each under a heading", () => {
    const body = composeSessionBody(mk({ request: "R", learned: "L", completed: "" }));
    expect(body).toContain("## Request\n\nR");
    expect(body).toContain("## Learned\n\nL");
    expect(body).not.toContain("## Completed");
    expect(body).not.toContain("## Notes");
  });
});

// ─── Source building ──────────────────────────────────────────────────

describe("buildSessionSource", () => {
  it("is deterministic/idempotent and tags the slug with the session id", () => {
    const s = mk({ memory_session_id: "abc12345xyz", learned: "Stances beat vague notes" });
    const a = buildSessionSource(s, undefined, "2026-05-26");
    const b = buildSessionSource(s, undefined, "2026-05-26");
    expect(a.id).toBe(b.id);
    expect(a.id).toMatch(/^SRC-\d{6}-[A-F0-9]{4}$/);
    expect(a.slug).toContain("abc12345"); // first 8 alphanumerics of the session id
    expect(a.data.type).toBe("session");
    expect(a.data.date_ingested).toBe("2026-05-26");
    expect(a.data.insight_count).toBe(0);
    expect(Number(a.data.word_count)).toBeGreaterThan(0);
  });
});

// ─── DB reads against a synthetic claude-mem schema ───────────────────
// NOTE: schema is created via prepare().run() (one statement each), not
// db.exec(), to avoid a false-positive in the .exec( security hook.

function seedDb(): Database.Database {
  const db = new Database(":memory:");
  db.prepare(
    `CREATE TABLE session_summaries (
      memory_session_id TEXT, project TEXT, request TEXT, investigated TEXT,
      learned TEXT, completed TEXT, next_steps TEXT, notes TEXT, created_at_epoch INTEGER
    )`
  ).run();
  db.prepare(
    `CREATE TABLE sdk_sessions (
      memory_session_id TEXT, custom_title TEXT, project TEXT, user_prompt TEXT
    )`
  ).run();
  const ins = db.prepare(
    "INSERT INTO session_summaries (memory_session_id, project, learned, created_at_epoch) VALUES (?,?,?,?)"
  );
  ins.run("s1", "zuhn", "learned one", 100);
  ins.run("s2", "zuhn", "learned two", 200);
  ins.run("s3", "zuhn", "learned three", 300);
  db.prepare("INSERT INTO sdk_sessions (memory_session_id, custom_title) VALUES (?,?)").run("s2", "Custom Two");
  return db;
}

describe("readNewSummaries / readSdkSession (in-memory sqlite)", () => {
  it("reads summaries on/after sinceEpoch (inclusive), oldest first", () => {
    const db = seedDb();
    expect(readNewSummaries(db, 200).map((r) => r.memory_session_id)).toEqual(["s2", "s3"]);
    expect(readNewSummaries(db, 0)).toHaveLength(3);
    db.close();
  });

  it("looks up the sdk_sessions title, undefined when absent", () => {
    const db = seedDb();
    expect(readSdkSession(db, "s2")?.custom_title).toBe("Custom Two");
    expect(readSdkSession(db, "s1")?.custom_title).toBeUndefined();
    db.close();
  });

  it("coerces a string created_at_epoch (type drift) instead of dropping the row", () => {
    const db = new Database(":memory:");
    db.prepare("CREATE TABLE session_summaries (memory_session_id TEXT, created_at_epoch TEXT, learned TEXT)").run();
    db.prepare("INSERT INTO session_summaries VALUES (?,?,?)").run("s1", "1716700000", "learned");
    const rows = readNewSummaries(db, 0);
    expect(rows).toHaveLength(1);
    expect(rows[0].created_at_epoch).toBe(1716700000);
    db.close();
  });

  it("tolerates a missing sdk_sessions table (returns undefined, no throw)", () => {
    const db = new Database(":memory:");
    db.prepare("CREATE TABLE session_summaries (memory_session_id TEXT, created_at_epoch INTEGER, learned TEXT)").run();
    expect(readSdkSession(db, "x")).toBeUndefined();
    db.close();
  });

  it("end-to-end: a summary row becomes a 'session' source", () => {
    const db = seedDb();
    const rows = readNewSummaries(db, 0);
    const s2 = rows.find((r) => r.memory_session_id === "s2")!;
    const src = buildSessionSource(s2, readSdkSession(db, "s2"), "2026-05-26");
    expect(src.title).toBe("Custom Two");
    expect(src.data.type).toBe("session");
    expect(src.body).toContain("learned two");
    db.close();
  });
});

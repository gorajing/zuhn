import { describe, it, expect, beforeEach, vi } from "vitest";
import type Database from "better-sqlite3";
import { initDb, upsertInsight } from "./db";
import type { InsightData } from "../schemas/frontmatter";

// Mock embeddings module to avoid Ollama dependency
vi.mock("./embeddings", () => ({
  isOllamaAvailable: vi.fn().mockResolvedValue(false),
  embedText: vi.fn(),
}));

vi.mock("./vector-search", () => ({
  initVectorTable: vi.fn(),
  hybridSearch: vi.fn(),
}));

// ─── Test helpers ───────────────────────────────────────────────────

function createTestDb(): Database.Database {
  return initDb(":memory:");
}

function makeInsight(overrides: Partial<InsightData> = {}): InsightData {
  return {
    id: "INS-260320-0001",
    domain: "startups",
    topic: "fundraising",
    title: "Bootstrap before raising VC",
    actionability: "immediate",
    confidence: "high",
    shelf_life: "evergreen",
    status: "active",
    tags: ["bootstrapping", "fundraising"],
    sources: [{ type: "blog", title: "Test Source" }],
    date_extracted: "2026-03-20",
    last_accessed: null,
    access_count: 0,
    indexed: true,
    embedded: false,
    resolutions: {
      one_line: "Build revenue before seeking VC funding",
      standard: "Bootstrapping gives founders leverage in fundraising.",
    },
    ...overrides,
  } as InsightData;
}

// ─── Tests ──────────────────────────────────────────────────────────

describe("generateBrief", () => {
  let db: Database.Database;

  beforeEach(() => {
    db = createTestDb();
  });

  it("returns empty brief for no-match query", async () => {
    const { generateBrief } = await import("./brief");
    const brief = await generateBrief(db, "quantum chromodynamics");

    expect(brief.query).toBe("quantum chromodynamics");
    expect(brief.principles).toHaveLength(0);
    expect(brief.predictions).toHaveLength(0);
    expect(brief.decisions).toHaveLength(0);
    expect(brief.tensions).toHaveLength(0);
    expect(brief.evidence).toHaveLength(0);
    expect(brief.track_record).toEqual({
      confirmed: 0,
      falsified: 0,
      untested: 0,
    });
  });

  it("returns insights as evidence when search matches", async () => {
    // Insert test insights
    upsertInsight(db, makeInsight({ id: "INS-260320-0001", title: "Bootstrap first" }), "test/path1.md");
    upsertInsight(db, makeInsight({
      id: "INS-260320-0002",
      title: "VC fundraising takes months",
      tags: ["vc", "fundraising"],
    }), "test/path2.md");

    const { generateBrief } = await import("./brief");
    const brief = await generateBrief(db, "fundraising bootstrap VC");

    expect(brief.evidence.length).toBeGreaterThan(0);
    expect(brief.matched_domains).toContain("startups");
  });

  it("handles punctuation in queries without crashing", async () => {
    upsertInsight(db, makeInsight(), "test/path.md");

    const { generateBrief } = await import("./brief");

    // All of these should run without throwing
    await expect(generateBrief(db, "raise VC?")).resolves.toBeDefined();
    await expect(generateBrief(db, "pre-seed/seed")).resolves.toBeDefined();
    await expect(generateBrief(db, "raise: VC")).resolves.toBeDefined();
    await expect(generateBrief(db, 'the "best" approach')).resolves.toBeDefined();
    await expect(generateBrief(db, "cost/benefit analysis!")).resolves.toBeDefined();
  });

  it("respects domain filter in options", async () => {
    upsertInsight(db, makeInsight({
      id: "INS-260320-0001",
      domain: "startups",
      title: "Startup fundraising insight",
    }), "test/path1.md");
    upsertInsight(db, makeInsight({
      id: "INS-260320-0002",
      domain: "investing",
      title: "Investment fundraising insight",
      tags: ["investing"],
    }), "test/path2.md");

    const { generateBrief } = await import("./brief");
    const brief = await generateBrief(db, "fundraising", { domain: "startups" });

    // Should only match startups domain
    for (const e of brief.evidence) {
      expect(e.domain).toBe("startups");
    }
  });

  it("degrades cleanly with empty query after sanitization", async () => {
    const { generateBrief } = await import("./brief");
    const brief = await generateBrief(db, "???!!!");

    expect(brief.principles).toHaveLength(0);
    expect(brief.evidence).toHaveLength(0);
  });
});

describe("renderBriefAsMarkdown", () => {
  it("renders empty brief without crashing", async () => {
    const { renderBriefAsMarkdown } = await import("./brief");

    const emptyBrief = {
      query: "test query",
      matched_domains: [],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };

    const md = renderBriefAsMarkdown(emptyBrief);
    expect(md).toContain("Decision Brief");
    expect(md).toContain("test query");
    expect(md).toContain("No principles matched");
  });

  it("renders principles with match reasons", async () => {
    const { renderBriefAsMarkdown } = await import("./brief");

    const brief = {
      query: "test",
      matched_domains: ["startups"],
      principles: [
        {
          id: "PRI-260406-0001",
          title: "Test Principle",
          summary: "A test summary",
          confidence: "high",
          empirical_state: "confirmed" as const,
          supporting_insight_overlap: 3,
          match_reasons: ["supports 3 matched insights", "confirmed"],
        },
      ],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 1, falsified: 0, untested: 0 },
    };

    const md = renderBriefAsMarkdown(brief);
    expect(md).toContain("[confirmed]");
    expect(md).toContain("Test Principle");
    expect(md).toContain("supports 3 matched insights");
  });
});

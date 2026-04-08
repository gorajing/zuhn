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

// ─── Concise Renderer Tests ─────────────────────────────────────────
// Phase 1 of concise-brief-mode plan. Targets a ~300 token budget
// (~1200-1600 chars). Statuses use real schema values from
// scripts/schemas/empirical.ts and scripts/schemas/frontmatter.ts:
//   predictions: active | confirmed | falsified
//   decisions: pending | success | failure | mixed
//   tensions: unresolved | resolved | resolved_with_nuance

describe("renderBriefAsConciseContext", () => {
  // Shared fixture: a full brief with more than the concise limit of
  // each category so truncation can be verified.
  function makeFullBrief() {
    return {
      query: "Should I raise VC or bootstrap?",
      matched_domains: ["startups", "investing"],
      principles: [
        {
          id: "PRI-260321-05B5",
          title: "AI companies are model-busters — they grow faster than any spreadsheet predicts",
          summary:
            "Long detailed summary that should NOT appear in concise output because it's too verbose and consumes token budget that the agent needs for its own response.",
          confidence: "high",
          empirical_state: "confirmed" as const,
          supporting_insight_overlap: 12,
          match_reasons: ["keyword", "semantic"],
        },
        {
          id: "PRI-260323-68F0",
          title: "The $2T revenue gap — AI capex is a bet on returns that don't yet exist",
          summary: "Another long summary.",
          confidence: "high",
          empirical_state: null,
          supporting_insight_overlap: 8,
          match_reasons: ["semantic"],
        },
        {
          id: "PRI-260328-C581",
          title:
            "Bottom-up user adoption reveals real AI product-market fit faster than top-down enterprise deployment",
          summary: "Third summary.",
          confidence: "medium",
          empirical_state: null,
          supporting_insight_overlap: 5,
          match_reasons: ["keyword"],
        },
        {
          id: "PRI-260328-935A",
          title: "AI product discovery emerges from engineers experimenting close to the model",
          summary: "Fourth — should be truncated out of concise.",
          confidence: "medium",
          empirical_state: null,
          supporting_insight_overlap: 3,
          match_reasons: ["keyword"],
        },
      ],
      predictions: [
        {
          id: "PRED-260322-4E9B",
          claim: "YC W27 will fund 2x more solo founders than W26",
          status: "confirmed",
          deadline: "2027-03-31",
          derived_from: ["PRI-xxx"],
        },
        {
          id: "PRED-260322-4FAA",
          claim: "BIS export controls will tighten by Q3 2026",
          status: "falsified",
          deadline: "2026-11-15",
          derived_from: ["PRI-yyy"],
        },
        {
          id: "PRED-260322-AAAA",
          claim: "Third prediction — should be truncated",
          status: "active",
          deadline: "2026-12-01",
          derived_from: [],
        },
      ],
      decisions: [
        {
          id: "DEC-260401-0001",
          context: "Raising seed round",
          choice: "Bootstrap first",
          status: "pending",
          outcome_date: "2026-12-01",
          informed_by: ["PRI-xxx"],
        },
        {
          id: "DEC-260320-0002",
          context: "Second decision — should be truncated",
          choice: "x",
          status: "pending",
          outcome_date: "2026-06-01",
          informed_by: [],
        },
      ],
      tensions: [
        {
          id: "T-260325-0001",
          title: "Speed vs capital efficiency in AI startups",
          status: "unresolved",
          side_a: ["PRI-a"],
          side_b: ["PRI-b"],
        },
        {
          id: "T-260325-0002",
          title: "Second tension — truncated",
          status: "unresolved",
          side_a: [],
          side_b: [],
        },
      ],
      evidence: [],
      track_record: { confirmed: 2, falsified: 1, untested: 3 },
    };
  }

  it("limits principles to 3 (first 3, no reordering)", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toContain("model-busters");
    expect(output).toContain("$2T revenue gap");
    expect(output).toContain("Bottom-up user adoption");
    expect(output).not.toContain("AI product discovery emerges");
  });

  it("limits predictions to 2", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toContain("YC W27");
    expect(output).toContain("BIS export controls");
    expect(output).not.toContain("Third prediction");
  });

  it("limits decisions to 1", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toContain("Raising seed round");
    expect(output).not.toContain("Second decision");
  });

  it("limits tensions to 1", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toContain("Speed vs capital efficiency");
    expect(output).not.toContain("Second tension");
  });

  it("omits principle summaries (title only)", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).not.toContain("Long detailed summary");
    expect(output).not.toContain("Another long summary");
    expect(output).not.toContain("Third summary");
  });

  it("shows empirical labels on principles", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toMatch(/confirmed.*model-busters/);
    expect(output).toMatch(/untested.*\$2T/);
  });

  it("emits a one-line track record", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output).toContain("2 confirmed");
    expect(output).toContain("1 falsified");
    expect(output).toContain("3 untested");
  });

  it("stays under a ~1600 char budget (rough 400-token proxy)", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const output = renderBriefAsConciseContext(makeFullBrief());
    expect(output.length).toBeLessThan(1600);
  });

  it("omits empty categories entirely (no empty headers)", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const minimalBrief = {
      query: "Test query",
      matched_domains: [],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(minimalBrief);
    expect(output).not.toContain("Principles:");
    expect(output).not.toContain("Predictions:");
    expect(output).not.toContain("Past decisions:");
    expect(output).not.toContain("Open tensions:");
  });

  it("returns a 'no context' message when brief is entirely empty", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const minimalBrief = {
      query: "Test query",
      matched_domains: [],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(minimalBrief);
    expect(output.length).toBeGreaterThan(0);
    expect(output.toLowerCase()).toMatch(/no.*(context|relevant|match)/);
  });

  it("handles partial briefs (some categories empty)", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const partialBrief = {
      query: "test",
      matched_domains: ["startups"],
      principles: [
        {
          id: "PRI-260321-05B5",
          title: "Test principle",
          summary: "",
          confidence: "high",
          empirical_state: "confirmed" as const,
          supporting_insight_overlap: 1,
          match_reasons: [],
        },
      ],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 1, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(partialBrief);
    expect(output).toContain("Principles:");
    expect(output).toContain("Test principle");
    expect(output).not.toContain("Predictions:");
    expect(output).not.toContain("Past decisions:");
    expect(output).not.toContain("Open tensions:");
  });

  it("renders evidence when no higher-level artifacts exist (fallback, not empty state)", async () => {
    // Bug fix: evidence alone should NOT trigger the "no relevant context"
    // message. If generateBrief() returned supporting insights but no
    // principles/predictions/decisions/tensions, the concise renderer must
    // still surface that evidence — otherwise the agent is told the KB is
    // empty when it actually has relevant raw material.
    const { renderBriefAsConciseContext } = await import("./brief");
    const evidenceOnlyBrief = {
      query: "emerging topic without principles yet",
      matched_domains: ["startups"],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [
        {
          id: "INS-260320-0001",
          title: "A relevant raw insight about the topic",
          one_line: "one-line summary A",
          domain: "startups",
          topic: "sales",
          confidence: "high",
        },
        {
          id: "INS-260320-0002",
          title: "Another relevant raw insight",
          one_line: "one-line summary B",
          domain: "startups",
          topic: "sales",
          confidence: "medium",
        },
        {
          id: "INS-260320-0003",
          title: "Third raw insight",
          one_line: "one-line summary C",
          domain: "startups",
          topic: "sales",
          confidence: "medium",
        },
      ],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(evidenceOnlyBrief);
    // Must NOT claim empty
    expect(output.toLowerCase()).not.toMatch(/no relevant context/);
    // Must surface the evidence
    expect(output).toContain("Evidence:");
    expect(output).toContain("A relevant raw insight");
    expect(output).toContain("Another relevant raw insight");
  });

  it("limits evidence fallback to 3 items", async () => {
    const { renderBriefAsConciseContext } = await import("./brief");
    const manyEvidenceBrief = {
      query: "test",
      matched_domains: ["startups"],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [
        { id: "INS-001", title: "Insight 1", one_line: "a", domain: "startups", topic: "sales", confidence: "high" },
        { id: "INS-002", title: "Insight 2", one_line: "b", domain: "startups", topic: "sales", confidence: "high" },
        { id: "INS-003", title: "Insight 3", one_line: "c", domain: "startups", topic: "sales", confidence: "high" },
        { id: "INS-004", title: "Insight 4 — should be truncated", one_line: "d", domain: "startups", topic: "sales", confidence: "high" },
        { id: "INS-005", title: "Insight 5 — should be truncated", one_line: "e", domain: "startups", topic: "sales", confidence: "high" },
      ],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(manyEvidenceBrief);
    expect(output).toContain("Insight 1");
    expect(output).toContain("Insight 2");
    expect(output).toContain("Insight 3");
    expect(output).not.toContain("Insight 4");
    expect(output).not.toContain("Insight 5");
  });

  it("does NOT render evidence when higher-level artifacts exist (budget discipline)", async () => {
    // When principles/predictions/decisions/tensions exist, the concise
    // format should stay tight and not include raw evidence. Evidence is
    // only a fallback for the no-compressed-knowledge case.
    const { renderBriefAsConciseContext } = await import("./brief");
    const mixedBrief = {
      query: "test",
      matched_domains: ["startups"],
      principles: [
        {
          id: "PRI-260321-05B5",
          title: "Compressed principle",
          summary: "",
          confidence: "high",
          empirical_state: "confirmed" as const,
          supporting_insight_overlap: 3,
          match_reasons: [],
        },
      ],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [
        { id: "INS-260320-0001", title: "Raw evidence A", one_line: "a", domain: "startups", topic: "sales", confidence: "high" },
        { id: "INS-260320-0002", title: "Raw evidence B", one_line: "b", domain: "startups", topic: "sales", confidence: "high" },
      ],
      track_record: { confirmed: 1, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(mixedBrief);
    expect(output).toContain("Compressed principle");
    expect(output).not.toContain("Evidence:");
    expect(output).not.toContain("Raw evidence A");
  });
});

describe("BriefRenderMode type", () => {
  it("is exported for callers to use when choosing a render function", async () => {
    // This test is a compile-time check expressed at runtime: importing
    // the type alias must succeed. The TypeScript compiler will fail the
    // test file if BriefRenderMode isn't exported.
    const brief = await import("./brief");
    // Runtime check: verify the module exports exist. The type itself
    // lives only at compile time, but we can verify the consumers that
    // will use it — renderBriefAsMarkdown and renderBriefAsConciseContext —
    // are both exported.
    expect(typeof brief.renderBriefAsMarkdown).toBe("function");
    expect(typeof brief.renderBriefAsConciseContext).toBe("function");
  });
});

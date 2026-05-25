import { describe, expect, it } from "vitest";
import Database from "better-sqlite3";

import {
  auditInsights,
  buildNoveltyComputer,
  checkAttributionResolves,
  checkStanceDirectional,
  checkStancePresent,
  checkTopicMatchesPath,
  cosineSimilarity,
  isDirectionalStance,
  normalizeTitle,
  normalizeUrl,
  type GateInsight,
  type NearestFn,
  type SourceIndex,
} from "./insight-gate";
import { initVectorTable, upsertEmbedding } from "./vector-search";

// ─── Fixtures ─────────────────────────────────────────────────────────

function mk(over: Partial<GateInsight> = {}): GateInsight {
  return {
    id: "INS-260525-AAAA",
    domain: "ai-development",
    topic: "agents",
    title: "A title",
    stance: "Agents fail because harness context is incomplete",
    sources: [{ title: "Known Source", url: "https://example.com/a" }],
    dateExtracted: "2026-05-25",
    filePath: "/abs/domains/ai-development/agents/x.md",
    relPath: "domains/ai-development/agents/x.md",
    ...over,
  };
}

const INDEX: SourceIndex = {
  titles: new Set(["known source"]),
  urls: new Set(["example.com/a"]),
};

// ─── isDirectionalStance ──────────────────────────────────────────────

describe("isDirectionalStance", () => {
  const directional = [
    "AI will displace most white-collar workers",
    "Context engineering beats model choice for agent reliability",
    "Teams should adopt typed schemas because runtime checks rot",
    "Verification is the bottleneck, so agents need a quality gate",
    "Founders who ship early outperform those who plan",
    "Memory capture is commoditizing rather than a durable moat",
    // Regression: real corpus stances the heuristic wrongly flagged before the
    // vacuous-list narrowing + directional-verb additions (incidental "good"/"bad").
    "Building intuitive feel for what an AI is good at and when it hallucinates is a valid form of knowledge, not a substitute for 'real' understanding.",
    "The booster-doomer debate creates a false spectrum where the only question is whether powerful AI is good or bad",
    "Distributing systems across multiple geographic regions provides fault tolerance against regional failures but introduces data consistency challenges",
  ];
  for (const s of directional) {
    it(`passes directional claim: "${s.slice(0, 40)}"`, () => {
      expect(isDirectionalStance(s)).toBe(true);
    });
  }

  const weak = [
    "This discusses AI's impact on jobs",
    "An overview of agent patterns",
    "It covers prompt engineering basics",
    "AI is important",
    "Embeddings are interesting",
    "The talk explains how transformers work",
    "AI matters", // too short
    "", // empty
  ];
  for (const s of weak) {
    it(`rejects weak/descriptive claim: "${s.slice(0, 40)}"`, () => {
      expect(isDirectionalStance(s)).toBe(false);
    });
  }

  it("lets a directional marker override a vacuous value word", () => {
    expect(isDirectionalStance("Latency is important because it predicts churn")).toBe(true);
  });
});

// ─── Stance checks ────────────────────────────────────────────────────

describe("checkStancePresent", () => {
  it("fails on empty / whitespace-only stance", () => {
    expect(checkStancePresent(mk({ stance: "" })).passed).toBe(false);
    expect(checkStancePresent(mk({ stance: "   " })).passed).toBe(false);
  });
  it("passes when a stance exists", () => {
    expect(checkStancePresent(mk({ stance: "X beats Y" })).passed).toBe(true);
  });
});

describe("checkStanceDirectional", () => {
  it("reports 'no stance' when absent (does not crash)", () => {
    const r = checkStanceDirectional(mk({ stance: "" }));
    expect(r.passed).toBe(false);
    expect(r.detail).toBe("no stance");
  });
  it("fails a vacuous stance with a helpful detail", () => {
    const r = checkStanceDirectional(mk({ stance: "AI is important" }));
    expect(r.passed).toBe(false);
    expect(r.detail).toContain("not directional");
  });
  it("passes a directional stance", () => {
    expect(checkStanceDirectional(mk({ stance: "X reduces cost because Y" })).passed).toBe(true);
  });
});

// ─── Normalizers ──────────────────────────────────────────────────────

describe("normalizeTitle", () => {
  it("trims, lowercases, and collapses whitespace", () => {
    expect(normalizeTitle("  Some   Source  ")).toBe("some source");
  });
});

describe("normalizeUrl", () => {
  it("strips protocol, www, and trailing slashes; lowercases", () => {
    expect(normalizeUrl("https://www.Example.com/x/")).toBe("example.com/x");
    expect(normalizeUrl("http://example.com/a")).toBe("example.com/a");
  });
});

// ─── Attribution ──────────────────────────────────────────────────────

describe("checkAttributionResolves", () => {
  it("fails when sources[] is empty (orphan)", () => {
    const r = checkAttributionResolves(mk({ sources: [] }), INDEX);
    expect(r.passed).toBe(false);
    expect(r.detail).toBe("no sources[]");
  });
  it("resolves by normalized url", () => {
    const ins = mk({ sources: [{ url: "https://www.example.com/a/" }] });
    expect(checkAttributionResolves(ins, INDEX).passed).toBe(true);
  });
  it("resolves by normalized title", () => {
    const ins = mk({ sources: [{ title: "  known source " }] });
    expect(checkAttributionResolves(ins, INDEX).passed).toBe(true);
  });
  it("passes if any one of several refs resolves", () => {
    const ins = mk({ sources: [{ title: "Unknown" }, { url: "https://example.com/a" }] });
    expect(checkAttributionResolves(ins, INDEX).passed).toBe(true);
  });
  it("fails when nothing resolves", () => {
    const ins = mk({ sources: [{ title: "Ghost", url: "https://nope.com/z" }] });
    expect(checkAttributionResolves(ins, INDEX).passed).toBe(false);
  });
});

// ─── Topic / path ─────────────────────────────────────────────────────

describe("checkTopicMatchesPath", () => {
  it("passes when frontmatter domain/topic match the path", () => {
    expect(checkTopicMatchesPath(mk()).passed).toBe(true);
  });
  it("fails on a domain/topic mismatch and explains it", () => {
    const r = checkTopicMatchesPath(mk({ domain: "startups" }));
    expect(r.passed).toBe(false);
    expect(r.detail).toContain("!= path");
  });
});

// ─── Cosine similarity ────────────────────────────────────────────────

describe("cosineSimilarity", () => {
  it("is 1 for identical vectors", () => {
    const v = new Float32Array([1, 2, 3]);
    expect(cosineSimilarity(v, v)).toBeCloseTo(1, 6);
  });
  it("is 0 for orthogonal vectors", () => {
    expect(cosineSimilarity(new Float32Array([1, 0]), new Float32Array([0, 1]))).toBeCloseTo(0, 6);
  });
  it("is -1 for opposite vectors", () => {
    expect(cosineSimilarity(new Float32Array([1, 1]), new Float32Array([-1, -1]))).toBeCloseTo(-1, 6);
  });
  it("is invariant to magnitude (direction only)", () => {
    expect(cosineSimilarity(new Float32Array([2, 0]), new Float32Array([5, 0]))).toBeCloseTo(1, 6);
  });
  it("returns 0 for a zero vector", () => {
    expect(cosineSimilarity(new Float32Array([0, 0]), new Float32Array([1, 1]))).toBe(0);
  });
});

// ─── Audit aggregation ────────────────────────────────────────────────

describe("auditInsights", () => {
  const good = mk({
    id: "INS-1",
    stance: "X reduces cost because Y",
    sources: [{ title: "Known Source" }],
    relPath: "domains/ai-development/agents/a.md",
  });
  const weak = mk({
    id: "INS-2",
    stance: "AI is important",
    sources: [{ url: "https://example.com/a" }],
    relPath: "domains/ai-development/agents/b.md",
  });
  const orphan = mk({
    id: "INS-3",
    stance: "",
    sources: [],
    domain: "startups",
    topic: "lonely",
    relPath: "domains/startups/lonely/c.md",
  });

  it("aggregates coverage counts per check", () => {
    const { report } = auditInsights([good, weak, orphan], INDEX);
    expect(report.total).toBe(3);
    expect(report.coverage.stance_present).toBe(2); // good + weak
    expect(report.coverage.stance_directional).toBe(1); // good only
    expect(report.coverage.attribution_resolves).toBe(2); // good (title) + weak (url)
    expect(report.coverage.topic_matches_path).toBe(3); // all filed correctly
  });

  it("marks novelty unavailable (not 'all unembedded') when no novelty fn is supplied", () => {
    const { report } = auditInsights([good, weak, orphan], INDEX);
    expect(report.novelty.available).toBe(false);
    expect(report.novelty.embedded).toBe(0);
    expect(report.novelty.unembedded).toBe(0);
    expect(report.novelty.no_neighbor).toBe(0);
    expect(report.novelty.mean_similarity).toBeNull();
    expect(report.novelty.top_pairs).toEqual([]);
  });

  it("separates 'embedded but no neighbor' from 'unembedded' when novelty is available", () => {
    const nearest: NearestFn = (id) =>
      id === "INS-1"
        ? { nearestId: null, similarity: null, selfEmbedded: true } // embedded, but no INS neighbor
        : { nearestId: null, similarity: null, selfEmbedded: false }; // not embedded at all
    const { report } = auditInsights([good, weak], INDEX, nearest);
    expect(report.novelty.available).toBe(true);
    expect(report.novelty.embedded).toBe(1);
    expect(report.novelty.no_neighbor).toBe(1);
    expect(report.novelty.unembedded).toBe(1);
  });

  it("detects singleton topics from the file path", () => {
    const { report } = auditInsights([good, weak, orphan], INDEX);
    expect(report.fragmentation.total_topics).toBe(2);
    expect(report.fragmentation.singletons).toBe(1);
    expect(report.fragmentation.singleton_topics).toEqual(["startups/lonely"]);
  });

  it("collects failing examples with details", () => {
    const { report } = auditInsights([good, weak, orphan], INDEX);
    expect(report.failing_examples.stance_present.map((e) => e.id)).toEqual(["INS-3"]);
    expect(report.failing_examples.stance_directional.map((e) => e.id)).toEqual(["INS-2", "INS-3"]);
    expect(report.failing_examples.attribution_resolves.map((e) => e.id)).toEqual(["INS-3"]);
  });

  it("respects exampleLimit", () => {
    const orphans = Array.from({ length: 5 }, (_, i) =>
      mk({ id: `INS-X${i}`, sources: [] })
    );
    const { report } = auditInsights(orphans, INDEX, undefined, { exampleLimit: 2 });
    expect(report.failing_examples.attribution_resolves).toHaveLength(2);
  });

  it("builds the cosine histogram and block simulation from a novelty fn", () => {
    const nearest: NearestFn = (id) =>
      id === "INS-1"
        ? { nearestId: "INS-9", similarity: 0.97, selfEmbedded: true }
        : { nearestId: null, similarity: null, selfEmbedded: false };
    const { report } = auditInsights([good], INDEX, nearest);
    expect(report.novelty.available).toBe(true);
    expect(report.novelty.embedded).toBe(1);
    expect(report.novelty.histogram[">=0.95"]).toBe(1);
    expect(report.novelty.block_simulation["0.85"]).toBe(1);
    expect(report.novelty.block_simulation["0.95"]).toBe(1);
    expect(report.novelty.mean_similarity).toBe(0.97);
    expect(report.novelty.top_pairs).toEqual([
      { id: "INS-1", nearestId: "INS-9", similarity: 0.97 },
    ]);
  });
});

// ─── buildNoveltyComputer (integration: real in-memory sqlite-vec) ─────
// Exercises the DB path codex flagged as untested: float32 blob round-trip,
// PRI-/MM- filtering, and exact-cosine computation.

describe("buildNoveltyComputer (in-memory sqlite-vec)", () => {
  /** Build a 768-dim vector from [index, value] pairs (rest zero). */
  function vec768(pairs: Array<[number, number]>): number[] {
    const v = new Array(768).fill(0);
    for (const [i, x] of pairs) v[i] = x;
    return v;
  }

  it("returns the nearest INSIGHT neighbor with exact cosine, skipping PRI-/MM-", () => {
    const db = new Database(":memory:");
    initVectorTable(db);
    upsertEmbedding(db, "INS-A", vec768([[0, 1]]));
    upsertEmbedding(db, "PRI-C", vec768([[0, 1], [1, 0.001]])); // ~identical to A, but a principle
    upsertEmbedding(db, "MM-D", vec768([[0, 1], [2, 0.001]])); // ~identical to A, but a mental model
    upsertEmbedding(db, "INS-B", vec768([[0, 1], [1, 0.3]])); // cosine(A,B) = 1/sqrt(1.09) ≈ 0.958

    const nearest = buildNoveltyComputer(db);
    const r = nearest("INS-A");

    expect(r.selfEmbedded).toBe(true);
    expect(r.nearestId).toBe("INS-B"); // PRI-C and MM-D are nearer but filtered out
    expect(r.similarity).toBeCloseTo(0.958, 2);
    db.close();
  });

  it("reports selfEmbedded=false when the insight has no embedding row", () => {
    const db = new Database(":memory:");
    initVectorTable(db);
    upsertEmbedding(db, "INS-B", vec768([[0, 1]]));

    const r = buildNoveltyComputer(db)("INS-MISSING");
    expect(r.selfEmbedded).toBe(false);
    expect(r.nearestId).toBeNull();
    expect(r.similarity).toBeNull();
    db.close();
  });

  it("reports selfEmbedded=true with no neighbor when only non-insight rows exist", () => {
    const db = new Database(":memory:");
    initVectorTable(db);
    upsertEmbedding(db, "INS-A", vec768([[0, 1]]));
    upsertEmbedding(db, "PRI-C", vec768([[0, 1], [1, 0.1]]));

    const r = buildNoveltyComputer(db)("INS-A");
    expect(r.selfEmbedded).toBe(true);
    expect(r.nearestId).toBeNull();
    expect(r.similarity).toBeNull();
    db.close();
  });
});

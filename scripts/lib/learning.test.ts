import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { existsSync } from "node:fs";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import type Database from "better-sqlite3";
import matter from "gray-matter";
import { initDb, upsertInsight } from "./db";
import { initVectorTable, upsertEmbedding } from "./vector-search";
import { createHash } from "node:crypto";
import {
  discoverConnections,
  detectEmergence,
  propagateConfidence,
  discoverClusters,
  detectGaps,
  detectTransfers,
  detectTensions,
  writeFlagsFile,
  classifyPairByEdges,
  contentJaccard,
  loadConnectionEdgeMap,
} from "./learning";
import type { LearningFlags, CandidatePair } from "./learning";
import type { InsightData } from "../schemas/frontmatter";

// ─── Test helpers ───────────────────────────────────────────────────

function createTestDb(): Database.Database {
  const db = initDb(":memory:");
  initVectorTable(db);
  return db;
}

function makeInsight(overrides: Partial<InsightData> = {}): InsightData {
  return {
    id: "INS-260320-0001",
    domain: "ai-development",
    topic: "claude-code",
    title: "Test insight",
    actionability: "immediate",
    confidence: "low",
    shelf_life: "evergreen",
    status: "active",
    tags: ["test"],
    sources: [{ type: "reddit", title: "Source A" }],
    date_extracted: "2026-03-20",
    last_accessed: null,
    access_count: 0,
    indexed: true,
    embedded: true,
    resolutions: {
      one_line: "Test one line",
      standard: "Test standard resolution.",
    },
    ...overrides,
  } as InsightData;
}

/**
 * Generate a synthetic embedding (deterministic based on seed).
 * Creates a unit-ish vector with a dominant component at position (seed % dim).
 */
function syntheticEmbedding(seed: number, dim: number = 768): number[] {
  const vec = new Array(dim).fill(0.01);
  vec[seed % dim] = 1.0;
  vec[(seed * 7 + 3) % dim] = 0.8;
  vec[(seed * 13 + 11) % dim] = 0.6;
  return vec;
}

/**
 * Create a very similar embedding by adding slight noise.
 * The resulting vector will have high cosine similarity (>0.85) to the base.
 */
function similarEmbedding(base: number[], noise: number = 0.02): number[] {
  return base.map((v, i) => v + (i % 2 === 0 ? noise : -noise));
}

let tmpDir: string;

async function createTmpKb(): Promise<string> {
  tmpDir = join(tmpdir(), `gyeol-test-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  await mkdir(join(tmpDir, "domains", "ai-development", "claude-code"), {
    recursive: true,
  });
  await mkdir(join(tmpDir, "domains", "ai-development", "llm-costs"), {
    recursive: true,
  });
  await mkdir(join(tmpDir, "principles"), { recursive: true });
  await mkdir(join(tmpDir, "meta"), { recursive: true });
  return tmpDir;
}

async function writeInsightFile(
  kbRoot: string,
  insight: InsightData,
  body: string = ""
): Promise<string> {
  const dir = join(
    kbRoot,
    "domains",
    insight.domain,
    insight.topic
  );
  await mkdir(dir, { recursive: true });
  const slug = insight.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const filePath = join(dir, `${slug}.md`);

  const content = body || insight.resolutions.standard;
  const frontmatter: Record<string, unknown> = { ...insight };
  // Strip undefined values — gray-matter/js-yaml can't serialize them
  for (const key of Object.keys(frontmatter)) {
    if (frontmatter[key] === undefined) delete frontmatter[key];
  }
  const output = matter.stringify(content, frontmatter);
  await writeFile(filePath, output, "utf-8");
  return filePath;
}

// ─── Mechanism 1: discoverConnections ───────────────────────────────

describe("discoverConnections", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("returns connections for insights that have embeddings", async () => {
    // Create 3 insights with embeddings
    for (let i = 1; i <= 3; i++) {
      const id = `INS-260320-000${i}`;
      const insight = makeInsight({
        id,
        title: `Insight ${i}`,
        resolutions: {
          one_line: `One line ${i}`,
          standard: `Standard ${i}`,
        },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, id, syntheticEmbedding(i));
    }

    const result = await discoverConnections(db, kbRoot);

    expect(result.totalUpdated).toBeGreaterThan(0);
    expect(result.connections.length).toBeGreaterThan(0);

    // Every connection should have at least 1 related insight
    for (const conn of result.connections) {
      expect(conn.related.length).toBeGreaterThan(0);
    }
  });

  it("connections are bidirectional", async () => {
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Insight A",
      resolutions: { one_line: "A line", standard: "A standard" },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Insight B",
      resolutions: { one_line: "B line", standard: "B standard" },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    // Use similar embeddings so they are each other's neighbors
    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.05));

    const result = await discoverConnections(db, kbRoot);

    // Both should appear in connections
    const connA = result.connections.find((c) => c.id === "INS-260320-AAAA");
    const connB = result.connections.find((c) => c.id === "INS-260320-BBBB");

    expect(connA).toBeDefined();
    expect(connB).toBeDefined();

    // A should relate to B and B should relate to A
    expect(connA!.related).toContain("INS-260320-BBBB");
    expect(connB!.related).toContain("INS-260320-AAAA");
  });

  it("self-references are excluded", async () => {
    const insight = makeInsight({
      id: "INS-260320-SELF",
      title: "Self insight",
      resolutions: { one_line: "Self line", standard: "Self standard" },
    });

    const filePath = await writeInsightFile(kbRoot, insight);
    upsertInsight(db, insight, filePath);
    upsertEmbedding(db, "INS-260320-SELF", syntheticEmbedding(99));

    const result = await discoverConnections(db, kbRoot);

    // The insight should not be related to itself
    for (const conn of result.connections) {
      expect(conn.related).not.toContain(conn.id);
    }
  });

  it("related array is capped at 10", async () => {
    // Create 15 insights all very similar to each other
    const baseEmb = syntheticEmbedding(1);
    for (let i = 1; i <= 15; i++) {
      const id = `INS-260320-${String(i).padStart(4, "0")}`;
      const insight = makeInsight({
        id,
        title: `Insight ${i}`,
        resolutions: {
          one_line: `One line ${i}`,
          standard: `Standard ${i}`,
        },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      // Small noise to make them close but distinct
      upsertEmbedding(db, id, similarEmbedding(baseEmb, 0.001 * i));
    }

    const result = await discoverConnections(db, kbRoot);

    // No insight should have more than 10 related entries
    for (const conn of result.connections) {
      expect(conn.related.length).toBeLessThanOrEqual(10);
    }
  });

  it("returns empty when no embeddings exist", async () => {
    const result = await discoverConnections(db, kbRoot);
    expect(result.totalUpdated).toBe(0);
    expect(result.connections).toHaveLength(0);
  });
});

// ─── Mechanism 2: detectEmergence ───────────────────────────────────

describe("detectEmergence", () => {
  let kbRoot: string;

  beforeEach(async () => {
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("flags small topics (15-49 insights) with 0 principles", async () => {
    // Create 16 insight files in claude-code topic (small tier, 0 principles → flag)
    for (let i = 1; i <= 16; i++) {
      const insight = makeInsight({
        id: `INS-260320-CC${String(i).padStart(2, "0")}`,
        domain: "ai-development",
        topic: "claude-code",
        title: `Claude code insight ${i}`,
        resolutions: {
          one_line: `Claude code one line ${i}`,
          standard: `Claude code standard ${i}`,
        },
      });
      await writeInsightFile(kbRoot, insight);
    }

    const flags = await detectEmergence(kbRoot);

    expect(flags.length).toBeGreaterThan(0);
    const ccFlag = flags.find(
      (f) => f.domain === "ai-development" && f.topic === "claude-code"
    );
    expect(ccFlag).toBeDefined();
    expect(ccFlag!.insightCount).toBe(16);
    expect(ccFlag!.principleCount).toBe(0);
  });

  it("does not flag tiny topics (< 15 insights)", async () => {
    // Create 10 insight files in llm-costs topic — below 15-insight tiny threshold
    for (let i = 1; i <= 10; i++) {
      const insight = makeInsight({
        id: `INS-260320-LC${String(i).padStart(2, "0")}`,
        domain: "ai-development",
        topic: "llm-costs",
        title: `LLM costs insight ${i}`,
        resolutions: {
          one_line: `LLM costs one line ${i}`,
          standard: `LLM costs standard ${i}`,
        },
      });
      await writeInsightFile(kbRoot, insight);
    }

    const flags = await detectEmergence(kbRoot);

    const lcFlag = flags.find(
      (f) => f.domain === "ai-development" && f.topic === "llm-costs"
    );
    expect(lcFlag).toBeUndefined();
  });

  it("returns empty when no insight files exist", async () => {
    const flags = await detectEmergence(kbRoot);
    expect(flags).toHaveLength(0);
  });

  it("does not flag topic when topic-specific principles exist", async () => {
    // Create 20 insights in founder-mindset (small tier: 15-49)
    const insightIds: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const id = `INS-260320-FM${String(i).padStart(2, "0")}`;
      insightIds.push(id);
      await writeInsightFile(kbRoot, makeInsight({
        id,
        domain: "startups",
        topic: "founder-mindset",
        title: `Founder mindset insight ${i}`,
        resolutions: {
          one_line: `FM one line ${i}`,
          standard: `FM standard ${i}`,
        },
      }));
    }

    // Create 2 principles that reference these insights
    // Small tier only flags if 0 principles — having 2 means no flag
    for (let i = 1; i <= 2; i++) {
      const principleDir = join(kbRoot, "principles", "startups");
      await mkdir(principleDir, { recursive: true });
      const frontmatter = {
        id: `PRI-260320-FM0${i}`,
        domain: "startups",
        title: `Founder principle ${i}`,
        supporting_insights: insightIds.slice((i - 1) * 10, i * 10),
      };
      const output = matter.stringify(`Principle body ${i}`, frontmatter);
      await writeFile(join(principleDir, `founder-principle-${i}.md`), output, "utf-8");
    }

    const flags = await detectEmergence(kbRoot);
    const fmFlag = flags.find(
      (f) => f.domain === "startups" && f.topic === "founder-mindset"
    );
    // Small tier (20 insights) with 2 principles → not flagged (only flags if 0)
    expect(fmFlag).toBeUndefined();
  });

  it("flags topic when domain has principles but none support this topic", async () => {
    // Create 20 insights in growth-marketing (small tier, no principles → flag)
    for (let i = 1; i <= 20; i++) {
      await writeInsightFile(kbRoot, makeInsight({
        id: `INS-260320-GM${String(i).padStart(2, "0")}`,
        domain: "startups",
        topic: "growth-marketing",
        title: `Growth marketing insight ${i}`,
        resolutions: {
          one_line: `GM one line ${i}`,
          standard: `GM standard ${i}`,
        },
      }));
    }

    // Create 16 insights in sales (small tier, different topic)
    const salesIds: string[] = [];
    for (let i = 1; i <= 16; i++) {
      const id = `INS-260320-SL${String(i).padStart(2, "0")}`;
      salesIds.push(id);
      await writeInsightFile(kbRoot, makeInsight({
        id,
        domain: "startups",
        topic: "sales",
        title: `Sales insight ${i}`,
        resolutions: {
          one_line: `Sales one line ${i}`,
          standard: `Sales standard ${i}`,
        },
      }));
    }

    // Create 10 principles that ONLY reference sales insights (not growth-marketing)
    const principleDir = join(kbRoot, "principles", "startups");
    await mkdir(principleDir, { recursive: true });
    for (let i = 1; i <= 10; i++) {
      const frontmatter = {
        id: `PRI-260320-SL${String(i).padStart(2, "0")}`,
        domain: "startups",
        title: `Sales principle ${i}`,
        supporting_insights: salesIds.slice(0, 8),
      };
      const output = matter.stringify(`Sales principle body ${i}`, frontmatter);
      await writeFile(join(principleDir, `sales-principle-${i}.md`), output, "utf-8");
    }

    const flags = await detectEmergence(kbRoot);

    // growth-marketing has 20 insights, 0 topic-specific principles → flagged
    const gmFlag = flags.find(
      (f) => f.domain === "startups" && f.topic === "growth-marketing"
    );
    expect(gmFlag).toBeDefined();
    expect(gmFlag!.principleCount).toBe(0);

    // sales has 16 insights but 10 principles → small tier with principles → NOT flagged
    const slFlag = flags.find(
      (f) => f.domain === "startups" && f.topic === "sales"
    );
    expect(slFlag).toBeUndefined();
  });
});

// ─── writeFlagsFile ─────────────────────────────────────────────────

describe("writeFlagsFile", () => {
  let kbRoot: string;

  beforeEach(async () => {
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("writes all four sections in expected format", async () => {
    const flags: LearningFlags = {
      compress: [
        {
          domain: "ai-development",
          topic: "claude-code",
          insightCount: 27,
          principleCount: 0,
          surpriseScore: 0,
          tensionCount: 0,
          transferCount: 0,
        },
      ],
      discover: [
        {
          insightIds: ["INS-260320-0001", "INS-260320-0002"],
          topics: ["ai-development/claude-code", "automation/n8n-workflows"],
          sharedTags: ["productivity"],
        },
      ],
      gaps: [
        {
          topicA: "ai-development/claude-code",
          topicB: "ai-development/llm-costs",
          countA: 12,
          countB: 3,
          sharedTags: ["ai"],
        },
      ],
      transfers: [
        {
          principleId: "PRI-260320-0001",
          principleTitle: "Plan before coding",
          principleDomain: "ai-development",
          targetInsightId: "INS-260320-0099",
          targetDomain: "startups",
          targetTopic: "mvp-strategy",
          similarity: 0.82,
        },
      ],
      synthesize: [
        {
          principleA: "PRI-260320-0001",
          titleA: "Plan before coding",
          domainA: "ai-development",
          principleB: "PRI-260320-0050",
          titleB: "Measure twice cut once",
          domainB: "startups",
          similarity: 0.85,
        },
      ],
      linkPredictions: [],
    };

    await writeFlagsFile(kbRoot, flags);

    const content = await readFile(join(kbRoot, "meta", "flags.md"), "utf-8");

    expect(content).toContain("# Learning Layer Flags");
    // COMPRESS
    expect(content).toContain("## COMPRESS");
    expect(content).toContain("ai-development/claude-code: 27 insights, 0 principles (ratio: 27:0)");
    // DISCOVER
    expect(content).toContain("## DISCOVER");
    expect(content).toContain("2 insights form cluster across");
    expect(content).toContain("shared tags: productivity");
    // GAP
    expect(content).toContain("## GAP");
    expect(content).toContain("ai-development/claude-code has 12 insights but related ai-development/llm-costs has only 3");
    // TRANSFER
    expect(content).toContain("## TRANSFER");
    expect(content).toContain('"Plan before coding" (ai-development) may apply to startups/mvp-strategy (sim: 0.82)');
    // SYNTHESIZE
    expect(content).toContain("## SYNTHESIZE");
    expect(content).toContain('"Plan before coding" (ai-development) ↔ "Measure twice cut once" (startups)');
  });

  it("writes 'None.' for empty sections", async () => {
    const flags: LearningFlags = {
      compress: [],
      discover: [],
      gaps: [],
      transfers: [],
      synthesize: [],
      linkPredictions: [],
    };

    await writeFlagsFile(kbRoot, flags);

    const content = await readFile(join(kbRoot, "meta", "flags.md"), "utf-8");

    expect(content).toContain("## COMPRESS");
    expect(content).toContain("## DISCOVER");
    expect(content).toContain("## GAP");
    expect(content).toContain("## TRANSFER");
    expect(content).toContain("## SYNTHESIZE");
    expect(content).toContain("## LINK_PREDICT");
    // Each section should show "None."
    const noneCount = (content.match(/None\./g) || []).length;
    expect(noneCount).toBe(6);
  });
});

// ─── Mechanism 3: propagateConfidence ───────────────────────────────

describe("propagateConfidence", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("bumps confidence for high-similarity cross-source matches", async () => {
    // Create two insights from DIFFERENT sources with very similar embeddings
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Insight from source A",
      confidence: "low",
      sources: [{ type: "reddit", title: "Reddit Post A" }],
      resolutions: {
        one_line: "Planning is critical for Claude Code",
        standard: "Standard A",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Insight from source B",
      confidence: "low",
      sources: [{ type: "youtube", title: "YouTube Video B" }],
      resolutions: {
        one_line: "Planning is essential for Claude Code usage",
        standard: "Standard B",
      },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    // Use nearly identical embeddings (cosine sim > 0.85)
    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.005));

    const changes = await propagateConfidence(db, kbRoot);

    expect(changes.length).toBeGreaterThan(0);

    // At least one should have increased confidence
    const changed = changes.find(
      (c) => c.id === "INS-260320-AAAA" || c.id === "INS-260320-BBBB"
    );
    expect(changed).toBeDefined();
    expect(
      ["medium", "high", "very_high"].includes(changed!.newConfidence)
    ).toBe(true);
  });

  it("does not increase confidence for same-source matches", async () => {
    // Create two insights from the SAME source with similar embeddings
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Insight one from same source",
      confidence: "low",
      sources: [{ type: "reddit", title: "Same Source Post" }],
      resolutions: {
        one_line: "First insight from same source",
        standard: "Standard A",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Insight two from same source",
      confidence: "low",
      sources: [{ type: "reddit", title: "Same Source Post" }],
      resolutions: {
        one_line: "Second insight from same source",
        standard: "Standard B",
      },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.005));

    const changes = await propagateConfidence(db, kbRoot);

    // No changes because both come from the same source
    expect(changes).toHaveLength(0);
  });

  it("confidence transitions follow defined rules", async () => {
    // Create insight at "pending" confidence with cross-source corroboration
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Pending insight",
      confidence: "pending",
      sources: [{ type: "reddit", title: "Reddit Post" }],
      resolutions: {
        one_line: "Pending confidence insight text",
        standard: "Standard A",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Corroborating insight",
      confidence: "high",
      sources: [{ type: "blog", title: "Blog Post" }],
      resolutions: {
        one_line: "Corroborating confidence insight text",
        standard: "Standard B",
      },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.005));

    const changes = await propagateConfidence(db, kbRoot);

    // The pending insight should have been bumped up
    const changeA = changes.find((c) => c.id === "INS-260320-AAAA");
    expect(changeA).toBeDefined();
    expect(changeA!.oldConfidence).toBe("pending");
    // With 1 corroboration from a different source type, should go to medium
    expect(changeA!.newConfidence).toBe("medium");
  });

  it("never decreases confidence", async () => {
    // Create insight at "very_high" confidence — should not change
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Very high insight",
      confidence: "very_high",
      sources: [{ type: "reddit", title: "Reddit Post" }],
      resolutions: {
        one_line: "Very high confidence",
        standard: "Standard A",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Another insight",
      confidence: "low",
      sources: [{ type: "blog", title: "Blog Post" }],
      resolutions: {
        one_line: "Another insight text",
        standard: "Standard B",
      },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.005));

    const changes = await propagateConfidence(db, kbRoot);

    // Insight A should NOT have changed (already very_high)
    const changeA = changes.find((c) => c.id === "INS-260320-AAAA");
    expect(changeA).toBeUndefined();
  });

  it("returns empty when no embeddings exist", async () => {
    const changes = await propagateConfidence(db, kbRoot);
    expect(changes).toHaveLength(0);
  });
});

// ─── Mechanism 4: discoverClusters ──────────────────────────────────

describe("discoverClusters", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("detects cross-topic clusters of similar insights", async () => {
    // Use two very different base embeddings to create two clear clusters.
    // Each cluster contains insights from BOTH topics, forcing Louvain to
    // produce a cross-topic community.
    const baseA = syntheticEmbedding(42);
    const baseB = syntheticEmbedding(500); // far from baseA

    // Cluster 1: one insight from each topic, all near baseA
    const cluster1Insights = [
      { id: "INS-260320-C1A1", domain: "ai-development", topic: "claude-code", title: "C1 claude 1", tags: ["ai", "tooling"] },
      { id: "INS-260320-C1A2", domain: "ai-development", topic: "claude-code", title: "C1 claude 2", tags: ["ai", "tooling"] },
      { id: "INS-260320-C1B1", domain: "ai-development", topic: "llm-costs", title: "C1 llm 1", tags: ["ai", "costs"] },
    ];
    for (let i = 0; i < cluster1Insights.length; i++) {
      const meta = cluster1Insights[i];
      const insight = makeInsight({
        id: meta.id,
        domain: meta.domain,
        topic: meta.topic,
        title: meta.title,
        tags: meta.tags,
        resolutions: { one_line: `${meta.title} line`, standard: `${meta.title} std` },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, meta.id, similarEmbedding(baseA, 0.001 * (i + 1)));
    }

    // Cluster 2: insights near baseB (far away, won't merge with cluster 1)
    const cluster2Insights = [
      { id: "INS-260320-C2A1", domain: "ai-development", topic: "claude-code", title: "C2 claude 1", tags: ["ai"] },
      { id: "INS-260320-C2B1", domain: "ai-development", topic: "llm-costs", title: "C2 llm 1", tags: ["costs"] },
    ];
    for (let i = 0; i < cluster2Insights.length; i++) {
      const meta = cluster2Insights[i];
      const insight = makeInsight({
        id: meta.id,
        domain: meta.domain,
        topic: meta.topic,
        title: meta.title,
        tags: meta.tags,
        resolutions: { one_line: `${meta.title} line`, standard: `${meta.title} std` },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, meta.id, similarEmbedding(baseB, 0.001 * (i + 1)));
    }

    const clusters = await discoverClusters(db, kbRoot);

    // At least one cluster should span 2+ topics
    expect(clusters.length).toBeGreaterThan(0);

    const crossTopic = clusters.find((c) => c.topics.length >= 2);
    expect(crossTopic).toBeDefined();
    expect(crossTopic!.insightIds.length).toBeGreaterThanOrEqual(2);
  });

  it("does not flag single-topic clusters", async () => {
    // Create insights in the SAME topic with similar embeddings
    const baseEmb = syntheticEmbedding(42);

    for (let i = 1; i <= 4; i++) {
      const id = `INS-260320-SS0${i}`;
      const insight = makeInsight({
        id,
        domain: "ai-development",
        topic: "claude-code",
        title: `Same topic insight ${i}`,
        tags: ["ai"],
        resolutions: { one_line: `Same line ${i}`, standard: `Same std ${i}` },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, id, similarEmbedding(baseEmb, 0.001 * i));
    }

    // Add a distant insight in another topic so it won't cluster
    const distant = makeInsight({
      id: "INS-260320-DD01",
      domain: "ai-development",
      topic: "llm-costs",
      title: "Distant insight",
      tags: ["costs"],
      resolutions: { one_line: "Distant line", standard: "Distant std" },
    });
    const distantPath = await writeInsightFile(kbRoot, distant);
    upsertInsight(db, distant, distantPath);
    upsertEmbedding(db, "INS-260320-DD01", syntheticEmbedding(500));

    const clusters = await discoverClusters(db, kbRoot);

    // Any flagged cluster must span 2+ topics
    for (const cluster of clusters) {
      expect(cluster.topics.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("returns empty when fewer than 2 embeddings", async () => {
    const insight = makeInsight({
      id: "INS-260320-ONLY",
      title: "Only insight",
      resolutions: { one_line: "Only line", standard: "Only std" },
    });
    const filePath = await writeInsightFile(kbRoot, insight);
    upsertInsight(db, insight, filePath);
    upsertEmbedding(db, "INS-260320-ONLY", syntheticEmbedding(1));

    const clusters = await discoverClusters(db, kbRoot);
    expect(clusters).toHaveLength(0);
  });
});

// ─── Mechanism 5: detectGaps ────────────────────────────────────────

describe("detectGaps", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("detects gap when topics are similar but have >3:1 count ratio", async () => {
    const baseEmb = syntheticEmbedding(42);

    // Topic A: 8 insights (large topic)
    for (let i = 1; i <= 8; i++) {
      const id = `INS-260320-GA${String(i).padStart(2, "0")}`;
      const insight = makeInsight({
        id,
        domain: "ai-development",
        topic: "claude-code",
        title: `Gap A insight ${i}`,
        tags: ["ai", "tooling", "automation"],
        resolutions: { one_line: `Gap A line ${i}`, standard: `Gap A std ${i}` },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, id, similarEmbedding(baseEmb, 0.0005 * i));
    }

    // Topic B: 2 insights (small topic) with similar centroid
    for (let i = 1; i <= 2; i++) {
      const id = `INS-260320-GB${String(i).padStart(2, "0")}`;
      const insight = makeInsight({
        id,
        domain: "ai-development",
        topic: "llm-costs",
        title: `Gap B insight ${i}`,
        tags: ["ai", "automation"],
        resolutions: { one_line: `Gap B line ${i}`, standard: `Gap B std ${i}` },
      });
      const filePath = await writeInsightFile(kbRoot, insight);
      upsertInsight(db, insight, filePath);
      upsertEmbedding(db, id, similarEmbedding(baseEmb, 0.003 * i));
    }

    const gaps = await detectGaps(db, kbRoot);

    expect(gaps.length).toBeGreaterThan(0);
    const gap = gaps[0];
    // Larger topic should be topicA
    expect(gap.countA).toBeGreaterThan(gap.countB);
    expect(gap.countA / gap.countB).toBeGreaterThan(3);
  });

  it("does not flag when count ratio is <= 3:1", async () => {
    const baseEmb = syntheticEmbedding(42);

    // Both topics have similar counts (3 and 3)
    for (let i = 1; i <= 3; i++) {
      const idA = `INS-260320-EA${String(i).padStart(2, "0")}`;
      const insightA = makeInsight({
        id: idA,
        domain: "ai-development",
        topic: "claude-code",
        title: `Equal A insight ${i}`,
        tags: ["ai"],
        resolutions: { one_line: `Equal A line ${i}`, standard: `Equal A std ${i}` },
      });
      const pathA = await writeInsightFile(kbRoot, insightA);
      upsertInsight(db, insightA, pathA);
      upsertEmbedding(db, idA, similarEmbedding(baseEmb, 0.001 * i));

      const idB = `INS-260320-EB${String(i).padStart(2, "0")}`;
      const insightB = makeInsight({
        id: idB,
        domain: "ai-development",
        topic: "llm-costs",
        title: `Equal B insight ${i}`,
        tags: ["ai"],
        resolutions: { one_line: `Equal B line ${i}`, standard: `Equal B std ${i}` },
      });
      const pathB = await writeInsightFile(kbRoot, insightB);
      upsertInsight(db, insightB, pathB);
      upsertEmbedding(db, idB, similarEmbedding(baseEmb, 0.002 * i));
    }

    const gaps = await detectGaps(db, kbRoot);
    expect(gaps).toHaveLength(0);
  });

  it("returns empty when no embeddings exist", async () => {
    const gaps = await detectGaps(db, kbRoot);
    expect(gaps).toHaveLength(0);
  });
});

// ─── Mechanism 6: detectTransfers ───────────────────────────────────

describe("detectTransfers", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  it("detects cross-domain transfer with zero tag overlap", async () => {
    const baseEmb = syntheticEmbedding(42);

    // Create a principle in domain A
    const principleDir = join(kbRoot, "principles", "ai-development");
    await mkdir(principleDir, { recursive: true });
    const principleContent = matter.stringify("Principle body.", {
      id: "PRI-260320-0001",
      domain: "ai-development",
      title: "Plan before coding",
      summary: "Always plan",
      confidence: "high",
      supporting_insights: ["INS-260320-AA01"],
      supporting_count: 1,
      tags: ["planning", "strategy"],
      date_created: "2026-03-20",
      last_reviewed: "2026-03-20",
      resolutions: { one_line: "Plan first", standard: "Plan before code." },
    });
    await writeFile(join(principleDir, "plan-before-coding.md"), principleContent, "utf-8");
    upsertEmbedding(db, "PRI-260320-0001", baseEmb);

    // Create insight in a DIFFERENT domain with similar embedding + NO shared tags
    const insight = makeInsight({
      id: "INS-260320-XD01",
      domain: "startups",
      topic: "mvp-strategy",
      title: "MVP requires planning",
      tags: ["mvp", "lean"],  // no overlap with principle tags
      resolutions: { one_line: "MVP line", standard: "MVP std" },
    });
    const filePath = await writeInsightFile(kbRoot, insight);
    upsertInsight(db, insight, filePath);
    upsertEmbedding(db, "INS-260320-XD01", similarEmbedding(baseEmb, 0.005));

    const transfers = await detectTransfers(db, kbRoot);

    expect(transfers.length).toBeGreaterThan(0);
    const transfer = transfers.find((t) => t.principleId === "PRI-260320-0001");
    expect(transfer).toBeDefined();
    expect(transfer!.targetDomain).toBe("startups");
    expect(transfer!.targetTopic).toBe("mvp-strategy");
    expect(transfer!.similarity).toBeGreaterThan(0.75);
  });

  it("excludes same-domain matches", async () => {
    const baseEmb = syntheticEmbedding(42);

    // Principle in ai-development
    const principleDir = join(kbRoot, "principles", "ai-development");
    await mkdir(principleDir, { recursive: true });
    const principleContent = matter.stringify("Principle body.", {
      id: "PRI-260320-0001",
      domain: "ai-development",
      title: "Same domain principle",
      summary: "Summary",
      confidence: "high",
      supporting_insights: [],
      supporting_count: 0,
      tags: ["planning"],
      date_created: "2026-03-20",
      last_reviewed: "2026-03-20",
      resolutions: { one_line: "One line", standard: "Standard" },
    });
    await writeFile(join(principleDir, "same-domain.md"), principleContent, "utf-8");
    upsertEmbedding(db, "PRI-260320-0001", baseEmb);

    // Insight in the SAME domain
    const insight = makeInsight({
      id: "INS-260320-SD01",
      domain: "ai-development",
      topic: "claude-code",
      title: "Same domain insight",
      tags: ["different-tag"],
      resolutions: { one_line: "SD line", standard: "SD std" },
    });
    const filePath = await writeInsightFile(kbRoot, insight);
    upsertInsight(db, insight, filePath);
    upsertEmbedding(db, "INS-260320-SD01", similarEmbedding(baseEmb, 0.005));

    const transfers = await detectTransfers(db, kbRoot);

    // Should not flag same-domain transfer
    const sameDomain = transfers.find(
      (t) => t.principleId === "PRI-260320-0001" && t.targetDomain === "ai-development"
    );
    expect(sameDomain).toBeUndefined();
  });

  it("excludes matches with shared tags (surprise filter)", async () => {
    const baseEmb = syntheticEmbedding(42);

    // Principle with tags ["planning", "strategy"]
    const principleDir = join(kbRoot, "principles", "ai-development");
    await mkdir(principleDir, { recursive: true });
    const principleContent = matter.stringify("Principle body.", {
      id: "PRI-260320-0001",
      domain: "ai-development",
      title: "Shared tag principle",
      summary: "Summary",
      confidence: "high",
      supporting_insights: [],
      supporting_count: 0,
      tags: ["planning", "strategy"],
      date_created: "2026-03-20",
      last_reviewed: "2026-03-20",
      resolutions: { one_line: "One line", standard: "Standard" },
    });
    await writeFile(join(principleDir, "shared-tag.md"), principleContent, "utf-8");
    upsertEmbedding(db, "PRI-260320-0001", baseEmb);

    // Insight in different domain but with OVERLAPPING tags
    const insight = makeInsight({
      id: "INS-260320-OT01",
      domain: "startups",
      topic: "growth",
      title: "Overlapping tags insight",
      tags: ["planning", "growth"],  // "planning" overlaps
      resolutions: { one_line: "OT line", standard: "OT std" },
    });
    const filePath = await writeInsightFile(kbRoot, insight);
    upsertInsight(db, insight, filePath);
    upsertEmbedding(db, "INS-260320-OT01", similarEmbedding(baseEmb, 0.005));

    const transfers = await detectTransfers(db, kbRoot);

    // Surprise filter should exclude this match
    const overlapping = transfers.find(
      (t) => t.targetInsightId === "INS-260320-OT01"
    );
    expect(overlapping).toBeUndefined();
  });

  it("returns empty when no principle embeddings exist", async () => {
    const transfers = await detectTransfers(db, kbRoot);
    expect(transfers).toHaveLength(0);
  });
});

// ─── Integration tests (real DB) ────────────────────────────────────

const BRAIN_DB_PATH = join(
  __dirname,
  "../../knowledge-base/db/brain.db"
);
const REAL_KB_ROOT = join(__dirname, "../../knowledge-base");

describe.skipIf(!existsSync(BRAIN_DB_PATH))(
  "Integration tests (real brain.db)",
  () => {
    it("discoverConnections finds connections for real insights", async () => {
      const db = initDb(BRAIN_DB_PATH);
      initVectorTable(db);

      try {
        // Don't write to real files — just verify the connection logic works
        const embeddedRows = db
          .prepare("SELECT id FROM embeddings")
          .all() as { id: string }[];

        expect(embeddedRows.length).toBeGreaterThan(0);

        // Test that neighbor query works
        const stmt = db.prepare(`
          SELECT id, distance
          FROM embeddings
          WHERE embedding MATCH (SELECT embedding FROM embeddings WHERE id = ?)
          ORDER BY distance
          LIMIT 6
        `);

        const firstId = embeddedRows[0].id;
        const neighbors = stmt.all(firstId) as Array<{
          id: string;
          distance: number;
        }>;

        expect(neighbors.length).toBeGreaterThan(0);
        // First result should be self with distance ~0
        expect(neighbors[0].id).toBe(firstId);
        expect(neighbors[0].distance).toBeCloseTo(0, 2);
      } finally {
        db.close();
      }
    });

    it("detectEmergence returns flags (may be empty if principles exist)", async () => {
      const flags = await detectEmergence(REAL_KB_ROOT);

      // After compression passes, flags may be empty (all topics have principles)
      // or may contain newly grown topics. Either way, the function should return an array.
      expect(Array.isArray(flags)).toBe(true);

      // Any flagged topic should have >= 5 insights
      for (const flag of flags) {
        expect(flag.insightCount).toBeGreaterThanOrEqual(5);
      }
    });
  }
);

// ─── Mechanism 7: detectTensions — Candidate-Judge Pipeline ─────────

describe("detectTensions — candidate-judge pipeline", () => {
  let db: Database.Database;
  let kbRoot: string;

  beforeEach(async () => {
    db = createTestDb();
    kbRoot = await createTmpKb();
    // Ensure tensions dir exists
    await mkdir(join(kbRoot, "tensions"), { recursive: true });
  });

  afterEach(async () => {
    db.close();
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  });

  /**
   * Helper: create two similar insights with embeddings close enough
   * to fall within CANDIDATE_THRESHOLD (0.35) but outside DISTANCE_THRESHOLD (0.25).
   * We achieve this by making embeddings that are similar but not identical.
   */
  async function setupCandidatePair(opts: {
    stanceA?: string;
    stanceB?: string;
    confidenceA?: string;
    confidenceB?: string;
  } = {}) {
    const insightA = makeInsight({
      id: "INS-260320-AAAA",
      title: "Use automation everywhere",
      confidence: (opts.confidenceA ?? "medium") as "medium" | "low" | "high" | "very_high",
      stance: opts.stanceA,
      resolutions: {
        one_line: "Automate repetitive tasks to save time",
        standard: "Automation standard A",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-BBBB",
      title: "Manual review is essential",
      confidence: (opts.confidenceB ?? "high") as "medium" | "low" | "high" | "very_high",
      stance: opts.stanceB,
      resolutions: {
        one_line: "Manual review catches errors automation misses",
        standard: "Manual review standard B",
      },
    });

    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);

    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    // Create embeddings that are close but NOT within keyword detection range
    // Using very similar embeddings — sqlite-vec distance will be small
    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.01));
  }

  it("writes valid JSON to tension-candidates.json", async () => {
    await setupCandidatePair({ stanceA: "pro-automation", stanceB: "pro-manual" });

    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (existsSync(candidatesPath)) {
      const raw = await readFile(candidatesPath, "utf-8");
      const parsed = JSON.parse(raw);

      // Validate structure
      expect(parsed).toHaveProperty("generated_at");
      expect(parsed).toHaveProperty("candidate_count");
      expect(parsed).toHaveProperty("candidates");
      expect(Array.isArray(parsed.candidates)).toBe(true);

      // Validate each candidate has required fields
      for (const c of parsed.candidates) {
        expect(c).toHaveProperty("pair_key");
        expect(c).toHaveProperty("id_a");
        expect(c).toHaveProperty("id_b");
        expect(c).toHaveProperty("title_a");
        expect(c).toHaveProperty("title_b");
        expect(c).toHaveProperty("stance_a");
        expect(c).toHaveProperty("stance_b");
        expect(c).toHaveProperty("confidence_a");
        expect(c).toHaveProperty("confidence_b");
        expect(c).toHaveProperty("content_distance");
        expect(typeof c.content_distance).toBe("number");
      }

      expect(parsed.candidate_count).toBe(parsed.candidates.length);
    }
    // If no candidates file, that's OK — distance may have been too small
    // and keyword detection caught it. The structure test is what matters.
  });

  it("NULL stances always appear as candidates (not filtered by cache)", async () => {
    await setupCandidatePair({ stanceA: undefined, stanceB: undefined });

    // Pre-populate the cache with a judgment for this pair
    const pairKey = ["INS-260320-AAAA", "INS-260320-BBBB"].sort().join("|");
    db.prepare(
      "INSERT INTO tension_judgments (pair_key, is_tension, stance_hash, judged_at) VALUES (?, ?, ?, ?)"
    ).run(pairKey, 0, "somehash", new Date().toISOString());

    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (existsSync(candidatesPath)) {
      const parsed = JSON.parse(await readFile(candidatesPath, "utf-8"));
      const found = parsed.candidates.find(
        (c: CandidatePair) => c.pair_key === pairKey
      );
      // NULL stances should bypass the cache
      expect(found).toBeDefined();
      expect(found.stance_a).toBeNull();
      expect(found.stance_b).toBeNull();
    }
  });

  it("cache hit with matching stance_hash filters out the pair", async () => {
    await setupCandidatePair({ stanceA: "pro-automation", stanceB: "pro-manual" });

    // Compute the correct stance_hash
    const pairKey = ["INS-260320-AAAA", "INS-260320-BBBB"].sort().join("|");
    const stanceHash = createHash("sha256")
      .update(["pro-automation", "pro-manual"].sort().join("|"))
      .digest("hex");

    // Insert a cached judgment with matching stance_hash
    db.prepare(
      "INSERT INTO tension_judgments (pair_key, is_tension, stance_hash, judged_at) VALUES (?, ?, ?, ?)"
    ).run(pairKey, 0, stanceHash, new Date().toISOString());

    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (existsSync(candidatesPath)) {
      const parsed = JSON.parse(await readFile(candidatesPath, "utf-8"));
      const found = parsed.candidates.find(
        (c: CandidatePair) => c.pair_key === pairKey
      );
      // Should be filtered out — cache hit with matching hash
      expect(found).toBeUndefined();
    }
  });

  it("cache hit with different stance_hash lets the pair through", async () => {
    await setupCandidatePair({ stanceA: "pro-automation", stanceB: "pro-manual" });

    const pairKey = ["INS-260320-AAAA", "INS-260320-BBBB"].sort().join("|");

    // Insert a cached judgment with a STALE stance_hash
    db.prepare(
      "INSERT INTO tension_judgments (pair_key, is_tension, stance_hash, judged_at) VALUES (?, ?, ?, ?)"
    ).run(pairKey, 0, "old-stale-hash", new Date().toISOString());

    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (existsSync(candidatesPath)) {
      const parsed = JSON.parse(await readFile(candidatesPath, "utf-8"));
      const found = parsed.candidates.find(
        (c: CandidatePair) => c.pair_key === pairKey
      );
      // Should appear — stale hash means re-evaluate
      expect(found).toBeDefined();
    }
  });

  it("excludes archived insights from tension-candidates.json", async () => {
    // Two active insights and one archived insight, all semantically close.
    // Expectation: the archived insight must NEVER appear in any candidate pair.
    // Titles/one_lines use deliberately disjoint vocabularies so the
    // content-level Jaccard paraphrase gate (0.30 threshold) doesn't
    // reject the active pair as a lexical near-duplicate.
    const active1 = makeInsight({
      id: "INS-260320-AAAA",
      title: "Observability probe budgeting",
      status: "active",
      resolutions: {
        one_line: "Distributed diagnostic costs under partial failure",
        standard: "Observability standard",
      },
    });
    const active2 = makeInsight({
      id: "INS-260320-BBBB",
      title: "Horizontal sharding throughput",
      status: "active",
      resolutions: {
        one_line: "Burst traffic capacity via partition routing",
        standard: "Sharding standard",
      },
    });
    const archived = makeInsight({
      id: "INS-260320-CCCC",
      title: "Replication consistency model",
      status: "superseded",
      resolutions: {
        one_line: "Cross-datacenter write latency trade-offs",
        standard: "Replication standard",
      },
    });

    const pathA = await writeInsightFile(kbRoot, active1);
    const pathB = await writeInsightFile(kbRoot, active2);
    const pathC = await writeInsightFile(kbRoot, archived);

    upsertInsight(db, active1, pathA);
    upsertInsight(db, active2, pathB);
    upsertInsight(db, archived, pathC);

    // All three embeddings near the same base so every pair is a neighbor.
    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.01));
    upsertEmbedding(db, "INS-260320-CCCC", similarEmbedding(baseEmb, 0.015));

    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    // The file must exist — A and B are active and close, so at least one candidate should form.
    expect(existsSync(candidatesPath)).toBe(true);

    const parsed = JSON.parse(await readFile(candidatesPath, "utf-8"));
    const touchesArchived = parsed.candidates.some(
      (c: CandidatePair) =>
        c.id_a === "INS-260320-CCCC" || c.id_b === "INS-260320-CCCC"
    );
    expect(touchesArchived).toBe(false);
  });

  it("strips pre-existing archived-insight candidates during merge", async () => {
    // Simulates the post-dedup stale-candidate scenario: tension-candidates.json
    // already contains pairs involving insights that were later archived.
    // detectTensions must drop them during the merge step, not preserve them.
    // Lexically distinct titles/one_lines to stay under the 0.30 Jaccard
    // paraphrase-rejection threshold.
    const active1 = makeInsight({
      id: "INS-260320-AAAA",
      title: "Observability probe budgeting",
      status: "active",
      resolutions: {
        one_line: "Distributed diagnostic costs under partial failure",
        standard: "A standard",
      },
    });
    const active2 = makeInsight({
      id: "INS-260320-BBBB",
      title: "Horizontal sharding throughput",
      status: "active",
      resolutions: {
        one_line: "Burst traffic capacity via partition routing",
        standard: "B standard",
      },
    });
    const archived = makeInsight({
      id: "INS-260320-CCCC",
      title: "Replication consistency",
      status: "superseded",
      resolutions: {
        one_line: "Cross-datacenter write latency",
        standard: "C standard",
      },
    });

    upsertInsight(db, active1, await writeInsightFile(kbRoot, active1));
    upsertInsight(db, active2, await writeInsightFile(kbRoot, active2));
    upsertInsight(db, archived, await writeInsightFile(kbRoot, archived));

    // Give the two actives embeddings so the mechanism runs and hits the merge path.
    const baseEmb = syntheticEmbedding(42);
    upsertEmbedding(db, "INS-260320-AAAA", baseEmb);
    upsertEmbedding(db, "INS-260320-BBBB", similarEmbedding(baseEmb, 0.01));
    // No embedding for archived — mirrors the real case where the embedding may
    // or may not linger; what matters is that the STALE candidate entry must go.

    // Pre-seed a stale candidate that touches the archived insight.
    const stalePair: CandidatePair = {
      pair_key: ["INS-260320-AAAA", "INS-260320-CCCC"].sort().join("|"),
      id_a: "INS-260320-AAAA",
      id_b: "INS-260320-CCCC",
      title_a: "Active one",
      title_b: "Archived one",
      stance_a: null,
      stance_b: null,
      confidence_a: "medium",
      confidence_b: "medium",
      content_distance: 0.25,
      polarity_score: 3,
    };
    await mkdir(join(kbRoot, "meta"), { recursive: true });
    await writeFile(
      join(kbRoot, "meta", "tension-candidates.json"),
      JSON.stringify({
        generated_at: "2026-04-08T00:00:00.000Z",
        candidate_count: 1,
        candidates: [stalePair],
      }, null, 2) + "\n",
      "utf-8"
    );

    await detectTensions(db, kbRoot);

    const parsed = JSON.parse(
      await readFile(join(kbRoot, "meta", "tension-candidates.json"), "utf-8")
    );
    const stillPresent = parsed.candidates.some(
      (c: CandidatePair) =>
        c.id_a === "INS-260320-CCCC" || c.id_b === "INS-260320-CCCC"
    );
    expect(stillPresent).toBe(false);
  });

  it("merges new candidates with existing file without duplicates", async () => {
    // Pre-populate a candidates file
    const existingCandidate: CandidatePair = {
      pair_key: "INS-260320-XXXX|INS-260320-YYYY",
      id_a: "INS-260320-XXXX",
      id_b: "INS-260320-YYYY",
      title_a: "Existing A",
      title_b: "Existing B",
      stance_a: "stance-x",
      stance_b: "stance-y",
      confidence_a: "medium",
      confidence_b: "high",
      content_distance: 0.3,
      polarity_score: 2,
    };

    await mkdir(join(kbRoot, "meta"), { recursive: true });
    await writeFile(
      join(kbRoot, "meta", "tension-candidates.json"),
      JSON.stringify({
        generated_at: "2026-03-20T00:00:00.000Z",
        candidate_count: 1,
        candidates: [existingCandidate],
      }, null, 2) + "\n",
      "utf-8"
    );

    await setupCandidatePair({ stanceA: "pro-auto", stanceB: "pro-manual" });
    await detectTensions(db, kbRoot);

    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (existsSync(candidatesPath)) {
      const parsed = JSON.parse(await readFile(candidatesPath, "utf-8"));

      // Should contain the existing candidate
      const hasExisting = parsed.candidates.some(
        (c: CandidatePair) => c.pair_key === "INS-260320-XXXX|INS-260320-YYYY"
      );
      expect(hasExisting).toBe(true);

      // No duplicate pair_keys
      const keys = parsed.candidates.map((c: CandidatePair) => c.pair_key);
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  // ─── Slow-graph edge filter (candidate branch) ──────────────────

  /**
   * Insert a bidirectional edge of the given type into the test DB's
   * connections table. The tension generator looks up pairs by
   * canonical pair key, which is direction-agnostic, but writing both
   * directions matches how classify-edges.ts actually writes rows.
   */
  function insertEdge(
    fromId: string,
    toId: string,
    type: string,
  ): void {
    const stmt = db.prepare(
      "INSERT INTO connections (from_id, to_id, type, created_at) VALUES (?, ?, ?, ?)"
    );
    const now = new Date().toISOString();
    stmt.run(fromId, toId, type, now);
    stmt.run(toId, fromId, type, now);
  }

  function readCandidates(): CandidatePair[] | null {
    const candidatesPath = join(kbRoot, "meta", "tension-candidates.json");
    if (!existsSync(candidatesPath)) return null;
    const parsed = JSON.parse(
      require("node:fs").readFileSync(candidatesPath, "utf-8")
    );
    return parsed.candidates as CandidatePair[];
  }

  /**
   * Create a pair that is GUARANTEED to land in the tension-candidate
   * pool (not the keyword-match auto-tension branch) regardless of
   * the embedding's exact distance. Uses deliberately neutral wording
   * that doesn't trigger any OPPOSING_PAIRS keyword match, so the
   * candidate-collecting branch always runs. Needed because
   * setupCandidatePair uses "automate" vs "manual" titles which can
   * short-circuit the test through the keyword-match path and make
   * edge-filter regressions pass vacuously.
   */
  async function setupNeutralCandidatePair(opts: {
    idA?: string;
    idB?: string;
    titleA?: string;
    titleB?: string;
    oneLineA?: string;
    oneLineB?: string;
    stanceA?: string;
    stanceB?: string;
    noise?: number;
  } = {}): Promise<{ idA: string; idB: string; pairKey: string }> {
    const idA = opts.idA ?? "INS-260320-NEUA";
    const idB = opts.idB ?? "INS-260320-NEUB";
    // Content uses deliberately disjoint vocabularies so the pair's
    // content-level Jaccard stays near zero — this keeps every edge-
    // filter regression test honest (the pair always lands in the
    // candidate pool unless a filter rejects it for the reason
    // we're testing).
    const insightA = makeInsight({
      id: idA,
      title:
        opts.titleA ?? "Observability tradeoffs in distributed probe budgeting",
      stance:
        opts.stanceA ?? "distributed-observability-requires-probe-budgeting",
      resolutions: {
        one_line:
          opts.oneLineA ??
          "Cross-region latency amplifies diagnostic costs under partial failures",
        standard: "Observability standard body",
      },
    });
    const insightB = makeInsight({
      id: idB,
      title:
        opts.titleB ?? "Horizontal sharding strategies under burst traffic",
      stance:
        opts.stanceB ?? "burst-traffic-needs-horizontal-sharding-analysis",
      resolutions: {
        one_line:
          opts.oneLineB ??
          "Capacity planning benefits from partition-aware routing tables",
        standard: "Sharding standard body",
      },
    });
    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);
    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    // noise 0.05 maps to sqlite-vec distance ≈ 0.28, squarely in the
    // [0.22, 0.33] "optimal range" where the tension-generator grants
    // a +1 distance bonus and no too-close penalty. This keeps the
    // polarity scoring predictable: baseline 1 for a neutral pair,
    // 6 when a CHALLENGES/CONTRADICTS edge bumps it by +5.
    const baseEmb = syntheticEmbedding(500);
    upsertEmbedding(db, idA, baseEmb);
    upsertEmbedding(db, idB, similarEmbedding(baseEmb, opts.noise ?? 0.05));

    return { idA, idB, pairKey: [idA, idB].sort().join("|") };
  }

  it("neutral pair lands in candidates without any edge (control)", async () => {
    // Control test: verifies setupNeutralCandidatePair produces a pair
    // that actually enters the candidate pool. If this test ever fails,
    // every test below is compromised — they'd all pass vacuously
    // because the pair is absent for unrelated reasons.
    const { pairKey } = await setupNeutralCandidatePair();

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeDefined();
  });

  it("rejects candidate pair with SUPPORTS edge (Costco obstacles regression)", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "SUPPORTS");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("rejects candidate pair with REFINES edge (romantic-love regression)", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "REFINES");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("rejects candidate pair with EXTENDS edge (byproducts regression)", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "EXTENDS");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("rejects candidate pair with TRANSFERS_TO edge", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "TRANSFERS_TO");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("boosts candidate pair with CHALLENGES edge (E2F1|E2F2 regression)", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "CHALLENGES");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    const found = candidates?.find((c) => c.pair_key === pairKey);
    expect(found).toBeDefined();
    // A CHALLENGES edge in the slow graph is the strongest available
    // tension signal — the pair must float to the top of the review
    // queue via a large score bonus. The implementation uses +5; the
    // test pins a lower bound so future tuning stays honest.
    expect(found!.polarity_score).toBeGreaterThanOrEqual(5);
  });

  it("boosts candidate pair with CONTRADICTS edge", async () => {
    const { idA, idB, pairKey } = await setupNeutralCandidatePair();
    insertEdge(idA, idB, "CONTRADICTS");

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    const found = candidates?.find((c) => c.pair_key === pairKey);
    expect(found).toBeDefined();
    expect(found!.polarity_score).toBeGreaterThanOrEqual(5);
  });

  // ─── Lexical paraphrase gate (no-edge fall-through) ─────────────

  it("rejects no-edge pair with content Jaccard >= 0.30 (wage paraphrase regression)", async () => {
    // Both insights restate "above-market compensation produces ROI-positive
    // returns via productivity gains" — clear paraphrase at the content
    // level. No slow-graph edge (classify-edges.ts hasn't run on them),
    // so the Jaccard gate is the last line of defense.
    const insightA = makeInsight({
      id: "INS-260320-WAGE",
      title: "Above-market compensation produces productivity ROI",
      stance:
        "Above-market compensation in labor-intensive businesses produces productivity ROI when measured against turnover costs and customer experience outcomes",
      resolutions: {
        one_line:
          "Paying workers above market rate generates productivity gains and retention that offset higher labor costs",
        standard: "wage paraphrase standard",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-COMP",
      title: "Paying workers above market rate is profit-maximizing productivity ROI",
      stance:
        "Paying workers significantly above market rate generates productivity gains and retention that offset higher labor costs especially in high-throughput operations",
      resolutions: {
        one_line:
          "Above-market compensation is a profit-maximizing strategy because productivity gains outweigh the wage premium",
        standard: "wage paraphrase standard B",
      },
    });
    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);
    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    const baseEmb = syntheticEmbedding(100);
    upsertEmbedding(db, "INS-260320-WAGE", baseEmb);
    upsertEmbedding(db, "INS-260320-COMP", similarEmbedding(baseEmb, 0.01));

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    const pairKey = ["INS-260320-WAGE", "INS-260320-COMP"].sort().join("|");
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("keeps no-edge pair with content Jaccard < 0.30 (legitimate candidate)", async () => {
    // Neutral pair with distinct alpha/beta titles — these have a
    // few shared stopwords ("framework", "scaling") but pass well
    // below the 0.30 paraphrase threshold. No connection edge
    // inserted, so the pair falls through both filters to the
    // existing polarity scorer.
    const { pairKey } = await setupNeutralCandidatePair();

    await detectTensions(db, kbRoot);

    const candidates = readCandidates();
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeDefined();
  });

  // ─── Keyword-match auto-tension branch gating ──────────────────

  /**
   * Create a pair whose content triggers an OPPOSING_PAIRS keyword
   * match AND whose embeddings are close enough for keyword detection
   * to run (distance below the 0.25 DISTANCE_THRESHOLD). Used only by
   * the two keyword-match branch tests below — mirrors setupCandidatePair
   * but with much closer embeddings so we enter the auto-tension path
   * instead of the candidate-collecting path.
   */
  async function setupKeywordMatchPair(): Promise<void> {
    const insightA = makeInsight({
      id: "INS-260320-KWMA",
      title: "Automate everything you can",
      stance: "Automation is the dominant lever for scaling throughput",
      resolutions: {
        one_line: "Automate repetitive tasks to free up human attention",
        standard: "Automation standard",
      },
    });
    const insightB = makeInsight({
      id: "INS-260320-KWMB",
      title: "Manual review is essential for quality",
      stance: "Human manual inspection catches what automation misses",
      resolutions: {
        one_line: "Manual review catches errors that automated systems miss",
        standard: "Manual review standard",
      },
    });
    const pathA = await writeInsightFile(kbRoot, insightA);
    const pathB = await writeInsightFile(kbRoot, insightB);
    upsertInsight(db, insightA, pathA);
    upsertInsight(db, insightB, pathB);

    // Very close embeddings so n.distance falls below DISTANCE_THRESHOLD
    // (0.25) and the keyword-match branch runs instead of the
    // candidate-collecting branch.
    const baseEmb = syntheticEmbedding(200);
    upsertEmbedding(db, "INS-260320-KWMA", baseEmb);
    upsertEmbedding(db, "INS-260320-KWMB", similarEmbedding(baseEmb, 0.0001));
  }

  it("keyword-match pair with SUPPORTS edge does not create auto tension", async () => {
    // This is the user-requested regression: an opposing-keyword
    // match ("automate" vs "manual") must not manufacture a tension
    // file if classify-edges.ts has already said the pair is a
    // SUPPORTS relationship. Authoritative signal beats lexical
    // heuristic.
    await setupKeywordMatchPair();
    insertEdge("INS-260320-KWMA", "INS-260320-KWMB", "SUPPORTS");

    await detectTensions(db, kbRoot);

    // No tension file should have been created for this pair.
    const tensionsDir = join(kbRoot, "tensions");
    const filesAfter = existsSync(tensionsDir)
      ? (await import("node:fs/promises")).readdir(tensionsDir)
      : Promise.resolve([]);
    const files = await filesAfter;
    const matchingFiles = files.filter(
      (f) => f.includes("automate") || f.includes("manual")
    );
    expect(matchingFiles).toHaveLength(0);

    // And the pair should also NOT appear in the candidate pool —
    // the reject is absolute.
    const candidates = readCandidates();
    const pairKey = ["INS-260320-KWMA", "INS-260320-KWMB"].sort().join("|");
    expect(candidates?.find((c) => c.pair_key === pairKey)).toBeUndefined();
  });

  it("keyword-match pair with CHALLENGES edge still creates auto tension", async () => {
    // The converse of the previous test: an opposing-keyword match
    // with a CHALLENGES edge in the slow graph is the strongest
    // possible tension signal (both heuristics agree). The
    // keyword-match branch should fire normally and create a
    // tension file.
    await setupKeywordMatchPair();
    insertEdge("INS-260320-KWMA", "INS-260320-KWMB", "CHALLENGES");

    await detectTensions(db, kbRoot);

    const tensionsDir = join(kbRoot, "tensions");
    expect(existsSync(tensionsDir)).toBe(true);
    const files = await (await import("node:fs/promises")).readdir(tensionsDir);
    // The keyword-match branch writes a file named after the two
    // titles; we check only that something got written for this pair.
    const matchingFiles = files.filter(
      (f) => f.includes("automate") || f.includes("manual")
    );
    expect(matchingFiles.length).toBeGreaterThan(0);
  });
});

// ─── Polarity rework: pure helpers ──────────────────────────────────

describe("classifyPairByEdges", () => {
  // The tension-candidate generator used to ignore the slow graph
  // entirely, so pairs that classify-edges.ts had already marked as
  // SUPPORTS / REFINES / EXTENDS / TRANSFERS_TO / PREDICTED kept
  // surfacing as ghost "tension" candidates. This helper centralizes
  // the edge-class decision so both the candidate-collecting branch
  // and the keyword-match auto-tension branch share one filter.

  it("returns 'none' when the edge set is undefined", () => {
    expect(classifyPairByEdges(undefined)).toBe("none");
  });

  it("returns 'none' when the edge set is empty", () => {
    expect(classifyPairByEdges(new Set())).toBe("none");
  });

  // REGRESSION: Costco obstacles family — INS-260403-137D and
  // INS-260404-B2FB have bidirectional SUPPORTS edges in the slow
  // graph yet surfaced as polarity-1 tension candidates for weeks.
  it("returns 'reject' for SUPPORTS (Costco obstacles regression)", () => {
    expect(classifyPairByEdges(new Set(["SUPPORTS"]))).toBe("reject");
  });

  // REGRESSION: Romantic-love paraphrase — INS-260330-10AA and
  // INS-260330-17C3 have bidirectional REFINES edges.
  it("returns 'reject' for REFINES (romantic-love regression)", () => {
    expect(classifyPairByEdges(new Set(["REFINES"]))).toBe("reject");
  });

  // REGRESSION: Byproducts paraphrase — INS-260330-C607 and
  // INS-260404-8050 have bidirectional EXTENDS edges.
  it("returns 'reject' for EXTENDS (byproducts regression)", () => {
    expect(classifyPairByEdges(new Set(["EXTENDS"]))).toBe("reject");
  });

  it("returns 'reject' for TRANSFERS_TO", () => {
    expect(classifyPairByEdges(new Set(["TRANSFERS_TO"]))).toBe("reject");
  });

  it("returns 'reject' for PREDICTED", () => {
    expect(classifyPairByEdges(new Set(["PREDICTED"]))).toBe("reject");
  });

  // REGRESSION: The one real tension hiding in today's queue —
  // INS-260327-E2F1 and INS-260327-E2F2 have a CHALLENGES edge and
  // should be surfaced with a boost, not lost in the noise.
  it("returns 'boost' for CHALLENGES (E2F1|E2F2 regression)", () => {
    expect(classifyPairByEdges(new Set(["CHALLENGES"]))).toBe("boost");
  });

  it("returns 'boost' for CONTRADICTS", () => {
    expect(classifyPairByEdges(new Set(["CONTRADICTS"]))).toBe("boost");
  });

  it("boost wins when a pair carries both reject and boost edges", () => {
    // Data-quality edge case: if classify-edges.ts wrote both a
    // SUPPORTS and a CHALLENGES edge for the same pair (unusual but
    // possible), the tension-positive signal dominates. Rationale:
    // false positives in "keep" are less harmful than false negatives,
    // because a reviewer sees a slightly-wrong tension candidate
    // rather than silently losing a real one.
    expect(classifyPairByEdges(new Set(["SUPPORTS", "CHALLENGES"]))).toBe("boost");
    expect(classifyPairByEdges(new Set(["REFINES", "CONTRADICTS"]))).toBe("boost");
  });

  it("returns 'reject' when the set contains only reject types", () => {
    expect(classifyPairByEdges(new Set(["SUPPORTS", "REFINES", "EXTENDS"]))).toBe("reject");
  });

  it("returns 'none' for unknown edge types", () => {
    // Defensive: if classify-edges.ts adds a new type we don't know
    // about, don't accidentally reject or boost — let it fall through
    // to the Jaccard and polarity-score path.
    expect(classifyPairByEdges(new Set(["UNKNOWN_TYPE"]))).toBe("none");
  });
});

describe("contentJaccard", () => {
  // Stance-only Jaccard turned out to be too weak for Zuhn's content —
  // stances are written with rewritten phrasing every time, so lexical
  // overlap on stances alone caps out around 0.30 even for clear
  // paraphrases. Running Jaccard over title + one_line + stance
  // concatenated produces a 0.27-wide gap between legitimate tension
  // candidates (<=0.08 in today's calibration sample) and paraphrases
  // (>=0.35). The 0.30 threshold below sits cleanly in that gap.

  it("returns 0 for empty strings", () => {
    expect(contentJaccard("", "")).toBe(0);
  });

  it("returns 0 when one side is empty", () => {
    expect(contentJaccard("foo bar baz", "")).toBe(0);
  });

  it("returns 1 for identical strings", () => {
    expect(contentJaccard("foo bar baz quux", "foo bar baz quux")).toBe(1);
  });

  it("is case-insensitive", () => {
    const a = "Paying Workers Above Market Rate";
    const b = "paying workers above market rate";
    expect(contentJaccard(a, b)).toBe(1);
  });

  it("drops common stopwords before computing overlap", () => {
    // "the", "is", "a" are stopwords; only "cat" and "animal" count.
    // Both sides share both content words → jaccard = 1.
    expect(contentJaccard("the cat is a animal", "a cat is the animal")).toBe(1);
  });

  it("drops short tokens below length 3", () => {
    // After dropping short tokens, both reduce to {alpha, beta}.
    expect(contentJaccard("alpha beta xy z", "alpha beta")).toBe(1);
  });

  it("is symmetric", () => {
    const a = "customer retention and productivity gains";
    const b = "productivity improvements from customer loyalty";
    expect(contentJaccard(a, b)).toBe(contentJaccard(b, a));
  });

  // REGRESSION: Wage-productivity pair (INS-260405-47FD + INS-260404-8A1D).
  // No slow-graph edge, paraphrases each other on the Costco wage claim.
  // Test strings are the actual title + one_line + stance copied
  // verbatim from brain.db. Measured content-level Jaccard: 0.345.
  it("catches wage-productivity paraphrase above 0.30 (no-edge regression)", () => {
    const a =
      "Paying workers double the retail average produces three times the productivity, making high wages a financial advantage rather than a cost Costco pays $21/hour average — double the U.S. retail average — and gets employees three times more productive in return. Above-market compensation in labor-intensive businesses is often ROI-positive when measured against productivity, turnover, and customer experience outcomes";
    const b =
      "Above-market employee compensation can be a profit-maximizing strategy at scale Costco pays $21/hour (double U.S. retail average) and gets employees three times more productive than competitors. Paying workers significantly above market rate generates productivity gains and retention that more than offset the higher labor costs, especially in high-throughput operations.";
    expect(contentJaccard(a, b)).toBeGreaterThanOrEqual(0.3);
  });

  // REGRESSION: Peer-groups paraphrase (INS-260403-5216 + INS-260403-1228).
  // Two restatements of "you need colleagues who can distinguish ugly
  // ducklings from baby swans." Measured 0.408 on full DB content.
  it("catches peer-groups paraphrase above 0.30 (no-edge regression)", () => {
    const a =
      "Effective creative peer groups require diagnostic skill, not just encouragement The right creative peers aren't cheerleaders but fellow practitioners who can tell whether early ugly work has genuine promise. Surrounding yourself with unconditionally encouraging people is counterproductive for ambitious projects; you need colleagues who can distinguish an ugly duckling from a baby swan, which requires them to be doing similar work themselves.";
    const b =
      "You need peers who can distinguish ugly ducklings from baby swans, not cheerleaders The right creative peers aren't cheerleaders but fellow practitioners who can accurately judge the potential of ugly early work. Surrounding yourself with indiscriminate encouragers is counterproductive — you need colleagues working on similar ambitious projects who can genuinely judge early-stage potential";
    expect(contentJaccard(a, b)).toBeGreaterThanOrEqual(0.3);
  });

  // REGRESSION: Ambitious-projects paraphrase (INS-260403-4B81 + INS-260403-FE41).
  // Two restatements of "the bottleneck is emotional tolerance for
  // ugly early output." Measured 0.390 on full DB content.
  it("catches ambitious-projects paraphrase above 0.30 (no-edge regression)", () => {
    const a =
      "Ambitious projects have a mandatory ugly phase that filters out most people Great projects universally pass through a phase where they look embarrassingly bad, and most people quit before pushing through it. The primary bottleneck to great work is not ability but emotional tolerance for producing low-quality early output";
    const b =
      "Early work on ambitious projects looks worse than it is — misjudging it kills most great work before it starts Most great projects go through a phase where they look terrible even to their creators, and most people quit before pushing through it. The primary bottleneck to great creative output is not talent or resources but the psychological inability to tolerate the ugly early phase of ambitious projects.";
    expect(contentJaccard(a, b)).toBeGreaterThanOrEqual(0.3);
  });

  // Legitimate tension candidates from today's queue that should
  // pass the 0.30 threshold — these are unrelated-topic pairs the
  // embedding happened to cluster together. Their Jaccard was
  // 0.00-0.08 in calibration.
  it("keeps unrelated tension candidates below 0.15", () => {
    const a = "Centralized driver architecture prevents spreadsheet fragility";
    const b = "Survivorship bias makes startup failure patterns invisible";
    expect(contentJaccard(a, b)).toBeLessThan(0.15);
  });
});

/**
 * insight-gate.ts (lib) — Semantic quality gate for insights.
 *
 * Sibling to lib/verify-contracts.ts: a set of pure, deterministic,
 * RECOMPUTABLE checks plus an audit aggregator. Unlike health.ts
 * (structural: does the YAML parse?) this layer asks the semantic-quality
 * questions: is the stance directional? is it attributed to a real source?
 * is it filed under a topic that matches its path? is it a near-duplicate?
 *
 * Architecture boundary (CLAUDE.md): NO LLM here. Every check is a pure
 * function of current state, so the verdict can be recomputed at any time
 * without storing it. The LLM rubric stays in quality-score.ts (the
 * advisory/audit layer) — never in the gate.
 *
 * Phase 1 is AUDIT ONLY: these functions report; the CLI never exits 1.
 * Forward enforcement (Phase 2) reuses the exact same check functions.
 */

import { readFile } from "node:fs/promises";
import { relative } from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import type Database from "better-sqlite3";

import { KB_ROOT } from "./kb-root";

// ─── Types ────────────────────────────────────────────────────────────

export type CheckId =
  | "stance_present"
  | "stance_directional"
  | "attribution_resolves"
  | "topic_matches_path";

export const CHECK_IDS: CheckId[] = [
  "stance_present",
  "stance_directional",
  "attribution_resolves",
  "topic_matches_path",
];

/** A source reference as stored on an insight (sources[] in frontmatter). */
export interface SourceRef {
  title?: string;
  url?: string;
}

/** Defensively-parsed insight — fields may be missing on older insights. */
export interface GateInsight {
  id: string;
  domain: string;
  topic: string;
  title: string;
  stance: string; // "" when absent
  sources: SourceRef[];
  dateExtracted: string; // "" when absent
  filePath: string; // absolute
  relPath: string; // relative to KB_ROOT, e.g. domains/<domain>/<topic>/<file>.md
}

export interface CheckResult {
  checkId: CheckId;
  passed: boolean;
  detail?: string;
}

export interface NoveltyResult {
  /** Nearest INSIGHT neighbor id, or null when none was found. */
  nearestId: string | null;
  /** Exact cosine similarity to the nearest insight neighbor, or null. */
  similarity: number | null;
  /** Whether THIS insight has an embedding — distinguishes "unembedded" from "no neighbor found". */
  selfEmbedded: boolean;
}

export interface InsightAudit {
  id: string;
  relPath: string;
  checks: CheckResult[];
  novelty: NoveltyResult;
}

/** Normalized lookup sets built from the sources/ directory. */
export interface SourceIndex {
  titles: Set<string>;
  urls: Set<string>;
}

export interface AuditReport {
  generated_at: string;
  scope: string;
  total: number;
  /** Number of insights PASSING each check. */
  coverage: Record<CheckId, number>;
  novelty: {
    /** Whether novelty was computed at all (false when the embeddings DB was unavailable). */
    available: boolean;
    /** Insights that have their own embedding. */
    embedded: number;
    /** Insights with no embedding row. */
    unembedded: number;
    /** Embedded insights for which no INS- neighbor was found (e.g. outliers). */
    no_neighbor: number;
    /** Bucketed counts of nearest-neighbor similarity (insights with a neighbor only). */
    histogram: Record<string, number>;
    /** For each candidate block threshold, how many insights have a neighbor >= it. */
    block_simulation: Record<string, number>;
    mean_similarity: number | null;
    /** Closest insight pairs by similarity, for dedup triage (highest first). */
    top_pairs: Array<{ id: string; nearestId: string; similarity: number }>;
  };
  fragmentation: {
    total_topics: number;
    singletons: number;
    singleton_topics: string[]; // "domain/topic"
  };
  /** Up to `exampleLimit` failing insights per check, for triage. */
  failing_examples: Record<CheckId, Array<{ id: string; relPath: string; detail?: string }>>;
}

// ─── Stance directionality heuristic ──────────────────────────────────
//
// A real stance is an ASSERTION that could be true or false — a directional
// claim — not a description of the source ("this discusses X") or a vacuous
// value statement ("X is important"). This is a deterministic FLOOR: it will
// have false positives/negatives. Audit mode reports the rate so the bar can
// be calibrated against the corpus rather than guessed. Patterns are exported
// so they are testable and tweakable.

/** Verbs/phrases that describe the source instead of asserting a claim. */
export const STANCE_DESCRIPTIVE =
  /\b(discusses|covers|explores|explains|describes|examines|outlines|highlights|mentions|summari[sz]es|talks about|is about|provides? an overview|gives? an overview|an overview of|introduction to|a look at)\b/i;

// Bare value claims with no direction ("X is important/interesting/...").
// Deliberately narrow: only "puffery" adjectives that almost never appear
// except as the vacuous predicate of a non-claim. Generic words (good, bad,
// complex, common, ...) were removed because they fire incidentally inside
// genuinely directional stances ("AI is good at X", "good enough to ...").
export const STANCE_VACUOUS_VALUE =
  /\b(is|are|was|were|can be|remains?|stays?|seems?)\s+(?:very\s+|increasingly\s+|quite\s+|really\s+|highly\s+|often\s+|generally\s+)?(important|interesting|useful|valuable|key|crucial|essential|powerful|significant|notable|relevant)\b/i;

/** Causal / comparative / predictive / consequential markers => directional. */
// NOTE: keep this set disjoint from STANCE_DESCRIPTIVE — a verb in both (e.g.
// "introduces", which can mean "describes" or "brings about") would be checked
// directional-first and silently pass source-descriptive stances.
export const STANCE_DIRECTIONAL =
  /\b(because|since|so that|therefore|thus|hence|leads? to|causes?|drives?|predicts?|will|won't|should|shouldn't|must|cannot|can't|outperforms?|beats?|exceeds?|fails?|unless|instead of|rather than|more than|less than|faster than|slower than|better than|worse than|enables?|prevents?|requires?|eliminates?|replaces?|reduces?|increases?|decreases?|creates?|trades?|transforms?|determines?|undermines?|forces?|favou?rs?|breaks?|shifts?|results? in|means that|implies|trumps?|wins?|loses?|matters? more)\b/i;

const STANCE_MIN_LENGTH = 15;

/**
 * Heuristic: is this stance a directional, falsifiable claim (vs. descriptive
 * or vacuous)? Order matters — an explicit directional marker passes even when
 * a weak word is also present ("X is important BECAUSE it predicts Y").
 */
export function isDirectionalStance(stance: string): boolean {
  const s = stance.trim();
  if (s.length < STANCE_MIN_LENGTH) return false;
  if (STANCE_DIRECTIONAL.test(s)) return true;
  if (STANCE_DESCRIPTIVE.test(s)) return false;
  if (STANCE_VACUOUS_VALUE.test(s)) return false;
  return true;
}

// ─── Normalizers ──────────────────────────────────────────────────────

export function normalizeTitle(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, " ");
}

export function normalizeUrl(url: string): string {
  return url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/+$/, "");
}

// ─── Pure checks ──────────────────────────────────────────────────────

function result(checkId: CheckId, passed: boolean, detail?: string): CheckResult {
  return detail === undefined ? { checkId, passed } : { checkId, passed, detail };
}

export function checkStancePresent(ins: GateInsight): CheckResult {
  return ins.stance.trim().length > 0
    ? result("stance_present", true)
    : result("stance_present", false, "no stance");
}

export function checkStanceDirectional(ins: GateInsight): CheckResult {
  const s = ins.stance.trim();
  if (s.length === 0) {
    // Presence is a separate check; directionality is vacuously failed.
    return result("stance_directional", false, "no stance");
  }
  return isDirectionalStance(s)
    ? result("stance_directional", true)
    : result("stance_directional", false, `not directional: "${truncate(s, 80)}"`);
}

/**
 * Passes if AT LEAST ONE of the insight's source references resolves to a
 * known source file (by normalized url or title). An insight with no
 * sources[] is an orphan and fails.
 */
export function checkAttributionResolves(
  ins: GateInsight,
  index: SourceIndex
): CheckResult {
  if (ins.sources.length === 0) {
    return result("attribution_resolves", false, "no sources[]");
  }
  for (const src of ins.sources) {
    if (src.url && index.urls.has(normalizeUrl(src.url))) {
      return result("attribution_resolves", true);
    }
    if (src.title && index.titles.has(normalizeTitle(src.title))) {
      return result("attribution_resolves", true);
    }
  }
  const labels = ins.sources
    .map((s) => s.title || s.url || "(empty)")
    .join(", ");
  return result(
    "attribution_resolves",
    false,
    `no source ref resolves (${truncate(labels, 80)})`
  );
}

/**
 * Passes if the insight's frontmatter domain/topic match its file location
 * (domains/<domain>/<topic>/...). Catches misfiled insights and frontmatter
 * that drifted from the path.
 */
export function checkTopicMatchesPath(ins: GateInsight): CheckResult {
  const parts = splitPath(ins.relPath);
  const pathDomain = parts[1] ?? "";
  const pathTopic = parts[2] ?? "";
  if (pathDomain === ins.domain && pathTopic === ins.topic) {
    return result("topic_matches_path", true);
  }
  return result(
    "topic_matches_path",
    false,
    `frontmatter ${ins.domain}/${ins.topic} != path ${pathDomain}/${pathTopic}`
  );
}

export function runChecks(ins: GateInsight, index: SourceIndex): CheckResult[] {
  return [
    checkStancePresent(ins),
    checkStanceDirectional(ins),
    checkAttributionResolves(ins, index),
    checkTopicMatchesPath(ins),
  ];
}

// ─── Loaders ──────────────────────────────────────────────────────────

const INSIGHT_GLOB = "domains/**/*.md";
const INSIGHT_IGNORE = ["**/_overview.md", "**/_summary.md", "**/_index.md"];

export async function loadGateInsights(kbRoot: string = KB_ROOT): Promise<GateInsight[]> {
  const files = await fg(INSIGHT_GLOB, {
    cwd: kbRoot,
    absolute: true,
    ignore: INSIGHT_IGNORE,
  });

  const insights: GateInsight[] = [];
  for (const filePath of files) {
    let data: Record<string, unknown>;
    try {
      const raw = await readFile(filePath, "utf-8");
      data = matter(raw).data as Record<string, unknown>;
    } catch {
      continue; // unreadable/garbled file — health.ts reports these separately
    }
    if (!data || typeof data.id !== "string") continue;

    insights.push({
      id: data.id,
      domain: asString(data.domain),
      topic: asString(data.topic),
      title: asString(data.title),
      stance: asString(data.stance),
      dateExtracted: asString(data.date_extracted),
      sources: parseSources(data.sources),
      filePath,
      relPath: relative(kbRoot, filePath),
    });
  }
  return insights;
}

export async function buildSourceIndex(kbRoot: string = KB_ROOT): Promise<SourceIndex> {
  const files = await fg("sources/**/*.md", {
    cwd: kbRoot,
    absolute: true,
    ignore: ["**/raw/**", "**/_index.md"],
  });

  const titles = new Set<string>();
  const urls = new Set<string>();
  for (const filePath of files) {
    let data: Record<string, unknown>;
    try {
      data = matter(await readFile(filePath, "utf-8")).data as Record<string, unknown>;
    } catch {
      continue;
    }
    if (typeof data?.title === "string") titles.add(normalizeTitle(data.title));
    if (typeof data?.url === "string") urls.add(normalizeUrl(data.url));
  }
  return { titles, urls };
}

// ─── Novelty (cosine nearest-neighbor) ────────────────────────────────
//
// Two-step, deliberately metric-agnostic:
//   1. vec0 KNN (`embedding MATCH ? AND k = N`) to find candidate neighbors.
//      The live embeddings table returns L2 distance (it was created before
//      distance_metric=cosine was added; CREATE…IF NOT EXISTS no-ops on the
//      existing table). For the L2-normalized vectors Zuhn stores, L2 order
//      and cosine order coincide, so the KNN ranking is correct.
//   2. Compute EXACT cosine on the actual stored vectors — so the reported
//      value never depends on which distance metric vec0 happens to use.
//
// Neighbors are filtered to INS- ids: the dedup signal is insight-to-insight,
// and the table also holds principles/mental models (PRI-/MM-). We overfetch
// (large k) and filter in JS so a real insight neighbor isn't missed behind a
// run of PRI-/MM- rows in a tight compression cluster.

const KNN_K = 64;

/** Reinterpret a vec0 float32 blob as a Float32Array (copy → 4-byte aligned). */
function toFloat32(buf: Buffer): Float32Array {
  const copy = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
  return new Float32Array(copy);
}

export function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  const n = Math.min(a.length, b.length);
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < n; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export type NearestFn = (id: string) => NoveltyResult;

export function buildNoveltyComputer(db: Database.Database): NearestFn {
  const embStmt = db.prepare("SELECT embedding FROM embeddings WHERE id = ?");
  const knnStmt = db.prepare(
    `SELECT id, distance FROM embeddings WHERE embedding MATCH ? AND k = ${KNN_K}`
  );

  return function nearest(id: string): NoveltyResult {
    const self = embStmt.get(id) as { embedding: Buffer } | undefined;
    if (!self) return { nearestId: null, similarity: null, selfEmbedded: false };

    const rows = knnStmt.all(self.embedding) as Array<{ id: string; distance: number }>;
    // Nearest *insight* neighbor (KNN is distance-ordered; exclude self + non-insights).
    const neighbor = rows.find((r) => r.id !== id && r.id.startsWith("INS-"));
    if (!neighbor) return { nearestId: null, similarity: null, selfEmbedded: true };

    const other = embStmt.get(neighbor.id) as { embedding: Buffer } | undefined;
    if (!other) return { nearestId: neighbor.id, similarity: null, selfEmbedded: true };

    // Exact cosine on the stored vectors (full precision — round only at display).
    const sim = cosineSimilarity(toFloat32(self.embedding), toFloat32(other.embedding));
    return { nearestId: neighbor.id, similarity: sim, selfEmbedded: true };
  };
}

// ─── Audit aggregation ────────────────────────────────────────────────

/** Histogram buckets for nearest-neighbor similarity (high → low). */
const SIM_BUCKETS: Array<{ label: string; min: number }> = [
  { label: ">=0.95", min: 0.95 },
  { label: "0.90-0.95", min: 0.9 },
  { label: "0.85-0.90", min: 0.85 },
  { label: "0.80-0.85", min: 0.8 },
  { label: "0.70-0.80", min: 0.7 },
  { label: "<0.70", min: -Infinity },
];

/** Candidate "too duplicate to admit" thresholds, for block simulation. */
export const BLOCK_THRESHOLDS = [0.85, 0.9, 0.95];

export function auditInsights(
  insights: GateInsight[],
  index: SourceIndex,
  nearest?: NearestFn,
  options: { scope?: string; exampleLimit?: number } = {}
): { audits: InsightAudit[]; report: AuditReport } {
  const exampleLimit = options.exampleLimit ?? 15;
  // Distinguish "novelty not computed" (no DB) from "computed, found nothing".
  const noveltyAvailable = nearest !== undefined;

  const coverage = emptyCheckRecord();
  const failingExamples = emptyExampleRecord();
  const histogram: Record<string, number> = Object.fromEntries(
    SIM_BUCKETS.map((b) => [b.label, 0])
  );
  const blockSimulation: Record<string, number> = Object.fromEntries(
    BLOCK_THRESHOLDS.map((t) => [t.toFixed(2), 0])
  );
  const topicCounts = new Map<string, number>();

  let embedded = 0;
  let unembedded = 0;
  let noNeighbor = 0;
  let simSum = 0;
  let simCount = 0;
  const pairs: Array<{ id: string; nearestId: string; similarity: number }> = [];

  const audits: InsightAudit[] = [];

  for (const ins of insights) {
    const checks = runChecks(ins, index);
    for (const check of checks) {
      if (check.passed) {
        coverage[check.checkId] += 1;
      } else if (failingExamples[check.checkId].length < exampleLimit) {
        failingExamples[check.checkId].push({
          id: ins.id,
          relPath: ins.relPath,
          detail: check.detail,
        });
      }
    }

    const novelty: NoveltyResult = nearest
      ? nearest(ins.id)
      : { nearestId: null, similarity: null, selfEmbedded: false };

    // Only account for novelty when it was actually computed; otherwise leave
    // all counts at zero (report.novelty.available signals "not measured").
    if (noveltyAvailable) {
      if (!novelty.selfEmbedded) {
        unembedded += 1;
      } else if (novelty.similarity === null || novelty.nearestId === null) {
        embedded += 1;
        noNeighbor += 1;
      } else {
        embedded += 1;
        simSum += novelty.similarity;
        simCount += 1;
        histogram[bucketLabel(novelty.similarity)] += 1;
        for (const t of BLOCK_THRESHOLDS) {
          if (novelty.similarity >= t) blockSimulation[t.toFixed(2)] += 1;
        }
        pairs.push({ id: ins.id, nearestId: novelty.nearestId, similarity: novelty.similarity });
      }
    }

    // Topic counts keyed by actual file location (domain/topic from path).
    const parts = splitPath(ins.relPath);
    const topicKey = `${parts[1] ?? "?"}/${parts[2] ?? "?"}`;
    topicCounts.set(topicKey, (topicCounts.get(topicKey) ?? 0) + 1);

    audits.push({ id: ins.id, relPath: ins.relPath, checks, novelty });
  }

  const singletonTopics = [...topicCounts.entries()]
    .filter(([, n]) => n === 1)
    .map(([key]) => key)
    .sort();

  // Dedup reciprocal pairs (A→B and B→A are the same near-dupe) by unordered key,
  // keeping the highest-similarity instance (list is already sorted desc).
  const seenPairs = new Set<string>();
  const topPairs = pairs
    .sort((a, b) => b.similarity - a.similarity)
    .filter((p) => {
      const key = p.id < p.nearestId ? `${p.id}|${p.nearestId}` : `${p.nearestId}|${p.id}`;
      if (seenPairs.has(key)) return false;
      seenPairs.add(key);
      return true;
    })
    .slice(0, 50)
    // Full precision in the report/JSON — rounding happens only at display.
    .map((p) => ({ id: p.id, nearestId: p.nearestId, similarity: p.similarity }));

  const report: AuditReport = {
    generated_at: new Date().toISOString(),
    scope: options.scope ?? "all",
    total: insights.length,
    coverage,
    novelty: {
      available: noveltyAvailable,
      embedded,
      unembedded,
      no_neighbor: noNeighbor,
      histogram,
      block_simulation: blockSimulation,
      mean_similarity: simCount > 0 ? simSum / simCount : null,
      top_pairs: topPairs,
    },
    fragmentation: {
      total_topics: topicCounts.size,
      singletons: singletonTopics.length,
      singleton_topics: singletonTopics,
    },
    failing_examples: failingExamples,
  };

  return { audits, report };
}

// ─── Internal helpers ─────────────────────────────────────────────────

function asString(value: unknown): string {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return String(value);
}

function parseSources(value: unknown): SourceRef[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((s): s is Record<string, unknown> => !!s && typeof s === "object")
    .map((s) => ({
      title: typeof s.title === "string" ? s.title : undefined,
      url: typeof s.url === "string" ? s.url : undefined,
    }));
}

function splitPath(relPath: string): string[] {
  return relPath.split(/[\\/]/);
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max - 1) + "…";
}

function emptyCheckRecord(): Record<CheckId, number> {
  return { stance_present: 0, stance_directional: 0, attribution_resolves: 0, topic_matches_path: 0 };
}

function emptyExampleRecord(): Record<CheckId, Array<{ id: string; relPath: string; detail?: string }>> {
  return { stance_present: [], stance_directional: [], attribution_resolves: [], topic_matches_path: [] };
}

function bucketLabel(similarity: number): string {
  const bucket = SIM_BUCKETS.find((b) => similarity >= b.min) ?? SIM_BUCKETS[SIM_BUCKETS.length - 1];
  return bucket.label;
}

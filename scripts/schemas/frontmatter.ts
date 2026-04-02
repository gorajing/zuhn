import { z } from "zod";

// ─── Shared schemas ───────────────────────────────────────────────────

const Confidence = z.enum(["pending", "low", "medium", "high", "very_high"]);

// ─── Dual-Graph: Slow Memory (Semantic Graph) ─────────────────────────
// Fast memory is related: string[] (vector similarity, no LLM).
// Slow memory is evidence: EvidenceRelation[] (typed, LLM-classified,
// written async by classify-edges.ts — never inside discoverConnections).

export const RelationshipType = z.enum([
  "SUPPORTS",     // B builds on / reinforces A
  "CONTRADICTS",  // B opposes A (high surprise signal)
  "EXTENDS",      // B broadens A's scope
  "TRANSFERS_TO", // A principle applies in B's domain (cross-domain surprise)
  "REFINES",      // B makes A more precise
  "CHALLENGES",   // B questions assumptions in A (moderate surprise)
]);

export type RelationshipTypeValue = z.infer<typeof RelationshipType>;

export const EvidenceRelation = z.object({
  id: z.string(),
  type: RelationshipType,
  classified_at: z.string().optional(),
});

const Resolutions = z.object({
  one_line: z.string(),
  standard: z.string(),
  deep: z.string().optional(),
});

const Source = z.object({
  type: z.string(),
  title: z.string(),
  author: z.string().optional(),
  url: z.string().optional(),
});

// ─── InsightFrontmatter ───────────────────────────────────────────────

export const InsightFrontmatter = z.object({
  id: z.string().regex(/^INS-\d{6}-[A-F0-9]{4}$/i),
  domain: z.string(),
  topic: z.string(),
  title: z.string(),
  actionability: z.enum(["immediate", "reference", "inspiration"]),
  confidence: Confidence,
  shelf_life: z.enum(["evergreen", "time-sensitive"]),
  status: z.enum(["active", "outdated", "superseded", "applied"]),
  tags: z.array(z.string()),
  sources: z.array(Source),
  date_extracted: z.string(),
  last_accessed: z.string().nullable(),
  access_count: z.number().int().min(0),
  indexed: z.boolean(),
  embedded: z.boolean(),
  resolutions: Resolutions,
  // optional fields
  subtopic: z.string().optional(),
  stance: z.string().optional(),
  related: z.array(z.string()).optional(),  // Fast Graph: vector similarity neighbors (never modify structure)
  evidence: z.array(EvidenceRelation).optional(),  // Slow Graph: typed semantic relationships
  empirical_state: z.enum(["confirmed", "falsified"]).optional(),
});

export type InsightData = z.infer<typeof InsightFrontmatter>;

// ─── SourceFrontmatter ────────────────────────────────────────────────

export const SourceFrontmatter = z.object({
  id: z.string().regex(/^SRC-\d{6}-[A-F0-9]{4}$/i),
  type: z.enum(["reddit", "youtube", "blog", "panel", "paste", "pdf", "audio", "image"]),
  title: z.string(),
  date_ingested: z.string(),
  insight_count: z.number().int().min(0),
  // optional fields
  author: z.string().optional(),
  url: z.string().optional(),
  subreddit: z.string().optional(),
  // YouTube-specific
  channel: z.string().optional(),
  duration: z.string().optional(),
  views: z.number().optional(),
  upload_date: z.string().optional(),
  chapters: z.number().optional(),
  transcript_type: z.enum(["auto", "manual"]).optional(),
  // Blog-specific
  site_name: z.string().optional(),
  publish_date: z.string().optional(),
  // Reddit-specific
  score: z.number().optional(),
  num_comments: z.number().optional(),
  // Shared
  word_count: z.number().optional(),
});

export type SourceData = z.infer<typeof SourceFrontmatter>;

// ─── PrincipleFrontmatter ─────────────────────────────────────────────

const PrincipleLineage = z.object({
  compressed_at: z.string(),
  source_insights: z.array(z.object({
    id: z.string(),
    relation: RelationshipType.optional(),
  })),
  surprise_score: z.number().optional(),
  compression_trigger: z.string().optional(),
  pagerank_seed: z.string().optional(),
});

export const PrincipleFrontmatter = z.object({
  id: z.string().regex(/^PRI-\d{6}-[A-F0-9]{4}$/i),
  domain: z.string(),
  title: z.string(),
  summary: z.string(),
  confidence: Confidence,
  supporting_insights: z.array(z.string()),
  supporting_count: z.number().int().min(0),
  tags: z.array(z.string()),
  date_created: z.string(),
  last_reviewed: z.string(),
  resolutions: Resolutions,
  empirical_state: z.enum(["confirmed", "falsified"]).optional(),
  lineage: PrincipleLineage.optional(),
});

export type PrincipleData = z.infer<typeof PrincipleFrontmatter>;

// ─── MentalModelFrontmatter ──────────────────────────────────────────

export const MentalModelFrontmatter = z.object({
  id: z.string().regex(/^MM-\d{6}-[A-F0-9]{4}$/i),
  title: z.string(),
  core_statement: z.string(),
  domains: z.array(z.string()).min(1),
  supporting_principles: z.array(z.string()),
  supporting_count: z.number().int().min(0),
  confidence: Confidence,
  transferable: z.boolean(),
  date_created: z.string(),
  last_reviewed: z.string(),
  resolutions: Resolutions,
});

export type MentalModelData = z.infer<typeof MentalModelFrontmatter>;

// ─── TensionFrontmatter ──────────────────────────────────────────────

export const TensionFrontmatter = z.object({
  id: z.string().regex(/^T-\d{6}-[A-F0-9]{4}$/i),
  title: z.string(),
  status: z.enum(["unresolved", "resolved", "resolved_with_nuance"]),
  side_a: z.array(z.string()),
  side_b: z.array(z.string()),
  // optional fields
  resolution: z.array(z.string()).optional(),
  type: z.enum(["keyword", "empirical_failure", "stance"]).optional(),
  source_principle: z.string().optional(),
  resolution_notes: z.string().optional(),
  date_created: z.string().optional(),
  severity: z.enum(["mild", "moderate", "strong"]).optional(),
  stance_a: z.string().optional(),
  stance_b: z.string().optional(),
  reason: z.string().optional(),
});

export type TensionData = z.infer<typeof TensionFrontmatter>;

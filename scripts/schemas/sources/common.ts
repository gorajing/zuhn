// ─── Shared building blocks for investment-corpus source schemas ─────
//
// These shapes appear across multiple document types in firm corpora
// (IC memos, post-mortems, sector theses, etc). Centralizing them here
// keeps the per-type schemas focused on their unique fields and ensures
// downstream consumers (extractors, audit-deliverable generators) can
// rely on consistent structure.

import { z } from "zod";

// ─── Date coercion ────────────────────────────────────────────────────
// gray-matter (via js-yaml) parses bare YAML dates like `2023-09-14` as
// JS Date objects. Timestamps with explicit timezones (e.g. `2025-08-12
// 10:14 PT`) come through as strings. We normalize both to ISO strings
// so downstream string operations (slicing, regex, display) Just Work.

export const DateField = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString() : v),
  z.string(),
);

// ─── Confidence ───────────────────────────────────────────────────────
// Same scale as core Zuhn Confidence, with case-insensitive parsing for
// human-authored frontmatter where "High" and "high" both occur.

export const Confidence = z.preprocess(
  (v) => (typeof v === "string" ? v.toLowerCase() : v),
  z.enum(["pending", "low", "medium", "high", "very_high"]),
);

// ─── Predictions ──────────────────────────────────────────────────────
// Two shapes appear in real corpora:
//   1. IC memos coin NEW predictions — full inline objects with id,
//      claim, confidence, horizon, resolution.
//   2. Post-mortems / slack threads / quarterly letters REFERENCE
//      existing predictions — strings, often with verdict markers like
//      "PRED-2022Q1-009: claim — FALSIFIED".
//
// PredictionInline captures (1). PredictionRef accepts either form so
// related_predictions can be permissive about how authors write them.
//
// `resolution` is intentionally an open string. Real authors write
// "CONFIRMED EARLY (Q4 2024 datacenter revenue $54B annualized)" — the
// canonical category is in the leading word, but the rest is signal we
// don't want to discard. A downstream classifier maps to the canonical
// resolution category at extract time.

export const PredictionInline = z
  .object({
    id: z.string(),
    claim: z.string(),
    confidence: Confidence,
    horizon: z.string().optional(),
    resolution: z.string().optional(),
  })
  .passthrough();

export const PredictionRef = z.union([z.string(), PredictionInline]);

// ─── Principles ───────────────────────────────────────────────────────
// Principles in customer corpora are typically referenced by either an
// internal ID ("PRI-MERIDIAN-2023-001") or descriptive text ("Compute
// scarcity creates a durable infrastructure moat"). Strings are fine —
// the resolution to actual principle records happens at extract time.

export const PrincipleRef = z.string();

// ─── Document references ──────────────────────────────────────────────
// related_documents fields use either filenames ("2025-Q2-pope-podcast-
// summary.md") or relative paths. Either form is acceptable.

export const DocumentRef = z.string();

// ─── Person references ────────────────────────────────────────────────
// Authors and reviewers can be a single string ("Sarah Chen, CIO") or an
// array. Most fields are arrays, but quarterly-letter "author" is single.
//
// PeopleField accepts both shapes: a comma-separated string is split into
// an array, an array passes through. This matches real corpus conventions
// where humans naturally write `reviewers: A, B, C` rather than YAML
// list syntax.

export const PersonField = z.string();

export const PeopleField = z.preprocess((v) => {
  if (typeof v === "string") {
    return v
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return v;
}, z.array(z.string()));

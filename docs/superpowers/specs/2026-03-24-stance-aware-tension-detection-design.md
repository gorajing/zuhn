# Stance-Aware Tension Detection — Design Spec

**Date:** 2026-03-24
**Status:** Approved
**Phase:** 19

## Problem

Zuhn's tension detection (Mechanism 7) currently uses 6 hardcoded keyword pairs (always/never, best/worst, etc.) to find contradictions between semantically similar insights. This produces only 3 tensions across 1,116 insights — far too conservative.

The root cause: tension detection is trying to do **semantic reasoning** (does claim A oppose claim B?) using **syntactic tools** (keyword matching). Keyword pairs will always miss novel phrasings. Two insights can be about the same topic but take completely opposite stances without using any of the trigger words.

### The Antonym Collapse Problem

A naive fix — embedding stance text and using geometric distance — fails because embedding models are trained on co-occurrence, not logical opposition. "AI is a speculative bubble" and "AI will transform the economy" share the tokens "AI" and "economy" and will be placed close together in embedding space. Standard embeddings cannot distinguish agreement from disagreement.

## Solution: Candidate-Judge Pipeline (Claude Code as Judge)

Use vectors for what they're good at (finding topical neighbors) and Claude for what it's good at (evaluating logical opposition). The judgment happens **in conversation via Claude Code** — matching the existing pattern where Claude reasons and TypeScript writes files.

### Architecture

This follows the same pattern as compression:
- `compress.ts` generates a prompt → Claude writes principles JSON → `create-principles.ts` processes it
- `detectTensions` generates candidates → Claude writes judgments JSON → `create-tensions.ts` processes it

```
npm run learn (automated, pure math)
│
├── detectTensions() in lib/learning.ts
│   ├── Step 1: Vector pre-filter (sqlite-vec)
│   │   Find all pairs with content_distance < 0.35
│   │   Query: SELECT id, one_line, file_path, title, stance FROM insights
│   │
│   ├── Step 2: Deduplication (two layers, both retained)
│   │   a. Scan tension files on disk → skip pairs with existing files
│   │   b. Check tension_judgments cache → skip already-judged pairs
│   │      On cache hit: compute stance_hash from current stances (sorted
│   │      alphabetically, joined with "|", SHA-256). If hash differs from
│   │      cached stance_hash, treat as cache miss (re-evaluate).
│   │
│   ├── Step 3: Keyword fallback (automated, no Claude needed)
│   │   Existing OPPOSING_PAIRS keyword heuristic on candidates with
│   │   content_distance < 0.25 (original threshold, unchanged)
│   │   Creates tension files for keyword matches (same as today)
│   │
│   └── Step 4: Output remaining candidates
│       Merge into existing meta/tension-candidates.json (dedup by pair_key)
│       Update generated_at and candidate_count
│       Console: "N tension candidates awaiting review."
│       Console: "→ Ask Claude: 'review tension candidates'"

Claude in conversation (reasoning, interactive)
│
├── Reads meta/tension-candidates.json
├── For each candidate pair, evaluates stances:
│   "Do these two claims contradict each other?"
├── Writes judgments to /tmp/zuhn-tensions.json:
│   { "tensions": [...], "non_tensions": [...] }
│
└── Runs: npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json
    ├── Creates tension files for confirmed tensions (moderate+ severity)
    ├── Caches ALL results in tension_judgments (tensions AND non-tensions)
    ├── Does NOT cache mild tensions (so they're re-evaluated after confidence upgrades)
    └── Removes processed candidates from meta/tension-candidates.json
```

### Key Design Decisions

1. **Claude Code as judge, not a separate API.** The judgment happens in conversation using the same Claude instance the user is already running. No `@anthropic-ai/sdk`, no `ANTHROPIC_API_KEY`, no additional cost. Matches the existing "Claude reasons, TypeScript writes" boundary.

2. **Two-phase detection.** The automated phase (keyword fallback) runs during `npm run learn` without Claude. The interactive phase (Claude judgment) runs when the user is in conversation. Both produce tension files through the same pipeline.

3. **Wider candidate filter.** Content distance threshold relaxed from 0.25 to 0.35 for candidates. The keyword fallback uses 0.25 (unchanged). Claude evaluates the wider set.

4. **Two-layer deduplication.** Disk scan (`existingPairs`) prevents file duplication. DB cache (`tension_judgments`) prevents re-evaluation. Both are retained. Pre-existing keyword-detected tensions will not be re-evaluated.

5. **Non-tensions are cached, mild tensions are NOT.** When Claude judges a pair as "not in tension," that judgment is cached in `tension_judgments` and the pair won't reappear. But `mild` severity tensions (confirmed opposition, low confidence) are NOT cached — they will be re-evaluated on subsequent runs. This ensures that if an insight's confidence is later upgraded to `high`, the tension gets promoted to a file instead of being permanently buried.

6. **Candidates file is append-merged, not overwritten.** Running `npm run learn` multiple times before reviewing candidates will not lose previous candidates. New candidates are merged into the existing file with deduplication by `pair_key`.

## Schema Changes

### Extraction JSON Format

Add `stance` field:

```json
{
  "insights": [
    {
      "domain": "investing",
      "topic": "bubbles",
      "title": "The AI bubble mirrors the dot-com bubble...",
      "stance": "AI investment is a speculative bubble that will collapse",
      "actionability": "reference",
      "confidence": "medium",
      ...
    }
  ]
}
```

**Stance rules:**
- One sentence, directional claim
- Must be assertable as true or false
- "AI will transform the economy" not "This video discusses AI's potential"
- Written by Claude at extraction time (already reasoning about the content)

### Zod Schema Changes

**`scripts/schemas/extraction.ts`:**
- Add `stance: z.string()` as required field in the extraction insight schema

**`scripts/schemas/frontmatter.ts` (InsightFrontmatter / InsightData):**
- Add `stance: z.string().optional()` — optional for backward compat with existing 1,116 insights

**`scripts/schemas/frontmatter.ts` (TensionFrontmatter / TensionData):**
- Add `severity: z.enum(["mild", "moderate", "strong"]).optional()`
- Add `stance_a: z.string().optional()`
- Add `stance_b: z.string().optional()`
- Add `reason: z.string().optional()`
- Extend `type` enum: `z.enum(["keyword", "empirical_failure", "stance"]).optional()`

Note: `stance` is required in `ExtractionInsight` (new extractions must include it) but optional in `InsightFrontmatter` (existing files won't have it until backfill). This dual-optionality is intentional.

### SQLite Schema Migration

**`scripts/lib/db.ts`:**

1. Add `stance TEXT` column via try/catch `ALTER TABLE` migration (same pattern as `embedding_model` at line 107-112)
2. Add `stance` to `InsightRow` interface
3. Update `upsertInsight`:
   - Add `stance` to the INSERT column list
   - Add `@stance` to VALUES
   - Add `stance = excluded.stance` to ON CONFLICT SET clause
   - Add `stance: insight.stance ?? null` to `stmt.run(...)` call

### Write Pipeline Update

**`scripts/lib/extract/write-insights.ts`:**
- After the `if (insight.subtopic)` block (~line 145), add: `if (insight.stance) { frontmatter.stance = insight.stance; }`

## Database Changes

### New Table: `tension_judgments`

Added to `initDb()`:

```sql
CREATE TABLE IF NOT EXISTS tension_judgments (
  pair_key TEXT PRIMARY KEY,       -- canonical "INS-A|INS-B" (sorted)
  is_tension INTEGER NOT NULL,     -- 0 or 1
  severity TEXT,                   -- "moderate", "strong", or null (mild is NOT cached)
  reason TEXT,                     -- explanation from Claude
  stance_hash TEXT,                -- SHA-256 of sorted([stanceA, stanceB]).join("|")
  judged_at TEXT NOT NULL          -- ISO 8601 timestamp
);
```

### Cache Invalidation

Each cached judgment stores a `stance_hash` — computed as `SHA-256(sorted([stanceA, stanceB]).join("|"))`. Sorting ensures order-invariance (same hash regardless of which insight is A vs. B).

**In `detectTensions` (Step 2b):** When querying `tension_judgments`, compute the current stance hash for each candidate pair and compare against stored `stance_hash`. If they differ (stance was corrected), treat as cache miss — the pair reappears in candidates.

**`--clear-cache` flag:** Accepted by `learn.ts` and `create-tensions.ts`. Wipes `tension_judgments` table to force full re-evaluation.

### New Column: `insights.stance`

```sql
ALTER TABLE insights ADD COLUMN stance TEXT;
```

Added via try/catch migration in `initDb()`. Allows `detectTensions` to read stances from SQLite instead of reading 1,116 markdown files from disk.

## Tension Candidates File

### `meta/tension-candidates.json`

Written/merged by `detectTensions` during `npm run learn`:

```json
{
  "generated_at": "2026-03-24T20:00:00Z",
  "candidate_count": 15,
  "candidates": [
    {
      "pair_key": "INS-260322-XXXX|INS-260324-27E2",
      "id_a": "INS-260324-27E2",
      "id_b": "INS-260322-XXXX",
      "title_a": "The AI bubble mirrors the dot-com bubble...",
      "title_b": "AI coding tools hit an inflection point...",
      "stance_a": "AI investment is a speculative bubble that will collapse",
      "stance_b": "AI coding tools deliver genuine 10-20x productivity gains",
      "confidence_a": "medium",
      "confidence_b": "high",
      "content_distance": 0.18
    }
  ]
}
```

**Note:** `confidence_a` and `confidence_b` are read-only hints for Claude's reasoning context. `create-tensions.ts` always reads confidence from SQLite (freshest value), not from this file.

**Merge behavior:** Before writing, if the file already exists, load existing candidates, merge new ones (deduplicating by `pair_key`), update `generated_at` and `candidate_count`. This prevents candidate loss across successive `learn` runs.

## Tension Judgments JSON Format

Claude writes to `/tmp/zuhn-tensions.json`:

```json
{
  "tensions": [
    {
      "id_a": "INS-260324-27E2",
      "id_b": "INS-260322-XXXX",
      "stance_a": "AI investment is a speculative bubble that will collapse",
      "stance_b": "AI coding tools deliver genuine 10-20x productivity gains",
      "reason": "Both address AI's economic viability but reach opposite conclusions"
    }
  ],
  "non_tensions": [
    {
      "id_a": "INS-260324-AAAA",
      "id_b": "INS-260324-BBBB",
      "reason": "Both discuss platform economics from different angles but don't contradict"
    }
  ]
}
```

**Zod validation schema for this file** (defined in `create-tensions.ts`):

```typescript
const TensionJudgmentSchema = z.object({
  tensions: z.array(z.object({
    id_a: z.string(),
    id_b: z.string(),
    stance_a: z.string(),    // required for tensions
    stance_b: z.string(),    // required for tensions
    reason: z.string(),
  })),
  non_tensions: z.array(z.object({
    id_a: z.string(),
    id_b: z.string(),
    reason: z.string(),
  })),
});
```

Note: `create-tensions.ts` validates output against `TensionFrontmatter` from `schemas/frontmatter.ts` (not an inline schema), so both the write path and read path share the same type.

## Backfill Stances JSON Format

Claude writes to `/tmp/zuhn-stances.json`:

```json
{
  "stances": [
    {
      "id": "INS-260320-XXXX",
      "stance": "Platform economics fail when both sides require subsidization"
    }
  ]
}
```

## New Script: `create-tensions.ts`

Processes Claude's judgments, similar to `create-principles.ts`:

1. Read judgments from `--file` argument
2. Validate via `TensionJudgmentSchema`
3. For each tension:
   a. Look up confidence levels from SQLite (freshest value)
   b. Compute severity via `computeSeverity(confidenceA, confidenceB)`
   c. If `moderate` or `strong`: create tension file with full frontmatter including `date_created`
   d. If `mild`: log to console but do NOT create file and do NOT cache (allows re-evaluation after confidence upgrade)
4. For non-tensions: cache in `tension_judgments` with `is_tension = 0`
5. For moderate/strong tensions: cache in `tension_judgments` with `is_tension = 1`
6. Remove processed candidates from `meta/tension-candidates.json`
7. If `--post-ingest` flag: trigger the standard pipeline

### Severity Weights

```typescript
const CONF_WEIGHTS: Record<string, number> = {
  pending: 0.1,
  low: 0.3,
  medium: 0.6,
  high: 0.9,
  very_high: 1.0,
};

function computeSeverity(
  confidenceA: string,
  confidenceB: string
): "mild" | "moderate" | "strong" {
  const wA = CONF_WEIGHTS[confidenceA] ?? 0.1;
  const wB = CONF_WEIGHTS[confidenceB] ?? 0.1;
  const score = wA * wB;

  if (score >= 0.6) return "strong";   // both high or very_high
  if (score >= 0.3) return "moderate";  // one high + one medium
  return "mild";                        // at least one low/pending
}
```

## Enhanced Tension Files

```yaml
---
id: T-260324-XXXX
title: "AI is a speculative bubble vs. AI will transform the economy"
status: unresolved
severity: strong
type: stance
date_created: '2026-03-24'
stance_a: "AI investment is a speculative bubble that will collapse"
stance_b: "AI coding tools deliver genuine 10-20x productivity gains"
side_a:
  - INS-260324-27E2
side_b:
  - INS-260322-XXXX
reason: "Both claims directly address AI's economic viability but reach opposite conclusions"
---

**Side A:** "AI investment is a speculative bubble that will collapse"
**Side B:** "AI coding tools deliver genuine 10-20x productivity gains"
**Reason:** Both claims directly address AI's economic viability but reach opposite conclusions.
**Resolution:** [To be resolved by Claude during reasoning sessions]
```

## Backfill Script

### `scripts/backfill-stances.ts`

Since we're using Claude Code (not an API), the backfill also happens in conversation:

1. `--list` mode: Script reads all insights missing a `stance` field, outputs them as a structured list for Claude to process
2. Claude generates stances in batches, writes JSON to `/tmp/zuhn-stances.json`
3. `--file` mode: Script reads the JSON and writes stances back to YAML frontmatter + SQLite

**Flags:**
- `--dry-run` — show what would be changed without writing
- `--list` — just list insights missing stances (for Claude to process)
- `--file <json>` — apply stances from Claude's output file
- `--clear-cache` — wipe `tension_judgments` before applying (since stances changed)

**Validation:** Each file is validated through `InsightFrontmatter.safeParse()` on the round-tripped frontmatter before writing. If round-trip would corrupt any field, the write is skipped and logged.

**Rollback:** `git checkout knowledge-base/domains/` restores all files.

## Changes to CLAUDE.md

Update the Extraction JSON Format section to include `stance`.

Add to Behavioral Rules:
- **Every insight needs a stance** — a one-sentence directional claim that could be true or false. "AI will displace most white-collar workers" not "This discusses AI's impact on jobs."

Add to Key Scripts table:
- `npx tsx scripts/create-tensions.ts --file <json>` — Create tension records from Claude's judgments

Update Learning Mechanism Flags section to note that tension candidates may be pending review.

## Workflow Integration

### When running `npm run learn`:

```
── Mechanism 7: Tension Detection ─────
  Created 2 keyword-detected tensions.
  15 tension candidates awaiting Claude review.
  → Ask Claude: "review tension candidates"
```

### During conversation:

Claude reads the candidates, evaluates each pair, writes JSON, and runs the pipeline:

```
1. Read meta/tension-candidates.json
2. Evaluate each stance pair
3. Write /tmp/zuhn-tensions.json
4. npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json
```

This can be triggered by asking "review tension candidates" or checking flags.

## Dependencies

**No new npm dependencies.** All reasoning happens via Claude Code in conversation.

## Files Changed

| File | Change |
|------|--------|
| `scripts/lib/db.ts` | Add `tension_judgments` table, `stance` column migration, update `InsightRow` and `upsertInsight` (INSERT, VALUES, ON CONFLICT SET) |
| `scripts/lib/learning.ts` | Update `detectTensions`: wider filter (0.35), two-layer dedup with stance_hash check, SELECT stance from insights, merge candidates file, retain keyword fallback at 0.25 |
| `scripts/learn.ts` | Add `--clear-cache` flag: if present, wipe `tension_judgments` before running mechanisms |
| `scripts/create-tensions.ts` | New script — validate judgments via Zod, compute severity, create files with `date_created`, cache moderate+strong, skip mild, remove processed candidates |
| `scripts/backfill-stances.ts` | New script — `--list`/`--file`/`--dry-run`/`--clear-cache`, validate round-trip, write to YAML + SQLite |
| `scripts/schemas/extraction.ts` | Add `stance: z.string()` (required for new extractions) |
| `scripts/schemas/frontmatter.ts` | Add `stance` to InsightData (optional), add `severity`/`stance_a`/`stance_b`/`reason`/`date_created` to TensionData, extend `type` enum with `"stance"` |
| `scripts/extract.ts` | Pass stance through to file writer |
| `scripts/lib/extract/write-insights.ts` | After subtopic block: `if (insight.stance) { frontmatter.stance = insight.stance; }` |
| `CLAUDE.md` | Update extraction format with stance, add behavioral rule, add create-tensions to scripts table |
| `skills/extract/SKILL.md` | Update extraction format with stance field |
| `skills/ingest/SKILL.md` | Update extraction format with stance field |
| `package.json` | Add `create-tensions` script |

## Files NOT Changed

- `embed.ts` — no stance embeddings (antonym collapse)
- `lib/tension-judge.ts` — NOT created (Claude Code is the judge)
- All other 7 learning mechanisms — unchanged
- MCP server — unchanged (tensions already exposed via `zuhn_tensions`)
- Benchmark — unchanged (already tracks tension count and resolution rate)

## Future Improvements (Phase N+1)

- Update `reindex.ts` to include `severity` in the `tensions/_index.md` view
- Add a `/tensions` skill file for reviewing tension candidates

## Testing Strategy

1. Unit test updated `detectTensions`: verify candidate output format, two-layer dedup, keyword fallback still works, stance in SELECT query
2. Unit test `computeSeverity` with all 25 confidence combinations (5×5 grid)
3. Unit test `create-tensions.ts`: mock input JSON, verify tension files created with correct frontmatter including `date_created` and all new fields
4. Unit test `create-tensions.ts` validates against `TensionFrontmatter` from `schemas/frontmatter.ts` (shared schema)
5. Unit test cache: verify non-tensions are cached, mild tensions are NOT cached, stance_hash invalidation works, order-invariant hashing
6. Unit test candidate merge: verify successive `learn` runs don't overwrite existing candidates
7. Unit test backfill `--dry-run`: verify no files written
8. Unit test backfill validation: verify `InsightFrontmatter.safeParse()` prevents corruption on round-trip
9. Unit test `upsertInsight`: verify stance is stored in SQLite and queryable
10. Integration test: full flow from candidates → judgments JSON → tension files → cache
11. Verify existing keyword-detected tensions are not duplicated or re-evaluated
12. Verify `--clear-cache` on both `learn.ts` and `create-tensions.ts`
13. Existing 226 tests should pass unchanged

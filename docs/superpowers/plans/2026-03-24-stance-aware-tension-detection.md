# Stance-Aware Tension Detection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace keyword-only tension detection with a Candidate-Judge Pipeline that uses Claude Code to evaluate stance opposition between insights.

**Architecture:** TypeScript handles mechanical work (vector pre-filter, caching, file I/O). Claude handles semantic judgment in conversation. New `stance` field on insights captures directional claims at extraction time. New `create-tensions.ts` script processes Claude's judgments into tension files with severity scoring.

**Tech Stack:** TypeScript (tsx), Zod, better-sqlite3, sqlite-vec, gray-matter, Vitest

**Spec:** `docs/superpowers/specs/2026-03-24-stance-aware-tension-detection-design.md`

---

### Task 1: Schema Changes — Zod and Frontmatter

**Files:**
- Modify: `scripts/schemas/extraction.ts`
- Modify: `scripts/schemas/frontmatter.ts:117-131`
- Test: `scripts/schemas/extraction.test.ts` (create if needed)

- [ ] **Step 1: Write test for stance in ExtractionInsight**

Create `scripts/schemas/extraction.test.ts` with a test that validates `stance` is required on ExtractionInsight and optional on InsightFrontmatter.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run scripts/schemas/extraction.test.ts`
Expected: FAIL — stance not yet in schema

- [ ] **Step 3: Add stance to ExtractionInsight**

In `scripts/schemas/extraction.ts`, add after `tags` line (line 23): `stance: z.string(),`

- [ ] **Step 4: Add stance and tension fields to frontmatter.ts**

In `scripts/schemas/frontmatter.ts`:
- Add `stance: z.string().optional()` to `InsightFrontmatter`
- Update `TensionFrontmatter`: add `severity`, `stance_a`, `stance_b`, `reason` (all optional), extend `type` enum with `"stance"`
- Note: `date_created` is already present in `TensionFrontmatter` as `z.string().optional()` — no change needed for that field

- [ ] **Step 5: Run all tests**

Run: `npx vitest run`
Expected: All tests pass

- [ ] **Step 6: Commit**

```
git add scripts/schemas/
git commit -m "feat(schemas): add stance field to extraction and frontmatter schemas"
```

---

### Task 2: Database Migration — stance column + tension_judgments table

**Files:**
- Modify: `scripts/lib/db.ts:107-180`
- Test: `scripts/lib/db.test.ts`

- [ ] **Step 1: Write tests for stance column, upsertInsight with stance, and tension_judgments table**

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run scripts/lib/db.test.ts`

- [ ] **Step 3: Add stance column migration in initDb()**

After the `embedding_model` migration (line 112), still inside the `colNames` guard block, add:
```typescript
if (!colNames.has("stance")) {
  db.exec("ALTER TABLE insights ADD COLUMN stance TEXT");
}
```

Both `embedding_model` and `stance` migrations are guarded by the same `colNames` set (populated from `PRAGMA table_info(insights)` at line 108). No separate pragma call needed.

- [ ] **Step 4: Add tension_judgments table in initDb()**

After the column migrations, before `return db;` (line 114), add CREATE TABLE IF NOT EXISTS for `tension_judgments`. This is idempotent and independent of the `colNames` guard. Columns: `pair_key TEXT PRIMARY KEY`, `is_tension INTEGER NOT NULL`, `severity TEXT`, `reason TEXT`, `stance_hash TEXT`, `judged_at TEXT NOT NULL`.

- [ ] **Step 5: Add stance to InsightRow interface**

Add `stance: string | null;` to the InsightRow type.

- [ ] **Step 6: Update upsertInsight SQL and stmt.run()**

Add `stance` to INSERT column list, VALUES list, ON CONFLICT SET clause, and `stmt.run()` call with `stance: insight.stance ?? null`.

- [ ] **Step 7: Run all tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 8: Commit**

```
git add scripts/lib/db.ts scripts/lib/db.test.ts
git commit -m "feat(db): add stance column and tension_judgments table"
```

---

### Task 3: Write Pipeline — pass stance through extraction

**Files:**
- Modify: `scripts/lib/extract/write-insights.ts:150-152`
- Verify: `scripts/extract.ts` (no change needed — passes validated `input` object directly to `writeInsights`, stance flows through automatically once schema + writer are updated)

- [ ] **Step 1: Verify extract.ts passes all fields through**

Read `scripts/extract.ts` line 99: `const result = await writeInsights(input, source, KB_ROOT);`
Confirm that `input` is the full Zod-validated `ExtractionInput` object. Since `writeInsights` receives the full object and iterates `input.insights`, adding `stance` to the schema and the frontmatter builder is sufficient. No changes to `extract.ts` itself.

- [ ] **Step 2: Add stance to frontmatter object in write-insights.ts**

After the subtopic block (lines 150-152), add: `if (insight.stance) { frontmatter.stance = insight.stance; }`

- [ ] **Step 3: Run existing tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 4: Commit**

```
git add scripts/lib/extract/write-insights.ts
git commit -m "feat(extract): pass stance field through to insight frontmatter"
```

---

### Task 4: create-tensions.ts — process Claude's judgments

**Files:**
- Create: `scripts/create-tensions.ts`
- Test: `scripts/create-tensions.test.ts`

- [ ] **Step 1: Write tests for create-tensions.ts**

Test Zod validation of judgments JSON, severity computation (5x5 confidence grid), canonical pair key sorting, stance hash order-invariance, mild tensions NOT cached, non-tensions cached, and candidate file cleanup after processing.

- [ ] **Step 2: Run tests to verify they fail**

- [ ] **Step 3: Implement create-tensions.ts**

Follow `create-principles.ts` pattern (line 1-140). Accept `--file`, `--post-ingest`, `--clear-cache` flags. Key logic:
1. Parse and validate judgments JSON via Zod
2. For each tension: look up confidence from SQLite, compute severity, create file if moderate+, cache if moderate+, skip (don't cache) if mild
3. For each non-tension: cache with `is_tension = 0`
4. Remove processed candidates from `meta/tension-candidates.json`
5. Use `execFileSync` (not `exec`) for post-ingest pipeline

Uses `generateTensionId` and `slugify` from existing libs. Tension file includes `date_created`, `severity`, `type: "stance"`, `stance_a`, `stance_b`, `reason`.

- [ ] **Step 4: Run all tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 5: Commit**

```
git add scripts/create-tensions.ts scripts/create-tensions.test.ts
git commit -m "feat: add create-tensions.ts — process Claude's tension judgments"
```

---

### Task 5: Update detectTensions — Candidate-Judge Pipeline

**Files:**
- Modify: `scripts/lib/learning.ts:880-1035` (function body starts at line 880)
- Modify: `scripts/learn.ts`
- Test: `scripts/lib/learning.test.ts`

- [ ] **Step 1: Write tests for candidate output, cache check, stance_hash invalidation, candidate merge, and NULL stance handling**

Include a test case for when both stances are NULL (pre-backfill): the pair should be treated as a cache miss and appear in candidates.

- [ ] **Step 2: Run tests to verify they fail**

- [ ] **Step 3: Update insightStmt SELECT to include stance**

Line 905-906: change to `SELECT id, one_line, file_path, title, stance FROM insights WHERE id = ?`
Update the TypeScript type cast to include `stance: string | null`.

- [ ] **Step 4: Add candidate pipeline after outer loop**

Insert after the outer `embeddedRows` loop closes (line 1032), before `return result;` (line 1034). NOT inside the neighbors loop.

1. Define `CANDIDATE_THRESHOLD = 0.35`
2. Collect pairs where `distance < CANDIDATE_THRESHOLD` that didn't match keywords AND aren't already in `existingPairs`
3. For each candidate pair, check `tension_judgments` cache:
   - If either stance is NULL, skip cache check (treat as cache miss — pair always appears as candidate pre-backfill)
   - If both stances exist, compute `SHA-256(sorted([stanceA, stanceB]).join("|"))` and compare against cached `stance_hash`. If they differ, treat as cache miss.
4. Merge remaining uncached pairs into existing `meta/tension-candidates.json` (dedup by `pair_key`)
5. Log candidate count with actionable message

- [ ] **Step 5: Add --clear-cache to learn.ts**

Before mechanisms run: `if (process.argv.includes("--clear-cache")) { db.exec("DELETE FROM tension_judgments"); }`

- [ ] **Step 6: Run all tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 7: Commit**

```
git add scripts/lib/learning.ts scripts/learn.ts scripts/lib/learning.test.ts
git commit -m "feat(learn): candidate-judge pipeline for tension detection"
```

---

### Task 6: backfill-stances.ts

**Files:**
- Create: `scripts/backfill-stances.ts`
- Test: `scripts/backfill-stances.test.ts`

- [ ] **Step 1: Write tests for backfill-stances.ts**

Create `scripts/backfill-stances.test.ts` with tests for:
- `--dry-run` mode: verify no files are written to disk
- Round-trip safety: verify `InsightFrontmatter.safeParse()` catches corruption (e.g., missing required fields after gray-matter stringify)
- `--clear-cache` flag: verify `tension_judgments` table is emptied
- `--list` mode: verify output format is valid JSON with `id`, `title`, `one_line` fields

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run scripts/backfill-stances.test.ts`
Expected: FAIL — script doesn't exist yet

- [ ] **Step 3: Implement backfill-stances.ts**

Three modes:
- `--list`: Query `SELECT id, title, one_line, file_path FROM insights WHERE stance IS NULL`, output JSON for Claude
- `--file <json> [--dry-run]`: Read `{ "stances": [{ "id": "...", "stance": "..." }] }`, validate round-trip via `InsightFrontmatter.safeParse()`, write to YAML frontmatter + update SQLite `insights.stance` column
- `--clear-cache`: Wipe `tension_judgments` (since stances changed)

Use `gray-matter` for YAML read/write. Use `execFileSync` (not `exec`) for any subprocess calls.

- [ ] **Step 4: Run tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 5: Commit**

```
git add scripts/backfill-stances.ts scripts/backfill-stances.test.ts
git commit -m "feat: add backfill-stances.ts for batch stance generation"
```

---

### Task 7: Update CLAUDE.md, Skills, and package.json

**Files:**
- Modify: `CLAUDE.md`
- Modify: `skills/ingest/SKILL.md`
- Modify: `skills/extract/SKILL.md`
- Modify: `package.json`

- [ ] **Step 1: Add stance to extraction JSON format in CLAUDE.md**

- [ ] **Step 2: Add behavioral rule about stances to CLAUDE.md**

- [ ] **Step 3: Add create-tensions and backfill-stances to Key Scripts table in CLAUDE.md**

- [ ] **Step 4: Update extraction JSON in skills/ingest/SKILL.md and skills/extract/SKILL.md**

- [ ] **Step 5: Add scripts to package.json**

Add both `"create-tensions"` and `"backfill-stances"` to the scripts section. `backfill-stances` is a permanent maintenance tool (not one-time) — needed whenever stances are corrected or new insights are imported without stances.

- [ ] **Step 6: Run all tests**

Run: `npx vitest run`
Expected: All pass

- [ ] **Step 7: Commit**

```
git add CLAUDE.md skills/ package.json
git commit -m "docs: update extraction format, skills, and scripts for stance field"
```

---

### Task 8: Final Integration Test + Benchmark

- [ ] **Step 0: Pre-check benchmark compatibility**

Read `benchmarks/bench.ts` and `benchmarks/check.ts` to verify they don't assert anything that the new schema fields (`severity`, `stance_a`, `stance_b` on tension files) would invalidate. The benchmark counts tension files but doesn't parse their frontmatter, so this should be safe — but verify before running.

- [ ] **Step 1: Run full test suite**

Run: `npx vitest run`
Expected: All tests pass

- [ ] **Step 2: Run benchmark regression check**

Run: `npm run bench:check`
Expected: All checks pass

- [ ] **Step 3: Verify MCP server still works**

Send JSON-RPC initialize + zuhn_stats through the MCP server. Verify response includes current insight count.

- [ ] **Step 4: Test create-tensions with sample data**

Write a test judgments file, run `npx tsx scripts/create-tensions.ts --file /tmp/test-tensions.json`, verify tension file created and cached.

- [ ] **Step 5: Final commit and push**

```
git push origin main
```

---

### Task 9: Run Backfill (Interactive — requires Claude in conversation)

This task is NOT automated — it requires Claude in conversation to generate stances.

- [ ] **Step 1: List insights missing stances**

Run: `npx tsx scripts/backfill-stances.ts --list`

- [ ] **Step 2: Claude generates stances in batches of 50**

Read the output, generate a stance for each insight, write to `/tmp/zuhn-stances.json`.

- [ ] **Step 3: Dry-run then apply stances**

Run: `npx tsx scripts/backfill-stances.ts --file /tmp/zuhn-stances.json --dry-run`
Then: `npx tsx scripts/backfill-stances.ts --file /tmp/zuhn-stances.json`

- [ ] **Step 4: Run learn to generate tension candidates**

Run: `npm run learn`

- [ ] **Step 5: Review tension candidates and create tensions**

Read `meta/tension-candidates.json`, evaluate each pair, write judgments to `/tmp/zuhn-tensions.json`, run `npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json`.

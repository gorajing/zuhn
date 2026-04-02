# Zuhn v2 Design Spec
Status: Approved (post-Architect review) | Date: 2026-03-31

Synthesized from: Neo4j SVAI session, Bessemer continual learning landscape (Engram Lab, Engram Research, Chronologies AI), Memori competitive analysis, and Claude Code leaked architecture study (claw-code).

---

## Architect's Vetoes Applied

Three hard vetoes were issued during spec review. All three are incorporated:

1. **No LLM calls inside the fast vector loop.** `related: string[]` stays exactly as-is. Typed relationships live in a new `evidence: TypedRelation[]` field, populated by a separate async script (`classify-edges.ts`), never inside `discoverConnections()`.
2. **No Leiden implementation.** Implementing Traag's recursive global modularity algorithm from scratch is a hallucination trap. Louvain via `graphology-communities-louvain` works and is stable. Phase 6 deleted.
3. **No global PostToolUse bash hook.** Claude Code hooks in `~/.claude/hooks` are global — they fire for every Claude Code session in every directory. A passive scraper would capture proprietary work from other projects. Removed. Phase 8 relies on explicit intent only: SessionEnd hook + `queue_session_insight` MCP tool.

---

## Executive Summary

Zuhn's current architecture is a retrieval-and-compression system. v2 upgrades it to a **continual learning system** — where knowledge doesn't just accumulate but reorganizes, sharpens, and self-evaluates over time.

**The Dual-Graph Architecture** is the foundation:
- **Fast Graph** (`related: string[]`) — vector similarity, rebuilt every `learn.ts` run, zero LLM calls, finds structural neighbors
- **Slow Graph** (`evidence: TypedRelation[]`) — semantic classification, built async by `classify-edges.ts`, LLM micro-classifier, finds meaning

**What doesn't change:** The compression hierarchy, stance-first knowledge, gap detection, tension resolution, and epistemic CI/CD remain uniquely Zuhn.

---

## Dependency Chain

```
Phase 1: Dual-Graph Architecture (evidence[] + connections table + classify-edges.ts)
        ↓ (unlocks all phases below)
Phase 2: Surprise-Gated Queue    Phase 3: Principle Provenance
        ↓                                ↓
Phase 4: PageRank Seed Selection  Phase 5: Common Neighbors
        ↓
Phase 7: Temporal Decay
        ↓
Phase 8: Session→KB Pipeline (explicit intent only)
```

---

## Phase 1: Dual-Graph Architecture

### The Problem
`related: string[]` is semantically blind. It finds what's *structurally similar* (nearest embedding neighbors) but cannot express *why* two insights are connected. A connection between two insights could mean one supports the other, contradicts it, or transfers to its domain — all treated identically.

Running a micro-classifier inside `discoverConnections()` is wrong because:
- `discoverConnections()` runs for every insight on every `learn.ts` invocation
- At 3,000+ insights × 5 neighbors = 15,000+ LLM calls per run
- This is API bankruptcy and would take hours

### The Solution: Dual-Graph Architecture

**Fast Graph — unchanged:**
```yaml
related:
  - INS-260315-XXXX
  - INS-260101-XXXX
```
Written by `discoverConnections()`. Pure vector math. No LLM. Rebuilt every cycle.

**Slow Graph — new:**
```yaml
evidence:
  - id: INS-260315-XXXX
    type: CONTRADICTS
    classified_at: 2026-03-31
  - id: INS-260101-XXXX
    type: TRANSFERS_TO
    classified_at: 2026-03-31
```
Written by `classify-edges.ts`. LLM micro-classifier. Runs async on high-signal pairs only.

**Relationship taxonomy:**
```
SUPPORTS      — B builds on / reinforces A
CONTRADICTS   — B opposes A (high surprise)
EXTENDS       — B broadens A's scope
TRANSFERS_TO  — A principle applies in B's domain (cross-domain surprise)
REFINES       — B makes A more precise
CHALLENGES    — B questions assumptions in A (moderate surprise)
```

### High-Signal Pairs (what gets classified)

`classify-edges.ts` classifies only:
1. **Tension candidates** — pairs in `meta/tension-candidates.json` (already flagged as contradicting by keyword/stance analysis)
2. **Cross-domain vector connections** — pairs in `related[]` where `from.domain != to.domain` (query from SQLite insights table)

This keeps classifications to ~500–2,000 pairs total, not 15,000. Batched 20 pairs per Claude call.

### Implementation

**1a — `scripts/schemas/frontmatter.ts`**

Add `RelationshipType` enum and `EvidenceRelation` schema. Add `evidence` field to `InsightFrontmatter`. `related` field is **unchanged**.

**1b — `scripts/lib/db.ts`**

Add `connections` table migration:
```sql
CREATE TABLE IF NOT EXISTS connections (
  from_id               TEXT NOT NULL,
  to_id                 TEXT NOT NULL,
  type                  TEXT NOT NULL,
  confidence_score      REAL DEFAULT 1.0,
  created_at            TEXT NOT NULL DEFAULT (datetime('now')),
  last_confirmed        TEXT,
  confidence_trajectory TEXT DEFAULT 'stable',
  PRIMARY KEY (from_id, to_id)
);
```

**1c — `scripts/classify-edges.ts`** (new script)

Async batch classifier:
1. Load high-signal pairs (tension candidates + cross-domain vector connections)
2. Filter to pairs not already in `connections` table
3. Batch into groups of 20
4. Call `claude -p` with JSON output format
5. Write results to `connections` table
6. Update `evidence[]` in YAML frontmatter for both endpoints (bidirectional)

Usage:
```
npx tsx scripts/classify-edges.ts [--limit 50] [--dry-run] [--source tensions|cross-domain|all]
```

Add to `package.json` as `npm run classify-edges`.

### Files Modified
- `scripts/schemas/frontmatter.ts` — add `RelationshipType`, `EvidenceRelation`, `evidence` field
- `scripts/lib/db.ts` — add `connections` table + indexes
- `scripts/classify-edges.ts` — new async batch classifier
- `package.json` — add `classify-edges` script

---

## Phase 2: Surprise-Gated Compression Queue

### Problem
`detectEmergence()` sorts COMPRESS flags by `insightCount` descending. A topic with 20 mutually contradicting insights is more valuable to compress than one with 200 loosely related observations.

### Solution
Add a **surprise score** to `EmergenceFlag`. Sort by surprise score first, count second.

```typescript
export interface EmergenceFlag {
  domain: string;
  topic: string;
  insightCount: number;
  principleCount: number;
  surpriseScore: number;   // NEW: 0.0–1.0
  tensionCount: number;    // NEW: CONTRADICTS edges within topic
  transferCount: number;   // NEW: TRANSFERS_TO edges out of topic
}
```

**Surprise score:** `(tensionCount * 2 + transferCount) / insightCount`
Tensions weighted 2× — internal contradiction is more epistemically urgent than external transfer potential.

**Requires Phase 1** — reads from `connections` table.

### Files Modified
- `scripts/lib/learning.ts` — `detectEmergence()` sort + surprise scoring
- `scripts/compress.ts` — display surprise score in list mode

---

## Phase 3: Principle Provenance

### Problem
When `compress.ts` produces a principle, the reasoning behind it is discarded. You can't audit how a principle formed, trace it to evidence, or know when it might be outdated. Jeremy Adams called this "case law."

### Solution
Add a `lineage` block to every principle's YAML, written by `create-principles.ts`:

```yaml
lineage:
  compressed_at: 2026-03-31
  source_insights:
    - id: INS-260101-XXXX
      relation: SUPPORTS
    - id: INS-260315-XXXX
      relation: CHALLENGES
  surprise_score: 0.73
  compression_trigger: "COMPRESS flag — 23 insights, 7 CONTRADICTS edges"
  pagerank_seed: INS-260215-XXXX
```

Update `compress.ts` prompt to request `lineage` in the output JSON. Update `create-principles.ts` to write it.

### Files Modified
- `scripts/create-principles.ts` — write `lineage` block
- `scripts/compress.ts` — include lineage fields in JSON format instructions
- `scripts/schemas/frontmatter.ts` — add optional `lineage` to `PrincipleFrontmatter`

---

## Phase 4: PageRank for Principle Selection

### Problem
`compress.ts` sorts insights alphabetically by ID. The principle seed is arbitrary. The most load-bearing insight — the one everything else connects through — should anchor the compression.

### Solution
Pure TypeScript PageRank on the cluster subgraph, run in `compress.ts` before generating the prompt. PageRank winner = first insight listed + recorded as `lineage.pagerank_seed`.

```typescript
// scripts/lib/pagerank.ts — pure TS, no new dependencies
export function computePageRank(
  insightIds: string[],
  connections: Array<{ from: string; to: string }>,
  iterations = 20,
  dampingFactor = 0.85
): Map<string, number>
```

**Requires Phase 1** — reads from `connections` table.

### Files Modified
- `scripts/lib/pagerank.ts` — new pure TS implementation (~30 lines)
- `scripts/compress.ts` — sort by PageRank, pass seed to lineage
- `scripts/lib/db.ts` — helper to fetch connections for insight set

### Tests Needed
- Correct relative scores on 5-node graph
- Dangling node handling
- Empty graph returns uniform scores

---

## Phase 5: Common Neighbors Link Prediction

### Problem
Vector similarity finds semantic neighbors. Louvain finds communities. Neither finds structurally plausible connections between dissimilar insights that share many mutual neighbors — the cross-domain bridges that pure embedding search misses.

### Solution
Optional pass in `discoverConnections()` after `buildBidirectional()`. Score = `|common neighbors| / sqrt(degree(A) * degree(B))`.

Predicted links go into `connections` table with `type = 'PREDICTED'` and are NOT written to `evidence[]` until confirmed. Surfaced as new `LINK_PREDICT` section in `flags.md`.

**Requires Phase 1** — connections table must exist.

### Files Modified
- `scripts/lib/common-neighbors.ts` — new pure TS algorithm
- `scripts/lib/learning.ts` — call after `buildBidirectional()`, write LINK_PREDICT flags
- `scripts/lib/learning.ts` — `writeFlagsFile()` includes LINK_PREDICT section

---

## Phase 7: Temporal Decay

### Problem
A 2023 insight about VC market conditions has the same retrieval weight as a 2026 insight. `shelf_life` exists but is never used in scoring.

### Solution

**7a — Decay multiplier in hybrid search:**
```typescript
function shelfLifeDecay(shelfLife: string, createdAt: string): number {
  const ageMonths = monthsBetween(createdAt, new Date());
  const halfLife = { 'evergreen': Infinity, 'years': 36, 'months': 6, 'weeks': 1 };
  const half = halfLife[shelfLife] ?? 12;
  if (half === Infinity) return 1.0;
  return Math.pow(0.5, ageMonths / half);
}
```
Applied as a multiplier to search relevance scores. Evergreen insights unaffected.

**7b — Stale flag in resurface:**
`resurface.ts` flags insights where shelf_life window has expired. New "needs revalidation" section in `flags.md`.

**7c — Confidence trajectory on connections:**
Track whether CONTRADICTS/CHALLENGES edges persist across `learn.ts` runs. Persisting tension = `increasing`. Disappearing = `decreasing`. Update `confidence_trajectory` in connections table.

**Requires Phase 1** — connections table must exist.

### Files Modified
- `scripts/lib/search.ts` — decay multiplier in hybrid scoring
- `scripts/resurface.ts` — stale insight detection
- `scripts/lib/db.ts` — schema migration for `last_confirmed`, `confidence_trajectory`
- `scripts/lib/learning.ts` — track trajectory in `discoverConnections()`

---

## Phase 8: Session→KB Pipeline (Explicit Intent Only)

### Problem
Claude Code sessions produce significant reasoning that is discarded at session end. The Claude Code architecture (`compact.rs`) confirms this is by design — it is stateless. Zuhn is the persistent memory layer Claude Code is missing.

### Design Constraint
Claude Code hooks in `~/.claude/hooks` are **global** — they fire for every Claude Code session in every directory. A passive PostToolUse bash hook that scrapes tool output would capture proprietary work from unrelated projects. **No passive scraping.**

### Solution: Explicit Intent Architecture

**8a — SessionEnd hook** (safe — just a reminder)

`.claude/hooks/session-end-remind.sh`:
```bash
#!/bin/bash
# Fires on session end. Reminds Claude to extract insights if session queue is non-empty.
QUEUE="/tmp/zuhn-session-queue.jsonl"
if [ -f "$QUEUE" ] && [ -s "$QUEUE" ]; then
  COUNT=$(wc -l < "$QUEUE")
  echo "Zuhn: $COUNT insight(s) queued this session. Run 'npm run extract-session' to capture."
fi
exit 0
```

This only reads `/tmp/zuhn-session-queue.jsonl` — it never scrapes other directories.

**8b — `queue_session_insight` MCP tool** (explicit intent)

Add to `scripts/mcp-server.ts`. Claude explicitly calls this when it identifies something worth preserving:

```typescript
{
  name: "queue_session_insight",
  description: "Queue a significant insight from this session for extraction into the knowledge base. Call this when you identify a genuinely new conclusion, decision, or principle worth preserving.",
  inputSchema: {
    observation: z.string(),
    domain: z.string().optional(),
    topic: z.string().optional(),
    stance: z.string().optional(),
  }
}
```

Writes to `/tmp/zuhn-session-queue.jsonl`. Does not auto-extract — that requires human intent.

**8c — `scripts/extract-session.ts`** (explicit extraction)

Reads the session queue, formats for extraction prompt, routes through `extract.ts` pipeline. Run manually: `npm run extract-session`.

### Files Modified
- `.claude/hooks/session-end-remind.sh` — new (safe, read-only)
- `.claude/settings.json` — register SessionEnd hook
- `scripts/mcp-server.ts` — add `queue_session_insight` tool
- `scripts/extract-session.ts` — new extraction script
- `package.json` — add `extract-session` script

---

## Non-Goals

- **Phase 6 (Leiden)** — Deleted. Louvain is stable.
- **Multi-user / organizational product** — v3. MCP server remains single-user.
- **GraphRAG during ingestion** — Future phase after typed relationships are proven stable.
- **Passive session scraping** — Vetoed. Explicit intent only.

---

## Implementation Order

| Phase | Effort | Blocks | Notes |
|---|---|---|---|
| 1. Dual-Graph Architecture | Large | Nothing | Foundation — do first |
| 2. Surprise-Gated Queue | Small | Phase 1 | Query connections table |
| 3. Principle Provenance | Small | Phase 1 | Schema + prompt update |
| 4. PageRank | Medium | Phase 1 | Pure TS, ~30 lines |
| 5. Common Neighbors | Medium | Phase 1 | New flag type |
| 7. Temporal Decay | Medium | Phase 1 | Decay fn + schema |
| 8. Session Pipeline | Medium | Nothing | MCP tool + hook |

Phases 2–5, 7 are all parallelizable once Phase 1 is complete.

---

## The Moat (What This Preserves)

After all phases implemented, Zuhn still uniquely owns:

1. **The compression hierarchy** — insights → principles → mental models. No competitor compresses.
2. **Stance-first knowledge** — directional claims, not summaries. Forces a worldview.
3. **Gap detection** — knowing what you don't know. Nobody ships this.
4. **Tension resolution as judgment** — contradictions resolved, not just flagged.
5. **Epistemic CI/CD** — `bench:check` as a knowledge quality gate. Genuinely novel.
6. **Actionability dimension** — every insight has a horizon. Nobody else models this.

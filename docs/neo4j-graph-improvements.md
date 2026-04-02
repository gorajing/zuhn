# Neo4j Graph Concepts to Steal for Zuhn

Captured from Neo4j session at SVAI 2026-03-31. All implementable in TypeScript + SQLite — no Neo4j infrastructure needed.

## Priority Order

### 1. Typed Relationships (do first — unlocks everything else)

Current `related: string[]` is untyped. Add semantic relationship types:

```
SUPPORTS      — B builds on / reinforces A
CONTRADICTS   — B opposes A
EXTENDS       — B broadens A's scope
TRANSFERS_TO  — A principle applies in B's domain
REFINES       — B makes A more precise
CHALLENGES    — B questions assumptions in A
```

**Implementation:** During `learn.ts` connection discovery, run a micro-classifier
(single Claude call, 3-5 tokens) to assign type when a new connection is found.
Update YAML frontmatter format to store typed relationships.

---

### 2. Link Prediction via Common Neighbors

Vector similarity finds what's *similar*. Common Neighbors finds what's
*structurally plausible* — if A and B both connect to C, D, E they're probably
related even if embeddings aren't close. Catches cross-domain connections
that pure vector search misses.

Add as optional pass in `learn.ts` after `buildBidirectional()`.
Score = number of mutual neighbors / degree. Flag top predictions for review.

---

### 3. Leiden Algorithm (replace Louvain)

Leiden is a strict improvement over Louvain:
- Optimizes modularity globally (Louvain is greedy-local)
- Better cluster quality → better COMPRESS flags → better principle distillation
- Drop-in conceptual replacement

Check npm for JS port (`leiden-algorithm`, `leiden-js`) before reimplementing.

---

### 4. PageRank for Principle Selection

Currently compression picks representative insights manually/by recency.
PageRank on the cluster subgraph identifies the most structurally central
insight — the one everything else connects through. Use as principle seed.

Run on cluster subgraph in `compress.ts` before sending to Claude.

---

### 5. GraphRAG-Style Extraction (future)

Extract relationship types *during* ingestion, not post-hoc.
Schema: `{ entities: [...], relationships: [{ from, type, to, confidence }] }`
Compare extracted vs. vector-discovered relationships as quality signal.

---

### 6. Temporal Relationship Tracking (future)

Add to relationships table:
- `first_observed`, `last_confirmed` dates
- `confidence_trajectory`: stable / increasing / decreasing
- `breaking_events`: insights that changed this relationship

Lets you track when principles become outdated and relationships decay.

---

## What NOT to Do
- Don't adopt Neo4j as database (breaks local-first)
- Don't port entire GDS library (too heavy)
- Don't do temporal graphs before typed relationships are solid

## Source
- neo4j/graph-data-science — Leiden, PageRank, link prediction algorithms
- neo4j/neo4j-graphrag-python — SimpleKGPipeline, schema-driven extraction

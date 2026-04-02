# Zuhn Next Level Roadmap
Synthesized from SVAI 2026-03-31 — Neo4j session (Jeremy Adams) + Bessemer landscape research (Engram, Chronologies AI, Memori)

## Where Zuhn Sits in the Landscape

Bessemer Venture Partners (2026) identifies **Continual Learning Systems** as one of 5 AI infrastructure frontiers. Zuhn belongs here — not in "Harness Infrastructure" (Mem0, Memori, Zep) which is retrieval-only.

Key competitors in this space:
- **Engram Lab** ($48M General Catalyst, Dec 2025) — online continual learning via SSM/linear attention architectures. Pre-product.
- **Engram Research** — full-stack agentic AI with hierarchical episodic memory, surprise-gated consolidation, provenance/deterministic replay. Targets regulated industries.
- **Chronologies AI** — stealth, implied thesis: temporal knowledge representation, knowledge staleness tracking.
- **Memori** — memory infrastructure for enterprise AI (retrieval, not learning). Drop-in SDK/MCP layer.

---

## What Becomes Table Stakes (build, but not the moat)

All these will exist in competitors within 2 years:
- Typed relationships
- Temporal tracking
- Vector + graph hybrid search
- Provenance on decisions

---

## What Remains Uniquely Zuhn

1. **The compression hierarchy** — insights → principles → mental models. Nobody else distills. Everyone retrieves.
2. **Stance-first knowledge** — every insight must take a directional position. Forces a worldview, not a filing cabinet.
3. **Gap detection** — knowing what you don't know. Nobody ships this.
4. **Tension resolution as judgment** — contradictions are evaluated and resolved, not just flagged. Builds coherent epistemology.
5. **Epistemic CI/CD** — `bench:check` as a knowledge quality gate. Genuinely novel concept in this space.
6. **Actionability as a first-class dimension** — every insight has an actionability horizon and shelf life. Nobody else models this.

**The one-sentence moat:** Everyone asks "can you find what you know?" Zuhn asks "is what you know coherent, compressed, complete, and still true?"

---

## The Unified Upgrade Path

### Dependency chain — everything flows from one prerequisite:

```
Typed Relationships (do first — unlocks everything else)
        ↓
┌─────────────────────────────────────────────────────────┐
│  CONTRADICTS type    → surprise signal → compress first │  ← Engram: surprise-gated consolidation
│  PageRank winner     → slow memory anchor               │  ← Engram: fast/slow memory separation
│  Common Neighbors    → TRANSFERS_TO candidates          │  ← Neo4j: cross-domain link prediction
│  type + timestamp    → full provenance record           │  ← Engram: deterministic replay
└─────────────────────────────────────────────────────────┘
        ↓
Replace Louvain with Leiden — better clusters, better everything above
```

---

## Concrete Upgrades

### Near-term

**1. Typed relationships** *(Neo4j #1 — unlocks all others)*
Add semantic relationship types to `related: string[]` during `learn.ts` connection discovery:
```
SUPPORTS      — B builds on / reinforces A
CONTRADICTS   — B opposes A
EXTENDS       — B broadens A's scope
TRANSFERS_TO  — A principle applies in B's domain
REFINES       — B makes A more precise
CHALLENGES    — B questions assumptions in A
```
Run a micro-classifier (single Claude call) when new connections are found. Update YAML frontmatter.

**2. Surprise-gate the compression queue**
When `learn.ts` sets COMPRESS flags, sort by `tension_count + transfer_count`, not topic size.
High-tension and high-transfer topics compress first.

**3. Principle provenance**
Add `lineage` block to every principle YAML:
```yaml
lineage:
  source_insights: [INS-XXXXXX-XXXX, ...]
  cluster_id: louvain_cluster_42
  pagerank_seed: INS-XXXXXX-XXXX
  compressed_at: 2026-03-31
  compression_reason: "COMPRESS flag — 23 insights, high tension count"
```

### Medium-term

**4. Temporal confidence scoring**
Add `last_confirmed` timestamp + decay function on `shelf_life`.
Surface stale insights during resurface with "needs revalidation" flag.
Full temporal relationship structure:
```yaml
relationship:
  type: CONTRADICTS
  first_observed: 2026-01-15
  last_confirmed: 2026-03-31
  confidence_trajectory: increasing
  breaking_events: [INS-260315-XXXX]
```

**5. PageRank for principle selection** *(Neo4j #4)*
Run PageRank on cluster subgraph in `compress.ts` before sending to Claude.
Most structurally central insight = principle seed, not recency-based selection.

**6. Common Neighbors link prediction** *(Neo4j #2)*
Add as optional pass in `learn.ts` after `buildBidirectional()`.
Score = mutual neighbors / degree. Catches cross-domain connections that vector search misses.
Complements existing: Louvain (communities) + Common Neighbors (bridges) + zero-tag-overlap (confirms cross-domain).

**7. Replace Louvain with Leiden** *(Neo4j #3)*
Better cluster quality → better COMPRESS flags → better principle distillation.
Check npm for JS port (`leiden-algorithm`, `leiden-js`) before reimplementing.

### Future

**8. GraphRAG-style extraction** — extract relationship types during ingestion, not post-hoc.
**9. Organizational product** — MCP server → multi-user team KB with shared compression pipeline.

---

## Strategic Position

Zuhn today: personal epistemic OS.
Zuhn on the Bessemer slide: team continual learning infrastructure.

The path is the MCP server becoming a product — multiple contributors, shared compression pipeline, organizational precedent layer. That's the version that competes with Engram Research's Monad and wins on depth of compression.

---

## Sources
- Neo4j SVAI session with Jeremy Adams (2026-03-31) → `docs/neo4j-graph-improvements.md`
- Bessemer "Five Frontiers" slide (2026)
- Engram Lab: engram-lab.com, Stanford HazyResearch papers (Zoology, Based, Cartridges)
- Engram Research: engram.org (Engram-Locus, Engram-VQ, Monad, Provenance)
- DeepSeek Engram paper: arXiv:2601.07372
- Memori: memorilabs.ai, GitHub MemoriLabs/Memori
- Chronologies AI: chronologies.ai (stealth)

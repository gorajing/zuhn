# Meridian Capital Partners — Demo Corpus

*A fictional investment firm corpus for Zuhn demos and capability stress-testing.*

---

## Purpose

This corpus exists to:

1. **Demo Zuhn's compression / lineage / retirement / prediction-tracking against investment-firm-shaped content** — the demo every YC interview and customer prospect runs through.
2. **Surface capability gaps** — where Zuhn's existing schema and pipeline assume personal-corpus content (YouTube transcripts, blog posts) and break or weaken on firm content (IC memos, post-mortems, multi-author Slack threads).
3. **Anchor the v3 company plan in a concrete buyer journey** rather than abstract architecture.

This is a fictional firm. Any resemblance to real firms is unintentional. The narrative arc is designed to demonstrate retirement of superseded conclusions and prediction-vs-outcome resolution.

---

## The firm

**Meridian Capital Partners**

- Single family office, ~$1.2B AUM
- 8 investment professionals: Sarah Chen (CIO), David Park (Senior PM), Rachel Wu (Senior PM), Marcus Reed (Mid-Level Analyst), Priya Shah (Mid-Level Analyst), James Liu (Mid-Level Analyst), Kira Volkov (Junior Analyst), Daniel Tanaka (Junior Analyst)
- Multi-asset: public equities, private growth, secondaries, fund-of-fund commitments
- Founded 2018, AI-thesis-heavy since 2022
- Quarterly IC, weekly investment meetings

---

## The narrative arc (Q3 2023 → Q2 2026)

| Period | Thesis state | Documented in |
|---|---|---|
| **Q3 2023** | Initiate "AI infrastructure as durable moat" thesis | sector-theses/2023-Q3-AI-infrastructure-thesis.md, ic-memos/2023-Q3-NVDA-initiation.md |
| **Q1-Q2 2024** | Extend into application layer | ic-memos/2024-Q2-Anthropic-secondary.md |
| **Q4 2024** | First questions emerge — model costs dropping ~4x/year | quarterly-letters/2024-Q4-letter.md, ic-memos/2024-Q4-NVDA-followon-thesis-revision.md |
| **Q1-Q2 2025** | TWLO post-mortem encodes "API-economy moats erode in AI-native architectures" | post-mortems/2025-Q1-TWLO-postmortem.md, meeting-notes/2025-Q2-pope-podcast-summary.md |
| **Q3 2025** | NVDA trim debate; methodology gap surfaced | slack-threads/2025-Q3-NVDA-trim-debate.md, post-mortems/2025-Q3-NVDA-mid-position-postmortem.md |
| **Q4 2025** | Formal retirement of "compute scarcity = permanent moat" | quarterly-letters/2025-Q4-letter.md |
| **Q1 2026** | Replacement thesis published; Vertical AI Bucket initiated | sector-theses/2026-Q1-AI-infrastructure-thesis-revised.md, ic-memos/2026-Q1-vertical-AI-bucket-initiation.md |

This arc demonstrates:
- 12+ explicit principles compressed from documents
- 3 explicit retirement events (compute scarcity, API moats, communication API foundationality)
- 12+ predictions of varying resolution states (CONFIRMED, FALSIFIED, PARTIALLY CONFIRMED, PENDING, TRACKING)
- Cross-document lineage through 12 interconnected documents

---

## Document inventory

| Type | Generated | Total target | Status |
|---|---|---|---|
| IC Memos | 4 | 10 | Narrative-essential complete |
| Post-Mortems | 2 | 5 | Narrative-essential complete |
| Sector Theses | 2 | 5 | Narrative-essential complete |
| Meeting Notes | 1 | 8 | 1 anchor note done |
| Quarterly Letters | 2 | 4 | Mid-arc + retirement-arc complete |
| Slack Threads | 1 | 8 | 1 multi-author debate done |
| **Total** | **12** | **40** | **30% — narrative arc complete** |

The remaining 28 documents are variety / depth, not narrative. They can be generated in a follow-up session.

---

## Capability gaps surfaced (the actual deliverable)

Generating these 12 documents surfaced specific gaps in Zuhn's current pipeline. Listed in priority order with effort estimates.

### Tier 1 — schema and data model gaps (must fix before pilot)

#### 1. Document type taxonomy doesn't include investment-firm types

Zuhn's source schema knows YouTube, blog, Reddit, PDF, audio. It does not know IC memo, post-mortem, quarterly letter, sector thesis, meeting note, slack thread. Each has different structural fields:

| Document type | Required structural fields |
|---|---|
| IC memo | position, action, predictions[], stop-loss, vote outcome, parent_thesis |
| Post-mortem | predicted vs actual, retired predictions[], retired principles[], lessons[] |
| Quarterly letter | performance, position changes, principle evolutions, related post-mortems |
| Sector thesis | pillars, risks, status updates over time, supersedes/superseded_by |
| Meeting note | source, source_date, source_url, principles_affected, priority |
| Slack thread | participants, thread_started, thread_concluded, related_documents, outcome |

**Fix:** Extend `SourceSchema` with `type` enum + per-type frontmatter validators. Roughly 1-2 weeks of schema and ingestion work.

#### 2. Predictions need to be first-class objects extractable from documents

The IC memos declare predictions inline with structured `id / claim / confidence / horizon / resolution` fields. The post-mortems reference and resolve those predictions across multiple IDs simultaneously. Today, predictions live in `knowledge-base/predictions/` as separate files created by `predict.ts`. There's no document-driven prediction extraction.

The Meridian corpus contains 12+ predictions with identifiers like `PRED-2023Q3-001` through `PRED-2026Q1-021`. Each has its own resolution state that needs to flow to the principle layer.

**Fix:** Add prediction extractor to ingestion. When ingesting an IC memo, parse `predictions:` frontmatter and create individual prediction files. When ingesting a post-mortem, parse `related_predictions` and resolve them — multi-prediction resolution in a single pass. Roughly 2-3 weeks.

#### 3. Explicit retirement events for principles (document-driven, not just empirical)

The TWLO post-mortem retires 2 prior principles. The Q4 2025 letter retires "compute scarcity moat." The 2026 sector thesis explicitly supersedes the 2023 sector thesis. Today, Zuhn's retirement happens via empirical resolution (failing predictions). There's no document-driven principle retirement workflow.

**Fix:** Add retirement event handler. Documents can list `retired_principles:` in frontmatter and the principle file gets marked archived with full lineage to the retiring document. Add `supersedes:` and `superseded_by:` fields for parent-thesis revision. Roughly 1-2 weeks.

### Tier 2 — extraction quality gaps (need work but not blocking)

#### 4. Multi-author attribution chains

IC memos have proposer + reviewers + voter outcomes (4-0, 4-0-1, 6-0). Post-mortems have authors + review chain. Slack threads have multiple participants with timestamps. Zuhn currently tags everything to a single source author. We need multi-author attribution per insight — which partner originated which thesis, who concurred, who abstained.

The Meridian corpus has Sarah Chen (CIO) appearing across 9 documents in different roles (proposer, reviewer, vote-caster, letter-author). The compression layer should surface "Sarah Chen is the originating voice on the 'leading vs lagging indicator' lesson" by attribution analysis across documents.

#### 5. Document workflow states

IC memos move through draft → reviewed → approved → encoded. Post-mortems through filed → reviewed → encoded. The corpus tracks this in frontmatter (`status: APPROVED`, `Outcome: APPROVED 4-0-1`). Today Zuhn has no document state tracking.

#### 6. Cross-document narrative arcs

The Q4 2025 letter explicitly references the TWLO post-mortem. The TWLO post-mortem explicitly retires principles that the parent sector thesis seeded. The slack thread references both the Pope memo and the original IC memo. The principle that gets encoded should know it has lineage through ALL of these documents.

Today's extraction is per-document. Cross-document compression happens in `learn.ts` via Louvain but doesn't currently understand "this letter explicitly cites this post-mortem." We need explicit citation parsing in the ingestion pipeline.

#### 7. Time-series document evolution

The 2023-Q3 sector thesis has quarterly status updates appended to it as the position evolves. By Q3 2025 the document has 8 quarterly updates. This is a document-with-versions structure, not a static document. Zuhn's current model assumes static documents.

**Fix:** Allow "appendable" document types where new content gets added with timestamps. Compression should treat the latest version as primary while preserving history.

### Tier 3 — UX gaps (visible to user, not blocking architecture)

#### 8. No visual UI for the demo

The artifacts read well as markdown. A CIO will not read markdown. We need a web UI showing:
- Compression hierarchy (insights → principles → mental models → wisdom)
- Lineage trace from claim back to source documents
- Prediction states (CONFIRMED / FALSIFIED / PARTIALLY / PENDING) with timeline
- Retirement events with the document that retired the principle
- Author attribution heatmap (who originates which kinds of insights)

#### 9. No demo query mode

Walking a prospect through "let me show you a query against this corpus" needs a query interface. Today it's CLI / MCP only. Needs at minimum a simple web frontend with:
- Free-text query box
- Structured filters (by author, by date range, by document type, by position, by principle)
- Results showing principle + lineage + supporting documents

#### 10. No timeline / narrative visualization

The narrative arc (Q3 2023 → Q2 2026) is the most visceral demonstration of retirement working over time. Today we have no way to visualize "thesis evolution timeline" — it'd just be a list of principle files with timestamps.

**Specific demo flow we want:** A horizontal timeline showing:
- Sector thesis nodes (2023-Q3 active, 2025-Q4 retiring, 2026-Q1 replacing)
- Principle nodes (active = green, warning = yellow, retired = grey with strikethrough)
- Predictions (resolved at the right point on the timeline with outcome color-coded)
- Position events (initiations, trims, post-mortems) anchored to dates
- Document references (clickable) for any element

### Tier 4 — engineering envelope (already known from v1 plan, validated by corpus)

Pre-pilot envelope work, unchanged by this exercise:

- 5-7 connectors (Notion, Slack, Gmail, Google Drive, Affinity, etc.)
- Multi-user identity and permissions
- Role-scoped retrieval (CIO ≠ junior analyst access for confidential memos)
- Audit log (who queried what, when)
- Customer success tooling

The corpus exercise validated that the envelope is necessary but did not surface new envelope work. The 14-22 weeks estimate from v1 holds.

---

## Total realistic engineering envelope

| Tier | Effort | Cumulative |
|---|---|---|
| Tier 1 (schema, predictions, retirement) | 4-6 weeks | 4-6 weeks |
| Tier 2 (attribution, workflow, narrative) | 3-4 weeks | 7-10 weeks |
| Tier 3 (UI / visualization) | 8-10 weeks | 15-20 weeks |
| Tier 4 (envelope: connectors, identity, audit) | 14-22 weeks | 29-42 weeks |

**Total: 29-42 weeks of focused engineering with 2 engineers** to go from current personal-corpus Zuhn to first-paying-customer-ready Sterling Capital pilot. That's 7-10 months elapsed time.

This is the funded work. YC funding compresses the timeline to ~6 months by accelerating hiring and parallelizing tracks.

---

## What this corpus enables

With these 12 documents in place, we can:

1. **Demo compression hierarchy** on investment-firm-shaped content. A 5-minute Loom showing query → principle → lineage → source documents → predictions → retirement events.

2. **Demonstrate retirement** by showing the lifecycle of "compute scarcity = durable moat" from active in 2023 → warning in 2024 → retiring in 2025 → superseded in 2026.

3. **Demonstrate prediction tracking** by showing the resolution lifecycle of NVDA's four entry-thesis predictions, two confirmed early, one partially confirmed, all with full lineage.

4. **Show multi-author attribution** by surfacing how Sarah Chen, David Park, Rachel Wu, and Marcus Reed each contribute different shapes of insight across the corpus.

5. **Anchor the YC application** in concrete artifacts. "Here's the demo corpus. Here's the architecture working on it. Here are the gaps. Here's the funded work."

The corpus IS the demo.

---

## Next steps

1. **(Done) Generate narrative-essential documents.** Complete: 12 documents, all major arcs covered.
2. **Update v3 of the company plan** to reference this corpus and ground every architectural decision in a concrete journey stage.
3. **Sketch Option B (ingestion adapter)** intentionally — what's the minimum viable build that gets these documents through Zuhn's pipeline?
4. **Future session: Generate remaining ~28 documents** for variety and depth.

---

## Documents inventory (detailed)

### Sector Theses (2/5)
- ✅ `sector-theses/2023-Q3-AI-infrastructure-thesis.md` — original, with quarterly status updates through retirement
- ✅ `sector-theses/2026-Q1-AI-infrastructure-thesis-revised.md` — replacement thesis with explicit lineage to retired one
- ⏳ `sector-theses/2024-Q2-AI-application-layer-thesis.md` — secondary thesis on application layer
- ⏳ `sector-theses/2024-Q3-cybersecurity-AI-thesis.md`
- ⏳ `sector-theses/2024-Q2-climate-tech-thesis.md`

### IC Memos (4/10)
- ✅ `ic-memos/2023-Q3-NVDA-initiation.md`
- ✅ `ic-memos/2024-Q2-Anthropic-secondary.md`
- ✅ `ic-memos/2024-Q4-NVDA-followon-thesis-revision.md`
- ✅ `ic-memos/2026-Q1-vertical-AI-bucket-initiation.md`
- ⏳ `ic-memos/2023-Q4-MSFT-initiation.md`
- ⏳ `ic-memos/2024-Q1-SNOW-initiation.md`
- ⏳ `ic-memos/2024-Q1-MDB-initiation.md`
- ⏳ `ic-memos/2024-Q3-PLTR-initiation.md`
- ⏳ `ic-memos/2024-Q4-CrowdStrike-initiation.md`
- ⏳ `ic-memos/2026-Q2-ARM-evaluation.md`

### Post-Mortems (2/5)
- ✅ `post-mortems/2025-Q1-TWLO-postmortem.md` — closed losing position with retired principles
- ✅ `post-mortems/2025-Q3-NVDA-mid-position-postmortem.md` — mid-position review of winning position
- ⏳ `post-mortems/2024-Q4-SPLK-postmortem.md` — winning position closed via M&A
- ⏳ `post-mortems/2025-Q2-ZM-postmortem.md` — losing position
- ⏳ `post-mortems/2025-Q4-SNOW-postmortem.md` — mixed outcome

### Quarterly Letters (2/4)
- ✅ `quarterly-letters/2024-Q4-letter.md` — mid-arc, thesis questioning emerging
- ✅ `quarterly-letters/2025-Q4-letter.md` — formal retirement announcement
- ⏳ `quarterly-letters/2023-Q4-letter.md` — initial thesis articulation
- ⏳ `quarterly-letters/2026-Q1-letter.md` — framework update

### Meeting Notes (1/8)
- ✅ `meeting-notes/2025-Q2-pope-podcast-summary.md` — external content summary, principles flagged
- ⏳ `meeting-notes/2023-Q4-NVDA-IR-call.md`
- ⏳ `meeting-notes/2024-Q2-Karpathy-podcast-summary.md`
- ⏳ `meeting-notes/2024-Q3-Anthropic-exec-call.md`
- ⏳ `meeting-notes/2024-Q4-energy-analyst-call.md`
- ⏳ `meeting-notes/2025-Q1-Hebbia-founder-call.md`
- ⏳ `meeting-notes/2025-Q2-semi-analyst-call.md`
- ⏳ `meeting-notes/2026-Q1-Bridgewater-PM-conversation.md`

### Slack Threads (1/8)
- ✅ `slack-threads/2025-Q3-NVDA-trim-debate.md` — multi-author debate that produced firm principles
- ⏳ `slack-threads/2024-Q1-NVDA-position-sizing.md`
- ⏳ `slack-threads/2024-Q3-Anthropic-vs-OpenAI.md`
- ⏳ `slack-threads/2025-Q1-TWLO-sell-decision.md`
- ⏳ `slack-threads/2025-Q4-cybersecurity-allocation.md`
- ⏳ `slack-threads/2026-Q1-NVDA-partial-sell.md`
- ⏳ `slack-threads/2026-Q2-edge-AI-thesis.md`
- ⏳ `slack-threads/2026-Q2-Anthropic-trim.md`

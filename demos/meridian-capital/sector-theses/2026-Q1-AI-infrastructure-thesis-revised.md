---
type: sector-thesis
firm: Meridian Capital Partners
sector: AI Infrastructure (Revised)
status: ACTIVE
date_established: 2026-01-30
authors: Sarah Chen (CIO), David Park (Senior PM), Rachel Wu (Senior PM)
horizon: 24-36 months
positions_implied: [vertical AI applications, edge inference, networking layer]
supersedes: 2023-Q3-AI-infrastructure-thesis.md
related_principles_seeded:
  - '"AI infrastructure value migrates up the stack as compute commoditizes" (PRI-MERIDIAN-2026-001)'
  - '"Vertical AI applications capture more durable value than horizontal infrastructure post-commoditization" (PRI-MERIDIAN-2026-002)'
  - '"Trust-by-architecture beats trust-by-process in regulated knowledge work" (PRI-MERIDIAN-2026-003)'
related_principles_retired:
  - '"Compute scarcity creates a durable infrastructure moat" (was PRI-MERIDIAN-2023-001, retired 2026-Q1)'
review_cadence: quarterly
---

# Sector Thesis — AI Infrastructure (Revised, Q1 2026)

## Why we are publishing this thesis

In Q3 2023, we established a thesis that compute scarcity would create a durable infrastructure moat. That thesis was correct for the 24-month window we held it (see 2023-Q3-AI-infrastructure-thesis.md). It is no longer correct as a forward-looking guide. Three signals during 2025 forced the retirement:

1. **Reiner Pope's analysis on Dwarkesh Patel (Q2 2025)** quantified frontier model intelligence cost dropping ~4x per year while spending rises ~10x per year. The narrowing gap between those curves is the window in which infrastructure pricing power persists.

2. **Multiple frontier labs publicly conceded the retrieval ceiling in 2025** — including the leading AI memory startup explicitly stating "scaling context doesn't actually mean scaling intelligence."

3. **Recursive architectures (HRM, TRM, demonstrated by Karpathy / Chollet)** showed that 7M-parameter models can beat frontier-scale models on specific reasoning tasks via inference-time recursion. Parameter count's dominance as the binding constraint is weakening.

None of these individually invalidates the original thesis. Together they form a pattern: the structural argument that compute is the durable moat was correct for 2023-2024 and is no longer correct in 2025-2026.

This document establishes the replacement.

## Core argument (revised)

We believe the AI platform shift is now in its second phase. Phase 1 (2022-2024) saw compute as the binding constraint and infrastructure as the value-capture layer. Phase 2 (2025-2027) will see compute commoditize and value migrate up the stack — to applications, judgment infrastructure, and integration layers.

The companies that will own the largest economic shares of Phase 2 are not the same as Phase 1. Specifically:

- **Phase 1 winners:** NVIDIA (CUDA + networking + system design), Microsoft (Azure + OpenAI), the hyperscaler-with-chips (Google with TPU)
- **Phase 2 winners:** vertical AI application companies, judgment infrastructure (compression / lineage / retirement / prediction tracking), workflow orchestration platforms

This is the same pattern we saw at the application/infrastructure boundary in mobile (2008-2014) and cloud (2010-2016). Infrastructure value tops out earlier than application value because applications can extract more economic surplus once the underlying compute commoditizes.

## The three structural pillars (revised)

### Pillar 1: Value migrates up the stack as compute commoditizes

Once a primitive becomes commodity, the layer above it captures the marginal economic value. This pattern is robust across platform shifts:
- Microprocessors → operating systems (Microsoft) and software applications
- Internet bandwidth → web platforms (Google, Amazon)
- Mobile chips → mobile applications and platforms (Apple, Meta)
- Cloud compute → SaaS applications

We expect the same pattern in AI: GPU compute commoditizes → models commoditize partially → value accrues to whoever owns the layer above the model. The candidates for that layer:

- **Vertical applications** that own a domain-specific corpus (legal, clinical, financial advisory)
- **Judgment infrastructure** that compresses unstructured intellectual capital with lineage and retirement
- **Workflow orchestration** that coordinates multi-agent systems within enterprises

We are concentrating Phase 2 positions in these three buckets.

### Pillar 2: Trust-by-architecture beats trust-by-process in regulated knowledge work

In regulated industries (finance, healthcare, legal), trust requirements are real not aspirational. Sean Batman's Hinge Health AskHR example (cited at AI Agents SF panel, Q2 2025) showed that even simple HR Q&A requires extensive human-in-the-loop trust-building. Sanjmeet's IBM AskHR architecture (7 years of evolution, multi-agent system) is an architectural answer to the same problem.

We believe the durable winners in vertical AI for regulated industries will compete on **architectural trust** — lineage on every claim, retirement of superseded conclusions, prediction-vs-outcome resolution — rather than on **process trust** (human review queues, citation tagging, hallucination mitigation as a workflow). Process trust is a feature; architectural trust is a moat.

### Pillar 3: Switching costs in vertical AI build through accumulated firm knowledge

Vertical AI applications that compress an organization's intellectual capital create asymmetric switching costs. Every month of usage compounds the data lock-in. After 12-18 months, migrating away means losing the firm's institutional memory. This is the same moat shape as Salesforce, Linear, Notion at smaller scales.

The implication for investments: vertical AI companies that accumulate firm-specific compressed corpora will be more durable than horizontal AI tools that operate on commodity inputs.

## Investment implications

### Position bucket: Vertical AI Applications (initiating Q1 2026)

Sized at 6-8% of AUM aggregate. Specific positions to be evaluated:

- **Legal-tech AI** (Harvey alternative? Specialty practice areas?)
- **Clinical decision support** for specialty medical practices
- **Financial-services workflow** AI for advisors and family-office-class buyers
- **Knowledge management AI** for professional-services firms

We are NOT picking specific positions in this thesis document. Position-level analysis will be in individual IC memos.

### Position bucket: Edge Inference Infrastructure (evaluating)

The implication of Pillar 1 (compute commoditization) is that inference moves to the edge as model sizes shrink and per-query cost drops. Beneficiaries:
- ARM (architecture for edge inference)
- On-device AI infrastructure
- Specialized inference accelerators

Sizing: 2-3% of AUM aggregate, evaluating Q2 2026.

### Position bucket: Maintained Phase 1 exposure (reduced)

We are not exiting all infrastructure. NVIDIA remains 3.0% of AUM (down from 4.5% peak), Microsoft 2.5% (down from 3.5%). These positions reflect the residual value of Phase 1 winners through 2026-2027.

### Position to retire from prior thesis: Snowflake

Snowflake's value proposition was data warehouse modernization for AI workloads. The current generation of vertical AI applications and judgment infrastructure operates on customer-owned data infrastructure (often locally) rather than centralized cloud warehouses. SNOW position to be reduced from 2.5% to 1.0% over Q2 2026.

## Explicit risks (revised)

| Risk | Probability | Impact | Monitor |
|---|---|---|---|
| Compute commoditization slows or reverses (new architecture forces re-scaling) | Low (15%) | High | Frontier model release tracking |
| Vertical AI applications fail to compound switching costs | Medium (35%) | High | Public companies' net dollar retention metrics |
| Foundation labs vertically integrate into vertical applications | Medium (40%) | Medium | OpenAI, Anthropic, Google product roadmaps |
| Trust-by-architecture turns out to be solvable via process at sufficient scale | Low (20%) | High | AskHR-class system evolution at IBM and similar |
| Macro shock compresses enterprise AI spend before vertical AI matures | Medium (30%) | Medium | Enterprise AI spend tracking |

## Review discipline

Same as the original thesis: quarterly status updates appended to this document, annual full review, immediate review if any risk moves to elevated.

We acknowledge a meta-lesson from the prior thesis: **leading indicators must be quantitative and predictive of thesis breakdown 6+ months ahead of revenue impact.** For this thesis, the key leading indicators are:

- Vertical AI customer retention and expansion (not revenue growth)
- Foundation lab product roadmap signals (vertical encroachment)
- Per-query inference cost trajectory (compute commoditization rate)

We will track these monthly, not quarterly.

## Connection to firm-level lessons

This thesis revision encodes three firm-level lessons learned during 2024-2025:

1. **From the TWLO post-mortem (Q1 2025):** API-economy moats erode in AI-native architectures. We extend this principle to AI infrastructure: compute moats erode as compute commoditizes.

2. **From the NVDA experience (2023-2025):** Net dollar retention and revenue trajectory are lagging indicators. We need leading indicators that predict thesis breakdown 6+ months early.

3. **From the SNOW experience (2024-2025):** Centralized data infrastructure may not be the right substrate for AI-native applications. Local-first / customer-controlled data is becoming the new default for trust-sensitive verticals.

## What kills this thesis

Explicitly enumerated, as before:

1. Compute does not in fact commoditize (e.g., a new scaling regime emerges that re-establishes scarcity)
2. Vertical AI applications fail to build durable switching costs (compression turns out to be commodity)
3. Foundation labs build vertical AI directly and compress the application-layer opportunity
4. Trust-by-architecture is not in fact a moat — incumbents add citation/lineage features and close the gap

We expect to revisit this thesis in Q4 2026 at the latest, sooner if any of these conditions materialize.

---

*Filed by Sarah Chen, David Park, Rachel Wu, 2026-01-30. Replaces 2023-Q3-AI-infrastructure-thesis.md. To be revisited Q4 2026.*

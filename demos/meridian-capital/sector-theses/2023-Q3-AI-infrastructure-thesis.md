---
type: sector-thesis
firm: Meridian Capital Partners
sector: AI Infrastructure
status: ACTIVE (under quarterly review)
date_established: 2023-09-08
authors: David Park (Senior PM), Sarah Chen (CIO)
horizon: 24-36 months
positions_implied: [NVDA, MSFT, SNOW, MDB]
related_principles_seeded:
  - '"Compute scarcity creates a durable infrastructure moat" (PRI-MERIDIAN-2023-001)'
  - '"Hyperscaler capex commitments are structurally pre-allocated through 2025" (PRI-MERIDIAN-2023-002)'
  - '"Software-stack moats outlast hardware-spec moats" (PRI-MERIDIAN-2023-003)'
review_cadence: quarterly
last_review: 2024-Q4 (no changes)
status_2025_Q3: SECTIONS UNDER ACTIVE RETIREMENT
status_2026_Q1: SUPERSEDED (see 2026-Q1-AI-infrastructure-thesis-revised.md)
---

# Sector Thesis — AI Infrastructure (Q3 2023)

## Frame

This document establishes Meridian's investment frame for AI infrastructure as a sector. It is the parent thesis from which our individual position memos derive. Future IC memos in this sector should explicitly reference and build on (or challenge) the principles laid out here.

## Core argument

We believe we are entering a structural shift in computing larger than mobile and at least equivalent in magnitude to the mainframe-to-distributed transition. The companies that own the compute substrate during structural shifts capture disproportionate value over multi-decade windows. Our investment frame is to hold concentrated positions in the infrastructure layer of this shift for a 24-36 month horizon, with explicit thesis review at each quarter to detect erosion of the structural argument.

## The three structural pillars

### Pillar 1: Compute scarcity is the binding constraint

The leading frontier labs (OpenAI, Anthropic, Google DeepMind, xAI, Meta AI) are gated on training compute, not on research talent or data. Empirically, every meaningful capability gain over the past 18 months has come from scaling compute, not from architectural breakthroughs that scale-substitute. This is the central observation underlying the AI capex cycle.

As long as scaling continues to produce capability gains and the labs continue to be funded against capability targets, compute is the rate-limiting input. Scaling laws (Chinchilla, Hoffmann et al.) suggest the relationship between compute and capability is at least log-linear, which implies the marginal demand for compute increases as the labs target progressively higher capability levels.

**This argument fails if:** algorithmic breakthroughs achieve current frontier capability at >5x less compute. We are explicitly tracking architectures like Mamba, retentive networks, and any post-Transformer alternatives. None show signs of replacing Transformers at scale through Q3 2023.

### Pillar 2: Software-stack moats outlast hardware-spec moats

The naive argument is that AMD, Intel, or hyperscaler in-house chips will catch NVIDIA on raw FLOPs and erode margin. We believe this misreads the actual moat. The moat is CUDA, NVLink, networking (Mellanox), and the developer ecosystem trained on NVIDIA's stack since 2012.

Replacing NVIDIA in a frontier lab's training cluster requires re-architecting the entire workflow:
- Re-implementing performance-critical kernels for the new accelerator
- Re-validating the training recipe end-to-end at scale
- Re-training the engineering team on the new toolchain
- Re-establishing reliability characteristics across thousands of GPUs

We estimate switching cost at 12-18 months of engineering work per cluster. For frontier labs operating on roughly 12-month training cycles, this is a binding constraint that forces continuity through the current cycle and probably the next.

**This argument fails if:** PyTorch / TensorFlow ship first-class non-CUDA backends with comparable performance. We are tracking ROCm and Trainium toolchain maturity quarterly. Through Q3 2023, neither offers production-grade alternatives at frontier scale.

### Pillar 3: Hyperscaler capex commitments are pre-allocated through 2025

Microsoft, Google, Meta, Amazon, and Oracle have publicly disclosed AI infrastructure capex commitments aggregating to ~$120B for 2024 and ~$180B+ for 2025. These commitments are not speculative — they are tied to data center construction timelines and chip allocation conversations that are happening now, in Q3 2023, for delivery in 2024-2025.

NVIDIA has visibility into ~80% of this aggregate demand via direct allocation discussions. The revenue line is contracted, not forecast.

**This argument fails if:** macro shock or AI ROI disappointment forces a 12+ month capex pause. We are tracking hyperscaler quarterly capex guidance and any signs of order pushouts.

## Investment implications

The three pillars together imply concentrated positions in:

1. **NVIDIA (NVDA):** the substrate provider. Direct beneficiary of all three pillars. Initiating 4.0% position (see 2023-Q3-NVDA-initiation.md).
2. **Microsoft (MSFT):** the platform provider via Azure + OpenAI. Capital-light AI exposure via revenue share. Initiating 3.5% position in Q4 2023.
3. **Snowflake (SNOW):** the data platform that AI workloads run analytics against. Indirect beneficiary via data warehouse modernization tailwind. Initiating 2.5% position in Q1 2024.
4. **MongoDB (MDB):** the vector database emerging as new primitive for AI applications. Speculative position, 1.5% in Q1 2024.

Total infrastructure-thesis-derived exposure: ~11.5% of AUM. This is the largest concentrated thesis in the portfolio.

## Explicit risks

We catalog the failure modes:

| Risk | Probability | Impact | Monitor |
|---|---|---|---|
| Algorithmic compute reduction (>5x) | Low (15%) | High | Quarterly review of leading research labs |
| AMD/Intel CUDA-equivalent ships | Medium (30%) | High | ROCm + Trainium toolchain quarterly tracking |
| Hyperscaler in-house chips at scale (>30% of internal compute by 2025) | Medium (40%) | High | Hyperscaler earnings calls + chip announcements |
| Capex pause | Low (15%) | Catastrophic | Quarterly hyperscaler guidance |
| Macro recession driving discretionary AI capex cuts | Medium (35%) | Medium | Standard macro monitoring |

We acknowledge: any TWO of these materializing in the same 12-month window would force a position reduction across the entire thesis basket.

## Review discipline

This thesis will be explicitly reviewed at:
- Each quarter end via a one-page status update appended to this document
- Annually via a full thesis review at Q4 IC
- Immediately if any single risk in the table above moves from low/medium to high

The thesis will be retired (or substantially revised) if:
- Any two of the catalogued risks materialize in concert
- A new structural argument emerges that contradicts one of the three pillars

We commit to making the retirement disciplined and explicit. The replacement thesis (if there is one) will be a separately authored document that explicitly cites this one and notes the principles that no longer hold.

---

## Quarterly status updates

### 2023-Q4 status: HEALTHY
NVIDIA datacenter revenue $14.5B for the quarter, +279% YoY. Hyperscaler 2024 capex guidance came in higher than our entry-thesis estimates. Pillar 1 strengthening. Pillars 2 and 3 unchanged. No risks elevated.

### 2024-Q1 status: HEALTHY
H100 allocation rationing intensifying (multi-quarter waitlists at AWS and Google). Pillar 1 confirmed. Pillar 3 confirmed (hyperscaler 2024 capex now estimated $135B, above $120B baseline). Software stack moat (Pillar 2) holding — ROCm production reliability still 18+ months behind CUDA per Anthropic and OpenAI engineering disclosures.

### 2024-Q2 status: HEALTHY
Anthropic secondary completed at $24B valuation (see 2024-Q2-Anthropic-secondary.md). Indirect AI infrastructure exposure via training compute consumption pattern.

### 2024-Q3 status: HEALTHY
Hyperscaler 2025 capex now estimated at $230B+ (above $180B baseline). NVIDIA datacenter revenue trajectory continues.

### 2024-Q4 status: HEALTHY (with two flags)
Two risks elevated to medium-high:
- **Hyperscaler in-house chips:** AWS Trainium and Google TPU v5p both ramping faster than expected. Microsoft Maia announced.
- **Algorithmic alternatives:** Reiner Pope's thesis on training cost compression (4x/year intelligence-cost decline) cited by multiple frontier lab engineers.
We are NOT yet retiring the thesis. We ARE adding explicit Q1 2025 review checkpoints.

### 2025-Q1 status: WARNING
Internal debate emerging (see 2025-Q3-NVDA-trim-debate.md slack thread). The compute scarcity argument is showing structural weakness — not because demand is falling but because per-unit-of-intelligence cost is dropping faster than total compute demand is rising. This is the exact failure mode flagged in our Pillar 1 risk table.

### 2025-Q2 status: WARNING
Pope's analysis on Dwarkesh Patel formalized the 4x/year intelligence cost decline (see 2025-Q2-pope-podcast-summary.md). Multiple frontier labs publicly conceded training compute is no longer the binding constraint. Pillar 1 is functionally falsified.

### 2025-Q3 status: UNDER REVISION
Trim NVDA position by 25% (4.5% → 3.0% of AUM). Begin formalizing replacement thesis. Compute scarcity sub-pillar formally retired. Pillars 2 and 3 still operational but downgraded in importance.

### 2025-Q4 status: SUPERSEDED IMMINENT
Quarterly letter (2025-Q4-letter.md) formally announces thesis evolution to family principals. Replacement thesis under construction.

### 2026-Q1 status: SUPERSEDED
Replacement thesis published as 2026-Q1-AI-infrastructure-thesis-revised.md. This document is now archive.

---

*Originally filed by David Park and Sarah Chen, 2023-09-08. Last review 2026-Q1. Superseded — preserved for archival lineage.*

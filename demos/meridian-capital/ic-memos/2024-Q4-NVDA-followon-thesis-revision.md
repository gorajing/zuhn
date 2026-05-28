---
type: ic-memo
firm: Meridian Capital Partners
position: NVDA
action: thesis revision (no position change)
size: maintain 4.5% of AUM
ic_date: 2024-12-04
author: David Park (Senior PM)
reviewers: Sarah Chen (CIO), Rachel Wu (Senior PM), Marcus Reed
status: APPROVED
related_positions: [MSFT, MSFT, AVGO]
parent_thesis: 2023-Q3-AI-infrastructure-thesis.md
predictions:
  - id: PRED-2023Q3-001
    claim: NVDA datacenter revenue will exceed $40B annualized by EOY 2024
    confidence: high
    horizon: 15 months
    resolution: CONFIRMED EARLY (Q4 2024 datacenter revenue $54B annualized)
  - id: PRED-2024Q4-012
    claim: NVDA networking revenue will exceed datacenter compute revenue by 2027
    confidence: medium
    horizon: 36 months
    resolution: pending
  - id: PRED-2024Q4-013
    claim: Hyperscaler in-house silicon will reach 25%+ of internal training compute by EOY 2025
    confidence: medium
    horizon: 12 months
    resolution: pending
  - id: PRED-2024Q4-014
    claim: NVDA gross margin will compress 200-400 bps over the next 8 quarters as in-house silicon scales
    confidence: medium
    horizon: 24 months
    resolution: pending
flagged_for_revision:
  - parent_thesis: 2023-Q3-AI-infrastructure-thesis.md, Pillar 1 (compute scarcity)
---

# Investment Committee Memo — NVDA Thesis Revision (No Position Change)

## Recommendation

**MAINTAIN 4.5% NVDA position. NO size change. Revise underlying thesis.**

This memo is unusual in that the position size doesn't change but the thesis does. We are flagging this explicitly because it sets up the disciplined reduction we expect to make in 2025-2026 as the revised thesis plays out.

## Why we are revising the thesis

Two things have happened since our 2023-Q3 initiation memo that materially change our forward-looking model.

### Change 1: Pillar 1 (compute scarcity) is showing structural weakness

The original thesis argued that compute scarcity would persist as long as scaling produces capability gains. The first half of that conditional remains true — frontier labs still get capability gains from scaling. The second half is where the model is breaking.

Specifically: even though absolute compute demand is rising, the **per-unit-of-intelligence cost** is dropping faster than we modeled. Recent data points:

- Anthropic's API pricing for Claude 3.5 dropped 40% from initial Claude 3 release (8 months elapsed)
- OpenAI's GPT-4o reduced inference cost by ~70% from GPT-4 turbo
- DeepSeek's V3 release demonstrated frontier-class capability at roughly 1/10 of GPT-4 training cost
- Open-source models (Llama 3.1, Mistral) reaching 90%+ of frontier capability at orders of magnitude less compute

Reading these together: **compute is still scarce but its commercial value as a moat is compressing.** The per-token economics that backed our infrastructure thesis are weakening.

This doesn't kill the position. NVIDIA still earns the revenue we predicted (PRED-2023Q3-001 confirmed early). But it changes our forward model:

- The revenue curve is flatter than we assumed (the steepest growth was 2023-2024, not 2024-2026)
- The margin curve has new pressure (compression coming as hyperscalers scale in-house silicon)
- The duration of the cycle is shorter than we assumed (we previously modeled 36 months of structural tailwind; we now model 18-24)

### Change 2: Pillar 3 (hyperscaler capex pre-allocation) is starting to show second-order effects

The original thesis correctly predicted that hyperscaler capex commitments would land at $200B+ aggregate for 2025. That's confirmed (PRED-2023Q3-003 will close above target).

What we missed in the original analysis: the capex is being increasingly allocated to **internal silicon** rather than NVIDIA chips. AWS Trainium is at 18% of Bedrock inference workloads as of Q3 2024. Google TPU v5p ramping fast. Microsoft Maia announced with $5B initial commitment. Meta MTIA scaling.

The hyperscaler capex pie is growing, but NVIDIA's share of that pie is starting to compress. We should have flagged this risk at higher probability in the 2023 thesis (we listed it at "medium 40% probability"; the actual trajectory looks like 60%+).

## What we are NOT changing

The Pillar 2 argument (CUDA + networking + system design moat) is HOLDING. NVIDIA's networking revenue is growing 60%+ YoY. The InfiniBand business and Spectrum-X portfolio are now meaningful revenue contributors. The system-design integration (Grace + Hopper + InfiniBand as a unified rack) is genuinely hard to replicate.

Our revised model treats networking and system design as the surviving moat, with raw chip pricing power as the eroding component. This is consistent with NVIDIA's own strategic communications — Jensen Huang's recent commentary emphasizes "platforms" and "data center as a unit" framing, which signals their own awareness of where the durable value is shifting.

## Updated price model

Original (Q3 2023) thesis target: $750-900 over 18 months. We're at $1,124 — significantly above the original upper bound, two quarters ahead of timeline.

Revised forward target:
- 12-month: $1,150-1,300 (modest upside)
- 24-month: $1,000-1,400 (mean-reverting band, depends on in-house silicon ramp speed)
- 36-month: highly bimodal (either $1,800+ if networking story dominates, or $700-900 if in-house silicon erodes margins faster than expected)

Given the bimodality, we think the right discipline is to take partial profits in 2025 (Q1-Q2 likely) rather than holding the full position into the bimodal outcome. We are not making that call today; flagging it for IC discussion in Q1 2025.

## What we are watching to drive the decision

Three leading indicators with explicit thresholds for action:

| Indicator | Current | Trim threshold |
|---|---|---|
| AWS Trainium share of Bedrock inference | 18% | Trim 25% of NVDA position when this crosses 30% |
| Google TPU v5p deployment progress | Ramping per Q3 earnings | Trim if Google publicly attributes >40% of internal AI compute to TPU |
| NVDA gross margin trajectory | 75% (peak) | Trim if margin compresses to <72% in any single quarter |

These thresholds make our decision rule explicit and rules-based rather than narrative. We commit to acting on them when they trigger.

## What still kills this thesis (updated risk table)

| Risk | Original probability | Revised probability | Why changed |
|---|---|---|---|
| Algorithmic compute reduction (>5x) | 15% | 35% | DeepSeek V3 + Mamba-style architectures + recursive models showing real compute reduction |
| AMD/Intel CUDA-equivalent | 30% | 25% | ROCm progress real but not closing fast enough to threaten 2025 |
| Hyperscaler in-house chips at scale | 40% | 60% | Materially worse than original — Trainium and TPU ramping faster than expected |
| Capex pause | 15% | 10% | Macro environment looks more supportive than we feared in 2023 |

Two of three high-impact risks have moved adversely since 2023 thesis. We are now in a position where the thesis is functional but no longer asymmetric. That's the basis for the trim discipline we are setting up.

## Vote

David Park: APPROVE thesis revision, MAINTAIN position
Sarah Chen: APPROVE — "I want this revision documented because we will be referencing it in 2025-2026 when we trim. The lineage matters."
Rachel Wu: APPROVE — "Concur on revised model. The trim threshold table is the right discipline."
Marcus Reed: APPROVE — "We should also start scoping replacement positions now so we're ready to redeploy when we trim."

**Outcome: APPROVED 4-0.**

---

## Followups required

1. Marcus Reed to draft a Q1 2025 thesis update for the parent sector thesis (2023-Q3-AI-infrastructure-thesis.md), noting Pillar 1 weakness explicitly.
2. David Park to scope alternative AI-thematic positions for Q1 2025 IC (vertical AI applications — see Q1 2026 vertical bucket initiation).
3. Priya Shah to track the three leading indicators monthly and flag if any cross threshold.

---

*Filed by David Park, 2024-12-04. Thesis revision approved. Position size unchanged. Trim discipline activated for 2025.*

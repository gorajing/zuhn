---
type: post-mortem
firm: Meridian Capital Partners
position: NVDA
action: mid-position review (not closed)
entry_date: 2023-09-14
entry_price: $445
current_date: 2025-09-30
current_price: $1,180
holding_period: 24 months (still open)
unrealized_return: +165% (peak), +132% currently
size_at_entry: 4.0% of AUM
current_size: 3.0% of AUM (after Q3 2025 trim)
authors: David Park (Senior PM), Marcus Reed (Mid-Level Analyst)
related_predictions:
  - 'PRED-2023Q3-001: "NVDA datacenter revenue will exceed $40B annualized by EOY 2024" — CONFIRMED EARLY (Q4 2024, $54B)'
  - 'PRED-2023Q3-002: "H100 demand will outstrip supply through Q4 2024 with allocation rationing" — CONFIRMED'
  - 'PRED-2023Q3-003: "Hyperscaler capex commitments will reach $200B+ aggregate by EOY 2025" — CONFIRMED EARLY ($230B+)'
  - 'PRED-2023Q3-004: "NVDA''s CUDA software moat will keep gross margins above 70% through 2026" — PARTIALLY CONFIRMED (gross margin 73% Q2 2025, trending below threshold)'
  - 'PRED-2024Q4-013: "Hyperscaler in-house silicon will reach 25%+ of internal training compute by EOY 2025" — TRACKING TO CONFIRM'
  - 'PRED-2024Q4-014: "NVDA gross margin will compress 200-400 bps over next 8 quarters" — TRACKING TO CONFIRM (currently 200 bps compressed)'
retired_principles: []
status: ACTIVE position; thesis revised mid-cycle
---

# Position Mid-Review — NVIDIA (NVDA)

## Why we are writing this now

NVIDIA is our most successful single position in firm history. We are still holding 3.0% of AUM (down from 4.5% peak after Q3 2025 trim). The position is not closed. A traditional post-mortem would wait for closure.

We are filing this mid-position review for three reasons:

1. **The original thesis (2023-Q3-AI-infrastructure-thesis.md) is being formally retired in Q1 2026.** We owe a clear accounting of what worked and what didn't from that thesis BEFORE we close out the position.
2. **The institutional learning is more valuable while the position is still open.** Locking in lessons before we exit means we apply them to the trim/exit discipline.
3. **The lineage matters.** Future analysts joining Meridian will see NVDA as a winning position. Without this document, they will not understand WHY it worked, which conditions made it a winner, and what early signals would have predicted thesis breakdown if we had been more attentive.

## Outcome (interim)

Position attribution to date:
- Entry: $445, 4.0% of AUM, $48M deployed (Q3 2023)
- Peak: $1,160 (Q3 2024)
- Current: $1,180 (Q3 2025), position trimmed to 3.0% of AUM via October 2024 (5.4%→4.5%) and August 2025 (4.5%→3.0%) trims
- Realized gains from trims: ~$28M
- Unrealized gains on remaining position: ~$66M
- Total contribution to firm AUM growth: ~$94M against $48M entry, or ~196% return on capital deployed

## What we predicted at entry — and how each played out

The original IC memo committed to four predictions. Two years later, the resolution picture:

### PRED-2023Q3-001: Datacenter revenue >$40B annualized by EOY 2024 — **CONFIRMED EARLY**

Actual Q4 2024 datacenter revenue: $54B annualized. Confirmed two quarters early at 35% above target.

**What this teaches:** The compute-scarcity argument was correct in the time horizon we held it. Revenue trajectory exceeded our model. This is the strongest single confirmation of Pillar 1 of the parent thesis.

### PRED-2023Q3-002: H100 allocation rationing through Q4 2024 — **CONFIRMED**

Allocation rationing intensified through Q1 2025 (extended one quarter beyond our prediction). Multi-quarter waitlists at all major hyperscalers.

**What this teaches:** The supply-demand model was correct. NVIDIA's capacity to expand H100 production was constrained by TSMC fab availability, exactly as we modeled.

### PRED-2023Q3-003: Hyperscaler capex >$200B by EOY 2025 — **CONFIRMED EARLY**

Aggregate 2025 capex commitments now estimated $230B+, with continued growth in 2026 guidance. Confirmed two quarters early at 15% above target.

**What this teaches:** The hyperscaler commitment depth was real. The capex argument carried as far as we modeled.

### PRED-2023Q3-004: Gross margin >70% through 2026 — **PARTIALLY CONFIRMED**

Margin trajectory:
- Q3 2023 (entry): 71%
- Q3 2024 (peak): 75% 
- Q1 2025: 74%
- Q2 2025: 73%
- Q3 2025: 72.5% (anticipated)

The 70% floor has held but the trajectory is now clearly compressing. Pillar 2 (CUDA + networking moat) is partially eroding. Hyperscaler in-house silicon is the proximate cause.

**What this teaches:** The software moat held longer than we needed but is starting to erode at the predicted timing (2025-2026, exactly as our 2024-Q4 revision flagged). This is a clear example of correctly-modeled risk.

## What we missed in the original 2023 thesis

Even though the position is winning, three things were structurally underweighted in our 2023 model:

### Miss 1: We underestimated hyperscaler in-house silicon ramp speed

Original thesis put this risk at "medium 40% probability" of meaningful scale by 2025. Actual: AWS Trainium reached 18% of Bedrock inference workloads by Q3 2024; Google TPU v5p ramped through 2024-2025 to ~25% of internal training compute; Microsoft Maia announced and deploying.

Probability should have been 60-70%, not 40%. This was a forecasting error.

**Lesson:** When tracking risks to a thesis, our probability assessments tend to anchor to "reasonable doubt" levels (30-50%) rather than "honest base rates from the underlying technology trajectory." We need to discipline ourselves to use base-rate-grounded probabilities.

**Operational change:** New IC memos must include explicit base rates for each risk where comparable historical data exists (e.g., "in prior platform shifts, what fraction of incumbent suppliers retained share when hyperscalers vertically integrated?"). When base rates aren't available, we mark the probability "[no base rate, judgment-only]" rather than fabricating a number.

### Miss 2: We did not model the compute-cost-decline curve

This is the deeper miss. The 2023 thesis treated compute scarcity as a binary (compute is scarce → infrastructure has pricing power). It did not model the per-unit-of-intelligence cost curve, which matters more than absolute compute scarcity.

Reiner Pope's analysis (Q2 2025) made this explicit: model intelligence cost is dropping ~4x per year, while spend is rising ~10x per year. The narrowing gap between those curves is the time window in which infrastructure pricing power persists. We never built this model in 2023.

**Lesson:** Binary structural arguments hide the most important dynamic — the rate at which the structural condition itself changes. Compute scarcity wasn't binary; it was a continuous variable with its own derivative.

**Operational change:** Sector theses must explicitly include the rate-of-change of any structural argument they make. "Compute is scarce" is not enough; "compute is scarce, and that scarcity is shrinking by X% per year because Y" is the right structure.

### Miss 3: We treated CUDA as a permanent moat rather than a time-bounded one

The CUDA software-stack argument (Pillar 2) is HOLDING — through Q3 2025, ROCm and Trainium toolchains haven't caught CUDA at frontier scale. But we treated this as a 5+ year moat. The reality is more like a 3-4 year moat. Hyperscalers are increasingly willing to absorb 20-30% performance penalties on in-house silicon to capture the 60%+ margin that NVIDIA was earning.

The CUDA moat erodes when buyers value cost over performance. That transition is happening earlier than we modeled.

**Lesson:** Software moats are time-bounded, not permanent. The right framing is "how many years of pricing power does this moat buy?" not "is the moat intact?"

**Operational change:** When evaluating software-stack moats, we now estimate moat duration in years explicitly, with leading indicators that would shorten or extend the duration estimate.

## What we want to remember about the trim discipline

We want to encode this into firm practice because it is the most operationally valuable lesson of the position:

**The Q3 2024 sizing trim ($1,160 down to 4.5%) and the Q3 2025 thesis-driven trim ($1,180 down to 3.0%) were both correct decisions in retrospect.**

The Q3 2024 trim was discipline-driven (position size exceeded soft cap). It captured ~$22M in realized gains and reduced concentration risk before the Q1 2025 thesis weakening became visible.

The Q3 2025 trim was thesis-driven (Pope's analysis crossed our threshold for revising forward conviction). It captured another ~$6M and right-sized the position to a level consistent with the revised thesis's reduced asymmetric upside.

Both trims happened ahead of any actual price decline. We trimmed during strength, not weakness. **This is the right pattern.** Our internal incentive in good positions is to hold longer; the discipline of trim thresholds tied to either size or thesis evolution is what counter-balances that incentive.

## Lessons encoded as firm principles

This mid-review is generating three principles to add to the firm corpus:

### Principle: Base-rate-grounded risk probabilities (PRI-MERIDIAN-2025-007)

When estimating probability of risk to a thesis, anchor to base rates from comparable historical situations rather than narrative reasoning. If no base rate exists, mark probability as "judgment-only" rather than fabricating a number.

### Principle: Rate-of-change matters more than the structural argument (PRI-MERIDIAN-2025-008)

Sector theses must include explicit rate-of-change models for any structural argument. "X is true" is insufficient; "X is true and is changing by Y per year because Z" is the right structure.

### Principle: Software moats are time-bounded (PRI-MERIDIAN-2025-009)

Software-stack moats erode when buyers value cost over performance. Estimate moat duration in years with explicit leading indicators that would shorten or extend the estimate. Treat moats as time-bounded, not permanent.

## Predictions retired or superseded by this review

PRED-2023Q3-004 (margin >70% through 2026) is now in PARTIALLY CONFIRMED state. The 70% floor still holds but the spirit of the prediction (durable pricing power) is breaking. Future predictions on infrastructure margin should specify which moat is producing the margin (CUDA, networking, system design) and the expected duration of each.

The parent thesis (2023-Q3-AI-infrastructure-thesis.md) is in active retirement (see 2026-Q1-AI-infrastructure-thesis-revised.md).

## Position-level epitaph (interim)

NVIDIA is the position that built Meridian's 2024 returns. It is the cleanest demonstration of what the firm's discipline produces — explicit thesis, explicit predictions, disciplined trims, formalized retirement when evidence requires.

The position will likely close in 2026-2027. We expect to capture another 20-50% upside before structural margin compression dominates. We will write a closing post-mortem when the position closes.

For now: 196% return on capital deployed, with three firm-level lessons encoded that will improve future positions for the next decade.

---

*Filed by David Park and Marcus Reed, 2025-09-30. Reviewed by Sarah Chen 2025-10-04. Encoded as firm principles 2025-10-15.*

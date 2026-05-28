---
type: ic-memo
firm: Meridian Capital Partners
position: NVDA
action: initiation
size: $48M (4.0% of AUM)
ic_date: 2023-09-14
author: David Park (Senior PM)
reviewers: Sarah Chen (CIO), Rachel Wu (Senior PM)
status: APPROVED
related_positions: []
predictions:
  - id: PRED-2023Q3-001
    claim: NVDA datacenter revenue will exceed $40B annualized by EOY 2024
    confidence: high
    horizon: 15 months
    resolution: pending
  - id: PRED-2023Q3-002
    claim: H100 demand will outstrip supply through at least Q4 2024 with allocation rationing
    confidence: high
    horizon: 15 months
    resolution: pending
  - id: PRED-2023Q3-003
    claim: Hyperscaler capex commitments to AI infrastructure will reach $200B+ aggregate by EOY 2025
    confidence: medium
    horizon: 27 months
    resolution: pending
  - id: PRED-2023Q3-004
    claim: NVDA's CUDA software moat will keep gross margins above 70% through 2026
    confidence: medium
    horizon: 39 months
    resolution: pending
---

# Investment Committee Memo — NVDA Initiation

## Recommendation

**INITIATE 4.0% position ($48M) at $445/share.** Stop loss at $325. Target $750-900 over 18 months.

## Thesis

We are entering a structural shift in computing that's larger than mobile and at least equivalent to the mainframe-to-distributed transition. The companies that own the compute substrate during structural shifts capture disproportionate value. NVIDIA owns the substrate.

Three structural arguments:

**1. Compute scarcity is the binding constraint, not algorithmic invention.**
The leading frontier labs (OpenAI, Anthropic, Google DeepMind) are gated on training compute, not on research talent or data. Every meaningful capability gain over the past 18 months has come from scaling — not from architectural breakthroughs that scale-substitute. As long as scaling continues to produce capability gains, compute is the rate-limiting input.

**2. NVIDIA's moat is the full stack, not just chips.**
The naive view is that AMD or Intel can catch up on raw FLOPs and erode margin. The actual moat is CUDA, NVLink, networking (Mellanox), and the developer ecosystem trained on NVIDIA's stack since 2012. Replacing NVIDIA in a frontier lab's training cluster requires re-architecting the entire workflow — not just swapping accelerators. We estimate switching cost at 12-18 months of engineering work per cluster, which makes the moat durable through this cycle.

**3. Hyperscaler capex commitments are pre-allocated through 2024.**
Microsoft, Google, Meta, Amazon, Oracle have publicly disclosed AI infrastructure capex commitments aggregating to ~$120B for 2024. NVIDIA has visibility into ~80% of that demand via direct allocation conversations. The revenue line is not speculative — it's contracted.

## Position sizing rationale

4.0% of AUM is large for an initiation but justified by:
- Conviction level (high) on a 12-18 month horizon
- Liquidity profile (large-cap, can exit cleanly)
- Asymmetric upside (we model 60-100% upside vs 25% downside to stop)
- Portfolio fit (no existing concentrated AI infrastructure exposure)

We are NOT averaging in. The AI capex cycle is moving fast enough that waiting for a better entry has higher opportunity cost than market-price entry today.

## What kills this thesis

Explicitly enumerated so we can monitor:

1. **Algorithmic breakthrough that reduces compute requirement by >5x.** A new architecture (post-Transformer) that achieves Claude-level capability at 10x less compute would compress the demand curve and impair NVIDIA pricing power.
2. **AMD or Intel custom silicon catches CUDA at the framework level.** If PyTorch / TensorFlow ship first-class non-CUDA backends with comparable performance, the switching cost erodes.
3. **Hyperscaler in-house chips at scale.** Google TPU, AWS Trainium, Microsoft Maia at 30%+ of internal training compute by 2025 would compress NVIDIA's hyperscaler revenue.
4. **Capex pause.** Macro shock or AI ROI disappointment forcing a 12+ month capex freeze.

We expect to revisit this thesis explicitly in Q4 2024 to assess whether any of these conditions are materializing.

## Stop-loss discipline

$325 is not a price prediction. It's a position-sizing discipline. If NVDA hits $325 we have either (a) a thesis-broken event we missed, or (b) a multi-year drawdown we don't want to ride. Either way, we exit and re-evaluate from cash.

## Open questions for IC

- Should we hedge with put protection at $400? Cost is 3-4% annualized. Reduces tail risk but compresses expected return.
- Should we layer in additional 1% over the next 90 days if price holds above $440?
- How does this position interact with our pending OpenAI fund-of-fund commitment? (Discussed separately, but worth noting concentration in the AI capex cycle.)

## Vote

David Park: **APPROVE** (proposer)
Sarah Chen (CIO): APPROVE — "I want explicit Q4 2024 thesis review on the calendar."
Rachel Wu: APPROVE — "Concur on sizing. Open to layering 1% in 60 days if price holds."
Marcus Reed: APPROVE — "Tracking the algorithmic-breakthrough risk closely. Dwarkesh and Karpathy both writing about this."
Priya Shah: ABSTAIN — "Conviction is right but I want more time on the AMD MI300 trajectory."

**Outcome: APPROVED 4-0-1.**

---

*Filed by David Park, 2023-09-14. To be revisited Q4 2024 per IC discipline.*

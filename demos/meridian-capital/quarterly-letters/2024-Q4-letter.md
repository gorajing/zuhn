---
type: quarterly-letter
firm: Meridian Capital Partners
period: 2024 Q4
author: Sarah Chen, CIO
distribution: Family Principals + Senior Investment Team
date: 2025-01-18
length: 1,420 words
performance:
  q4_2024: +9.8%
  ytd_2024: +34.2%
  benchmark: S&P 500 +25.0%, MSCI ACWI +17.4%
positions_initiated: [Anthropic secondary Q2, MDB Q1]
positions_closed: []
positions_trimmed: []
related_principles_evolved:
  - '"AI infrastructure as durable moat" — STRENGTHENED (predictions confirming early)'
  - '"Software-stack moats outlast hardware-spec moats" — confirmed via NVDA networking strength'
related_post_mortems: []
---

# Q4 2024 Letter to Family Principals

Dear principals,

The portfolio returned 9.8% in Q4 and 34.2% for full-year 2024, against the S&P 500 at 25.0% and MSCI ACWI at 17.4%. This is our best full-year result since 2020 and the largest absolute outperformance vs benchmark in the firm's history.

The full-year alpha came almost entirely from the AI infrastructure thesis we established in Q3 2023. NVIDIA contributed +1,180 bps of attribution, Microsoft +320 bps, Snowflake +210 bps. The Anthropic secondary we initiated in Q2 has not yet been marked up — we are valuing at cost pending a formal Q1 2025 round.

I want to use this letter to make three points: what we got right, where we are concerned, and what we are watching closely.

## What we got right

The 2023 thesis predicted three things specifically:

1. **NVIDIA datacenter revenue would exceed $40B annualized by EOY 2024.** Actual: $54B annualized, two quarters early.
2. **H100 demand would outstrip supply through Q4 2024 with allocation rationing.** Actual: confirmed, allocation rationing intensified through Q3 2024.
3. **Hyperscaler aggregate AI capex would reach $200B+ by EOY 2025.** Actual: 2025 commitments now estimated $230B+, also above target.

All three predictions confirmed early or above target. The thesis worked.

The position discipline also worked. NVDA peaked at 5.4% of AUM during Q3 2024 (above our soft cap of 5.0%) — we trimmed back to 4.5% on October 18 at $1,140 to maintain sizing discipline. We did not chase the position higher.

## Where we are concerned

Two risks from the original thesis have moved adversely during 2024 and require explicit acknowledgement.

### Concern 1: Hyperscaler in-house silicon is ramping faster than we modeled

In the original thesis (Q3 2023), we put hyperscaler in-house chips at "medium 40% probability" of reaching meaningful scale by 2025. The actual trajectory looks more like:

- AWS Trainium: 18% of Bedrock inference workloads as of Q3 2024
- Google TPU v5p: ramping rapidly per Q3 earnings disclosures
- Microsoft Maia: announced with $5B initial commitment, deployment starting H1 2025
- Meta MTIA: scaling internally

This is materially worse than we modeled. We should have flagged the probability at 60%+, not 40%.

The implication: NVIDIA's share of hyperscaler capex is starting to compress even as the absolute capex pie grows. We expect NVDA gross margin pressure to begin showing in 2025 quarterly results.

### Concern 2: Per-unit-of-intelligence cost is dropping faster than we modeled

This is the deeper structural concern. Multiple data points in 2024:

- Claude 3.5 inference cost dropped 40% from initial Claude 3 release
- GPT-4o reduced inference cost ~70% from GPT-4 turbo
- DeepSeek V3 demonstrated frontier-class capability at roughly 1/10 of GPT-4 training cost
- Open-source models (Llama 3.1, Mistral) reaching 90%+ of frontier capability at much less compute

Reading these together: compute is still scarce in absolute terms but its **commercial value as a moat is compressing**. The per-token economics that backed our infrastructure thesis are weakening even as total tokens consumed grow.

This doesn't kill the position. NVIDIA still earns the revenue we predicted. But it changes our forward model in three ways:
- The revenue growth curve is flatter going forward (steepest growth was 2023-2024)
- Margin curve has new pressure (in-house silicon coming online)
- Cycle duration is shorter than we modeled (we previously assumed 36 months of structural tailwind, now we model 18-24 from current point)

We have documented this concern in detail in the Q4 2024 NVDA thesis revision IC memo (filed 2024-12-04). The position size is unchanged but we have established explicit trim discipline based on three quantitative thresholds. When any threshold trips, we will trim 25% of the position immediately.

## What we are watching closely

We are watching three things in 2025 with elevated attention:

### Monitor 1: AWS Trainium share of Bedrock inference workloads

Currently 18%. Trim threshold: 30%. This is the single highest-signal indicator that the "NVIDIA captures the hyperscaler capex pie" argument is breaking. If this crosses 30% in any quarter, we trim NVDA by 25%.

### Monitor 2: NVIDIA gross margin trajectory

Currently 75% (peak). Trim threshold: 72% in any single quarter. Margin compression of 300+ bps would indicate that pricing power is starting to erode, which would be the first quantitative confirmation of the per-unit-of-intelligence-cost concern above.

### Monitor 3: Frontier algorithmic alternatives

Specifically: any new architecture (post-Transformer) that achieves Claude 3.5 / GPT-4o capability at >5x less compute and starts being adopted by frontier labs. Mamba, retentive networks, and recursive architectures (HRM, TRM) are all in our watch set. None have crossed the threshold yet but the velocity of research output is increasing.

## What this means for the portfolio in 2025

We are NOT exiting the AI infrastructure thesis prematurely. The thesis worked in 2024 and remains operationally healthy through Q4 2024. We are operating with:

- Disciplined trim thresholds activated (above)
- Quarterly thesis review formalized (next: Q1 2025)
- Active research into Phase 2 positions (vertical AI applications, edge inference, knowledge infrastructure layer)

We expect to:
- Maintain or modestly trim NVDA (4.5% → 4.0% if no thresholds trigger)
- Maintain MSFT
- Begin scoping replacement positions in vertical AI applications during H1 2025
- Hold the Anthropic secondary; evaluate Q3 2025 if a follow-on tender opportunity emerges

The strongest candidate for capital redeployment is what we are calling the "judgment infrastructure layer" — companies operating the layer above the model (compression, lineage, retirement, prediction tracking). This is a thesis we are currently developing, not yet investing against. Q2-Q4 2025 will likely produce the first positions in this space.

## A note on the firm itself

This is the seventh full year Meridian has operated. We have delivered consistent benchmark outperformance every full year since 2020. The discipline that produces this — explicit thesis statements, explicit predictions with horizons, explicit retirement when evidence forces it, leading indicators rather than lagging — has become the firm's identity.

I am increasingly convinced that this discipline is itself a moat. Most family offices and investment teams operate without it. They make implicit theses, hold implicit principles, retire conclusions silently. Our explicit version has cost us roughly 15-20% more research time per position but has saved us materially more in avoided losses (the early TWLO trim discipline alone saved ~$15M against the maximum drawdown).

I am now actively looking for tooling that would make this discipline easier to scale across the team. Junior analysts joining the firm spend their first 6 months learning our research conventions through explicit mentoring; we should be able to compress that. The current state of investment-research tooling is not promising — most of what's available either records research notes (Backstop, Notion) or aggregates portfolio data (Addepar) without operationalizing the thesis-lifecycle discipline. I will share what I find.

The portfolio enters 2025 with conviction in the prior year's positions, an elevated set of monitored risks, and active scoping of the next thesis cycle. We expect 2025 to deliver more modest absolute returns than 2024 but with maintained alpha vs benchmark.

As always, your questions sharpen the firm. Please reach out directly.

Yours,
Sarah Chen
CIO, Meridian Capital Partners

---

*Filed 2025-01-18. Q1 2025 IC will reassess all infrastructure positions explicitly.*

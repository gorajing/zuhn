---
type: quarterly-letter
firm: Meridian Capital Partners
period: 2025 Q4
author: Sarah Chen, CIO
distribution: Family Principals + Senior Investment Team
date: 2026-01-22
length: 1,840 words
performance:
  q4_2025: +6.2%
  ytd_2025: +18.4%
  benchmark: S&P 500 +14.1%, MSCI ACWI +12.8%
positions_initiated: [PLTR follow-on, ARM acquisition, vertical AI bucket]
positions_closed: [TWLO completed Q1, ZM completed Q2]
positions_trimmed: [NVDA -25%, MSFT -10%]
related_principles_evolved:
  - '"AI infrastructure as durable moat" — under active revision'
  - '"Application layer captures value during platform shifts" — strengthened'
related_post_mortems: [TWLO 2025-Q1, ZM 2025-Q2, SNOW 2025-Q4]
---

# Q4 2025 Letter to Family Principals

Dear principals,

This letter formalizes a thesis evolution we have been working through for most of 2025 and which now requires explicit articulation.

## Performance summary

The portfolio returned 6.2% in Q4 and 18.4% for full-year 2025, against the S&P 500 at 14.1% and MSCI ACWI at 12.8%. The full-year alpha came primarily from concentrated AI-infrastructure positions established 2023-2024 (NVDA contributed +840 bps, MSFT +220 bps, SNOW +180 bps). It also came at a cost — three closed positions (TWLO, ZM, partial PLTR) generated -310 bps of drag.

I want to be direct about something: a meaningful portion of the 18.4% came from a thesis we are now beginning to retire. That makes the result less satisfying than the headline number suggests, because the lesson the year delivered is more important than the return.

## What we got right in 2024-2025

The "compute scarcity drives the AI capex cycle" thesis we established in Q3 2023 has played out roughly as predicted through Q3 2025. NVIDIA's datacenter revenue exceeded our $40B annualized prediction (PRED-2023Q3-001) — actual was $54B annualized by EOY 2024, well above target. H100 / H200 allocation rationing held through Q1 2025 (PRED-2023Q3-002 confirmed). Hyperscaler aggregate AI capex commitments crossed $230B for 2025 (PRED-2023Q3-003 confirmed, two quarters early).

The position contributed $94M in unrealized gains across full-year 2025 against ~$48M deployed at entry. Our concentration discipline (4-5% of AUM at peak) was correct in retrospect — though we noted in the original IC memo that we would revisit the thesis in Q4 2024, which we did, and where we should have begun reducing earlier.

## What we got wrong, or are now beginning to recognize as wrong

Three connected misjudgments are emerging, and we are formalizing them in this letter.

### Misjudgment 1: "Compute scarcity = permanent moat" was time-bounded, not structural

The argument we made in 2023 was that compute scarcity would persist as long as scaling produced capability gains, and scaling would produce capability gains for at least the duration of our 2-3 year investment horizon. That second clause is now open to question.

Three signals from 2025:

- **Reiner Pope's analysis on Dwarkesh Patel's podcast (April 2025)** quantified that frontier model intelligence cost is dropping ~4x per year while spending rises ~10x per year. The gap between those two curves is the window in which infrastructure pricing power persists. As models get cheaper to run for any given capability level, the per-unit-of-intelligence revenue compresses regardless of total demand growing.
- **Multiple frontier labs publicly conceded the retrieval ceiling in Q2 2025** — the leading AI memory startup said "scaling context doesn't actually mean scaling intelligence" on stage at AI Agents SF. This is a directional admission that pure-compute scaling is starting to show diminishing returns.
- **Recursive architectures (HRM, TRM)** demonstrated that 7M-parameter models can beat frontier-scale models on specific reasoning tasks via inference-time recursion rather than parameter count. If recursion-as-a-scaling-axis holds, parameter count's dominance as the binding constraint weakens.

None of these individually invalidate the original thesis. Together they form a pattern: the "compute is the durable moat" framing was correct for 2023-2024 and is becoming less correct in 2025-2026. We were right in the time horizon we held the position. We were wrong to assume the structural argument would extend into our next investment cycle without active reevaluation.

### Misjudgment 2: We monitored the wrong leading indicators

This is partially the same lesson we encoded in the TWLO post-mortem (Q1 2025): NDR is a lagging indicator that gives 6-12 months of false comfort while underlying franchise erodes. We applied the lesson to TWLO. We did not initially apply it to NVIDIA.

NVIDIA's revenue and margin trajectory through Q3 2025 looked structurally healthy — but the leading indicator we should have been watching was hyperscaler capex composition. Microsoft and Google began publicly emphasizing in-house silicon (Maia, TPU) as percentage of internal training compute starting in Q2 2025. AWS Trainium reached 18% of Bedrock inference workloads by Q3 2025. These are not yet revenue-impacting for NVIDIA, but they are the leading indicator of the second-order risk we flagged in our 2023 IC memo (Risk 3: Hyperscaler in-house chips at scale).

We trimmed NVDA by 25% in Q4 2025 specifically on this signal. We should have begun trimming in Q2 2025 when the signal first emerged.

### Misjudgment 3: We underweighted application-layer dynamics

Our 2023-2024 thesis was infrastructure-first. We initiated application-layer exposure in Q1 2024 (Anthropic secondary, fund-of-fund commitments) but at smaller sizes — roughly 1.5% of AUM aggregate vs 4-5% in NVIDIA alone.

In retrospect, the application-layer thesis was harder to underwrite (no clear winners yet) but more durable in the long run because the layer above the model captures value as the model layer commoditizes. We are now actively scaling application-layer exposure — see the new position bucket discussion below.

## What we are doing differently

### Formalized thesis retirement

We are formally retiring the principle: **"Compute scarcity creates a durable infrastructure moat."**

This principle was correct in 2023 and we held it for ~24 months profitably. It is no longer correct as a forward-looking guide. The replacement principle, encoded today: **"During AI platform shifts, infrastructure value migrates to systems / networking / vertical applications as compute itself commoditizes."**

This is the third explicit principle retirement of 2025 (after TWLO's two retired principles in Q1). We treat retirement as a disciplined act, not a vague directional shift. The retired principle is preserved in our archive with full lineage to the IC memos and predictions that supported it. Future analysts joining the firm should be able to see why we believed this was true 2023-2024 and why we no longer do.

### New position bucket: Vertical AI Applications

We are establishing a bucket of 4-6 positions in vertical AI applications, sized at 6-8% of AUM aggregate. Specific positions to be announced in Q1 2026 IC. The thesis driving this bucket: judgment infrastructure (compression, lineage, retirement of conclusions, prediction-vs-outcome resolution) is the layer above the model that is currently un-built and where value will accrue.

We are looking specifically at:
- Vertical AI for legal, clinical, financial-services workflows
- Knowledge-management AI for professional-services firms
- Agent infrastructure for enterprise-scale deployments

This is a deliberate counter-position to our 2023-2024 infrastructure thesis. We are not exiting infrastructure entirely (NVDA remains 3.0% of AUM, MSFT remains 2.5%), but the marginal allocation goes up the stack.

### Operational change: leading-indicator monitoring

Effective Q1 2026, every position larger than 2% of AUM will have an explicit leading-indicator monitoring section in the IC memo, separate from the thesis section. The leading indicators must be:

- Quantitative (not narrative)
- Measurable monthly or quarterly (not annually)
- Predictive of thesis breakdown 6+ months ahead of revenue impact
- Explicitly distinct from the lagging indicators that competitors will also be watching

This is the operational lesson from TWLO and now from the NVIDIA experience.

## Looking ahead

I want to be honest about one more thing. We have run this firm for seven years on the discipline of explicit theses, explicit predictions, and explicit retirement when evidence forces it. That discipline has served us well — we have outperformed our benchmarks every full year since 2020.

What 2025 has surfaced is that the discipline is necessary but not sufficient. We can be disciplined and still wrong if our framework for what to believe in the first place lags the structural reality. The AI-native displacement dynamics that broke our TWLO thesis, that are weakening our infrastructure thesis, that we now believe will compress further — these are framework-level changes, not position-level mistakes.

For 2026, our highest-priority research effort is updating our framework for how AI-native displacement shapes existing franchise economics. This is a multi-quarter undertaking. The portfolio actions we are taking in Q1 2026 (vertical AI bucket initiation, continued infrastructure trim) are downstream of this framework work.

We owe the principals visibility into this. The Q1 2026 letter will share the updated framework explicitly.

As always, your questions and challenges sharpen our work. Please reach out directly.

Yours,
Sarah Chen
CIO, Meridian Capital Partners

---

*Filed 2026-01-22. Encoded as firm principle update 2026-01-25. Q1 2026 IC will formalize Vertical AI Applications bucket.*

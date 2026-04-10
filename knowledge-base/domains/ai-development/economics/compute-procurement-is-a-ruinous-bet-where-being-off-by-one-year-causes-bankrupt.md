---
id: INS-260410-BC76
domain: ai-development
topic: economics
title: >-
  Compute procurement is a ruinous bet where being off by one year causes
  bankruptcy
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - compute-procurement
  - capex-risk
  - ai-economics
  - demand-forecasting
sources:
  - type: youtube
    title: Dario Amodei — “We are near the end of the exponential”
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=n1E9IZfvGMA'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frontier labs buy compute 1–2 years before it comes online, so mispredicting
    demand by a single year of the 10x curve makes the company insolvent.
  standard: >-
    Anthropic's revenue has been going 10x per year: zero → $100M → $1B → ~$10B,
    with January 2026 already adding billions more. If Amodei naively
    extrapolated this curve to $1T revenue by end of 2027, he would need to buy
    $1T/year of compute (since useful compute contracts run ~5 years, this is
    $5T). If actual 2027 revenue came in at $800B — not a catastrophic miss —
    'there is no force on earth, no hedge on earth' that could stop bankruptcy.
    Similarly if growth slowed from 10x to 5x. This is why Anthropic buys
    compute sized to 'pretty strong upside worlds' rather than the full 10x
    curve.


    This reframes what 'responsible scaling' means. It is not primarily an
    ethical restraint — it's a statement that any rational operator facing this
    demand-prediction problem has to underweight their own bullish views.
    Amodei's private hunch on AGI timelines (1–3 years, ~50/50) is far more
    aggressive than his compute spending suggests. The capex decisions are
    bounded by survival under forecasting error, not by capability beliefs. He
    contrasts this with 'YOLO' competitors who commit to $100B chunks without
    writing down the spreadsheet.


    The industry-level consequence is that compute grows roughly 3x/year (10-15
    GW in 2026 → 30-40 GW → 100 GW → 300 GW), rather than the 10x/year that
    bullish capability forecasts would justify. The demand-prediction
    bottleneck, not the capability bottleneck, is what actually paces buildout —
    a key asymmetry that matters for anyone modeling AI industry economics,
    energy demand, or competitive dynamics.
stance: >-
  Frontier AI labs cannot rationally buy compute sized to their most bullish AGI
  timelines because a one-year error in demand growth forecasting causes
  unsurvivable losses, which is why responsible scaling looks conservative even
  when internal conviction about capabilities is extremely high.
related:
  - INS-260410-069C
  - INS-260410-C63C
  - INS-260323-8637
  - INS-260404-9DBB
  - INS-260323-F68A
---
Anthropic's revenue has been going 10x per year: zero → $100M → $1B → ~$10B, with January 2026 already adding billions more. If Amodei naively extrapolated this curve to $1T revenue by end of 2027, he would need to buy $1T/year of compute (since useful compute contracts run ~5 years, this is $5T). If actual 2027 revenue came in at $800B — not a catastrophic miss — 'there is no force on earth, no hedge on earth' that could stop bankruptcy. Similarly if growth slowed from 10x to 5x. This is why Anthropic buys compute sized to 'pretty strong upside worlds' rather than the full 10x curve.

This reframes what 'responsible scaling' means. It is not primarily an ethical restraint — it's a statement that any rational operator facing this demand-prediction problem has to underweight their own bullish views. Amodei's private hunch on AGI timelines (1–3 years, ~50/50) is far more aggressive than his compute spending suggests. The capex decisions are bounded by survival under forecasting error, not by capability beliefs. He contrasts this with 'YOLO' competitors who commit to $100B chunks without writing down the spreadsheet.

The industry-level consequence is that compute grows roughly 3x/year (10-15 GW in 2026 → 30-40 GW → 100 GW → 300 GW), rather than the 10x/year that bullish capability forecasts would justify. The demand-prediction bottleneck, not the capability bottleneck, is what actually paces buildout — a key asymmetry that matters for anyone modeling AI industry economics, energy demand, or competitive dynamics.

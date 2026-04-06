---
id: INS-260330-6AA3
domain: psychology
topic: mental-models
title: >-
  Growth factor as a daily diagnostic reveals exponential trajectory before
  absolute numbers do
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - growth-factor
  - exponential-growth
  - leading-indicators
  - mental-models
sources:
  - type: youtube
    title: Exponential growth and epidemics
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=Kas0tIxDvrg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The growth factor (today's new cases divided by yesterday's) directly
    reveals the exponent driving a process, making it a superior early-warning
    metric to absolute counts.
  standard: >-
    In any exponential process N(t) = c * (1+p)^t, the growth factor — the ratio
    of successive deltas — directly measures (1+p). When this ratio hovers
    around 1.15, cases double roughly every 5 days. When it drops below 1.0, the
    process is decaying. This single number compresses all the information about
    trajectory into a dimensionless ratio that humans can actually reason about.


    This mental model transfers beyond epidemics to any growth context: SaaS
    revenue, user acquisition, content virality. Instead of asking 'how many new
    users this week?' ask 'what's the ratio of this week's new users to last
    week's?' A growth factor of 1.05 vs 1.15 looks like a trivial difference but
    produces 12x vs 1000x over a year. The ratio is where the signal lives.
stance: >-
  Tracking the ratio of new cases today to new cases yesterday (the growth
  factor) is a more powerful diagnostic than tracking total counts because it
  exposes the exponent directly.
related:
  - INS-260323-D6C7
  - INS-260327-484F
  - INS-260330-8FE7
  - INS-260330-9935
  - INS-260330-F493
  - PRI-260403-CD44
  - PRI-260403-50EF
  - INS-260330-8817
  - INS-260403-225B
evidence:
  - id: INS-260330-F493
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260323-D6C7
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-484F
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-CB30
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-8817
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-05C7
    type: SUPPORTS
    classified_at: '2026-04-03'
---
In any exponential process N(t) = c * (1+p)^t, the growth factor — the ratio of successive deltas — directly measures (1+p). When this ratio hovers around 1.15, cases double roughly every 5 days. When it drops below 1.0, the process is decaying. This single number compresses all the information about trajectory into a dimensionless ratio that humans can actually reason about.

This mental model transfers beyond epidemics to any growth context: SaaS revenue, user acquisition, content virality. Instead of asking 'how many new users this week?' ask 'what's the ratio of this week's new users to last week's?' A growth factor of 1.05 vs 1.15 looks like a trivial difference but produces 12x vs 1000x over a year. The ratio is where the signal lives.

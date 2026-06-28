---
id: INS-260628-30C0
domain: ai-development
topic: product-strategy
title: >-
  Aggregate eval scores are useless until you cluster outputs and compare KPIs
  across segments
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - conversation-mining
  - clustering
  - segmentation
  - product-roadmap
  - kpi
  - impact-weighting
sources:
  - type: youtube
    title: How to look at your data — Jeff Huber (Chroma) + Jason Liu (567)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jryZvCuA0Uc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Like a marketing KPI of 0.5 that only becomes actionable once you segment
    users by age, an eval score only drives decisions once you cluster
    conversations and compare the metric across clusters.
  standard: >-
    Liu's argument is that an aggregate score ('factuality is 0.6') gives you
    nothing to act on — the same way a marketing KPI of 0.5 is inert until you
    discover that under-35 users convert well and over-35 users don't.
    Segmentation 'draws a line in the sand' that converts a number into a
    decision.


    The data already exists in your conversation logs: frustration, retry
    patterns ('try again, that's not what I meant'), and tool misuse are richer
    than any thumbs-up widget. At low volume (a few hundred conversations) you
    should read them manually. At scale (thousands+), manual review breaks down,
    so you extract structured metadata per conversation (summary, tools used,
    errors, satisfaction, frustration), embed it, cluster it, and build
    hierarchies — exactly what Chroma's open-source 'Kura' library does. This is
    just traditional data analysis applied to LLM outputs.


    The decision framework is a usage-by-performance quadrant:
    high-usage/low-performance clusters are what you must fix;
    low-usage/high-performance may need user education; things nobody uses and
    you're bad at can be cut with a one-line prompt refusal. Crucially, claims
    become impact-weighted — 'build plotting tools' becomes '40% of
    conversations are data-visualization and we handle it well only 10% of the
    time' — which is how you build a data-driven product roadmap where research
    leads products rather than products justifying research.
stance: >-
  A single aggregate eval number like 0.5 is meaningless for decisions; you must
  extract structure from conversation logs, cluster them, and compare KPIs
  across segments to know what to build, fix, or ignore.
related:
  - INS-260329-BE8E
  - INS-260628-A747
  - INS-260322-D6D7
  - INS-260625-8A55
  - INS-260322-5CBF
  - PRI-260323-2E5A
---
Liu's argument is that an aggregate score ('factuality is 0.6') gives you nothing to act on — the same way a marketing KPI of 0.5 is inert until you discover that under-35 users convert well and over-35 users don't. Segmentation 'draws a line in the sand' that converts a number into a decision.

The data already exists in your conversation logs: frustration, retry patterns ('try again, that's not what I meant'), and tool misuse are richer than any thumbs-up widget. At low volume (a few hundred conversations) you should read them manually. At scale (thousands+), manual review breaks down, so you extract structured metadata per conversation (summary, tools used, errors, satisfaction, frustration), embed it, cluster it, and build hierarchies — exactly what Chroma's open-source 'Kura' library does. This is just traditional data analysis applied to LLM outputs.

The decision framework is a usage-by-performance quadrant: high-usage/low-performance clusters are what you must fix; low-usage/high-performance may need user education; things nobody uses and you're bad at can be cut with a one-line prompt refusal. Crucially, claims become impact-weighted — 'build plotting tools' becomes '40% of conversations are data-visualization and we handle it well only 10% of the time' — which is how you build a data-driven product roadmap where research leads products rather than products justifying research.

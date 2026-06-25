---
id: INS-260605-33B4
domain: ai-development
topic: research-methodology
title: >-
  Understand what a metric measures and use several—single automated metrics
  give inconsistent rankings
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - metrics
  - clip-score
  - evaluation
  - benchmarking
  - task-alignment
sources:
  - type: youtube
    title: >-
      20 days of compute vs 7 hours: rethinking what state-of-the-art means —
      Bertrand Charpentier, Pruna
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hqHC6Z_lXyo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CLIP-score rankings of the same models flip across datasets with tiny score
    differences, while a task-aligned metric (text-rendering) gives stable,
    well-separated rankings.
  standard: >-
    Ranking eight image models by CLIP score across three datasets, Charpentier
    finds the order changes every time and the inter-model differences are
    vanishingly small on a 0–1 scale—so the metric can't actually tell you which
    model is best. The problem isn't that automated metrics are useless; it's
    that a generic metric weakly correlated with your goal produces noise.


    When he instead uses a metric aligned to a known use case (text-rendering
    metrics for a text-rendering goal), the ranking becomes consistent across
    runs and the score gaps between models become large and meaningful. The
    takeaway: never stop at 'I ran a benchmark and got a number'—first
    understand precisely what the metric captures, then use multiple metrics
    chosen to match the capability you care about. Statistical significance also
    matters: leaderboards built on a few thousand samples may be far less
    informative than evaluating on your own production traffic if you serve
    millions of requests per day.
stance: >-
  Relying on a single automated metric like CLIP score produces unstable
  rankings, so you must understand each metric and use multiple task-aligned
  ones.
related:
  - INS-260329-8D70
  - INS-260329-5BB0
  - INS-260402-1D32
  - INS-260404-A9D0
  - INS-260330-FF94
  - INS-260605-77E5
  - INS-260410-5951
  - INS-260625-A53F
  - PRI-260413-A957
---
Ranking eight image models by CLIP score across three datasets, Charpentier finds the order changes every time and the inter-model differences are vanishingly small on a 0–1 scale—so the metric can't actually tell you which model is best. The problem isn't that automated metrics are useless; it's that a generic metric weakly correlated with your goal produces noise.

When he instead uses a metric aligned to a known use case (text-rendering metrics for a text-rendering goal), the ranking becomes consistent across runs and the score gaps between models become large and meaningful. The takeaway: never stop at 'I ran a benchmark and got a number'—first understand precisely what the metric captures, then use multiple metrics chosen to match the capability you care about. Statistical significance also matters: leaderboards built on a few thousand samples may be far less informative than evaluating on your own production traffic if you serve millions of requests per day.

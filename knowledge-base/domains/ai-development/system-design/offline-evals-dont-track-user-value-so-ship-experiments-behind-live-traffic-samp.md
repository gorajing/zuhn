---
id: INS-260605-1B9D
domain: ai-development
topic: system-design
title: >-
  Offline evals don't track user value, so ship experiments behind live traffic
  sampling
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - ab-testing
  - production-metrics
  - acceptance-rate
  - ml-ops
sources:
  - type: youtube
    title: >-
      How We Built Zeta2: Training an Edit Prediction Model in Production — Ben
      Kunkle, Zed
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=phchDt63qAA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't trust offline evals to predict user value — gate model experiments
    behind production traffic sampling and watch acceptance rate and latency.
  standard: >-
    Zed runs offline evals on a held-out test set using Levenshtein-style n-gram
    comparison, a reversal ratio (is it undoing what you typed?), and diagnostic
    error counts before vs. after a prediction. But Kunkle is explicit that
    these offline evals don't necessarily correlate with what users actually
    want in their editor. So each model experiment is deployed behind a
    controllable traffic split — ramping a candidate from 15% to 20% of
    production and up to fully live — with a dashboard tracking real acceptance
    rate and latency. The lesson: offline metrics are necessary guardrails but
    insufficient proof of value; the real verdict comes from sampled production
    traffic measuring whether users keep the output.
stance: >-
  Offline metrics fail to capture what users actually accept, so model
  experiments must be validated by sampling real production traffic.
related:
  - INS-260410-F167
  - INS-260605-D430
  - INS-260327-E07C
  - INS-260605-A03E
  - INS-260410-D03C
---
Zed runs offline evals on a held-out test set using Levenshtein-style n-gram comparison, a reversal ratio (is it undoing what you typed?), and diagnostic error counts before vs. after a prediction. But Kunkle is explicit that these offline evals don't necessarily correlate with what users actually want in their editor. So each model experiment is deployed behind a controllable traffic split — ramping a candidate from 15% to 20% of production and up to fully live — with a dashboard tracking real acceptance rate and latency. The lesson: offline metrics are necessary guardrails but insufficient proof of value; the real verdict comes from sampled production traffic measuring whether users keep the output.

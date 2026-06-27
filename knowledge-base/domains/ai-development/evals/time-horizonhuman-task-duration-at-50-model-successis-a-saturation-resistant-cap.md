---
id: INS-260627-D9CE
domain: ai-development
topic: evals
title: >-
  Time horizon—human task duration at 50% model success—is a
  saturation-resistant capability metric
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - benchmarks
  - time-horizon
  - capability-measurement
  - exponential-trend
  - methodology
sources:
  - type: youtube
    title: 'Why Agent Hype can fall short of reality – Joel Becker, METR'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RhfqQKe22ZA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    METR converts task difficulty into the human time-to-complete at which a
    model succeeds 50% of the time, yielding a remarkably straight exponential
    trend (doubling every 6-7 months).
  standard: >-
    Conventional benchmarks (GPQA, SWE-bench) suffer two problems: a 50% score
    is hard to interpret relative to floor and human-expert baselines, and
    benchmarks saturate faster and faster, losing signal. METR's alternative
    gathers human baseline completion times across tasks of varied difficulty,
    measures AI under identical conditions, and reports each model's 'time
    horizon'—the human task length at which the model succeeds 50% of the time
    (Claude 3 Opus ~4 min, o1-preview ~15 min).


    Plotted against calendar time, time horizons trace a strikingly straight
    exponential, doubling roughly every 6-7 months, holding from earlier models
    up through GPT-5.1. The metric's strength is that it 'chains benchmarks
    together' into a single continuous axis, retaining signal even after
    individual benchmarks saturate—though Becker notes time horizon itself may
    eventually saturate as the underlying tasks become exhausted. The
    methodological insight: defining capability against a calibrated human-time
    axis is more durable than tracking percentage scores on any one fixed task
    set.
stance: >-
  Measuring AI capability as the length of human task a model can complete 50%
  of the time produces a more robust, interpretable trend than percentage scores
  on fixed benchmarks.
related:
  - INS-260323-81F5
  - INS-260323-95BC
  - INS-260327-1D37
  - INS-260327-40DA
  - INS-260328-D1B2
  - INS-260328-F1D2
  - INS-260329-E078
  - INS-260329-27A7
  - INS-260330-0A8D
  - INS-260330-F493
---
Conventional benchmarks (GPQA, SWE-bench) suffer two problems: a 50% score is hard to interpret relative to floor and human-expert baselines, and benchmarks saturate faster and faster, losing signal. METR's alternative gathers human baseline completion times across tasks of varied difficulty, measures AI under identical conditions, and reports each model's 'time horizon'—the human task length at which the model succeeds 50% of the time (Claude 3 Opus ~4 min, o1-preview ~15 min).

Plotted against calendar time, time horizons trace a strikingly straight exponential, doubling roughly every 6-7 months, holding from earlier models up through GPT-5.1. The metric's strength is that it 'chains benchmarks together' into a single continuous axis, retaining signal even after individual benchmarks saturate—though Becker notes time horizon itself may eventually saturate as the underlying tasks become exhausted. The methodological insight: defining capability against a calibrated human-time axis is more durable than tracking percentage scores on any one fixed task set.

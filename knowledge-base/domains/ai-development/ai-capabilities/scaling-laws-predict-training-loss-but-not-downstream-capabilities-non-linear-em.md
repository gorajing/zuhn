---
id: INS-260328-8CCC
domain: ai-development
topic: ai-capabilities
title: >-
  Scaling laws predict training loss but not downstream capabilities —
  non-linear emergence breaks extrapolation
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - emergent-capabilities
  - training-loss
  - prediction-limits
sources:
  - type: youtube
    title: 'Demis Hassabis — Scaling, superhuman AIs, AlphaZero atop LLMs, AlphaFold'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=qTogNUV3CAI'
date_extracted: '2026-03-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Training loss scales predictably but actual capabilities emerge
    non-linearly, making capability prediction unreliable.
  standard: >-
    Hassabis reveals a critical gap in scaling law predictions that is
    underappreciated: while core metrics like training loss follow smooth,
    predictable curves (as demonstrated in the GPT-4 technical report predicting
    loss from 10,000x less compute), the actual downstream capabilities those
    losses imply do not follow the same smooth curves. Performance on benchmarks
    like MMLU or mathematical reasoning can show step-function jumps, plateau
    unexpectedly, or fail to materialize despite loss improvements. This means
    you cannot simply extrapolate from smaller models to predict what a 10x
    larger model will be capable of. Hassabis notes this is why you need
    intermediate data points — you can't skip multiple orders of magnitude of
    scale because the capability landscape between checkpoints may be
    non-linear. Each new scale requires adjusting hyperparameters and recipes,
    making scaling more of an empirical art than a predictive science. This has
    practical implications for safety: you cannot reliably predict which
    dangerous capabilities might emerge at what scale.
stance: >-
  Predicting training loss from scaling curves does not reliably predict which
  specific capabilities will emerge or at what scale, because downstream
  capabilities follow non-linear and discontinuous patterns.
related:
  - PRI-260328-A82C
  - INS-260330-2F13
  - INS-260325-4E96
  - PRI-260323-8E89
  - INS-260329-D357
---
Hassabis reveals a critical gap in scaling law predictions that is underappreciated: while core metrics like training loss follow smooth, predictable curves (as demonstrated in the GPT-4 technical report predicting loss from 10,000x less compute), the actual downstream capabilities those losses imply do not follow the same smooth curves. Performance on benchmarks like MMLU or mathematical reasoning can show step-function jumps, plateau unexpectedly, or fail to materialize despite loss improvements. This means you cannot simply extrapolate from smaller models to predict what a 10x larger model will be capable of. Hassabis notes this is why you need intermediate data points — you can't skip multiple orders of magnitude of scale because the capability landscape between checkpoints may be non-linear. Each new scale requires adjusting hyperparameters and recipes, making scaling more of an empirical art than a predictive science. This has practical implications for safety: you cannot reliably predict which dangerous capabilities might emerge at what scale.

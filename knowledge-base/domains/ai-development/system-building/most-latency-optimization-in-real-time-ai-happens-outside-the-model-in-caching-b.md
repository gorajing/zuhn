---
id: INS-260330-C06E
domain: ai-development
topic: system-building
title: >-
  Most latency optimization in real-time AI happens outside the model — in
  caching, batching, and serving infrastructure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - serving-infrastructure
  - inference-optimization
  - real-time-ai
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Real-time AI latency is solved in the serving infrastructure (caching,
    batching), not in the model architecture
  standard: >-
    Roblox's 100ms latency target cannot be hit by model improvements alone.
    Their serving pipeline: (1) Translation cache checks if this exact
    source-to-target translation exists — if so, return immediately with zero
    inference. (2) Dynamic batcher groups multiple requests together because
    GPUs are far more efficient processing batches than individual requests. (3)
    Embedding cache between encoder and decoder eliminates redundant computation
    for one-to-many translations. (4) Trust and safety filtering runs on the
    output. The model is one component in a longer pipeline, and most latency
    wins come from the infrastructure around it. This principle applies to any
    real-time AI system — the model is necessary but not sufficient.
stance: >-
  The serving problem is fundamentally different from the model problem: even a
  distilled model cannot hit 100ms latency without translation caching, dynamic
  request batching, and embedding caching in the serving pipeline
related:
  - INS-260329-818A
  - INS-260329-C1A4
  - INS-260329-C375
  - INS-260330-D483
  - INS-260329-4B07
  - PRI-260403-2024
  - INS-260329-4696
evidence:
  - id: INS-260329-818A
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-33AA
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-4B07
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-4696
    type: EXTENDS
    classified_at: '2026-04-02'
---
Roblox's 100ms latency target cannot be hit by model improvements alone. Their serving pipeline: (1) Translation cache checks if this exact source-to-target translation exists — if so, return immediately with zero inference. (2) Dynamic batcher groups multiple requests together because GPUs are far more efficient processing batches than individual requests. (3) Embedding cache between encoder and decoder eliminates redundant computation for one-to-many translations. (4) Trust and safety filtering runs on the output. The model is one component in a longer pipeline, and most latency wins come from the infrastructure around it. This principle applies to any real-time AI system — the model is necessary but not sufficient.

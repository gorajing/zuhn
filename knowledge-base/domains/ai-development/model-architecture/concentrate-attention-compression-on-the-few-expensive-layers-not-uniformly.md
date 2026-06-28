---
id: INS-260626-1012
domain: ai-development
topic: model-architecture
title: 'Concentrate attention compression on the few expensive layers, not uniformly'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - attention
  - grouped-query-attention
  - kv-cache
  - inference-optimization
  - gemma
sources:
  - type: youtube
    title: 'Gemma 4 Deep Dive — Cassidy Hardin, Researcher, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_A367W_qvc8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma 4 interleaves cheap local (sliding-window) attention with expensive
    global attention at a 5:1 ratio, then applies heavier grouped-query
    compression (8 queries per KV head) only to the costly global layers while
    compensating with longer KV heads.
  standard: >-
    Gemma 4 mixes two attention types: local layers attend only to a sliding
    window (512 or 1024 tokens) and are cheap, while global layers attend to
    every preceding token and dominate memory and inference cost. The model
    interleaves them 5:1 (4:1 in the smallest model) and forces the final layer
    to be global so the model still integrates the full context.


    Because the expense is concentrated in the global layers, the compression is
    asymmetric: local layers group 2 queries per shared key/value head, but
    global layers group 8 queries per KV head. To offset the quality hit from
    such aggressive sharing, the global layers double their KV-head dimension
    (512 vs 256). The principle generalizes beyond transformers: when cost is
    unevenly distributed across components, target your optimization budget at
    the hot path and accept light compensation for any quality loss there,
    rather than spreading the same compression evenly and degrading the cheap
    components for no benefit.
stance: >-
  When inference cost concentrates in a minority of layers, compress those
  layers aggressively and leave the cheap ones lightly touched rather than
  applying uniform compression.
related:
  - INS-260410-3C37
  - INS-260514-2995
  - INS-260625-8792
  - PRI-260407-5465
  - INS-260625-A7C5
  - INS-260628-E857
  - INS-260625-D148
  - INS-260626-66DC
  - INS-260626-43A1
---
Gemma 4 mixes two attention types: local layers attend only to a sliding window (512 or 1024 tokens) and are cheap, while global layers attend to every preceding token and dominate memory and inference cost. The model interleaves them 5:1 (4:1 in the smallest model) and forces the final layer to be global so the model still integrates the full context.

Because the expense is concentrated in the global layers, the compression is asymmetric: local layers group 2 queries per shared key/value head, but global layers group 8 queries per KV head. To offset the quality hit from such aggressive sharing, the global layers double their KV-head dimension (512 vs 256). The principle generalizes beyond transformers: when cost is unevenly distributed across components, target your optimization budget at the hot path and accept light compensation for any quality loss there, rather than spreading the same compression evenly and degrading the cheap components for no benefit.

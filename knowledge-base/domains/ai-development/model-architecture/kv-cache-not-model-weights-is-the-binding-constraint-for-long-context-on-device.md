---
id: INS-260605-4A2D
domain: ai-development
topic: model-architecture
title: >-
  KV cache, not model weights, is the binding constraint for long-context
  on-device
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - kv-cache
  - quantization
  - long-context
  - turbo-quant
  - memory-optimization
sources:
  - type: youtube
    title: 'Why MLX — Prince Canuma, Neywa Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zTLJNHj0DeQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Turbo Quant cuts KV-cache memory ~4x with exact-match output quality,
    enabling up to 1M-token context entirely on-device.
  standard: >-
    Most quantization attention goes to shrinking model weights, but for
    long-context on memory-constrained devices the KV cache is the real ceiling
    — it grows linearly with context length and can consume nearly a gigabyte of
    RAM at scale. Canuma implemented Turbo Quant (publicly, ~30 minutes after
    the paper dropped) to quantize the KV cache, reducing it roughly 4x while
    reporting 'exact match' on response quality versus the full model.


    The payoff is twofold: a 1M-token context becomes feasible on-device
    depending on model size and hardware, and throughput nearly doubles at ~300K
    context because less memory bandwidth is spent moving the cache. The lesson
    generalizes beyond MLX: when optimizing inference for the edge, profile
    where memory actually goes before reaching for weight quantization — for
    long-context workloads the cache is often the cheaper, higher-leverage
    target.
stance: >-
  Compressing the KV cache rather than the weights is what unlocks long-context
  inference on memory-limited consumer hardware.
related:
  - INS-260329-F886
  - INS-260605-2531
  - INS-260325-6150
  - INS-260409-1078
  - INS-260410-3F1A
  - INS-260501-BCCB
---
Most quantization attention goes to shrinking model weights, but for long-context on memory-constrained devices the KV cache is the real ceiling — it grows linearly with context length and can consume nearly a gigabyte of RAM at scale. Canuma implemented Turbo Quant (publicly, ~30 minutes after the paper dropped) to quantize the KV cache, reducing it roughly 4x while reporting 'exact match' on response quality versus the full model.

The payoff is twofold: a 1M-token context becomes feasible on-device depending on model size and hardware, and throughput nearly doubles at ~300K context because less memory bandwidth is spent moving the cache. The lesson generalizes beyond MLX: when optimizing inference for the edge, profile where memory actually goes before reaching for weight quantization — for long-context workloads the cache is often the cheaper, higher-leverage target.

---
id: INS-260326-8201
domain: ai-development
topic: llm-training
title: >-
  KV cache compression at 3.5 bits per channel preserves full model quality
  while enabling 4.5x longer contexts on the same hardware
actionability: immediate
confidence: very_high
shelf_life: time-sensitive
status: active
tags:
  - kv-cache
  - long-context
  - inference
  - memory
  - compression
sources:
  - type: pdf
    title: 2504.19874v1
date_extracted: '2026-03-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    At 3.5 bits per channel (4.5x compression), TurboQuant matches
    full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits
    (6.4x), quality degradation is marginal.
  standard: >-
    The KV cache -- storing key/value embeddings from all previous tokens across
    all layers and attention heads -- is the primary memory bottleneck for
    long-context LLM inference. It scales linearly with context length and model
    size. TurboQuant compresses the KV cache from 16-bit to 3.5-bit per channel
    (4.5x) with no measurable quality loss on LongBench tasks including QA,
    summarization, few-shot, and code completion. On needle-in-a-haystack
    retrieval (4K-104K tokens), TurboQuant at 4x compression scores 0.997 vs
    0.997 for full precision -- identical. At 2.5 bits (6.4x compression),
    quality degradation is marginal. Critically, this requires no fine-tuning or
    retraining -- it's applied at inference time. This means long-context
    capability is primarily a memory engineering problem, not a model
    architecture problem. A 128K-context model with TurboQuant effectively has
    the KV cache footprint of a 28K-context model.
stance: >-
  TurboQuant achieves lossless KV cache compression at ratios that meaningfully
  extend effective context length, making long-context inference a memory
  engineering problem rather than a model architecture problem
related:
  - INS-260325-6150
  - INS-260409-6560
  - INS-260409-1078
  - INS-260323-2651
  - INS-260325-0409
evidence:
  - id: INS-260320-232D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260328-EA3A
    type: CHALLENGES
    classified_at: '2026-04-02'
---
The KV cache -- storing key/value embeddings from all previous tokens across all layers and attention heads -- is the primary memory bottleneck for long-context LLM inference. It scales linearly with context length and model size. TurboQuant compresses the KV cache from 16-bit to 3.5-bit per channel (4.5x) with no measurable quality loss on LongBench tasks including QA, summarization, few-shot, and code completion. On needle-in-a-haystack retrieval (4K-104K tokens), TurboQuant at 4x compression scores 0.997 vs 0.997 for full precision -- identical. At 2.5 bits (6.4x compression), quality degradation is marginal. Critically, this requires no fine-tuning or retraining -- it's applied at inference time. This means long-context capability is primarily a memory engineering problem, not a model architecture problem. A 128K-context model with TurboQuant effectively has the KV cache footprint of a 28K-context model.

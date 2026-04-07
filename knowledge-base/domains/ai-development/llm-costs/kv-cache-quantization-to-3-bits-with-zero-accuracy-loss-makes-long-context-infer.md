---
id: INS-260325-6150
domain: ai-development
topic: llm-costs
title: >-
  KV cache quantization to 3 bits with zero accuracy loss makes long-context
  inference 6-8x cheaper
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - quantization
  - inference
  - kv-cache
  - compression
  - google
sources:
  - type: blog
    title: 'TurboQuant: Redefining AI efficiency with extreme compression'
    url: >-
      https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy
    loss, achieving 6-8x memory reduction and 8x inference speedup.
  standard: >-
    Google Research's TurboQuant algorithm compresses the key-value cache — the
    primary memory bottleneck in long-context LLM inference — from 32-bit to
    3-bit precision without any training, fine-tuning, or accuracy degradation.
    On H100 GPUs, 4-bit TurboQuant achieves 8x speedup in computing attention
    logits compared to unquantized baselines. The algorithm combines PolarQuant
    (random rotation + polar coordinate quantization) with QJL (1-bit error
    correction). This is evidence that inference-layer optimization, not model
    scaling, is the dominant cost reduction vector for deployed AI systems.
    Presented at ICLR 2026 with rigorous theoretical proofs operating near
    theoretical lower bounds.
stance: >-
  TurboQuant achieves 3-bit KV cache quantization without training, fine-tuning,
  or accuracy compromise — reducing inference memory costs by 6-8x while
  achieving 8x speedup on H100 GPUs, proving that inference-layer efficiency
  gains are the primary cost reduction vector, not model size reduction.
related:
  - INS-260325-E62D
  - INS-260329-4842
  - PRI-260406-8B75
  - INS-260326-8201
  - INS-260323-6761
  - INS-260326-AE6C
  - INS-260329-A86F
  - INS-260329-F886
  - INS-260329-C1A4
  - INS-260402-1D32
evidence:
  - id: INS-260329-4842
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-A86F
    type: SUPPORTS
    classified_at: '2026-04-02'
---
Google Research's TurboQuant algorithm compresses the key-value cache — the primary memory bottleneck in long-context LLM inference — from 32-bit to 3-bit precision without any training, fine-tuning, or accuracy degradation. On H100 GPUs, 4-bit TurboQuant achieves 8x speedup in computing attention logits compared to unquantized baselines. The algorithm combines PolarQuant (random rotation + polar coordinate quantization) with QJL (1-bit error correction). This is evidence that inference-layer optimization, not model scaling, is the dominant cost reduction vector for deployed AI systems. Presented at ICLR 2026 with rigorous theoretical proofs operating near theoretical lower bounds.

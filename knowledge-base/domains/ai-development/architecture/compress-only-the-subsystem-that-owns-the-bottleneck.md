---
id: INS-260627-B10A
domain: ai-development
topic: architecture
title: Compress only the subsystem that owns the bottleneck
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - architecture
  - optimization
  - inference
  - tradeoffs
sources:
  - type: blog
    title: >-
      GitHub - huawei-csl/KVarN: KVarN is a native vLLM KV-cache quantization
      backend for your agents: 3-5x more context, throughput above FP16, and
      FP16-level accuracy. Calibration-free, one flag.
    url: 'https://github.com/huawei-csl/KVarN'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    KVarN leaves non-KV recurrent state alone and compresses only full-attention
    KV layers.
  standard: >-
    KVarN's hybrid-model support is a useful systems principle: for models with
    full-attention plus Mamba or linear-attention layers, it compresses the
    layers that actually own KV-cache growth and leaves the other recurrent
    state untouched. That avoids adding complexity to components that do not
    drive the memory bottleneck.


    The tradeoff is that gains become component-specific; a hybrid model will
    not get a uniform global compression ratio. But this is the right trade when
    the alternative is a broad optimization that creates new correctness risks
    in parts of the stack that were not the limiting factor.


    For Zuhn and AgentRun, the analogous pattern is to optimize the exact scarce
    resource. If the problem is source-ingest duplication, fix duplicate-key
    gates; if the problem is AgentRun verification drift, fix gate schemas; if
    the problem is context budget, compress low-value history rather than
    high-value current evidence.
stance: >-
  Hybrid AI systems should compress only the component that creates the
  bottleneck instead of forcing one optimization across every subsystem.
related:
  - INS-260323-334D
  - INS-260327-1631
  - INS-260329-A45D
  - INS-260330-4285
  - INS-260330-CDF8
  - INS-260605-26EC
  - INS-260625-D148
  - INS-260625-A7C5
---
KVarN's hybrid-model support is a useful systems principle: for models with full-attention plus Mamba or linear-attention layers, it compresses the layers that actually own KV-cache growth and leaves the other recurrent state untouched. That avoids adding complexity to components that do not drive the memory bottleneck.

The tradeoff is that gains become component-specific; a hybrid model will not get a uniform global compression ratio. But this is the right trade when the alternative is a broad optimization that creates new correctness risks in parts of the stack that were not the limiting factor.

For Zuhn and AgentRun, the analogous pattern is to optimize the exact scarce resource. If the problem is source-ingest duplication, fix duplicate-key gates; if the problem is AgentRun verification drift, fix gate schemas; if the problem is context budget, compress low-value history rather than high-value current evidence.

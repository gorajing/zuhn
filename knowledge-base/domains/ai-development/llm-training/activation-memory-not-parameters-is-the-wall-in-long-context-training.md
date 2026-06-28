---
id: INS-260625-E500
domain: ai-development
topic: llm-training
title: 'Activation memory, not parameters, is the wall in long-context training'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - long-context
  - memory-optimization
  - transformers
  - training
  - activations
sources:
  - type: youtube
    title: >-
      Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max
      Ryabinin, Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TUnPNY4E2fw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Even after sharding all parameters with FSDP across 8 GPUs, long-context
    training still OOMs because attention activations — not weights — dominate
    memory.
  standard: >-
    The intuitive culprit for out-of-memory failures is model size, but Ryabinin
    shows that for long sequences the parameters are the easy part. Trying to
    fit a 3-million-token sequence with a Llama 3B model OOMs even on parameter
    placement alone, and fully sharded data parallelism (FSDP) — which chunks
    all parameters across the 8 GPUs — dramatically reduces parameter memory yet
    still fails. The reason is that attention activations scale with sequence
    length and quickly dwarf the weights.


    This reframes where optimization effort should go. Once parameters are
    sharded, every subsequent technique in the stack — context parallelism,
    activation checkpointing, CPU offloading, sequence tiling — targets
    activation memory, not weights. For practitioners, the lesson is to measure
    the activation footprint before assuming a bigger model or more parameter
    sharding is the answer; at long context, the activation budget is what
    determines feasibility.
stance: >-
  When extending transformer context length, attention activation memory — not
  model parameters — is the binding constraint on what fits in GPU memory.
related:
  - INS-260327-1631
  - INS-260410-38C9
  - INS-260625-1432
  - INS-260628-EBA5
  - INS-260410-699C
  - INS-260626-7658
  - INS-260625-429B
---
The intuitive culprit for out-of-memory failures is model size, but Ryabinin shows that for long sequences the parameters are the easy part. Trying to fit a 3-million-token sequence with a Llama 3B model OOMs even on parameter placement alone, and fully sharded data parallelism (FSDP) — which chunks all parameters across the 8 GPUs — dramatically reduces parameter memory yet still fails. The reason is that attention activations scale with sequence length and quickly dwarf the weights.

This reframes where optimization effort should go. Once parameters are sharded, every subsequent technique in the stack — context parallelism, activation checkpointing, CPU offloading, sequence tiling — targets activation memory, not weights. For practitioners, the lesson is to measure the activation footprint before assuming a bigger model or more parameter sharding is the answer; at long context, the activation budget is what determines feasibility.

---
id: INS-260605-048B
domain: ai-development
topic: hardware
title: >-
  Text diffusion's latency edge comes from fewer memory transfers, not fewer
  FLOPs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - text-diffusion
  - memory-bandwidth
  - inference-latency
  - tpu-gpu
  - autoregressive
sources:
  - type: youtube
    title: 'Text Diffusion — Brendon Dillon, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=r305-aQTaU0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Diffusion's speedup exists because GPUs/TPUs are memory-bound: generating
    256 tokens in 24 passes means ~10x fewer weight/KV-cache streams than 256
    autoregressive passes.
  standard: >-
    Modern accelerators have abundant FLOPs but scarce memory bandwidth —
    weights, activations, and KV cache must stream from HBM into the tensor core
    for every forward pass, and that channel is the bottleneck. Autoregressive
    decoding streams the entire network once per token (batch size one), so it
    is purely memory-bound. Text diffusion generates a fixed block (e.g. 256
    tokens) over a smaller number of denoising passes (e.g. 24), meaning ~10x
    fewer memory transfers and, if truly memory-bound, ~10x lower latency.


    The practical implication is that diffusion's advantage compounds on long
    generations: the longer the sequence relative to the number of denoising
    steps, the more the per-token cost collapses. Gemini Diffusion sustained
    ~2,000 raw tokens/sec. This reframes the architecture choice — diffusion is
    not 'a different way to compute the same answer faster,' it is a way to
    convert the hardware's flop-to-bandwidth surplus into usable throughput per
    user. Anyone reasoning about LLM serving economics should treat the
    memory-bandwidth ratio, not raw FLOPs, as the governing constraint.
stance: >-
  Text diffusion is faster than autoregressive generation because it amortizes
  the memory-bandwidth bottleneck across a whole token block, not because it
  does less computation.
related:
  - INS-260325-6150
  - INS-260409-1078
  - INS-260501-835A
  - INS-260501-2BE3
  - INS-260605-3899
  - INS-260628-32EF
  - INS-260627-7CBA
  - INS-260625-8792
  - INS-260321-18D0
  - INS-260605-90FB
---
Modern accelerators have abundant FLOPs but scarce memory bandwidth — weights, activations, and KV cache must stream from HBM into the tensor core for every forward pass, and that channel is the bottleneck. Autoregressive decoding streams the entire network once per token (batch size one), so it is purely memory-bound. Text diffusion generates a fixed block (e.g. 256 tokens) over a smaller number of denoising passes (e.g. 24), meaning ~10x fewer memory transfers and, if truly memory-bound, ~10x lower latency.

The practical implication is that diffusion's advantage compounds on long generations: the longer the sequence relative to the number of denoising steps, the more the per-token cost collapses. Gemini Diffusion sustained ~2,000 raw tokens/sec. This reframes the architecture choice — diffusion is not 'a different way to compute the same answer faster,' it is a way to convert the hardware's flop-to-bandwidth surplus into usable throughput per user. Anyone reasoning about LLM serving economics should treat the memory-bandwidth ratio, not raw FLOPs, as the governing constraint.

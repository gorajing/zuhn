---
id: INS-260501-835A
domain: ai-development
topic: architecture
title: >-
  Decode is memory-bandwidth-bound; prefill is compute-bound — they are
  fundamentally different workloads on the same model
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - decode-vs-prefill
  - memory-bandwidth
  - compute-bound
  - transformer-internals
sources:
  - type: youtube
    title: >-
      How GPT-5, Claude, and Gemini are actually trained and served – Reiner
      Pope
    author: Dwarkesh Patel
    url: 'https://youtu.be/xmkSf5IS-zw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Decode amortizes weights across one token; prefill amortizes them across
    many — flipping which bottleneck dominates.
  standard: >-
    Pope's clarifying derivation: in decode, you do one forward pass to produce
    one token, so the per-token cost is dominated by the time to fetch weights
    from memory (memory-bandwidth-bound). In prefill, you process N tokens in
    one forward pass, so the per-token cost of weight-fetch divides by N,
    dropping it below the compute cost — making it compute-bound.


    This is why providers charge ~5x more for decode than prefill: the per-token
    cost of compute time is the same, but decode's per-token memory time is much
    higher. Practical implications for builders: (1) Long context windows are
    cheap to fill (prefill) but expensive to generate from (decode) — a
    context-heavy / output-light pattern is dramatically cheaper than the
    inverse. (2) Tools like Claude Code that emit thousands of output tokens per
    agent step are decode-heavy, hence expensive in inference dollars per task.
    (3) Workloads optimized around 'lots of context, short outputs' (e.g., RAG
    with single-token classifications) are 5x more economical per byte than
    'small context, long outputs' (e.g., creative generation).
stance: >-
  The same forward pass through the same weights has a different bottleneck
  depending on whether you're processing one new token (decode,
  memory-bandwidth-bound) or many tokens in parallel (prefill, compute-bound) —
  and pricing, hardware choice, and architecture should reflect this asymmetry.
related:
  - INS-260329-EF14
  - INS-260329-0B55
  - INS-260321-18D0
  - INS-260405-3B54
  - INS-260320-9FD5
  - INS-260405-A1E6
---
Pope's clarifying derivation: in decode, you do one forward pass to produce one token, so the per-token cost is dominated by the time to fetch weights from memory (memory-bandwidth-bound). In prefill, you process N tokens in one forward pass, so the per-token cost of weight-fetch divides by N, dropping it below the compute cost — making it compute-bound.

This is why providers charge ~5x more for decode than prefill: the per-token cost of compute time is the same, but decode's per-token memory time is much higher. Practical implications for builders: (1) Long context windows are cheap to fill (prefill) but expensive to generate from (decode) — a context-heavy / output-light pattern is dramatically cheaper than the inverse. (2) Tools like Claude Code that emit thousands of output tokens per agent step are decode-heavy, hence expensive in inference dollars per task. (3) Workloads optimized around 'lots of context, short outputs' (e.g., RAG with single-token classifications) are 5x more economical per byte than 'small context, long outputs' (e.g., creative generation).

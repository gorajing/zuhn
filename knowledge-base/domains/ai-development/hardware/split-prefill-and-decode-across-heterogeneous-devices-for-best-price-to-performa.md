---
id: INS-260605-A95C
domain: ai-development
topic: hardware
title: >-
  Split prefill and decode across heterogeneous devices for best
  price-to-performance
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - heterogeneous-hardware
  - prefill
  - decode
  - co-design
  - clustering
sources:
  - type: youtube
    title: 'Run Frontier AI at Home — Alex Cheema, EXO Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ESbWpPT_9-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because prefill is compute-bound and decode is memory-bound, the optimal
    local setup pairs a compute-dense device (e.g. an Nvidia Spark/RTX) running
    prefill with a high-bandwidth device (e.g. a Mac) running decode — mirroring
    data-center co-design.
  standard: >-
    No single consumer device is good at both phases of inference: prefill wants
    compute, decode wants memory bandwidth, and the two requirements pull
    hardware in opposite directions. Cheema's demo splits the work — running
    prefill on an Nvidia Spark (4x the compute) and streaming the KV cache over
    10GbE to a MacBook (2x the memory bandwidth) for decode — yielding roughly
    2x and up to ~4.8x end-to-end speedups on large prompts. The gain only
    materializes for large prompts, where prefill time grows quadratically with
    prompt size; for short prompts the split adds no benefit.


    This is the local-hardware analogue of the 'extreme co-design' already
    happening in data centers (Nvidia + Groq, Cerebras + Trainium), where
    different chips run different parts of inference. The catch today is that
    it's awkward — you stack Macs over Thunderbolt, add Ethernet adapters, and
    fight networking and KV-cache-streaming overhead. It's a time-sensitive
    insight: it's the right move now, but the friction is exactly what EXO and
    others are racing to abstract away, and a single integrated box may
    eventually obsolete the manual split.
stance: >-
  The most cost-effective local inference today comes from running prefill on a
  compute-dense device and decode on a high-bandwidth device, not from any
  single box.
related:
  - INS-260325-E62D
  - INS-260410-CB70
  - INS-260605-86BE
  - PRI-260406-8B75
  - INS-260405-3B54
---
No single consumer device is good at both phases of inference: prefill wants compute, decode wants memory bandwidth, and the two requirements pull hardware in opposite directions. Cheema's demo splits the work — running prefill on an Nvidia Spark (4x the compute) and streaming the KV cache over 10GbE to a MacBook (2x the memory bandwidth) for decode — yielding roughly 2x and up to ~4.8x end-to-end speedups on large prompts. The gain only materializes for large prompts, where prefill time grows quadratically with prompt size; for short prompts the split adds no benefit.

This is the local-hardware analogue of the 'extreme co-design' already happening in data centers (Nvidia + Groq, Cerebras + Trainium), where different chips run different parts of inference. The catch today is that it's awkward — you stack Macs over Thunderbolt, add Ethernet adapters, and fight networking and KV-cache-streaming overhead. It's a time-sensitive insight: it's the right move now, but the friction is exactly what EXO and others are racing to abstract away, and a single integrated box may eventually obsolete the manual split.

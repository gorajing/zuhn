---
id: INS-260605-86BE
domain: ai-development
topic: hardware
title: 'Local LLM inference is memory-bound, not compute-bound'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - inference
  - memory-bandwidth
  - local-ai
  - hardware-selection
  - decode
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
    Training is compute-bound, but single-user local inference is dominated by
    memory bandwidth, memory capacity, and energy-per-byte — so pick hardware on
    those axes, not FLOPS.
  standard: >-
    Cheema separates inference into a prefill phase (compute-bound, loads the
    prompt into KV cache) and a decode phase (memory-bound, generates tokens one
    at a time). For a local single user who cannot batch requests across many
    users, almost all the work is the low-batch-size decode phase, which is
    memory-bound. That makes three things decisive: whether the model fits in
    memory at all (otherwise you page from disk and it's unusably slow), how
    much memory bandwidth you have (which sets token speed), and energy-per-byte
    (which determines whether a device like a phone overheats or drains in an
    hour).


    The practical consequence is that buyers and builders evaluating local
    hardware should stop comparing FLOPS — the metric inherited from the
    training-centric 'hardware lottery' — and instead compare memory capacity,
    memory bandwidth, and energy efficiency. It also explains counterintuitive
    results: a 512GB Mac Studio fits huge models but runs them slowly (≈800
    GB/s, low compute), while a 32GB RTX 5090 (≈1.5 TB/s) can't fit them but
    rips through what does fit. The right answer is usually both.
stance: >-
  What limits local inference speed is memory bandwidth and capacity, not raw
  FLOPS.
related:
  - INS-260323-6761
  - INS-260330-B4F1
  - INS-260403-72C2
  - INS-260410-0142
  - INS-260410-CB70
  - INS-260501-D18A
  - INS-260514-D023
  - INS-260605-D430
  - INS-260605-A95C
  - INS-260410-AC0B
---
Cheema separates inference into a prefill phase (compute-bound, loads the prompt into KV cache) and a decode phase (memory-bound, generates tokens one at a time). For a local single user who cannot batch requests across many users, almost all the work is the low-batch-size decode phase, which is memory-bound. That makes three things decisive: whether the model fits in memory at all (otherwise you page from disk and it's unusably slow), how much memory bandwidth you have (which sets token speed), and energy-per-byte (which determines whether a device like a phone overheats or drains in an hour).

The practical consequence is that buyers and builders evaluating local hardware should stop comparing FLOPS — the metric inherited from the training-centric 'hardware lottery' — and instead compare memory capacity, memory bandwidth, and energy efficiency. It also explains counterintuitive results: a 512GB Mac Studio fits huge models but runs them slowly (≈800 GB/s, low compute), while a 32GB RTX 5090 (≈1.5 TB/s) can't fit them but rips through what does fit. The right answer is usually both.

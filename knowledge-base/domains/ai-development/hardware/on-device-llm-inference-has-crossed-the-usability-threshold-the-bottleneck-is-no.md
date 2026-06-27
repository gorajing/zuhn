---
id: INS-260626-3408
domain: ai-development
topic: hardware
title: >-
  On-device LLM inference has crossed the usability threshold; the bottleneck is
  now download size, not speed
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - on-device-ai
  - edge-inference
  - mlx
  - apple-silicon
  - quantization
sources:
  - type: youtube
    title: "Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX —\_Adrien Grondin, Locally AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a2muGkT4WD4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Recent iPhones run quantized small models like Gemma 4 at ~40 tok/s, moving
    the real constraint from speed to the 1-3 GB model download.
  standard: >-
    The headline number from the talk is that a Gemma 4 model quantized to 4-bit
    runs at roughly 40 tokens/second on a current iPhone, with older iPhones
    still hitting ~20 tok/s — both above the threshold of usefulness for
    streaming chat and text processing. The significance is not the raw speed
    but where it relocates the constraint: when inference was slow, speed was
    the gate; now that small quantized models stream faster than people read,
    the binding limitation is the one-time model download (commonly 1-3 GB).


    This reframes how to think about shipping on-device AI. Instead of asking
    'is the phone fast enough,' the product questions become 'how do I make the
    first-run download tolerable' and 'which quantization keeps the file small
    without wrecking quality.' Grondin notes the trajectory compounds favorably
    — models are getting smaller and smarter while phones get faster — so the
    download barrier is also eroding. For builders, this means on-device should
    now be evaluated as a viable default for many features, not a future bet,
    with UX effort budgeted toward the download/first-run experience rather than
    toward latency optimization.
stance: >-
  On-device LLMs on phones are now fast enough for real use, so the remaining
  barrier is model download size rather than inference speed.
related:
  - INS-260626-E46D
  - INS-260605-738E
  - INS-260605-3899
  - INS-260626-BCC7
  - INS-260625-DD6B
---
The headline number from the talk is that a Gemma 4 model quantized to 4-bit runs at roughly 40 tokens/second on a current iPhone, with older iPhones still hitting ~20 tok/s — both above the threshold of usefulness for streaming chat and text processing. The significance is not the raw speed but where it relocates the constraint: when inference was slow, speed was the gate; now that small quantized models stream faster than people read, the binding limitation is the one-time model download (commonly 1-3 GB).

This reframes how to think about shipping on-device AI. Instead of asking 'is the phone fast enough,' the product questions become 'how do I make the first-run download tolerable' and 'which quantization keeps the file small without wrecking quality.' Grondin notes the trajectory compounds favorably — models are getting smaller and smarter while phones get faster — so the download barrier is also eroding. For builders, this means on-device should now be evaluated as a viable default for many features, not a future bet, with UX effort budgeted toward the download/first-run experience rather than toward latency optimization.

---
id: INS-260605-434D
domain: ai-development
topic: infrastructure
title: >-
  Static KV cache plus CUDA graph capture is what makes autoregressive TTS fast
  enough for voice agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tts
  - inference-optimization
  - kv-cache
  - cuda-graphs
  - latency
sources:
  - type: youtube
    title: >-
      Reachy Mini: the $300 open source robot you can actually hack — Andres
      Marafioti, Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0jeZfjJMfmo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Switching from a dynamic to a static KV cache lets you CUDA-graph-capture an
    autoregressive TTS model, taking real-time factor from 0.8 to ~5x.
  standard: >-
    Coqui 3 TTS shipped with great quality but missed its paper's latency
    claims, so Marafioti spent two weeks making it production-fast. The
    bottleneck: the autoregressive model did ~500 steps per audio packet, and
    each step round-tripped data between CPU and GPU. The fix is to compile the
    model so those interactions stay on the GPU — but compilation was blocked
    because the model used a dynamic KV cache that resized with input length.


    Replacing it with a static KV cache (trading more upfront RAM for
    predictable shape) unblocked CUDA graph capture, which accelerated
    generation dramatically: real-time factor went from 0.8 (1s of audio takes
    1.2s) to ~5x (1s in ~200ms), with time-to-first-audio dropping from seconds
    to milliseconds. The generalizable lesson: dynamic shapes are the silent
    enemy of compilation, and for any autoregressive generation loop, making
    cache shapes static is the precondition for the biggest speedups.
stance: >-
  Open-source autoregressive TTS models can be made real-time only by replacing
  dynamic KV caches with static ones so the whole model can be compiled and
  graph-captured.
related:
  - INS-260410-F167
  - INS-260322-C0D3
  - INS-260627-5F5A
  - INS-260628-26C6
  - INS-260327-33FA
---
Coqui 3 TTS shipped with great quality but missed its paper's latency claims, so Marafioti spent two weeks making it production-fast. The bottleneck: the autoregressive model did ~500 steps per audio packet, and each step round-tripped data between CPU and GPU. The fix is to compile the model so those interactions stay on the GPU — but compilation was blocked because the model used a dynamic KV cache that resized with input length.

Replacing it with a static KV cache (trading more upfront RAM for predictable shape) unblocked CUDA graph capture, which accelerated generation dramatically: real-time factor went from 0.8 (1s of audio takes 1.2s) to ~5x (1s in ~200ms), with time-to-first-audio dropping from seconds to milliseconds. The generalizable lesson: dynamic shapes are the silent enemy of compilation, and for any autoregressive generation loop, making cache shapes static is the precondition for the biggest speedups.

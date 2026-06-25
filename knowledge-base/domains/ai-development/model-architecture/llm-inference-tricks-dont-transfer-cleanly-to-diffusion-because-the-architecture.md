---
id: INS-260625-A02C
domain: ai-development
topic: model-architecture
title: >-
  LLM inference tricks don't transfer cleanly to diffusion because the
  architecture is iterative, not autoregressive
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - diffusion
  - kv-cache
  - quantization
  - autoregressive-vs-diffusion
  - attention
sources:
  - type: youtube
    title: 'You Might Not Need 50 Diffusion Steps — Ziv Ilan, Nvidia'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gHs5ZiY80PM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The diffusion serving ecosystem borrows concepts from mature LLM serving,
    but they must be re-derived: KV cache has no direct analog (no per-token
    generation), and quantization helps less because diffusion is
    attention-heavy.
  standard: >-
    Diffusion model serving is far less mature than the autoregressive LLM/VLM
    stack, so the field deliberately borrows proven LLM optimization concepts
    and re-engineers them. But the architectural mismatch means they rarely port
    directly. KV caching, central to autoregressive serving, has no clean
    diffusion analog because diffusion does not emit one token at a time —
    caching instead exploits the fact that consecutive denoising steps (or
    spatial chunks within a step) change little, so unchanged regions can skip
    recomputation above a tuned threshold (e.g. TeaCache, chunk-based caching).
    Quantization is also less impactful than in LLMs because diffusion models
    are more attention-heavy, though it remains a low-hanging fruit on modern
    hardware and shrinks memory enough to run on lower-end GPUs. The practical
    takeaway: treat LLM optimization knowledge as inspiration, not a drop-in
    recipe, and always re-validate quality, since caching done wrong
    significantly degrades image fidelity.
stance: >-
  LLM-derived optimizations like KV caching and quantization deliver weaker or
  structurally different gains on diffusion models because diffusion denoises
  iteratively and is attention-heavy rather than token-autoregressive.
related:
  - INS-260501-2759
  - INS-260605-015B
  - PRI-260411-56D8
  - INS-260423-EDF7
  - INS-260410-797C
---
Diffusion model serving is far less mature than the autoregressive LLM/VLM stack, so the field deliberately borrows proven LLM optimization concepts and re-engineers them. But the architectural mismatch means they rarely port directly. KV caching, central to autoregressive serving, has no clean diffusion analog because diffusion does not emit one token at a time — caching instead exploits the fact that consecutive denoising steps (or spatial chunks within a step) change little, so unchanged regions can skip recomputation above a tuned threshold (e.g. TeaCache, chunk-based caching). Quantization is also less impactful than in LLMs because diffusion models are more attention-heavy, though it remains a low-hanging fruit on modern hardware and shrinks memory enough to run on lower-end GPUs. The practical takeaway: treat LLM optimization knowledge as inspiration, not a drop-in recipe, and always re-validate quality, since caching done wrong significantly degrades image fidelity.

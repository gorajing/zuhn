---
id: INS-260625-48FA
domain: ai-development
topic: model-architecture
title: >-
  Per-layer embedding lookup tables let small models offload most parameters off
  the GPU
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - on-device
  - gemma
  - inference-efficiency
  - embeddings
  - parameter-offloading
sources:
  - type: youtube
    title: "⚡️ Google's Open AI Strategy —\_Omar Sanseviero, Google DeepMind"
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Hxlayqs-IAs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma's 'effective vs active parameters' split works because per-layer
    embeddings are lookups, not matrix multiplies, so they can live off the GPU.
  standard: >-
    Gemma 4's architecture adds a per-layer embedding table inside each
    transformer block. Crucially, accessing it is a lookup, not a full matrix
    multiplication — so those weights don't need to sit in GPU memory. A model
    labeled E2B effectively loads ~2B parameters onto the GPU while ~3B more
    live in CPU or on disk, yet inference stays fast because the offloaded
    parameters are only ever indexed, never multiplied.


    The key constraint is that this trick is tuned specifically for the small,
    on-device regime (phones, Raspberry Pi, Android). It buys you efficiency
    where memory is the binding constraint and the model is small enough that
    lookup-style parameters carry meaningful weight. As you scale up, the team
    moves toward denser architectures or MOEs instead — the offloading advantage
    doesn't transfer cleanly to large models.


    The broader lesson for system builders: 'parameter count' is no longer a
    single number you can reason about. Effective (resident) parameters, active
    parameters, and total parameters diverge once you mix sparsity and
    offloading, which means capacity planning for on-device inference has to
    model where each parameter physically lives, not just how many there are.
stance: >-
  For small on-device models, replacing matrix-multiply parameters with
  per-layer embedding lookup tables lets you keep most parameters in CPU or disk
  without slowing inference.
related:
  - INS-260626-BB8B
  - INS-260626-4D5F
  - INS-260626-BCC7
  - INS-260627-FC86
  - PRI-260406-FA5B
---
Gemma 4's architecture adds a per-layer embedding table inside each transformer block. Crucially, accessing it is a lookup, not a full matrix multiplication — so those weights don't need to sit in GPU memory. A model labeled E2B effectively loads ~2B parameters onto the GPU while ~3B more live in CPU or on disk, yet inference stays fast because the offloaded parameters are only ever indexed, never multiplied.

The key constraint is that this trick is tuned specifically for the small, on-device regime (phones, Raspberry Pi, Android). It buys you efficiency where memory is the binding constraint and the model is small enough that lookup-style parameters carry meaningful weight. As you scale up, the team moves toward denser architectures or MOEs instead — the offloading advantage doesn't transfer cleanly to large models.

The broader lesson for system builders: 'parameter count' is no longer a single number you can reason about. Effective (resident) parameters, active parameters, and total parameters diverge once you mix sparsity and offloading, which means capacity planning for on-device inference has to model where each parameter physically lives, not just how many there are.

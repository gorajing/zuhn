---
id: INS-260626-BB8B
domain: ai-development
topic: model-architecture
title: >-
  Decouple parameter count from GPU memory by tiering weights across memory
  speeds
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - on-device
  - model-architecture
  - inference-optimization
  - memory-hierarchy
  - gemma
sources:
  - type: youtube
    title: "Gemma, DeepMind's Family of Open Models —\_Omar Sanseviero, Google DeepMind"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_gVFUEdhCyI'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma's per-layer-embedding 'E2B' architecture loads only ~2B of a
    ~4-5B-parameter model into the GPU and pushes the rest to CPU or disk
    because those weights act as lookup tables, not matrix-multiplication
    operands.
  standard: >-
    Gemma E2B ('effectively 2 billion') actually holds ~4 billion parameters,
    but its per-layer-embedding architecture stores most of them as a lookup
    table rather than as weights involved in matrix multiplication. Because a
    table lookup is cheap and does not need fast compute-adjacent memory, those
    parameters can live in CPU RAM or even on disk while only ~2B parameters
    occupy the GPU. In llama.cpp this is a single `--override-tensor` flag that
    relocates the per-layer embeddings to slower memory.


    The non-obvious lesson is that the binding constraint for on-device
    inference is not raw parameter count but *where each parameter has to live
    to be useful*. By separating parameters by their access pattern —
    compute-bound matmul weights versus memory-bound lookups — you can ship a
    model whose nominal size would never fit a phone GPU while its actual hot
    footprint does. This reframes 'small model' from 'few parameters' to 'few
    parameters in the expensive tier.'


    For anyone optimizing local or edge inference, this argues for architectures
    and quantization strategies that explicitly map components to the memory
    hierarchy rather than uniformly shrinking everything. The same tiering logic
    that makes E2B run on a Raspberry Pi generalizes to any latency- or
    memory-constrained deployment.
stance: >-
  On-device model efficiency comes from tiering parameters across memory speeds,
  not from shrinking total parameter count.
related:
  - INS-260410-FEFA
  - INS-260501-94AC
  - INS-260625-48FA
  - INS-260626-BCC7
  - INS-260626-4D5F
  - INS-260409-3230
  - INS-260403-2138
---
Gemma E2B ('effectively 2 billion') actually holds ~4 billion parameters, but its per-layer-embedding architecture stores most of them as a lookup table rather than as weights involved in matrix multiplication. Because a table lookup is cheap and does not need fast compute-adjacent memory, those parameters can live in CPU RAM or even on disk while only ~2B parameters occupy the GPU. In llama.cpp this is a single `--override-tensor` flag that relocates the per-layer embeddings to slower memory.

The non-obvious lesson is that the binding constraint for on-device inference is not raw parameter count but *where each parameter has to live to be useful*. By separating parameters by their access pattern — compute-bound matmul weights versus memory-bound lookups — you can ship a model whose nominal size would never fit a phone GPU while its actual hot footprint does. This reframes 'small model' from 'few parameters' to 'few parameters in the expensive tier.'

For anyone optimizing local or edge inference, this argues for architectures and quantization strategies that explicitly map components to the memory hierarchy rather than uniformly shrinking everything. The same tiering logic that makes E2B run on a Raspberry Pi generalizes to any latency- or memory-constrained deployment.

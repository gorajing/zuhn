---
id: INS-260605-B95C
domain: ai-development
topic: infrastructure
title: >-
  Small-model inference is memory-bound, not compute-bound — hot-swap models on
  one GPU
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - gpu-utilization
  - small-models
  - hot-swapping
  - inference-cost
  - infrastructure
sources:
  - type: youtube
    title: >-
      The Small Model Infrastructure Nobody Built (So We Did) — Filip Makraduli,
      Superlinked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdh_x-uRs9g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Embedding models, rerankers, and NER models each occupy only a few GB, so
    dedicating a GPU to each leaves it mostly idle — hot-swap them on a shared
    GPU with a least-recently-used eviction policy instead.
  standard: >-
    The instinct carried over from LLM serving is 'inference is a compute
    problem — add more GPUs.' For small models this is wrong. A Stella embedding
    model, a reranker, or a GLiNER NER model each takes only a few gigabytes of
    memory, so provisioning a full GPU per model leaves the device idle the vast
    majority of the time. 


    The correct architecture loads many small models onto one GPU and hot-swaps
    between them on demand, governed by a least-recently-used (LRU) eviction
    policy. This raises per-GPU utilization dramatically, lowers cost, and lets
    a workflow switch between tools (one reranker, then another model) quickly. 


    The deeper lesson is that resource profiles don't transfer across model
    scales: optimization strategies tuned for large-model serving (where memory
    is the binding constraint per model and compute dominates cost) can be
    actively counterproductive for fleets of small models, where the binding
    constraint is idle memory across many lightweight models.
stance: >-
  Provisioning one GPU per small model wastes most of the hardware; multiple
  small models should share a single GPU with LRU eviction.
related:
  - INS-260403-1B15
  - INS-260403-7A48
  - INS-260605-295D
  - INS-260605-D37A
  - INS-260605-77E5
---
The instinct carried over from LLM serving is 'inference is a compute problem — add more GPUs.' For small models this is wrong. A Stella embedding model, a reranker, or a GLiNER NER model each takes only a few gigabytes of memory, so provisioning a full GPU per model leaves the device idle the vast majority of the time. 

The correct architecture loads many small models onto one GPU and hot-swaps between them on demand, governed by a least-recently-used (LRU) eviction policy. This raises per-GPU utilization dramatically, lowers cost, and lets a workflow switch between tools (one reranker, then another model) quickly. 

The deeper lesson is that resource profiles don't transfer across model scales: optimization strategies tuned for large-model serving (where memory is the binding constraint per model and compute dominates cost) can be actively counterproductive for fleets of small models, where the binding constraint is idle memory across many lightweight models.

---
id: INS-260410-B501
domain: ai-development
topic: system-building
title: PyTorch view() is a free stride manipulation while cat() allocates new memory
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - pytorch
  - tensors
  - performance
  - memory
sources:
  - type: youtube
    title: 'Building makemore Part 2: MLP'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=TCH_1BHY58I'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    view() just rewrites stride/shape metadata on the same storage; cat()
    allocates — so prefer view whenever possible.
  standard: >-
    PyTorch tensors are a (storage, offset, stride, shape) quadruple over a flat
    1-D memory buffer. Calling .view(32, 6) on a (32, 3, 2) tensor doesn't copy
    any floats — it rewrites the stride and shape metadata so the same bytes are
    reinterpreted as a differently-shaped array. Cost is O(1) regardless of
    tensor size.


    torch.cat, by contrast, must allocate a fresh storage and copy data, because
    concatenation cannot be expressed as a pure reinterpretation of existing
    memory. For the makemore MLP, the naive way to flatten 3 context embeddings
    into a 6-dim input is torch.cat(torch.unbind(emb, 1), 1); the efficient way
    is emb.view(-1, 6). Same output, dramatically different cost on large
    batches.


    Generalized lesson: whenever you reshape tensors, ask whether the operation
    is reachable by stride manipulation alone.
    reshape/view/permute/transpose/squeeze are typically free; cat/stack/repeat
    typically allocate. In hot loops this distinction is the difference between
    memory-bound and compute-bound code. Use -1 in view() so dimensions get
    inferred and code stays agnostic to batch size. This same mental model
    (logical shape vs physical storage) carries over to JAX, NumPy, and most
    tensor libraries.
stance: >-
  Reshaping tensors via view() is essentially free because it only rewrites
  stride metadata, whereas concatenation allocates new storage — prefer view
  whenever the target layout is reachable by reinterpretation.
related:
  - INS-260409-ADD0
  - PRI-260406-8B75
  - INS-260329-F66E
  - INS-260329-818A
  - INS-260329-3423
---
PyTorch tensors are a (storage, offset, stride, shape) quadruple over a flat 1-D memory buffer. Calling .view(32, 6) on a (32, 3, 2) tensor doesn't copy any floats — it rewrites the stride and shape metadata so the same bytes are reinterpreted as a differently-shaped array. Cost is O(1) regardless of tensor size.

torch.cat, by contrast, must allocate a fresh storage and copy data, because concatenation cannot be expressed as a pure reinterpretation of existing memory. For the makemore MLP, the naive way to flatten 3 context embeddings into a 6-dim input is torch.cat(torch.unbind(emb, 1), 1); the efficient way is emb.view(-1, 6). Same output, dramatically different cost on large batches.

Generalized lesson: whenever you reshape tensors, ask whether the operation is reachable by stride manipulation alone. reshape/view/permute/transpose/squeeze are typically free; cat/stack/repeat typically allocate. In hot loops this distinction is the difference between memory-bound and compute-bound code. Use -1 in view() so dimensions get inferred and code stays agnostic to batch size. This same mental model (logical shape vs physical storage) carries over to JAX, NumPy, and most tensor libraries.

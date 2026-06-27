---
id: INS-260627-3F18
domain: ai-development
topic: software-engineering
title: >-
  The biggest optimization wins come from re-expressing the problem, not writing
  lower-level code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - performance-optimization
  - abstraction-level
  - primitives
  - code-rewriting
  - gpu
sources:
  - type: youtube
    title: >-
      AI Kernel Generation: What's working, what's not, what's next – Natalie
      Serrino, Gimlet Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=6guQG_tGt0o'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The largest agent speedups came not from new kernels but from rewriting the
    problem to call faster existing operations.
  standard: >-
    Serrino's most striking results came from optimizing above the kernel level.
    An 80% speedup on a level-one problem came not from a hand-written kernel
    but from recognizing that Metal's average-pool-1D was poorly optimized while
    convolution was highly optimized — so the agent rewrote the
    mathematically-equivalent operation as a convolution. A level-three
    algorithmic win came from fusing two operations at the PyTorch level (plain
    Python, no low-level kernel) to launch fewer ops. Even the biggest naive
    'win' (the 2x attention result) was just adopting an already-optimized
    module.


    The principle generalizes well beyond GPUs: before writing custom low-level
    code, check whether the work can be re-expressed in terms of primitives
    someone has already hand-tuned. The fastest path is frequently a change of
    representation that routes the computation onto an existing fast path, not a
    from-scratch reimplementation. Hand-writing low-level code is the right move
    only where no optimized primitive exists — which is precisely why matrix
    multiply, already exhaustively hand-optimized, resisted the agent's custom
    kernel.


    For engineers and for the agents we build, this argues for a search order:
    first look for an equivalent formulation over fast existing operations, then
    fuse/specialize, and only then drop to bespoke low-level code. It also
    explains why agents that can 'slurp in a ton of context' do well here —
    spotting the equivalent fast primitive is a knowledge-retrieval problem as
    much as a coding one.
stance: >-
  Re-expressing a computation to reuse already-optimized primitives often beats
  hand-writing new low-level code for the same operation.
related:
  - INS-260327-12BE
  - INS-260321-18D0
  - INS-260605-048B
  - INS-260323-F15D
  - INS-260605-A803
  - INS-260410-AB4A
---
Serrino's most striking results came from optimizing above the kernel level. An 80% speedup on a level-one problem came not from a hand-written kernel but from recognizing that Metal's average-pool-1D was poorly optimized while convolution was highly optimized — so the agent rewrote the mathematically-equivalent operation as a convolution. A level-three algorithmic win came from fusing two operations at the PyTorch level (plain Python, no low-level kernel) to launch fewer ops. Even the biggest naive 'win' (the 2x attention result) was just adopting an already-optimized module.

The principle generalizes well beyond GPUs: before writing custom low-level code, check whether the work can be re-expressed in terms of primitives someone has already hand-tuned. The fastest path is frequently a change of representation that routes the computation onto an existing fast path, not a from-scratch reimplementation. Hand-writing low-level code is the right move only where no optimized primitive exists — which is precisely why matrix multiply, already exhaustively hand-optimized, resisted the agent's custom kernel.

For engineers and for the agents we build, this argues for a search order: first look for an equivalent formulation over fast existing operations, then fuse/specialize, and only then drop to bespoke low-level code. It also explains why agents that can 'slurp in a ton of context' do well here — spotting the equivalent fast primitive is a knowledge-retrieval problem as much as a coding one.

---
id: INS-260410-78D3
domain: ai-development
topic: training-dynamics
title: >-
  Analytically derived backward passes are dramatically faster than autograd
  through atomic operations
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - optimization
  - backpropagation
  - performance
  - calculus
  - fused-kernels
sources:
  - type: youtube
    title: 'Building makemore Part 4: Becoming a Backprop Ninja'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=q8SA3rM6ckI'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For composed operations like softmax+cross-entropy, pen-and-paper
    differentiation produces gradient expressions vastly shorter than autograd's
    atomic chain — which is why every serious framework ships fused backward
    kernels for them.
  standard: >-
    When Karpathy backpropagates through cross-entropy atomically, he has to
    chain derivatives through log, gather, softmax normalization,
    exponentiation, and sum — a long sequence of tensor ops each producing
    intermediate gradient tensors. But if you write out the cross-entropy loss
    as a single mathematical expression and differentiate with respect to the
    logits, nearly everything cancels: the gradient reduces to softmax(logits) −
    onehot(y), scaled by 1/N.


    The same collapse happens for batch normalization — atomic backprop through
    mean, variance, normalization, and affine is verbose and slow, while the
    analytically-derived form is a single compact formula. This is why PyTorch's
    cross_entropy and batch_norm ship with fused backward kernels rather than
    relying on autograd composition. The speedup comes from two places: fewer
    intermediate tensors to allocate and fewer math operations overall.


    The general lesson is that autograd gives you correctness for free but not
    efficiency. When a subgraph is called in the hot loop, it's worth deriving
    the gradient manually and writing a custom backward — the math almost always
    simplifies more than you'd expect because adjacent operations share
    structure that autograd can't exploit.
stance: >-
  Hand-deriving the gradient of a composed operation like cross-entropy or batch
  normalization yields expressions orders of magnitude simpler than chaining
  autograd through each atomic step.
related:
  - PRI-260403-6E50
  - INS-260410-3E86
  - INS-260410-85F5
  - INS-260410-9EEF
  - INS-260410-8019
  - INS-260410-C5A4
  - PRI-260406-FA5B
  - INS-260410-B282
---
When Karpathy backpropagates through cross-entropy atomically, he has to chain derivatives through log, gather, softmax normalization, exponentiation, and sum — a long sequence of tensor ops each producing intermediate gradient tensors. But if you write out the cross-entropy loss as a single mathematical expression and differentiate with respect to the logits, nearly everything cancels: the gradient reduces to softmax(logits) − onehot(y), scaled by 1/N.

The same collapse happens for batch normalization — atomic backprop through mean, variance, normalization, and affine is verbose and slow, while the analytically-derived form is a single compact formula. This is why PyTorch's cross_entropy and batch_norm ship with fused backward kernels rather than relying on autograd composition. The speedup comes from two places: fewer intermediate tensors to allocate and fewer math operations overall.

The general lesson is that autograd gives you correctness for free but not efficiency. When a subgraph is called in the hot loop, it's worth deriving the gradient manually and writing a custom backward — the math almost always simplifies more than you'd expect because adjacent operations share structure that autograd can't exploit.

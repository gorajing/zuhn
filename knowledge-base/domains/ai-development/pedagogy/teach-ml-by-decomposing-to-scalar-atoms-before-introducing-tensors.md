---
id: INS-260410-CB46
domain: ai-development
topic: pedagogy
title: Teach ML by decomposing to scalar atoms before introducing tensors
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - teaching
  - first-principles
  - backpropagation
  - karpathy
sources:
  - type: youtube
    title: >-
      The spelled-out intro to neural networks and backpropagation: building
      micrograd
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=VMj-3S1tku0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Strip neural networks to individual scalar operations so the chain rule is
    visible; tensor parallelism is an efficiency add-on that obscures the
    mechanics.
  standard: >-
    Karpathy explicitly wrote micrograd as a scalar-valued autograd engine
    because n-dimensional tensors hide the chain rule behind dense linear
    algebra. At the scalar level, every addition, multiplication, and activation
    reveals its local derivative, and backprop becomes a mechanical recursive
    traversal of an expression graph.


    The claim is that none of the math changes when you move to tensors — you're
    just batching the same scalar operations for parallelism. So the pedagogical
    ordering matters: understand the atoms first, then collapse them into arrays
    for speed. Students who learn tensor calculus first often end up with
    operational fluency but no ground-truth intuition for what gradients
    actually represent.


    This generalizes beyond ML: any system with layered abstractions rewards
    learning the lowest meaningful level before the optimized one. The
    'production version' is almost always the wrong starting point because it
    fuses the concept with the efficiency hack.
stance: >-
  Scalar-first pedagogy builds durable intuition for backprop that tensor-first
  teaching obscures.
related:
  - INS-260410-025A
  - INS-260330-6BBD
  - INS-260410-5EE7
  - PRI-260407-7FB7
  - INS-260330-189F
---
Karpathy explicitly wrote micrograd as a scalar-valued autograd engine because n-dimensional tensors hide the chain rule behind dense linear algebra. At the scalar level, every addition, multiplication, and activation reveals its local derivative, and backprop becomes a mechanical recursive traversal of an expression graph.

The claim is that none of the math changes when you move to tensors — you're just batching the same scalar operations for parallelism. So the pedagogical ordering matters: understand the atoms first, then collapse them into arrays for speed. Students who learn tensor calculus first often end up with operational fluency but no ground-truth intuition for what gradients actually represent.

This generalizes beyond ML: any system with layered abstractions rewards learning the lowest meaningful level before the optimized one. The 'production version' is almost always the wrong starting point because it fuses the concept with the efficiency hack.

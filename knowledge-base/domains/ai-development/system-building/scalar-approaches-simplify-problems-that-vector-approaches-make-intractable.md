---
id: INS-260323-2117
domain: ai-development
topic: system-building
title: Scalar approaches simplify problems that vector approaches make intractable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - problem-solving
  - simplification
  - mathematics
  - abstraction
sources:
  - type: youtube
    title: The Tiny Donut That Proved We Still Don't Understand Magnetism
    author: Veritasium
    url: 'https://youtu.be/XKSjCOKDtpk'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Lagrange's breakthrough was converting the three-body problem from vectors
    (directional, hard to add) to scalars (magnitudes, trivially additive) — a
    problem-solving pattern that recurs across engineering and AI.
  standard: >-
    The three-body problem was unsolvable for hundreds of years because tracking
    three-dimensional force vectors between three bodies created an intractable
    mess of coupled equations. Lagrange's insight was to convert the problem
    from vectors to scalars: instead of tracking force vectors, track potential
    values (just numbers) at each point in space. Adding scalars is trivial —
    you just sum them. Then you can always derive the vectors back from the
    scalar field via the gradient.


    This vector-to-scalar conversion pattern appears throughout engineering:
    converting multi-dimensional optimization problems to scalar loss functions,
    reducing complex state spaces to scalar reward signals in RL, or collapsing
    multi-factor decisions into a single priority score. The Lagrangian approach
    — 'write down the energy (a scalar), plug it into the equation, get the
    right answer without being a good physicist' — is essentially what loss
    functions do for neural networks. The insight is that finding the right
    scalar representation of a problem often matters more than having
    sophisticated tools for working with the full-dimensional representation.
related:
  - INS-260321-53E2
  - PRI-260325-EEE9
  - PRI-260328-8516
  - INS-260323-CF93
  - INS-260325-2F12
  - PRI-260327-8D8C
  - INS-260325-B61B
  - INS-260323-7DAE
  - INS-260323-1302
  - INS-260326-E1A8
stance: >-
  Lagrange's breakthrough was converting the three-body problem from vectors
  (directional, hard to add) to scalars (magnitudes, trivially additive)
---
The three-body problem was unsolvable for hundreds of years because tracking three-dimensional force vectors between three bodies created an intractable mess of coupled equations. Lagrange's insight was to convert the problem from vectors to scalars: instead of tracking force vectors, track potential values (just numbers) at each point in space. Adding scalars is trivial — you just sum them. Then you can always derive the vectors back from the scalar field via the gradient.

This vector-to-scalar conversion pattern appears throughout engineering: converting multi-dimensional optimization problems to scalar loss functions, reducing complex state spaces to scalar reward signals in RL, or collapsing multi-factor decisions into a single priority score. The Lagrangian approach — 'write down the energy (a scalar), plug it into the equation, get the right answer without being a good physicist' — is essentially what loss functions do for neural networks. The insight is that finding the right scalar representation of a problem often matters more than having sophisticated tools for working with the full-dimensional representation.

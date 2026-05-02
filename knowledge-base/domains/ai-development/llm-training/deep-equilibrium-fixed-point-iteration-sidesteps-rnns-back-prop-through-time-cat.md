---
id: INS-260501-EBDD
domain: ai-development
topic: llm-training
title: >-
  Deep equilibrium fixed-point iteration sidesteps RNN's back-prop-through-time
  catastrophe
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - bptt
  - deep-equilibrium
  - rnn-revival
  - fixed-point-iteration
  - training-tricks
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't back-prop through all 16 recursion steps; do them, then back-prop
    through just the last one — fixed-point iteration in latent space.
  standard: >-
    The technical mechanism that makes HRM/TRM work where prior recursive
    architectures (Alex Graves's neural Turing machines, adaptive compute time,
    differential neural computers) hit walls: instead of back-propagating
    gradients through every unrolled recursion step, do the full recursion
    (e.g., 16 steps) without storing gradients, then back-prop through just the
    final step. The hidden states (ZL and Z) carry forward across recursion
    steps but are not reset between batches — so each gradient update is
    effectively training on a different point in the latent state space, like a
    mini-batch constructed from memory rather than from input variation.


    The counterintuitive part Chollet highlights: this works almost as well at
    test time with N=1 recursion as with N=16, suggesting the recursion is
    mostly important during training (to find the right fixed point) rather than
    during inference. For ML practitioners: this revives a whole class of
    architectures that were considered dead (recurrent reasoning models) by
    sidestepping the gradient-flow obstacle. The same trick may unlock other
    architecture revivals — anywhere back-prop-through-time was the binding
    constraint, deep equilibrium plus latent-space mini-batching may be the path
    forward.
stance: >-
  RNNs failed historically because back-propagating gradients through unrolled
  time steps causes vanishing/exploding gradients and impossible memory
  requirements; HRM/TRM revive recursion by truncating gradient flow to one step
  (or a few) using deep-equilibrium-style fixed-point iteration, getting
  recursion's depth without the gradient pathology.
related:
  - INS-260410-C5A4
  - INS-260329-0CC5
  - INS-260403-FF4E
  - INS-260325-1519
  - INS-260403-D4EA
  - INS-260501-FE35
---
The technical mechanism that makes HRM/TRM work where prior recursive architectures (Alex Graves's neural Turing machines, adaptive compute time, differential neural computers) hit walls: instead of back-propagating gradients through every unrolled recursion step, do the full recursion (e.g., 16 steps) without storing gradients, then back-prop through just the final step. The hidden states (ZL and Z) carry forward across recursion steps but are not reset between batches — so each gradient update is effectively training on a different point in the latent state space, like a mini-batch constructed from memory rather than from input variation.

The counterintuitive part Chollet highlights: this works almost as well at test time with N=1 recursion as with N=16, suggesting the recursion is mostly important during training (to find the right fixed point) rather than during inference. For ML practitioners: this revives a whole class of architectures that were considered dead (recurrent reasoning models) by sidestepping the gradient-flow obstacle. The same trick may unlock other architecture revivals — anywhere back-prop-through-time was the binding constraint, deep equilibrium plus latent-space mini-batching may be the path forward.

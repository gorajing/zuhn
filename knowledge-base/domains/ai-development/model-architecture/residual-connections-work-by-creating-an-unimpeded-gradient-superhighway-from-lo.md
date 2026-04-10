---
id: INS-260410-5033
domain: ai-development
topic: model-architecture
title: >-
  Residual connections work by creating an unimpeded gradient superhighway from
  loss to input
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - residual-connections
  - optimization
  - deep-networks
  - backprop
sources:
  - type: youtube
    title: 'Let''s build GPT: from scratch, in code, spelled out.'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Residual connections give gradients a direct additive path from loss to
    input, so deep networks stay trainable even when internal blocks start as
    near-noise.
  standard: >-
    Because addition distributes gradients equally to both branches during
    backprop, a residual pathway of the form y = x + f(x) gives every layer an
    unimpeded gradient flow from the loss all the way back to the input. At
    initialization, residual blocks (f) are weight-initialized to contribute
    near-zero, so the effective network is almost the identity — but gradients
    still flow everywhere. As training proceeds, individual blocks 'come online'
    and start contributing meaningful transformations, without ever breaking the
    gradient path.


    Karpathy shows this concretely: after adding multi-headed attention and
    feedforward blocks, a pre-residual transformer hit an optimization wall
    around 2.24 validation loss. Adding residual connections (and the 4x
    inner-dim feedforward expansion from the original paper) dropped loss to
    2.08 and let the network get big enough to start overfitting. The lesson:
    beyond a handful of layers, depth isn't free — you need an architectural
    mechanism that decouples signal propagation from the transformations being
    learned.
stance: >-
  Skip connections are not just 'identity shortcuts' — they create a direct
  additive path so gradients reach every layer at initialization, letting
  residual blocks come online gradually during training.
related:
  - INS-260330-2154
  - INS-260405-16AB
  - INS-260410-FEFA
  - INS-260410-5F60
  - INS-260330-AE16
  - PRI-260403-9D15
  - PRI-260403-6E50
  - INS-260325-4C6D
  - INS-260410-D3A7
---
Because addition distributes gradients equally to both branches during backprop, a residual pathway of the form y = x + f(x) gives every layer an unimpeded gradient flow from the loss all the way back to the input. At initialization, residual blocks (f) are weight-initialized to contribute near-zero, so the effective network is almost the identity — but gradients still flow everywhere. As training proceeds, individual blocks 'come online' and start contributing meaningful transformations, without ever breaking the gradient path.

Karpathy shows this concretely: after adding multi-headed attention and feedforward blocks, a pre-residual transformer hit an optimization wall around 2.24 validation loss. Adding residual connections (and the 4x inner-dim feedforward expansion from the original paper) dropped loss to 2.08 and let the network get big enough to start overfitting. The lesson: beyond a handful of layers, depth isn't free — you need an architectural mechanism that decouples signal propagation from the transformations being learned.

---
id: INS-260605-3D90
domain: ai-development
topic: model-architecture
title: Architecture choice gates which pretraining techniques you can use
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mae
  - pretraining
  - vision-transformers
  - self-supervised
sources:
  - type: youtube
    title: 'How Transformers Finally Ate Vision – Isaac Robinson, Roboflow'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VhfAVA3BG2I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MAE-style pretraining (drop patches, reconstruct) is impossible on a
    convolutional network, so the architecture that enabled the best pretraining
    won partly by default.
  standard: >-
    Masked autoencoder pretraining works by dropping a subset of image patches
    and asking the model to reconstruct them from context — directly analogous
    to BERT in language. This is intrinsically a VIT-specific technique: a
    convolution is invariant across patches, so there is no clean way to 'drop
    out' a patch the way you can with discrete tokens. This means the
    architecture decision is not separable from the pretraining decision —
    picking a CNN forecloses the very pretraining strategies (MAE, DINO) that
    turned out to be decisive. When evaluating model architectures, the right
    question is not just 'which has better inductive bias or compute profile'
    but 'which unlocks the strongest available self-supervised objectives.'
    Architecture and pretraining method are a joint choice, and the joint
    optimum drove vision's convergence on the VIT.
stance: >-
  Choosing an architecture locks in or out the self-supervised pretraining
  methods available to you.
related:
  - INS-260410-F985
  - INS-260423-6172
  - INS-260605-DD2A
  - INS-260505-A0F7
  - INS-260404-CE26
---
Masked autoencoder pretraining works by dropping a subset of image patches and asking the model to reconstruct them from context — directly analogous to BERT in language. This is intrinsically a VIT-specific technique: a convolution is invariant across patches, so there is no clean way to 'drop out' a patch the way you can with discrete tokens. This means the architecture decision is not separable from the pretraining decision — picking a CNN forecloses the very pretraining strategies (MAE, DINO) that turned out to be decisive. When evaluating model architectures, the right question is not just 'which has better inductive bias or compute profile' but 'which unlocks the strongest available self-supervised objectives.' Architecture and pretraining method are a joint choice, and the joint optimum drove vision's convergence on the VIT.

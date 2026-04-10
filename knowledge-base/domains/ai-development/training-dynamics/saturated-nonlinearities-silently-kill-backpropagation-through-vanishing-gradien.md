---
id: INS-260410-47AE
domain: ai-development
topic: training-dynamics
title: >-
  Saturated nonlinearities silently kill backpropagation through vanishing
  gradients
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - vanishing-gradients
  - activation-functions
  - debugging
  - tanh
  - relu
  - dead-neurons
sources:
  - type: youtube
    title: 'Building makemore Part 3: Activations & Gradients, BatchNorm'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=P6sfmUTpUmc'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Plot histograms of activations and pre-activations during training — if too
    many values cluster at the saturating tails, gradients are being killed and
    entire neurons may be permanently dead.
  standard: >-
    The local gradient of tanh is (1 - t²), which approaches zero whenever the
    output is near ±1. Backprop multiplies by this local gradient, so saturated
    tanh neurons effectively sever the gradient path. Sigmoid behaves
    identically. ReLU has a related pathology: any neuron whose preactivation is
    always negative for every example in the dataset is a 'dead neuron' that
    will never receive a gradient and never learn — a form of permanent brain
    damage that can be triggered at initialization or by a single
    high-learning-rate update.


    The diagnostic Karpathy advocates is simple: visualize a Boolean tensor of
    |activations| > 0.99 across all neurons and all examples in a batch. White
    columns mean dead neurons. Most-white rows mean a saturated layer where
    backprop is barely flowing. This kind of inspection catches problems that
    loss curves won't, because a shallow network can sometimes still converge
    despite massive gradient destruction — it just converges to a worse minimum.


    The fix is to control the scale of preactivations entering the nonlinearity.
    Multiply the weights of the previous layer by a small factor (or use
    principled Kaiming-style scaling) so preactivations sit in the active linear
    region of the nonlinearity rather than the flat tails. This is the entire
    motivation for both careful initialization and normalization layers.
stance: >-
  Activation functions with flat regions (tanh, sigmoid, ReLU) destroy gradient
  signal whenever their inputs land in the saturated zone, and this failure mode
  is invisible from loss curves alone — you must inspect activation histograms
  to detect it.
related:
  - INS-260410-5F60
  - INS-260330-2154
  - PRI-260407-7FB7
  - INS-260403-141E
  - INS-260326-0AB4
---
The local gradient of tanh is (1 - t²), which approaches zero whenever the output is near ±1. Backprop multiplies by this local gradient, so saturated tanh neurons effectively sever the gradient path. Sigmoid behaves identically. ReLU has a related pathology: any neuron whose preactivation is always negative for every example in the dataset is a 'dead neuron' that will never receive a gradient and never learn — a form of permanent brain damage that can be triggered at initialization or by a single high-learning-rate update.

The diagnostic Karpathy advocates is simple: visualize a Boolean tensor of |activations| > 0.99 across all neurons and all examples in a batch. White columns mean dead neurons. Most-white rows mean a saturated layer where backprop is barely flowing. This kind of inspection catches problems that loss curves won't, because a shallow network can sometimes still converge despite massive gradient destruction — it just converges to a worse minimum.

The fix is to control the scale of preactivations entering the nonlinearity. Multiply the weights of the previous layer by a small factor (or use principled Kaiming-style scaling) so preactivations sit in the active linear region of the nonlinearity rather than the flat tails. This is the entire motivation for both careful initialization and normalization layers.

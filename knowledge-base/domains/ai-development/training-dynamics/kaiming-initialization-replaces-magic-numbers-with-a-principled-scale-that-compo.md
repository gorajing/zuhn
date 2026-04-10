---
id: INS-260410-885B
domain: ai-development
topic: training-dynamics
title: >-
  Kaiming initialization replaces magic numbers with a principled scale that
  compounds across depth
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - kaiming-init
  - initialization
  - fan-in
  - variance-preservation
  - deep-networks
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
    Initialize each layer's weights from a Gaussian with std =
    gain/sqrt(fan_in), using gain=1 for linear, 5/3 for tanh, sqrt(2) for ReLU —
    this is the only scaling that prevents activations from exploding or
    vanishing as depth grows.
  standard: >-
    If you multiply a unit-Gaussian input by a weight matrix whose elements are
    themselves unit-Gaussian, the output's standard deviation expands by a
    factor of sqrt(fan_in). Stacked across many layers, this either explodes
    activations to infinity or collapses them to zero. Dividing weights by
    sqrt(fan_in) cancels this expansion and preserves the distribution.


    Nonlinearities then introduce a contractive effect — tanh squeezes its
    outputs into [-1,1], ReLU zeros out half the distribution. To compensate,
    Kaiming initialization adds a 'gain' factor: 1 for linear, 5/3 for tanh,
    sqrt(2) for ReLU (the sqrt(2) comes from ReLU discarding half the input).
    PyTorch implements this in torch.nn.init.kaiming_normal_ and uses
    uniform-distribution variants by default in nn.Linear.


    Karpathy notes that in 2022, this kind of careful initialization matters
    less than it did in 2015 because residual connections, normalization layers,
    and Adam-style optimizers have made networks far more forgiving. But the
    underlying intuition — that you want roughly Gaussian activations throughout
    the network so neither activations nor gradients shrink or explode — is
    still the foundation that everything else builds on. Every modern training
    stabilization technique is ultimately a different way of solving this same
    problem.
stance: >-
  Weights should be initialized with standard deviation gain/sqrt(fan_in), where
  gain depends on the downstream nonlinearity, because this is the only scaling
  that preserves activation variance through arbitrary depth.
related:
  - INS-260410-85F5
  - INS-260410-6FA3
  - PRI-260405-FB37
  - INS-260410-BB93
  - INS-260405-7305
  - INS-260330-30F0
---
If you multiply a unit-Gaussian input by a weight matrix whose elements are themselves unit-Gaussian, the output's standard deviation expands by a factor of sqrt(fan_in). Stacked across many layers, this either explodes activations to infinity or collapses them to zero. Dividing weights by sqrt(fan_in) cancels this expansion and preserves the distribution.

Nonlinearities then introduce a contractive effect — tanh squeezes its outputs into [-1,1], ReLU zeros out half the distribution. To compensate, Kaiming initialization adds a 'gain' factor: 1 for linear, 5/3 for tanh, sqrt(2) for ReLU (the sqrt(2) comes from ReLU discarding half the input). PyTorch implements this in torch.nn.init.kaiming_normal_ and uses uniform-distribution variants by default in nn.Linear.

Karpathy notes that in 2022, this kind of careful initialization matters less than it did in 2015 because residual connections, normalization layers, and Adam-style optimizers have made networks far more forgiving. But the underlying intuition — that you want roughly Gaussian activations throughout the network so neither activations nor gradients shrink or explode — is still the foundation that everything else builds on. Every modern training stabilization technique is ultimately a different way of solving this same problem.

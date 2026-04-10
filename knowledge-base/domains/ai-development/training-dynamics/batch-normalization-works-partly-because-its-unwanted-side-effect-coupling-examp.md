---
id: INS-260410-41DD
domain: ai-development
topic: training-dynamics
title: >-
  Batch normalization works partly because its unwanted side effect — coupling
  examples in a batch — is a free regularizer
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - batch-normalization
  - regularization
  - side-effects
  - deep-learning-history
  - training-tricks
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
    BatchNorm couples examples in a batch through the shared mean/std
    statistics, and this coupling — though widely considered ugly — produces a
    regularization side effect that has made it surprisingly hard to replace
    with cleaner alternatives like LayerNorm.
  standard: >-
    BatchNorm normalizes activations to be unit Gaussian by computing mean and
    variance across the batch dimension, then applies a learned scale and shift.
    The clean part is that this stabilizes activation statistics throughout deep
    networks, eliminating the need to hand-tune initialization scales for every
    layer. You can sprinkle BatchNorm after any linear or convolutional layer
    and it just works.


    The ugly part is what Karpathy calls 'something terribly strange and
    unnatural': a single example's hidden states now depend on which other
    examples happened to be sampled into the same batch. This makes the forward
    pass nondeterministic from a single-example perspective, requires a separate
    inference path using running statistics, and creates an entire class of bugs
    around train/eval mode switching. Karpathy: 'I've shot myself in the foot
    with this layer over and over again in my life.'


    But the coupling produces an unintended benefit: the per-example output
    jitters slightly depending on batchmates, which functions as a form of data
    augmentation and makes the network harder to overfit. This regularization
    effect is one of the main reasons LayerNorm, GroupNorm, and InstanceNorm —
    which avoid the coupling — have not fully replaced BatchNorm despite being
    architecturally cleaner. It is a textbook case where a 'bug' became
    load-bearing.


    A practical corollary: when BatchNorm follows a linear or convolutional
    layer, the bias on that prior layer is useless because BN subtracts the mean
    — the bias gets cancelled and its gradient is zero. This is why PyTorch's
    stock ResNet sets bias=False on conv layers followed by BatchNorm.
stance: >-
  BatchNorm's mathematical coupling of examples within a batch was viewed as a
  bug by everyone including its creators, but the resulting jitter acts as data
  augmentation and is a major reason it has resisted replacement despite causing
  many real bugs in practice.
related:
  - PRI-260406-A33C
  - INS-260329-5F96
  - INS-260329-2865
  - INS-260330-206C
  - INS-260402-3FD8
---
BatchNorm normalizes activations to be unit Gaussian by computing mean and variance across the batch dimension, then applies a learned scale and shift. The clean part is that this stabilizes activation statistics throughout deep networks, eliminating the need to hand-tune initialization scales for every layer. You can sprinkle BatchNorm after any linear or convolutional layer and it just works.

The ugly part is what Karpathy calls 'something terribly strange and unnatural': a single example's hidden states now depend on which other examples happened to be sampled into the same batch. This makes the forward pass nondeterministic from a single-example perspective, requires a separate inference path using running statistics, and creates an entire class of bugs around train/eval mode switching. Karpathy: 'I've shot myself in the foot with this layer over and over again in my life.'

But the coupling produces an unintended benefit: the per-example output jitters slightly depending on batchmates, which functions as a form of data augmentation and makes the network harder to overfit. This regularization effect is one of the main reasons LayerNorm, GroupNorm, and InstanceNorm — which avoid the coupling — have not fully replaced BatchNorm despite being architecturally cleaner. It is a textbook case where a 'bug' became load-bearing.

A practical corollary: when BatchNorm follows a linear or convolutional layer, the bias on that prior layer is useless because BN subtracts the mean — the bias gets cancelled and its gradient is zero. This is why PyTorch's stock ResNet sets bias=False on conv layers followed by BatchNorm.

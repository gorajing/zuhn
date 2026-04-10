---
id: INS-260410-DA81
domain: ai-development
topic: mental-models
title: Cross-entropy gradient is a push-pull force proportional to prediction error
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - cross-entropy
  - intuition
  - gradients
  - mental-models
  - loss-functions
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
    Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient
    row sums to zero — every incorrect class is pushed down by exactly the
    amount the correct class is pushed up, with force scaling as the
    prediction's confidence in wrong answers.
  standard: >-
    Karpathy offers a beautifully physical reading of the cross-entropy backward
    pass. The gradient on the logits is just the softmax probabilities with a
    minus one at the correct index — so each row sums to zero. This means for
    every example, the total 'force' applied is conserved: probability mass is
    transferred from incorrect classes to the correct class, never created or
    destroyed.


    The magnitude of the force is exactly proportional to how wrong the model
    currently is. If the model is perfectly correct (probability 1 on the right
    answer), the gradient row is all zeros — no push, no pull, training has
    nothing to do for this example. If the model is confidently wrong, the
    incorrect class gets hammered down hard and the correct class gets yanked up
    by the same amount. Intermediate confusion produces intermediate forces.


    Think of the full neural net as a complicated pulley system: the loss sits
    at the top pulling on the logits row with these push-pull forces, and that
    tension propagates backward through the weights, with each parameter nudged
    in proportion to how much it contributed to the wrong answers. This
    intuition is more useful than the algebra for reasoning about what training
    is actually doing, especially when diagnosing issues like class imbalance or
    label noise.
stance: >-
  The cross-entropy loss gradient has a physical interpretation: it pulls up on
  the probability of the correct class and pushes down on incorrect classes with
  force proportional to how wrong the current prediction is.
related:
  - INS-260329-A2D0
  - INS-260329-3D3E
  - INS-260330-B4F1
  - INS-260410-58D6
  - INS-260410-85F5
  - PRI-260407-7FB7
  - PRI-260403-EA13
  - INS-260410-8019
  - INS-260410-D3A7
  - INS-260410-C2E6
---
Karpathy offers a beautifully physical reading of the cross-entropy backward pass. The gradient on the logits is just the softmax probabilities with a minus one at the correct index — so each row sums to zero. This means for every example, the total 'force' applied is conserved: probability mass is transferred from incorrect classes to the correct class, never created or destroyed.

The magnitude of the force is exactly proportional to how wrong the model currently is. If the model is perfectly correct (probability 1 on the right answer), the gradient row is all zeros — no push, no pull, training has nothing to do for this example. If the model is confidently wrong, the incorrect class gets hammered down hard and the correct class gets yanked up by the same amount. Intermediate confusion produces intermediate forces.

Think of the full neural net as a complicated pulley system: the loss sits at the top pulling on the logits row with these push-pull forces, and that tension propagates backward through the weights, with each parameter nudged in proportion to how much it contributed to the wrong answers. This intuition is more useful than the algebra for reasoning about what training is actually doing, especially when diagnosing issues like class imbalance or label noise.

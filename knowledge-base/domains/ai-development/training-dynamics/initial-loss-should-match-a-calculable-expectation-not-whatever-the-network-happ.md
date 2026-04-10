---
id: INS-260410-C2E6
domain: ai-development
topic: training-dynamics
title: >-
  Initial loss should match a calculable expectation, not whatever the network
  happens to output
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - initialization
  - loss-function
  - debugging
  - training-dynamics
  - softmax
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
    Compute the expected initial loss (e.g., -log(1/n_classes)) and compare
    against your network's actual iteration-zero loss — a mismatch reveals an
    initialization bug worth fixing before anything else.
  standard: >-
    Karpathy demonstrates that a character-level model with 27 classes records
    an initial loss of 27, when the analytically expected value is -log(1/27) ≈
    3.29. The hockey-stick loss curve early in training is the network
    frantically un-doing its own confidently-wrong initial logits, not learning
    anything useful. The fix is mechanical: initialize the final layer's weights
    small (e.g., multiply by 0.01) and its biases to zero, so initial logits
    cluster near zero and the softmax produces a roughly uniform distribution.


    The deeper principle is that training should never be doing 'easy' obvious
    work in the early phase. If you can predict the initial loss from first
    principles and your network doesn't match it, those wasted cycles compound
    into worse final performance because optimization budget is finite. This is
    one of the cheapest debugging checks in deep learning and almost no one does
    it.


    The pattern generalizes beyond classification: any loss function with a
    known expected value under a uniform/null model gives you a free sanity
    check on initialization. The hockey stick loss curve is a code smell, not a
    sign of fast learning.
stance: >-
  If a neural network's loss at iteration zero does not equal the analytically
  expected value for a uniform output distribution, the initialization is broken
  and the first thousands of training steps will be wasted squashing logits
  rather than learning.
related:
  - INS-260410-DA81
  - INS-260410-6FA3
  - INS-260329-818A
  - INS-260330-2154
  - INS-260329-4109
  - INS-260410-89D0
---
Karpathy demonstrates that a character-level model with 27 classes records an initial loss of 27, when the analytically expected value is -log(1/27) ≈ 3.29. The hockey-stick loss curve early in training is the network frantically un-doing its own confidently-wrong initial logits, not learning anything useful. The fix is mechanical: initialize the final layer's weights small (e.g., multiply by 0.01) and its biases to zero, so initial logits cluster near zero and the softmax produces a roughly uniform distribution.

The deeper principle is that training should never be doing 'easy' obvious work in the early phase. If you can predict the initial loss from first principles and your network doesn't match it, those wasted cycles compound into worse final performance because optimization budget is finite. This is one of the cheapest debugging checks in deep learning and almost no one does it.

The pattern generalizes beyond classification: any loss function with a known expected value under a uniform/null model gives you a free sanity check on initialization. The hockey stick loss curve is a code smell, not a sign of fast learning.

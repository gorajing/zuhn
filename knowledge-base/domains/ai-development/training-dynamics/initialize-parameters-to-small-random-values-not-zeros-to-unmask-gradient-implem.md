---
id: INS-260410-E6E9
domain: ai-development
topic: training-dynamics
title: >-
  Initialize parameters to small random values, not zeros, to unmask gradient
  implementation bugs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - initialization
  - debugging
  - gradient-checking
  - neural-networks
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
    When implementing or testing backprop code, initialize biases to small
    random numbers rather than zero — zeros simplify the math enough to mask
    incorrect gradient formulas that would fail on real inputs.
  standard: >-
    The standard practice of initializing biases to zero is fine for production
    training but dangerous for verifying backward-pass code. When a parameter is
    exactly zero, many terms in the gradient expression vanish or simplify,
    meaning your incorrect derivation can produce the right answer by
    coincidence. Karpathy deliberately initializes biases to small random values
    in his makemore gradient-checking notebook for exactly this reason.


    He also keeps a spurious bias in the first layer even though it's
    mathematically redundant with the following batch normalization — the point
    is to have a gradient flowing to it so the check catches errors there too.
    The principle generalizes: when writing any verification code, feed it
    inputs that exercise every branch of the math, not inputs that accidentally
    zero out the interesting parts.


    This is a specific instance of a broader testing principle — degenerate
    inputs make bad test cases because they hide bugs that only appear in the
    general case.
stance: >-
  Zero-initialization hides errors in manually-derived backward passes because
  it collapses the gradient expressions into simpler-than-correct forms.
related:
  - INS-260325-0409
  - INS-260410-8019
  - INS-260410-5F60
  - INS-260410-DA81
  - INS-260330-9471
---
The standard practice of initializing biases to zero is fine for production training but dangerous for verifying backward-pass code. When a parameter is exactly zero, many terms in the gradient expression vanish or simplify, meaning your incorrect derivation can produce the right answer by coincidence. Karpathy deliberately initializes biases to small random values in his makemore gradient-checking notebook for exactly this reason.

He also keeps a spurious bias in the first layer even though it's mathematically redundant with the following batch normalization — the point is to have a gradient flowing to it so the check catches errors there too. The principle generalizes: when writing any verification code, feed it inputs that exercise every branch of the math, not inputs that accidentally zero out the interesting parts.

This is a specific instance of a broader testing principle — degenerate inputs make bad test cases because they hide bugs that only appear in the general case.

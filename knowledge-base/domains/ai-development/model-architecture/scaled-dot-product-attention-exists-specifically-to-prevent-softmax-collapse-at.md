---
id: INS-260410-85F5
domain: ai-development
topic: model-architecture
title: >-
  Scaled dot-product attention exists specifically to prevent softmax collapse
  at initialization
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - transformers
  - initialization
  - softmax
  - numerical-stability
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
    The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays
    diffuse at init instead of collapsing to one-hot.
  standard: >-
    If Q and K are unit Gaussian at initialization, the variance of Q·K^T grows
    linearly with head_size — in Karpathy's example with head_size=16, attention
    scores have variance ~16 before scaling. Feeding values that large into
    softmax causes it to 'sharpen' aggressively: softmax(x*8) approaches a
    one-hot distribution where each token attends almost entirely to a single
    other token. That kills learning because gradients can only flow through the
    single winning edge.


    Dividing by sqrt(head_size) restores variance 1, keeping the softmax output
    diffuse at initialization. Every token then attends weakly to all past
    tokens, and the optimization can gradually sharpen the attention pattern
    where it's actually useful. This is a concrete example of a broader
    principle: in deep networks, initialization-time numerical behavior
    determines whether optimization is even possible, independent of whether the
    final converged model would work.
stance: >-
  Dividing attention scores by sqrt(head_size) is not a minor optimization
  detail but a load-bearing fix — without it, softmax sharpens toward one-hot
  vectors at init and the network can't learn.
related:
  - INS-260326-E1A8
  - INS-260410-DA81
  - INS-260410-78D3
  - INS-260323-8544
  - INS-260410-885B
---
If Q and K are unit Gaussian at initialization, the variance of Q·K^T grows linearly with head_size — in Karpathy's example with head_size=16, attention scores have variance ~16 before scaling. Feeding values that large into softmax causes it to 'sharpen' aggressively: softmax(x*8) approaches a one-hot distribution where each token attends almost entirely to a single other token. That kills learning because gradients can only flow through the single winning edge.

Dividing by sqrt(head_size) restores variance 1, keeping the softmax output diffuse at initialization. Every token then attends weakly to all past tokens, and the optimization can gradually sharpen the attention pattern where it's actually useful. This is a concrete example of a broader principle: in deep networks, initialization-time numerical behavior determines whether optimization is even possible, independent of whether the final converged model would work.

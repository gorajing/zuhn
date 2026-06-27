---
id: INS-260627-30CD
domain: ai-development
topic: embeddings
title: Matryoshka embeddings let one model serve cheap and precise retrieval
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - matryoshka
  - retrieval
  - efficiency
  - vector-search
sources:
  - type: youtube
    title: "How Google DeepMind is researching the next Frontier of AI for Gemini —\_Raia Hadsell, VP of Research"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zZsTVBXcbow'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Matryoshka representation learning produces nested embeddings so you can
    retrieve with 256 dims cheaply, then expand to more dimensions for precision
    — one network, many operating points.
  standard: >-
    Hadsell highlights Matryoshka Representation Learning (MRL) as a key
    property of Gemini Embeddings 2: the same network produces embeddings whose
    leading dimensions are themselves a valid, lower-resolution embedding. That
    means you can run a first-pass retrieval using only the first 256 dimensions
    — cheap to store and fast to compare — and then expand to higher dimensions
    for more expressiveness and precision when you need it.


    The practical payoff is a single deployed model that gives you a tunable
    cost/accuracy curve instead of having to train and maintain separate models
    per dimensionality. For anyone building vector search, this enables
    coarse-to-fine retrieval, shrinking index storage, and adapting embedding
    size to latency budgets — all at inference time.
stance: >-
  Training embeddings with Matryoshka representation learning lets a single
  model trade dimensionality for cost and accuracy without retraining.
related:
  - INS-260329-94E6
  - INS-260330-AE16
  - INS-260330-4F10
  - INS-260330-6BBD
  - PRI-260406-FA5B
  - INS-260605-C859
---
Hadsell highlights Matryoshka Representation Learning (MRL) as a key property of Gemini Embeddings 2: the same network produces embeddings whose leading dimensions are themselves a valid, lower-resolution embedding. That means you can run a first-pass retrieval using only the first 256 dimensions — cheap to store and fast to compare — and then expand to higher dimensions for more expressiveness and precision when you need it.

The practical payoff is a single deployed model that gives you a tunable cost/accuracy curve instead of having to train and maintain separate models per dimensionality. For anyone building vector search, this enables coarse-to-fine retrieval, shrinking index storage, and adapting embedding size to latency budgets — all at inference time.

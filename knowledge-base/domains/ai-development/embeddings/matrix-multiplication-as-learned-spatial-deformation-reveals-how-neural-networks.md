---
id: INS-260330-4F10
domain: ai-development
topic: embeddings
title: >-
  Matrix multiplication as learned spatial deformation reveals how neural
  networks transform meaning
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - linear-algebra
  - neural-networks
  - weight-matrices
  - geometric-intuition
sources:
  - type: youtube
    title: 'Linear transformations and matrices | Chapter 3, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=kYB8IZa5AuE'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Neural network layers apply learned linear transformations that reshape
    embedding space — the same geometric operation 3Blue1Brown visualizes.
  standard: >-
    Every layer in a neural network applies a weight matrix to its input —
    literally a linear transformation followed by a nonlinearity. 3Blue1Brown's
    geometric framing (space stretching, rotating, shearing while keeping
    gridlines parallel) is exactly what happens when embeddings pass through
    network layers. The weight matrix learned during training determines how
    semantic space gets reshaped — which concepts get pulled together, which get
    pushed apart. This geometric intuition explains why similar words cluster in
    embedding space and why fine-tuning works: you're learning a new spatial
    deformation that reorganizes meaning. For practitioners working with
    embeddings, this visual model makes operations like projection, retrieval,
    and similarity scoring far more intuitive.
stance: >-
  Understanding linear transformations geometrically is essential for intuiting
  how neural network weight matrices reshape embedding spaces
related:
  - INS-260330-0C0C
  - INS-260330-AE16
  - INS-260330-4E95
  - INS-260330-E059
  - INS-260330-14B1
---
Every layer in a neural network applies a weight matrix to its input — literally a linear transformation followed by a nonlinearity. 3Blue1Brown's geometric framing (space stretching, rotating, shearing while keeping gridlines parallel) is exactly what happens when embeddings pass through network layers. The weight matrix learned during training determines how semantic space gets reshaped — which concepts get pulled together, which get pushed apart. This geometric intuition explains why similar words cluster in embedding space and why fine-tuning works: you're learning a new spatial deformation that reorganizes meaning. For practitioners working with embeddings, this visual model makes operations like projection, retrieval, and similarity scoring far more intuitive.

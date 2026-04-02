---
id: INS-260330-3B6C
domain: ai-development
topic: embeddings
title: >-
  High-dimensional transformations are fully determined by where basis vectors
  land
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - linear-algebra
  - embeddings
  - dimensionality
  - representation
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
    A linear transformation is completely described by recording where each
    basis vector maps to — everything else follows by linearity.
  standard: >-
    In 2D, a linear transformation is fully captured by just 4 numbers: the
    coordinates of where i-hat and j-hat land. Any input vector, being a linear
    combination of basis vectors, must land at the same linear combination of
    the transformed basis vectors. This principle scales to higher dimensions —
    an n-dimensional linear transformation needs only n² numbers (the matrix
    entries).


    This is directly relevant to how embedding models and attention mechanisms
    work in AI. Weight matrices in neural networks are literally these
    transformations — they encode how to map basis directions in one
    representation space to another. Understanding that a matrix IS a spatial
    transformation (not just a grid of numbers to multiply) is the conceptual
    leap that makes techniques like PCA, SVD, and attention head analysis
    intuitive rather than mechanical.
stance: >-
  Tracking only basis vector destinations is sufficient to reconstruct any
  linear transformation, making explicit storage of all possible input-output
  pairs unnecessary.
related:
  - INS-260325-D392
  - INS-260330-BF2A
  - INS-260330-DE16
  - INS-260330-B4DA
  - INS-260330-DEF7
  - INS-260330-C0D1
  - INS-260330-5A2A
  - INS-260330-CCA2
evidence:
  - id: INS-260330-B4DA
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-DEF7
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-C0D1
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
In 2D, a linear transformation is fully captured by just 4 numbers: the coordinates of where i-hat and j-hat land. Any input vector, being a linear combination of basis vectors, must land at the same linear combination of the transformed basis vectors. This principle scales to higher dimensions — an n-dimensional linear transformation needs only n² numbers (the matrix entries).

This is directly relevant to how embedding models and attention mechanisms work in AI. Weight matrices in neural networks are literally these transformations — they encode how to map basis directions in one representation space to another. Understanding that a matrix IS a spatial transformation (not just a grid of numbers to multiply) is the conceptual leap that makes techniques like PCA, SVD, and attention head analysis intuitive rather than mechanical.

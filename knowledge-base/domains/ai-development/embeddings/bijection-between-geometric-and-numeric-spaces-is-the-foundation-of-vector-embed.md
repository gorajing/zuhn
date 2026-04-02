---
id: INS-260330-4B84
domain: ai-development
topic: embeddings
title: >-
  Bijection between geometric and numeric spaces is the foundation of vector
  embeddings
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - vector-spaces
  - bijection
  - foundations
sources:
  - type: youtube
    title: 'Vectors | Chapter 1, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every vector maps to exactly one coordinate tuple and vice versa — this
    bijection is what makes embedding spaces work.
  standard: >-
    3Blue1Brown emphasizes that every pair of numbers gives exactly one vector,
    and every vector corresponds to exactly one pair of numbers. This bijection
    (one-to-one correspondence) between geometric space and numeric lists is not
    just a mathematical convenience — it's the foundational property that makes
    modern AI embedding systems possible.


    When an embedding model maps a word, sentence, or image to a 768-dimensional
    vector, it relies on exactly this property: each point in the
    high-dimensional space is a unique numeric list, and nearby points represent
    semantically similar concepts. Vector addition in embedding space (like the
    classic 'king - man + woman = queen') works precisely because the numeric
    operations on coordinate lists correspond to meaningful geometric operations
    in the semantic space. Understanding this bijection clarifies why cosine
    similarity measures meaning-proximity and why L2-normalization matters for
    fair comparison.
stance: >-
  The one-to-one correspondence between spatial positions and numeric
  coordinates is the mathematical foundation that makes embedding-based AI
  systems possible
related:
  - INS-260329-ACEB
  - INS-260330-4F49
  - INS-260330-2689
  - INS-260330-CCA2
  - INS-260330-BF2A
evidence:
  - id: INS-260330-4F49
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-2689
    type: SUPPORTS
    classified_at: '2026-04-02'
---
3Blue1Brown emphasizes that every pair of numbers gives exactly one vector, and every vector corresponds to exactly one pair of numbers. This bijection (one-to-one correspondence) between geometric space and numeric lists is not just a mathematical convenience — it's the foundational property that makes modern AI embedding systems possible.

When an embedding model maps a word, sentence, or image to a 768-dimensional vector, it relies on exactly this property: each point in the high-dimensional space is a unique numeric list, and nearby points represent semantically similar concepts. Vector addition in embedding space (like the classic 'king - man + woman = queen') works precisely because the numeric operations on coordinate lists correspond to meaningful geometric operations in the semantic space. Understanding this bijection clarifies why cosine similarity measures meaning-proximity and why L2-normalization matters for fair comparison.

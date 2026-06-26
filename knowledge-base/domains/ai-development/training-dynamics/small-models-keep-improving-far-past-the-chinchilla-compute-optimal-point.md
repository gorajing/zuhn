---
id: INS-260626-8E45
domain: ai-development
topic: training-dynamics
title: Small models keep improving far past the Chinchilla compute-optimal point
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - pre-training
  - chinchilla
  - small-models
  - compute-optimal
sources:
  - type: youtube
    title: >-
      Everything I Learned Training Frontier Small Models — Maxime Labonne,
      Liquid AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fLUtUkqYHnQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Liquid pre-trained a 350M model on 28 trillion tokens — orders of magnitude
    past Chinchilla compute-optimal — and performance was still climbing,
    suggesting under-trained rather than over-trained.
  standard: >-
    Chinchilla scaling laws would put a 350M-parameter model's compute-optimal
    training budget at a tiny fraction of 28 trillion tokens, yet Liquid trained
    exactly that and saw performance still rising. Labonne cites recent
    test-time scaling-law work (Roberts et al.) suggesting they had not even
    pre-trained on *enough* tokens to be optimal under newer laws. This reframes
    Chinchilla as a budget-allocation rule for a fixed compute pool, not a
    ceiling on how much a small model can learn. For edge models the economics
    are favorable: tiny models are cheap to train, so dumping far more tokens
    into them is affordable and keeps paying off. The lesson is to distrust
    compute-optimal token counts as a stopping criterion for small models — when
    inference cost dominates and the model is cheap to train, over-training
    relative to Chinchilla is the right move.
stance: >-
  Pre-training a tiny model on vastly more tokens than Chinchilla scaling laws
  prescribe still yields meaningful performance gains.
related:
  - INS-260323-4D13
  - INS-260327-6061
  - INS-260404-CE26
  - INS-260403-B73D
  - INS-260410-CDE9
  - INS-260501-8B78
  - INS-260514-9281
  - INS-260625-2E48
  - INS-260625-1955
  - INS-260625-D790
---
Chinchilla scaling laws would put a 350M-parameter model's compute-optimal training budget at a tiny fraction of 28 trillion tokens, yet Liquid trained exactly that and saw performance still rising. Labonne cites recent test-time scaling-law work (Roberts et al.) suggesting they had not even pre-trained on *enough* tokens to be optimal under newer laws. This reframes Chinchilla as a budget-allocation rule for a fixed compute pool, not a ceiling on how much a small model can learn. For edge models the economics are favorable: tiny models are cheap to train, so dumping far more tokens into them is affordable and keeps paying off. The lesson is to distrust compute-optimal token counts as a stopping criterion for small models — when inference cost dominates and the model is cheap to train, over-training relative to Chinchilla is the right move.

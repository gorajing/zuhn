---
id: INS-260329-5D48
domain: ai-development
topic: llm-training
title: >-
  Class imbalance silently degrades model performance and requires explicit
  correction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - machine-learning
  - data-preparation
  - class-imbalance
  - oversampling
sources:
  - type: youtube
    title: Machine Learning for Everybody – Full Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Imbalanced datasets create deceptively high accuracy scores while
    systematically failing on underrepresented classes.
  standard: >-
    When training data has unequal class distribution (e.g., 7000 gammas vs 4000
    hadrons), a model can achieve seemingly good accuracy by simply predicting
    the majority class more often. The course demonstrates using
    RandomOverSampler to equalize class distributions in training data while
    deliberately keeping validation and test sets unbalanced. This distinction
    is critical: you rebalance training data so the model learns both classes
    equally, but you evaluate on natural distributions to assess real-world
    performance. This principle extends beyond ML — any system that learns from
    historical data inherits the biases in that data's distribution.
stance: >-
  Imbalanced training datasets produce models that appear accurate but
  systematically fail on minority classes, making oversampling or rebalancing a
  non-optional preprocessing step rather than an optimization
related:
  - INS-260329-3D3E
  - INS-260329-D357
  - INS-260329-A2D0
  - INS-260329-9524
  - INS-260329-7F02
---
When training data has unequal class distribution (e.g., 7000 gammas vs 4000 hadrons), a model can achieve seemingly good accuracy by simply predicting the majority class more often. The course demonstrates using RandomOverSampler to equalize class distributions in training data while deliberately keeping validation and test sets unbalanced. This distinction is critical: you rebalance training data so the model learns both classes equally, but you evaluate on natural distributions to assess real-world performance. This principle extends beyond ML — any system that learns from historical data inherits the biases in that data's distribution.

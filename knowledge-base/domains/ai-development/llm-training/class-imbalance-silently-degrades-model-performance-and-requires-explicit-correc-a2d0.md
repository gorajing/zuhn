---
id: INS-260329-A2D0
domain: ai-development
topic: llm-training
title: >-
  Class imbalance silently degrades model performance and requires explicit
  correction strategies
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - class-imbalance
  - oversampling
  - undersampling
  - weighted-loss
  - data-quality
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
    Models trained on imbalanced data learn to ignore the minority class -
    explicit rebalancing through oversampling, undersampling, or weighted loss
    functions is required to fix this.
  standard: >-
    The course identifies class imbalance as one of the most common and
    least-discussed failure modes in applied ML. When one class significantly
    outnumbers another in the training data, the model learns that predicting
    the majority class is a safe strategy that minimizes overall loss. The
    minority class - often the one you actually care about detecting (fraud,
    disease, defects) - gets systematically ignored.


    Three correction strategies are presented: oversampling the minority class
    (duplicate or synthetically generate examples via SMOTE), undersampling the
    majority class (discard examples to balance), or adjusting the loss function
    to penalize minority-class errors more heavily. Each has tradeoffs -
    oversampling risks overfitting to duplicated examples, undersampling throws
    away potentially useful data, and weighted loss requires careful
    calibration. The meta-lesson is that data quality and composition matter
    more than algorithm sophistication. A perfectly tuned neural network trained
    on imbalanced data will lose to a simple logistic regression trained on
    properly balanced data.
stance: >-
  Machine learning models trained on imbalanced datasets systematically
  underperform on minority classes, and this failure is invisible when using
  accuracy as the evaluation metric.
related:
  - INS-260329-3D3E
  - PRI-260403-6E50
  - INS-260327-5D5F
  - INS-260402-3FD8
  - INS-260326-0AB4
---
The course identifies class imbalance as one of the most common and least-discussed failure modes in applied ML. When one class significantly outnumbers another in the training data, the model learns that predicting the majority class is a safe strategy that minimizes overall loss. The minority class - often the one you actually care about detecting (fraud, disease, defects) - gets systematically ignored.

Three correction strategies are presented: oversampling the minority class (duplicate or synthetically generate examples via SMOTE), undersampling the majority class (discard examples to balance), or adjusting the loss function to penalize minority-class errors more heavily. Each has tradeoffs - oversampling risks overfitting to duplicated examples, undersampling throws away potentially useful data, and weighted loss requires careful calibration. The meta-lesson is that data quality and composition matter more than algorithm sophistication. A perfectly tuned neural network trained on imbalanced data will lose to a simple logistic regression trained on properly balanced data.

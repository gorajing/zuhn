---
id: INS-260329-8407
domain: ai-development
topic: llm-training
title: >-
  Feature scaling is a prerequisite for distance-based algorithms not a
  nice-to-have
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - machine-learning
  - feature-engineering
  - preprocessing
  - standardization
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
    Features measured on different scales (0.03 vs 100s) cause distance
    calculations to be dominated by the larger-scaled features.
  standard: >-
    The course demonstrates that when features range from 0.03 to hundreds,
    algorithms that rely on distance metrics (KNN, SVM) effectively ignore
    small-scale features because their contribution to Euclidean distance is
    negligible. StandardScaler normalizes each feature relative to its mean and
    standard deviation, putting all features on equal footing. This is a
    specific instance of a general principle: when combining measurements of
    different types, you must normalize them to a common scale or the comparison
    is meaningless. The same principle applies in any multi-criteria decision
    system — salary vs. commute time vs. team size in job comparisons, for
    instance. The mathematical fix is simple (z-score normalization), but
    forgetting it is one of the most common beginner ML mistakes.
stance: >-
  Unscaled features with different magnitudes cause distance-based ML algorithms
  to weight features by their scale rather than their importance, making
  StandardScaler normalization a mathematical necessity for algorithms like KNN
  and SVM
related:
  - INS-260323-0919
  - INS-260329-D8BC
  - INS-260330-4824
  - INS-260330-649B
  - INS-260403-EA82
  - PRI-260323-8E89
  - INS-260330-E4AD
  - INS-260330-CBFD
evidence:
  - id: INS-260323-527B
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260323-0919
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-4824
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-649B
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-FF94
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-E4AD
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-CBFD
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260403-EA82
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The course demonstrates that when features range from 0.03 to hundreds, algorithms that rely on distance metrics (KNN, SVM) effectively ignore small-scale features because their contribution to Euclidean distance is negligible. StandardScaler normalizes each feature relative to its mean and standard deviation, putting all features on equal footing. This is a specific instance of a general principle: when combining measurements of different types, you must normalize them to a common scale or the comparison is meaningless. The same principle applies in any multi-criteria decision system — salary vs. commute time vs. team size in job comparisons, for instance. The mathematical fix is simple (z-score normalization), but forgetting it is one of the most common beginner ML mistakes.

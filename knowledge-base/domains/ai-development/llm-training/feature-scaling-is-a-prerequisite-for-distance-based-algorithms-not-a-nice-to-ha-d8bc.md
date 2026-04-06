---
id: INS-260329-D8BC
domain: ai-development
topic: llm-training
title: >-
  Feature scaling is a prerequisite for distance-based algorithms, not a
  nice-to-have
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - feature-scaling
  - normalization
  - data-preprocessing
  - knn
  - svm
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
    Distance-based algorithms like KNN and SVM produce garbage results without
    feature scaling because large-range features dominate the distance
    calculation.
  standard: >-
    The course explicitly demonstrates that algorithms computing distances
    between data points - KNN, SVM, K-Means, and neural networks - require
    feature scaling (normalization or standardization) as a mandatory
    preprocessing step. Without it, a feature measured in thousands (like
    income) will completely dominate a feature measured in single digits (like
    number of children), regardless of which feature actually matters for
    prediction.


    This is one of ML's most common silent failures. The model trains, produces
    predictions, and reports reasonable-looking accuracy - but the results are
    subtly wrong because the distance metric is warped. Standardization (zero
    mean, unit variance) or min-max normalization fixes this by putting all
    features on comparable scales. The insidious part is that tree-based
    algorithms (Random Forest, XGBoost) don't need this, so practitioners who
    learned on trees often skip scaling when switching to distance-based methods
    and get burned.
stance: >-
  Failing to normalize features before running distance-based ML algorithms
  produces silently wrong results that look plausible but are dominated by
  whichever feature has the largest numeric range.
related:
  - INS-260329-4109
  - INS-260329-CBF6
  - INS-260325-03D5
  - INS-260330-2F74
  - INS-260330-B4F1
  - INS-260330-E4AD
  - INS-260329-4870
evidence:
  - id: INS-260329-4870
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-4109
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-CBF6
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260325-03D5
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-9927
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-E4AD
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260403-C514
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The course explicitly demonstrates that algorithms computing distances between data points - KNN, SVM, K-Means, and neural networks - require feature scaling (normalization or standardization) as a mandatory preprocessing step. Without it, a feature measured in thousands (like income) will completely dominate a feature measured in single digits (like number of children), regardless of which feature actually matters for prediction.

This is one of ML's most common silent failures. The model trains, produces predictions, and reports reasonable-looking accuracy - but the results are subtly wrong because the distance metric is warped. Standardization (zero mean, unit variance) or min-max normalization fixes this by putting all features on comparable scales. The insidious part is that tree-based algorithms (Random Forest, XGBoost) don't need this, so practitioners who learned on trees often skip scaling when switching to distance-based methods and get burned.

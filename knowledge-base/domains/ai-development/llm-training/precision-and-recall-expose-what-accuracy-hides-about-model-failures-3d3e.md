---
id: INS-260329-3D3E
domain: ai-development
topic: llm-training
title: Precision and recall expose what accuracy hides about model failures
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - precision
  - recall
  - f1-score
  - class-imbalance
  - evaluation-metrics
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
    On imbalanced datasets, accuracy masks total failure on the minority class -
    precision and recall reveal whether the model actually learned the pattern
    you care about.
  standard: >-
    The course walks through a critical failure mode that traps beginners: on a
    dataset where 95% of patients are healthy, a model that always predicts
    healthy achieves 95% accuracy while catching zero cases of disease. Accuracy
    rewards this degenerate strategy. Precision (of the positive predictions,
    how many were correct?) and recall (of the actual positives, how many did we
    catch?) expose the failure.


    The F1 score combines precision and recall into a single metric that
    penalizes models for trading one off against the other. But even F1 is not
    the final answer - the right metric depends on the cost of errors. In cancer
    screening, recall matters more (missing a case is worse than a false alarm).
    In spam filtering, precision matters more (blocking a real email is worse
    than letting spam through). The deeper lesson is that choosing your
    evaluation metric is a product decision disguised as a technical one - it
    encodes what kind of mistakes you are willing to tolerate.
stance: >-
  Accuracy is a misleading metric for imbalanced datasets because a model that
  predicts the majority class every time can achieve high accuracy while being
  completely useless for the minority class you actually care about.
related:
  - INS-260329-A2D0
  - INS-260323-584D
  - PRI-260323-81E9
  - INS-260329-7F02
  - PRI-260405-ADEA
---
The course walks through a critical failure mode that traps beginners: on a dataset where 95% of patients are healthy, a model that always predicts healthy achieves 95% accuracy while catching zero cases of disease. Accuracy rewards this degenerate strategy. Precision (of the positive predictions, how many were correct?) and recall (of the actual positives, how many did we catch?) expose the failure.

The F1 score combines precision and recall into a single metric that penalizes models for trading one off against the other. But even F1 is not the final answer - the right metric depends on the cost of errors. In cancer screening, recall matters more (missing a case is worse than a false alarm). In spam filtering, precision matters more (blocking a real email is worse than letting spam through). The deeper lesson is that choosing your evaluation metric is a product decision disguised as a technical one - it encodes what kind of mistakes you are willing to tolerate.

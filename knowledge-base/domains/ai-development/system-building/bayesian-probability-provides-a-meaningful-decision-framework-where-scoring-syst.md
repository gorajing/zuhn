---
id: INS-260402-7A1A
domain: ai-development
topic: system-building
title: >-
  Bayesian probability provides a meaningful decision framework where scoring
  systems fail
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - bayesian-reasoning
  - probability
  - scoring-systems
  - decision-frameworks
sources:
  - type: blog
    title: A Plan for Spam
    url: 'https://paulgraham.com/spam.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Probabilities have clear semantics for combining evidence; arbitrary scores
    do not, making probabilistic systems more principled and debuggable.
  standard: >-
    Graham contrasted Bayesian filtering with SpamAssassin's point-scoring
    approach: a probability of 0.97 for 'sex' has clear meaning and combines
    with other evidence via Bayes' Rule unambiguously, while a 'score' of some
    number of points is opaque to both users and developers. The probabilistic
    approach also naturally considers exculpatory evidence — words like 'though'
    and 'apparently' that decrease spam probability — while scoring systems
    typically only accumulate guilt.


    This distinction matters beyond spam filtering. Any classification or
    decision system faces the question of how to combine multiple signals.
    Scoring systems require manual weight tuning with no theoretical grounding,
    while probabilistic frameworks provide a mathematically principled
    combination rule. The result is systems that are more transparent, more
    robust, and easier to debug when they make mistakes.
stance: >-
  Systems that output calibrated probabilities enable principled evidence
  combination and transparent decision-making, while arbitrary scoring systems
  obscure both meaning and the method for combining evidence.
related:
  - INS-260330-775F
  - INS-260330-6C09
  - INS-260330-9BB7
  - INS-260330-C172
  - INS-260323-9AA5
  - INS-260330-B50A
  - INS-260403-27AA
evidence:
  - id: INS-260330-775F
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260330-6C09
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-9BB7
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-C172
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260323-9AA5
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-B50A
    type: EXTENDS
    classified_at: '2026-04-02'
---
Graham contrasted Bayesian filtering with SpamAssassin's point-scoring approach: a probability of 0.97 for 'sex' has clear meaning and combines with other evidence via Bayes' Rule unambiguously, while a 'score' of some number of points is opaque to both users and developers. The probabilistic approach also naturally considers exculpatory evidence — words like 'though' and 'apparently' that decrease spam probability — while scoring systems typically only accumulate guilt.

This distinction matters beyond spam filtering. Any classification or decision system faces the question of how to combine multiple signals. Scoring systems require manual weight tuning with no theoretical grounding, while probabilistic frameworks provide a mathematically principled combination rule. The result is systems that are more transparent, more robust, and easier to debug when they make mistakes.

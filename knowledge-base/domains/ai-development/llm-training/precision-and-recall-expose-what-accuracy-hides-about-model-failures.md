---
id: INS-260329-D357
domain: ai-development
topic: llm-training
title: Precision and recall expose what accuracy hides about model failures
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - machine-learning
  - evaluation-metrics
  - precision
  - recall
  - f1-score
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
    A model can be 82% accurate overall while completely failing on one class —
    precision and recall reveal these hidden failure patterns.
  standard: >-
    The course demonstrates that KNN's 82% accuracy masks a significant gap:
    recall for hadrons (class 0) was only 68% versus 89% for gammas. This means
    the model systematically misses a third of hadrons while appearing
    performant overall. The Wikipedia true-positive/false-positive diagram makes
    this concrete: precision asks 'of everything I labeled positive, how many
    actually were?' while recall asks 'of everything that was actually positive,
    how many did I catch?' These questions matter differently by domain — in
    medical diagnosis, low recall means missing sick patients; in spam
    filtering, low precision means losing legitimate emails. The F1 score
    combines both into a single metric, but understanding the individual
    components reveals which type of error your model makes. This framework of
    distinguishing error types applies far beyond ML — in any decision system,
    understanding false positives vs. false negatives is more actionable than a
    single accuracy number.
stance: >-
  Accuracy is a misleading metric for imbalanced or consequential classification
  tasks because it obscures systematic failure modes that precision-recall
  analysis reveals
related:
  - INS-260323-584D
  - INS-260320-A745
  - INS-260320-10CC
  - INS-260322-C0D3
  - INS-260325-96FB
  - INS-260327-62AB
  - INS-260327-7A48
  - INS-260328-8CCC
  - INS-260329-5D48
  - INS-260329-3D3E
evidence:
  - id: INS-260322-C0D3
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-96FB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-62AB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-6CB7
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260329-5FB5
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-A3B7
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-8BDA
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260330-38E1
    type: SUPPORTS
    classified_at: '2026-04-03'
---
The course demonstrates that KNN's 82% accuracy masks a significant gap: recall for hadrons (class 0) was only 68% versus 89% for gammas. This means the model systematically misses a third of hadrons while appearing performant overall. The Wikipedia true-positive/false-positive diagram makes this concrete: precision asks 'of everything I labeled positive, how many actually were?' while recall asks 'of everything that was actually positive, how many did I catch?' These questions matter differently by domain — in medical diagnosis, low recall means missing sick patients; in spam filtering, low precision means losing legitimate emails. The F1 score combines both into a single metric, but understanding the individual components reveals which type of error your model makes. This framework of distinguishing error types applies far beyond ML — in any decision system, understanding false positives vs. false negatives is more actionable than a single accuracy number.

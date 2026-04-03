---
id: INS-260402-3FD8
domain: ai-development
topic: system-building
title: >-
  Statistical learning outperforms hand-crafted rules even with simple
  algorithms
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - bayesian-filtering
  - machine-learning
  - rule-systems
  - statistical-methods
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
    Simple statistical approaches discover patterns humans miss and scale better
    than hand-crafted rules.
  standard: >-
    Graham spent six months writing hand-crafted spam rules before trying
    Bayesian filtering, only to find the statistical approach immediately
    outperformed his manual work. The filter discovered that 'ff0000' (HTML
    bright red) was as strong a spam indicator as any pornographic term — a
    pattern no human engineer would think to encode.


    This principle extends beyond spam: whenever a classification problem has
    high-dimensional feature spaces, statistical methods will find signal in
    combinations and correlations invisible to human rule-writers. The
    competitive instinct to manually identify features ('playing a game with
    spammers') is a trap that produces diminishing returns. The lesson is to
    reach for data-driven approaches early rather than exhausting manual
    pattern-matching first.
stance: >-
  Naive Bayesian classification with minimal feature engineering will outperform
  elaborate manually-tuned rule systems because statistical methods discover
  non-obvious signal patterns that human engineers miss.
related:
  - INS-260323-B309
  - INS-260325-696D
  - INS-260325-4CBB
  - INS-260329-5D48
  - INS-260330-5E67
  - INS-260330-B5D2
  - PRI-260323-81E9
  - INS-260330-C31B
  - INS-260325-B067
evidence:
  - id: INS-260325-696D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260325-4CBB
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-5E67
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-18F3
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260325-B067
    type: CONTRADICTS
    classified_at: '2026-04-03'
---
Graham spent six months writing hand-crafted spam rules before trying Bayesian filtering, only to find the statistical approach immediately outperformed his manual work. The filter discovered that 'ff0000' (HTML bright red) was as strong a spam indicator as any pornographic term — a pattern no human engineer would think to encode.

This principle extends beyond spam: whenever a classification problem has high-dimensional feature spaces, statistical methods will find signal in combinations and correlations invisible to human rule-writers. The competitive instinct to manually identify features ('playing a game with spammers') is a trap that produces diminishing returns. The lesson is to reach for data-driven approaches early rather than exhausting manual pattern-matching first.

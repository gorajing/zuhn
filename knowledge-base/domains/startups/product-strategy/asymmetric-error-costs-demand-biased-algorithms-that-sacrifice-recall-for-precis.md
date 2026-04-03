---
id: INS-260402-3DBF
domain: startups
topic: product-strategy
title: >-
  Asymmetric error costs demand biased algorithms that sacrifice recall for
  precision
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - false-positives
  - error-asymmetry
  - product-design
  - user-trust
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
    False positives that destroy user trust are far more damaging than false
    negatives that merely annoy, so bias your systems accordingly.
  standard: >-
    Graham observed that missing legitimate email is 'an order of magnitude
    worse' than receiving spam, comparing false positives to 'an acne cure that
    carries a risk of death.' He deliberately biased his algorithm by doubling
    the count of legitimate-email tokens, sacrificing some spam detection to
    ensure near-zero false positives.


    This asymmetry appears throughout product design: blocking a legitimate
    payment is worse than missing fraud; censoring valid content is worse than
    showing spam; rejecting a qualified candidate is worse than interviewing an
    unqualified one. The key insight is that as filters improve, false positive
    danger actually increases — users trust the filter more and stop checking
    its decisions. Systems must be designed with explicit bias toward the costly
    error from day one.
stance: >-
  When one type of error is an order of magnitude more costly than the other,
  systems must be deliberately biased toward avoiding the expensive error even
  at the cost of worse performance on the cheap error.
related:
  - INS-260327-7F32
  - INS-260329-7B56
  - INS-260329-95EA
  - INS-260402-5CF0
  - INS-260402-AD42
  - INS-260322-627E
  - INS-260329-78AE
  - INS-260402-46AD
  - INS-260402-8A7A
evidence:
  - id: INS-260402-5CF0
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260327-7F32
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260402-8A7A
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260329-78AE
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260402-AD42
    type: EXTENDS
    classified_at: '2026-04-03'
  - id: INS-260402-46AD
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
Graham observed that missing legitimate email is 'an order of magnitude worse' than receiving spam, comparing false positives to 'an acne cure that carries a risk of death.' He deliberately biased his algorithm by doubling the count of legitimate-email tokens, sacrificing some spam detection to ensure near-zero false positives.

This asymmetry appears throughout product design: blocking a legitimate payment is worse than missing fraud; censoring valid content is worse than showing spam; rejecting a qualified candidate is worse than interviewing an unqualified one. The key insight is that as filters improve, false positive danger actually increases — users trust the filter more and stop checking its decisions. Systems must be designed with explicit bias toward the costly error from day one.

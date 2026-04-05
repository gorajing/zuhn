---
id: INS-260330-2F74
domain: startups
topic: scaling
title: >-
  Brute-force scaling: compensating for unit-level inefficiency with
  overwhelming volume
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - brute-force
  - volume
  - efficiency
  - rubisco
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo is terrible at its job but there are 40 billion tons of it on Earth
    — brute-force quantity as the scaling strategy when unit quality can't
    improve.
  standard: >-
    RuBisCo is one of the slowest enzymes in biology and confuses its substrate
    (CO2) with oxygen roughly half the time. Despite this, it is the most
    abundant protein on Earth — an estimated 40 billion tons at any given
    moment. Plants compensated for RuBisCo's per-unit inefficiency by simply
    manufacturing enormous quantities of it.


    This pattern appears repeatedly in technology and business: when optimizing
    individual unit performance hits diminishing returns or is architecturally
    impossible, flooding the system with volume can achieve the same aggregate
    output. Examples include horizontal scaling of cheap commodity servers
    instead of investing in mainframes, hiring large numbers of junior
    developers with strong tooling instead of competing for scarce senior
    engineers, or running many small A/B tests instead of trying to design the
    perfect experiment. The key insight is that brute-force scaling is not
    always a sign of poor engineering — sometimes it IS the dominant strategy,
    especially when the cost of individual units is low relative to the cost of
    redesigning the unit itself.
stance: >-
  When improving individual unit performance is impossible or too costly,
  producing dramatically more units can be a viable and even dominant scaling
  strategy
related:
  - INS-260325-C523
  - INS-260330-B7B1
  - INS-260330-ED9D
  - INS-260404-5E8F
  - INS-260404-B1AB
  - INS-260404-4010
  - INS-260403-410A
evidence:
  - id: INS-260330-6CB7
    type: CHALLENGES
    classified_at: '2026-04-03'
  - id: INS-260325-C523
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260330-E70C
    type: SUPPORTS
    classified_at: '2026-04-03'
---
RuBisCo is one of the slowest enzymes in biology and confuses its substrate (CO2) with oxygen roughly half the time. Despite this, it is the most abundant protein on Earth — an estimated 40 billion tons at any given moment. Plants compensated for RuBisCo's per-unit inefficiency by simply manufacturing enormous quantities of it.

This pattern appears repeatedly in technology and business: when optimizing individual unit performance hits diminishing returns or is architecturally impossible, flooding the system with volume can achieve the same aggregate output. Examples include horizontal scaling of cheap commodity servers instead of investing in mainframes, hiring large numbers of junior developers with strong tooling instead of competing for scarce senior engineers, or running many small A/B tests instead of trying to design the perfect experiment. The key insight is that brute-force scaling is not always a sign of poor engineering — sometimes it IS the dominant strategy, especially when the cost of individual units is low relative to the cost of redesigning the unit itself.

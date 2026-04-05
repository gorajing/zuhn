---
id: INS-260330-5A13
domain: startups
topic: product-development
title: Observation of failure modes in v1 should directly shape v2 architecture
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - iterative-design
  - failure-analysis
  - engineering
  - observation
sources:
  - type: youtube
    title: World's Fastest Pitch - Supersonic Baseball Cannon - Smarter Every Day 242
    author: SmarterEveryDay
    url: 'https://www.youtube.com/watch?v=cqidD7kVnxY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Study how your current system fails at the edges to discover what to build
    next.
  standard: >-
    When building the golf ball cannon, Destin observed that tape at the barrel
    exit inflated like a balloon before the ball arrived — revealing residual
    air was creating drag and stealing velocity. This single observation led to
    the 'extra vacuum ullage' design in the baseball cannon: additional vacuum
    volumes along the barrel to absorb trapped air. The insight transfers
    directly to product development: the most valuable iteration signals come
    not from feature requests but from watching where your current system
    underperforms at its limits. A/B test failures, edge-case bugs, and 'almost
    worked' scenarios contain more design intelligence than customer surveys.


    This is distinct from general iteration advice because it emphasizes *where*
    to look: not at the core function (the ball still fired fine) but at the
    marginal performance losses that compound. In startups, this means
    instrumenting the near-misses — the users who almost converted, the queries
    that almost returned useful results, the workflows that almost completed.
stance: >-
  The highest-leverage product iterations come from closely observing how the
  previous version fails at the margins, not from adding features users request.
related:
  - INS-260323-1811
  - INS-260323-AB5F
  - INS-260402-3C79
  - INS-260402-4F0E
  - INS-260402-426C
evidence:
  - id: INS-260323-1811
    relationship: RELATED
  - id: INS-260402-FFCB
    relationship: RELATED
---
When building the golf ball cannon, Destin observed that tape at the barrel exit inflated like a balloon before the ball arrived — revealing residual air was creating drag and stealing velocity. This single observation led to the 'extra vacuum ullage' design in the baseball cannon: additional vacuum volumes along the barrel to absorb trapped air. The insight transfers directly to product development: the most valuable iteration signals come not from feature requests but from watching where your current system underperforms at its limits. A/B test failures, edge-case bugs, and 'almost worked' scenarios contain more design intelligence than customer surveys.

This is distinct from general iteration advice because it emphasizes *where* to look: not at the core function (the ball still fired fine) but at the marginal performance losses that compound. In startups, this means instrumenting the near-misses — the users who almost converted, the queries that almost returned useful results, the workflows that almost completed.

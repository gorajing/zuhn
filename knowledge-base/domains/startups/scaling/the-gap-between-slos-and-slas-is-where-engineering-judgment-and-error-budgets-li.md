---
id: INS-260329-E7A4
domain: startups
topic: scaling
title: >-
  The gap between SLOs and SLAs is where engineering judgment and error budgets
  live
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - slos
  - slas
  - error-budgets
  - reliability-engineering
  - operational-margin
sources:
  - type: youtube
    title: System Design Concepts Course and Interview Prep
    author: freeCodeCamp.org
    url: 'https://youtube.com/watch?v=F2FmTdLtb_4'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Set SLOs tighter than SLAs so the gap between them becomes your error budget
    — the margin that lets you deploy, experiment, and recover without breaching
    contracts.
  standard: >-
    If your SLA promises 99.99% uptime and your SLO targets 99.99%, you have
    zero margin for deployments, experiments, or unexpected incidents — any
    degradation immediately breaches your contract. The practice of setting SLOs
    stricter than SLAs (e.g., SLO of 99.995% against an SLA of 99.99%) creates
    an error budget: a quantified amount of acceptable unreliability that can be
    'spent' on feature deployments, infrastructure changes, or absorbed by
    incidents. This reframes reliability from 'never fail' to 'fail within
    budget.' When the error budget is exhausted, teams freeze feature work and
    focus on reliability. When there's budget remaining, teams can move fast.
    This is the operational equivalent of financial runway — and like runway,
    most teams don't track it until it's too late.
stance: >-
  Internal performance targets (SLOs) must be materially stricter than external
  contractual promises (SLAs) — the delta between them is the error budget that
  funds all experimentation and deployment risk.
related:
  - INS-260329-9CBB
  - PRI-260323-68F0
  - PRI-260403-9E80
  - PRI-260323-57AC
  - INS-260325-3B58
  - INS-260402-91B5
evidence:
  - id: INS-260325-3B58
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-0CC5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-9CBB
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
If your SLA promises 99.99% uptime and your SLO targets 99.99%, you have zero margin for deployments, experiments, or unexpected incidents — any degradation immediately breaches your contract. The practice of setting SLOs stricter than SLAs (e.g., SLO of 99.995% against an SLA of 99.99%) creates an error budget: a quantified amount of acceptable unreliability that can be 'spent' on feature deployments, infrastructure changes, or absorbed by incidents. This reframes reliability from 'never fail' to 'fail within budget.' When the error budget is exhausted, teams freeze feature work and focus on reliability. When there's budget remaining, teams can move fast. This is the operational equivalent of financial runway — and like runway, most teams don't track it until it's too late.

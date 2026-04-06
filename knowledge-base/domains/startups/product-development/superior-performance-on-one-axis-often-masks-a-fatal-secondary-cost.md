---
id: INS-260405-F7C5
domain: startups
topic: product-development
title: Superior Performance on One Axis Often Masks a Fatal Secondary Cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - product-tradeoffs
  - failure-modes
  - engineering
  - optimization
  - second-order-effects
sources:
  - type: youtube
    title: Backspin Basketball Flies Off Dam
    author: Veritasium
    url: 'https://www.youtube.com/watch?v=2OSrvzNW9FE'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The Magnus effect aircraft generated more lift per unit than conventional
    wings — and proportionally far more drag, causing it to crash after a single
    flight.
  standard: >-
    The Coandă-style Magnus wing aircraft described in the video produced
    greater lift than traditional wings using the same principle that makes a
    backspin basketball fly sideways. On a lift-per-unit metric, it 'won.' But
    it also generated dramatically more drag, making sustained flight
    impractical — the plane crashed after one flight and was abandoned.


    This is a recurring failure mode in engineering and product development:
    single-metric optimization that ignores the second-order penalty. A product
    can be genuinely faster, cheaper, or more powerful than alternatives while
    still failing because it trades away something users or the physics won't
    forgive.


    The practical lesson is to always evaluate proposed improvements against the
    full system budget — power, weight, drag, complexity, cost, maintenance. A
    mechanism that wins on your target metric but loses badly on an adjacent one
    will usually fail in deployment, often after enough investment to be
    painful.
stance: >-
  Many technically superior mechanisms fail in practice because they optimize
  one desirable property (lift, speed, efficiency) while simultaneously
  worsening a secondary cost (drag, complexity, weight) that ultimately proves
  decisive.
related:
  - INS-260403-0E11
  - INS-260405-D3B5
  - INS-260403-1E05
  - INS-260323-FAF2
  - INS-260403-304E
evidence:
  - id: INS-260323-FAF2
    type: EXTENDS
    classified_at: '2026-04-05'
  - id: INS-260403-304E
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260405-D3B5
    type: EXTENDS
    classified_at: '2026-04-06'
---
The Coandă-style Magnus wing aircraft described in the video produced greater lift than traditional wings using the same principle that makes a backspin basketball fly sideways. On a lift-per-unit metric, it 'won.' But it also generated dramatically more drag, making sustained flight impractical — the plane crashed after one flight and was abandoned.

This is a recurring failure mode in engineering and product development: single-metric optimization that ignores the second-order penalty. A product can be genuinely faster, cheaper, or more powerful than alternatives while still failing because it trades away something users or the physics won't forgive.

The practical lesson is to always evaluate proposed improvements against the full system budget — power, weight, drag, complexity, cost, maintenance. A mechanism that wins on your target metric but loses badly on an adjacent one will usually fail in deployment, often after enough investment to be painful.

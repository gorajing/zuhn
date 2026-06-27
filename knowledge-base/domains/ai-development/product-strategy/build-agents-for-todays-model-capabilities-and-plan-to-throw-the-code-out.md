---
id: INS-260627-8CFF
domain: ai-development
topic: product-strategy
title: Build agents for today's model capabilities and plan to throw the code out
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-strategy
  - startup-advantage
  - model-capabilities
  - velocity
  - timing
  - product-strategy
sources:
  - type: youtube
    title: 'Claude Agent SDK [Full Workshop] — Thariq Shihipar, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TqC1qOfiVcQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Since AI lets you write code 10x faster, throw it out 10x faster too — build
    for what models can do today, not what they might do in a year.
  standard: >-
    Thariq's rule of thumb is to re-think or rewrite agent code roughly every
    six months, because capabilities shift enough that yesterday's baked-in
    assumptions become liabilities. The strategic stance that follows is to
    avoid hedging bets on where the future is going and instead build
    aggressively for what works right now — capture market share today, and
    don't be afraid to discard code later. 'We can write code 10 times faster,
    so you should throw out code 10 times faster.' Trying to predict the
    trajectory of model capabilities is extremely hard even from inside a lab,
    which makes future-proofing a poor use of effort relative to shipping
    against present capability.


    This is framed explicitly as a structural advantage for startups over large
    companies. Big organizations run roughly six-month incubation cycles, which
    leaves their products perpetually built for the capabilities of the past. A
    startup's edge is the ability to say 'the capabilities are here right now,
    let me build something that uses them today.' The Agent SDK is designed to
    compound this: because it is built on Claude Code, improvements to the
    underlying harness and the bash tool accrue automatically as the models
    improve, so building on the opinionated stack lets you ride capability gains
    rather than rebuild them. The deeper mental model is that models are grown,
    not designed — you discover their evolving capabilities empirically and
    exploit them quickly, rather than architecting around a fixed, predictable
    spec.
stance: >-
  Agent builders should target current model capabilities and rewrite frequently
  rather than hedge on where models are heading.
related:
  - INS-260320-DEAF
  - INS-260327-2387
  - INS-260412-EDBF
  - INS-260605-3899
  - INS-260626-A08F
  - INS-260626-0D4B
  - INS-260626-FBB1
  - INS-260626-48F7
  - INS-260514-AC43
  - INS-260603-7252
---
Thariq's rule of thumb is to re-think or rewrite agent code roughly every six months, because capabilities shift enough that yesterday's baked-in assumptions become liabilities. The strategic stance that follows is to avoid hedging bets on where the future is going and instead build aggressively for what works right now — capture market share today, and don't be afraid to discard code later. 'We can write code 10 times faster, so you should throw out code 10 times faster.' Trying to predict the trajectory of model capabilities is extremely hard even from inside a lab, which makes future-proofing a poor use of effort relative to shipping against present capability.

This is framed explicitly as a structural advantage for startups over large companies. Big organizations run roughly six-month incubation cycles, which leaves their products perpetually built for the capabilities of the past. A startup's edge is the ability to say 'the capabilities are here right now, let me build something that uses them today.' The Agent SDK is designed to compound this: because it is built on Claude Code, improvements to the underlying harness and the bash tool accrue automatically as the models improve, so building on the opinionated stack lets you ride capability gains rather than rebuild them. The deeper mental model is that models are grown, not designed — you discover their evolving capabilities empirically and exploit them quickly, rather than architecting around a fixed, predictable spec.

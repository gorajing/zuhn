---
id: INS-260625-78EC
domain: ai-development
topic: claude-code
title: >-
  Token-max but minimize lines of code — inference is cheap, code surface is the
  liability
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - token-economics
  - code-quality
  - fast-mode
  - productivity
sources:
  - type: youtube
    title: Conductor CEO Charlie Holtz Walks Us Through His AI Coding Setup
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=fQmlML9Lay4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Spend aggressively on tokens (fast mode, high effort, think-hard always) but
    treat lines of code as a cost to minimize, not a metric to maximize.
  standard: >-
    Holtz separates two things people conflate: token spend and code volume. He
    is 'very big' on token-maxing — always fast mode, high effort,
    think-extra-hard all the time — and once spent $22,000 on tokens in a single
    month (July 2025) bootstrapping Conductor. But he is explicitly not big on
    lines of code; the team works to keep LoC minimal because a codebase can
    'spiral out of control' if you aren't careful about additions. The mental
    model: inference is a cheap, renewable input you should pour on; lines of
    code are durable liability that accrues maintenance burden and (per the
    slop-free-zone logic) degrades agent output. He notes the calculus differs
    by context — generating volume is more acceptable when spinning up a
    brand-new app than when working in an established codebase like Conductor.
stance: >-
  In AI-assisted development you should maximize token spend while minimizing
  lines of code, because LoC is the liability and inference is not.
related:
  - INS-260605-4A94
  - INS-260626-09B3
  - INS-260626-411D
  - INS-260626-EAD3
  - INS-260603-915A
  - INS-260625-E696
  - INS-260626-105D
---
Holtz separates two things people conflate: token spend and code volume. He is 'very big' on token-maxing — always fast mode, high effort, think-extra-hard all the time — and once spent $22,000 on tokens in a single month (July 2025) bootstrapping Conductor. But he is explicitly not big on lines of code; the team works to keep LoC minimal because a codebase can 'spiral out of control' if you aren't careful about additions. The mental model: inference is a cheap, renewable input you should pour on; lines of code are durable liability that accrues maintenance burden and (per the slop-free-zone logic) degrades agent output. He notes the calculus differs by context — generating volume is more acceptable when spinning up a brand-new app than when working in an established codebase like Conductor.

---
id: INS-260329-393C
domain: startups
topic: product-development
title: >-
  Copy-paste in code is a design smell that signals missing abstraction — the
  same applies to business processes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - design-patterns
  - process
  - efficiency
  - complexity-management
  - iteration-speed
sources:
  - type: youtube
    title: Harvard CS50 – Full Computer Science University Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=8mAITcNt710'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Whenever you find yourself copy-pasting code or repeating a manual process,
    you've found a missing abstraction that will cost more to fix later.
  standard: >-
    Malan shows students a program with three identical 'play sound meow' blocks
    and asks: what's wrong? The answer is that changing any behavior requires
    changing it in three places, creating bug surface area that grows with every
    copy. The fix is creating a reusable function. This principle transfers
    directly to business operations: if your team copy-pastes the same Slack
    message to onboard each customer, that's a missing automation. If three
    different dashboards show revenue calculated slightly differently, that's a
    missing single source of truth. The compounding cost is the key insight — at
    3 copies, duplication is annoying. At 30, it's a liability. At 300, it's
    technical debt that can paralyze an organization. The discipline of 'don't
    repeat yourself' is really about recognizing patterns early and creating the
    right abstraction before duplication compounds.
stance: >-
  Duplicated code or duplicated manual processes always indicate a missing
  abstraction, and the cost of duplication compounds nonlinearly as systems grow
related:
  - INS-260329-E839
  - INS-260329-E333
  - PRI-260403-5B3D
  - INS-260330-F5A1
  - INS-260403-D4EA
  - INS-260329-19EA
evidence:
  - id: INS-260329-E839
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260402-06DB
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-19EA
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-F5A1
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-CC79
    type: CHALLENGES
    classified_at: '2026-04-03'
---
Malan shows students a program with three identical 'play sound meow' blocks and asks: what's wrong? The answer is that changing any behavior requires changing it in three places, creating bug surface area that grows with every copy. The fix is creating a reusable function. This principle transfers directly to business operations: if your team copy-pastes the same Slack message to onboard each customer, that's a missing automation. If three different dashboards show revenue calculated slightly differently, that's a missing single source of truth. The compounding cost is the key insight — at 3 copies, duplication is annoying. At 30, it's a liability. At 300, it's technical debt that can paralyze an organization. The discipline of 'don't repeat yourself' is really about recognizing patterns early and creating the right abstraction before duplication compounds.

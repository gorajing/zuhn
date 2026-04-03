---
id: INS-260330-49A4
domain: startups
topic: growth
title: Optimize for next order of magnitude only
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - technical-debt
  - speed
  - engineering-tradeoffs
sources:
  - type: youtube
    title: 'Lecture 8 - How to Get Started, Doing Things that Don''t Scale, Press'
    author: YC Root Access
    url: 'https://www.youtube.com/watch?v=oQOC-qy-GDY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    At 10 users worry about reaching 100, not about reaching a million —
    necessity will force the right solutions at each stage.
  standard: >-
    Walker Williams describes how Teespring's CTO duplicated the entire codebase
    and database to serve enterprise customers in 3-4 days rather than spending
    a month building it properly. The site crashed nightly for months, with the
    whole team sleeping with phones under their pillows to restart servers. Yet
    this was the right call — speed to product-market fit mattered more than
    clean architecture.


    The rule of thumb is concrete: only worry about the next order of magnitude.
    At 10 users, plan for 100. At 100, plan for 1,000. This works because each
    10x jump reveals different bottlenecks than you'd predict, making premature
    optimization doubly wasteful — you optimize the wrong things AND you move
    slower. Technical debt accumulated this way is a feature, not a bug, because
    it buys you the speed to discover what actually matters.
stance: >-
  Startups should plan exclusively for their next 10x milestone rather than
  architecting for scale they haven't reached, because premature optimization
  wastes the speed advantage that determines survival.
related:
  - INS-260327-6E33
  - INS-260327-2718
  - INS-260327-3918
  - INS-260329-B8C4
  - INS-260329-4F3F
  - INS-260330-CBEF
  - INS-260330-C658
  - INS-260330-21CC
  - INS-260327-DD5C
  - INS-260321-6437
evidence:
  - id: INS-260327-3918
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260321-6437
    type: SUPPORTS
    classified_at: '2026-04-03'
---
Walker Williams describes how Teespring's CTO duplicated the entire codebase and database to serve enterprise customers in 3-4 days rather than spending a month building it properly. The site crashed nightly for months, with the whole team sleeping with phones under their pillows to restart servers. Yet this was the right call — speed to product-market fit mattered more than clean architecture.

The rule of thumb is concrete: only worry about the next order of magnitude. At 10 users, plan for 100. At 100, plan for 1,000. This works because each 10x jump reveals different bottlenecks than you'd predict, making premature optimization doubly wasteful — you optimize the wrong things AND you move slower. Technical debt accumulated this way is a feature, not a bug, because it buys you the speed to discover what actually matters.

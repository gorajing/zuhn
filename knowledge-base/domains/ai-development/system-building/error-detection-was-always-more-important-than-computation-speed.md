---
id: INS-260325-FDA9
domain: ai-development
topic: system-building
title: Error detection was always more important than computation speed
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-detection
  - babbage
  - reliability
  - verification
sources:
  - type: youtube
    title: >-
      Why every computer still follows a 1940s blueprint | David Alan Grier:
      Full Interview
    author: Big Think
    url: 'https://youtu.be/NJckzrDpbUA'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Babbage's Rule — that two people doing the same calculation the same way
    tend to make the same mistakes — drove computing to prioritize verification
    methods over raw calculation speed.
  standard: >-
    Charles Babbage discovered a crucial principle: two calculations done the
    same way by different people tend to produce the same errors. This meant
    verification required approaching problems in fundamentally different ways,
    not just repeating them. The nautical almanac offices in London and Paris
    developed methods that could both compute and 'undo' calculations in
    different forms specifically to expose errors.


    This priority of correctness over speed is a through-line from 18th-century
    human computers to modern software engineering. Testing, code review, type
    systems, and formal verification all descend from this same insight: the
    hard part is not performing the computation but knowing whether the result
    is right.
stance: >-
  The history of computing shows that systems for finding mistakes have
  consistently been more important than systems for doing calculations faster.
related:
  - INS-260322-F891
  - INS-260325-5B7F
  - PRI-260403-5B3D
  - INS-260323-8966
  - INS-260404-BE07
  - PRI-260328-5D9E
  - INS-260323-0919
  - INS-260327-95D3
  - INS-260327-47E9
  - INS-260329-4109
evidence:
  - id: INS-260323-8966
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-0919
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-4109
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-8FF8
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260329-9927
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260329-7A6A
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260329-5BB0
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260329-8EF6
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260329-3739
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260330-901B
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260404-BE07
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Charles Babbage discovered a crucial principle: two calculations done the same way by different people tend to produce the same errors. This meant verification required approaching problems in fundamentally different ways, not just repeating them. The nautical almanac offices in London and Paris developed methods that could both compute and 'undo' calculations in different forms specifically to expose errors.

This priority of correctness over speed is a through-line from 18th-century human computers to modern software engineering. Testing, code review, type systems, and formal verification all descend from this same insight: the hard part is not performing the computation but knowing whether the result is right.

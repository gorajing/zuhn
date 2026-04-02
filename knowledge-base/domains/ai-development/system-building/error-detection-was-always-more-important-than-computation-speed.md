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
  - INS-260323-8966
  - PRI-260328-5D9E
  - INS-260330-F5A1
  - INS-260330-E282
  - INS-260323-0919
  - INS-260327-680A
  - INS-260327-95D3
  - INS-260327-47E9
---
Charles Babbage discovered a crucial principle: two calculations done the same way by different people tend to produce the same errors. This meant verification required approaching problems in fundamentally different ways, not just repeating them. The nautical almanac offices in London and Paris developed methods that could both compute and 'undo' calculations in different forms specifically to expose errors.

This priority of correctness over speed is a through-line from 18th-century human computers to modern software engineering. Testing, code review, type systems, and formal verification all descend from this same insight: the hard part is not performing the computation but knowing whether the result is right.

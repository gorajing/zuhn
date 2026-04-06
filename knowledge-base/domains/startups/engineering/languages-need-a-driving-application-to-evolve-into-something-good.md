---
id: INS-260403-F100
domain: startups
topic: engineering
title: Languages need a driving application to evolve into something good
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - dogfooding
  - tool-design
  - co-evolution
  - application-driven
sources:
  - type: blog
    title: Five Questions about Language Design
    url: 'https://paulgraham.com/langdes.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The best languages evolved alongside a real application; designing tools in
    the abstract without a driving use case produces inferior results.
  standard: >-
    Graham notes that the best programming languages all evolved together with
    some application they were being used to write: C for systems programming,
    Lisp for symbolic differentiation. The application provides constant,
    concrete feedback that prevents the design from drifting into theoretical
    elegance disconnected from real needs.


    This principle applies to any tool, framework, or platform: building it
    alongside a real, demanding application forces you to confront actual
    problems rather than imagined ones. It's the difference between designing a
    bridge on paper and designing one while simultaneously crossing the river.
    Guy Steele's caveat is important — the driving application shouldn't be the
    compiler for the language itself, or you get a tool optimized for a circular
    use case rather than real-world needs.
stance: >-
  Tools and frameworks designed in the abstract, without a real application
  pushing their development, produce worse outcomes than those co-evolved with a
  concrete use case.
related:
  - INS-260327-7214
  - INS-260330-0E6E
  - INS-260402-E470
  - INS-260402-2D95
  - INS-260402-0D16
  - INS-260403-D645
  - INS-260402-9676
  - INS-260329-EDA2
  - INS-260405-131B
  - INS-260403-1269
evidence:
  - id: INS-260402-2D95
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260327-7214
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260405-131B
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260330-0E6E
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260402-0D16
    type: EXTENDS
    classified_at: '2026-04-06'
  - id: INS-260402-9676
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
  - id: INS-260329-EDA2
    type: SUPPORTS
    classified_at: '2026-04-06'
---
Graham notes that the best programming languages all evolved together with some application they were being used to write: C for systems programming, Lisp for symbolic differentiation. The application provides constant, concrete feedback that prevents the design from drifting into theoretical elegance disconnected from real needs.

This principle applies to any tool, framework, or platform: building it alongside a real, demanding application forces you to confront actual problems rather than imagined ones. It's the difference between designing a bridge on paper and designing one while simultaneously crossing the river. Guy Steele's caveat is important — the driving application shouldn't be the compiler for the language itself, or you get a tool optimized for a circular use case rather than real-world needs.

---
id: INS-260403-2CDA
domain: startups
topic: engineering
title: Legacy systems persist because replacement cost exceeds workaround cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - path-dependence
  - legacy-systems
  - rubisco-analogy
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo fails half the time in modern conditions but plants produce 40
    billion tons of it rather than evolving a replacement — the same logic keeps
    legacy code alive.
  standard: >-
    The enzyme RuBisCo was designed for a low-oxygen atmosphere and now confuses
    O2 with CO2 roughly half the time, producing toxic byproducts. Yet plants
    went 'all-in' on the RuBisCo strategy and simply evolved cleanup pathways
    for the toxic waste rather than replacing the enzyme itself.


    This mirrors how engineering organizations handle legacy systems. When a
    core component is deeply integrated (like RuBisCo in every plant on Earth),
    the rational response to its flaws is often to build workarounds rather than
    attempt a rewrite. The decision isn't about whether the system is good —
    it's about whether the replacement cost exceeds the ongoing cost of
    compensating for known failures. Teams that understand this pattern avoid
    both premature rewrites and the illusion that workarounds are free.
stance: >-
  Organizations rationally keep broken-but-functional core systems when the cost
  of working around flaws is lower than the cost of replacing them, even when
  the flaws are severe
related:
  - INS-260323-7A11
  - INS-260330-23CD
  - INS-260330-CEAE
  - INS-260402-5242
  - INS-260402-1FE9
  - INS-260403-D563
  - INS-260403-30E5
  - INS-260330-53A9
  - INS-260404-CC7C
  - INS-260330-BFA2
evidence:
  - id: INS-260402-1FE9
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260405-DAC9
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260323-7A11
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260330-C02D
    type: REFINES
    classified_at: '2026-04-06'
---
The enzyme RuBisCo was designed for a low-oxygen atmosphere and now confuses O2 with CO2 roughly half the time, producing toxic byproducts. Yet plants went 'all-in' on the RuBisCo strategy and simply evolved cleanup pathways for the toxic waste rather than replacing the enzyme itself.

This mirrors how engineering organizations handle legacy systems. When a core component is deeply integrated (like RuBisCo in every plant on Earth), the rational response to its flaws is often to build workarounds rather than attempt a rewrite. The decision isn't about whether the system is good — it's about whether the replacement cost exceeds the ongoing cost of compensating for known failures. Teams that understand this pattern avoid both premature rewrites and the illusion that workarounds are free.

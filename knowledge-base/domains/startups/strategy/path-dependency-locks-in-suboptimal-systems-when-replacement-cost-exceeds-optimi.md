---
id: INS-260330-4983
domain: startups
topic: strategy
title: >-
  Path dependency locks in suboptimal systems when replacement cost exceeds
  optimization cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - path-dependency
  - technical-debt
  - legacy-systems
  - evolution
  - lock-in
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo is terrible at its job but 450 million years of built infrastructure
    makes replacing it impossible — the same dynamic traps companies on legacy
    systems.
  standard: >-
    RuBisCo, the enzyme that fixes carbon in photosynthesis, evolved in a
    low-oxygen atmosphere and fails roughly half the time now that oxygen is
    abundant — grabbing O2 instead of CO2 and producing a toxic byproduct. Yet
    plants are so deeply committed to RuBisCo-based photosynthesis that they
    maintain ~40 billion tons of it on Earth and evolved entire secondary
    pathways just to clean up its mistakes.


    This is the biological equivalent of technical debt at civilizational scale.
    The pattern applies directly to startups and technology: once a system
    becomes load-bearing infrastructure (Oracle databases, COBOL banking
    systems, PHP codebases), the rational move is almost always to build
    compensating mechanisms around it rather than replace it. The lesson isn't
    that legacy is bad — it's that the decision to replace vs. compensate should
    be based on whether you can afford the transition cost, not on how
    suboptimal the current system is.
stance: >-
  Organizations and ecosystems persist with demonstrably inferior core systems
  because the cost of wholesale replacement exceeds the cost of compensating for
  inefficiency, making incremental workarounds the rational default.
related:
  - INS-260403-2457
  - INS-260403-D482
  - PRI-260403-C34A
  - INS-260403-F234
  - INS-260403-2CDA
evidence:
  - id: INS-260330-C02D
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260325-3C17
    type: EXTENDS
    classified_at: '2026-04-03'
---
RuBisCo, the enzyme that fixes carbon in photosynthesis, evolved in a low-oxygen atmosphere and fails roughly half the time now that oxygen is abundant — grabbing O2 instead of CO2 and producing a toxic byproduct. Yet plants are so deeply committed to RuBisCo-based photosynthesis that they maintain ~40 billion tons of it on Earth and evolved entire secondary pathways just to clean up its mistakes.

This is the biological equivalent of technical debt at civilizational scale. The pattern applies directly to startups and technology: once a system becomes load-bearing infrastructure (Oracle databases, COBOL banking systems, PHP codebases), the rational move is almost always to build compensating mechanisms around it rather than replace it. The lesson isn't that legacy is bad — it's that the decision to replace vs. compensate should be based on whether you can afford the transition cost, not on how suboptimal the current system is.

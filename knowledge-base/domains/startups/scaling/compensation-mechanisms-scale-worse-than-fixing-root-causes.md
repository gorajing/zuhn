---
id: INS-260330-47CF
domain: startups
topic: scaling
title: Compensation mechanisms scale worse than fixing root causes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - scaling
  - architecture
  - workarounds
  - efficiency
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
    Plants spend enormous metabolic energy producing enzymes to break down
    RuBisCo's toxic byproduct rather than fixing the enzyme itself — the
    biological equivalent of compounding technical debt.
  standard: >-
    When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a
    toxic compound that interferes with the Calvin Cycle. Rather than evolving a
    better RuBisCo, plants evolved entirely separate enzymatic pathways
    (photorespiration) to convert this waste into usable amino acids. They also
    compensate by simply producing massive quantities of RuBisCo.


    This is biological technical debt. The compensation mechanisms work, but
    they consume significant metabolic energy — some estimates suggest
    photorespiration reduces photosynthetic efficiency by 25-30%. In startups,
    the parallel is exact: patching around a bad core architecture (database
    schema, API design, pricing model) with workarounds creates compounding
    overhead. Each workaround works locally but collectively they consume
    engineering resources that could build new value. The lesson: fix the root
    cause early, because compensation mechanisms scale quadratically while the
    underlying flaw remains linear.
stance: >-
  Building workarounds for a flawed core process creates compounding costs that
  eventually dominate system resources.
related:
  - INS-260330-E218
  - INS-260330-8E45
  - INS-260403-8653
  - INS-260403-3E1C
  - INS-260330-EB48
  - INS-260404-B6E8
  - INS-260404-B04F
  - INS-260403-2DC4
evidence:
  - id: INS-260330-68C8
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-E218
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a toxic compound that interferes with the Calvin Cycle. Rather than evolving a better RuBisCo, plants evolved entirely separate enzymatic pathways (photorespiration) to convert this waste into usable amino acids. They also compensate by simply producing massive quantities of RuBisCo.

This is biological technical debt. The compensation mechanisms work, but they consume significant metabolic energy — some estimates suggest photorespiration reduces photosynthetic efficiency by 25-30%. In startups, the parallel is exact: patching around a bad core architecture (database schema, API design, pricing model) with workarounds creates compounding overhead. Each workaround works locally but collectively they consume engineering resources that could build new value. The lesson: fix the root cause early, because compensation mechanisms scale quadratically while the underlying flaw remains linear.

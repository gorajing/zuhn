---
id: INS-260330-4EC0
domain: startups
topic: engineering
title: >-
  RuBisCo is nature's most successful technical debt — 450 million years of
  workarounds instead of a fix
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - path-dependency
  - evolution
  - rubisco
  - workarounds
  - biology
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
    RuBisCo, the most abundant enzyme on Earth, gets confused by oxygen ~50% of
    the time, yet plants dominated by scaling volume and building repair
    pathways rather than evolving a better enzyme.
  standard: >-
    RuBisCo evolved in an atmosphere with abundant CO2 and almost no oxygen.
    When plants' own light reactions flooded the atmosphere with O2, RuBisCo
    started binding oxygen instead of CO2 roughly half the time, creating toxic
    phosphoglycolate. Rather than evolving a replacement enzyme, plants went
    all-in: they produce ~40 billion tons of RuBisCo at any given time and
    evolved entire metabolic pathways (photorespiration) to recycle the toxic
    byproduct.


    This is the biological equivalent of shipping with a known bug and building
    monitoring, error-handling, and recovery systems around it. The lesson for
    engineering: if your imperfect system already has network effects or
    ecosystem lock-in, the winning strategy is often to scale production and
    build workarounds rather than wait for a clean rewrite. The 'right' solution
    can be the enemy of the dominant one.
stance: >-
  Organisms that go all-in on an imperfect core mechanism and build workarounds
  will outcompete those waiting for an optimal solution, even when the mechanism
  fails half the time
related:
  - INS-260330-6ECA
  - INS-260330-43CA
  - INS-260403-D518
  - INS-260403-262F
  - INS-260404-AE3C
evidence:
  - id: INS-260330-AB3C
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
RuBisCo evolved in an atmosphere with abundant CO2 and almost no oxygen. When plants' own light reactions flooded the atmosphere with O2, RuBisCo started binding oxygen instead of CO2 roughly half the time, creating toxic phosphoglycolate. Rather than evolving a replacement enzyme, plants went all-in: they produce ~40 billion tons of RuBisCo at any given time and evolved entire metabolic pathways (photorespiration) to recycle the toxic byproduct.

This is the biological equivalent of shipping with a known bug and building monitoring, error-handling, and recovery systems around it. The lesson for engineering: if your imperfect system already has network effects or ecosystem lock-in, the winning strategy is often to scale production and build workarounds rather than wait for a clean rewrite. The 'right' solution can be the enemy of the dominant one.

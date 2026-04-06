---
id: INS-260404-2695
domain: startups
topic: engineering
title: Legacy lock-in compounds when early design assumptions change
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - path-dependence
  - legacy-systems
  - evolutionary-design
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo evolved when oxygen was scarce; when oxygen rose, plants added
    workarounds instead of replacing it — a pattern mirrored in legacy software.
  standard: >-
    RuBisCo, the most abundant enzyme on Earth (~40 billion tons), was designed
    for a low-oxygen atmosphere. When photosynthesis raised oxygen levels,
    RuBisCo began grabbing O2 instead of CO2 roughly half the time, producing a
    toxic byproduct. Rather than evolving a replacement, plants built detox
    pathways and simply produced massive quantities of RuBisCo to compensate.


    This mirrors how startups and engineering teams go 'all-in' on early
    architectural decisions. When the environment changes (new scale, new
    requirements), the cost of replacing foundational components feels
    prohibitive, so teams pile on workarounds. The workaround tax compounds:
    plants spend enormous energy on RuBisCo production and phosphoglycolate
    recycling. In engineering, technical debt interest payments grow similarly —
    more engineers maintaining legacy adapters than building new features.


    The lesson isn't 'always redesign early' — RuBisCo worked well enough to let
    plants dominate the planet. The lesson is to recognize when workaround costs
    exceed replacement costs, and to audit that ratio periodically rather than
    assuming the original bet is still correct.
stance: >-
  Systems that evolved under one set of environmental constraints will
  accumulate costly workarounds rather than redesign when conditions shift, and
  the workaround cost grows with scale
related:
  - INS-260330-CA97
  - INS-260330-50B3
  - INS-260330-3FF4
  - PRI-260403-53D6
  - INS-260403-F52E
  - INS-260403-D563
  - INS-260403-818F
  - INS-260404-581C
  - INS-260405-7E85
  - INS-260404-5CC6
evidence:
  - id: INS-260405-7E85
    type: SUPPORTS
    classified_at: '2026-04-06'
---
RuBisCo, the most abundant enzyme on Earth (~40 billion tons), was designed for a low-oxygen atmosphere. When photosynthesis raised oxygen levels, RuBisCo began grabbing O2 instead of CO2 roughly half the time, producing a toxic byproduct. Rather than evolving a replacement, plants built detox pathways and simply produced massive quantities of RuBisCo to compensate.

This mirrors how startups and engineering teams go 'all-in' on early architectural decisions. When the environment changes (new scale, new requirements), the cost of replacing foundational components feels prohibitive, so teams pile on workarounds. The workaround tax compounds: plants spend enormous energy on RuBisCo production and phosphoglycolate recycling. In engineering, technical debt interest payments grow similarly — more engineers maintaining legacy adapters than building new features.

The lesson isn't 'always redesign early' — RuBisCo worked well enough to let plants dominate the planet. The lesson is to recognize when workaround costs exceed replacement costs, and to audit that ratio periodically rather than assuming the original bet is still correct.

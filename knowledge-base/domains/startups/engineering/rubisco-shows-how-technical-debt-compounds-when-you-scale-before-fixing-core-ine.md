---
id: INS-260403-F088
domain: startups
topic: engineering
title: >-
  RuBisCo shows how technical debt compounds when you scale before fixing core
  inefficiency
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - architecture
  - path-dependency
  - evolution
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
    RuBisCo is evolution's poster child for technical debt — a mediocre enzyme
    that became unfixable because plants scaled around it.
  standard: >-
    RuBisCo evolved in a low-oxygen atmosphere where its inability to
    distinguish CO2 from O2 didn't matter. As plants flooded the atmosphere with
    oxygen, RuBisCo started grabbing O2 roughly half the time, producing a toxic
    byproduct (phosphoglycolate) that plants must actively detoxify. Rather than
    evolving a better enzyme, plants compensated by producing ~40 billion tons
    of RuBisCo globally and building entire metabolic pathways to clean up its
    mistakes.


    This maps directly to startup engineering: a 'good enough' component chosen
    early becomes load-bearing infrastructure. When the environment changes
    (scale, new requirements), fixing the core is prohibitively expensive, so
    teams layer workarounds. The lesson isn't 'never ship imperfect code' —
    RuBisCo enabled plants to dominate Earth. It's that you should consciously
    track which early shortcuts will compound, because the workaround cost grows
    superlinearly while the replacement window shrinks.
stance: >-
  Scaling a system built on a flawed core component forces increasingly
  expensive workarounds that eventually cost more than the original fix would
  have.
related:
  - INS-260330-3FCF
  - INS-260403-EFAF
  - INS-260403-262F
  - INS-260330-0B8D
  - INS-260403-F68A
  - INS-260404-CC7C
  - INS-260404-5DE4
  - INS-260403-04AF
---
RuBisCo evolved in a low-oxygen atmosphere where its inability to distinguish CO2 from O2 didn't matter. As plants flooded the atmosphere with oxygen, RuBisCo started grabbing O2 roughly half the time, producing a toxic byproduct (phosphoglycolate) that plants must actively detoxify. Rather than evolving a better enzyme, plants compensated by producing ~40 billion tons of RuBisCo globally and building entire metabolic pathways to clean up its mistakes.

This maps directly to startup engineering: a 'good enough' component chosen early becomes load-bearing infrastructure. When the environment changes (scale, new requirements), fixing the core is prohibitively expensive, so teams layer workarounds. The lesson isn't 'never ship imperfect code' — RuBisCo enabled plants to dominate Earth. It's that you should consciously track which early shortcuts will compound, because the workaround cost grows superlinearly while the replacement window shrinks.

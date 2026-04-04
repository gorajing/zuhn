---
id: INS-260403-2457
domain: startups
topic: engineering
title: Legacy systems that 'won' become impossible to replace even when deeply flawed
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - lock-in
  - legacy-systems
  - path-dependence
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
    RuBisCo is terrible at its job but 450 million years of biological
    investment make it irreplaceable — the same pattern traps startups in early
    architectural choices.
  standard: >-
    RuBisCo, the enzyme responsible for carbon fixation in photosynthesis, fails
    roughly half the time by grabbing oxygen instead of CO2, producing a toxic
    byproduct plants must actively detoxify. Yet plants produce 40 billion tons
    of it at any given time rather than evolving a replacement. The reason:
    every downstream system — the Calvin Cycle, photorespiration pathways, amino
    acid synthesis — has been built around RuBisCo's quirks.


    This is the biological equivalent of technical debt at planetary scale.
    Startups face the same dynamic: an early database choice, API design, or
    architectural pattern that 'works well enough' accumulates so many
    dependents that replacing it becomes costlier than maintaining elaborate
    workarounds. The lesson isn't to avoid shipping imperfect systems — that's
    impossible — but to recognize that first architectural choices have
    disproportionate permanence, and to invest in interfaces that allow internal
    replacement without breaking dependents.
stance: >-
  First-mover technical choices that achieve market dominance become permanent
  infrastructure regardless of their inefficiency, because the cost of switching
  exceeds the cost of workarounds.
related:
  - INS-260323-BA00
  - INS-260323-B0EA
  - INS-260330-4983
  - INS-260403-8CD3
  - PRI-260403-C34A
  - INS-260403-D482
  - INS-260330-22C0
  - INS-260403-04AF
  - INS-260403-5755
---
RuBisCo, the enzyme responsible for carbon fixation in photosynthesis, fails roughly half the time by grabbing oxygen instead of CO2, producing a toxic byproduct plants must actively detoxify. Yet plants produce 40 billion tons of it at any given time rather than evolving a replacement. The reason: every downstream system — the Calvin Cycle, photorespiration pathways, amino acid synthesis — has been built around RuBisCo's quirks.

This is the biological equivalent of technical debt at planetary scale. Startups face the same dynamic: an early database choice, API design, or architectural pattern that 'works well enough' accumulates so many dependents that replacing it becomes costlier than maintaining elaborate workarounds. The lesson isn't to avoid shipping imperfect systems — that's impossible — but to recognize that first architectural choices have disproportionate permanence, and to invest in interfaces that allow internal replacement without breaking dependents.

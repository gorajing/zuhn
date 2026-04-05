---
id: INS-260403-3E1C
domain: startups
topic: engineering
title: RuBisCo shows how path dependency makes technical debt permanent
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - path-dependency
  - evolution
  - lock-in
  - rubisco
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
    RuBisCo is a poor enzyme that plants can never replace, so they produce 40
    billion tons of it and build workaround systems instead.
  standard: >-
    RuBisCo evolved when atmospheric oxygen was negligible, so it never needed
    to distinguish CO2 from O2. Once plants used it to dominate the planet, they
    had changed the atmosphere—flooding it with oxygen—making RuBisCo fail half
    the time by grabbing O2 instead of CO2. But by then, every downstream system
    depended on it.


    Rather than evolving a replacement enzyme, plants evolved entirely new
    metabolic pathways (like C4 and CAM photosynthesis) to work around RuBisCo's
    limitations, and they produce massive quantities to compensate for its
    inefficiency. This mirrors software systems where a foundational but flawed
    component becomes impossible to replace because everything depends on it.
    The only viable strategy becomes building compensating layers on top—which
    is exactly what most technical debt management looks like in practice.
stance: >-
  Once a system achieves dominance through a suboptimal core component,
  replacing that component becomes impossible and all future development routes
  around its flaws
related:
  - INS-260327-8048
  - INS-260328-7241
  - INS-260330-0E1E
  - INS-260330-EB48
  - INS-260330-4489
  - INS-260330-47CF
  - INS-260330-11EB
  - INS-260403-D518
  - INS-260404-AE3C
  - INS-260404-1000
evidence:
  - id: INS-260327-8048
    type: SUPPORTS
    classified_at: '2026-04-05'
---
RuBisCo evolved when atmospheric oxygen was negligible, so it never needed to distinguish CO2 from O2. Once plants used it to dominate the planet, they had changed the atmosphere—flooding it with oxygen—making RuBisCo fail half the time by grabbing O2 instead of CO2. But by then, every downstream system depended on it.

Rather than evolving a replacement enzyme, plants evolved entirely new metabolic pathways (like C4 and CAM photosynthesis) to work around RuBisCo's limitations, and they produce massive quantities to compensate for its inefficiency. This mirrors software systems where a foundational but flawed component becomes impossible to replace because everything depends on it. The only viable strategy becomes building compensating layers on top—which is exactly what most technical debt management looks like in practice.

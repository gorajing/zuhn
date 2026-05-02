---
id: INS-260501-2BF8
domain: ai-development
topic: research-methodology
title: >-
  Plan for tech stack rewrites every 2 years — Applied's 4 evolutions in 10
  years is the realistic AI engineering cadence
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - tech-stack-rewrites
  - ai-engineering
  - 2-year-cadence
  - applied-intuition
sources:
  - type: youtube
    title: >-
      The $15B Physical AI Company: Simulation, Autonomy OS, Neural Sim, & 1K
      Engineers—Applied Intuition
    author: Latent Space
    url: 'https://youtu.be/rv23_KcHt4s'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Applied has completely rewritten their stack every ~2 years — 4 times in 10
    years. That's the realistic AI engineering cadence.
  standard: >-
    Lewig's operational reality: Applied Intuition's technology stack has been
    completely rewritten roughly every 2 years. They've done 4 full evolutions
    over 10 years and expect the cadence to continue. They plan engineering
    investment on a 2-year horizon — invest enough to be productive, but stay
    dynamic enough to absorb research breakthroughs and re-architect when
    needed.


    The corollary: trying to over-architect for stability is the wrong move.
    Companies that build elaborate abstractions to insulate themselves from
    changing AI architectures end up with abstractions that fight the new
    architecture in 18 months. The right pattern is: build minimum-viable
    abstractions for current capability, plan for the rewrite, and invest in
    test/eval infrastructure that survives stack changes (because the
    requirements are stable even when the implementation is volatile).


    For builders: stop optimizing for 5-year stack stability. Optimize for 'how
    cheap is it to do the next stack rewrite?' That includes good test coverage,
    clear interfaces between components, and avoiding deep coupling to specific
    frameworks. For Zuhn editorially: this is direct material on why 'AI
    engineering' is genuinely different from traditional software engineering —
    the underlying capability is changing fast enough that engineering practices
    have to be different. The companies that win are the ones that build for
    change, not against it.
stance: >-
  Companies that build long-running AI products should plan for complete tech
  stack rewrites every ~2 years rather than trying to architect for stability —
  Applied Intuition has done 4 full stack evolutions in 10 years and treats this
  2-year horizon as the planning unit, which is the operational reality of
  building on a research frontier.
related:
  - INS-260410-52C8
  - PRI-260406-AFA7
  - INS-260330-C0E2
  - INS-260327-969D
  - INS-260327-CED9
---
Lewig's operational reality: Applied Intuition's technology stack has been completely rewritten roughly every 2 years. They've done 4 full evolutions over 10 years and expect the cadence to continue. They plan engineering investment on a 2-year horizon — invest enough to be productive, but stay dynamic enough to absorb research breakthroughs and re-architect when needed.

The corollary: trying to over-architect for stability is the wrong move. Companies that build elaborate abstractions to insulate themselves from changing AI architectures end up with abstractions that fight the new architecture in 18 months. The right pattern is: build minimum-viable abstractions for current capability, plan for the rewrite, and invest in test/eval infrastructure that survives stack changes (because the requirements are stable even when the implementation is volatile).

For builders: stop optimizing for 5-year stack stability. Optimize for 'how cheap is it to do the next stack rewrite?' That includes good test coverage, clear interfaces between components, and avoiding deep coupling to specific frameworks. For Zuhn editorially: this is direct material on why 'AI engineering' is genuinely different from traditional software engineering — the underlying capability is changing fast enough that engineering practices have to be different. The companies that win are the ones that build for change, not against it.

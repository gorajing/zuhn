---
id: INS-260605-ACB3
domain: ai-development
topic: agents
title: Earn agent autonomy with a graduated exposure ladder gated by outcome evidence
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - autonomy
  - deployment
  - evals
  - shadow-mode
  - trust
  - agentic-systems
sources:
  - type: youtube
    title: >-
      Most Enterprise Agentic Projects Are Doomed, Here's Why — Jess
      Grogan-Avignon & Jack Wang, Accenture
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=AGkzpxMdPn8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deploy agents up an 'exposure ladder' — shadow mode, then advisory, then
    controlled autonomy with kill switches — where each promotion is gated by
    confidence in outcomes, not completion of a project plan.
  standard: >-
    Many enterprises treat agents like traditional automation: build it, turn it
    on, let it run. But agent behavior is emergent and non-deterministic, so you
    cannot foresee and test every response up front. The speakers prescribe
    'progressive autonomy' via an exposure ladder. (1) Shadow mode: the agent
    runs alongside humans but can't affect outcomes; you compare its decisions
    to human decisions as a signal to iterate. (2) Advisory mode: the agent runs
    live but only recommends, with humans approving or rejecting — generating
    another signal. (3) Controlled autonomy: the agent triggers actions but only
    in narrow, low-risk scenarios with clear limits and kill switches. (4) Wider
    autonomy: extended over time as confidence in target behaviors is
    established. The crucial design principle is that each promotion is gated by
    evidence in actual outcomes — not by completing activities in a project plan
    or by pass/fail testing. Eval suites matter, but the deployment philosophy
    is to 'engineer for trust, not just for completion,' because what survives
    over time is accumulated trust, not any individual shipped feature.
stance: >-
  Agent autonomy should be increased gradually through shadow, advisory, and
  controlled stages, each gated by evidence in real outcomes rather than project
  milestones.
related:
  - INS-260403-C355
  - INS-260501-4C5E
  - INS-260619-B1A8
  - INS-260605-3AAF
  - INS-260626-D768
---
Many enterprises treat agents like traditional automation: build it, turn it on, let it run. But agent behavior is emergent and non-deterministic, so you cannot foresee and test every response up front. The speakers prescribe 'progressive autonomy' via an exposure ladder. (1) Shadow mode: the agent runs alongside humans but can't affect outcomes; you compare its decisions to human decisions as a signal to iterate. (2) Advisory mode: the agent runs live but only recommends, with humans approving or rejecting — generating another signal. (3) Controlled autonomy: the agent triggers actions but only in narrow, low-risk scenarios with clear limits and kill switches. (4) Wider autonomy: extended over time as confidence in target behaviors is established. The crucial design principle is that each promotion is gated by evidence in actual outcomes — not by completing activities in a project plan or by pass/fail testing. Eval suites matter, but the deployment philosophy is to 'engineer for trust, not just for completion,' because what survives over time is accumulated trust, not any individual shipped feature.

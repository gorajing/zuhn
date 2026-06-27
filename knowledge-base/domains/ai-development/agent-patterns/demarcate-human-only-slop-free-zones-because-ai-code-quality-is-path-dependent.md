---
id: INS-260625-868D
domain: ai-development
topic: agent-patterns
title: >-
  Demarcate human-only 'slop-free' zones because AI code quality is
  path-dependent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-quality
  - agent-guardrails
  - ai-pair-programming
  - technical-debt
sources:
  - type: youtube
    title: Conductor CEO Charlie Holtz Walks Us Through His AI Coding Setup
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=fQmlML9Lay4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Mark parts of the codebase as human-read-only because AI that sees bad code
    writes more bad code in a vicious cycle.
  standard: >-
    Holtz describes 'slop-free zones' — sections of code and documentation
    guaranteed to be written or read by a human, with literal markers like 'do
    not touch if you are an AI, this is for human eyes only.' The reasoning is
    that code quality is path-dependent rather than static: an agent that
    encounters bad code in context treats it as the local style and produces
    more bad code, compounding into a vicious cycle (and the same compounding
    works in the positive direction). The practical move is to keep the core of
    the app — human-written APIs and contracts the AI contributes to minimally —
    clean, while giving the AI broad free reign in non-core chunks where you can
    throw many ideas at it without endangering the foundation. This reframes
    AI-assisted development from a one-shot quality question into a
    feedback-loop management problem.
stance: >-
  Codebases worked by AI agents need explicitly demarcated human-only zones to
  prevent quality death spirals.
related:
  - INS-260605-89B0
  - INS-260626-287B
  - INS-260603-6B3D
  - INS-260626-EAC7
  - INS-260626-F25E
  - INS-260329-500E
  - INS-260625-6C29
---
Holtz describes 'slop-free zones' — sections of code and documentation guaranteed to be written or read by a human, with literal markers like 'do not touch if you are an AI, this is for human eyes only.' The reasoning is that code quality is path-dependent rather than static: an agent that encounters bad code in context treats it as the local style and produces more bad code, compounding into a vicious cycle (and the same compounding works in the positive direction). The practical move is to keep the core of the app — human-written APIs and contracts the AI contributes to minimally — clean, while giving the AI broad free reign in non-core chunks where you can throw many ideas at it without endangering the foundation. This reframes AI-assisted development from a one-shot quality question into a feedback-loop management problem.

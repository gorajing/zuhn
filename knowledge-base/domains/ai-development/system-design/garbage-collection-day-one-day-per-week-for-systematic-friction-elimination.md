---
id: INS-260514-6EE6
domain: ai-development
topic: system-design
title: Garbage Collection Day — one day per week for systematic friction elimination
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - garbage-collection
  - friction-elimination
  - process-design
  - systematic-improvement
sources:
  - type: youtube
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute —\_Ryan Lopopolo, OpenAI"
    author: AI Engineer
    url: 'https://youtu.be/am_oeAoUhew'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One day a week, every engineer's job is to take every bit of weekly slop and
    categorically eliminate it from happening again. Compounds dramatically.
  standard: >-
    Lopopolo's team practice: every Friday is 'Garbage Collection Day.' Each
    engineer's entire job is to take the categories of slop they observed during
    the week (recurring code review comments, agent failure modes, merge
    conflict patterns) and figure out ways to systematically eliminate them.
    Each piece of feedback becomes a lint rule, a test assertion, a
    documentation update, or a reviewer agent enhancement. The feedback that
    humans were synchronously giving on PRs becomes automatic context injection
    that the next agent attempt selfheals against. Result over months: slop
    reduces, PR cycle time compresses, merge conflicts drop, humans no longer
    block on review.


    Application: institute a Garbage Collection Day or equivalent rhythm in any
    team using agent-driven development. The pattern compounds — feedback that
    would have been ephemeral becomes durable infrastructure. For Memric
    specifically: a Friday-style 'audit retrospective' practice where the team
    takes the previous week's audit-delivery friction and converts it into
    reusable schemas, validators, and template improvements is the same
    compounding pattern at the deliverable level.
stance: >-
  When code is free and agent throughput is bottlenecked by human review
  friction, the highest-leverage practice is dedicating one day per week (Friday
  in Lopopolo's team) where every engineer's entire job is to take the slop they
  observed during the week and systematically eliminate it via lints, tests,
  docs, or harness changes — converting one-time review feedback into durable
  infrastructure.
related:
  - INS-260330-A1D2
  - INS-260412-7FF8
  - INS-260514-6561
  - INS-260403-7D1D
  - INS-260514-8413
---
Lopopolo's team practice: every Friday is 'Garbage Collection Day.' Each engineer's entire job is to take the categories of slop they observed during the week (recurring code review comments, agent failure modes, merge conflict patterns) and figure out ways to systematically eliminate them. Each piece of feedback becomes a lint rule, a test assertion, a documentation update, or a reviewer agent enhancement. The feedback that humans were synchronously giving on PRs becomes automatic context injection that the next agent attempt selfheals against. Result over months: slop reduces, PR cycle time compresses, merge conflicts drop, humans no longer block on review.

Application: institute a Garbage Collection Day or equivalent rhythm in any team using agent-driven development. The pattern compounds — feedback that would have been ephemeral becomes durable infrastructure. For Memric specifically: a Friday-style 'audit retrospective' practice where the team takes the previous week's audit-delivery friction and converts it into reusable schemas, validators, and template improvements is the same compounding pattern at the deliverable level.

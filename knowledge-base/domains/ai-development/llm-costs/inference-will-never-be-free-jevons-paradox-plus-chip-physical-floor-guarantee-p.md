---
id: INS-260501-AF40
domain: ai-development
topic: llm-costs
title: >-
  Inference will never be free — Jevons paradox plus chip-physical floor
  guarantee perpetual rationing
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - jevons-paradox
  - inference-cost
  - rationing
  - chip-physical-limits
sources:
  - type: youtube
    title: 'Demis Hassabis: Agents, AGI & The Next Big Scientific Breakthrough'
    author: Y Combinator
    url: 'https://youtu.be/JNyuX1zoOgU'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cheaper inference doesn't mean free inference — we'll just use more of it
    (agent swarms, ensembled reasoning, parallel chains-of-thought).
  standard: >-
    Hassabis on the 'what if inference becomes free' hypothetical: he doesn't
    think it ever will. Two binding constraints persist: (1) Jevons paradox —
    anything we can get our hands on, we'll consume. Even if per-token cost
    drops 100x, demand grows by more (millions of agents in swarms, ensembled
    reasoning across many directions, multi-agent collaboration). (2) Even if
    energy costs go to zero (fusion, optimal batteries, superconductors — all of
    which Hassabis thinks AI will help solve), the physical creation of chips
    remains a non-zero floor for at least the next few decades.


    The operational implication: 'free inference' is a planning fiction.
    Builders should not assume cost goes to zero — they should assume per-token
    cost drops at a rate slower than capability grows, leaving inference-budget
    pressure as a permanent design constraint. The corollary for product
    strategy: the highest-leverage products are those where inference cost falls
    faster than user value grows, not those that assume infinite inference. For
    Zuhn editorially, this is direct ammunition against the 'just throw more
    inference at it' school of agent design.
stance: >-
  Even when energy hits near-zero (fusion, perfect batteries), the physical
  creation of chips remains a binding constraint — and Jevons paradox ensures
  all available inference will be consumed by swarms of agents and ensembled
  reasoning, so rationing on inference will persist for decades.
related:
  - INS-260327-991D
  - INS-260424-0554
  - INS-260605-D055
  - INS-260423-6172
  - INS-260625-0D5D
---
Hassabis on the 'what if inference becomes free' hypothetical: he doesn't think it ever will. Two binding constraints persist: (1) Jevons paradox — anything we can get our hands on, we'll consume. Even if per-token cost drops 100x, demand grows by more (millions of agents in swarms, ensembled reasoning across many directions, multi-agent collaboration). (2) Even if energy costs go to zero (fusion, optimal batteries, superconductors — all of which Hassabis thinks AI will help solve), the physical creation of chips remains a non-zero floor for at least the next few decades.

The operational implication: 'free inference' is a planning fiction. Builders should not assume cost goes to zero — they should assume per-token cost drops at a rate slower than capability grows, leaving inference-budget pressure as a permanent design constraint. The corollary for product strategy: the highest-leverage products are those where inference cost falls faster than user value grows, not those that assume infinite inference. For Zuhn editorially, this is direct ammunition against the 'just throw more inference at it' school of agent design.

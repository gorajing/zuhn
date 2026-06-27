---
id: INS-260627-30F9
domain: ai-development
topic: system-design
title: >-
  Design the codebase as agent-legible infrastructure and enforce it
  mechanically
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-legible-codebase
  - linting
  - modularization
  - system-design
  - token-efficiency
sources:
  - type: youtube
    title: >-
      The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro,
      Earendil
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_Zcw_sVF6hU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat your codebase as infrastructure designed for the agent: modularize,
    follow known patterns, remove hidden magic, and enforce it all with linting
    so the agent's strengths compound.
  standard: >-
    Once the codebase is the thing agents operate on, it becomes infrastructure
    that must be legible to them. Concrete moves: modularize so a feature can be
    added in one spot without corrupting everything — including modularizing the
    *control flow* itself, because the fuzz an agent adds (parsing between
    types, stuffing things into state) tends to appear in the undefined gaps
    between your clearly-named steps. Lean into the RL by following
    known/conventional patterns rather than fighting them. Keep a simple core
    and push complexity to other abstraction layers. Critically, remove hidden
    magic — React server actions or an ORM over raw SQL hide intent from the
    agent, and 'if the agent can't see it, it can't respect it.' Then enforce
    these properties mechanically through linting rather than discipline: no
    bare catch-alls, a single query interface so SQL isn't scattered, one
    primitives/UI component library for consistency, no dynamic imports, and
    even unique function names — which improve legibility and token efficiency,
    because a grep that returns one result keeps the agent's loop on track.
    Erasable syntax-only TypeScript gives one source of truth between code and
    compiler so the agent finds errors without transpilation confusion.
stance: >-
  An agent can only respect what it can see, so codebases should be designed for
  legibility — modular, no hidden magic, conventional patterns — and enforced
  with linting rules rather than hoped for.
related:
  - INS-260626-5375
  - INS-260605-25B2
  - INS-260627-0C43
  - INS-260625-3866
  - INS-260524-63C9
---
Once the codebase is the thing agents operate on, it becomes infrastructure that must be legible to them. Concrete moves: modularize so a feature can be added in one spot without corrupting everything — including modularizing the *control flow* itself, because the fuzz an agent adds (parsing between types, stuffing things into state) tends to appear in the undefined gaps between your clearly-named steps. Lean into the RL by following known/conventional patterns rather than fighting them. Keep a simple core and push complexity to other abstraction layers. Critically, remove hidden magic — React server actions or an ORM over raw SQL hide intent from the agent, and 'if the agent can't see it, it can't respect it.' Then enforce these properties mechanically through linting rather than discipline: no bare catch-alls, a single query interface so SQL isn't scattered, one primitives/UI component library for consistency, no dynamic imports, and even unique function names — which improve legibility and token efficiency, because a grep that returns one result keeps the agent's loop on track. Erasable syntax-only TypeScript gives one source of truth between code and compiler so the agent finds errors without transpilation confusion.

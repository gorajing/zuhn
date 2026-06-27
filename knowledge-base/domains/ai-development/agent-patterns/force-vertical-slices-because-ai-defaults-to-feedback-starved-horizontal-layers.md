---
id: INS-260626-4A3B
domain: ai-development
topic: agent-patterns
title: >-
  Force vertical slices because AI defaults to feedback-starved horizontal
  layers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - vertical-slices
  - traceable-bullets
  - feedback-loops
  - task-decomposition
  - kanban
sources:
  - type: youtube
    title: 'Full Walkthrough: Workflow for AI Coding — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-QFHIoCo-Ko'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI loves to code layer-by-layer (all schema, then all API, then all
    frontend), which delays any integrated feedback until the last phase; force
    'traceable bullet' vertical slices that each touch schema + service + a
    minimal UI so every slice is testable end-to-end.
  standard: >-
    Pocock imports the Pragmatic Programmer's 'tracer bullets / vertical slices'
    idea as a fix for a specific AI failure mode: left to itself, an agent
    builds horizontally — finishing the whole database layer, then the whole
    API, then the frontend — so you get no feedback that the layers integrate
    until phase three, when it's expensive to discover problems. The
    tracer-bullet metaphor (every few rounds you see a glowing line showing
    where your fire is actually going) captures the point: each slice gives
    near-instant feedback on the real end-to-end flow instead of coding blind.


    In practice he watches for the agent proposing a single-layer first task
    (e.g., 'create the gamification service' alone) and corrects it: 'the first
    slice is too horizontal,' demanding the first slice include schema changes,
    a new service, and a minimal frontend representation. A good slice ('award
    points for lesson completion, visible on dashboard') is large but produces
    something visible the AI can then extend.


    Vertical slices also feed his Kanban-DAG approach: independently-grabbable
    issues with explicit blocking relationships form a directed acyclic graph
    that multiple agents can work in parallel, unlike a sequential multi-phase
    plan that only one agent can loop over. The decomposition shape is therefore
    chosen to maximize both early feedback and parallelism.
stance: >-
  Instructing AI to build thin vertical slices that cross every layer beats its
  natural tendency to complete each layer horizontally, because it delivers
  integrated feedback far earlier.
related:
  - INS-260410-BB93
  - INS-260605-25B2
  - PRI-260403-9E80
  - PRI-260405-2A95
  - INS-260605-9E46
---
Pocock imports the Pragmatic Programmer's 'tracer bullets / vertical slices' idea as a fix for a specific AI failure mode: left to itself, an agent builds horizontally — finishing the whole database layer, then the whole API, then the frontend — so you get no feedback that the layers integrate until phase three, when it's expensive to discover problems. The tracer-bullet metaphor (every few rounds you see a glowing line showing where your fire is actually going) captures the point: each slice gives near-instant feedback on the real end-to-end flow instead of coding blind.

In practice he watches for the agent proposing a single-layer first task (e.g., 'create the gamification service' alone) and corrects it: 'the first slice is too horizontal,' demanding the first slice include schema changes, a new service, and a minimal frontend representation. A good slice ('award points for lesson completion, visible on dashboard') is large but produces something visible the AI can then extend.

Vertical slices also feed his Kanban-DAG approach: independently-grabbable issues with explicit blocking relationships form a directed acyclic graph that multiple agents can work in parallel, unlike a sequential multi-phase plan that only one agent can loop over. The decomposition shape is therefore chosen to maximize both early feedback and parallelism.

---
id: INS-260627-5F5A
domain: ai-development
topic: agent-patterns
title: >-
  Prefer durable execution over graph frameworks when the real need is
  resumption, not branching
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - graph-frameworks
  - orchestration
  - parallelism
  - architecture-choice
sources:
  - type: youtube
    title: 'From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=flf_IKnFYnE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you're tempted to adopt a graph framework mainly to get snapshotting and
    resumption, durable execution offers finer-grained recovery while letting
    you keep writing ordinary imperative code.
  standard: >-
    Graph-based agent frameworks are often adopted to get state snapshotting and
    the ability to resume long runs. Colvin's claim is that durable execution
    gives you 'much more granular support' for exactly that, without forcing
    your logic into nodes and edges. Inside a durable workflow, parallelism is
    just a Python task group or asyncio.gather, a week-long pause is just
    sleep(7 days) with the framework handling the suspension, and retries on
    flaky endpoints happen automatically — all while the code reads like the
    imperative program you'd write anyway. Resumption needed zero
    resume-specific code in the agent itself.


    The design heuristic: choose your orchestration primitive by what the
    problem actually requires. If the genuine need is fault tolerance,
    checkpointing, and resumption of a fundamentally linear-or-parallel
    pipeline, durable execution is the lower-ceremony fit. Reserve graph
    frameworks for control flow that is genuinely graph-shaped — complex
    conditional branching, cycles, and dynamic routing — rather than reaching
    for them by default to solve a state-persistence problem they only
    incidentally address.
stance: >-
  When the problem is snapshotting and resuming a long agent run, durable
  execution beats a graph framework because it keeps your code plain imperative.
related:
  - INS-260605-434D
  - INS-260627-D190
  - INS-260627-44FD
  - INS-260327-4CB3
  - INS-260328-A46F
  - INS-260627-E496
---
Graph-based agent frameworks are often adopted to get state snapshotting and the ability to resume long runs. Colvin's claim is that durable execution gives you 'much more granular support' for exactly that, without forcing your logic into nodes and edges. Inside a durable workflow, parallelism is just a Python task group or asyncio.gather, a week-long pause is just sleep(7 days) with the framework handling the suspension, and retries on flaky endpoints happen automatically — all while the code reads like the imperative program you'd write anyway. Resumption needed zero resume-specific code in the agent itself.

The design heuristic: choose your orchestration primitive by what the problem actually requires. If the genuine need is fault tolerance, checkpointing, and resumption of a fundamentally linear-or-parallel pipeline, durable execution is the lower-ceremony fit. Reserve graph frameworks for control flow that is genuinely graph-shaped — complex conditional branching, cycles, and dynamic routing — rather than reaching for them by default to solve a state-persistence problem they only incidentally address.

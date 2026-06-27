---
id: INS-260605-D777
domain: ai-development
topic: agent-patterns
title: >-
  Write a validation contract before any code so correctness is defined
  independently of implementation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - validation
  - multi-agent
  - specifications
  - verification
  - drift
sources:
  - type: youtube
    title: 'The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Author a validation contract of assertions during planning—before coding—and
    map each feature to the assertions it must satisfy.
  standard: >-
    Factory's Missions front-loads a 'validation contract' during the
    orchestrator's planning phase: hundreds of assertions defining correctness,
    written before any code exists. Each feature is assigned one or more
    assertions, and the union of all features must cover every assertion. This
    inverts the common failure mode where tests are written after
    implementation. As Alvoeiro puts it, 'tests written after implementation
    don't catch bugs, they confirm decisions'—they are shaped by the code rather
    than by what the code was supposed to do, so a system relying on them
    eventually drifts. By defining correctness independently of implementation
    up front, validation becomes a fixed target the agents are measured against
    rather than a rationalization of whatever they happened to build. For anyone
    building autonomous coding systems, the actionable move is to separate the
    specification of 'what done means' in time and authorship from the code that
    satisfies it.
stance: >-
  Defining 'done' as assertions written during planning, before code exists,
  prevents long-running agent systems from drifting.
related:
  - INS-260404-D711
  - INS-260409-F4AA
  - INS-260605-7FEA
  - INS-260626-A2B9
  - PRI-260406-F51A
  - INS-260605-EA2E
  - INS-260627-3053
---
Factory's Missions front-loads a 'validation contract' during the orchestrator's planning phase: hundreds of assertions defining correctness, written before any code exists. Each feature is assigned one or more assertions, and the union of all features must cover every assertion. This inverts the common failure mode where tests are written after implementation. As Alvoeiro puts it, 'tests written after implementation don't catch bugs, they confirm decisions'—they are shaped by the code rather than by what the code was supposed to do, so a system relying on them eventually drifts. By defining correctness independently of implementation up front, validation becomes a fixed target the agents are measured against rather than a rationalization of whatever they happened to build. For anyone building autonomous coding systems, the actionable move is to separate the specification of 'what done means' in time and authorship from the code that satisfies it.

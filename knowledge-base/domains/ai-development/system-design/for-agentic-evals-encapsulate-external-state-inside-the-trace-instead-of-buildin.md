---
id: INS-260605-A2AD
domain: ai-development
topic: system-design
title: >-
  For agentic evals, encapsulate external state inside the trace instead of
  building test infra
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - tracing
  - tool-calls
  - state-management
sources:
  - type: youtube
    title: 'The maturity phases of running evals — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FB-MLPhL9Ms'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When agents call CRUD/context tools, evaluate the whole trace and cram
    external system state into the trace itself rather than rebuilding test
    infrastructure.
  standard: >-
    Once an agent interacts with external systems via tools — both
    context-gathering tools and CRUD tools that mutate databases — two hard
    problems appear. You can no longer evaluate just the final output; you must
    evaluate the entire trace, targeting individual tool or MCP calls. And
    running evals offline is dangerous: you can't easily reproduce the external
    system state as it existed when the input was captured, and you risk
    overwriting real production data by actually executing the CRUD.


    Hetzel's key technique exploits a property of agent traces: unlike
    application traces, they can be arbitrarily large. So instead of
    constructing full test infrastructure, you can cram the external system
    state into the trace itself and inject it into the task being evaluated —
    encapsulating the environment within the trace. Complementary approaches
    include mock-level APIs to approximate a production environment, and
    timestamp/version queries against systems that support them (e.g. querying a
    vector database as of the moment the original task ran) to faithfully
    reconstruct state. Hetzel is candid that this problem is not fully solved;
    these are emerging techniques.
stance: >-
  Arbitrarily large agent traces should carry external-system state so you can
  reconstruct production conditions without standing up parallel test
  infrastructure.
related:
  - INS-260327-9D50
  - INS-260605-CF2E
  - INS-260605-58DA
  - INS-260605-726C
  - INS-260605-7843
  - INS-260605-A3F4
  - INS-260605-93B8
  - INS-260605-159E
  - INS-260605-3163
  - INS-260605-83DA
---
Once an agent interacts with external systems via tools — both context-gathering tools and CRUD tools that mutate databases — two hard problems appear. You can no longer evaluate just the final output; you must evaluate the entire trace, targeting individual tool or MCP calls. And running evals offline is dangerous: you can't easily reproduce the external system state as it existed when the input was captured, and you risk overwriting real production data by actually executing the CRUD.

Hetzel's key technique exploits a property of agent traces: unlike application traces, they can be arbitrarily large. So instead of constructing full test infrastructure, you can cram the external system state into the trace itself and inject it into the task being evaluated — encapsulating the environment within the trace. Complementary approaches include mock-level APIs to approximate a production environment, and timestamp/version queries against systems that support them (e.g. querying a vector database as of the moment the original task ran) to faithfully reconstruct state. Hetzel is candid that this problem is not fully solved; these are emerging techniques.

---
id: INS-260605-9E7A
domain: ai-development
topic: agent-patterns
title: >-
  Let sub-agents write directly to a shared session instead of proxying through
  the orchestrator
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - orchestration
  - fan-out
  - pub-sub
  - architecture
sources:
  - type: youtube
    title: >-
      Why Your AI UX Is Broken (and It's Not the Model's Fault) — Mike
      Christensen, Ably
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YNJvm7t3yq8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In multi-agent systems, have each agent publish independently to the shared
    session so the orchestrator only handles final results, not progress relay.
  standard: >-
    In a typical multi-agent setup, an orchestrator delegates subtasks to
    specialized agents and is then forced into a dual role: orchestrating the
    task AND proxying every granular progress update from sub-agents back to the
    client. But the orchestrator usually only cares about the final results —
    relaying progress is accidental complexity. With a durable session, all
    agents (orchestrator and sub-agents) write independently to the same shared
    layer. Clients subscribe to a single entity — the session — and get full
    visibility into every agent's activity plus other clients' activity, with no
    centralized progress relay. This drastically simplifies the architecture and
    removes the orchestrator as a bottleneck.
stance: >-
  Routing every sub-agent's granular progress back through the orchestrator
  overloads it with a relay job it shouldn't own.
related:
  - INS-260327-5EEA
  - INS-260411-52C8
  - INS-260626-2447
  - INS-260627-8425
  - PRI-260328-1ED1
  - INS-260327-C1A4
---
In a typical multi-agent setup, an orchestrator delegates subtasks to specialized agents and is then forced into a dual role: orchestrating the task AND proxying every granular progress update from sub-agents back to the client. But the orchestrator usually only cares about the final results — relaying progress is accidental complexity. With a durable session, all agents (orchestrator and sub-agents) write independently to the same shared layer. Clients subscribe to a single entity — the session — and get full visibility into every agent's activity plus other clients' activity, with no centralized progress relay. This drastically simplifies the architecture and removes the orchestrator as a bottleneck.

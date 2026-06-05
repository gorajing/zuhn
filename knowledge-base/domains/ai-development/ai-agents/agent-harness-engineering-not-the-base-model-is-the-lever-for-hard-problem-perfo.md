---
id: INS-260524-2C7C
domain: ai-development
topic: ai-agents
title: >-
  Agent harness engineering, not the base model, is the lever for hard-problem
  performance
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - harness-engineering
  - agent-architecture
  - orchestration
  - memory
sources:
  - type: audio
    title: Chapter
date_extracted: '2026-05-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Woosang: 'we don't make an AI agent to just do something — we need a
    harness'; orchestration (tool-call -> verify -> reflect -> cycle) and memory
    drive performance.
  standard: >-
    Woosang repeatedly stresses 'harness engineering': applying
    production-system discipline to wrap models in orchestration (tool calls,
    verification, reflection cycles), with memory (retrieval/ranking/history)
    and early thinking/planning as the highest-leverage steps. He observes that
    adding a strong model to a good harness moved benchmark performance
    substantially. Reinforces the KB pattern (Jongmin, the YC company-brain
    talk) that the scaffolding/context around the model — not the model alone —
    is where capability is won.
stance: >-
  How you wrap a model — multi-stage planning, verification, reflection cycles,
  a specialized expert per sub-problem, and memory — determines agentic
  performance on hard problems more than swapping the underlying model.
related:
  - INS-260410-8ECF
  - INS-260410-A9CE
  - INS-260514-4FDC
  - INS-260514-2E48
  - INS-260514-283E
  - INS-260514-E481
  - INS-260519-08E0
  - INS-260524-B783
  - PRI-260426-890F
  - INS-260603-6B3D
---
Woosang repeatedly stresses 'harness engineering': applying production-system discipline to wrap models in orchestration (tool calls, verification, reflection cycles), with memory (retrieval/ranking/history) and early thinking/planning as the highest-leverage steps. He observes that adding a strong model to a good harness moved benchmark performance substantially. Reinforces the KB pattern (Jongmin, the YC company-brain talk) that the scaffolding/context around the model — not the model alone — is where capability is won.

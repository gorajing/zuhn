---
id: INS-260605-D818
domain: ai-development
topic: system-building
title: Self-improving harnesses need editable components as files
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-engineering
  - self-improvement
  - observability
  - revertibility
  - agent-tools
sources:
  - type: blog
    title: >-
      Agentic Harness Engineering: Observability-Driven Automatic Evolution of
      Coding-Agent Harnesses
    url: 'https://arxiv.org/abs/2604.25850'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Make harness components file-visible before asking agents to improve them.
  standard: >-
    Agentic Harness Engineering identifies heterogeneous editable components as
    a core blocker to automated harness improvement. Its first pillar, component
    observability, turns each editable harness component into a file-level
    representation so the action space is explicit and changes are revertible.


    For local agent workflows, this argues against hidden UI-only configuration
    or opaque hosted settings. Skills, hooks, tool manifests, approval policies,
    prompts, and eval gates should live in files the agent can inspect, diff,
    patch, test, and revert. Self-improvement needs a legible control surface
    before it needs a smarter optimizer.
stance: >-
  A harness cannot evolve safely unless every editable component is represented
  as a file-level, explicit, revertible action surface.
related:
  - INS-260605-013A
  - INS-260514-4FDC
  - PRI-260426-890F
  - INS-260627-C7D2
  - INS-260514-283E
---
Agentic Harness Engineering identifies heterogeneous editable components as a core blocker to automated harness improvement. Its first pillar, component observability, turns each editable harness component into a file-level representation so the action space is explicit and changes are revertible.

For local agent workflows, this argues against hidden UI-only configuration or opaque hosted settings. Skills, hooks, tool manifests, approval policies, prompts, and eval gates should live in files the agent can inspect, diff, patch, test, and revert. Self-improvement needs a legible control surface before it needs a smarter optimizer.

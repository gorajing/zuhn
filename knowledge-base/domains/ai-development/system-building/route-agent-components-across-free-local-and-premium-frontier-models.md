---
id: INS-260605-8E08
domain: ai-development
topic: system-building
title: Route agent components across free local and premium frontier models
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - model-routing
  - cost-optimization
  - agents
  - local-models
sources:
  - type: youtube
    title: >-
      How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian Ballantyne,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7gujZrJ9L5I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use effectively-free local models (e.g. Gemma) for cheap steps and reserve
    frontier models for components that actually need them.
  standard: >-
    KP frames heterogeneous model routing as the most interesting near-term
    lever: models that run on your own GPUs/TPUs are 'effectively free from a
    quota perspective,' so the architecture question becomes which specific
    components of the agentic pipeline genuinely require an advanced model
    versus which can be served by a free local one.


    This reframes cost optimization as an architectural decision made at design
    time, not a runtime knob. Most agent pipelines have many low-stakes steps
    (formatting, routing, simple extraction, classification) that don't need a
    frontier model. Identifying those and pinning them to a local model
    collapses the quota bill while preserving quality on the steps that matter.
    The corollary for eval: DeepMind explores 'mock TPUs' so they can test the
    harness and agentic flow without burning real TPU hours — separate the cost
    of testing orchestration logic from the cost of running real inference.
stance: >-
  Mixing quota-free local models with premium models per-component is the
  primary lever for making agentic systems cost-viable at scale.
related:
  - INS-260403-72C2
  - INS-260505-ABCC
  - INS-260605-B82E
  - INS-260625-DD6B
  - INS-260408-C572
---
KP frames heterogeneous model routing as the most interesting near-term lever: models that run on your own GPUs/TPUs are 'effectively free from a quota perspective,' so the architecture question becomes which specific components of the agentic pipeline genuinely require an advanced model versus which can be served by a free local one.

This reframes cost optimization as an architectural decision made at design time, not a runtime knob. Most agent pipelines have many low-stakes steps (formatting, routing, simple extraction, classification) that don't need a frontier model. Identifying those and pinning them to a local model collapses the quota bill while preserving quality on the steps that matter. The corollary for eval: DeepMind explores 'mock TPUs' so they can test the harness and agentic flow without burning real TPU hours — separate the cost of testing orchestration logic from the cost of running real inference.

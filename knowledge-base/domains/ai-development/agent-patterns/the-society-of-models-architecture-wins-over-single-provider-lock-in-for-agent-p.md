---
id: INS-260501-A1C7
domain: ai-development
topic: agent-patterns
title: >-
  The society-of-models architecture wins over single-provider lock-in for agent
  products
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - multi-model
  - society-of-models
  - agent-routing
  - provider-diversity
sources:
  - type: youtube
    title: >-
      Replit CEO: Why the SaaS Apocalypse is Justified & Why Coding Models are
      Plateauing | Amjad Masad
    author: 20VC with Harry Stebbings
    url: 'https://youtu.be/pN-CK54ms2c'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Amjad Masad: we use models from every provider — at one point we sent more
    tokens to Google than to Anthropic despite Anthropic being the core
    workhorse.
  standard: >-
    The naive agent architecture commits all inference to a single foundation
    model, treating provider choice as a one-time decision. Replit's production
    architecture treats provider choice as a per-request routing decision. The
    core long-running coherent loop runs on Anthropic (which excels at
    multi-step coherence). Search subtasks route to Gemini (which excels at
    price-performance for that workload). Design tasks also route to Gemini
    (which excels at design fidelity). Narrow domain tasks route to internal
    fine-tuned models (which excel at the specific task at lower cost). The
    architectural pattern: a router agent classifies the task and dispatches to
    the model best suited for it, and the orchestration layer handles the
    cross-provider coherence. The benefits compound: better task-specific
    capability, better unit economics, lower switching cost when any provider
    changes pricing or capability, and structural protection against any single
    provider's outages or strategic moves. The cost: an internal capability for
    evaluating models and maintaining the routing logic — Replit calls this an
    'agent lab' and treats it as core IP.
stance: >-
  Production agent products achieve better economics and capability fit by
  routing different sub-tasks to different model providers — Anthropic for the
  core long-running loop, Gemini for design and price-performance subtasks,
  custom fine-tunes for narrow domains — rather than committing all inference to
  one foundation model
related:
  - INS-260325-DAD7
  - INS-260325-8F49
  - INS-260327-A22D
  - INS-260403-8176
  - INS-260410-4696
  - INS-260410-86B0
  - INS-260410-B3C4
  - INS-260423-9225
  - INS-260424-E832
  - INS-260501-F0E5
---
The naive agent architecture commits all inference to a single foundation model, treating provider choice as a one-time decision. Replit's production architecture treats provider choice as a per-request routing decision. The core long-running coherent loop runs on Anthropic (which excels at multi-step coherence). Search subtasks route to Gemini (which excels at price-performance for that workload). Design tasks also route to Gemini (which excels at design fidelity). Narrow domain tasks route to internal fine-tuned models (which excel at the specific task at lower cost). The architectural pattern: a router agent classifies the task and dispatches to the model best suited for it, and the orchestration layer handles the cross-provider coherence. The benefits compound: better task-specific capability, better unit economics, lower switching cost when any provider changes pricing or capability, and structural protection against any single provider's outages or strategic moves. The cost: an internal capability for evaluating models and maintaining the routing logic — Replit calls this an 'agent lab' and treats it as core IP.

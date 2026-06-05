---
id: INS-260605-5983
domain: ai-development
topic: system-building
title: Framework-first agent builds often plateau below production quality
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-frameworks
  - quality-ceiling
  - production-readiness
  - control-flow
sources:
  - type: blog
    title: >-
      GitHub - humanlayer/12-factor-agents: What are the principles we can use
      to build LLM-powered software that is actually good enough to put in the
      hands of production customers?
    url: 'https://github.com/humanlayer/12-factor-agents'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Frameworks speed the first 80%; production quality demands ownership.
  standard: >-
    HumanLayer describes a common journey: teams grab a framework, move quickly,
    reach a rough quality bar, then discover that getting beyond it requires
    reverse-engineering the framework's prompts, flow, and assumptions. The
    warning is not anti-framework; it is pro-control once the system must serve
    real users.
  deep: >-
    This matches the broader Zuhn principle that complexity must be earned. A
    framework is useful while it makes behavior easier to reason about. Once it
    hides the knobs needed for evals, recovery, or product-specific quality, the
    abstraction becomes the bottleneck.
stance: >-
  Agent frameworks can accelerate prototypes, but teams often hit a 70-80%
  quality ceiling when they cannot inspect and control prompts, context, and
  flow deeply enough.
related:
  - INS-260403-50F6
  - INS-260403-9020
  - INS-260605-0BD6
  - PRI-260328-4CC0
  - INS-260605-33FA
---
HumanLayer describes a common journey: teams grab a framework, move quickly, reach a rough quality bar, then discover that getting beyond it requires reverse-engineering the framework's prompts, flow, and assumptions. The warning is not anti-framework; it is pro-control once the system must serve real users.

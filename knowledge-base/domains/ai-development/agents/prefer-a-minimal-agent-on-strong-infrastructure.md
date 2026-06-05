---
id: INS-260605-A28F
domain: ai-development
topic: agents
title: Prefer a minimal agent on strong infrastructure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - infrastructure
  - coding-agents
  - harness
  - tool-use
sources:
  - type: youtube
    title: >-
      SWE-rebench: Lessons from Evaluating Coding Agents — Ibragim Badertdinov,
      Nebius
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wcUJWP6WpGM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Invest in stable sandboxes, retry policies, and noise reduction rather than
    elaborate agent scaffolding, since modern models already use simple tools
    well.
  standard: >-
    Nebius found it is better to run a minimalistic agent with strong
    infrastructure than an over-engineered agent with weak infrastructure. In
    their scaffold the most-used tools and bash commands are simple and few, and
    because every model is now good at tool calling they dropped the early
    ReAct-plus-demonstration prompting in favor of minimal context. The hard
    part of agent reliability is operational: defining a retry policy that
    separates model errors from infrastructural errors, minimizing
    infrastructural noise (external network dependencies, images defaulting to a
    1970s clock that breaks time-sensitive tests), and enabling prompt caching
    which cut their cost roughly fourfold. The lesson is that scaffolding
    complexity yields diminishing returns against capable models, while
    infrastructure quality is the dominant lever on both validity and cost.
stance: >-
  A minimalistic agent backed by robust infrastructure outperforms an
  over-engineered agent on weak infrastructure.
related:
  - INS-260605-20DD
  - INS-260412-3C64
  - INS-260327-BF89
  - INS-260605-0A68
  - INS-260408-C572
  - INS-260605-1C30
---
Nebius found it is better to run a minimalistic agent with strong infrastructure than an over-engineered agent with weak infrastructure. In their scaffold the most-used tools and bash commands are simple and few, and because every model is now good at tool calling they dropped the early ReAct-plus-demonstration prompting in favor of minimal context. The hard part of agent reliability is operational: defining a retry policy that separates model errors from infrastructural errors, minimizing infrastructural noise (external network dependencies, images defaulting to a 1970s clock that breaks time-sensitive tests), and enabling prompt caching which cut their cost roughly fourfold. The lesson is that scaffolding complexity yields diminishing returns against capable models, while infrastructure quality is the dominant lever on both validity and cost.

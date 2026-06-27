---
id: INS-260626-A2B9
domain: ai-development
topic: system-design
title: >-
  Keep one decision-making agent and push specialization into tools, not into
  more agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - tools
  - multi-agent
  - context-management
  - reliability
sources:
  - type: youtube
    title: >-
      Full Workshop: Build Your Own Deep Research Agents - Louis-François
      Bouchard, Paul Iusztin, Samridhi
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mYSRn6PC1mc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Centralize planning and decisions in one agent and expose capabilities as
    tools — each tool can carry its own system prompt, validation logic, and
    even its own LLM call — so the global context stays intact in the
    decision-maker.
  standard: >-
    In the CRM marketing-content build, the sub-tasks (plan, retrieve, generate,
    validate, fix) were sequential, heavily coupled, and context-dependent: each
    step needed the full content in mind to produce the best output. Splitting
    those decisions across separate agents — as the client originally wanted —
    would have fragmented that shared context and created handoff and tool-call
    errors that reduce reliability. So Towards AI built a single agent and used
    tools as their unit of specialization.


    The key reframing is that a tool is far more than a function call: it can
    have its own system prompt, its own validation logic, and even its own
    internal LLM calls. They had a validation tool and format-specific tools (an
    SMS tool, an email tool). The tools act as specialists while the
    decision-making and planning — and the global context — remain in the one
    agent. You get modular, specialized behavior without paying the inter-agent
    communication tax.


    This inverts the instinct to 'add an agent' whenever you need a new
    capability. Multi-agent decomposition earns its keep for genuinely different
    reasons — too much context for one window (e.g. 20+ tools), independent
    autonomous decision-making, tool variability, or hard security/compliance
    isolation (one local agent per hospital) — not merely because a task has
    several steps. Default to one brain, many tools.
stance: >-
  When tasks are tightly coupled and context-dependent, a single planner agent
  that delegates to specialist tools beats splitting the decisions across
  multiple agents, because every agent boundary leaks context and introduces
  handoff errors.
related:
  - INS-260326-9402
  - INS-260403-BA81
  - INS-260605-988D
  - INS-260605-34B0
  - INS-260605-7FEA
  - INS-260605-D777
  - INS-260605-014F
  - INS-260605-3AAF
  - INS-260627-917D
  - INS-260627-FEB4
---
In the CRM marketing-content build, the sub-tasks (plan, retrieve, generate, validate, fix) were sequential, heavily coupled, and context-dependent: each step needed the full content in mind to produce the best output. Splitting those decisions across separate agents — as the client originally wanted — would have fragmented that shared context and created handoff and tool-call errors that reduce reliability. So Towards AI built a single agent and used tools as their unit of specialization.

The key reframing is that a tool is far more than a function call: it can have its own system prompt, its own validation logic, and even its own internal LLM calls. They had a validation tool and format-specific tools (an SMS tool, an email tool). The tools act as specialists while the decision-making and planning — and the global context — remain in the one agent. You get modular, specialized behavior without paying the inter-agent communication tax.

This inverts the instinct to 'add an agent' whenever you need a new capability. Multi-agent decomposition earns its keep for genuinely different reasons — too much context for one window (e.g. 20+ tools), independent autonomous decision-making, tool variability, or hard security/compliance isolation (one local agent per hospital) — not merely because a task has several steps. Default to one brain, many tools.

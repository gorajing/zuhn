---
id: INS-260423-FF52
domain: ai-development
topic: agent-patterns
title: >-
  Agent lifecycle callbacks are the primary extensibility surface for custom
  behavior
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-callbacks
  - lifecycle-hooks
  - extensibility
  - agent-frameworks
sources:
  - type: youtube
    title: 'Gemma 4 production stack: Model Armor, ADK Agents, Tracing'
    author: Google Cloud Tech
    url: 'https://youtu.be/7wENq-LMHgQ'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ADK callbacks: you can invoke Model Armor API at the before-agent-callback
    to detect malicious inputs before the agent sees them, and at
    after-agent-callback to check outputs for sensitive data.
  standard: >-
    The agent-framework convergence pattern for extensibility is lifecycle
    callbacks at standardized hook points: before and after the agent as a whole
    invocation, before and after individual model calls, before and after tool
    invocations. Custom behavior (content filtering, logging, audit trails, rate
    limiting, cost tracking, custom memory writes) attaches to these hooks
    rather than requiring code changes in the framework core. The practical
    design rule for agent builders: if you want to inject behavior at a specific
    moment in an agent's lifecycle, first check whether the framework exposes a
    callback for that moment. If yes, use it. If no, that is a flag to choose a
    framework that does, because forking the core is a maintenance tax you will
    pay forever. The callback taxonomy is stabilizing: before_agent,
    after_agent, before_model, after_model, before_tool, after_tool are
    near-universal, and frameworks that omit them are falling behind in
    enterprise adoption.
stance: >-
  Production agent frameworks converge on lifecycle callback hooks
  (before-agent, after-agent, before-model, after-model) as the standardized
  mechanism for injecting custom logic — custom agents should compose via
  callbacks rather than forking framework code
related:
  - INS-260329-A45D
  - INS-260403-2FAE
  - INS-260410-358E
  - INS-260423-74BF
  - INS-260423-1C4D
  - INS-260423-6879
  - INS-260327-13B3
---
The agent-framework convergence pattern for extensibility is lifecycle callbacks at standardized hook points: before and after the agent as a whole invocation, before and after individual model calls, before and after tool invocations. Custom behavior (content filtering, logging, audit trails, rate limiting, cost tracking, custom memory writes) attaches to these hooks rather than requiring code changes in the framework core. The practical design rule for agent builders: if you want to inject behavior at a specific moment in an agent's lifecycle, first check whether the framework exposes a callback for that moment. If yes, use it. If no, that is a flag to choose a framework that does, because forking the core is a maintenance tax you will pay forever. The callback taxonomy is stabilizing: before_agent, after_agent, before_model, after_model, before_tool, after_tool are near-universal, and frameworks that omit them are falling behind in enterprise adoption.

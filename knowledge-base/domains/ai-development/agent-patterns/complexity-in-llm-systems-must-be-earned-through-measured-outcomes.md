---
id: INS-260410-0E26
domain: ai-development
topic: agent-patterns
title: Complexity in LLM systems must be earned through measured outcomes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - simplicity
  - evaluation
  - product-strategy
  - system-design
sources:
  - type: blog
    title: Building Effective AI Agents
    url: 'https://www.anthropic.com/engineering/building-effective-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start with single LLM calls plus retrieval and examples; add workflow
    complexity only when a simpler solution measurably fails, and add autonomous
    agents only when workflows measurably fail.
  standard: >-
    The post's meta-principle is that success in LLM systems isn't about
    sophistication — it's about matching system complexity to actual need. The
    recommended ladder: (1) single LLM call with retrieval and in-context
    examples, (2) structured workflow (chaining, routing, parallelization,
    orchestrator-workers, evaluator-optimizer), (3) autonomous agent. Each rung
    up trades latency, cost, and debuggability for flexibility, and you should
    only climb when the lower rung demonstrably fails on your evals.


    This is harder than it sounds because agents are fashionable and frameworks
    make complexity feel free. The discipline is to build comprehensive evals
    first, establish a baseline with the simplest possible system, and only add
    a layer when it moves the metric. The three closing principles reinforce
    this: maintain simplicity, prioritize transparency (show the agent's
    planning steps), and invest in the agent-computer interface. All three push
    against the temptation to hide complexity inside opaque framework
    abstractions.
stance: >-
  Every increment of agentic complexity should be justified by demonstrable
  performance gains over a simpler baseline, not adopted on intuition or
  fashion.
related:
  - INS-260325-DB7D
  - PRI-260320-D5B7
  - INS-260327-B9AD
  - INS-260327-4CB3
  - INS-260402-543E
  - PRI-260403-7585
  - INS-260326-7F79
  - INS-260410-F910
  - INS-260410-1ED3
---
The post's meta-principle is that success in LLM systems isn't about sophistication — it's about matching system complexity to actual need. The recommended ladder: (1) single LLM call with retrieval and in-context examples, (2) structured workflow (chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer), (3) autonomous agent. Each rung up trades latency, cost, and debuggability for flexibility, and you should only climb when the lower rung demonstrably fails on your evals.

This is harder than it sounds because agents are fashionable and frameworks make complexity feel free. The discipline is to build comprehensive evals first, establish a baseline with the simplest possible system, and only add a layer when it moves the metric. The three closing principles reinforce this: maintain simplicity, prioritize transparency (show the agent's planning steps), and invest in the agent-computer interface. All three push against the temptation to hide complexity inside opaque framework abstractions.

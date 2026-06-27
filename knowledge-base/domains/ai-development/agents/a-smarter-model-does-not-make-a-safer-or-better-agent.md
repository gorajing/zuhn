---
id: INS-260605-AE67
domain: ai-development
topic: agents
title: A smarter model does not make a safer or better agent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - agent-safety
  - capability-tradeoff
  - cost
sources:
  - type: youtube
    title: >-
      Spec-Driven Testing for Agents With A Brain the Size of A Planet — Steven
      Willmott, SafeIntelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UQKg0td-Bf4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The right agent runs on a model good enough to perform the task but not
    capable of arbitrary harm — bigger is not automatically better or safer.
  standard: >-
    Intuition says a bigger model yields a better agent, but in deployment the
    relationship breaks down. Some jailbreaks work *better* on larger models:
    wrap a malicious instruction inside a poem and a low-end model won't even
    parse it, while a capable model decodes it and executes the hidden command.
    Larger models also cost more tokens and run slower on tasks as simple as
    arithmetic.


    The design target is therefore an agent built on a model that is 'good
    enough to perform but not capable of doing arbitrary harm.' Arbitrary harm
    has two levers: how flexibly the agent accepts instructions (prompt
    surface), and what tools and tasks it can execute in your infrastructure
    (action surface). An agent that can wire millions of dollars is
    categorically riskier than one that only answers questions, independent of
    model size. Treat model choice as a capability-ceiling decision, not a 'pick
    the smartest' decision.
stance: >-
  For deployed agents, choosing the largest available model is often the wrong
  default because capability cuts against safety and cost.
related:
  - INS-260605-0C88
  - INS-260627-C727
  - INS-260605-9976
  - INS-260327-BF89
  - INS-260326-2410
---
Intuition says a bigger model yields a better agent, but in deployment the relationship breaks down. Some jailbreaks work *better* on larger models: wrap a malicious instruction inside a poem and a low-end model won't even parse it, while a capable model decodes it and executes the hidden command. Larger models also cost more tokens and run slower on tasks as simple as arithmetic.

The design target is therefore an agent built on a model that is 'good enough to perform but not capable of doing arbitrary harm.' Arbitrary harm has two levers: how flexibly the agent accepts instructions (prompt surface), and what tools and tasks it can execute in your infrastructure (action surface). An agent that can wire millions of dollars is categorically riskier than one that only answers questions, independent of model size. Treat model choice as a capability-ceiling decision, not a 'pick the smartest' decision.

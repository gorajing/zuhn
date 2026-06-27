---
id: INS-260625-2906
domain: ai-development
topic: llm-costs
title: >-
  Spend lavishly on agents during experimentation, then distill proven steps
  into cheap calls
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - cost-optimization
  - experimentation
  - distillation
  - agents
sources:
  - type: youtube
    title: >-
      Self Driving Products: Product Signals to Pull Requests — Joshua Snyder,
      PostHog
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMiSRliEzv4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat tokens as free while experimenting — run the agent on the same problem
    100 times to surface patterns, then distill the expensive step into a
    one-shot call or a trained model.
  standard: >-
    PostHog's instinct early on was to minimize cost: avoid agents where
    possible and delay invoking them as late as possible in the pipeline, since
    trillions of events were flowing in. They call this a big mistake. Premature
    cost optimization meant they never saw the range of clever solutions the
    agent could produce, and they couldn't tell which steps actually needed an
    agent.


    The better path: accept that a fully agentic pipeline is initially
    'completely unfeasible' on cost, run agents freely, and throw the same
    problem at an agent a hundred times. Patterns emerge — the agent's clever
    solutions start to repeat — and those repeated behaviors can be collapsed
    into a single deterministic LLM call or a small fine-tuned model that runs
    much faster and cheaper. Expensive exploration is the means of discovering
    where cheap exploitation is safe.


    The heuristic 'tokens are free' is literally false but operationally useful
    during R&D: the cost of compute is small relative to the cost of optimizing
    prematurely against an unknown solution shape. Cost discipline belongs after
    you understand the behavior you're trying to reproduce, not before.
stance: >-
  Optimizing agent cost too early blinds you to what works; you should run
  expensive agents repeatedly to discover solution patterns, then compress
  proven steps into one-shot calls or trained models.
related:
  - INS-260323-A5EC
  - INS-260410-9EFC
  - INS-260605-4A94
  - INS-260625-2D05
  - INS-260626-AC8E
  - INS-260327-A22D
---
PostHog's instinct early on was to minimize cost: avoid agents where possible and delay invoking them as late as possible in the pipeline, since trillions of events were flowing in. They call this a big mistake. Premature cost optimization meant they never saw the range of clever solutions the agent could produce, and they couldn't tell which steps actually needed an agent.

The better path: accept that a fully agentic pipeline is initially 'completely unfeasible' on cost, run agents freely, and throw the same problem at an agent a hundred times. Patterns emerge — the agent's clever solutions start to repeat — and those repeated behaviors can be collapsed into a single deterministic LLM call or a small fine-tuned model that runs much faster and cheaper. Expensive exploration is the means of discovering where cheap exploitation is safe.

The heuristic 'tokens are free' is literally false but operationally useful during R&D: the cost of compute is small relative to the cost of optimizing prematurely against an unknown solution shape. Cost discipline belongs after you understand the behavior you're trying to reproduce, not before.

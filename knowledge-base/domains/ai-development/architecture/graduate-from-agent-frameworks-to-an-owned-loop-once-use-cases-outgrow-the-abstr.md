---
id: INS-260626-7D73
domain: ai-development
topic: architecture
title: >-
  Graduate from agent frameworks to an owned loop once use cases outgrow the
  abstraction
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-loop
  - frameworks
  - langgraph
  - control
  - production
sources:
  - type: youtube
    title: >-
      Agents in Production: How OpenGov Built and Scaled OG Assist - Gabe De
      Mesa, OpenGov
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4uFVSLgD2Q4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenGov moved off LangGraph to a custom agent loop to gain full control once
    their use cases got complex.
  standard: >-
    OpenGov started OG Assist on LangGraph, which was 'fine until the team
    really started to scale and our use cases started to evolve.' They then
    rebuilt their own agent loop from the ground up to have 'full regency' over
    it — so that complex features could reach into the loop directly rather than
    fighting the framework's abstractions. The payoff was fine-grained control
    over tracing, structured concurrency, and logging propagated through the
    entire loop, plus levers like dependency-injected, hot-swappable language
    models.


    The general pattern: frameworks are an accelerant at the start and a
    constraint at scale. The crossover point is when your use cases become
    idiosyncratic enough that you spend more time working around the framework
    than with it. The cost of owning the loop is real (you maintain the harness
    yourself), so this is a deliberate graduation, not a default — but for a
    team whose agent IS the product, control over the core loop is worth the
    maintenance burden. The decision rhymes with the broader build-vs-buy
    tradeoff: buy to learn the shape of the problem, build once you know it
    better than the vendor does.
stance: >-
  When agent use cases scale and diversify, owning the agent loop end-to-end
  beats staying on a general-purpose orchestration framework.
related:
  - INS-260327-B561
  - INS-260501-E377
  - INS-260501-9D73
  - INS-260619-B1A8
  - INS-260410-F910
  - INS-260501-FD20
  - INS-260605-25B2
---
OpenGov started OG Assist on LangGraph, which was 'fine until the team really started to scale and our use cases started to evolve.' They then rebuilt their own agent loop from the ground up to have 'full regency' over it — so that complex features could reach into the loop directly rather than fighting the framework's abstractions. The payoff was fine-grained control over tracing, structured concurrency, and logging propagated through the entire loop, plus levers like dependency-injected, hot-swappable language models.

The general pattern: frameworks are an accelerant at the start and a constraint at scale. The crossover point is when your use cases become idiosyncratic enough that you spend more time working around the framework than with it. The cost of owning the loop is real (you maintain the harness yourself), so this is a deliberate graduation, not a default — but for a team whose agent IS the product, control over the core loop is worth the maintenance burden. The decision rhymes with the broader build-vs-buy tradeoff: buy to learn the shape of the problem, build once you know it better than the vendor does.

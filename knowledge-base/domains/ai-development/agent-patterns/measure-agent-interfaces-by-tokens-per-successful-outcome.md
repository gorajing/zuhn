---
id: INS-260605-2AAF
domain: ai-development
topic: agent-patterns
title: Measure agent interfaces by tokens per successful outcome
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - metrics
  - evaluation
  - tool-design
  - token-efficiency
sources:
  - type: youtube
    title: >-
      Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents —
      Michael Hablich, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_B4Pv9ttFgY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Track fuel efficiency (tokens per successful outcome) per user journey — but
    never optimize it at the expense of whether the agent actually finishes.
  standard: >-
    Hablich frames tokens-per-successful-outcome as the 'fuel efficiency' of an
    agent interface, with two critical caveats. First, it must be tokens per
    *successful* outcome, not per outcome: fuel efficiency is worthless if you
    can't reach the destination, so effectiveness (did the agent complete the
    entire user journey?) must be measured alongside efficiency. A cheaper
    interface that fails the task is not cheaper.


    Second, the metric cannot be compared globally. Token cost varies enormously
    by task class — web scraping is cheap, debugging a broken responsive layout
    is expensive — and that variance is legitimate, not waste. So you compare
    tokens-per-successful-outcome *within* a user journey across interface
    versions, never across journeys. In their internal tooling, plotting
    per-use-case effectiveness reveals which tools to improve next (the short
    bars).


    The meta-point: even an imperfect measurement beats gut-driven decisions.
    Instrumenting agent interfaces is hard, but partial data enables
    data-informed iteration where intuition alone produces no signal.
stance: >-
  The right efficiency metric for an agent interface is tokens per successful
  outcome, measured per user journey, not raw token cost or global averages.
related:
  - PRI-260406-DE8A
  - PRI-260406-818D
  - INS-260403-2E0F
  - INS-260605-C436
  - INS-260405-BA7F
---
Hablich frames tokens-per-successful-outcome as the 'fuel efficiency' of an agent interface, with two critical caveats. First, it must be tokens per *successful* outcome, not per outcome: fuel efficiency is worthless if you can't reach the destination, so effectiveness (did the agent complete the entire user journey?) must be measured alongside efficiency. A cheaper interface that fails the task is not cheaper.

Second, the metric cannot be compared globally. Token cost varies enormously by task class — web scraping is cheap, debugging a broken responsive layout is expensive — and that variance is legitimate, not waste. So you compare tokens-per-successful-outcome *within* a user journey across interface versions, never across journeys. In their internal tooling, plotting per-use-case effectiveness reveals which tools to improve next (the short bars).

The meta-point: even an imperfect measurement beats gut-driven decisions. Instrumenting agent interfaces is hard, but partial data enables data-informed iteration where intuition alone produces no signal.

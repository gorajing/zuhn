---
id: INS-260410-1A22
domain: ai-development
topic: agent-patterns
title: 'Match tool-use features to the bottleneck, not the feature list'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-design
  - engineering-discipline
  - tool-use
  - tradeoffs
sources:
  - type: blog
    title: Introducing advanced tool use on the Claude Developer Platform
    url: 'https://www.anthropic.com/engineering/advanced-tool-use'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pick the tool-use feature that solves your actual bottleneck — definition
    bloat, intermediate data, or parameter errors — not all three by default.
  standard: >-
    Anthropic is explicit that each feature carries a cost. Tool Search Tool
    adds a search step before invocation, so it's wasted overhead when you have
    fewer than ten tools or use all of them every session. Programmatic Tool
    Calling adds a code execution step, which hurts on simple single-tool
    lookups. Tool Use Examples add tokens to every tool definition, so they're
    wasted on obviously-structured tools.


    The recommended diagnostic is crisp: context bloat from definitions → Tool
    Search; large intermediate results → Programmatic Calling; parameter errors
    → Examples. Start with the biggest bottleneck, measure, and layer additional
    features only when their specific failure mode shows up.


    This is an underrated discipline in agent engineering. New capabilities look
    like free upgrades, but each one changes latency, caching behavior, and
    failure modes. The right default is the simplest architecture that meets the
    task, not the most capable one.
stance: >-
  Layering every advanced tool feature onto every agent adds latency and cost
  without payoff; diagnose the bottleneck first.
related:
  - INS-260410-A1E9
  - INS-260409-F9D5
  - INS-260327-DECA
  - INS-260403-7F89
  - PRI-260321-14D8
---
Anthropic is explicit that each feature carries a cost. Tool Search Tool adds a search step before invocation, so it's wasted overhead when you have fewer than ten tools or use all of them every session. Programmatic Tool Calling adds a code execution step, which hurts on simple single-tool lookups. Tool Use Examples add tokens to every tool definition, so they're wasted on obviously-structured tools.

The recommended diagnostic is crisp: context bloat from definitions → Tool Search; large intermediate results → Programmatic Calling; parameter errors → Examples. Start with the biggest bottleneck, measure, and layer additional features only when their specific failure mode shows up.

This is an underrated discipline in agent engineering. New capabilities look like free upgrades, but each one changes latency, caching behavior, and failure modes. The right default is the simplest architecture that meets the task, not the most capable one.

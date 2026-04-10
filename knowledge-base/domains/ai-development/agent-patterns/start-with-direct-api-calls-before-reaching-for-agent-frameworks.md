---
id: INS-260410-BBEA
domain: ai-development
topic: agent-patterns
title: Start with direct API calls before reaching for agent frameworks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - frameworks
  - abstraction
  - debugging
  - prompting
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
    Agent frameworks hide the underlying prompts and make debugging harder, so
    start with direct LLM API calls — most patterns are a few lines of code —
    and adopt frameworks only when their value exceeds the opacity cost.
  standard: >-
    Anthropic observed that the most successful agent implementations across
    dozens of customer teams weren't using LangChain, Claude Agent SDK, Rivet,
    or other framework layers — they were building directly against the LLM API
    with simple composable patterns. Frameworks make it easy to get started but
    add abstraction layers that obscure prompts, hide retries, and make it
    tempting to add complexity that isn't needed.


    The recommendation is concrete: start by writing the LLM calls directly.
    Most of the patterns in the post (chaining, routing, parallelization) are
    implementable in a few lines. If you do use a framework, make sure you
    understand the code underneath — incorrect assumptions about what the
    framework is actually doing are one of the most common sources of customer
    bugs. This is a counterweight to the industry reflex of adopting
    infrastructure before you understand the problem.
stance: >-
  Teams building LLM applications should implement patterns directly against the
  model API first and only adopt frameworks when the abstraction tax is clearly
  worth paying.
related:
  - INS-260321-AD95
  - INS-260330-AB62
  - INS-260329-3763
  - INS-260330-6B7F
  - INS-260403-643A
  - INS-260410-5F60
---
Anthropic observed that the most successful agent implementations across dozens of customer teams weren't using LangChain, Claude Agent SDK, Rivet, or other framework layers — they were building directly against the LLM API with simple composable patterns. Frameworks make it easy to get started but add abstraction layers that obscure prompts, hide retries, and make it tempting to add complexity that isn't needed.

The recommendation is concrete: start by writing the LLM calls directly. Most of the patterns in the post (chaining, routing, parallelization) are implementable in a few lines. If you do use a framework, make sure you understand the code underneath — incorrect assumptions about what the framework is actually doing are one of the most common sources of customer bugs. This is a counterweight to the industry reflex of adopting infrastructure before you understand the problem.

---
id: INS-260627-FAFC
domain: ai-development
topic: agent-patterns
title: 'Treat the single LLM-tool loop as the quantum you compose, not the whole agent'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - decomposition
  - agent-architecture
  - deep-research
  - composition
sources:
  - type: youtube
    title: 'From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=flf_IKnFYnE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The field has shifted from 'one LLM-calling-tools loop per microservice' to
    treating each such loop as a micro-task you compose into a larger system
    that users would recognize as 'the agent.'
  standard: >-
    Early 2025 thinking put one AI agent — one LLM calling tools in a loop — at
    the center of each microservice. Colvin argues the unit has gotten smaller:
    the individual LLM-tool loop is now the 'quantum of development,' the
    micro-task, and what users think of as a single autonomous agent is actually
    built up from several of them. His deep-research system isn't one agent;
    it's a plan agent that emits a structured Pydantic plan, multiple search
    agents run in parallel (each on a fast cheap model like Gemini Flash), and a
    final analysis agent on a stronger model that synthesizes everything.


    This decomposition lets you match model cost to sub-task difficulty (cheap
    models for breadth-first search, an expensive model only for final
    reasoning), parallelize independent steps with ordinary language primitives
    like Python task groups, and keep each agent's prompt and contract narrow
    and testable. Notably, Colvin resisted reaching for a graph framework — 'it
    doesn't need a graph, it's not complex enough' — implying you should
    decompose into composable agents first and only escalate to explicit graph
    orchestration when the control flow genuinely demands it.
stance: >-
  Build autonomous systems by composing many small single-purpose agents rather
  than cramming one big LLM loop into each service.
related:
  - INS-260627-CC45
  - INS-260627-FC32
  - INS-260626-BC79
  - INS-260626-7D73
  - INS-260501-FD20
  - INS-260627-8B10
---
Early 2025 thinking put one AI agent — one LLM calling tools in a loop — at the center of each microservice. Colvin argues the unit has gotten smaller: the individual LLM-tool loop is now the 'quantum of development,' the micro-task, and what users think of as a single autonomous agent is actually built up from several of them. His deep-research system isn't one agent; it's a plan agent that emits a structured Pydantic plan, multiple search agents run in parallel (each on a fast cheap model like Gemini Flash), and a final analysis agent on a stronger model that synthesizes everything.

This decomposition lets you match model cost to sub-task difficulty (cheap models for breadth-first search, an expensive model only for final reasoning), parallelize independent steps with ordinary language primitives like Python task groups, and keep each agent's prompt and contract narrow and testable. Notably, Colvin resisted reaching for a graph framework — 'it doesn't need a graph, it's not complex enough' — implying you should decompose into composable agents first and only escalate to explicit graph orchestration when the control flow genuinely demands it.

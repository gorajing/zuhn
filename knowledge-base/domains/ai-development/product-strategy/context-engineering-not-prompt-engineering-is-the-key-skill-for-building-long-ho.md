---
id: INS-260325-E1FA
domain: ai-development
topic: product-strategy
title: >-
  Context engineering not prompt engineering is the key skill for building
  long-horizon AI agents
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-engineering
  - langchain
  - ai-agents
  - long-horizon
  - information-retrieval
sources:
  - type: youtube
    title: >-
      Why Businesses Are Rejecting the AI They’ve Asked For ft Agency CEO Elias
      Torres
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=0cczp_HQPAQ'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LangChain's Harrison Chase: context engineering (assembling the right info
    at the right time) matters more than prompt engineering for agents.
  standard: >-
    Chase distinguishes prompt engineering (crafting the right instruction) from
    context engineering (assembling the right information for each step). For
    long-horizon agents that execute 10-100+ steps, the prompt is relatively
    stable — what changes is the context window contents at each decision point.
    Key context engineering patterns: 1) Dynamic retrieval — pulling relevant
    documents/data just-in-time for each step, 2) Memory management — deciding
    what to keep, compress, or discard as context grows, 3) Tool result
    integration — formatting tool outputs so the model can reason about them, 4)
    State tracking — maintaining a working representation of task progress. The
    shift from prompt engineering to context engineering mirrors the shift from
    writing SQL queries to building data pipelines — the skill becomes systems
    architecture, not linguistic craft.
stance: >-
  Harrison Chase (LangChain) argues that the bottleneck for useful AI agents is
  not the model or the prompt but the context — assembling the right information
  at the right time so the model can make good decisions across many steps.
related:
  - INS-260322-E4D8
  - INS-260321-0C99
  - INS-260321-4178
  - INS-260322-17B3
  - INS-260327-F625
  - PRI-260328-A65A
  - INS-260323-FEDF
  - INS-260327-5AFE
  - INS-260327-BF89
  - INS-260327-294E
---
Chase distinguishes prompt engineering (crafting the right instruction) from context engineering (assembling the right information for each step). For long-horizon agents that execute 10-100+ steps, the prompt is relatively stable — what changes is the context window contents at each decision point. Key context engineering patterns: 1) Dynamic retrieval — pulling relevant documents/data just-in-time for each step, 2) Memory management — deciding what to keep, compress, or discard as context grows, 3) Tool result integration — formatting tool outputs so the model can reason about them, 4) State tracking — maintaining a working representation of task progress. The shift from prompt engineering to context engineering mirrors the shift from writing SQL queries to building data pipelines — the skill becomes systems architecture, not linguistic craft.

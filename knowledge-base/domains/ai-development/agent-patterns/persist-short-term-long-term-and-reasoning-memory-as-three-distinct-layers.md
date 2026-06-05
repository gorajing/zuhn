---
id: INS-260605-37FB
domain: ai-development
topic: agent-patterns
title: 'Persist short-term, long-term, and reasoning memory as three distinct layers'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-memory
  - memory-architecture
  - reasoning-traces
  - knowledge-graphs
sources:
  - type: youtube
    title: 'Connecting the Dots with Context Graphs — Stephen Chin, Neo4j'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=eW_vxrjvERk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Structure agent memory into short-term (current pipeline state), long-term
    (organized domain history), and reasoning (decision traces capturing the
    why) rather than one flat store.
  standard: >-
    Neo4j's open-source agent memory package organizes agent memory into three
    concepts. Short-term memory holds what's happening in the current pipeline —
    the conversation and active task state. Long-term memory holds accumulated
    history across many tasks and customer interactions, and must be
    deliberately organized with a good domain model (entities, business
    processes, actors) because there is so much of it that naive accumulation
    becomes unusable. Reasoning memory captures the decision traces: not just
    the LLM's final recommendation but the thinking behind it.


    Reasoning traces are the differentiating layer. Normally an LLM returns only
    its conclusion and discards the path to it; persisting that path makes
    decisions repeatable, lets future decisions draw on prior 'decision
    providence,' and provides a hook for compliance and debugging. The
    actionable pattern for builders: treat reasoning capture as a first-class
    memory type with its own schema, not an afterthought folded into logs.
stance: >-
  Durable agents require three separate memory types — working state, organized
  domain history, and decision traces — not a single undifferentiated memory
  store.
related:
  - PRI-260328-EE02
  - INS-260405-6C88
  - INS-260421-60D9
  - INS-260605-BB4B
  - INS-260605-C00C
  - INS-260605-672C
---
Neo4j's open-source agent memory package organizes agent memory into three concepts. Short-term memory holds what's happening in the current pipeline — the conversation and active task state. Long-term memory holds accumulated history across many tasks and customer interactions, and must be deliberately organized with a good domain model (entities, business processes, actors) because there is so much of it that naive accumulation becomes unusable. Reasoning memory captures the decision traces: not just the LLM's final recommendation but the thinking behind it.

Reasoning traces are the differentiating layer. Normally an LLM returns only its conclusion and discards the path to it; persisting that path makes decisions repeatable, lets future decisions draw on prior 'decision providence,' and provides a hook for compliance and debugging. The actionable pattern for builders: treat reasoning capture as a first-class memory type with its own schema, not an afterthought folded into logs.

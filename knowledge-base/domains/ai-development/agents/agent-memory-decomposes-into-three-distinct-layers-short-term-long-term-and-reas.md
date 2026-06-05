---
id: INS-260605-BB4B
domain: ai-development
topic: agents
title: >-
  Agent memory decomposes into three distinct layers: short-term, long-term, and
  reasoning
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-memory
  - memory-architecture
  - entity-resolution
  - session-context
  - reasoning-traces
sources:
  - type: youtube
    title: >-
      Why your agents need decision traces, not just documents — Zach
      Blumenfeld, Neo4j
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=B9h9ovW5H9U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Short-term memory holds conversation/session context, long-term holds
    entities resolved and deduplicated over time, and reasoning holds the
    decision traces — three layers, not one.
  standard: >-
    Neo4j's agent-memory package models memory as three explicit components
    rather than one bucket. Short-term memory is conversation history and
    session context — the transient working set. Long-term memory is the
    entities extracted from those conversations, then merged, deduplicated, and
    resolved as they recur over time. Reasoning is the decision-trace layer of
    the context graph: the causal chains and precedents.


    The value of the split is that each layer has a different lifecycle and a
    different operation. Short-term is ephemeral and high-churn. Long-term
    requires an entity-resolution pipeline (the demo uses a staged spaCy →
    GLiNER → LLM-fallback extraction, then a separate merge/dedup/enrich step)
    to turn messy conversational mentions into stable entities. Reasoning links
    those stable entities into traces that survive across sessions.


    Conflating these — as a single vector store of chat logs does — loses the
    structure: you can't resolve entities, can't separate transient noise from
    durable knowledge, and can't isolate the reasoning that makes decisions
    reusable.
stance: >-
  Treating agent memory as three separate concerns — session context, resolved
  entities, and reasoning traces — is a cleaner architecture than a single
  undifferentiated store.
related:
  - PRI-260320-07A4
  - INS-260405-6C88
  - INS-260409-D3EE
  - INS-260409-6DBE
  - INS-260605-ECB0
  - INS-260605-37FB
  - INS-260410-78F4
---
Neo4j's agent-memory package models memory as three explicit components rather than one bucket. Short-term memory is conversation history and session context — the transient working set. Long-term memory is the entities extracted from those conversations, then merged, deduplicated, and resolved as they recur over time. Reasoning is the decision-trace layer of the context graph: the causal chains and precedents.

The value of the split is that each layer has a different lifecycle and a different operation. Short-term is ephemeral and high-churn. Long-term requires an entity-resolution pipeline (the demo uses a staged spaCy → GLiNER → LLM-fallback extraction, then a separate merge/dedup/enrich step) to turn messy conversational mentions into stable entities. Reasoning links those stable entities into traces that survive across sessions.

Conflating these — as a single vector store of chat logs does — loses the structure: you can't resolve entities, can't separate transient noise from durable knowledge, and can't isolate the reasoning that makes decisions reusable.

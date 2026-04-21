---
id: INS-260421-8004
domain: ai-development
topic: architecture
title: Graph-on-vector is becoming the default architecture for production AI memory
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - graph-databases
  - vector-search
  - architecture
  - production-patterns
sources:
  - type: audio
    title: ai agents 12 ai memory meetup 2026 04 20
date_extracted: '2026-04-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    4 of 6 speakers at AI Agents SF #12 use graph primitives (Neo4j, FalkorDB,
    Cognee's own) with vector embeddings layered inside graph nodes rather than
    as the top-level store.
  standard: >-
    MemMachine stores episodic memory in Neo4j with vector embeddings on nodes.
    FalkorDB is a graph-first product with built-in vector search (via Redis
    extensions). Cognee builds knowledge graphs at 5 million runs/month. Only
    mem0 treats vector search as primary, and even they integrate with graph
    backends for enterprise customers.


    The shift is driven by context quality: FalkorDB's Guy Lubovitch
    demonstrated that a pure-vector query for 'restaurants in Japan' returns
    generic results, while a graph query that traverses the 'Alice is vegan →
    allergic to nuts → traveling to Japan' relationship returns contextually
    correct suggestions. Pure-vector similarity cannot encode the relational
    context that matters for agent reasoning. Production AI memory is converging
    on graph-first storage with vector embeddings on nodes rather than the
    reverse.
stance: >-
  Pure-vector memory architectures are being replaced by graph-on-top-of-vector
  as the production default for agent memory
related:
  - INS-260405-214D
  - INS-260325-E23D
  - INS-260410-9EEF
  - INS-260402-28BA
  - INS-260330-AE16
---
MemMachine stores episodic memory in Neo4j with vector embeddings on nodes. FalkorDB is a graph-first product with built-in vector search (via Redis extensions). Cognee builds knowledge graphs at 5 million runs/month. Only mem0 treats vector search as primary, and even they integrate with graph backends for enterprise customers.

The shift is driven by context quality: FalkorDB's Guy Lubovitch demonstrated that a pure-vector query for 'restaurants in Japan' returns generic results, while a graph query that traverses the 'Alice is vegan → allergic to nuts → traveling to Japan' relationship returns contextually correct suggestions. Pure-vector similarity cannot encode the relational context that matters for agent reasoning. Production AI memory is converging on graph-first storage with vector embeddings on nodes rather than the reverse.

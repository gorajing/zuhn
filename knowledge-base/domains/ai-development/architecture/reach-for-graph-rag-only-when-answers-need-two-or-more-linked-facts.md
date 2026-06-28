---
id: INS-260628-06A6
domain: ai-development
topic: architecture
title: Reach for graph RAG only when answers need two or more linked facts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - graph-rag
  - vector-rag
  - retrieval
  - knowledge-graph
  - architecture
sources:
  - type: youtube
    title: 'Context Engineering: Connecting the Dots with Graphs — Stephen Chin, Neo4j'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=LLuKshphGOE'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a single similarity search answers the question, use vector RAG; switch
    to graph RAG when the answer requires joining multiple related facts.
  standard: >-
    Graph RAG is any retrieval pipeline that uses a knowledge graph as part of
    retrieval, returning not just similar chunks but related nodes,
    relationships, and community structure. This is genuinely more powerful —
    but it is not free, and the talk gives a clean decision rule for when it
    pays off.


    The heuristic: vector similarity search is fine when the answer can be
    retrieved in one shot — a single relevant chunk satisfies the query. The
    real value of graph RAG appears when an answer depends on pulling in
    multiple facts that are related but would never come back together from a
    single similarity query — i.e., the relationships are two or more hops deep.
    That is where traversing explicit relationships beats flat semantic search.


    Treated as an architecture decision, this prevents two common mistakes:
    over-engineering simple lookup use cases with a graph database, and
    under-serving multi-hop reasoning use cases (supply chains,
    dependency/vulnerability chains, temporal who-did-what-where queries) with
    flat vector search that structurally cannot connect the dots.
stance: >-
  Graph RAG earns its added complexity only when an answer requires chaining two
  or more relationships; single-hop lookups are better served by plain vector
  RAG.
related:
  - INS-260402-5ACE
  - INS-260402-28BA
  - INS-260405-214D
  - INS-260410-2067
  - INS-260409-8DA0
  - INS-260605-2A64
  - INS-260605-DB79
  - INS-260625-3A4F
  - INS-260626-407C
  - INS-260628-84C3
---
Graph RAG is any retrieval pipeline that uses a knowledge graph as part of retrieval, returning not just similar chunks but related nodes, relationships, and community structure. This is genuinely more powerful — but it is not free, and the talk gives a clean decision rule for when it pays off.

The heuristic: vector similarity search is fine when the answer can be retrieved in one shot — a single relevant chunk satisfies the query. The real value of graph RAG appears when an answer depends on pulling in multiple facts that are related but would never come back together from a single similarity query — i.e., the relationships are two or more hops deep. That is where traversing explicit relationships beats flat semantic search.

Treated as an architecture decision, this prevents two common mistakes: over-engineering simple lookup use cases with a graph database, and under-serving multi-hop reasoning use cases (supply chains, dependency/vulnerability chains, temporal who-did-what-where queries) with flat vector search that structurally cannot connect the dots.

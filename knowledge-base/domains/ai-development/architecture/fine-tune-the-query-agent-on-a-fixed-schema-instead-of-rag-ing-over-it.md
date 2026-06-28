---
id: INS-260628-DD9D
domain: ai-development
topic: architecture
title: Fine-tune the query agent on a fixed schema instead of RAG-ing over it
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - rag
  - knowledge-graph
  - query-generation
  - token-cost
  - agents
sources:
  - type: youtube
    title: >-
      Multi Agent AI and Network Knowledge Graphs for Change — Ola Mabadeje,
      Cisco
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m0dxZ-NDKHo'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cisco's team replaced RAG-based knowledge-graph querying with a fine-tuned
    query agent and saw a drastic drop in tokens burned and time-to-result.
  standard: >-
    The conventional default is 'prefer RAG over fine-tuning' because RAG is
    cheaper to update and avoids stale weights. But that calculus inverts when
    the thing you're retrieving against is a fixed, well-defined schema that
    rarely changes. Cisco initially used RAG to generate AQL queries against
    their network knowledge graph; the reasoning loop traversed every layer of
    the graph, consuming large numbers of tokens and returning slowly. They
    fine-tuned the query agent on schema information and example queries
    instead, and saw a 'drastic reduction' in both tokens consumed and latency.


    The principle: the cost of fine-tuning is paid once and the knowledge lives
    cheaply in the weights, whereas RAG re-pays its retrieval-and-reasoning cost
    on every single query. For a high-frequency, narrow task against a stable
    target — like translating natural language into queries over a known schema
    — fine-tuning amortizes far better. Reach for RAG when the corpus is large,
    changing, or open-ended; reach for fine-tuning when the task is a repetitive
    transformation against a fixed structure you can enumerate with examples.
stance: >-
  When an agent repeatedly queries a stable, known schema, fine-tuning on the
  schema plus example queries beats RAG for cost and latency.
related:
  - INS-260402-C1A9
  - INS-260409-1E5E
  - INS-260410-9D04
  - INS-260522-C5C2
  - INS-260323-7625
  - INS-260628-84C3
  - INS-260603-6FE3
---
The conventional default is 'prefer RAG over fine-tuning' because RAG is cheaper to update and avoids stale weights. But that calculus inverts when the thing you're retrieving against is a fixed, well-defined schema that rarely changes. Cisco initially used RAG to generate AQL queries against their network knowledge graph; the reasoning loop traversed every layer of the graph, consuming large numbers of tokens and returning slowly. They fine-tuned the query agent on schema information and example queries instead, and saw a 'drastic reduction' in both tokens consumed and latency.

The principle: the cost of fine-tuning is paid once and the knowledge lives cheaply in the weights, whereas RAG re-pays its retrieval-and-reasoning cost on every single query. For a high-frequency, narrow task against a stable target — like translating natural language into queries over a known schema — fine-tuning amortizes far better. Reach for RAG when the corpus is large, changing, or open-ended; reach for fine-tuning when the task is a repetitive transformation against a fixed structure you can enumerate with examples.

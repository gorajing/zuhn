---
id: INS-260410-2067
domain: ai-development
topic: embeddings
title: 'Hybrid BM25+embeddings beats either alone, especially on identifiers'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - bm25
  - embeddings
  - hybrid-search
  - retrieval
sources:
  - type: blog
    title: Contextual Retrieval in AI Systems
    url: 'https://www.anthropic.com/engineering/contextual-retrieval'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run BM25 and vector search in parallel, then merge results with rank fusion
    — embeddings catch meaning, BM25 catches exact strings like 'TS-999'.
  standard: >-
    Embedding models excel at semantic relationships but routinely whiff on
    queries that hinge on a literal token: error codes, SKUs, function names,
    legal citations. BM25, despite being decades old, finds those exact matches
    reliably because TF-IDF rewards rare distinctive terms. Anthropic's tested
    pipeline runs both, deduplicates with rank fusion, and consistently
    outperforms either alone.


    The lesson is that 'modern' and 'old' retrieval techniques are complements,
    not substitutes. Treat embeddings as the default and BM25 as the sharp tool
    for the long tail of queries where a single token determines correctness.
stance: >-
  Pure semantic embedding retrieval reliably misses exact-match queries like
  error codes and identifiers, so production RAG should always combine BM25
  lexical search with embeddings via rank fusion.
related:
  - INS-260325-E652
  - INS-260402-28BA
  - INS-260405-214D
  - INS-260409-2A51
  - INS-260409-8DA0
---
Embedding models excel at semantic relationships but routinely whiff on queries that hinge on a literal token: error codes, SKUs, function names, legal citations. BM25, despite being decades old, finds those exact matches reliably because TF-IDF rewards rare distinctive terms. Anthropic's tested pipeline runs both, deduplicates with rank fusion, and consistently outperforms either alone.

The lesson is that 'modern' and 'old' retrieval techniques are complements, not substitutes. Treat embeddings as the default and BM25 as the sharp tool for the long tail of queries where a single token determines correctness.

---
id: INS-260625-0141
domain: ai-development
topic: agent-patterns
title: >-
  Graph RAG outperforms vector RAG by modeling relationships explicitly instead
  of hoping embeddings encode them
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rag
  - graph-rag
  - knowledge-graph
  - retrieval
  - embeddings
sources:
  - type: youtube
    title: Boost AI context with hybrid search in Spanner
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=fAf4Zh-CC08'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Traditional RAG routes known relationships through the embedding model as a
    bottleneck; graph RAG models those relationships explicitly as a knowledge
    graph and expands context by traversal after a vector seed, improving recall
    and precision.
  standard: >-
    Vanilla RAG relies on the embedding model to encode every relationship in
    your data — the LLM must understand how documents relate, compress that into
    vectors, and you then try to pull it back out with a similarity query. That
    routes structure you already know through the model as a lossy bottleneck.
    If you already know a set of documents all describe one product or feature,
    making the embedding model rediscover that linkage is wasted effort and a
    source of error.


    Graph RAG instead models those relationships directly as a knowledge graph:
    vector search finds the most relevant starting nodes, then graph traversal
    expands context along the relationships you defined. Google reported that
    across multiple customers, graph RAG significantly outperformed plain RAG on
    performance, recall, precision, and result quality. The transferable
    principle: when you possess explicit structural knowledge about your corpus,
    encode it as structure rather than hoping a learned embedding recovers it —
    retrieval improves most where you stop asking the model to infer what you
    can simply declare.
stance: >-
  Forcing the embedding model to learn relationships you already know is a
  bottleneck that graph RAG removes by encoding those relationships directly.
related:
  - INS-260329-E43B
  - INS-260405-214D
  - INS-260325-E23D
  - INS-260405-16AB
  - INS-260329-1075
  - INS-260409-1E5E
  - INS-260421-8004
  - INS-260626-78D1
  - INS-260402-28BA
  - INS-260628-DD24
---
Vanilla RAG relies on the embedding model to encode every relationship in your data — the LLM must understand how documents relate, compress that into vectors, and you then try to pull it back out with a similarity query. That routes structure you already know through the model as a lossy bottleneck. If you already know a set of documents all describe one product or feature, making the embedding model rediscover that linkage is wasted effort and a source of error.

Graph RAG instead models those relationships directly as a knowledge graph: vector search finds the most relevant starting nodes, then graph traversal expands context along the relationships you defined. Google reported that across multiple customers, graph RAG significantly outperformed plain RAG on performance, recall, precision, and result quality. The transferable principle: when you possess explicit structural knowledge about your corpus, encode it as structure rather than hoping a learned embedding recovers it — retrieval improves most where you stop asking the model to infer what you can simply declare.

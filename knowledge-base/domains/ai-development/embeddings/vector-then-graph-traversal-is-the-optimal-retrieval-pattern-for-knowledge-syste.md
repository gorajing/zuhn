---
id: INS-260402-28BA
domain: ai-development
topic: embeddings
title: >-
  Vector-then-graph traversal is the optimal retrieval pattern for knowledge
  systems
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - graph-rag
  - vector-search
  - knowledge-retrieval
  - hybrid-search
  - cosine-similarity
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Combining vector search to find a semantically close starting point with
    graph traversal to explore structured relationships yields better retrieval
    than either method alone.
  standard: >-
    Pure vector search finds semantically similar content but misses structural
    relationships. Pure graph traversal requires knowing where to start. The
    demonstrated pattern combines both: use vector embeddings to 'land' near
    relevant content in the knowledge graph, then traverse graph edges to
    discover related entities, reasoning chains, and contextual information.


    In the demo, research results were embedded as 1500-dimensional vectors
    stored on graph nodes. New queries generated their own embeddings, and
    cosine similarity identified existing results above a 0.79 threshold. But
    the real power came after landing — following graph edges revealed
    conversation history, rejection signals, temporal ordering, and related
    research threads that pure vector similarity would never surface. This
    hybrid approach is becoming the standard pattern in GraphRAG
    implementations.
stance: >-
  Landing in approximate semantic space via vector search then following graph
  edges for structured exploration outperforms either approach alone
related:
  - INS-260329-61E5
  - INS-260402-5ACE
  - INS-260405-214D
  - INS-260409-430B
  - INS-260325-E652
evidence:
  - id: INS-260329-61E5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-2DF2
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Pure vector search finds semantically similar content but misses structural relationships. Pure graph traversal requires knowing where to start. The demonstrated pattern combines both: use vector embeddings to 'land' near relevant content in the knowledge graph, then traverse graph edges to discover related entities, reasoning chains, and contextual information.

In the demo, research results were embedded as 1500-dimensional vectors stored on graph nodes. New queries generated their own embeddings, and cosine similarity identified existing results above a 0.79 threshold. But the real power came after landing — following graph edges revealed conversation history, rejection signals, temporal ordering, and related research threads that pure vector similarity would never surface. This hybrid approach is becoming the standard pattern in GraphRAG implementations.

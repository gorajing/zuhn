---
id: INS-260405-214D
domain: ai-development
topic: embeddings
title: >-
  Graph plus vector hybrid search lands semantically then traverses structurally
  for superior RAG
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - graph-rag
  - vector-search
  - cosine-similarity
  - hybrid-search
  - neo4j
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use vector embeddings to land near relevant content in semantic space, then
    traverse graph edges to discover structurally related knowledge that pure
    vector search would miss.
  standard: >-
    The speaker demonstrated a concrete pattern: embed a query into vector
    space, use cosine similarity to find the nearest existing result (with a
    threshold heuristic — above 0.8 auto-accept, 0.7-0.8 offer as suggestion,
    below 0.7 do fresh research), then follow graph relationships from that
    landing point to discover related context. This hybrid approach leverages
    the strengths of both paradigms: vectors capture semantic meaning across
    1,500 dimensions regardless of vocabulary, while graph edges capture
    explicit structural relationships like causality, temporal ordering, and
    organizational hierarchy. The demo showed this saving significant token
    costs by reusing cached research results when semantically similar queries
    arrived.
stance: >-
  Combining vector similarity search to find an approximate starting point with
  graph traversal to follow structural relationships produces better retrieval
  than either approach alone.
related:
  - INS-260325-E652
  - INS-260330-4B84
  - INS-260402-5ACE
  - INS-260402-28BA
  - INS-260410-2067
  - PRI-260406-FA5B
  - INS-260409-430B
  - INS-260409-0D87
---
The speaker demonstrated a concrete pattern: embed a query into vector space, use cosine similarity to find the nearest existing result (with a threshold heuristic — above 0.8 auto-accept, 0.7-0.8 offer as suggestion, below 0.7 do fresh research), then follow graph relationships from that landing point to discover related context. This hybrid approach leverages the strengths of both paradigms: vectors capture semantic meaning across 1,500 dimensions regardless of vocabulary, while graph edges capture explicit structural relationships like causality, temporal ordering, and organizational hierarchy. The demo showed this saving significant token costs by reusing cached research results when semantically similar queries arrived.

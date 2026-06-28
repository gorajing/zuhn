---
id: INS-260627-FC86
domain: ai-development
topic: embeddings
title: Support multiple embedding models so you can survive embedding drift
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - embeddings
  - migration
  - vector-search
  - rag
  - future-proofing
sources:
  - type: youtube
    title: "OpenRAG: An open-source stack for RAG —\_Phil Nash"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4TxOBhDRRCM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because embeddings keep improving and last year's model goes stale, design
    the index to do vector search over multiple embedding models so migration is
    gradual, not a hard cutover.
  standard: >-
    Embeddings keep improving—great for the industry, painful when your
    production index was built on a model from six months or a year ago. The
    naive design pins you to one embedding model, so adopting a better one means
    re-embedding the entire corpus and a risky cutover. The hedge is to support
    vector search over multiple embedding models simultaneously, so you can
    introduce a new model and migrate incrementally rather than all at once.


    This costs query performance: searching across multiple embedding spaces is
    slower than searching one. But it buys migration insurance—you can run old
    and new embeddings in parallel during a transition, validate the new model
    on real queries, and retire the old one when ready. The general lesson
    beyond RAG: when a dependency is on a known improvement treadmill
    (embeddings, base models, tokenizers), build the seam for swapping it in
    from day one, because the cost of the seam is small compared to a forced
    flag-day migration later.
stance: >-
  A RAG index should support search across multiple embedding models so you can
  migrate when embeddings improve without a full re-index outage.
related:
  - INS-260325-E652
  - INS-260409-3230
  - INS-260605-DB79
  - INS-260625-48FA
  - INS-260626-BB8B
  - INS-260405-214D
  - INS-260628-23B0
---
Embeddings keep improving—great for the industry, painful when your production index was built on a model from six months or a year ago. The naive design pins you to one embedding model, so adopting a better one means re-embedding the entire corpus and a risky cutover. The hedge is to support vector search over multiple embedding models simultaneously, so you can introduce a new model and migrate incrementally rather than all at once.

This costs query performance: searching across multiple embedding spaces is slower than searching one. But it buys migration insurance—you can run old and new embeddings in parallel during a transition, validate the new model on real queries, and retire the old one when ready. The general lesson beyond RAG: when a dependency is on a known improvement treadmill (embeddings, base models, tokenizers), build the seam for swapping it in from day one, because the cost of the seam is small compared to a forced flag-day migration later.

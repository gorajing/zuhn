---
id: INS-260625-3A4F
domain: ai-development
topic: embeddings
title: >-
  Hybrid retrieval fused with reciprocal rank fusion beats keyword-only or
  vector-only search
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hybrid-search
  - vector-search
  - rrf
  - retrieval
  - ranking
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
    Run a keyword retriever and a vector retriever in parallel and merge their
    results with reciprocal rank fusion — keyword nails exact matches, vectors
    catch semantic neighbors, and fusion recovers what either misses alone.
  standard: >-
    Full-text search matches tokens precisely but misses semantically related
    items — a query for 'space themed' won't surface 'Star Trek' or 'Star Wars'
    toys that lack the literal words. Vector search captures that meaning but
    drifts (the demo returned an age-4-to-7 item for an '8 plus' query). The
    strongest results come from running both retrievers and merging: reciprocal
    rank fusion (RRF) combines the two ranked lists so items strong in either
    modality rise to the top.


    The practical decision rule: use full-text when you have enough precise
    matches and only need better ranking (rank text hits by vector similarity),
    and add a second vector retriever when full-text returns too few results and
    query expansion can't bridge the gap. Beyond RRF, relative-score functions
    and ML re-rankers are alternative merge strategies. The general principle —
    keyword and semantic retrieval fail on disjoint cases, so fusing them
    dominates either alone — holds regardless of the underlying engine.
stance: >-
  Neither full-text nor vector search alone produces the best result set;
  merging both retrievers with a rank-fusion step does.
related:
  - INS-260410-2067
  - INS-260605-FE8E
  - INS-260402-28BA
  - INS-260628-06A6
  - INS-260405-214D
---
Full-text search matches tokens precisely but misses semantically related items — a query for 'space themed' won't surface 'Star Trek' or 'Star Wars' toys that lack the literal words. Vector search captures that meaning but drifts (the demo returned an age-4-to-7 item for an '8 plus' query). The strongest results come from running both retrievers and merging: reciprocal rank fusion (RRF) combines the two ranked lists so items strong in either modality rise to the top.

The practical decision rule: use full-text when you have enough precise matches and only need better ranking (rank text hits by vector similarity), and add a second vector retriever when full-text returns too few results and query expansion can't bridge the gap. Beyond RRF, relative-score functions and ML re-rankers are alternative merge strategies. The general principle — keyword and semantic retrieval fail on disjoint cases, so fusing them dominates either alone — holds regardless of the underlying engine.

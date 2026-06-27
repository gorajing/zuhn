---
id: INS-260625-3A20
domain: ai-development
topic: embeddings
title: >-
  Choose KNN for small or filtered corpora and ANN only when vector search is
  the primary mechanism
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - vector-search
  - ann
  - knn
  - indexing
  - performance-tradeoffs
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
    Exact KNN works great for small corpora, highly-filtered result sets, and
    partitioned queries; reach for approximate (ANN) indexing only when vector
    search is your primary mechanism over a large corpus.
  standard: >-
    Vectorizing a problem turns text matching into distance computation, but how
    you compute that distance should depend on the candidate set size. Exact KNN
    scans every row's embedding — perfectly fine when another filter has already
    shrunk the set (the example given: Gmail searching one user's mail is a
    small, partitioned result set). Building and maintaining an ANN index there
    is wasted complexity.


    ANN earns its keep only when vector search is the primary retrieval
    mechanism over a large corpus, where computing query-to-document distance
    against every row becomes prohibitively expensive. ANN clusters vectors and
    represents each cluster by a centroid, building a tree the query traverses
    to a localized subset — explicitly trading a little precision (you don't
    examine every document) for large gains in speed and cost. The engineering
    decision is therefore: how much has filtering already narrowed the search?
    Heavily filtered or partitioned → KNN. Primary, unfiltered, large-scale →
    ANN. Defaulting to ANN everywhere adds index-maintenance cost and recall
    loss you didn't need to pay.
stance: >-
  Approximate nearest neighbor indexing is the wrong default; exact KNN is
  correct whenever the candidate set is already small or heavily filtered.
related:
  - INS-260325-E652
  - INS-260402-28BA
  - INS-260326-CAAB
  - INS-260410-2067
  - INS-260409-2A51
  - INS-260605-B8D3
  - INS-260625-CF5E
  - INS-260625-211E
  - INS-260625-3A4F
  - INS-260627-CFA6
---
Vectorizing a problem turns text matching into distance computation, but how you compute that distance should depend on the candidate set size. Exact KNN scans every row's embedding — perfectly fine when another filter has already shrunk the set (the example given: Gmail searching one user's mail is a small, partitioned result set). Building and maintaining an ANN index there is wasted complexity.

ANN earns its keep only when vector search is the primary retrieval mechanism over a large corpus, where computing query-to-document distance against every row becomes prohibitively expensive. ANN clusters vectors and represents each cluster by a centroid, building a tree the query traverses to a localized subset — explicitly trading a little precision (you don't examine every document) for large gains in speed and cost. The engineering decision is therefore: how much has filtering already narrowed the search? Heavily filtered or partitioned → KNN. Primary, unfiltered, large-scale → ANN. Defaulting to ANN everywhere adds index-maintenance cost and recall loss you didn't need to pay.

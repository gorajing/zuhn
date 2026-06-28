---
id: INS-260628-5521
domain: ai-development
topic: embeddings
title: Public embedding benchmarks don't predict the best model for your data
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - mteb
  - benchmark-overfit
  - model-selection
  - voyage
  - retrieval
sources:
  - type: youtube
    title: How to look at your data — Jeff Huber (Chroma) + Jason Liu (567)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jryZvCuA0Uc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On the Weights & Biases chatbot, the originally-chosen
    text-embedding-3-small ranked worst and MTEB-leading Jina v3 underperformed,
    while Voyage-3-large won — none of which the public leaderboard predicted.
  standard: >-
    Huber grounds this in a real evaluation of the Weights & Biases chatbot
    across four embedding models, measuring recall@10. Three findings undercut
    benchmark-driven selection: (1) the application's original model,
    text-embedding-3-small, actually performed the worst of the four; (2) Jina
    embeddings v3, which scores far above others on MTEB English, did not
    perform well on this application; and (3) Voyage-3-large performed best — a
    fact discoverable only by running the fast eval on real data.


    The deeper reason is distribution mismatch. Benchmark datasets like MTEB are
    'overly clean' (e.g., a query whose answer sentence literally begins with
    the query phrase), whereas real-world data and queries are never that clean.
    A model tuned to clean benchmark distributions can lose to another model on
    messy production data.


    The actionable rule: treat leaderboard rank as a hypothesis to test, not a
    decision. Before switching models, empirically confirm a higher success rate
    on your queries, and weigh the real costs of re-embedding (latency, price,
    API flakiness).
stance: >-
  MTEB and similar public leaderboards fail to predict which embedding model
  performs best on your data, so model selection must be decided by a fast eval
  on your own queries.
related:
  - INS-260410-A365
  - INS-260328-0DFE
  - INS-260403-699A
  - INS-260423-D900
  - INS-260519-7744
---
Huber grounds this in a real evaluation of the Weights & Biases chatbot across four embedding models, measuring recall@10. Three findings undercut benchmark-driven selection: (1) the application's original model, text-embedding-3-small, actually performed the worst of the four; (2) Jina embeddings v3, which scores far above others on MTEB English, did not perform well on this application; and (3) Voyage-3-large performed best — a fact discoverable only by running the fast eval on real data.

The deeper reason is distribution mismatch. Benchmark datasets like MTEB are 'overly clean' (e.g., a query whose answer sentence literally begins with the query phrase), whereas real-world data and queries are never that clean. A model tuned to clean benchmark distributions can lose to another model on messy production data.

The actionable rule: treat leaderboard rank as a hypothesis to test, not a decision. Before switching models, empirically confirm a higher success rate on your queries, and weigh the real costs of re-embedding (latency, price, API flakiness).

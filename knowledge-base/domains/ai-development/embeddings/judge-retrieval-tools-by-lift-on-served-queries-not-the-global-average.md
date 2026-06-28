---
id: INS-260625-1022
domain: ai-development
topic: embeddings
title: 'Judge retrieval tools by lift on served queries, not the global average'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evaluation
  - ab-testing
  - semantic-search
  - metrics
  - benchmarking
sources:
  - type: youtube
    title: 'RAG is dead, right?? — Kuba Rogut, Turbopuffer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UM6sFg_jdlE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Semantic search gave Cursor 12.5–13.5% answer-accuracy gains across models
    (≈24% on the pre-Composer-2 model), yet online AB metrics looked small (2.6%
    retention, 2.2% fewer dissatisfied requests) only because most queries don't
    trigger the tool.
  standard: >-
    Cursor's internal benchmark showed semantic search lifting answer accuracy
    by roughly 12.5–13.5% across models, and nearly 24% on their composer model
    before Composer 2 — large, real gains. But their live online AB test
    reported far smaller-looking numbers: about 2.6% more code retention in
    large codebases and a 2.2% drop in dissatisfied requests. The reconciliation
    is a measurement subtlety: semantic search isn't used on every query. If you
    hand the tool to 100 random queries, only a fraction actually benefit from
    it, so any global average is diluted by all the queries the tool never
    touched. The methodological lesson generalizes well beyond retrieval: when a
    feature fires conditionally, evaluating it on the full population
    systematically understates its true effect, and a modest aggregate number
    can hide a strong per-served-query lift. To value such a feature honestly,
    segment to the queries (or sessions) it actually serves, or you'll wrongly
    conclude it isn't worth the cost.
stance: >-
  Aggregate AB-test numbers understate a retrieval tool's value because only a
  subset of queries ever invoke it, so you should measure lift on served queries
  rather than the global average.
related:
  - INS-260327-7A48
  - INS-260402-1D32
  - INS-260626-518C
  - INS-260627-C44E
  - INS-260628-930A
  - PRI-260406-D017
---
Cursor's internal benchmark showed semantic search lifting answer accuracy by roughly 12.5–13.5% across models, and nearly 24% on their composer model before Composer 2 — large, real gains. But their live online AB test reported far smaller-looking numbers: about 2.6% more code retention in large codebases and a 2.2% drop in dissatisfied requests. The reconciliation is a measurement subtlety: semantic search isn't used on every query. If you hand the tool to 100 random queries, only a fraction actually benefit from it, so any global average is diluted by all the queries the tool never touched. The methodological lesson generalizes well beyond retrieval: when a feature fires conditionally, evaluating it on the full population systematically understates its true effect, and a modest aggregate number can hide a strong per-served-query lift. To value such a feature honestly, segment to the queries (or sessions) it actually serves, or you'll wrongly conclude it isn't worth the cost.

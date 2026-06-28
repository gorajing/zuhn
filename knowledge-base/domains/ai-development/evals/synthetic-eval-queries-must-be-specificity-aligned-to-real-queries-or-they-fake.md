---
id: INS-260628-1AF2
domain: ai-development
topic: evals
title: >-
  Synthetic eval queries must be specificity-aligned to real queries or they
  fake success
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - synthetic-data
  - query-generation
  - eval-validity
  - retrieval
  - cold-start
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
    You can bootstrap a golden dataset by teaching an LLM to write queries, but
    only if you semantically align their specificity to real queries — naive
    'write a question for this doc' produces overly-specific queries that
    overstate your success rate.
  standard: >-
    When you have documents and chunks but no queries yet, you can use an LLM to
    generate them — but naive prompting ('Hey LLM, write a question for this
    document') is 'not a great strategy.' The failure mode is that synthetic
    queries become overly specific to the source document, so retrieval
    trivially succeeds and you fool yourself into thinking the system works.


    Chroma's research instead semantically aligns the specificity of generated
    queries to the distribution of real queries users actually ask. The
    validation comes from comparing two curves: ground-truth queries (logged
    real queries) versus synthetically generated ones, across embedding models.
    Trust requires that the synthetic curve tracks the ground-truth curve
    closely AND preserves the same model ranking — no 'big flips' between
    ground-truth and generated ordering.


    The takeaway: synthetic data is a legitimate cold-start tool when you lack
    users, but its validity hinges on matching real-query specificity, and you
    should verify that alignment before trusting any eval built on it. Once you
    have real users, switch to real logged queries.
stance: >-
  Naively LLM-generated eval queries are too clean and trick you into believing
  your retrieval works; synthetic queries are only trustworthy when their
  specificity is aligned to real user queries.
related:
  - INS-260605-278E
  - INS-260627-3AF7
  - INS-260627-C112
  - INS-260627-0EEE
  - INS-260628-84C3
---
When you have documents and chunks but no queries yet, you can use an LLM to generate them — but naive prompting ('Hey LLM, write a question for this document') is 'not a great strategy.' The failure mode is that synthetic queries become overly specific to the source document, so retrieval trivially succeeds and you fool yourself into thinking the system works.

Chroma's research instead semantically aligns the specificity of generated queries to the distribution of real queries users actually ask. The validation comes from comparing two curves: ground-truth queries (logged real queries) versus synthetically generated ones, across embedding models. Trust requires that the synthetic curve tracks the ground-truth curve closely AND preserves the same model ranking — no 'big flips' between ground-truth and generated ordering.

The takeaway: synthetic data is a legitimate cold-start tool when you lack users, but its validity hinges on matching real-query specificity, and you should verify that alignment before trusting any eval built on it. Once you have real users, switch to real logged queries.

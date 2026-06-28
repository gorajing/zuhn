---
id: INS-260628-ECEB
domain: ai-development
topic: evals
title: Evaluate AI infrastructure with extrinsic metrics tied to customer outcomes
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evaluation
  - metrics
  - knowledge-graph
  - product
  - extrinsic-evaluation
  - customer-value
sources:
  - type: youtube
    title: >-
      Multi Agent AI and Network Knowledge Graphs for Change — Ola Mabadeje,
      Cisco
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m0dxZ-NDKHo'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For their knowledge graph, Cisco deliberately tracks extrinsic metrics that
    map to the customer's use case rather than intrinsic graph-quality metrics.
  standard: >-
    When evaluating a sub-component of an AI system — embeddings, a retriever, a
    knowledge graph — there's a strong pull toward intrinsic metrics: graph
    density, retrieval precision@k, embedding coherence. These are easy to
    compute and feel rigorous. Cisco made the opposite call: for the knowledge
    graph they measure extrinsic metrics 'particularly, not intrinsic ones,
    because we want to map this back to the customer's use case.'


    The reasoning is that intrinsic quality is necessary but not sufficient — a
    graph can score well on internal metrics while still failing to help the
    agent reduce production change failures, which is the only outcome the
    customer pays for. Tying evaluation to the downstream task forces every
    component improvement to justify itself in terms of end-user value, and
    prevents the team from optimizing a number that doesn't move the business
    outcome. The discipline: for each AI building block, define the
    customer-facing metric it ultimately serves, and evaluate the block against
    that, treating intrinsic scores as diagnostics rather than goals.
stance: >-
  AI components like knowledge graphs should be measured by extrinsic metrics
  mapped to the customer use case, not intrinsic component-quality scores.
related:
  - INS-260327-73BE
  - INS-260325-E23D
  - INS-260409-1E5E
  - INS-260626-407C
  - INS-260626-78D1
  - INS-260628-5BC9
  - INS-260628-4BA2
  - INS-260625-0141
---
When evaluating a sub-component of an AI system — embeddings, a retriever, a knowledge graph — there's a strong pull toward intrinsic metrics: graph density, retrieval precision@k, embedding coherence. These are easy to compute and feel rigorous. Cisco made the opposite call: for the knowledge graph they measure extrinsic metrics 'particularly, not intrinsic ones, because we want to map this back to the customer's use case.'

The reasoning is that intrinsic quality is necessary but not sufficient — a graph can score well on internal metrics while still failing to help the agent reduce production change failures, which is the only outcome the customer pays for. Tying evaluation to the downstream task forces every component improvement to justify itself in terms of end-user value, and prevents the team from optimizing a number that doesn't move the business outcome. The discipline: for each AI building block, define the customer-facing metric it ultimately serves, and evaluate the block against that, treating intrinsic scores as diagnostics rather than goals.

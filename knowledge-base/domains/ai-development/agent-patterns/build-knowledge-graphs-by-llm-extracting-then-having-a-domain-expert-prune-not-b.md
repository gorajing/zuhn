---
id: INS-260628-DD24
domain: ai-development
topic: agent-patterns
title: >-
  Build knowledge graphs by LLM-extracting then having a domain expert prune,
  not by full automation
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - knowledge-graphs
  - extraction
  - human-in-the-loop
  - taxonomy
  - graph-construction
sources:
  - type: youtube
    title: >-
      Wisdom-Driven Knowledge Augmented Generation at Scale - Chin Keong Lam,
      Patho AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=9AQOvT8LnMI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use an LLM graph transformer for the first extraction pass, then interview
    the domain expert to prune spurious relationships, because the taxonomy's
    correctness caps downstream answer quality.
  standard: >-
    There are two extremes for turning text into a knowledge graph: fully manual
    authoring, and a fully automated LLM graph transformer. Lam recommends
    neither alone — he advocates a hybrid where the LLM does the bulk extraction
    and the domain expert you are building the system for then 'prunes the
    graph,' removing the many low-value or wrong relationships an automated pass
    introduces.


    The reason this matters is that the taxonomy is the ceiling: if the graph
    structure is correct the system keeps improving and reaching; if it is
    noisy, no amount of model upgrade rescues the answers. Pruning is cheap
    human leverage applied at exactly the point where it compounds. This is a
    specific instance of human-in-the-loop where the human's job is subtractive
    (curate, delete) rather than additive — the LLM provides recall, the expert
    provides precision.
stance: >-
  Fully automated LLM graph extraction over-generates relationships; the
  highest-quality graph comes from an LLM first pass that a domain expert then
  prunes.
related:
  - INS-260625-0141
  - INS-260626-78D1
  - INS-260628-84C3
  - INS-260605-2A64
  - INS-260402-28BA
  - INS-260628-2FE3
---
There are two extremes for turning text into a knowledge graph: fully manual authoring, and a fully automated LLM graph transformer. Lam recommends neither alone — he advocates a hybrid where the LLM does the bulk extraction and the domain expert you are building the system for then 'prunes the graph,' removing the many low-value or wrong relationships an automated pass introduces.

The reason this matters is that the taxonomy is the ceiling: if the graph structure is correct the system keeps improving and reaching; if it is noisy, no amount of model upgrade rescues the answers. Pruning is cheap human leverage applied at exactly the point where it compounds. This is a specific instance of human-in-the-loop where the human's job is subtractive (curate, delete) rather than additive — the LLM provides recall, the expert provides precision.

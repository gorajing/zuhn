---
id: INS-260628-84C3
domain: ai-development
topic: architecture
title: >-
  Route numerical and quantitative queries to a structured graph query engine,
  not a vector store
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - knowledge-graphs
  - rag
  - numerical-reasoning
  - query-engine
  - evidence-based
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
    Vector RAG excels at semantic similarity but fails at exact arithmetic, so
    route quantitative questions to a graph query engine plus function call for
    evidence-grade answers.
  standard: >-
    Vector stores are optimized for semantic similarity, which makes them
    structurally bad at questions whose answer is a calculated number — ask for
    revenue change between 2021 and 2022 and a vector RAG returns a vague
    passage instead of a figure. The fix is not better prompting but a different
    data path: store the facts in structured form (e.g. an 'Apple financial
    data' graph), let a query engine SELECT the relevant figures, and emit a
    function call that computes the exact result.


    The payoff is evidence-based decision making. In Lam's competitive-analysis
    chatbot the marketing team's decisions hinged on precise numbers, not
    retrieved prose, so a wrong figure literally loses the contract. The general
    principle: decompose the query by what kind of answer it demands.
    Comparative and arithmetic questions belong on a deterministic structured
    path; open-ended semantic questions can stay on vector retrieval. Treating
    one retrieval primitive as universal is the failure mode.
stance: >-
  When the answer is a precise number, retrieving over a vector store is the
  wrong primitive; query a structured graph and let a function call compute the
  figure.
related:
  - INS-260327-73BE
  - INS-260329-7A6A
  - INS-260402-5ACE
  - INS-260402-5BE6
  - INS-260409-1E5E
  - INS-260409-8DA0
  - INS-260605-2A64
  - INS-260625-CC7C
  - INS-260628-DD24
  - INS-260628-DD9D
---
Vector stores are optimized for semantic similarity, which makes them structurally bad at questions whose answer is a calculated number — ask for revenue change between 2021 and 2022 and a vector RAG returns a vague passage instead of a figure. The fix is not better prompting but a different data path: store the facts in structured form (e.g. an 'Apple financial data' graph), let a query engine SELECT the relevant figures, and emit a function call that computes the exact result.

The payoff is evidence-based decision making. In Lam's competitive-analysis chatbot the marketing team's decisions hinged on precise numbers, not retrieved prose, so a wrong figure literally loses the contract. The general principle: decompose the query by what kind of answer it demands. Comparative and arithmetic questions belong on a deterministic structured path; open-ended semantic questions can stay on vector retrieval. Treating one retrieval primitive as universal is the failure mode.

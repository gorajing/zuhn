---
id: INS-260605-FE8E
domain: ai-development
topic: agent-patterns
title: >-
  Grep and semantic search find different code, so they are complementary not
  competing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - semantic-search
  - grep
  - retrieval
  - tool-design
sources:
  - type: youtube
    title: >-
      Benchmarking semantic code retrieval on Claude Code — Kuba Rogut,
      Turbopuffer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zKk7sDMGDEQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Semantic search wins at finding behavior-adjacent files that share no
    keywords; grep wins at tracing imports and exact-symbol lookups — so provide
    both.
  standard: >-
    Across 50 ContextBench tasks the aggregate recall of grep and semantic
    search was similar, but breaking it down revealed stark per-task divergence.
    Semantic search excelled when the relevant files were behaviorally related
    but lexically dissimilar — e.g. handling many ORMs across different
    libraries where keyword search missed the connections. Grep excelled when
    the task was tracing through imports or when the right keyword surfaced in
    the first or second tool call, letting it chase exact matches.


    The practical conclusion is to stop framing retrieval as semantic-vs-grep.
    Different tasks need different access patterns, and the long-term winners
    will be those who provide a suite of lightweight tools to shrink a
    billion-token context into the right million in multiple ways. Don't replace
    grep with vectors; add vectors as another lens and let task structure
    dictate which fires.
stance: >-
  Semantic search and keyword grep win on systematically different task types,
  so the right architecture offers both rather than choosing one.
related:
  - INS-260320-DDFE
  - INS-260409-156A
  - INS-260410-C5A4
  - INS-260605-F5FB
  - INS-260605-75B7
  - INS-260605-B8D3
  - INS-260403-7D7A
  - INS-260625-3A4F
  - INS-260605-5013
---
Across 50 ContextBench tasks the aggregate recall of grep and semantic search was similar, but breaking it down revealed stark per-task divergence. Semantic search excelled when the relevant files were behaviorally related but lexically dissimilar — e.g. handling many ORMs across different libraries where keyword search missed the connections. Grep excelled when the task was tracing through imports or when the right keyword surfaced in the first or second tool call, letting it chase exact matches.

The practical conclusion is to stop framing retrieval as semantic-vs-grep. Different tasks need different access patterns, and the long-term winners will be those who provide a suite of lightweight tools to shrink a billion-token context into the right million in multiple ways. Don't replace grep with vectors; add vectors as another lens and let task structure dictate which fires.

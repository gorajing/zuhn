---
id: INS-260605-5013
domain: ai-development
topic: embeddings
title: >-
  Embeddings are cached compute that amortizes codebase understanding across
  agents
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - embeddings
  - vector-search
  - agentic-search
  - caching
  - token-economics
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
    Embeddings front-load the cost of understanding a codebase once, replacing
    the repeated grep-read-grep compute that every agent session otherwise pays.
  standard: >-
    Claude Code's default agentic search greps the file system, reads files, and
    greps again to find and understand code — and it repeats this whole
    trajectory on every session, even for identical questions. A single trace
    might burn only ~6,000 tokens, but multiplied across every session and every
    parallel agent it compounds. Vector indexing inverts the cost curve: you pay
    an upfront chunk-embed-index cost, then agents query the cache of semantic
    meaning and retrieve the right chunks faster and with token savings.


    The argument gets stronger as agent fan-out increases — the speaker notes he
    runs three agents at once, not one. When the same semantic understanding is
    consumed by many concurrent agents, the one-time indexing cost is amortized
    across all of them, turning a marginal per-session saving into a meaningful
    structural one. Treat embeddings less as 'search' and more as a compute
    cache for codebase comprehension.
stance: >-
  Indexing a codebase into a vector store pays off because it caches semantic
  meaning that agentic grep otherwise recomputes on every session and every
  parallel agent.
related:
  - INS-260605-9E46
  - PRI-260328-8317
  - INS-260605-FE8E
  - INS-260605-C627
  - PRI-260411-9CB1
---
Claude Code's default agentic search greps the file system, reads files, and greps again to find and understand code — and it repeats this whole trajectory on every session, even for identical questions. A single trace might burn only ~6,000 tokens, but multiplied across every session and every parallel agent it compounds. Vector indexing inverts the cost curve: you pay an upfront chunk-embed-index cost, then agents query the cache of semantic meaning and retrieve the right chunks faster and with token savings.

The argument gets stronger as agent fan-out increases — the speaker notes he runs three agents at once, not one. When the same semantic understanding is consumed by many concurrent agents, the one-time indexing cost is amortized across all of them, turning a marginal per-session saving into a meaningful structural one. Treat embeddings less as 'search' and more as a compute cache for codebase comprehension.

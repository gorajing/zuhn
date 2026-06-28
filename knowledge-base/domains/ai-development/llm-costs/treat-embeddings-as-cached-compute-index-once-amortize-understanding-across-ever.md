---
id: INS-260625-96AA
domain: ai-development
topic: llm-costs
title: >-
  Treat embeddings as cached compute: index once, amortize understanding across
  every session
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - caching
  - token-economics
  - agentic-search
  - indexing
  - mental-model
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
    Embeddings are cached compute — a one-time indexing cost that lets agents
    retrieve understanding cheaply at runtime, versus grep-read-assess-repeat
    loops that re-derive the same understanding (and re-burn the same tokens)
    every session.
  standard: >-
    Turbopuffer's framing is that embeddings and semantic search are a form of
    cached compute, and the clearest way to see it is to compare two agent
    traces. A Claude-Code-style trace does per-session discovery: to answer 'how
    does metadata filtering work,' it must grep, read, assess, and repeat until
    it reaches a satisfied state. Ten agents, ten developers, ten days asking
    the same question means ten full re-derivations — and what looks like 6,000
    tokens is just one sub-step of one agent. A Cursor-style trace pays an
    upfront cost to parse, chunk, and embed the codebase once, then answers the
    same query at runtime with a lightweight semantic lookup. The upfront
    indexing is the cache write; every subsequent retrieval is a cache hit that
    saves tokens, time, and money. This is why teams that were heavy Claude Code
    users report switching to Cursor for speed — not because grep is wrong, but
    because re-deriving context every session is uncached compute. The decision
    rule: when the same corpus is queried repeatedly across sessions and people,
    pay to index; when it's a one-off, grep is fine.
stance: >-
  Pre-indexing a corpus as embeddings is worth its upfront cost because it
  caches retrieval compute that grep-based agents otherwise re-pay, in tokens
  and latency, on every single session.
related:
  - INS-260501-E26C
  - INS-260605-5013
  - INS-260605-5159
  - PRI-260406-8B75
  - INS-260329-4842
  - INS-260627-6757
---
Turbopuffer's framing is that embeddings and semantic search are a form of cached compute, and the clearest way to see it is to compare two agent traces. A Claude-Code-style trace does per-session discovery: to answer 'how does metadata filtering work,' it must grep, read, assess, and repeat until it reaches a satisfied state. Ten agents, ten developers, ten days asking the same question means ten full re-derivations — and what looks like 6,000 tokens is just one sub-step of one agent. A Cursor-style trace pays an upfront cost to parse, chunk, and embed the codebase once, then answers the same query at runtime with a lightweight semantic lookup. The upfront indexing is the cache write; every subsequent retrieval is a cache hit that saves tokens, time, and money. This is why teams that were heavy Claude Code users report switching to Cursor for speed — not because grep is wrong, but because re-deriving context every session is uncached compute. The decision rule: when the same corpus is queried repeatedly across sessions and people, pay to index; when it's a one-off, grep is fine.

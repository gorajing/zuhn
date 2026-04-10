---
id: INS-260410-264E
domain: ai-development
topic: system-building
title: Skip RAG entirely if your knowledge base fits in context
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - rag
  - long-context
  - prompt-caching
  - simplicity
sources:
  - type: blog
    title: Contextual Retrieval in AI Systems
    url: 'https://www.anthropic.com/engineering/contextual-retrieval'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If your corpus is under ~500 pages, just put the whole thing in the prompt
    and cache it — no RAG infrastructure required.
  standard: >-
    Anthropic explicitly recommends not building RAG at all when the knowledge
    base is under 200K tokens (~500 pages). With prompt caching, the entire
    corpus loads once and is referenced across calls at >2x lower latency and up
    to 90% lower cost. No chunking, no vector store, no retrieval failure modes
    to debug.


    This is a useful complexity gate. Engineers default to RAG because it's the
    canonical pattern, but RAG exists to scale past context limits — when you
    don't need that scale, you're paying every cost (chunk boundary tuning,
    retrieval recall debugging, infrastructure ops) for no benefit. Build RAG
    only when you've outgrown the simpler option, not as the starting point.
stance: >-
  For knowledge bases under ~200K tokens, dumping the whole corpus into the
  prompt with caching is faster, cheaper, and more accurate than building a RAG
  pipeline.
related:
  - INS-260330-2294
  - INS-260410-3F1A
  - INS-260409-1078
  - INS-260410-2F8D
  - INS-260410-B282
  - INS-260410-E660
---
Anthropic explicitly recommends not building RAG at all when the knowledge base is under 200K tokens (~500 pages). With prompt caching, the entire corpus loads once and is referenced across calls at >2x lower latency and up to 90% lower cost. No chunking, no vector store, no retrieval failure modes to debug.

This is a useful complexity gate. Engineers default to RAG because it's the canonical pattern, but RAG exists to scale past context limits — when you don't need that scale, you're paying every cost (chunk boundary tuning, retrieval recall debugging, infrastructure ops) for no benefit. Build RAG only when you've outgrown the simpler option, not as the starting point.

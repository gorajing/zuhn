---
id: INS-260605-59FE
domain: ai-development
topic: system-design
title: 'Context engineering is ~80% search tool design, not context curation'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - agentic-search
  - retrieval
  - rag
sources:
  - type: youtube
    title: 'Agentic Search for Context Engineering — Leonie Monigatti, Elastic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ynJyIKwjonM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The under-credited lever in context engineering is the search tool deciding
    what enters the window, not the curation arrow afterward.
  standard: >-
    Context engineering is usually framed as the 'arrow' from many context
    sources into the context window, with attention paid to curation.
    Monigatti's hot take is that this framing under-credits what actually powers
    that arrow: the search tool(s) that decide what gets pulled in the first
    place. She estimates context engineering is roughly 80% agentic search.


    The practical implication is that teams obsessing over chunking, reranking,
    and prompt assembly are optimizing downstream of the real bottleneck. If the
    search tool can't surface the right content for an arbitrary query, no
    amount of curation downstream recovers it. Good search is genuinely hard —
    vector (dense/sparse/multi-vector), keyword, and many indexing techniques
    each fit different latency and recall requirements — which is why a single
    tool rarely suffices and why search-tool design deserves first-class
    engineering attention.
stance: >-
  The search tools that decide what flows from sources into the context window
  matter more than any curation step that follows.
related:
  - INS-260605-9900
  - INS-260410-60C8
  - INS-260603-DFA6
  - INS-260327-F625
  - INS-260405-880C
---
Context engineering is usually framed as the 'arrow' from many context sources into the context window, with attention paid to curation. Monigatti's hot take is that this framing under-credits what actually powers that arrow: the search tool(s) that decide what gets pulled in the first place. She estimates context engineering is roughly 80% agentic search.

The practical implication is that teams obsessing over chunking, reranking, and prompt assembly are optimizing downstream of the real bottleneck. If the search tool can't surface the right content for an arbitrary query, no amount of curation downstream recovers it. Good search is genuinely hard — vector (dense/sparse/multi-vector), keyword, and many indexing techniques each fit different latency and recall requirements — which is why a single tool rarely suffices and why search-tool design deserves first-class engineering attention.

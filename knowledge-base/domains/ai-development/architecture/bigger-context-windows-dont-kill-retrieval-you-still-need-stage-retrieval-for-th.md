---
id: INS-260625-05FF
domain: ai-development
topic: architecture
title: >-
  Bigger context windows don't kill retrieval — you still need stage retrieval
  for 'the right million'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-windows
  - stage-retrieval
  - long-context
  - agentic-retrieval
  - jeff-dean
  - retrieval
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
    Per Jeff Dean, even a trillion-token context window needs stage retrieval —
    'you don't need a trillion at once, you need the right million' — so
    retrieval becomes an iterative search-reason-fetch loop, not a one-shot
    vector call.
  standard: >-
    A common pillar of the 'RAG is dead' argument is that long context windows
    will make retrieval obsolete. The talk rebuts this with Jeff Dean's framing:
    it doesn't matter if you reach a trillion-token context window — what you
    actually need is stage retrieval, a lightweight mechanism to narrow that
    trillion down to the right million at a time. 'You don't need a trillion at
    once, you need the right million.' This is the same problem Turbopuffer sees
    with customers holding trillions of tokens: the value is in getting down to
    the right 1M, right 100K, right 10K to feed the window. The corresponding
    shift in practice is from one-shot RAG (vector search once, dump into
    context) to iterative agentic retrieval — agents reason across several
    steps, search semantically or via full text as needed, and fetch only what
    each step requires, 'searching to understand more' in a loop. The design
    implication: don't bet that scaling context lets you skip retrieval; instead
    invest in a fast narrowing layer, because selecting the right tokens is the
    bottleneck regardless of how big the window gets.
stance: >-
  Ever-larger context windows do not eliminate the need for retrieval; serious
  systems still require a lightweight stage-retrieval layer that narrows
  trillions of tokens down to the right million.
related:
  - INS-260409-384A
  - INS-260624-F048
  - INS-260625-BF8B
  - INS-260625-429B
  - INS-260627-E257
---
A common pillar of the 'RAG is dead' argument is that long context windows will make retrieval obsolete. The talk rebuts this with Jeff Dean's framing: it doesn't matter if you reach a trillion-token context window — what you actually need is stage retrieval, a lightweight mechanism to narrow that trillion down to the right million at a time. 'You don't need a trillion at once, you need the right million.' This is the same problem Turbopuffer sees with customers holding trillions of tokens: the value is in getting down to the right 1M, right 100K, right 10K to feed the window. The corresponding shift in practice is from one-shot RAG (vector search once, dump into context) to iterative agentic retrieval — agents reason across several steps, search semantically or via full text as needed, and fetch only what each step requires, 'searching to understand more' in a loop. The design implication: don't bet that scaling context lets you skip retrieval; instead invest in a fast narrowing layer, because selecting the right tokens is the bottleneck regardless of how big the window gets.

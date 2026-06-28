---
id: INS-260625-4248
domain: ai-development
topic: product-strategy
title: 'Associations only form in weights, which is why RAG can''t be the endgame'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rag
  - retrieval
  - memory
  - kv-cache
  - weights-vs-context
sources:
  - type: youtube
    title: 'Memory and Continual Learning: Engram''s Dan Biderman and Jessy Lin'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=aiR7F4jqjXY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The hard problem in retrieval is not what to store but knowing what to query
    for, and the unprompted associations that make an expert valuable can only
    happen in weights, not in a RAG lookup.
  standard: >-
    The founders argue the core limitation of retrieval systems isn't storage or
    where to put things — it's addressing: knowing what to look for in the first
    place. Models often don't have the intuition for what to search, especially
    when constrained to keyword search (which is easier to scale in RL and
    cheaper on infra than embeddings). That intuition lives in weights.


    The deeper point is associative recall. If you are always doing RAG, you can
    only return what you were asked for; you can't surface 'you didn't ask, but
    someone on the team is doing related work you'd want to know about.' Those
    proactive associations require the knowledge to be internalized, not
    retrieved on demand. They frame their approach as a 'RAG killer' — not
    because retrieval disappears (caching and RAG still have roles for volatile
    facts like a hotel room number) but because the high-value, repetitive,
    associative work should be instinctual to the model.


    The unsolved boundary is what to internalize versus externalize — the same
    open question as biological memory. The guidance is to minimize heuristic
    filters ('keep this, discard that'): like a brain exposed to TikTok garbage,
    a good system should learn from messy data without going off the rails,
    rather than relying on brittle hand-tuned data filters.
stance: >-
  Cross-context associations and knowing what to retrieve can only emerge from
  knowledge baked into weights, so retrieval and caching are complements, not
  substitutes, for continual learning.
related:
  - INS-260410-4D86
  - INS-260625-211E
  - INS-260628-930A
  - INS-260409-8DA0
  - INS-260524-8320
  - INS-260409-3602
---
The founders argue the core limitation of retrieval systems isn't storage or where to put things — it's addressing: knowing what to look for in the first place. Models often don't have the intuition for what to search, especially when constrained to keyword search (which is easier to scale in RL and cheaper on infra than embeddings). That intuition lives in weights.

The deeper point is associative recall. If you are always doing RAG, you can only return what you were asked for; you can't surface 'you didn't ask, but someone on the team is doing related work you'd want to know about.' Those proactive associations require the knowledge to be internalized, not retrieved on demand. They frame their approach as a 'RAG killer' — not because retrieval disappears (caching and RAG still have roles for volatile facts like a hotel room number) but because the high-value, repetitive, associative work should be instinctual to the model.

The unsolved boundary is what to internalize versus externalize — the same open question as biological memory. The guidance is to minimize heuristic filters ('keep this, discard that'): like a brain exposed to TikTok garbage, a good system should learn from messy data without going off the rails, rather than relying on brittle hand-tuned data filters.

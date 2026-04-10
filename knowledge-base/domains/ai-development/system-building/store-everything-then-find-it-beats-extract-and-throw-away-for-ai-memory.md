---
id: INS-260409-B13F
domain: ai-development
topic: system-building
title: Store-everything-then-find-it beats extract-and-throw-away for AI memory
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - memory
  - agents
  - retrieval
  - architecture
  - verbatim-storage
sources:
  - type: blog
    title: >-
      GitHub - milla-jovovich/mempalace: The highest-scoring AI memory system
      ever benchmarked. And it's free.
    url: 'https://github.com/milla-jovovich/mempalace'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemPalace stores conversations verbatim and uses structure plus semantic
    search to find what matters at query time, rather than extracting 'user
    prefers Postgres' and discarding the conversation that explained why.
  standard: >-
    Most AI memory systems compress at write time — extract entities, summarize
    sessions, drop the raw conversation. MemPalace argues this loses the context
    that makes facts useful: you remember 'user prefers Postgres' but lose the
    reasoning about concurrent writes and 10GB datasets. The alternative is to
    store everything verbatim in a vector DB and defer all decisions about
    relevance to query time. The bet is that LLMs are now cheap enough at
    inference time to filter 22,000 memories semantically, so the expensive
    write-time curation loop is obsolete. This mirrors the Zuhn design choice to
    keep every source verbatim and compress only into a separate principles
    layer — the raw insights stay.
stance: >-
  Deferring the decision of what is worth remembering from write-time extraction
  to read-time search produces higher-fidelity AI memory than extraction-based
  summarization.
related:
  - INS-260325-175B
  - INS-260329-3C75
  - INS-260403-E5D4
  - INS-260403-FFF0
  - INS-260409-2A51
  - PRI-260406-1AC6
---
Most AI memory systems compress at write time — extract entities, summarize sessions, drop the raw conversation. MemPalace argues this loses the context that makes facts useful: you remember 'user prefers Postgres' but lose the reasoning about concurrent writes and 10GB datasets. The alternative is to store everything verbatim in a vector DB and defer all decisions about relevance to query time. The bet is that LLMs are now cheap enough at inference time to filter 22,000 memories semantically, so the expensive write-time curation loop is obsolete. This mirrors the Zuhn design choice to keep every source verbatim and compress only into a separate principles layer — the raw insights stay.

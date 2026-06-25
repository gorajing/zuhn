---
id: INS-260605-2531
domain: ai-development
topic: llm-costs
title: Aggressive context pruning destroys the input cache and usually costs more
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-caching
  - context-window
  - cost-optimization
  - cache-hit-ratio
sources:
  - type: youtube
    title: 'Give Your Agent a Computer — Nico Albanese, Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wflNENRSUb4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Editing earlier messages to keep token usage between 40-60% of the window
    invalidates the input cache on every prune, killing the cache-read ratio
    that drives speed, cost, and performance.
  standard: >-
    When models had ~400k windows, Albanese stripped earlier tool calls once
    usage crossed a threshold to stay between 40% and 60% of the context window.
    The hidden cost: every edit to earlier context invalidates the prompt cache,
    forcing a full re-read. With million-token windows the pressure to prune is
    gone, so he now runs with zero compaction and reports a ~95% cache-read
    ratio on his coding agent and ~90-91% on his background-agent system that
    has pushed ~3.8 billion tokens in a month or two. The tradeoff he names
    explicitly: a high cache-read ratio is more valuable than a low token count,
    because cache hits buy speed, lower cost, and better performance. The lesson
    generalizes beyond his stack: context-management strategies should be
    evaluated against cache behavior, not just raw token count.
stance: >-
  Stripping old tool calls to stay under a token budget invalidates the input
  cache every time, so on large-context models leaving context intact wins.
related:
  - INS-260605-E831
  - INS-260605-4A2D
  - INS-260321-18D0
  - INS-260605-048B
  - INS-260410-699C
  - INS-260625-5045
---
When models had ~400k windows, Albanese stripped earlier tool calls once usage crossed a threshold to stay between 40% and 60% of the context window. The hidden cost: every edit to earlier context invalidates the prompt cache, forcing a full re-read. With million-token windows the pressure to prune is gone, so he now runs with zero compaction and reports a ~95% cache-read ratio on his coding agent and ~90-91% on his background-agent system that has pushed ~3.8 billion tokens in a month or two. The tradeoff he names explicitly: a high cache-read ratio is more valuable than a low token count, because cache hits buy speed, lower cost, and better performance. The lesson generalizes beyond his stack: context-management strategies should be evaluated against cache behavior, not just raw token count.

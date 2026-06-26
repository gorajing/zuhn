---
id: INS-260605-9925
domain: ai-development
topic: system-design
title: >-
  Prefer eventual consistency with a bounded wait over before-hooks in agent
  loops
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - before-hooks
  - context-caching
  - eventual-consistency
  - rag
  - agent-loop
  - performance
sources:
  - type: youtube
    title: >-
      Make your own event-sourced agent harness using stream processors — Jonas
      Templestein, Iterate
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vi-2nasppAg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't let plugins block before an event/LLM call; instead wait a bounded
    window (~200ms) for optional enrichment and proceed regardless, so a slow
    plugin degrades quality rather than breaking the system.
  standard: >-
    Templestein is 'very against before-hooks' and cites real damage in Open
    Claude-style harnesses: synchronous pre-LLM hooks broke context caching and
    caused massive performance regressions and cost increases, because mutating
    the prompt before the request invalidates the cache. His event-sourced model
    deliberately omits a general before-hook — only the platform's own built-in
    processors can stop an event from being appended (which is how the
    pause/circuit-breaker is implemented and why a third party can't).


    The recommended pattern is distributed-systems eventual consistency with a
    bounded wait: the agent loop waits up to ~200ms for any safety checker, RAG
    enricher, or prompt-injection guard to contribute, then makes the LLM
    request whether or not the contribution arrived. A RAG processor 'squeezes
    in a little extra context if relevant, but if it doesn't get there in time,
    it's totally chill' — the system stays resilient. This reframes plugins from
    blocking gates into best-effort enrichers, trading guaranteed-but-fragile
    interception for resilient-but-approximate behavior. The acknowledged
    exception is genuinely safety-critical interception, which needs a true
    before-hook the platform reserves for itself.
stance: >-
  Before-hooks in agent loops are harmful because they break context caching and
  serialize the loop; a bounded-wait eventually-consistent design is strictly
  better.
related:
  - INS-260514-F74B
  - INS-260410-761B
  - INS-260323-0539
  - INS-260423-6879
  - INS-260626-411D
---
Templestein is 'very against before-hooks' and cites real damage in Open Claude-style harnesses: synchronous pre-LLM hooks broke context caching and caused massive performance regressions and cost increases, because mutating the prompt before the request invalidates the cache. His event-sourced model deliberately omits a general before-hook — only the platform's own built-in processors can stop an event from being appended (which is how the pause/circuit-breaker is implemented and why a third party can't).

The recommended pattern is distributed-systems eventual consistency with a bounded wait: the agent loop waits up to ~200ms for any safety checker, RAG enricher, or prompt-injection guard to contribute, then makes the LLM request whether or not the contribution arrived. A RAG processor 'squeezes in a little extra context if relevant, but if it doesn't get there in time, it's totally chill' — the system stays resilient. This reframes plugins from blocking gates into best-effort enrichers, trading guaranteed-but-fragile interception for resilient-but-approximate behavior. The acknowledged exception is genuinely safety-critical interception, which needs a true before-hook the platform reserves for itself.

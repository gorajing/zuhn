---
id: INS-260628-32EF
domain: ai-development
topic: llm-costs
title: Inference rate limits exist to enforce a profitable cache band
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rate-limits
  - pricing
  - kv-cache
  - inference-economics
  - gpu-economics
sources:
  - type: youtube
    title: 'Context Platform Engineering to Reduce Token Anxiety — Val Bercovici, WEKA'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NTBX-wxUhHs'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Providers rate-limit to keep each user within a cache-hit-rate band that
    keeps GPUs efficient, so a token subscription is really a purchase of cache
    KB slots in token storage.
  standard: >-
    WEKA reframes inference pricing as a storage problem. When you subscribe to
    a token tier or commit to specific cache reads and writes, what you are
    actually purchasing is cache KB slots in token storage. The provider's SLA
    converts into service-level objectives (time-to-first-token, output tokens
    per request) delivered by the context platform's caching and memory tiers.
    Crucially, rate limits are not arbitrary: because cache hit rate so heavily
    impacts output efficiency, providers incentivize and constrain users to stay
    inside a profitable cache-hit-rate band. Fall out of that band and you would
    'melt the GPU clusters' — so the rate limit is the enforcement mechanism for
    the provider's unit economics.


    The alternative to accepting this is what WEKA calls 'context financial
    engineering' — prompt arbitrage, where you try to be clairvoyant about how
    many cache writes to invest in at 5-minute vs 1-hour TTL against predicted
    cache reads. The talk argues this prediction game is a losing proposition;
    better to engineer the platform (or pick providers) for high cache hit rates
    than to arbitrage token pricing categories. This is a useful mental model
    for anyone negotiating inference contracts or deciding between API,
    subscription, and self-hosted inference.
stance: >-
  AI subscription rate limits are not arbitrary throttles but mechanisms to keep
  users inside a cache-hit-rate band that protects provider GPU economics,
  meaning you are effectively buying KV-cache storage slots.
related:
  - INS-260325-206C
  - INS-260409-8408
  - INS-260423-5F2F
  - INS-260501-74AD
  - INS-260501-E26C
  - INS-260605-2531
  - INS-260605-048B
  - INS-260605-AA03
  - INS-260605-13F9
  - INS-260628-9698
---
WEKA reframes inference pricing as a storage problem. When you subscribe to a token tier or commit to specific cache reads and writes, what you are actually purchasing is cache KB slots in token storage. The provider's SLA converts into service-level objectives (time-to-first-token, output tokens per request) delivered by the context platform's caching and memory tiers. Crucially, rate limits are not arbitrary: because cache hit rate so heavily impacts output efficiency, providers incentivize and constrain users to stay inside a profitable cache-hit-rate band. Fall out of that band and you would 'melt the GPU clusters' — so the rate limit is the enforcement mechanism for the provider's unit economics.

The alternative to accepting this is what WEKA calls 'context financial engineering' — prompt arbitrage, where you try to be clairvoyant about how many cache writes to invest in at 5-minute vs 1-hour TTL against predicted cache reads. The talk argues this prediction game is a losing proposition; better to engineer the platform (or pick providers) for high cache hit rates than to arbitrage token pricing categories. This is a useful mental model for anyone negotiating inference contracts or deciding between API, subscription, and self-hosted inference.

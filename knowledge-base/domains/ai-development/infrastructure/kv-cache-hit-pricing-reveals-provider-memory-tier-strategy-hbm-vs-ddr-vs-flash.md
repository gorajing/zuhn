---
id: INS-260501-E26C
domain: ai-development
topic: infrastructure
title: >-
  KV cache hit pricing reveals provider memory-tier strategy — HBM vs DDR vs
  flash
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - kv-cache
  - memory-tiers
  - hbm
  - rematerialization
  - caching-economics
sources:
  - type: youtube
    title: >-
      How GPT-5, Claude, and Gemini are actually trained and served – Reiner
      Pope
    author: Dwarkesh Patel
    url: 'https://youtu.be/xmkSf5IS-zw'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cache hit price = HBM storage cost; cache miss price = full forward-pass
    recomputation; the ratio tells you provider's caching strategy.
  standard: >-
    Pope's insight: there are two ways to produce a KV cache for a token —
    recompute it from scratch (running a full forward pass through the model) or
    retrieve a previously stored one from memory. The 10x hit/miss price ratio
    reflects the cost ratio between these two paths. But there's a deeper layer:
    providers can store KV in HBM (fastest, most expensive), DDR on host
    (slower, cheaper), or flash (slowest, cheapest). Different pricing tiers can
    be derived for different storage durations.


    For builders: the practical takeaway is that long agent sessions with
    persistent context (Claude Code working on a repo across many tool calls)
    benefit enormously from cache-aware design — the same prefix gets cached
    across calls. Providers that have invested in memory-tier orchestration
    (storing rarely-accessed KV in DDR, frequently-accessed in HBM) can offer
    dramatically better economics for these workloads. Anyone building
    long-running agents should watch cache-hit pricing as a leading indicator of
    provider infrastructure maturity, not just headline token prices.
stance: >-
  The 10x price gap between cache hit and cache miss directly maps to memory
  tier economics: cache hit means the KV stayed in HBM, cache miss means it was
  evicted and must be recomputed (rematerialized) from token IDs.
related:
  - INS-260329-4842
  - INS-260628-9698
  - INS-260628-32EF
  - PRI-260406-8B75
  - INS-260625-96AA
---
Pope's insight: there are two ways to produce a KV cache for a token — recompute it from scratch (running a full forward pass through the model) or retrieve a previously stored one from memory. The 10x hit/miss price ratio reflects the cost ratio between these two paths. But there's a deeper layer: providers can store KV in HBM (fastest, most expensive), DDR on host (slower, cheaper), or flash (slowest, cheapest). Different pricing tiers can be derived for different storage durations.

For builders: the practical takeaway is that long agent sessions with persistent context (Claude Code working on a repo across many tool calls) benefit enormously from cache-aware design — the same prefix gets cached across calls. Providers that have invested in memory-tier orchestration (storing rarely-accessed KV in DDR, frequently-accessed in HBM) can offer dramatically better economics for these workloads. Anyone building long-running agents should watch cache-hit pricing as a leading indicator of provider infrastructure maturity, not just headline token prices.

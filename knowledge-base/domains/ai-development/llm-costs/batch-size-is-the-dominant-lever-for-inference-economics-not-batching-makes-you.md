---
id: INS-260501-3C20
domain: ai-development
topic: llm-costs
title: >-
  Batch size is the dominant lever for inference economics — not batching makes
  you 1000x worse
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - batch-size
  - inference-economics
  - fast-mode
  - latency-tradeoff
  - matx
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
    Batch size compounds — unbatched inference is ~1000x worse economics than
    batched, which is why Fast Mode costs 6x for 2.5x speed and Slow Mode could
    exist at lower price.
  standard: >-
    Pope's roofline analysis: when you do not batch many users together, the
    per-token economics get roughly 1000x worse than if you batch them. This is
    because weight-fetch time is amortized across the batch — fetching the model
    from HBM once costs the same whether 1 user or 1000 users are sharing that
    fetch. The latency-vs-cost frontier is therefore traceable directly to batch
    size.


    The practical implications: (1) Fast Mode (Claude/Codex/Cursor charging 6x
    for 2.5x speed) works because they're running smaller batches per user,
    sacrificing per-token economics for per-user latency. (2) Slow Mode is
    theoretically possible — if you'll wait minutes, you can pay much less
    because they can batch you with thousands of others. (3) For builders, this
    means inference cost projections that assume single-user pricing wildly
    overestimate the cost of batched workloads, and inference cost projections
    that assume batched pricing wildly underestimate the cost of
    latency-sensitive single-user paths.
stance: >-
  The single biggest determinant of token economics is batch size; the same
  hardware running unbatched workloads is roughly three orders of magnitude less
  efficient than batched ones, which is why per-user-pricing tiers (fast/slow
  modes) work the way they do.
related:
  - INS-260405-A22F
  - INS-260501-E8E9
  - INS-260323-7625
  - INS-260410-C022
  - INS-260404-B31C
---
Pope's roofline analysis: when you do not batch many users together, the per-token economics get roughly 1000x worse than if you batch them. This is because weight-fetch time is amortized across the batch — fetching the model from HBM once costs the same whether 1 user or 1000 users are sharing that fetch. The latency-vs-cost frontier is therefore traceable directly to batch size.

The practical implications: (1) Fast Mode (Claude/Codex/Cursor charging 6x for 2.5x speed) works because they're running smaller batches per user, sacrificing per-token economics for per-user latency. (2) Slow Mode is theoretically possible — if you'll wait minutes, you can pay much less because they can batch you with thousands of others. (3) For builders, this means inference cost projections that assume single-user pricing wildly overestimate the cost of batched workloads, and inference cost projections that assume batched pricing wildly underestimate the cost of latency-sensitive single-user paths.

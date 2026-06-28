---
id: INS-260628-BF6A
domain: ai-development
topic: inference
title: 'Cache TTL must match the slow human cadence, not the fast agent cadence'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - kv-cache
  - ttl
  - human-in-the-loop
  - agent-loops
  - prefill
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
    There is a cadence mismatch between fast agent subtasks and slow human
    approvals, so a short cache TTL drops the cache between human turns and
    forces 15-16x re-prefill of the same tokens.
  standard: >-
    WEKA Labs data on billions of tokens shows a critical asymmetry: the median
    time between agent requests is 10-15 seconds, but the mean is in minutes or
    even hours, because a human is in the loop checking tool uses and
    responding. A cache TTL tuned to the fast median (e.g. 1 minute) thrashes —
    it grabs a hit or two, then drops the cache before the human responds,
    forcing a full re-prefill. At a 1-minute TTL, the same chunk of tokens gets
    re-prefilled 15-16 times; extending the TTL drives that multiplier toward 1.


    The actionable lever is to size TTL to the slow human cadence rather than
    the fast agent cadence. Anthropic, for example, offers both 5-minute and
    1-hour cache TTLs. Choosing the 1-hour option (or self-hosting with deep
    memory tiers) lets the system 'ride out' the long gaps where a human is
    deliberating, dramatically raising the hit rate. The cost is that the
    platform must hold far more tokens in cache for far longer — which is
    precisely why memory-tier capacity becomes the binding constraint.
stance: >-
  Cache time-to-live must be sized to the slow human-in-the-loop response
  cadence (minutes to hours), not the fast agent-iteration cadence, or identical
  context gets re-prefilled 15+ times.
related:
  - INS-260329-F886
  - INS-260402-1D32
  - INS-260405-3B54
  - INS-260514-F74B
  - INS-260627-FFC8
  - INS-260627-13BF
  - INS-260626-411D
  - INS-260325-6150
---
WEKA Labs data on billions of tokens shows a critical asymmetry: the median time between agent requests is 10-15 seconds, but the mean is in minutes or even hours, because a human is in the loop checking tool uses and responding. A cache TTL tuned to the fast median (e.g. 1 minute) thrashes — it grabs a hit or two, then drops the cache before the human responds, forcing a full re-prefill. At a 1-minute TTL, the same chunk of tokens gets re-prefilled 15-16 times; extending the TTL drives that multiplier toward 1.

The actionable lever is to size TTL to the slow human cadence rather than the fast agent cadence. Anthropic, for example, offers both 5-minute and 1-hour cache TTLs. Choosing the 1-hour option (or self-hosting with deep memory tiers) lets the system 'ride out' the long gaps where a human is deliberating, dramatically raising the hit rate. The cost is that the platform must hold far more tokens in cache for far longer — which is precisely why memory-tier capacity becomes the binding constraint.

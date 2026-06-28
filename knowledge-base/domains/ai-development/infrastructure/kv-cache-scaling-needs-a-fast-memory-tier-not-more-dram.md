---
id: INS-260628-F195
domain: ai-development
topic: infrastructure
title: 'KV cache scaling needs a fast memory tier, not more DRAM'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - memory-tiering
  - kv-cache
  - hbm
  - nvme
  - inference-infrastructure
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
    Holding large KV caches for long TTLs needs a fast dedicated tier (e.g.
    NVMe-backed) because DRAM is size-limited and compute-coupled, and any tier
    too slow to feed the GPU yields cache hits that arrive too late to matter.
  standard: >-
    The memory hierarchy for KV cache runs HBM (ideal but scarce), DRAM (the
    common tier — adequate performance but limited size and tightly coupled to
    compute, so hard to expand), and pooled DRAM (expandable but
    performance-hurting). To hold the large, long-lived caches that high TTLs
    demand, WEKA argues you need a denser external tier; their NVMe-backed
    augmented memory grid claims roughly 1000x the density of DRAM. The
    non-negotiable requirement is speed in both directions: you must store into
    the tier fast enough not to drop KVs or block GPUs, and fetch fast enough
    not to stall them — GPUs are the first-class citizen of the system.


    The sharpest lesson is that capacity without speed is worthless. In WEKA's
    benchmarks, a POSIX storage system could technically hit every possible
    cache entry but was not fast enough to get those tokens into the GPU in time
    to make a difference, so its high hit-rate produced no real output gain. As
    concurrent users rose, DRAM-only configurations overflowed and dropped off
    sharply, while the fast dense tier maintained steady-state throughput at far
    higher user counts. Note the vendor self-interest here, but the underlying
    principle — that effective cache hit rate is gated by fetch bandwidth, not
    just storage size — is a durable infrastructure constraint to design around
    when self-hosting inference.
stance: >-
  Scaling KV cache capacity requires a dedicated high-bandwidth memory tier
  rather than more DRAM, because capacity without sufficient fetch speed still
  blocks GPUs and delivers no benefit.
related:
  - INS-260625-8319
  - INS-260329-4842
  - INS-260329-C1A4
  - PRI-260406-8B75
  - INS-260605-048B
---
The memory hierarchy for KV cache runs HBM (ideal but scarce), DRAM (the common tier — adequate performance but limited size and tightly coupled to compute, so hard to expand), and pooled DRAM (expandable but performance-hurting). To hold the large, long-lived caches that high TTLs demand, WEKA argues you need a denser external tier; their NVMe-backed augmented memory grid claims roughly 1000x the density of DRAM. The non-negotiable requirement is speed in both directions: you must store into the tier fast enough not to drop KVs or block GPUs, and fetch fast enough not to stall them — GPUs are the first-class citizen of the system.

The sharpest lesson is that capacity without speed is worthless. In WEKA's benchmarks, a POSIX storage system could technically hit every possible cache entry but was not fast enough to get those tokens into the GPU in time to make a difference, so its high hit-rate produced no real output gain. As concurrent users rose, DRAM-only configurations overflowed and dropped off sharply, while the fast dense tier maintained steady-state throughput at far higher user counts. Note the vendor self-interest here, but the underlying principle — that effective cache hit rate is gated by fetch bandwidth, not just storage size — is a durable infrastructure constraint to design around when self-hosting inference.

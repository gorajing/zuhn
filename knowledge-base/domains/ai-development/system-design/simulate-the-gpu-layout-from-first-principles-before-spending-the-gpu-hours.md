---
id: INS-260627-9BB0
domain: ai-development
topic: system-design
title: Simulate the GPU layout from first principles before spending the GPU hours
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - systems-modeling
  - roofline-model
  - capacity-planning
  - simulation
  - gpu-allocation
  - queueing
sources:
  - type: youtube
    title: >-
      Efficient Reinforcement Learning – Rhythm Garg & Linden Li, Applied
      Compute
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=o15AaYl7Wu0'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Model sampling throughput (roofline latency curve), training throughput, and
    the response-length distribution, then sweep GPU splits to find the layout
    that balances production with consumption while staying under the staleness
    limit.
  standard: >-
    Applied Compute treated 'how should I split a fixed GPU pool between
    sampling and training' as a modeling problem rather than an experiment. The
    cast of characters: total GPUs (the compute budget), training batch size
    (the workload), sampling throughput (estimated via a roofline-model
    latency-vs-batch-size curve that captures the memory-bound to compute-bound
    transition), and training throughput (tokens/sec/GPU). With these, you can
    simulate a run without touching a GPU. The two invariants that define a
    healthy async layout are (1) production rate ≈ consumption rate —
    sampling-GPU throughput must match training-GPU throughput, or one side goes
    idle (too many inference GPUs starves consumers; too many samplers explodes
    staleness), and (2) max simulated staleness must stay under what the ML can
    tolerate.


    Sweeping the number of training GPUs (which implies the sampler count for a
    fixed pool) and pruning configurations that violate the staleness cap yields
    the optimal layout — they estimate a ~60% speedup over the synchronous
    baseline this way. The reusable principle: when real runs are expensive, a
    cheap first-principles simulator built from measured component curves
    (latency, throughput, response-length CDF) lets you answer 'what is optimal'
    and 'what should we target' before committing hardware. This is the same
    producer-consumer / queueing balance that governs any pipelined system; the
    discipline is to measure each component's curve empirically, then compose
    them analytically rather than searching the configuration space by
    brute-force runs.
stance: >-
  First-principles systems modeling can find the optimal training/sampling GPU
  split without running the expensive RL job, by enforcing producer-consumer
  balance under a staleness cap.
related:
  - INS-260329-5F96
  - INS-260403-EA2C
  - INS-260627-DC49
  - INS-260605-FE37
  - INS-260329-8CC0
  - INS-260627-63F2
---
Applied Compute treated 'how should I split a fixed GPU pool between sampling and training' as a modeling problem rather than an experiment. The cast of characters: total GPUs (the compute budget), training batch size (the workload), sampling throughput (estimated via a roofline-model latency-vs-batch-size curve that captures the memory-bound to compute-bound transition), and training throughput (tokens/sec/GPU). With these, you can simulate a run without touching a GPU. The two invariants that define a healthy async layout are (1) production rate ≈ consumption rate — sampling-GPU throughput must match training-GPU throughput, or one side goes idle (too many inference GPUs starves consumers; too many samplers explodes staleness), and (2) max simulated staleness must stay under what the ML can tolerate.

Sweeping the number of training GPUs (which implies the sampler count for a fixed pool) and pruning configurations that violate the staleness cap yields the optimal layout — they estimate a ~60% speedup over the synchronous baseline this way. The reusable principle: when real runs are expensive, a cheap first-principles simulator built from measured component curves (latency, throughput, response-length CDF) lets you answer 'what is optimal' and 'what should we target' before committing hardware. This is the same producer-consumer / queueing balance that governs any pipelined system; the discipline is to measure each component's curve empirically, then compose them analytically rather than searching the configuration space by brute-force runs.

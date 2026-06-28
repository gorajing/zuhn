---
id: INS-260627-FF6C
domain: ai-development
topic: infrastructure
title: Synchronous RL throughput is hostage to the straggler sample
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - gpu-utilization
  - rl-systems
  - long-tail-latency
  - training-efficiency
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
    In synchronous RL, step time is dictated by the longest sample, so a heavy
    completion-time tail leaves most GPUs idle.
  standard: >-
    Synchronous RL forces sampling and training into lockstep: every sample in a
    batch must finish generating before any training step begins. Because LLM
    response lengths have a long tail, this means the whole step waits on the
    slowest 'straggler.' Applied Compute measured this directly — across 40
    arithmetic problems with 32 samples each on Qwen-30B, 99% of samples
    completed in ~40 seconds, but the final 1% took another ~80 seconds. The
    GPUs do heavy work at the start when all requests launch, then sit
    'slacking' (idle) waiting on the tail.


    The practical lesson is that mean or median sample latency badly misleads
    you when sizing synchronous RL throughput; the tail of the response-length
    distribution governs real wall-clock cost. This is a specific instance of
    the general distributed-systems trap where a synchronous barrier converts
    your throughput into a function of worst-case, not average-case, latency. It
    is the motivating problem that justifies the added complexity of
    asynchronous RL: you cannot fix straggler-bound idleness by buying more
    GPUs, only by breaking the lockstep barrier.
stance: >-
  Synchronous RL wastes most of its GPU fleet because step time is set by the
  single slowest sample in the batch, not the median.
related:
  - INS-260627-51BE
  - INS-260627-D9CE
  - INS-260627-A842
  - INS-260424-3176
  - INS-260329-9115
---
Synchronous RL forces sampling and training into lockstep: every sample in a batch must finish generating before any training step begins. Because LLM response lengths have a long tail, this means the whole step waits on the slowest 'straggler.' Applied Compute measured this directly — across 40 arithmetic problems with 32 samples each on Qwen-30B, 99% of samples completed in ~40 seconds, but the final 1% took another ~80 seconds. The GPUs do heavy work at the start when all requests launch, then sit 'slacking' (idle) waiting on the tail.

The practical lesson is that mean or median sample latency badly misleads you when sizing synchronous RL throughput; the tail of the response-length distribution governs real wall-clock cost. This is a specific instance of the general distributed-systems trap where a synchronous barrier converts your throughput into a function of worst-case, not average-case, latency. It is the motivating problem that justifies the added complexity of asynchronous RL: you cannot fix straggler-bound idleness by buying more GPUs, only by breaking the lockstep barrier.

---
id: INS-260624-02AB
domain: ai-development
topic: infrastructure
title: Deterministic kernels trade throughput for train-inference stability
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - gpu
  - determinism
  - rl
  - throughput
sources:
  - type: paste
    title: Stanford AI Agent Seminar Slide Notes And User Field Notes
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deterministic kernels are a stability tool, not merely a reproducibility
    preference.
  standard: >-
    The deterministic-kernel slides show how floating-point non-associativity
    and GPU work partitioning can produce numerically different outputs for
    equivalent matmuls. To avoid mismatch, the system keeps split boundaries and
    reduction order aligned so inference and training produce the same
    distribution.


    The tradeoff is explicit: deterministic kernels can drive train/inference KL
    toward zero and prevent reward collapse, but they may reduce runtime
    throughput. This makes determinism an operational choice: pay some speed to
    keep long-running RL jobs stable, especially when tiny distribution shifts
    compound over many rollout/training cycles.
stance: >-
  Deterministic GPU kernels can reduce RL train/inference divergence by fixing
  reduction order and partition boundaries, but teams must budget for the
  throughput overhead.
related:
  - INS-260605-C873
  - INS-260624-6B2C
  - PRI-260323-0F93
  - INS-260412-0540
  - INS-260524-9100
---
The deterministic-kernel slides show how floating-point non-associativity and GPU work partitioning can produce numerically different outputs for equivalent matmuls. To avoid mismatch, the system keeps split boundaries and reduction order aligned so inference and training produce the same distribution.

The tradeoff is explicit: deterministic kernels can drive train/inference KL toward zero and prevent reward collapse, but they may reduce runtime throughput. This makes determinism an operational choice: pay some speed to keep long-running RL jobs stable, especially when tiny distribution shifts compound over many rollout/training cycles.

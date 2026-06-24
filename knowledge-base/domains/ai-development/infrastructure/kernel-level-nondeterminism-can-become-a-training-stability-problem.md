---
id: INS-260624-6B2C
domain: ai-development
topic: infrastructure
title: Kernel-level nondeterminism can become a training stability problem
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - determinism
  - gpu-kernels
  - numerics
  - training-stability
sources:
  - type: audio
    title: Stanford Hospital at 300 Pasteur Drive
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Numerical mismatch between serving and training kernels can destabilize
    large RL loops.
  standard: >-
    The talk argued that inference and training engines may produce slightly
    different outputs even with the same nominal model because floating-point
    addition is not associative and GPU kernels partition matrix operations
    differently. Quantization, kernel fusion, MoE routing, sampling, and async
    weight updates can widen this gap.


    The durable insight is that deterministic kernels are not just for
    reproducibility. In high-scale RL systems, they can make it possible to
    separate algorithmic instability from implementation-induced drift. The
    tradeoff is lower throughput, so the useful design space is selective
    determinism around sensitive operations rather than blanket determinism
    everywhere.
stance: >-
  At scale, small numerical differences between inference and training kernels
  can accumulate into policy mismatch, making deterministic or matched kernels a
  reliability tool rather than a purity preference.
related:
  - INS-260605-C873
  - INS-260404-CE26
  - INS-260410-699C
  - PRI-260328-49CB
  - INS-260326-0AB4
---
The talk argued that inference and training engines may produce slightly different outputs even with the same nominal model because floating-point addition is not associative and GPU kernels partition matrix operations differently. Quantization, kernel fusion, MoE routing, sampling, and async weight updates can widen this gap.

The durable insight is that deterministic kernels are not just for reproducibility. In high-scale RL systems, they can make it possible to separate algorithmic instability from implementation-induced drift. The tradeoff is lower throughput, so the useful design space is selective determinism around sensitive operations rather than blanket determinism everywhere.

---
id: INS-260624-93AC
domain: ai-development
topic: training-dynamics
title: >-
  RL agent training instability should be debugged through temporal, precision,
  and kernel mismatch
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rl
  - training
  - stability
  - inference
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
    Train/inference mismatch is not one bug class; it decomposes into temporal,
    precision, and kernel mismatch.
  standard: >-
    The slide taxonomy makes the earlier systems point more diagnosable. The
    desired RL objective assumes rollouts come from the same policy being
    updated, but practical systems often sample through an inference engine
    whose behavior differs from the trainer. The slides separate three causes:
    temporal mismatch from asynchronous or stale weights, precision mismatch
    from FP8/BF16 or quantized inference, and kernel mismatch from different
    numerical kernels.


    This matters because each failure has a different fix. Temporal mismatch
    pushes toward sync frequency, replay-buffer policy, or staleness bounds.
    Precision mismatch pushes toward calibration and numerical tolerance. Kernel
    mismatch pushes toward deterministic kernels or matched reduction order.
    Treating all of these as generic 'RL instability' hides the actual
    engineering lever.
stance: >-
  When RL training degrades, teams should check whether rollout samples came
  from a policy that differs from the trainer through stale weights, lower
  precision, or kernel-level numerical differences.
related:
  - INS-260410-C2E6
  - INS-260410-B3C4
  - INS-260329-D2CA
  - INS-260329-6936
  - INS-260625-8BC8
---
The slide taxonomy makes the earlier systems point more diagnosable. The desired RL objective assumes rollouts come from the same policy being updated, but practical systems often sample through an inference engine whose behavior differs from the trainer. The slides separate three causes: temporal mismatch from asynchronous or stale weights, precision mismatch from FP8/BF16 or quantized inference, and kernel mismatch from different numerical kernels.

This matters because each failure has a different fix. Temporal mismatch pushes toward sync frequency, replay-buffer policy, or staleness bounds. Precision mismatch pushes toward calibration and numerical tolerance. Kernel mismatch pushes toward deterministic kernels or matched reduction order. Treating all of these as generic 'RL instability' hides the actual engineering lever.

---
id: INS-260628-16B9
domain: ai-development
topic: infrastructure
title: >-
  Match RL system architecture to task duration: co-locate short tasks, decouple
  long agent rollouts
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - training-infrastructure
  - agents
  - gpu-utilization
  - systems-design
sources:
  - type: youtube
    title: >-
      Z.ai GLM 4.6: What We Learned From 100 Million Open Source Downloads —
      Yuxuan Zhang, Z.ai
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m6MF1OR_9kM'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Different RL task types demand different system designs—co-locate training
    and inference for short reasoning, decouple them for slow agent rollouts so
    stragglers don't stall the pipeline.
  standard: >-
    Z.ai's SLIME framework rejects a single RL system design. For short
    reasoning tasks (math, code completion), it keeps training and inference on
    the same GPU pool in a synchronous co-located mode: after each batch update,
    the next batch immediately samples from the latest policy, maximizing GPU
    memory and compute usage. But for real agent tasks—multi-step software
    engineering that opens browsers, hits backend APIs, and waits on external
    responses—forcing every worker to stay synchronized means the whole pool
    gets dragged down by the slowest service call, wasting GPUs.


    For agent tasks SLIME moves to a decoupled, asynchronous mode: rollout
    workers talk directly to real environments, generate trajectories, and write
    them into a shared data buffer; the training side consumes from that buffer
    at its own pace and periodically pushes new weights. The buffer acts as a
    shared 'NIST'-style layer between the two. The payoff is that even if some
    tasks are extremely slow, they no longer block the entire training pipeline.
    The transferable principle: when workloads in a system have wildly different
    latency profiles, a one-size-fits-all synchronous design throttles
    throughput to the slowest unit—segment by latency and decouple the slow
    path.
stance: >-
  RL training infrastructure should switch between co-located synchronous
  training and decoupled asynchronous rollout depending on whether the task is
  short reasoning or a long multi-step agent trajectory.
related:
  - INS-260325-F981
  - INS-260405-3B54
  - INS-260403-E396
  - INS-260410-D92A
  - INS-260423-6172
  - INS-260605-0AD6
  - INS-260605-D055
  - INS-260624-37C3
  - INS-260626-F160
  - INS-260626-9E65
---
Z.ai's SLIME framework rejects a single RL system design. For short reasoning tasks (math, code completion), it keeps training and inference on the same GPU pool in a synchronous co-located mode: after each batch update, the next batch immediately samples from the latest policy, maximizing GPU memory and compute usage. But for real agent tasks—multi-step software engineering that opens browsers, hits backend APIs, and waits on external responses—forcing every worker to stay synchronized means the whole pool gets dragged down by the slowest service call, wasting GPUs.

For agent tasks SLIME moves to a decoupled, asynchronous mode: rollout workers talk directly to real environments, generate trajectories, and write them into a shared data buffer; the training side consumes from that buffer at its own pace and periodically pushes new weights. The buffer acts as a shared 'NIST'-style layer between the two. The payoff is that even if some tasks are extremely slow, they no longer block the entire training pipeline. The transferable principle: when workloads in a system have wildly different latency profiles, a one-size-fits-all synchronous design throttles throughput to the slowest unit—segment by latency and decouple the slow path.

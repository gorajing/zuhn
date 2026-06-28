---
id: INS-260627-63F2
domain: ai-development
topic: training-dynamics
title: Deep queuing of models and trajectories keeps async RL fast and near-on-policy
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - reinforcement-learning
  - post-training
  - throughput
  - on-policy
  - systems
sources:
  - type: youtube
    title: >-
      Code World Model: Building World Models for Computation – Jacob Kahn, FAIR
      Meta
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sYgE4ppDFOQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CWM's async RL eliminates pipeline stalls by queuing many checkpoints into
    samplers and many trajectories into trainers, so neither side waits — and it
    stays near-on-policy because high data volume absorbs the staleness.
  standard: >-
    RL post-training has a classic producer-consumer problem: samplers produce
    trajectories that trainers consume, and naively the two must synchronize
    weights, creating stalls. CWM's answer is extreme asynchrony. Trainers
    eagerly ship checkpoints to samplers; samplers eagerly ship trajectories
    back to trainers; and crucially, both sides maintain deep queues — many
    models queued for sampling, many trajectories queued for scoring and
    gradient updates. Nothing waits on anything being 'done,' which is what
    unlocks strong throughput.


    The surprising part is the on-policy guarantee. The team even swaps the
    sampling model to a new checkpoint mid-trajectory, making that trajectory
    technically off-policy. But because the system sees so much data at such
    high throughput, it can absorb that risk and remain relatively on-policy in
    aggregate. The general principle for anyone scaling RL: throughput buys you
    the freedom to take staleness risk, and deep queuing on both producer and
    consumer sides is how you remove the synchronization barrier that usually
    caps utilization. (Marked time-sensitive because async-RL infrastructure
    norms are evolving fast.)
stance: >-
  Solving the producer-consumer bottleneck in RL post-training by aggressively
  queuing both model checkpoints and trajectories — even swapping the model
  mid-trajectory — yields high throughput while staying relatively on-policy.
related:
  - INS-260329-C991
  - INS-260424-3176
  - INS-260605-EF9D
  - INS-260627-C559
  - INS-260627-DC49
  - INS-260626-1B29
  - INS-260627-A842
  - INS-260627-9BB0
---
RL post-training has a classic producer-consumer problem: samplers produce trajectories that trainers consume, and naively the two must synchronize weights, creating stalls. CWM's answer is extreme asynchrony. Trainers eagerly ship checkpoints to samplers; samplers eagerly ship trajectories back to trainers; and crucially, both sides maintain deep queues — many models queued for sampling, many trajectories queued for scoring and gradient updates. Nothing waits on anything being 'done,' which is what unlocks strong throughput.

The surprising part is the on-policy guarantee. The team even swaps the sampling model to a new checkpoint mid-trajectory, making that trajectory technically off-policy. But because the system sees so much data at such high throughput, it can absorb that risk and remain relatively on-policy in aggregate. The general principle for anyone scaling RL: throughput buys you the freedom to take staleness risk, and deep queuing on both producer and consumer sides is how you remove the synchronization barrier that usually caps utilization. (Marked time-sensitive because async-RL infrastructure norms are evolving fast.)

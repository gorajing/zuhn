---
id: INS-260627-A954
domain: ai-development
topic: infrastructure
title: >-
  At scale, training agentic models is an infrastructure problem, not an ML
  problem
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ml-infrastructure
  - rl-at-scale
  - systems-engineering
  - load-balancing
  - custom-kernels
sources:
  - type: youtube
    title: "Building Cursor Composer –\_Lee Robinson, Cursor"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fL1iJHtl51Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor's three ML scaling challenges — train/inference parity, bursty
    heterogeneous rollouts, and tool-format consistency — all turned out to have
    infrastructure solutions, and they note the same correlation held for
    framework 'magic moments' back at Vercel.
  standard: >-
    Robinson's most repeated reflection is that 'how much of the ML work and the
    training process was actually also an infrastructure problem.' The
    conceptual RL idea is simple — run rollouts, score outputs, update
    parameters. The difficulty is entirely in scaling it: a large
    mixture-of-experts model parallelized across thousands of GPUs, rollouts
    that consume hundreds of thousands to millions of tokens and hundreds of
    tool calls with wildly varying durations, and the need for
    production-identical tool formats under bursty training compute.


    Every solution lived at the infrastructure layer. They split the system into
    inference, trainer, and environment servers (using Ray for rollouts). They
    wrote custom low-precision kernels yielding a ~3.5x MoE speedup on Nvidia
    Blackwell. They added load balancing across threads and processes so that a
    rollout installing packages or making many tool calls didn't leave other
    rollouts idle — eliminating wasted time when rollouts complete at different
    times.


    The generalizable claim, which Robinson ties back to his Vercel experience
    (framework 'magic moments' also depend on deployment infrastructure), is
    that the leverage in advanced ML systems is increasingly in systems
    engineering. Teams hiring only ML researchers and treating infra as a
    commodity will be bottlenecked; the differentiating work is in the
    orchestration, kernels, and environment fidelity.
stance: >-
  The dominant bottleneck in scaling RL for agentic models is infrastructure,
  not ML algorithms.
related:
  - INS-260323-4D13
  - INS-260501-9C3F
  - INS-260410-022B
  - PRI-260323-8E89
  - INS-260605-6A0A
  - PRI-260328-D893
  - INS-260403-4803
---
Robinson's most repeated reflection is that 'how much of the ML work and the training process was actually also an infrastructure problem.' The conceptual RL idea is simple — run rollouts, score outputs, update parameters. The difficulty is entirely in scaling it: a large mixture-of-experts model parallelized across thousands of GPUs, rollouts that consume hundreds of thousands to millions of tokens and hundreds of tool calls with wildly varying durations, and the need for production-identical tool formats under bursty training compute.

Every solution lived at the infrastructure layer. They split the system into inference, trainer, and environment servers (using Ray for rollouts). They wrote custom low-precision kernels yielding a ~3.5x MoE speedup on Nvidia Blackwell. They added load balancing across threads and processes so that a rollout installing packages or making many tool calls didn't leave other rollouts idle — eliminating wasted time when rollouts complete at different times.

The generalizable claim, which Robinson ties back to his Vercel experience (framework 'magic moments' also depend on deployment infrastructure), is that the leverage in advanced ML systems is increasingly in systems engineering. Teams hiring only ML researchers and treating infra as a commodity will be bottlenecked; the differentiating work is in the orchestration, kernels, and environment fidelity.

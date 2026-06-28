---
id: INS-260626-F160
domain: ai-development
topic: infrastructure
title: >-
  Continual learning turns training into a distributed-systems scheduling
  problem, not a linear job
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - training-infrastructure
  - continual-learning
  - scheduling
  - distributed-systems
  - concurrency
sources:
  - type: youtube
    title: >-
      ⚡️Every product of the future will be a living system  — Ronak Malde,
      Trajectory.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=DcvgPEApHT8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Continuous learning kills the start-stop training job; you run concurrent
    pools for sampling and training and optimize aggregate wall-clock, accepting
    slower individual jobs.
  standard: >-
    Traditional training is linear: you kick off a Slurm-style job, spin up
    GPUs, run sampling and training through one lifecycle, then spin everything
    down. Malde argues this paradigm falls apart under continual learning, where
    training never explicitly starts or stops — new data arrives from production
    in batches, multiple jobs run concurrently, and one run may suddenly need
    more resources than another. Training stops being a discrete event and
    becomes an ongoing, dynamic workload.


    Their open-sourced 'continuous LoRA' stack (with Berkeley's SkyRL and
    Anyscale) reframes this as a scheduling problem: instead of many linear
    jobs, maintain a dedicated pool for sampling and a dedicated pool for
    training, then stack and run jobs in parallel. The tradeoff is explicit —
    any single job is slower per run than pure serial execution, but aggregate
    throughput improves dramatically. They report cutting wall-clock roughly in
    half for two concurrent jobs, and eight concurrent runs finishing in about
    the time three serial jobs would take, with no degradation in model quality.


    The deeper insight is that decades of distributed-systems and
    operating-systems thinking — preemptive scheduling, starvation, resource
    pools — now apply directly to ML training as it shifts from a research
    activity to a production one. Teams building continual-learning
    infrastructure should staff and design with a systems-engineering mindset,
    not just a research one, and optimize for the dynamic multi-tenant case
    rather than the fastest single run.
stance: >-
  When every company trains continuously, the linear spin-up/train/spin-down job
  model breaks and training becomes an OS-style concurrent scheduling problem
  optimized for throughput over single-job latency.
related:
  - INS-260327-5E40
  - INS-260329-9AE9
  - INS-260410-38C9
  - INS-260625-15FB
  - INS-260626-BF48
  - INS-260330-0102
  - INS-260627-D73F
  - INS-260423-6172
  - PRI-260407-2ACF
---
Traditional training is linear: you kick off a Slurm-style job, spin up GPUs, run sampling and training through one lifecycle, then spin everything down. Malde argues this paradigm falls apart under continual learning, where training never explicitly starts or stops — new data arrives from production in batches, multiple jobs run concurrently, and one run may suddenly need more resources than another. Training stops being a discrete event and becomes an ongoing, dynamic workload.

Their open-sourced 'continuous LoRA' stack (with Berkeley's SkyRL and Anyscale) reframes this as a scheduling problem: instead of many linear jobs, maintain a dedicated pool for sampling and a dedicated pool for training, then stack and run jobs in parallel. The tradeoff is explicit — any single job is slower per run than pure serial execution, but aggregate throughput improves dramatically. They report cutting wall-clock roughly in half for two concurrent jobs, and eight concurrent runs finishing in about the time three serial jobs would take, with no degradation in model quality.

The deeper insight is that decades of distributed-systems and operating-systems thinking — preemptive scheduling, starvation, resource pools — now apply directly to ML training as it shifts from a research activity to a production one. Teams building continual-learning infrastructure should staff and design with a systems-engineering mindset, not just a research one, and optimize for the dynamic multi-tenant case rather than the fastest single run.

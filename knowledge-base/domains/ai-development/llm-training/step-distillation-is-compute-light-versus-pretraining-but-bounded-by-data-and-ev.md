---
id: INS-260625-D772
domain: ai-development
topic: llm-training
title: >-
  Step distillation is compute-light versus pretraining but bounded by data and
  evaluation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - distillation
  - evaluation
  - training-data
  - compute-budget
  - post-training
sources:
  - type: youtube
    title: 'You Might Not Need 50 Diffusion Steps — Ziv Ilan, Nvidia'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gHs5ZiY80PM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Diffusion distillation runs on H100/H200/B200-class GPUs (not just GB200s)
    and small models need little compute, but garbage-in-garbage-out applies —
    specialized domains require your own data distribution and the ability to
    evaluate quality differences.
  standard: >-
    Distillation is a post-training technique, which makes it far cheaper than
    pretraining: you do not need scarce GB200s — Hopper-class H100/H200 or
    B200/B300 GPUs work, and small (2B–4B parameter) video models need very
    little compute. But 'cheaper than pretraining' is not 'free or trivial.' Two
    constraints bind real results. First, data: general-purpose open-source data
    distills fine for general demos, but specialized distributions (the example
    given was protein generation) require your own data, or the student
    converges to the wrong target — garbage in, garbage out. Second, evaluation:
    you must be able to measure quality so you can detect when a general-purpose
    dataset underperforms your domain-specific need. Tooling like Nvidia's
    open-source FastGen exists to structure the post-training and sharding
    mechanics so teams can focus their effort on data quality, recipe tuning,
    and evaluation rather than infrastructure plumbing.
stance: >-
  Distilling a diffusion model needs far less compute than pretraining but will
  not converge usefully without representative data and a real evaluation
  harness for specialized use cases.
related:
  - INS-260330-52F6
  - INS-260410-3271
  - INS-260410-F053
  - PRI-260411-56D8
  - INS-260625-57C1
  - INS-260625-E464
---
Distillation is a post-training technique, which makes it far cheaper than pretraining: you do not need scarce GB200s — Hopper-class H100/H200 or B200/B300 GPUs work, and small (2B–4B parameter) video models need very little compute. But 'cheaper than pretraining' is not 'free or trivial.' Two constraints bind real results. First, data: general-purpose open-source data distills fine for general demos, but specialized distributions (the example given was protein generation) require your own data, or the student converges to the wrong target — garbage in, garbage out. Second, evaluation: you must be able to measure quality so you can detect when a general-purpose dataset underperforms your domain-specific need. Tooling like Nvidia's open-source FastGen exists to structure the post-training and sharding mechanics so teams can focus their effort on data quality, recipe tuning, and evaluation rather than infrastructure plumbing.

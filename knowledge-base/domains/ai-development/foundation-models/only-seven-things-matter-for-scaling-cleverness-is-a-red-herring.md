---
id: INS-260410-022B
domain: ai-development
topic: foundation-models
title: Only seven things matter for scaling; cleverness is a red herring
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling-hypothesis
  - big-blob-of-compute
  - bitter-lesson
  - rl-scaling
sources:
  - type: youtube
    title: Dario Amodei — “We are near the end of the exponential”
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=n1E9IZfvGMA'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Amodei's 2017 'Big Blob of Compute' hypothesis still holds: scaling is
    bottlenecked by compute, data, objective function, and numerical stability —
    not by clever methods.
  standard: >-
    Amodei wrote the 'Big Blob of Compute' hypothesis in 2017, before GPT-1 was
    released, as a general theory about all of AI — robotics, reasoning, RL, and
    language. It listed seven things that matter: compute, data quantity, data
    quality and breadth of distribution, training duration, a scalable objective
    function (pre-training loss or RL reward), and two
    normalization/conditioning items that keep the compute 'flowing laminar'
    instead of diverging. Everything else — new methods, clever tricks,
    architectural breakthroughs — is noise. He now says he has seen nothing in
    the years since that contradicts this.


    The important update is that RL scaling follows exactly the same log-linear
    curve as pre-training scaling. Companies have published results showing
    model performance on AIME and other benchmarks scales log-linearly in RL
    compute, across a wide variety of tasks, not just math. So RL is not
    qualitatively different from pre-training in this sense — it's another
    objective function that can scale to the moon. The transition from
    single-domain RL (math) to broad RL (code + many tasks) mirrors the GPT-1 →
    GPT-2 transition where training on narrow fanfiction data gave way to
    training on Common Crawl and models started to generalize.


    The practical implication: if you believe this hypothesis, predicting AI
    progress reduces to predicting compute availability and data/environment
    breadth. Debates about whether models 'really reason' or need new algorithms
    are largely misdirections. The corollary is that the field's research moats
    are weaker than they look — anyone with compute and a scalable objective
    tends to converge on similar capabilities.
stance: >-
  All the techniques, methods, and architectural cleverness matter very little
  compared to seven scaling inputs — raw compute, data quantity, data quality
  and distribution breadth, training duration, an objective function that can
  scale to the moon, and numerical normalization/conditioning.
related:
  - INS-260325-9C89
  - PRI-260323-8E89
  - INS-260329-4109
  - INS-260329-3EB6
  - INS-260329-D8BC
  - INS-260329-89E9
  - INS-260403-0902
  - INS-260326-CAAB
  - INS-260330-FF94
  - INS-260403-A9F3
---
Amodei wrote the 'Big Blob of Compute' hypothesis in 2017, before GPT-1 was released, as a general theory about all of AI — robotics, reasoning, RL, and language. It listed seven things that matter: compute, data quantity, data quality and breadth of distribution, training duration, a scalable objective function (pre-training loss or RL reward), and two normalization/conditioning items that keep the compute 'flowing laminar' instead of diverging. Everything else — new methods, clever tricks, architectural breakthroughs — is noise. He now says he has seen nothing in the years since that contradicts this.

The important update is that RL scaling follows exactly the same log-linear curve as pre-training scaling. Companies have published results showing model performance on AIME and other benchmarks scales log-linearly in RL compute, across a wide variety of tasks, not just math. So RL is not qualitatively different from pre-training in this sense — it's another objective function that can scale to the moon. The transition from single-domain RL (math) to broad RL (code + many tasks) mirrors the GPT-1 → GPT-2 transition where training on narrow fanfiction data gave way to training on Common Crawl and models started to generalize.

The practical implication: if you believe this hypothesis, predicting AI progress reduces to predicting compute availability and data/environment breadth. Debates about whether models 'really reason' or need new algorithms are largely misdirections. The corollary is that the field's research moats are weaker than they look — anyone with compute and a scalable objective tends to converge on similar capabilities.

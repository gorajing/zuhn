---
id: INS-260424-0554
domain: ai-development
topic: ai-market-dynamics
title: >-
  Inference compute volume now exceeds training compute volume — 'inference is
  fine' was the wrong 2023 frame
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - inference-vs-training
  - compute-economics
  - chip-strategy
  - tpu-v8
sources:
  - type: youtube
    title: Acquired's Ben Gilbert and David Rosenthal live from Google Cloud Next
    author: Google Cloud
    url: 'https://youtu.be/Exo5NOslDA8'
date_extracted: '2026-04-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Ben Gilbert: when we made our NVIDIA series in 2023-2024, training was what
    everybody was focused on; inference is fine, you know, like oh yeah I guess
    you could run that on the same chip — now I think the compute loads for
    inference have eclipsed the line for training.
  standard: >-
    The 2023 narrative around AI infrastructure centered on training: which
    company has the biggest cluster, which model required the most flops, who is
    building the next training-scale data center. Inference was treated as an
    optimization problem solvable later. By 2026 this has flipped: inference
    workload exceeds training workload across major AI providers because every
    Google search now runs an AI overview, every Gmail action surfaces AI
    suggestions, every product surface includes inference at scale. Google's TPU
    V8 announcement explicitly splits training and inference into separate chip
    architectures, validating the inference-first thesis. The implication for AI
    infrastructure investments: bets made on training economics (large clusters
    for one-time work) are stranded; bets made on inference economics
    (high-throughput low-latency serving) are scaling. The deeper analogy from
    the Acquired hosts: Google's 2000 infrastructure was almost entirely
    web-crawl-and-index workload; by 2010 the vast majority was query serving.
    The same pattern played out in 4 years for AI vs 15 for web — same shape,
    faster timescale.
stance: >-
  The 2023 mental model that placed training compute at the center of AI
  infrastructure economics with inference as an afterthought has fully inverted
  by 2026; inference workload now eclipses training across major AI providers,
  and chip-development decisions made on this assumption two years ago are
  paying off while assumptions made on training-first economics are stranded
related:
  - INS-260325-E62D
  - INS-260320-5818
  - INS-260327-991D
  - INS-260327-5E40
  - INS-260405-A22F
  - INS-260405-567D
  - INS-260403-B73D
  - INS-260408-F3F0
  - INS-260409-17E9
  - INS-260410-069C
---
The 2023 narrative around AI infrastructure centered on training: which company has the biggest cluster, which model required the most flops, who is building the next training-scale data center. Inference was treated as an optimization problem solvable later. By 2026 this has flipped: inference workload exceeds training workload across major AI providers because every Google search now runs an AI overview, every Gmail action surfaces AI suggestions, every product surface includes inference at scale. Google's TPU V8 announcement explicitly splits training and inference into separate chip architectures, validating the inference-first thesis. The implication for AI infrastructure investments: bets made on training economics (large clusters for one-time work) are stranded; bets made on inference economics (high-throughput low-latency serving) are scaling. The deeper analogy from the Acquired hosts: Google's 2000 infrastructure was almost entirely web-crawl-and-index workload; by 2010 the vast majority was query serving. The same pattern played out in 4 years for AI vs 15 for web — same shape, faster timescale.

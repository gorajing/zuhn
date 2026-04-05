---
id: INS-260405-A22F
domain: ai-development
topic: economics
title: NVIDIA's Vera Rubin achieves 10x inference cost reduction over Blackwell
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - inference
  - nvidia
  - cost
  - hardware
  - rubin
  - moe
  - economics
sources:
  - type: blog
    title: 'WIRTW: Micron''s $100B Megafab'
    author:
      - '@type': Person
        name: Chamath Palihapitiya
        url: 'https://substack.com/@chamath'
        description: 'CEO @SocialCapital, Bestie @theallinpod'
        identifier: 'user:97776398'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
    url: 'https://chamath.substack.com/p/what-i-read-this-week-168'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    Vera Rubin delivers up to 10x lower inference token cost and 4x fewer GPUs
    for MoE training compared to Blackwell, entering production in H2 2026.
  standard: >-
    NVIDIA's Vera Rubin platform integrates six chips—GPUs, CPUs, networking,
    and interconnect silicon—as a single tightly coupled system optimized
    specifically for reasoning models and mixture-of-experts architectures. The
    platform claims up to 10x reduction in inference token cost versus
    Blackwell, which was itself a step-function improvement over Hopper.


    For anyone modeling AI business economics, this trajectory matters: cost per
    token is not a stable input. Businesses building on today's inference
    pricing will see their unit economics change dramatically as each hardware
    generation lands. The companies with workloads most sensitive to inference
    cost—particularly high-volume applications like search, coding assistants,
    and agentic workflows—stand to benefit most from this hardware cadence. The
    addition of ICM also addresses the long-context memory bottleneck that
    currently makes multi-step reasoning expensive.
stance: >-
  Inference token cost will fall by roughly an order of magnitude each hardware
  generation, making today's inference pricing a poor baseline for long-term AI
  economics.
---
NVIDIA's Vera Rubin platform integrates six chips—GPUs, CPUs, networking, and interconnect silicon—as a single tightly coupled system optimized specifically for reasoning models and mixture-of-experts architectures. The platform claims up to 10x reduction in inference token cost versus Blackwell, which was itself a step-function improvement over Hopper.

For anyone modeling AI business economics, this trajectory matters: cost per token is not a stable input. Businesses building on today's inference pricing will see their unit economics change dramatically as each hardware generation lands. The companies with workloads most sensitive to inference cost—particularly high-volume applications like search, coding assistants, and agentic workflows—stand to benefit most from this hardware cadence. The addition of ICM also addresses the long-context memory bottleneck that currently makes multi-step reasoning expensive.

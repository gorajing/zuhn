---
id: INS-260625-5124
domain: ai-development
topic: system-design
title: >-
  A neutral asset-light operator pooling uncorrelated demand beats full-stack
  integration for utilization
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - systems-design
  - pooling
  - utilization
  - platform-strategy
  - compute-markets
sources:
  - type: youtube
    title: 'Why AI Labs With Unlimited GPUs Still Fail — Anjney Midha, AMP'
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=h5dlIPM0X18'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The electric grid's history shows that the most enduring coordinators never
    owned their own generation — they pooled uncorrelated anchor demand and let
    participants share base load while scheduling their spikes.
  standard: >-
    Midha distinguishes two regimes for raising utilization: systems integration
    (collapse many processes into one node) versus pooling (pull a resource out
    and share it across nodes). Full-stack labs like OpenAI and xAI take the
    integration path; Amp takes the opposite, horizontal path as an 'independent
    system operator' (ISO) of a multi-cloud, multi-silicon compute grid — trying
    to make megaFLOPs flow like megawatts. The historical model is PJM
    Interconnection and early electric grids: the most durable coordinators
    never owned the assets they coordinated. They started with long-term anchor
    customers whose demand was uncorrelated (a steel mill spiking at night, a
    shoe mill during the day), so each was guaranteed base load while their
    peaks were scheduled to drive high town-wide utilization. The key
    innovations layered on top are interruptible demand and dynamic
    prioritization via a credit/bidding system — though Midha notes Google's
    internal version of this credit market is blamed for it missing GPT, a
    caution that markets-via-credits sometimes fail where central command to go
    all-in succeeds.
stance: >-
  Compute utilization is maximized by an independent system operator that owns
  no assets and pools uncorrelated demand, not by vertically integrating the
  whole stack in one company.
related:
  - INS-260603-C10D
  - INS-260409-AEF3
  - INS-260330-F800
  - INS-260404-8292
  - PRI-260328-4FA6
---
Midha distinguishes two regimes for raising utilization: systems integration (collapse many processes into one node) versus pooling (pull a resource out and share it across nodes). Full-stack labs like OpenAI and xAI take the integration path; Amp takes the opposite, horizontal path as an 'independent system operator' (ISO) of a multi-cloud, multi-silicon compute grid — trying to make megaFLOPs flow like megawatts. The historical model is PJM Interconnection and early electric grids: the most durable coordinators never owned the assets they coordinated. They started with long-term anchor customers whose demand was uncorrelated (a steel mill spiking at night, a shoe mill during the day), so each was guaranteed base load while their peaks were scheduled to drive high town-wide utilization. The key innovations layered on top are interruptible demand and dynamic prioritization via a credit/bidding system — though Midha notes Google's internal version of this credit market is blamed for it missing GPT, a caution that markets-via-credits sometimes fail where central command to go all-in succeeds.

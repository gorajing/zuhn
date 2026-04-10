---
id: INS-260410-F849
domain: ai-development
topic: industry-trends
title: >-
  The AI memory crunch will be resolved by destroying consumer device demand,
  not by adding fabs
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - memory-crunch
  - dram
  - hbm
  - demand-destruction
  - kv-cache
sources:
  - type: youtube
    title: Dylan Patel — The single biggest bottleneck to scaling AI compute
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=mDG_Hx3BSUE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Smartphone volumes are projected to fall from 1.1B to 500-600M as memory
    prices double and triple, freeing DRAM for AI accelerators where it can earn
    much higher margins.
  standard: >-
    HBM uses 3-4x more wafer area per bit than commodity DRAM, so every byte
    allocated to AI accelerators costs roughly 4x the consumer-device bytes
    foregone. Combined with the KV-cache explosion from long-context reasoning
    models, this creates a demand spike that existing fabs cannot meet — memory
    vendors were losing money in 2023 and stopped building new capacity
    entirely. The first new fabs won't come online until late 2027-2028.


    In the meantime, the market is clearing by brute price: memory has tripled,
    iPhone BOMs are +$150, and Xiaomi/Oppo are already halving low-end and
    mid-range volumes. Patel's projection is ~800M smartphones this year
    dropping toward 500-600M next year, with the cuts disproportionately falling
    on the low end where margins are thinnest. That releases DRAM bits toward AI
    accelerators (willing to pay 4x+ and sign long-term contracts) while
    high-end phones like the iPhone absorb smaller cuts.


    The policy/market implication: consumer hatred of AI is going to intensify
    as gaming GPUs, PCs, and phones visibly get worse and more expensive, even
    though the underlying cause is a deliberate reallocation by rational memory
    vendors. This demand destruction is not a side effect — it is the clearing
    mechanism the market is using to fund AI scaling, because building new
    memory fabs has a 2+ year lag that can't match the demand curve.
stance: >-
  DRAM and HBM supply will clear by cannibalizing smartphone and PC volumes
  rather than building new fabs, because memory vendors under-built during
  2022-2024 and new fabs take two-plus years from decision to output.
related:
  - INS-260321-4B99
  - INS-260403-34A6
  - INS-260405-6A94
  - INS-260322-D079
  - INS-260410-1159
---
HBM uses 3-4x more wafer area per bit than commodity DRAM, so every byte allocated to AI accelerators costs roughly 4x the consumer-device bytes foregone. Combined with the KV-cache explosion from long-context reasoning models, this creates a demand spike that existing fabs cannot meet — memory vendors were losing money in 2023 and stopped building new capacity entirely. The first new fabs won't come online until late 2027-2028.

In the meantime, the market is clearing by brute price: memory has tripled, iPhone BOMs are +$150, and Xiaomi/Oppo are already halving low-end and mid-range volumes. Patel's projection is ~800M smartphones this year dropping toward 500-600M next year, with the cuts disproportionately falling on the low end where margins are thinnest. That releases DRAM bits toward AI accelerators (willing to pay 4x+ and sign long-term contracts) while high-end phones like the iPhone absorb smaller cuts.

The policy/market implication: consumer hatred of AI is going to intensify as gaming GPUs, PCs, and phones visibly get worse and more expensive, even though the underlying cause is a deliberate reallocation by rational memory vendors. This demand destruction is not a side effect — it is the clearing mechanism the market is using to fund AI scaling, because building new memory fabs has a 2+ year lag that can't match the demand curve.

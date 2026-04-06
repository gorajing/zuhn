---
id: INS-260405-A4DB
domain: ai-development
topic: infrastructure
title: High-bandwidth memory is the binding constraint on AI scaling
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - memory
  - hbm
  - infrastructure
  - scaling
  - gpu
  - supply-chain
sources:
  - type: blog
    title: 'WIRTW: Micron''s $100B Megafab'
    author: Chamath Palihapitiya
    url: 'https://chamath.substack.com/p/what-i-read-this-week-168'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI workloads depend on HBM as the data conduit to GPUs, but HBM is harder to
    manufacture, lower yield, and supply is concentrated in three players.
  standard: >-
    As AI models scale to trillions of parameters, GPUs require high-bandwidth
    memory stacked vertically and placed in close physical proximity to process
    the data fast enough. Over 70% of Micron's revenue is DRAM, and their HBM
    segment is growing faster than standard DRAM. The supply constraint is
    structural: HBM manufacturing is more difficult, yields are lower, and only
    SK Hynix, Samsung, and Micron can produce it at scale.


    This concentration means AI buildout timelines are as much a memory
    procurement problem as a GPU procurement problem. The 171% YoY spike in DRAM
    prices and constrained HBM supply signal that anyone planning large-scale
    inference infrastructure needs to model memory availability as an
    independent variable—not a given. NVIDIA's Vera Rubin platform explicitly
    addresses this with Inference Context Memory (ICM), designed to reduce the
    cost of long-term memory and context windows.
stance: >-
  HBM supply, not GPU compute, will become the primary bottleneck limiting AI
  model scaling and inference throughput in the near term.
related:
  - INS-260321-4B99
  - INS-260329-8CC0
  - INS-260329-06F2
  - INS-260405-4F2B
  - INS-260327-0C4A
  - INS-260323-FEDF
  - PRI-260328-99F0
---
As AI models scale to trillions of parameters, GPUs require high-bandwidth memory stacked vertically and placed in close physical proximity to process the data fast enough. Over 70% of Micron's revenue is DRAM, and their HBM segment is growing faster than standard DRAM. The supply constraint is structural: HBM manufacturing is more difficult, yields are lower, and only SK Hynix, Samsung, and Micron can produce it at scale.

This concentration means AI buildout timelines are as much a memory procurement problem as a GPU procurement problem. The 171% YoY spike in DRAM prices and constrained HBM supply signal that anyone planning large-scale inference infrastructure needs to model memory availability as an independent variable—not a given. NVIDIA's Vera Rubin platform explicitly addresses this with Inference Context Memory (ICM), designed to reduce the cost of long-term memory and context windows.

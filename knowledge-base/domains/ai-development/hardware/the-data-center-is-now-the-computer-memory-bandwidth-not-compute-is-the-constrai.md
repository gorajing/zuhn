---
id: INS-260410-CB70
domain: ai-development
topic: hardware
title: >-
  The data center is now the computer — memory bandwidth, not compute, is the
  constraint
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - memory-bandwidth
  - von-neumann-bottleneck
  - infiniband
  - data-center
  - chip-packaging
sources:
  - type: youtube
    title: 'Nvidia Part III: The Dawn of the AI Era (2022-2023) (Audio)'
    author: Acquired
    url: 'https://www.youtube.com/watch?v=nFB-AILkamw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLM training is memory-bandwidth-bound: modern AI requires treating an
    entire data center as one computer with ultra-fast interconnects and
    2.5D-stacked memory adjacent to compute.
  standard: >-
    The Von Neumann bottleneck — the single bus between CPU and memory — has
    been AI's central constraint historically. Three of every four CPU clock
    cycles in a simple add operation are spent loading and storing data, and
    this gets worse over time as CPUs outpace memory. Nvidia's architecture
    broke this by making compute massively parallel, but that shifted the
    constraint to memory bandwidth: modern LLM training requires hundreds of
    gigabytes of model weights to be in memory simultaneously, and chips can't
    grow larger because EUV lithography already uses the full reticle size.


    The solution is a radical rethinking of what constitutes 'one computer.'
    TSMC's 2.5D chip-on-wafer-on-substrate (CoWoS) packaging stacks
    high-bandwidth memory vertically adjacent to logic dies. Mellanox's
    InfiniBand (the reason Nvidia's $7B acquisition was secretly genius)
    provides 3200+ Gbps interconnects between racks so that hundreds of GPUs
    behave as one compute cluster. Grace CPUs orchestrate the whole thing from
    within Nvidia-designed boxes. The data center becomes the computer.


    The practical implication: anyone building AI infrastructure must optimize
    the entire memory hierarchy — on-chip SRAM, HBM stacks, NVLink between GPUs,
    InfiniBand between racks, storage between data centers. Chip flop counts
    alone mislead; the real metric is how much high-bandwidth memory sits within
    a few nanoseconds of the compute, and how fast you can shuttle activations
    across that topology during training.
stance: >-
  Modern AI training has inverted the classical computer architecture
  assumption: the bottleneck is no longer processor cycles but getting
  high-bandwidth memory physically close to thousands of parallel GPUs networked
  across racks.
related:
  - INS-260320-5818
  - PRI-260406-8B75
  - INS-260403-1F1B
  - INS-260404-CE26
  - INS-260423-6172
  - INS-260409-2B5F
---
The Von Neumann bottleneck — the single bus between CPU and memory — has been AI's central constraint historically. Three of every four CPU clock cycles in a simple add operation are spent loading and storing data, and this gets worse over time as CPUs outpace memory. Nvidia's architecture broke this by making compute massively parallel, but that shifted the constraint to memory bandwidth: modern LLM training requires hundreds of gigabytes of model weights to be in memory simultaneously, and chips can't grow larger because EUV lithography already uses the full reticle size.

The solution is a radical rethinking of what constitutes 'one computer.' TSMC's 2.5D chip-on-wafer-on-substrate (CoWoS) packaging stacks high-bandwidth memory vertically adjacent to logic dies. Mellanox's InfiniBand (the reason Nvidia's $7B acquisition was secretly genius) provides 3200+ Gbps interconnects between racks so that hundreds of GPUs behave as one compute cluster. Grace CPUs orchestrate the whole thing from within Nvidia-designed boxes. The data center becomes the computer.

The practical implication: anyone building AI infrastructure must optimize the entire memory hierarchy — on-chip SRAM, HBM stacks, NVLink between GPUs, InfiniBand between racks, storage between data centers. Chip flop counts alone mislead; the real metric is how much high-bandwidth memory sits within a few nanoseconds of the compute, and how fast you can shuttle activations across that topology during training.

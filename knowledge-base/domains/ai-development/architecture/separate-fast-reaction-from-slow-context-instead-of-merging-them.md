---
id: INS-260627-8C08
domain: ai-development
topic: architecture
title: Separate Fast Reaction From Slow Context Instead Of Merging Them
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - model-architecture
  - temporal-memory
  - fast-slow-systems
  - spiking-neural-networks
sources:
  - type: blog
    title: >-
      Algorithm-hardware co-design of neuromorphic networks with dual memory
      pathways
    url: 'https://arxiv.org/html/2512.07602'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The fast spiking path and slow memory path play different roles, and
    removing the feedforward path collapses performance to chance.
  standard: >-
    DMP-SNN does not replace the fast event-driven path with a state-space
    model; it uses the slow state as a contextual modulator for fast spiking.
    The authors report that removing the feedforward pathway made accuracy
    collapse to chance across tasks, while the combined fast-slow design
    preserved long-range context and maintained event-driven sparsity.


    This is a useful system-building pattern: do not ask one channel to be both
    high-bandwidth perception and durable memory unless the task proves it can.
    Keep the reactive path responsive, keep memory compact and slow, and define
    the interface where slow context conditions immediate action.
stance: >-
  Architectures that split fast stimulus processing from slow contextual memory
  can outperform designs that force one pathway to carry both immediacy and
  history.
related:
  - INS-260627-358F
  - INS-260409-E366
  - INS-260625-4AB6
  - PRI-260403-9D15
  - INS-260605-048B
---
DMP-SNN does not replace the fast event-driven path with a state-space model; it uses the slow state as a contextual modulator for fast spiking. The authors report that removing the feedforward pathway made accuracy collapse to chance across tasks, while the combined fast-slow design preserved long-range context and maintained event-driven sparsity.

This is a useful system-building pattern: do not ask one channel to be both high-bandwidth perception and durable memory unless the task proves it can. Keep the reactive path responsive, keep memory compact and slow, and define the interface where slow context conditions immediate action.

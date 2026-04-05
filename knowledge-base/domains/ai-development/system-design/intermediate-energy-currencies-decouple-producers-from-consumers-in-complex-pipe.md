---
id: INS-260404-9C57
domain: ai-development
topic: system-design
title: >-
  Intermediate energy currencies decouple producers from consumers in complex
  pipelines
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - decoupling
  - intermediate-representation
  - modularity
  - energy-currency
  - atp
  - pipeline-design
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Photosynthesis converts chaotic photon energy into standardized ATP and
    NADPH currencies before the Calvin Cycle consumes them, enabling the two
    stages to evolve independently.
  standard: >-
    Light-dependent reactions don't directly build sugars — they convert photon
    energy into ATP and NADPH, standardized energy currencies that the Calvin
    Cycle then spends. This decoupling means the two stages can operate with
    different inputs, at different rates, and evolve independently. The
    thylakoid membrane essentially acts as a battery, charging via proton
    gradients and discharging through ATP synthase.


    This is a powerful pattern for system design: rather than tightly coupling
    data producers to consumers, introduce a standardized intermediate
    representation. Message queues, embedding vectors, and compiled bytecode all
    serve this role. The intermediate currency absorbs variance from the input
    side (photons arrive unpredictably, just like API calls) and presents a
    stable interface to the consumption side. The tradeoff is conversion
    overhead, but the modularity and independent scalability usually justify it.
stance: >-
  Systems that convert raw inputs into standardized intermediate tokens before
  consumption achieve greater modularity and resilience than direct-coupling
  architectures
related:
  - INS-260330-20FD
  - INS-260403-8125
  - INS-260403-6AD0
  - INS-260404-842D
  - INS-260405-C780
  - INS-260404-0214
  - INS-260404-9428
---
Light-dependent reactions don't directly build sugars — they convert photon energy into ATP and NADPH, standardized energy currencies that the Calvin Cycle then spends. This decoupling means the two stages can operate with different inputs, at different rates, and evolve independently. The thylakoid membrane essentially acts as a battery, charging via proton gradients and discharging through ATP synthase.

This is a powerful pattern for system design: rather than tightly coupling data producers to consumers, introduce a standardized intermediate representation. Message queues, embedding vectors, and compiled bytecode all serve this role. The intermediate currency absorbs variance from the input side (photons arrive unpredictably, just like API calls) and presents a stable interface to the consumption side. The tradeoff is conversion overhead, but the modularity and independent scalability usually justify it.

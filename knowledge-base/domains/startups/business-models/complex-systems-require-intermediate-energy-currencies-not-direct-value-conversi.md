---
id: INS-260405-6C1F
domain: startups
topic: business-models
title: >-
  Complex systems require intermediate energy currencies, not direct value
  conversion
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - platform-design
  - intermediaries
  - currency
  - energy
  - abstraction-layers
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ATP and NADPH don't store energy permanently — they exist solely to carry it
    between subsystems that can't exchange value directly, a design principle
    that appears in every complex value-exchange system.
  standard: >-
    Photosynthesis doesn't convert sunlight directly into glucose. Instead, it
    converts light energy into two intermediate currencies — ATP (for chemical
    energy transfer) and NADPH (for electron transfer) — which the Calvin Cycle
    then uses to assemble glucose. These intermediaries are essential: the
    light-dependent and light-independent reactions operate on different
    timescales, in different locations, and with different substrate
    requirements. Direct coupling would make the system brittle.


    This architectural pattern recurs throughout complex systems. Money is an
    intermediate currency that decouples the producer of wheat from the producer
    of nails. API tokens decouple authentication from authorization. In venture
    capital, 'dry powder' (committed but undeployed capital) functions as an
    intermediate store that allows GPs to act when opportunities arise without
    waiting to re-raise. Stock options decouple compensation timing from cash
    availability.


    The design insight is that wherever a multi-step value chain involves
    subsystems that operate asynchronously, at different scales, or with
    different resource types, the introduction of a tradeable intermediate unit
    is often what makes the whole system viable. Platforms that try to enable
    direct value exchange between parties who speak fundamentally different
    'resource languages' often fail where those that introduce a common
    intermediate (tokens, credits, points) succeed.
stance: >-
  In both biochemical and economic systems, universal intermediate tokens that
  decouple production from consumption are what allow complex multi-step value
  chains to function.
related:
  - INS-260330-5670
  - INS-260412-762C
  - INS-260330-100F
  - INS-260330-2E41
  - PRI-260405-C27E
evidence:
  - id: INS-260330-4B29
    type: SUPPORTS
  - id: INS-260330-5670
    type: SUPPORTS
    classified_at: '2026-04-06'
  - id: INS-260330-3C3C
    type: EXTENDS
    classified_at: '2026-04-06'
  - id: INS-260330-49E9
    type: EXTENDS
    classified_at: '2026-04-06'
  - id: INS-260330-24BA
    type: EXTENDS
    classified_at: '2026-04-06'
---
Photosynthesis doesn't convert sunlight directly into glucose. Instead, it converts light energy into two intermediate currencies — ATP (for chemical energy transfer) and NADPH (for electron transfer) — which the Calvin Cycle then uses to assemble glucose. These intermediaries are essential: the light-dependent and light-independent reactions operate on different timescales, in different locations, and with different substrate requirements. Direct coupling would make the system brittle.

This architectural pattern recurs throughout complex systems. Money is an intermediate currency that decouples the producer of wheat from the producer of nails. API tokens decouple authentication from authorization. In venture capital, 'dry powder' (committed but undeployed capital) functions as an intermediate store that allows GPs to act when opportunities arise without waiting to re-raise. Stock options decouple compensation timing from cash availability.

The design insight is that wherever a multi-step value chain involves subsystems that operate asynchronously, at different scales, or with different resource types, the introduction of a tradeable intermediate unit is often what makes the whole system viable. Platforms that try to enable direct value exchange between parties who speak fundamentally different 'resource languages' often fail where those that introduce a common intermediate (tokens, credits, points) succeed.

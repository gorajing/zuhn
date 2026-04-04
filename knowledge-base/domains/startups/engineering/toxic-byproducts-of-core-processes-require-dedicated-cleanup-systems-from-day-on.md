---
id: INS-260404-BF8A
domain: startups
topic: engineering
title: >-
  Toxic byproducts of core processes require dedicated cleanup systems from day
  one
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - side-effects
  - system-design
  - cleanup
  - maintenance
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
    RuBisCo's oxygen-grabbing error produces a toxin that plants must build
    separate enzyme pathways to neutralize — core processes always generate
    waste that needs its own infrastructure.
  standard: >-
    When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a
    toxic byproduct that interferes with the Calvin Cycle itself. Plants evolved
    dedicated enzyme pathways (photorespiration) solely to break down this waste
    product into something usable. The cleanup infrastructure is not optional;
    without it, the core process poisons itself.


    This maps directly to engineering systems: database operations produce
    orphaned records, API integrations generate failed webhook queues, ML
    pipelines create stale model artifacts. The pattern is universal — any core
    process at scale produces toxic byproducts that, if unaddressed, degrade the
    system that created them. The insight is to design cleanup systems as
    first-class infrastructure alongside the core process, not as afterthoughts
    when things start breaking.
stance: >-
  Any sufficiently scaled process will produce harmful side effects that require
  their own engineering investment to neutralize, and ignoring this creates
  compounding system damage
related:
  - INS-260330-F222
  - INS-260403-C4CD
  - INS-260403-53C9
  - INS-260330-F5CF
  - INS-260330-E497
  - INS-260330-EACA
  - INS-260404-1455
---
When RuBisCo grabs oxygen instead of CO2, it produces phosphoglycolate — a toxic byproduct that interferes with the Calvin Cycle itself. Plants evolved dedicated enzyme pathways (photorespiration) solely to break down this waste product into something usable. The cleanup infrastructure is not optional; without it, the core process poisons itself.

This maps directly to engineering systems: database operations produce orphaned records, API integrations generate failed webhook queues, ML pipelines create stale model artifacts. The pattern is universal — any core process at scale produces toxic byproducts that, if unaddressed, degrade the system that created them. The insight is to design cleanup systems as first-class infrastructure alongside the core process, not as afterthoughts when things start breaking.

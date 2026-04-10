---
id: INS-260410-0142
domain: ai-development
topic: alignment
title: Minimum viable steering for capability is smaller than for alignment
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - alignment
  - ai-safety
  - paperclip-maximizer
  - steering-subsystem
sources:
  - type: youtube
    title: Adam Marblestone – AI is missing something fundamental about the brain
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=_9V_Hbe-N1A'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The minimal set of drives needed to bootstrap general capability (curiosity,
    exploration) is much smaller than the set needed to produce human-compatible
    values.
  standard: >-
    Marblestone channels Steve Byrnes's worry: a model-based RL system needs
    only a handful of steering signals — curiosity, prediction error, some
    exploratory drive — to become extremely capable. Human social instincts,
    ethics, shame, eye-contact sensitivity, and status-seeking heuristics are
    orders of magnitude more intricate: a gazillion bespoke cell types in the
    hypothalamus and amygdala, each wiring learned concepts to innate reflexes.


    The asymmetry is dangerous. If capability research only needs to find the
    minimal steering kit, there's no reason the resulting system will end up
    with anything resembling human-compatible values. The alignment problem is
    therefore a specification problem: you have to explicitly build and validate
    the richer Steering Subsystem analogue, because capability won't drag it
    along for free.


    This argues for direct neuroscience investment in decoding how the Steering
    Subsystem wires learned features to innate rewards — it's not just biology,
    it's the blueprint for any non-trivial alignment approach.
stance: >-
  A competent paperclip maximizer is achievable with far less steering machinery
  than human-like social instincts require, so capabilities will arrive before
  alignment by default.
related:
  - INS-260330-C31B
  - INS-260403-F4ED
  - INS-260410-ED68
  - PRI-260328-A82C
  - INS-260403-976C
---
Marblestone channels Steve Byrnes's worry: a model-based RL system needs only a handful of steering signals — curiosity, prediction error, some exploratory drive — to become extremely capable. Human social instincts, ethics, shame, eye-contact sensitivity, and status-seeking heuristics are orders of magnitude more intricate: a gazillion bespoke cell types in the hypothalamus and amygdala, each wiring learned concepts to innate reflexes.

The asymmetry is dangerous. If capability research only needs to find the minimal steering kit, there's no reason the resulting system will end up with anything resembling human-compatible values. The alignment problem is therefore a specification problem: you have to explicitly build and validate the richer Steering Subsystem analogue, because capability won't drag it along for free.

This argues for direct neuroscience investment in decoding how the Steering Subsystem wires learned features to innate rewards — it's not just biology, it's the blueprint for any non-trivial alignment approach.

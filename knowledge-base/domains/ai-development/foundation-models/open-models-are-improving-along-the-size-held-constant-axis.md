---
id: INS-260626-6DCA
domain: ai-development
topic: foundation-models
title: Open models are improving along the size-held-constant axis
actionability: inspiration
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - open-models
  - scaling
  - on-device
  - capability-trajectory
  - gemma
sources:
  - type: youtube
    title: "Gemma, DeepMind's Family of Open Models —\_Omar Sanseviero, Google DeepMind"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_gVFUEdhCyI'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Across Gemma 1 → 2 → 3 → 4, LM Arena scores rose generation over generation
    without the models getting bigger, with the most capable points clustering
    in the 'small-and-strong' top-left corner.
  standard: >-
    The talk's central trajectory claim is that open models 'have kept getting
    better and better without going bigger.' Gemma 3 from a year prior already
    topped the LM Arena charts among models that fit a single consumer GPU;
    Gemma 4 pushes the frontier further while still spanning 2B–32B, with even
    the 31B running on a consumer GPU and the smallest models running on an
    Android phone, an iPhone, or a Raspberry Pi.


    This matters strategically because if capability per parameter keeps
    compounding, the set of tasks that require a frontier API model shrinks
    every year while the set runnable fully offline expands. The speaker
    projects that in 1–2 years 'extremely capable models' will run directly in
    people's pockets — meaning product builders should plan for a near future
    where on-device inference is the default for most tasks and API calls are
    reserved for the few that genuinely need maximal raw intelligence.


    The insight is time-sensitive because it is a forecast about a moving
    frontier: the specific size/capability tradeoff will be obsolete within a
    year or two, but the directional bet — small-and-capable as the dominant
    growth axis for open models — is what to plan around. It connects to
    architecture choices like per-layer embeddings that make this trajectory
    practical.
stance: >-
  Open-model capability is advancing primarily by getting better at a fixed
  size, making powerful fully-offline AI inevitable.
related:
  - INS-260403-A9F3
  - INS-260404-C147
  - INS-260605-33B4
  - INS-260625-A53F
  - INS-260625-FC64
  - INS-260625-B9A5
  - PRI-260323-8E89
  - INS-260413-C040
  - INS-260409-E776
---
The talk's central trajectory claim is that open models 'have kept getting better and better without going bigger.' Gemma 3 from a year prior already topped the LM Arena charts among models that fit a single consumer GPU; Gemma 4 pushes the frontier further while still spanning 2B–32B, with even the 31B running on a consumer GPU and the smallest models running on an Android phone, an iPhone, or a Raspberry Pi.

This matters strategically because if capability per parameter keeps compounding, the set of tasks that require a frontier API model shrinks every year while the set runnable fully offline expands. The speaker projects that in 1–2 years 'extremely capable models' will run directly in people's pockets — meaning product builders should plan for a near future where on-device inference is the default for most tasks and API calls are reserved for the few that genuinely need maximal raw intelligence.

The insight is time-sensitive because it is a forecast about a moving frontier: the specific size/capability tradeoff will be obsolete within a year or two, but the directional bet — small-and-capable as the dominant growth axis for open models — is what to plan around. It connects to architecture choices like per-layer embeddings that make this trajectory practical.

---
id: INS-260410-9303
domain: ai-development
topic: model-architecture
title: 'Evolution encoded intelligence in reward functions, not architecture'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - loss-functions
  - evolution
  - neuroscience
  - brain
  - inductive-bias
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
    The brain's 'special sauce' is a large set of innately wired,
    species-specific reward functions — not a clever learning algorithm or
    architecture.
  standard: >-
    Marblestone's hunch, backed by Steve Byrnes's Learning Subsystem / Steering
    Subsystem framework, is that ML has overfit on mathematically simple loss
    functions (next-token prediction, cross-entropy) while evolution built
    intelligence by encoding thousands of specialized reward functions turned on
    at different developmental stages — effectively a curriculum written as
    'Python code' in the genome.


    This reframes the 3GB-genome paradox: evolution doesn't need to encode a
    massive pretrained network because reward functions are extraordinarily
    compact while still steering a generalist cortex toward the right learned
    features. The single-cell atlases from the BRAIN Initiative provide
    empirical support — the subcortical Steering Subsystem has vastly more
    diverse, bespoke cell types than the repetitive cortex, consistent with the
    idea that cost-function complexity (not architectural complexity) is where
    the evolutionary action lives.


    For AI, this predicts that scaling alone is insufficient and that the next
    frontier is designing richer, stage-gated training objectives rather than
    larger transformers.
stance: >-
  The missing ingredient in LLMs is not more architecture or data but the
  thousands of bespoke, stage-specific loss functions evolution baked into the
  brain's Steering Subsystem.
related:
  - INS-260330-0ED2
  - PRI-260406-4F8E
  - INS-260409-1D91
  - INS-260325-1D95
  - INS-260321-F864
  - INS-260410-684D
---
Marblestone's hunch, backed by Steve Byrnes's Learning Subsystem / Steering Subsystem framework, is that ML has overfit on mathematically simple loss functions (next-token prediction, cross-entropy) while evolution built intelligence by encoding thousands of specialized reward functions turned on at different developmental stages — effectively a curriculum written as 'Python code' in the genome.

This reframes the 3GB-genome paradox: evolution doesn't need to encode a massive pretrained network because reward functions are extraordinarily compact while still steering a generalist cortex toward the right learned features. The single-cell atlases from the BRAIN Initiative provide empirical support — the subcortical Steering Subsystem has vastly more diverse, bespoke cell types than the repetitive cortex, consistent with the idea that cost-function complexity (not architectural complexity) is where the evolutionary action lives.

For AI, this predicts that scaling alone is insufficient and that the next frontier is designing richer, stage-gated training objectives rather than larger transformers.

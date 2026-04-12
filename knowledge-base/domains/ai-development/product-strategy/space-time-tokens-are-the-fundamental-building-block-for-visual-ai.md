---
id: INS-260327-9816
domain: ai-development
topic: product-strategy
title: Space-time tokens are the fundamental building block for visual AI
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - diffusion-transformers
  - tokenization
  - video-generation
  - architecture
sources:
  - type: youtube
    title: >-
      OpenAI Sora 2 Team: How Generative Video Will Unlock Creativity and World
      Models
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=w9oTtvbyLP8'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Simple space-time patch tokenization enables diffusion transformers to
    generate entire videos simultaneously with global context.
  standard: >-
    Just as characters and BPE tokens serve as the fundamental building blocks
    for language models, space-time patches (small cuboids composing spatial X/Y
    dimensions with temporal position) serve as the minimal building block for
    visual generative models. Diffusion transformers operate on these patches,
    allowing full global attention across all positions in space and time
    simultaneously.


    This architecture solves the quality degradation over time that plagued
    earlier video generation systems. Because every space-time token attends to
    every other token, properties like object permanence emerge naturally. The
    simplicity and generality of this representation is key, applying equally to
    real footage, anime, and cartoons, putting optimization pressure on the
    model to learn generalizable world properties efficiently.
stance: >-
  Space-time patches that compose spatial and temporal dimensions into a single
  token representation are the visual equivalent of BPE tokens in language, and
  this simple representation is sufficient to build powerful visual generative
  models.
related:
  - INS-260323-22E8
  - INS-260327-DCF8
  - INS-260327-6E57
  - INS-260405-57D6
  - INS-260412-3603
---
Just as characters and BPE tokens serve as the fundamental building blocks for language models, space-time patches (small cuboids composing spatial X/Y dimensions with temporal position) serve as the minimal building block for visual generative models. Diffusion transformers operate on these patches, allowing full global attention across all positions in space and time simultaneously.

This architecture solves the quality degradation over time that plagued earlier video generation systems. Because every space-time token attends to every other token, properties like object permanence emerge naturally. The simplicity and generality of this representation is key, applying equally to real footage, anime, and cartoons, putting optimization pressure on the model to learn generalizable world properties efficiently.

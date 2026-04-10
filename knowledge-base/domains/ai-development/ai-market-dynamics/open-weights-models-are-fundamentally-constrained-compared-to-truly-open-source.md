---
id: INS-260327-5D5F
domain: ai-development
topic: ai-market-dynamics
title: >-
  Open-weights models are fundamentally constrained compared to truly
  open-source models
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - open-source
  - open-weights
  - model-customization
  - fine-tuning-limits
sources:
  - type: youtube
    title: Making AI accessible with Andrej Karpathy and Stephanie Zhan
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=c3b-JASoPi0'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fine-tuning an open-weights model degrades its other capabilities because
    you cannot mix new data with the original training distribution; truly
    open-source models with full training pipelines are fundamentally more
    useful.
  standard: >-
    Karpathy makes a subtle but important distinction: open-weights models (like
    Llama) are like compiled binaries. You can run them and do some fine-tuning,
    but the more you fine-tune, the more the model regresses on its original
    capabilities. To add knowledge without regression, you need to train on a
    mixture of the original and new data distributions, which requires the full
    training loop and data, not just the weights.


    Truly open-source models (like OLMO, LLM 360, and others releasing the
    complete training infrastructure) enable this deeper customization. Karpathy
    suggests the ecosystem needs better language: 'open-weights,' 'open-source,'
    and 'proprietary' as distinct categories. This matters for companies
    building on these models because the ceiling of customization is
    fundamentally different depending on which category you're working with.
stance: >-
  Models released as 'open-source' but without the full training pipeline, data,
  and infrastructure are analogous to compiled binaries rather than source code,
  limiting users to fine-tuning rather than true capability modification because
  heavy fine-tuning causes regression on other capabilities.
related:
  - INS-260322-3616
  - INS-260404-CE26
  - INS-260403-D3ED
  - PRI-260406-22E2
  - INS-260403-64F4
  - INS-260329-A2D0
  - INS-260403-8A65
  - INS-260403-58DA
  - INS-260410-4E62
---
Karpathy makes a subtle but important distinction: open-weights models (like Llama) are like compiled binaries. You can run them and do some fine-tuning, but the more you fine-tune, the more the model regresses on its original capabilities. To add knowledge without regression, you need to train on a mixture of the original and new data distributions, which requires the full training loop and data, not just the weights.

Truly open-source models (like OLMO, LLM 360, and others releasing the complete training infrastructure) enable this deeper customization. Karpathy suggests the ecosystem needs better language: 'open-weights,' 'open-source,' and 'proprietary' as distinct categories. This matters for companies building on these models because the ceiling of customization is fundamentally different depending on which category you're working with.

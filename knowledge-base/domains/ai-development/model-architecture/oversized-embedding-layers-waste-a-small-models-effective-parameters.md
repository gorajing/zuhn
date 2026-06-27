---
id: INS-260626-4D5F
domain: ai-development
topic: model-architecture
title: Oversized embedding layers waste a small model's effective parameters
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - small-models
  - embeddings
  - model-architecture
  - edge-ai
  - parameter-efficiency
sources:
  - type: youtube
    title: >-
      Everything I Learned Training Frontier Small Models — Maxime Labonne,
      Liquid AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fLUtUkqYHnQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In tiny models the embedding layer can dominate the parameter count (63% in
    Gemma 3 270M), so the 'effective' reasoning parameters are far smaller than
    the headline size suggests.
  standard: >-
    Labonne points out that the smallest models in major families carry
    embedding layers far out of proportion to their reasoning capacity: Gemma 3
    270M is roughly 63% embedding parameters and Gemma 2.5 0.8B is ~29%. Those
    embedding parameters don't contribute to reasoning or knowledge capacity —
    they exist largely because the models are distilled from teachers with huge
    vocabularies. The practical consequence is that two models with the same
    memory footprint can have wildly different 'effective' sizes. Liquid's LFM2
    architecture keeps the embedding layer small (so ~90% of parameters are
    effective), squeezing more reasoning out of the same footprint. The
    actionable takeaway: when designing or selecting a small model, look past
    total parameter count to the share spent on embeddings — that ratio, not the
    headline number, predicts usable capability per byte of memory.
stance: >-
  Shrinking the vocabulary/embedding layer in a small model frees a
  disproportionate share of parameters for actual reasoning and knowledge.
related:
  - INS-260403-2138
  - INS-260605-8F95
  - INS-260625-48FA
  - INS-260626-BCC7
  - INS-260626-21EA
  - INS-260409-17E9
  - INS-260626-BB8B
  - INS-260627-B9FA
---
Labonne points out that the smallest models in major families carry embedding layers far out of proportion to their reasoning capacity: Gemma 3 270M is roughly 63% embedding parameters and Gemma 2.5 0.8B is ~29%. Those embedding parameters don't contribute to reasoning or knowledge capacity — they exist largely because the models are distilled from teachers with huge vocabularies. The practical consequence is that two models with the same memory footprint can have wildly different 'effective' sizes. Liquid's LFM2 architecture keeps the embedding layer small (so ~90% of parameters are effective), squeezing more reasoning out of the same footprint. The actionable takeaway: when designing or selecting a small model, look past total parameter count to the share spent on embeddings — that ratio, not the headline number, predicts usable capability per byte of memory.

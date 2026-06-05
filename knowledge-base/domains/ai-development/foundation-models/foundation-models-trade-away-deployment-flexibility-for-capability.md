---
id: INS-260605-72B5
domain: ai-development
topic: foundation-models
title: Foundation models trade away deployment flexibility for capability
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - deployment
  - edge-ai
  - foundation-models
  - sam
  - inference-cost
sources:
  - type: youtube
    title: 'How Transformers Finally Ate Vision – Isaac Robinson, Roboflow'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VhfAVA3BG2I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SAM 3 is enormously capable but 800M parameters and 300ms on a T4, making it
    unusable for the low-power edge deployments vision has historically
    targeted.
  standard: >-
    The pretraining-substitutes-for-bias strategy has a hidden cost. When you
    remove inductive bias and lean on huge pretraining to recover performance,
    you get a single monolithic model that is expensive to train and expensive
    to run — there is no natural way to produce a small, cheap variant for a
    specific deployment. The SAM lineage illustrates this: SAM through SAM 3
    increasingly just bolts on a massively pretrained VIT backbone and gives up
    on architecture ablation, yielding an 800M-parameter model that takes 300ms
    on a T4 GPU. That is a non-starter for the resource-constrained edge devices
    computer vision has historically served. The lesson for anyone building on
    foundation models: raw capability and deployability are in tension, and a
    state-of-the-art model that cannot fit your hardware or latency budget
    delivers zero value in the field. Capability without deployment flexibility
    is a one-size-fits-all trap.
stance: >-
  Relying on massive pretraining to recover performance produces
  one-size-fits-all models that are too expensive to deploy widely.
related:
  - INS-260605-6423
  - INS-260501-CF7D
  - INS-260325-3B58
  - INS-260405-1054
  - INS-260322-E734
---
The pretraining-substitutes-for-bias strategy has a hidden cost. When you remove inductive bias and lean on huge pretraining to recover performance, you get a single monolithic model that is expensive to train and expensive to run — there is no natural way to produce a small, cheap variant for a specific deployment. The SAM lineage illustrates this: SAM through SAM 3 increasingly just bolts on a massively pretrained VIT backbone and gives up on architecture ablation, yielding an 800M-parameter model that takes 300ms on a T4 GPU. That is a non-starter for the resource-constrained edge devices computer vision has historically served. The lesson for anyone building on foundation models: raw capability and deployability are in tension, and a state-of-the-art model that cannot fit your hardware or latency budget delivers zero value in the field. Capability without deployment flexibility is a one-size-fits-all trap.

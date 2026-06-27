---
id: INS-260505-4E44
domain: ai-development
topic: research-methodology
title: >-
  Data-driven AI models are now competitive with physics-informed models in many
  fluid dynamics domains
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - data-driven-vs-physics-informed
  - fluid-dynamics
  - pinns
  - scaling
sources:
  - type: audio
    title: Lighting talk 2
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    PINNs were going to beat data-driven, then ChatGPT happened, then weather
    models happened — pure data-driven won most of these fights.
  standard: >-
    Q&A point at the end of the lighting talk session: a panelist observes that
    the early consensus on physics-informed neural networks (PINNs) being the
    future of fluid dynamics ML hasn't held up. Pure data-driven models
    (FourCastNet, GraphCast, Pangu, AI2 weather model) competitive with
    operational supercomputer models (IFS) without needing physics losses. The
    mechanism: scale + the right architectural inductive bias (spherical
    harmonics for weather, attention for general purpose) beats explicit
    conservation-law penalties as a regularizer. PINNs aren't dead — they win in
    low-data regimes where the physics is well-known and clean — but the broader
    'physics-informed always wins' narrative has been falsified.


    Application: when entering a new scientific ML domain, default to evaluating
    both approaches (data-driven + physics-informed) head-to-head before
    committing. The 'physics is always right' argument is tempting but
    empirically often wrong at scale. Both should be in the design space.
stance: >-
  Five years ago, the consensus in fluid dynamics ML was that physics-informed
  models (PINNs, hybrid architectures with conservation laws built in) would
  always beat data-driven models. The 2026 reality is that pure data-driven
  models often perform comparably or better when trained at scale on operational
  data — physics-informed approaches haven't dominated.
related:
  - INS-260505-2053
  - INS-260627-1C9C
  - INS-260625-43B3
  - INS-260605-D33F
  - INS-260626-B833
---
Q&A point at the end of the lighting talk session: a panelist observes that the early consensus on physics-informed neural networks (PINNs) being the future of fluid dynamics ML hasn't held up. Pure data-driven models (FourCastNet, GraphCast, Pangu, AI2 weather model) competitive with operational supercomputer models (IFS) without needing physics losses. The mechanism: scale + the right architectural inductive bias (spherical harmonics for weather, attention for general purpose) beats explicit conservation-law penalties as a regularizer. PINNs aren't dead — they win in low-data regimes where the physics is well-known and clean — but the broader 'physics-informed always wins' narrative has been falsified.

Application: when entering a new scientific ML domain, default to evaluating both approaches (data-driven + physics-informed) head-to-head before committing. The 'physics is always right' argument is tempting but empirically often wrong at scale. Both should be in the design space.

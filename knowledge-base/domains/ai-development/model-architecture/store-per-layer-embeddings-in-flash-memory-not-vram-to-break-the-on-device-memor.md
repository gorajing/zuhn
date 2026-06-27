---
id: INS-260626-BCC7
domain: ai-development
topic: model-architecture
title: >-
  Store per-layer embeddings in flash memory, not VRAM, to break the on-device
  memory wall
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - on-device
  - memory
  - embeddings
  - inference-optimization
  - gemma
sources:
  - type: youtube
    title: 'Gemma 4 Deep Dive — Cassidy Hardin, Researcher, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_A367W_qvc8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma 4's 'effective' small models gain capacity by keeping a small
    (256-dim) per-layer embedding table in flash memory rather than VRAM, since
    VRAM is the binding on-device constraint.
  standard: >-
    On-device inference is bottlenecked not by FLOPs but by VRAM, which runs out
    fast on phones and laptops. Gemma 4's Per-Layer Embeddings (PLE) exploit
    this by giving each layer its own embedding table but storing those tables
    in flash memory instead of VRAM. The per-layer table is deliberately narrow
    (256 dimensions) and projected up to the full hidden size only at lookup
    time inside each decoder block, so the extra representational capacity costs
    cheap storage rather than scarce fast memory.


    The payoff shows up in the gap between 'effective' and 'representational'
    parameters: the E2B model runs as effectively ~2.3B parameters while
    carrying 5.1B representational parameters. The transferable lesson is to
    identify which resource is actually scarce in your deployment target and
    relocate cheap-but-large state to abundant storage, paying a small
    lookup/projection cost to keep the constrained resource free.
stance: >-
  Moving large embedding tables from VRAM to flash storage is the decisive lever
  for fitting capable models onto phones and laptops.
related:
  - INS-260625-48FA
  - INS-260626-4D5F
  - INS-260626-BB8B
  - INS-260625-DD6B
  - INS-260409-3230
  - INS-260626-21EA
  - INS-260626-3408
  - INS-260627-B9FA
---
On-device inference is bottlenecked not by FLOPs but by VRAM, which runs out fast on phones and laptops. Gemma 4's Per-Layer Embeddings (PLE) exploit this by giving each layer its own embedding table but storing those tables in flash memory instead of VRAM. The per-layer table is deliberately narrow (256 dimensions) and projected up to the full hidden size only at lookup time inside each decoder block, so the extra representational capacity costs cheap storage rather than scarce fast memory.

The payoff shows up in the gap between 'effective' and 'representational' parameters: the E2B model runs as effectively ~2.3B parameters while carrying 5.1B representational parameters. The transferable lesson is to identify which resource is actually scarce in your deployment target and relocate cheap-but-large state to abundant storage, paying a small lookup/projection cost to keep the constrained resource free.

---
id: INS-260330-0A8D
domain: ai-development
topic: system-building
title: >-
  Unified multilingual models beat per-language-pair models because complexity
  grows quadratically
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mixture-of-experts
  - translation
  - multilingual
  - architecture
  - roblox
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One unified MoE model beats 256 separate models — complexity grows
    quadratically with per-pair but linearly with unified
  standard: >-
    Roblox needed to translate between 16 languages (256 possible pairs).
    Per-pair models would require 256 separate models, each needing its own
    training data, infrastructure, and maintenance. Adding a 17th language means
    32 new models. Roblox instead built a single unified transformer using
    Mixture of Experts (MoE) — a routing mechanism activates only the relevant
    expert subnetworks for each language pair. Similar languages
    (Spanish/Portuguese) actually improve each other through shared training.
    The model auto-detects source language and handles mixed-language input. The
    trade-off: one model carries the weight of all 256 directions, requiring ~1B
    parameters. But the architectural simplicity at scale massively outweighs
    the per-model approach.
stance: >-
  Building one model for all language directions using Mixture of Experts is
  architecturally superior to per-pair models because adding a 17th language
  requires 32 new models in the per-pair approach but zero new models in the
  unified approach
related:
  - PRI-260323-F193
  - INS-260403-BB23
  - INS-260321-8C35
  - INS-260323-8AEC
  - PRI-260323-8E89
evidence:
  - id: INS-260403-BB23
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
Roblox needed to translate between 16 languages (256 possible pairs). Per-pair models would require 256 separate models, each needing its own training data, infrastructure, and maintenance. Adding a 17th language means 32 new models. Roblox instead built a single unified transformer using Mixture of Experts (MoE) — a routing mechanism activates only the relevant expert subnetworks for each language pair. Similar languages (Spanish/Portuguese) actually improve each other through shared training. The model auto-detects source language and handles mixed-language input. The trade-off: one model carries the weight of all 256 directions, requiring ~1B parameters. But the architectural simplicity at scale massively outweighs the per-model approach.

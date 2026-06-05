---
id: INS-260605-82C6
domain: ai-development
topic: model-architecture
title: >-
  'Any-to-any' is orchestration of specialized models, not one unified
  multimodal model
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - multimodal
  - model-architecture
  - gemini
  - marketing-vs-reality
  - orchestration
sources:
  - type: youtube
    title: >-
      Any-to-Any: Building Native Multimodal Agents - Patrick Löber, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GIRpQEfYf3U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The single 'any-to-any' model is a vision; in practice a reasoning model
    routes to separate image and speech generators.
  standard: >-
    Löber openly flags that the capability slide 'gives the wrong impression' —
    there is not yet one multimodal model. The main Gemini series understands
    many input modalities but only outputs text; separate specialized models
    (Nano Banana for native image, a Gemini-2.5-based TTS for speech) handle
    generation, wired together via function calls. The unified model is a stated
    future vision, not the current reality.


    This matters for architecture and expectation-setting: when a vendor
    advertises 'any-to-any', assume you are buying an orchestration surface over
    distinct models with distinct versions, latencies, and quality profiles —
    not a monolith. Design your system around tool-calling between models, and
    don't assume cross-modal generation shares a single weight set or pricing
    model. (Marked time-sensitive because the unified-model gap is exactly what
    the vendor intends to close.)
stance: >-
  Vendor 'any-to-any' multimodal capability is currently a router over
  specialized generation models, not a single model that ingests and emits all
  modalities.
related:
  - INS-260322-B09B
  - INS-260605-ACCD
  - INS-260408-C572
  - INS-260409-FB26
  - INS-260321-3967
---
Löber openly flags that the capability slide 'gives the wrong impression' — there is not yet one multimodal model. The main Gemini series understands many input modalities but only outputs text; separate specialized models (Nano Banana for native image, a Gemini-2.5-based TTS for speech) handle generation, wired together via function calls. The unified model is a stated future vision, not the current reality.

This matters for architecture and expectation-setting: when a vendor advertises 'any-to-any', assume you are buying an orchestration surface over distinct models with distinct versions, latencies, and quality profiles — not a monolith. Design your system around tool-calling between models, and don't assume cross-modal generation shares a single weight set or pricing model. (Marked time-sensitive because the unified-model gap is exactly what the vendor intends to close.)

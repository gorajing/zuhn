---
id: INS-260605-4D1D
domain: ai-development
topic: llm-training
title: 'Fine-tuning is essential, not optional, for sub-500M-parameter task models'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - tiny-models
  - edge-ai
  - reliability
  - evals
sources:
  - type: youtube
    title: >-
      TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM — Cormac Brick,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BKWpYIWvAo4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For models under ~500M parameters, fine-tune for the specific task — Google
    sees fine-tuning move the eval by 20-40 points, the difference between
    unusable and shippable.
  standard: >-
    Google AI Edge's experience is that customization strategy should scale
    inversely with model size: for 2-4B 'small' models, customize via prompting
    or skills; for sub-1B 'tiny' models, fine-tuning is the workflow of choice;
    and below 500M parameters fine-tuning is effectively mandatory for
    production-level reliability. Their concrete data point: a 270M
    function-calling model went from roughly 40-something percent to 86%
    reliability across 10 functions after fine-tuning, and they 'see this with
    smaller models all the time' — fine-tuning is worth 20 to 40 points on a
    given eval.


    The exception that proves the rule is off-the-shelf narrow models (e.g.
    dedicated transcription or pairwise-translation models in that size class)
    that ship already scoped to one task — they work without further tuning
    precisely because they were fine-tuned to that narrow task from the outset.
    If you want a tiny model to do YOUR narrow task and ship it to many devices,
    fine-tuning is the price of admission.
stance: >-
  Tiny models below ~500M parameters require task-specific fine-tuning to reach
  production reliability, and that fine-tuning is worth 20-40 eval points.
related:
  - INS-260322-3616
  - INS-260322-D6D7
  - INS-260322-D1AB
  - INS-260327-E07C
  - INS-260327-7A48
  - INS-260403-EA93
  - INS-260410-09B4
  - INS-260410-ED12
  - INS-260410-4EB9
  - INS-260410-8243
---
Google AI Edge's experience is that customization strategy should scale inversely with model size: for 2-4B 'small' models, customize via prompting or skills; for sub-1B 'tiny' models, fine-tuning is the workflow of choice; and below 500M parameters fine-tuning is effectively mandatory for production-level reliability. Their concrete data point: a 270M function-calling model went from roughly 40-something percent to 86% reliability across 10 functions after fine-tuning, and they 'see this with smaller models all the time' — fine-tuning is worth 20 to 40 points on a given eval.

The exception that proves the rule is off-the-shelf narrow models (e.g. dedicated transcription or pairwise-translation models in that size class) that ship already scoped to one task — they work without further tuning precisely because they were fine-tuned to that narrow task from the outset. If you want a tiny model to do YOUR narrow task and ship it to many devices, fine-tuning is the price of admission.

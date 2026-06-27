---
id: INS-260605-33C0
domain: ai-development
topic: system-design
title: Ship multiple single-task tiny models instead of one merged model
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - modularity
  - tiny-models
  - edge-ai
  - architecture
  - debuggability
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
    Keep tiny models modular — one per task (e.g. separate ASR and
    text-polishing engines) — so weights can be reused across apps and the
    pipeline stays inspectable.
  standard: >-
    In AI Edge Eloquent, Google split dictation into a speech-recognition engine
    and a separate dedicated mini-LLM text-polishing engine, even though 'we
    could probably have built one LLM to do all of this.' The choice is a
    deliberate 'modularity playbook' emerging as they build more on-device apps,
    and it rests on two pragmatic advantages over a single merged model.


    First, cost amortization: a standalone transcription engine can be reused
    across other use cases in the app, so you recoup the cost of those weights
    by deploying them in multiple places. Second, debuggability: with separate
    stages you can inspect the intermediate output (the raw transcription before
    polishing), making failures far easier to diagnose than in an opaque
    end-to-end model. They note the same pattern recurs in
    voice-to-function-calling. The trade-off is explicit — in theory the models
    could be stitched together, but in practice separate single-task models win
    on reuse and inspectability, which matters disproportionately when each
    model is tiny and narrowly scoped anyway.
stance: >-
  On-device apps should compose separate task-specific tiny models rather than
  stitching capabilities into one model, trading theoretical elegance for
  reusability and debuggability.
related:
  - PRI-260320-BC72
  - INS-260514-EE2E
  - INS-260626-5A6D
  - INS-260605-8AEE
  - INS-260410-3271
  - INS-260624-5ACA
  - INS-260605-AA90
  - INS-260605-FB4D
  - INS-260626-4320
---
In AI Edge Eloquent, Google split dictation into a speech-recognition engine and a separate dedicated mini-LLM text-polishing engine, even though 'we could probably have built one LLM to do all of this.' The choice is a deliberate 'modularity playbook' emerging as they build more on-device apps, and it rests on two pragmatic advantages over a single merged model.

First, cost amortization: a standalone transcription engine can be reused across other use cases in the app, so you recoup the cost of those weights by deploying them in multiple places. Second, debuggability: with separate stages you can inspect the intermediate output (the raw transcription before polishing), making failures far easier to diagnose than in an opaque end-to-end model. They note the same pattern recurs in voice-to-function-calling. The trade-off is explicit — in theory the models could be stitched together, but in practice separate single-task models win on reuse and inspectability, which matters disproportionately when each model is tiny and narrowly scoped anyway.

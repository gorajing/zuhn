---
id: INS-260605-8F95
domain: ai-development
topic: model-architecture
title: 'Tiny models earn capability through task narrowing, not scale'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tiny-llm
  - task-scoping
  - model-sizing
  - on-device
  - specialization
sources:
  - type: youtube
    title: >-
      From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents — Cormac
      Brick, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-TiET_K-E_g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Once you drop to 100-200M parameters, a model needs a very narrow and
    focused task to function — generality is traded away for size.
  standard: >-
    Brick is explicit that for the smallest models you either pick a
    fixed-function model (visual language model, transcription model) or
    fine-tune one to a tightly scoped task. There is no free lunch where a 200M
    model is both small and general; the parameter budget can only encode
    competence for a narrow domain.


    This reframes model selection for edge deployment as a task-decomposition
    problem rather than a model-shopping problem. The design move is to carve
    the product into the smallest possible specialized behaviors, then assign a
    tiny tuned model to each. A 270M function-caller, a
    few-hundred-million-param ASR engine, a text-polisher — each is narrow on
    purpose, and narrowness is precisely what lets them be small and fast enough
    to ship in an app.
stance: >-
  Models below ~200M parameters only work reliably when scoped to a single
  narrow, focused task.
related:
  - INS-260320-0511
  - INS-260330-EE25
  - INS-260403-2138
  - INS-260330-FF94
  - INS-260410-89D0
  - INS-260410-0142
  - INS-260605-4D1D
  - INS-260605-C859
  - INS-260605-DA2B
  - INS-260605-B82E
---
Brick is explicit that for the smallest models you either pick a fixed-function model (visual language model, transcription model) or fine-tune one to a tightly scoped task. There is no free lunch where a 200M model is both small and general; the parameter budget can only encode competence for a narrow domain.

This reframes model selection for edge deployment as a task-decomposition problem rather than a model-shopping problem. The design move is to carve the product into the smallest possible specialized behaviors, then assign a tiny tuned model to each. A 270M function-caller, a few-hundred-million-param ASR engine, a text-polisher — each is narrow on purpose, and narrowness is precisely what lets them be small and fast enough to ship in an app.

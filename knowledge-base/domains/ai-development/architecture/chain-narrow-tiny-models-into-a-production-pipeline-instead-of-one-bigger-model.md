---
id: INS-260605-FB4D
domain: ai-development
topic: architecture
title: >-
  Chain narrow tiny models into a production pipeline instead of one bigger
  model
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - model-chaining
  - pipeline
  - on-device
  - transcription
  - composition
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
    Google's Eloquent transcription app chains a Gemma-3-based ASR engine with a
    separate text-polishing model — each only a few hundred million params — to
    ship offline transcription with a personal dictionary.
  standard: >-
    The Eloquent app is offered as a 'proof of life' that tiny-model pipelines
    work in production. Rather than one model doing everything, it runs an ASR
    engine for speech-to-text and a distinct polishing model that removes
    ums/ahs and applies a personalized keyword dictionary (jargon, names). Each
    model is small, but composed they deliver a compelling offline experience.


    The architectural pattern mirrors the task-narrowing principle: instead of
    forcing one model to be general, you stage specialized models so each
    handles a job it can do well at small scale. This keeps every component
    shippable on-device while the composition delivers behavior — accurate,
    personalized, fully offline transcription — that would otherwise demand a
    much larger model or a cloud round-trip.
stance: >-
  Chaining several specialized few-hundred-million-param models produces
  production-grade capability that a single tiny model cannot.
related:
  - INS-260605-33C0
  - INS-260325-175B
  - INS-260403-13AF
  - INS-260404-07C3
  - INS-260514-CA00
---
The Eloquent app is offered as a 'proof of life' that tiny-model pipelines work in production. Rather than one model doing everything, it runs an ASR engine for speech-to-text and a distinct polishing model that removes ums/ahs and applies a personalized keyword dictionary (jargon, names). Each model is small, but composed they deliver a compelling offline experience.

The architectural pattern mirrors the task-narrowing principle: instead of forcing one model to be general, you stage specialized models so each handles a job it can do well at small scale. This keeps every component shippable on-device while the composition delivers behavior — accurate, personalized, fully offline transcription — that would otherwise demand a much larger model or a cloud round-trip.

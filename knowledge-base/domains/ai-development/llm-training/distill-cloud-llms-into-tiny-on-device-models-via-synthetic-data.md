---
id: INS-260605-738E
domain: ai-development
topic: llm-training
title: Distill cloud LLMs into tiny on-device models via synthetic data
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - synthetic-data
  - distillation
  - fine-tuning
  - tiny-models
  - edge-ai
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
    Use a strong cloud LLM to generate low-millions-to-tens-of-millions of
    synthetic examples of the target behavior, then fine-tune an off-the-shelf
    tiny model (e.g. Gemma 270M) on that data and quantize for deployment.
  standard: >-
    Google's repeated workflow for production tiny-model features: take a much
    stronger cloud LLM, have it generate large volumes of synthetic data (low
    single-digit millions up to tens of millions of examples depending on
    ambition) that exactly match the behavior you want, then feed that into a
    fine-tuning workflow over a small base model like Gemma 3 270M. Combined
    with quantization, this ships a 'pretty compelling narrow feature to a very
    wide set of users' powered by an LLM that runs on many devices.


    They used precisely this to build AI Edge Eloquent's transcription and
    text-polishing engines — fine-tuned derivatives of a small Gemma model, not
    officially published checkpoints — and report using the same flow internally
    to power note-taking and other first-party Google products. The pattern is
    essentially task-specific distillation: the expensive cloud model never
    ships, but its competence is transferred into a tiny model through synthetic
    supervision. It is the dominant route to turning a generic small base model
    into a reliable single-purpose on-device feature.
stance: >-
  The reliable playbook for shipping a tiny on-device feature is to generate
  millions of synthetic examples with a strong cloud LLM, then fine-tune a small
  base model on them.
related:
  - INS-260626-9E65
  - INS-260603-C102
  - INS-260626-21EA
  - INS-260626-ECA6
  - INS-260410-684D
  - INS-260626-3796
  - INS-260626-3408
---
Google's repeated workflow for production tiny-model features: take a much stronger cloud LLM, have it generate large volumes of synthetic data (low single-digit millions up to tens of millions of examples depending on ambition) that exactly match the behavior you want, then feed that into a fine-tuning workflow over a small base model like Gemma 3 270M. Combined with quantization, this ships a 'pretty compelling narrow feature to a very wide set of users' powered by an LLM that runs on many devices.

They used precisely this to build AI Edge Eloquent's transcription and text-polishing engines — fine-tuned derivatives of a small Gemma model, not officially published checkpoints — and report using the same flow internally to power note-taking and other first-party Google products. The pattern is essentially task-specific distillation: the expensive cloud model never ships, but its competence is transferred into a tiny model through synthetic supervision. It is the dominant route to turning a generic small base model into a reliable single-purpose on-device feature.

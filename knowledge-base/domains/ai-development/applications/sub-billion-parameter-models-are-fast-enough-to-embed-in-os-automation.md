---
id: INS-260626-8DD1
domain: ai-development
topic: applications
title: Sub-billion-parameter models are fast enough to embed in OS automation
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - small-language-models
  - automation
  - on-device-ai
  - shortcuts
  - edge-inference
sources:
  - type: youtube
    title: "Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX —\_Adrien Grondin, Locally AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a2muGkT4WD4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models around 300-350M parameters run fast and efficiently enough to be
    triggered inside iOS Shortcuts for routine text-processing automation.
  standard: >-
    Beyond chat-sized models, Grondin ships 'liquid' models of roughly 300-350M
    parameters that are fast and efficient enough to run inside iOS Shortcuts.
    That unlocks a class of on-device automation — text cleanup, extraction,
    classification, reformatting — that fires locally with no network call, no
    API key, and no per-token cost.


    The non-obvious move here is matching model size to the job rather than
    reaching for the largest model that fits. Most automation steps are narrow
    transformations that a tiny model handles instantly; using a tiny model is
    not a compromise but the right tool, because it is fast enough to sit
    invisibly inside an automation chain triggered dozens of times a day. This
    points to an emerging design pattern: a tier of on-device 'automation-grade'
    models that are too weak for open-ended chat but ideal as the
    language-understanding primitive inside OS workflows — collapsing what used
    to require a cloud LLM call into a local, free, instant step.
stance: >-
  Tiny models (a few hundred million parameters) are fast enough to run inside
  OS-level automation like Shortcuts, enabling local text processing without
  cloud round-trips.
related:
  - INS-260605-FB4D
  - INS-260403-C584
  - INS-260605-C9EB
  - INS-260403-13AF
  - INS-260603-11DB
---
Beyond chat-sized models, Grondin ships 'liquid' models of roughly 300-350M parameters that are fast and efficient enough to run inside iOS Shortcuts. That unlocks a class of on-device automation — text cleanup, extraction, classification, reformatting — that fires locally with no network call, no API key, and no per-token cost.

The non-obvious move here is matching model size to the job rather than reaching for the largest model that fits. Most automation steps are narrow transformations that a tiny model handles instantly; using a tiny model is not a compromise but the right tool, because it is fast enough to sit invisibly inside an automation chain triggered dozens of times a day. This points to an emerging design pattern: a tier of on-device 'automation-grade' models that are too weak for open-ended chat but ideal as the language-understanding primitive inside OS workflows — collapsing what used to require a cloud LLM call into a local, free, instant step.

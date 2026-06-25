---
id: INS-260605-7B83
domain: ai-development
topic: architecture
title: >-
  Centralize the on-device model at the OS level so apps share one copy of the
  cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - on-device-ai
  - platform-design
  - android
  - gemini-nano
  - resource-sharing
sources:
  - type: youtube
    title: 'Gemini Nano on device — Florina Muntenescu & Oli Gaymond, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=owH1f0N-keY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A useful on-device model is 3-4GB, so shipping it once at the system level
    and letting every app share it is the only way the economics work.
  standard: >-
    Android's AI Core exists because a capable on-device model is 1GB at the
    smallest and 3-4GB in practice — far too large for each app to bundle and
    justify to an end user. By placing the model in a single system service, the
    OS pays that storage and download cost once and amortizes it across every
    app on the device. The team explicitly framed this as removing any concern
    about 'hundreds of apps using this,' because the marginal cost of an
    additional app consumer is near zero once the model is centralized.


    The deeper principle is that on-device AI inverts the cloud cost structure:
    in the cloud, per-app isolation is cheap and the model is shared
    server-side; on-device, the model is the heavy shared asset and must be
    hoisted to the platform layer. Any team designing local-inference features
    should ask whether the model belongs to the app or to the OS — and for
    general-purpose models the answer is almost always the OS. This also unlocks
    system-level scheduling, queuing, and battery attribution that no single app
    could coordinate.
stance: >-
  On-device LLMs should be shipped as a shared OS system service, not bundled
  per-app.
related:
  - INS-260625-E04B
  - INS-260625-DD6B
  - INS-260605-F064
  - INS-260423-9225
  - INS-260501-DAD0
---
Android's AI Core exists because a capable on-device model is 1GB at the smallest and 3-4GB in practice — far too large for each app to bundle and justify to an end user. By placing the model in a single system service, the OS pays that storage and download cost once and amortizes it across every app on the device. The team explicitly framed this as removing any concern about 'hundreds of apps using this,' because the marginal cost of an additional app consumer is near zero once the model is centralized.

The deeper principle is that on-device AI inverts the cloud cost structure: in the cloud, per-app isolation is cheap and the model is shared server-side; on-device, the model is the heavy shared asset and must be hoisted to the platform layer. Any team designing local-inference features should ask whether the model belongs to the app or to the OS — and for general-purpose models the answer is almost always the OS. This also unlocks system-level scheduling, queuing, and battery attribution that no single app could coordinate.

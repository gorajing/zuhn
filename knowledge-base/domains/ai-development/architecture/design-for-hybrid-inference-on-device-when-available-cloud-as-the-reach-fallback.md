---
id: INS-260605-F064
domain: ai-development
topic: architecture
title: >-
  Design for hybrid inference: on-device when available, cloud as the reach
  fallback
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hybrid-inference
  - on-device-ai
  - cloud-fallback
  - api-design
  - device-fragmentation
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
    Because capable on-device models only run on recent flagship devices, ship
    hybrid inference that runs locally where possible and falls back to the
    cloud to keep your feature reachable everywhere.
  standard: >-
    Gemini Nano only runs on flagship-class hardware (Pixel 9/10-generation and
    equivalent OEM devices), which would cap a feature's reach if it were
    on-device-only. The answer is hybrid inference (via Firebase AI logic): run
    on-device for low latency, privacy, and zero marginal cost when the model is
    present, and transparently fall back to a cloud model (Gemini Flash/Pro)
    when it is not. The team's stated goal is to make the on-device and cloud
    APIs 'as consistent as possible so it's easy to blend what is needed.'


    The design lesson is that device capability is a runtime property, not a
    build-time assumption. Rather than forcing a binary choice, the platform
    turns the device/model matrix into a graceful-degradation gradient: the same
    prompt targets the best available executor. Teams building local-first AI
    should architect for this fallback from day one, because the alternative —
    shipping two divergent implementations or excluding non-flagship users — is
    both more work and worse reach.
stance: >-
  Production AI features should treat on-device and cloud as one consistent API
  with automatic fallback, not as separate code paths.
related:
  - INS-260605-D430
  - INS-260605-0748
  - INS-260605-7B83
  - INS-260626-ECA6
  - INS-260605-4375
  - INS-260605-86BE
---
Gemini Nano only runs on flagship-class hardware (Pixel 9/10-generation and equivalent OEM devices), which would cap a feature's reach if it were on-device-only. The answer is hybrid inference (via Firebase AI logic): run on-device for low latency, privacy, and zero marginal cost when the model is present, and transparently fall back to a cloud model (Gemini Flash/Pro) when it is not. The team's stated goal is to make the on-device and cloud APIs 'as consistent as possible so it's easy to blend what is needed.'

The design lesson is that device capability is a runtime property, not a build-time assumption. Rather than forcing a binary choice, the platform turns the device/model matrix into a graceful-degradation gradient: the same prompt targets the best available executor. Teams building local-first AI should architect for this fallback from day one, because the alternative — shipping two divergent implementations or excluding non-flagship users — is both more work and worse reach.

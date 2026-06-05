---
id: INS-260605-F383
domain: ai-development
topic: infrastructure
title: >-
  Co-locating models in the same data center can cut total voice-agent latency
  by ~30% by eliminating network hops
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-agents
  - latency
  - co-location
  - network-latency
  - infrastructure
sources:
  - type: youtube
    title: >-
      Engineering voice agents: Latency, quality, and scale — Rishabh Bhargava,
      Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=N7b1PJc7SFc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Network latency between geographically separated models can dominate engine
    latency; co-locating all models and the orchestrator in one data center can
    drop a 75ms hop to ~5ms for a ~30% total latency reduction.
  standard: >-
    Most latency discussion focuses on engine latency — how long a model takes
    to produce output — but when models sit in different data centers, network
    latency between them becomes a major hidden cost. Even a well-optimized
    setup with 100–200ms time-to-first-token can lose 75ms to network hops (e.g.
    US West to Europe, or calling a US-hosted LLM from a London-based agent).


    The high-leverage fix is co-location: get the speech-to-text, LLM,
    text-to-speech models, and the agent orchestrator into the same data center
    or literally the same building. Dropping a 75ms hop to ~5ms yields roughly a
    30% reduction in an already-optimized pipeline. The corollary for teams
    using third-party hosted models across the ocean is to consider running
    open-source models locally in the same data center as the orchestrator. With
    real-time systems, every 10ms matters, so deep observability into
    per-component and network latency is essential.
stance: >-
  Co-locating the STT, LLM, TTS models and orchestrator in the same building
  yields a larger latency win than further optimizing already-fast model
  engines.
related:
  - INS-260329-C1A4
  - INS-260330-C06E
  - INS-260330-4C31
  - INS-260405-5670
  - INS-260424-865F
  - INS-260514-4BD5
  - INS-260605-DA98
  - PRI-260426-9730
---
Most latency discussion focuses on engine latency — how long a model takes to produce output — but when models sit in different data centers, network latency between them becomes a major hidden cost. Even a well-optimized setup with 100–200ms time-to-first-token can lose 75ms to network hops (e.g. US West to Europe, or calling a US-hosted LLM from a London-based agent).

The high-leverage fix is co-location: get the speech-to-text, LLM, text-to-speech models, and the agent orchestrator into the same data center or literally the same building. Dropping a 75ms hop to ~5ms yields roughly a 30% reduction in an already-optimized pipeline. The corollary for teams using third-party hosted models across the ocean is to consider running open-source models locally in the same data center as the orchestrator. With real-time systems, every 10ms matters, so deep observability into per-component and network latency is essential.

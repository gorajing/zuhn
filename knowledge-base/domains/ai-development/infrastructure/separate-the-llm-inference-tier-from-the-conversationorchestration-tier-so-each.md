---
id: INS-260605-4AF8
domain: ai-development
topic: infrastructure
title: >-
  Separate the LLM inference tier from the conversation/orchestration tier so
  each scales independently
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - architecture
  - voice-agents
  - inference-serving
  - load-balancing
sources:
  - type: youtube
    title: >-
      Reachy Mini: the $300 open source robot you can actually hack — Andres
      Marafioti, Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0jeZfjJMfmo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Splitting LLM inference onto its own scalable tier saves resources because a
    node of chatty users and a node of silent users consume wildly different LLM
    compute.
  standard: >-
    Reachy Mini's serving stack has three levels: the on-robot conversation app
    (mic/speaker I/O, echo cancellation, tool dispatch, face tracking), a
    speech-to-speech pipeline (VAD → Parakeet STT every 150ms → LLM → Coqui
    TTS), and separately scaled LLM inference endpoints behind a load balancer
    sized to connected-robot count.


    The key architectural decision is separating LLM inference from the
    conversation nodes. Each conversation node can host a fixed number of
    concurrent users before latency spikes, but actual LLM demand varies
    enormously — eight talkative users hammer the LLM while eight quiet users
    barely touch it. If the LLM lived inside the conversation node, you'd
    provision for worst case everywhere. Decoupling it lets the chatty-vs-quiet
    variance average out across a shared, independently-scaled LLM pool. When
    two subsystems in a pipeline have uncorrelated load, splitting their scaling
    units is a direct cost win.
stance: >-
  Decoupling LLM inference endpoints from the speech-orchestration nodes saves
  compute because the two have uncorrelated load profiles.
related:
  - INS-260605-D430
  - INS-260325-BEAC
  - INS-260605-6B24
  - INS-260405-567D
  - INS-260605-86BE
---
Reachy Mini's serving stack has three levels: the on-robot conversation app (mic/speaker I/O, echo cancellation, tool dispatch, face tracking), a speech-to-speech pipeline (VAD → Parakeet STT every 150ms → LLM → Coqui TTS), and separately scaled LLM inference endpoints behind a load balancer sized to connected-robot count.

The key architectural decision is separating LLM inference from the conversation nodes. Each conversation node can host a fixed number of concurrent users before latency spikes, but actual LLM demand varies enormously — eight talkative users hammer the LLM while eight quiet users barely touch it. If the LLM lived inside the conversation node, you'd provision for worst case everywhere. Decoupling it lets the chatty-vs-quiet variance average out across a shared, independently-scaled LLM pool. When two subsystems in a pipeline have uncorrelated load, splitting their scaling units is a direct cost win.

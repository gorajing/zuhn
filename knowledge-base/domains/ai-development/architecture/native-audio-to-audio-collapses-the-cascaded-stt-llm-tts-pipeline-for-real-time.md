---
id: INS-260605-68F4
domain: ai-development
topic: architecture
title: >-
  Native audio-to-audio collapses the cascaded STT-LLM-TTS pipeline for
  real-time voice
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - live-api
  - audio-to-audio
  - real-time
  - voice-agents
  - pipeline-collapse
sources:
  - type: youtube
    title: >-
      Any-to-Any: Building Native Multimodal Agents - Patrick Löber, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GIRpQEfYf3U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One audio-to-audio architecture replaces the STT→LLM→TTS cascade, enabling
    more natural live voice interaction.
  standard: >-
    Löber describes the Live API's newest model as a native 'audio-to-audio'
    architecture: audio goes in and audio goes out within one model, eliminating
    the traditional cascaded pipeline of separate speech-to-text, reasoning, and
    text-to-speech models. He credits this single-architecture design with
    enabling far more natural-sounding, low-latency conversational interactions,
    demonstrated by a colleague's live chat where the model both converses and
    describes what it sees on camera.


    The architectural lesson generalizes beyond voice: collapsing a multi-model
    cascade into one end-to-end model removes inter-stage latency, format
    conversions, and error accumulation, at the cost of losing the intermediate
    text you might want to log or moderate. For real-time voice agents, prefer
    native audio-to-audio when naturalness and latency dominate; keep a cascade
    when you need the transcript or per-stage control.
stance: >-
  A single audio-in/audio-out model produces more natural real-time interaction
  than a cascaded speech-to-text-to-speech pipeline.
related:
  - INS-260605-8AEE
  - INS-260605-0126
  - INS-260605-ACCD
  - INS-260405-1F6B
  - INS-260605-20C0
---
Löber describes the Live API's newest model as a native 'audio-to-audio' architecture: audio goes in and audio goes out within one model, eliminating the traditional cascaded pipeline of separate speech-to-text, reasoning, and text-to-speech models. He credits this single-architecture design with enabling far more natural-sounding, low-latency conversational interactions, demonstrated by a colleague's live chat where the model both converses and describes what it sees on camera.

The architectural lesson generalizes beyond voice: collapsing a multi-model cascade into one end-to-end model removes inter-stage latency, format conversions, and error accumulation, at the cost of losing the intermediate text you might want to log or moderate. For real-time voice agents, prefer native audio-to-audio when naturalness and latency dominate; keep a cascade when you need the transcript or per-stage control.

---
id: INS-260605-ACCD
domain: ai-development
topic: architecture
title: >-
  The cascading STT→LLM→TTS pipeline is the dominant production voice-agent
  architecture because speech-to-speech models still fail at tool calling
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - voice-agents
  - pipeline-architecture
  - speech-to-speech
  - tool-calling
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
    Cascade speech-to-text, an LLM, and text-to-speech as separate orchestrated
    models, because unified speech-to-speech models can't yet follow
    instructions or call tools reliably enough for production.
  standard: >-
    The dominant way to build voice agents today is a pipeline (cascading)
    architecture: streamed audio chunks go to a speech-to-text model, the
    transcript feeds an LLM that decides on tool calls and produces text, and
    that text feeds a text-to-speech model that streams audio back. This
    decomposition lets you independently optimize, observe, and scale each
    component.


    Pure speech-to-speech models (OpenAI's realtime API, Nvidia's voice-chat)
    are conceptually simpler and preserve paralinguistic signal, but in practice
    they still struggle with instruction following and tool calling. The common
    real-world arc is to try a speech-to-speech model, burn time
    prompt-engineering around its failures, and eventually fall back to the
    pipeline. Until the unified models close that gap, the pipeline remains the
    production default despite its orchestration overhead.
stance: >-
  Production voice agents should use a cascading speech-to-text → LLM →
  text-to-speech pipeline rather than a single end-to-end speech-to-speech
  model.
related:
  - INS-260605-510C
  - INS-260605-B03B
  - INS-260605-D37A
  - PRI-260320-6847
  - INS-260322-B09B
  - INS-260603-A506
---
The dominant way to build voice agents today is a pipeline (cascading) architecture: streamed audio chunks go to a speech-to-text model, the transcript feeds an LLM that decides on tool calls and produces text, and that text feeds a text-to-speech model that streams audio back. This decomposition lets you independently optimize, observe, and scale each component.

Pure speech-to-speech models (OpenAI's realtime API, Nvidia's voice-chat) are conceptually simpler and preserve paralinguistic signal, but in practice they still struggle with instruction following and tool calling. The common real-world arc is to try a speech-to-speech model, burn time prompt-engineering around its failures, and eventually fall back to the pipeline. Until the unified models close that gap, the pipeline remains the production default despite its orchestration overhead.

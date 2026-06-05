---
id: INS-260605-204E
domain: ai-development
topic: system-design
title: 'Stream the first packet to collapse perceived latency, not total compute time'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - streaming
  - voice-agents
  - ux
  - real-time
sources:
  - type: youtube
    title: 'Why TTS Models Now Look Like LLMs — Samuel Humeau, Mistral'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3jGAU2sbAyY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Emit the first audio packet immediately and the conversation feels
    responsive even if the full audio finishes computing seconds later.
  standard: >-
    Humeau demonstrates a TTS system where the first audio packet is emitted
    right away while the full audio computation completes ~60 seconds later.
    Because the user hears speech start almost immediately, the perceived
    latency is low and the agent feels responsive — the total wall-clock compute
    time is largely invisible to the user. The same principle is applied on the
    input side: doing speech-to-text in real time so the transcript is ready the
    instant end-of-turn is detected.


    This generalizes well beyond audio. Any system that produces a streamable
    output (LLM tokens, video frames, search results, page renders) can decouple
    'time until the user perceives progress' from 'time until the work is fully
    done.' The architectural implication is to design pipelines that surface
    partial results as early as possible — token-by-token LLM streaming feeding
    token-by-token TTS — rather than batching and waiting for completeness.


    Actionable for anyone building voice agents or streaming UIs: instrument and
    optimize time-to-first-token/packet as a primary metric, and architect the
    pipeline so the slowest downstream stage can begin as soon as the first
    upstream fragment arrives.
stance: >-
  In real-time generative systems, optimizing perceived latency
  (time-to-first-output) matters far more than total computation time for user
  experience.
related:
  - INS-260424-3176
  - INS-260404-6753
  - INS-260330-1296
  - INS-260320-10E8
  - INS-260320-232D
---
Humeau demonstrates a TTS system where the first audio packet is emitted right away while the full audio computation completes ~60 seconds later. Because the user hears speech start almost immediately, the perceived latency is low and the agent feels responsive — the total wall-clock compute time is largely invisible to the user. The same principle is applied on the input side: doing speech-to-text in real time so the transcript is ready the instant end-of-turn is detected.

This generalizes well beyond audio. Any system that produces a streamable output (LLM tokens, video frames, search results, page renders) can decouple 'time until the user perceives progress' from 'time until the work is fully done.' The architectural implication is to design pipelines that surface partial results as early as possible — token-by-token LLM streaming feeding token-by-token TTS — rather than batching and waiting for completeness.

Actionable for anyone building voice agents or streaming UIs: instrument and optimize time-to-first-token/packet as a primary metric, and architect the pipeline so the slowest downstream stage can begin as soon as the first upstream fragment arrives.

---
id: INS-260625-7530
domain: ai-development
topic: model-architecture
title: Native speech-to-speech bakes reasoning in; cascading pipelines lose nuance
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - speech-to-speech
  - real-time
  - voice-agents
  - latency
  - multimodal
sources:
  - type: youtube
    title: >-
      From Transcription to Live Music: Gemini's Audio Stack — Thor Schaeff,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Bc6Ojl2XS1w'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemini 3.1 Flash Live runs sound-to-sound with intelligence inside the audio
    model, unlike a cascade that routes audio through text and a separate LLM.
  standard: >-
    Gemini 3.1 Flash Live is a full-duplex, multimodal speech-to-speech model:
    it ingests text, audio, and video over a websocket and returns real-time
    audio plus a text transcript, with the reasoning and 'thinking' baked
    directly into the audio model. The talk contrasts this with a cascading
    pipeline — audio to text, text to an LLM for intelligence, LLM output to TTS
    — which is the conventional way voice agents are built.


    The architectural payoff is twofold. First, latency: a native model removes
    the serial hops of transcribe-then-reason-then-synthesize, which matters
    enormously for natural turn-taking in conversation. Second, fidelity: a
    cascade collapses rich audio into text at the front, discarding emotion,
    prosody, accent, and overlapping-speaker cues that the reasoning step can
    never recover; an end-to-end audio model reasons over the raw signal and can
    carry those nuances into its response.


    The cost is controllability and debuggability — a cascade lets you inspect
    and swap the transcript, the prompt, and the voice independently, while a
    native model is more of a black box and behaviors like 'applying an Irish
    accent to German output' must be corrected through system instructions
    rather than at a pipeline seam. For real-time conversational UX where nuance
    and latency dominate, native speech-to-speech is the stronger default.
stance: >-
  Real-time voice agents should use a native end-to-end audio model with
  reasoning baked in rather than a cascade of speech-to-text, LLM, and
  text-to-speech.
related:
  - INS-260605-20C0
  - INS-260605-68F4
  - INS-260605-ACCD
  - INS-260625-9C3D
  - INS-260605-8AEE
---
Gemini 3.1 Flash Live is a full-duplex, multimodal speech-to-speech model: it ingests text, audio, and video over a websocket and returns real-time audio plus a text transcript, with the reasoning and 'thinking' baked directly into the audio model. The talk contrasts this with a cascading pipeline — audio to text, text to an LLM for intelligence, LLM output to TTS — which is the conventional way voice agents are built.

The architectural payoff is twofold. First, latency: a native model removes the serial hops of transcribe-then-reason-then-synthesize, which matters enormously for natural turn-taking in conversation. Second, fidelity: a cascade collapses rich audio into text at the front, discarding emotion, prosody, accent, and overlapping-speaker cues that the reasoning step can never recover; an end-to-end audio model reasons over the raw signal and can carry those nuances into its response.

The cost is controllability and debuggability — a cascade lets you inspect and swap the transcript, the prompt, and the voice independently, while a native model is more of a black box and behaviors like 'applying an Irish accent to German output' must be corrected through system instructions rather than at a pipeline seam. For real-time conversational UX where nuance and latency dominate, native speech-to-speech is the stronger default.

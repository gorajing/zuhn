---
id: INS-260605-90FB
domain: ai-development
topic: architecture
title: >-
  Human-latency conversation is unreachable when one stage alone exceeds the
  whole budget
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-ai
  - latency
  - tts
  - cascaded-systems
  - conversation-design
sources:
  - type: youtube
    title: 'Voice AI: when is the "Her" moment? — Neil Zeghidour, CEO, Gradium AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=P_RI1kCkRbo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Human turn-taking needs the full STT→LLM→TTS loop under ~200ms, but a fast
    TTS alone is already >200ms, so cascaded systems can't sound human.
  standard: >-
    In human conversation the entire stack of understanding speech, producing an
    answer, and pronouncing it must complete in roughly 200 milliseconds. Yet
    even a best-in-class streaming TTS consumes more than 200ms on its own — and
    that measurement is for pure text-to-text conversation with no tool call and
    no task performed. The implication is structural, not incremental: you
    cannot shave your way to human latency in a cascade where one component
    already blows the whole budget. This reframes the latency problem from
    'optimize each stage' to 'the architecture itself caps how natural the
    interaction can feel,' which is why fundamentally different designs
    (speech-to-speech, full-duplex) matter rather than faster cascades.
stance: >-
  Cascaded voice pipelines cannot feel human because a single TTS stage already
  exceeds the ~200ms budget for the entire understand-answer-speak loop.
related:
  - INS-260501-4646
  - INS-260505-8E0B
  - PRI-260406-2D38
  - INS-260605-C9EB
  - INS-260626-0D4B
  - INS-260605-048B
  - INS-260329-AA2C
---
In human conversation the entire stack of understanding speech, producing an answer, and pronouncing it must complete in roughly 200 milliseconds. Yet even a best-in-class streaming TTS consumes more than 200ms on its own — and that measurement is for pure text-to-text conversation with no tool call and no task performed. The implication is structural, not incremental: you cannot shave your way to human latency in a cascade where one component already blows the whole budget. This reframes the latency problem from 'optimize each stage' to 'the architecture itself caps how natural the interaction can feel,' which is why fundamentally different designs (speech-to-speech, full-duplex) matter rather than faster cascades.

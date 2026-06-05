---
id: INS-260605-9B99
domain: ai-development
topic: llm-costs
title: >-
  TTS, not the LLM, is the cost that kills voice apps — on-device CPU synthesis
  is the scalability unlock
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - voice-ai
  - tts
  - unit-economics
  - on-device
  - llm-costs
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
    Hyperscaler voice modes run at a loss; for consumer voice apps the LLM is
    almost free and TTS is the bill that burns the whole fundraise — so a
    <100M-param CPU TTS removes per-use API cost entirely.
  standard: >-
    An always-on 'Her'-style assistant that you talk to for hours a day cannot
    work on current economics. Hyperscaler voice modes are gigantic multimodal
    models run at a loss as a marketing play. For anyone building a real
    consumer voice app, the cost structure has inverted: the LLM is now almost
    nothing, STT is cheap, diarization is affordable — and TTS is what consumes
    the budget. Zeghidour has watched teams burn their entire fundraise on TTS
    bills before their user base could even grow. Gradium's answer (Phonon) is
    on-device TTS that runs not on a gamer GPU but on a smartphone CPU — under
    100 million parameters, with voice cloning — so apps pay zero API fees and
    can scale usage without scaling cost. On-device also solves privacy, since
    data never leaves the device. The strategic claim is that voice is not a
    commodity; the last mile of reliability, full-duplex naturalness, and
    economics is the hardest part to solve.
stance: >-
  Voice products fail economically because TTS dominates cost while LLM
  inference has become negligible, so moving synthesis on-device to a smartphone
  CPU is what makes voice profitable at scale.
related:
  - INS-260403-2774
  - INS-260410-45C3
  - INS-260405-6B96
  - PRI-260406-B785
  - INS-260323-FEAB
  - INS-260403-501D
---
An always-on 'Her'-style assistant that you talk to for hours a day cannot work on current economics. Hyperscaler voice modes are gigantic multimodal models run at a loss as a marketing play. For anyone building a real consumer voice app, the cost structure has inverted: the LLM is now almost nothing, STT is cheap, diarization is affordable — and TTS is what consumes the budget. Zeghidour has watched teams burn their entire fundraise on TTS bills before their user base could even grow. Gradium's answer (Phonon) is on-device TTS that runs not on a gamer GPU but on a smartphone CPU — under 100 million parameters, with voice cloning — so apps pay zero API fees and can scale usage without scaling cost. On-device also solves privacy, since data never leaves the device. The strategic claim is that voice is not a commodity; the last mile of reliability, full-duplex naturalness, and economics is the hardest part to solve.

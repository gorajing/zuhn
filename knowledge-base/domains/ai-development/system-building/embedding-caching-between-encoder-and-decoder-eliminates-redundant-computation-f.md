---
id: INS-260330-81A7
domain: ai-development
topic: system-building
title: >-
  Embedding caching between encoder and decoder eliminates redundant computation
  for one-to-many translation scenarios
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - caching
  - inference-optimization
  - latency
  - translation
  - esports-streaming
sources:
  - type: pdf
    title: >-
      @u.northwestern.edu Mail - How Roblox Uses AI to Translate 16 Languages in
      100 Milliseconds
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cache the encoder output once, run only the decoder per target language —
    critical for one-to-many translation at scale
  standard: >-
    In a multilingual chat room, a single Korean message needs translation to
    English, German, and French simultaneously. Without embedding caching, the
    encoder processes the same Korean text three times. With it, encoding
    happens once, the intermediate representation is cached, and the decoder
    generates all three translations from that single encoding. At Roblox's
    scale of 5,000+ chats per second, this optimization is significant. This
    pattern applies directly to esports streaming — a Korean player's callout
    needs real-time translation to every viewer's language. The encoder work is
    identical; only the decoder varies per target language.
stance: >-
  When one message needs translation to multiple target languages, caching the
  intermediate embedding representation and running only the decoder per target
  language eliminates redundant encoder computation
related:
  - INS-260330-206C
  - INS-260403-13AF
  - INS-260329-7B1D
  - PRI-260406-8B75
  - INS-260330-B437
evidence:
  - id: INS-260329-7B1D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-B437
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-2C5F
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260402-C030
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260403-EA2C
    type: SUPPORTS
    classified_at: '2026-04-05'
---
In a multilingual chat room, a single Korean message needs translation to English, German, and French simultaneously. Without embedding caching, the encoder processes the same Korean text three times. With it, encoding happens once, the intermediate representation is cached, and the decoder generates all three translations from that single encoding. At Roblox's scale of 5,000+ chats per second, this optimization is significant. This pattern applies directly to esports streaming — a Korean player's callout needs real-time translation to every viewer's language. The encoder work is identical; only the decoder varies per target language.

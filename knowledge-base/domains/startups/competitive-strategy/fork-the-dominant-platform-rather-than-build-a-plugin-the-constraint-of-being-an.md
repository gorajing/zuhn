---
id: INS-260323-0539
domain: startups
topic: competitive-strategy
title: >-
  Fork the dominant platform rather than build a plugin — the constraint of
  being an extension caps your ambition
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cursor
  - vs-code
  - platform-strategy
  - startup-strategy
sources:
  - type: youtube
    title: 'Cursor Team: Future of Programming with AI | Lex Fridman Podcast #447'
    author: Lex Fridman
    url: >-
      https://www.youtube.com/watch?v=oFfVt3S51T4+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAzzE7GOvYz8+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ8Qk_3a3lUw+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds1oTH4Sjvzg+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyoVVSggPjY+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqCbfTN-caFI+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQJtPROVsePk+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoFtjKbXKqbg+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ7aiEwp1x9k+https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKbk9BiPhm7o
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor forked VS Code rather than building an extension because plugin APIs
    limit what you can build — when AI changes how software is built, you need
    full control of the editing surface.
  standard: >-
    The Cursor team's most consequential decision was forking VS Code rather
    than building an extension. Their reasoning: 'these models are going to get
    much better... and it's going to entirely change how you build software.' An
    extension is constrained by the host editor's plugin API — you can only do
    what the API allows. But if AI is going to fundamentally change the act of
    programming, you need to control the entire editing surface to implement
    features the original designers never imagined.


    This is a broadly applicable startup pattern: when a platform shift is
    incremental, build on the existing platform. When it's transformational,
    fork or rebuild. The test is whether the new capability fits within existing
    interaction paradigms or requires new ones. Cursor Tab's jump-to-next-edit
    feature couldn't exist as a VS Code extension. The general principle: if
    your most ambitious feature ideas are blocked by the platform's API, you
    need to own the platform.
related:
  - INS-260322-22D0
  - INS-260327-0B69
  - PRI-260328-FD47
  - INS-260329-8F98
  - INS-260329-693E
  - INS-260325-FDF5
stance: >-
  Cursor forked VS Code rather than building an extension because plugin APIs
  limit what you can build
evidence:
  - id: INS-260325-FDF5
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-8F98
    type: CHALLENGES
    classified_at: '2026-04-02'
---
The Cursor team's most consequential decision was forking VS Code rather than building an extension. Their reasoning: 'these models are going to get much better... and it's going to entirely change how you build software.' An extension is constrained by the host editor's plugin API — you can only do what the API allows. But if AI is going to fundamentally change the act of programming, you need to control the entire editing surface to implement features the original designers never imagined.

This is a broadly applicable startup pattern: when a platform shift is incremental, build on the existing platform. When it's transformational, fork or rebuild. The test is whether the new capability fits within existing interaction paradigms or requires new ones. Cursor Tab's jump-to-next-edit feature couldn't exist as a VS Code extension. The general principle: if your most ambitious feature ideas are blocked by the platform's API, you need to own the platform.

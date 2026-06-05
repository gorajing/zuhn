---
id: INS-260605-90CF
domain: ai-development
topic: architecture
title: Reuse server-side context IDs instead of resending history each turn
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - api-design
  - caching
  - latency
  - multimodal
sources:
  - type: youtube
    title: 'Let''s go Bananas with GenMedia — Guillaume Vernade, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BcWFc3H7Khg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Client-side chat mode re-uploads the entire context every turn; stateful
    interaction APIs return an ID that recovers context server-side and
    auto-caches it.
  standard: >-
    In the demo, feeding a whole book into chat mode meant the full book was
    re-sent to the model on every single call — the dominant source of latency
    and cost. The newer 'interactions API' is stateful: each call returns an
    interaction ID you can reuse, and the server recovers the full context (and
    automatically caches it) without re-uploading. This also makes it cheap to
    fork a conversation — e.g. branch one thread into image generation and
    another into music from a shared lyric-generation step. The lesson for any
    large-context agent: push conversation state to the server and reference it
    by ID rather than replaying the whole transcript each turn. Replaying
    history scales cost linearly with conversation length; referencing cached
    context does not.
stance: >-
  Stateful interaction APIs that return a reusable context ID beat client-side
  chat history for large-context multimodal workflows.
related:
  - INS-260329-8DC5
  - INS-260605-26EC
  - INS-260519-8748
  - INS-260409-B13F
  - INS-260325-175B
---
In the demo, feeding a whole book into chat mode meant the full book was re-sent to the model on every single call — the dominant source of latency and cost. The newer 'interactions API' is stateful: each call returns an interaction ID you can reuse, and the server recovers the full context (and automatically caches it) without re-uploading. This also makes it cheap to fork a conversation — e.g. branch one thread into image generation and another into music from a shared lyric-generation step. The lesson for any large-context agent: push conversation state to the server and reference it by ID rather than replaying the whole transcript each turn. Replaying history scales cost linearly with conversation length; referencing cached context does not.

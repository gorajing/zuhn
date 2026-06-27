---
id: INS-260605-D1F0
domain: ai-development
topic: limitations
title: 'Treat AI failure modes as alien, not human-like'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - alien-intelligence
  - code-review
  - trust
  - failure-modes
  - human-ai-relationship
sources:
  - type: youtube
    title: 'Why Rust is the Ideal Language for Vibe-Coding — Daniel Szoke, Sentry'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ugUeZ8-b-u0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs think by predicting token streams, not as humans do, so their bugs
    appear in code that looks sensible — good names, good comments — while
    hiding subtle errors or unreliable heuristics.
  standard: >-
    Borrowing Yuval Noah Harari's framing from 'Nexus', Szoke prefers 'alien
    intelligence' over 'artificial intelligence': LLMs are the first non-human
    systems to produce human language, but their low-level mechanism —
    predicting tokens in streams — differs fundamentally from human cognition.
    The practical consequence is that their failure modes are unexpected to us.
    AI-generated code often presents with sensible variable names, good
    comments, and clean structure, yet harbors a subtle bug or leans on a
    heuristic where the real value could have been checked directly and more
    reliably. The surface cues humans use to gauge code quality are decoupled
    from correctness in AI output, so reviewers should not let polish stand in
    for trust — and should prefer mechanisms (like a compiler) that check the
    actual thing rather than the appearance of it.
stance: >-
  LLM bugs hide behind human-looking surface cues, so reviewers must distrust
  polished-looking AI code more than they would human code.
related:
  - INS-260321-1F9F
  - INS-260330-00D5
  - INS-260402-8A7A
  - INS-260501-C4AA
  - INS-260605-6F98
  - INS-260403-141E
  - INS-260323-8D12
  - PRI-260323-1CF9
---
Borrowing Yuval Noah Harari's framing from 'Nexus', Szoke prefers 'alien intelligence' over 'artificial intelligence': LLMs are the first non-human systems to produce human language, but their low-level mechanism — predicting tokens in streams — differs fundamentally from human cognition. The practical consequence is that their failure modes are unexpected to us. AI-generated code often presents with sensible variable names, good comments, and clean structure, yet harbors a subtle bug or leans on a heuristic where the real value could have been checked directly and more reliably. The surface cues humans use to gauge code quality are decoupled from correctness in AI output, so reviewers should not let polish stand in for trust — and should prefer mechanisms (like a compiler) that check the actual thing rather than the appearance of it.

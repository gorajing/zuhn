---
id: INS-260625-5E87
domain: ai-development
topic: architecture
title: >-
  Don't let the AI be your architect — keep abstractions and interfaces
  human-owned
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - software-architecture
  - design-decisions
  - ai-pair-programming
  - product-craft
sources:
  - type: youtube
    title: Conductor CEO Charlie Holtz Walks Us Through His AI Coding Setup
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=fQmlML9Lay4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Humans should own the architecture, abstractions, and UI decisions; let the
    AI fill in implementation, not design the structure.
  standard: >-
    Even with Holtz writing almost no code by hand, he insists humans owned the
    core abstractions of Conductor — the 'workspace' concept (a wrapper around a
    git work tree), the three-pane layout, and details as small as how the 'open
    in' button behaves. His claim is that letting the AI make architecture and
    UI choices produces software that 'just doesn't feel crafted,' and craft is
    a competitive moat. The discipline he'd push further: build the core around
    human-written APIs and contracts the AI contributes to minimally, then carve
    out large free-reign regions where the AI can experiment without touching
    core infrastructure. The boundary between human-owned core and AI-free-reign
    periphery is the key architectural decision, and getting it explicit (rather
    than murky) is itself ongoing human work.
stance: >-
  Architectural and interface decisions should stay human-owned even in heavily
  AI-assisted development.
related:
  - PRI-260406-0FF1
  - INS-260501-8A1F
  - INS-260605-E7AD
  - INS-260403-A2E9
  - INS-260627-5482
  - INS-260326-163A
---
Even with Holtz writing almost no code by hand, he insists humans owned the core abstractions of Conductor — the 'workspace' concept (a wrapper around a git work tree), the three-pane layout, and details as small as how the 'open in' button behaves. His claim is that letting the AI make architecture and UI choices produces software that 'just doesn't feel crafted,' and craft is a competitive moat. The discipline he'd push further: build the core around human-written APIs and contracts the AI contributes to minimally, then carve out large free-reign regions where the AI can experiment without touching core infrastructure. The boundary between human-owned core and AI-free-reign periphery is the key architectural decision, and getting it explicit (rather than murky) is itself ongoing human work.

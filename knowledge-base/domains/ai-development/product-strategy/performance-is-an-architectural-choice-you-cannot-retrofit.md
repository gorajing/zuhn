---
id: INS-260327-5CB0
domain: ai-development
topic: product-strategy
title: Performance is an architectural choice you cannot retrofit
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - performance
  - architecture
  - developer-tools
  - technical-decisions
sources:
  - type: youtube
    title: 'Why IDEs Won''t Die in the Age of AI Coding: Zed Founder Nathan Sobo'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=nQP4Wt_6ea8'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Nathan Sobo spent years building Atom on Electron, hit a performance ceiling
    he couldn't overcome, and rebuilt Zed in Rust from scratch because
    performance is an architectural choice, not a feature you bolt on later.
  standard: >-
    After building Atom at GitHub, which became the foundation for Electron and
    ultimately VS Code, Sobo hit a hard ceiling on performance. Opening Chrome's
    dev tools profiler showed optimizations he could never reach because the web
    browser abstraction layer imposed fundamental latency constraints. This led
    to the conviction that performance isn't a feature you add; it's an
    architectural choice that determines your ceiling.


    Zed was built in Rust from the ground up to achieve zero-perceptible-lag
    text editing: pixels responding to keystrokes on the next monitor sync. This
    performance also made Zed naturally suited for real-time collaboration (the
    original vision) and later for AI agent integration, because the same
    low-latency infrastructure that enables human pair programming enables fluid
    human-AI code collaboration.
stance: >-
  Software performance is fundamentally an architectural decision made at the
  foundation level, not a feature that can be added later, which is why Zed was
  rewritten from web technology (Atom/Electron) to native Rust despite the
  enormous cost.
related:
  - INS-260320-93E1
  - INS-260323-AB5F
  - INS-260327-889F
  - INS-260327-94CC
  - INS-260329-9115
  - INS-260410-9CF8
  - INS-260327-7E6F
  - INS-260323-FEDF
  - INS-260405-9DF9
  - INS-260410-3DAD
evidence:
  - id: INS-260323-AB5F
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-889F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-94CC
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-7E6F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-FEDF
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-10E0
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260402-F4E5
    type: SUPPORTS
    classified_at: '2026-04-02'
---
After building Atom at GitHub, which became the foundation for Electron and ultimately VS Code, Sobo hit a hard ceiling on performance. Opening Chrome's dev tools profiler showed optimizations he could never reach because the web browser abstraction layer imposed fundamental latency constraints. This led to the conviction that performance isn't a feature you add; it's an architectural choice that determines your ceiling.

Zed was built in Rust from the ground up to achieve zero-perceptible-lag text editing: pixels responding to keystrokes on the next monitor sync. This performance also made Zed naturally suited for real-time collaboration (the original vision) and later for AI agent integration, because the same low-latency infrastructure that enables human pair programming enables fluid human-AI code collaboration.

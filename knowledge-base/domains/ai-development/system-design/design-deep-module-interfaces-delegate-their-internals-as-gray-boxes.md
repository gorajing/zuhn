---
id: INS-260626-0B2E
domain: ai-development
topic: system-design
title: 'Design deep-module interfaces, delegate their internals as gray boxes'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - deep-modules
  - ousterhout
  - test-boundaries
  - architecture
  - codebase-comprehension
sources:
  - type: youtube
    title: 'Full Walkthrough: Workflow for AI Coding — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-QFHIoCo-Ko'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Per Ousterhout, prefer deep modules (simple interface over rich internals)
    to many shallow modules: deep modules give one clean test boundary the AI
    can exercise end-to-end, and you stay oriented by designing the interfaces
    while treating module internals as delegatable gray boxes.
  standard: >-
    Drawing on John Ousterhout's A Philosophy of Software Design, Pocock
    contrasts shallow modules (many tiny files exporting many things, with
    tangled cross-dependencies) against deep modules (a small simple interface
    hiding lots of functionality). Shallow architectures are hard for AI to
    navigate — it must manually trace the dependency graph — and hard to test,
    because there's no natural place to draw a test boundary, pushing the AI
    toward bad per-function tests that mock everything and miss integration
    bugs. Deep modules let you wrap one big test boundary around rich
    functionality, catching real behavior with a simple caller-facing contract.
    Left unwatched, AI tends to generate the shallow, hard-to-test shape, so
    deliberate direction is required.


    The second payoff is a comprehension trick for the human. As you delegate
    more, you lose your sense of the codebase and effectively cede its shape to
    AI. By designing module interfaces yourself but delegating their
    implementation, modules become 'gray boxes' — you know what they do and how
    they behave under conditions without reviewing every internal line. This
    preserves a working mental map of the system (its shapes and contracts)
    while still moving fast.


    Pocock operationalizes this with an 'improve codebase architecture' skill
    that scans for clusters of coupled shallow modules that could be deepened
    and tested as a unit (e.g., wrapping a browser-based video editor's full
    front-to-back flow in one testable module), reporting candidates with
    coupling arguments and test-gap analysis. He calls this his single
    highest-leverage recommendation: better module depth raises test quality,
    which raises feedback-loop quality, which raises the AI's ceiling.
stance: >-
  Structuring a codebase as deep modules (small interface, large internal
  functionality) makes it both AI-legible and testable, and lets you retain
  understanding by owning interfaces while delegating implementations.
related:
  - INS-260626-7AB8
  - INS-260325-05EC
  - INS-260327-C99D
  - PRI-260403-ABDE
  - PRI-260405-A11F
---
Drawing on John Ousterhout's A Philosophy of Software Design, Pocock contrasts shallow modules (many tiny files exporting many things, with tangled cross-dependencies) against deep modules (a small simple interface hiding lots of functionality). Shallow architectures are hard for AI to navigate — it must manually trace the dependency graph — and hard to test, because there's no natural place to draw a test boundary, pushing the AI toward bad per-function tests that mock everything and miss integration bugs. Deep modules let you wrap one big test boundary around rich functionality, catching real behavior with a simple caller-facing contract. Left unwatched, AI tends to generate the shallow, hard-to-test shape, so deliberate direction is required.

The second payoff is a comprehension trick for the human. As you delegate more, you lose your sense of the codebase and effectively cede its shape to AI. By designing module interfaces yourself but delegating their implementation, modules become 'gray boxes' — you know what they do and how they behave under conditions without reviewing every internal line. This preserves a working mental map of the system (its shapes and contracts) while still moving fast.

Pocock operationalizes this with an 'improve codebase architecture' skill that scans for clusters of coupled shallow modules that could be deepened and tested as a unit (e.g., wrapping a browser-based video editor's full front-to-back flow in one testable module), reporting candidates with coupling arguments and test-gap analysis. He calls this his single highest-leverage recommendation: better module depth raises test quality, which raises feedback-loop quality, which raises the AI's ceiling.

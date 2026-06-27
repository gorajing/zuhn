---
id: INS-260626-7AB8
domain: ai-development
topic: architecture
title: >-
  Deep modules let you design the interface and delegate the implementation to
  AI
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - deep-modules
  - interfaces
  - testability
  - delegation
  - cognitive-load
  - ousterhout
sources:
  - type: youtube
    title: '"Software Fundamentals Matter More Than Ever" — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v4F1gFy-hqg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deep modules — lots of functionality behind a simple interface — are easy to
    test and let you own the interface while treating the implementation as a
    gray box the AI fills in.
  standard: >-
    When the AI builds the right thing but it doesn't work, the fix is feedback
    loops — static types, browser access, automated tests — but the LLM uses
    them poorly, outrunning its headlights by doing too much before checking
    (the rate of feedback is your speed limit). TDD forces small steps, yet
    testing is only easy when the codebase is good. Following Ousterhout, Pocock
    contrasts shallow modules (many tiny blobs, complex interfaces) that AI
    loves to create and then cannot navigate, against deep modules: few large
    modules hiding lots of functionality behind simple interfaces. Deep modules
    are testable because you verify at the simple boundary, and they reduce
    cognitive load because you can treat each as a gray box — design and own the
    interface, but delegate and not closely review the implementation (except
    for critical concerns like finance). This operationalizes Kent Beck's
    'invest in the design of the system every day': specs-to-code divests from
    design, whereas deep-module architecture keeps the human as the strategist
    owning interfaces while AI acts as the tactical programmer filling in the
    blobs.
stance: >-
  Refactoring a codebase into deep modules with simple interfaces makes it
  testable and lets you safely delegate the hidden implementation to AI.
related:
  - INS-260329-ED44
  - INS-260626-0B2E
  - INS-260524-63C9
  - INS-260321-AD95
  - INS-260409-A0B4
---
When the AI builds the right thing but it doesn't work, the fix is feedback loops — static types, browser access, automated tests — but the LLM uses them poorly, outrunning its headlights by doing too much before checking (the rate of feedback is your speed limit). TDD forces small steps, yet testing is only easy when the codebase is good. Following Ousterhout, Pocock contrasts shallow modules (many tiny blobs, complex interfaces) that AI loves to create and then cannot navigate, against deep modules: few large modules hiding lots of functionality behind simple interfaces. Deep modules are testable because you verify at the simple boundary, and they reduce cognitive load because you can treat each as a gray box — design and own the interface, but delegate and not closely review the implementation (except for critical concerns like finance). This operationalizes Kent Beck's 'invest in the design of the system every day': specs-to-code divests from design, whereas deep-module architecture keeps the human as the strategist owning interfaces while AI acts as the tactical programmer filling in the blobs.

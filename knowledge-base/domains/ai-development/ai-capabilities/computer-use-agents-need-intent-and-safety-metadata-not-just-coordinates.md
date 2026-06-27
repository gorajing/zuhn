---
id: INS-260626-1C28
domain: ai-development
topic: ai-capabilities
title: 'Computer-use agents need intent and safety metadata, not just coordinates'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - computer-use
  - prompt-injection
  - safety-policy
  - gemini
sources:
  - type: paste
    title: Gemini API Computer Use public preview
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemini 3.5 Flash Computer Use adds multi-environment GUI actions with intent
    fields, configurable safety policies, and screenshot prompt-injection
    detection.
  standard: >-
    Google's Computer Use release is a signal that GUI automation is moving
    beyond raw screenshot-to-coordinate loops. The new primitive includes
    browser, mobile, and desktop environments, per-action intent metadata that
    explains why a step is being taken, configurable safety policies, and
    optional screenshot scanning for hidden prompt-injection instructions. Those
    additions make computer-use traces easier to inspect and safer to delegate.


    The constraint remains important: the application supplies the execution
    environment. For AgentRun, computer-use evidence should therefore record
    both the model action and the executor boundary: what screen was observed,
    what intent was emitted, which safety checks ran, and which client actually
    clicked or typed. That is the difference between a demo artifact and
    auditable proof.
stance: >-
  GUI-control agents become more usable when each action carries intent and
  policy checks, but execution safety still belongs in the client environment.
related:
  - INS-260501-C59A
  - INS-260627-22EC
  - INS-260329-DFD1
  - INS-260626-FFE2
  - INS-260625-2088
---
Google's Computer Use release is a signal that GUI automation is moving beyond raw screenshot-to-coordinate loops. The new primitive includes browser, mobile, and desktop environments, per-action intent metadata that explains why a step is being taken, configurable safety policies, and optional screenshot scanning for hidden prompt-injection instructions. Those additions make computer-use traces easier to inspect and safer to delegate.

The constraint remains important: the application supplies the execution environment. For AgentRun, computer-use evidence should therefore record both the model action and the executor boundary: what screen was observed, what intent was emitted, which safety checks ran, and which client actually clicked or typed. That is the difference between a demo artifact and auditable proof.

---
id: INS-260605-175E
domain: ai-development
topic: product-strategy
title: Chat-only 'starfish' UI offloads all discovery work onto the user
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agentic-ux
  - chat-interfaces
  - discoverability
  - ui-design
sources:
  - type: youtube
    title: 'Introducing WebMCP: Agents in the Browser — RL Nabors'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=LMbeDEQO6QM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The 'starfish' chatbox landing page sits there and makes the user do all the
    work, demanding they already hold the system's capabilities in their head —
    rich visual interfaces lower that discovery burden.
  standard: >-
    Nabors frames chat as 'the lowest common denominator of the user experience'
    — what the CLI was to software. It works if you already know the system (you
    land on Linear knowing it's a ticketing tool), but otherwise gives no visual
    cues or guidance, like doing your taxes through a text adventure ('check
    mailbox. is there mail?'). She calls the bare chatbox landing the 'starfish'
    design because it just sits there and offloads all the discovery onto the
    customer.


    The counter-move is inline rich-media experiences — MCP apps that render
    actual interactive UI (a comic reader with forward/back navigation and a
    text-mode toggle) inside the agent. The principle generalizes beyond comics:
    when agents can surface affordances visually, don't make users wall-of-text
    their way to capability discovery. Chat as the sole interface is likely a
    transitional developer phase, not the endpoint of agentic UX.
stance: >-
  A bare chatbox landing page is a poor default because it forces users to
  already know what the system can do.
related:
  - INS-260325-175B
  - INS-260403-699A
  - INS-260402-8D38
  - INS-260409-5CC6
  - INS-260605-6F34
---
Nabors frames chat as 'the lowest common denominator of the user experience' — what the CLI was to software. It works if you already know the system (you land on Linear knowing it's a ticketing tool), but otherwise gives no visual cues or guidance, like doing your taxes through a text adventure ('check mailbox. is there mail?'). She calls the bare chatbox landing the 'starfish' design because it just sits there and offloads all the discovery onto the customer.

The counter-move is inline rich-media experiences — MCP apps that render actual interactive UI (a comic reader with forward/back navigation and a text-mode toggle) inside the agent. The principle generalizes beyond comics: when agents can surface affordances visually, don't make users wall-of-text their way to capability discovery. Chat as the sole interface is likely a transitional developer phase, not the endpoint of agentic UX.

---
id: INS-260605-7B06
domain: ai-development
topic: architecture
title: >-
  MCP apps are the delivery substrate for generative UI, validated by Anthropic
  using them for first-party UI
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - mcp
  - generative-ui
  - anthropic
  - protocol
  - platform-strategy
sources:
  - type: youtube
    title: >-
      Beyond Components: Designing Generative UI for MCP Apps — Ruben Casas,
      Postman
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hCMrEfPG2Yg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build generative UI on MCP apps rather than a bespoke renderer — they ship
    the double-iframe sandbox, authentication, tool calling, and UI-agent
    message passing you'd otherwise rebuild.
  standard: >-
    Once you accept that generative UI needs containment, MCP apps become the
    natural delivery layer: they provide a double-iframe sandbox by default,
    plus authentication, tool calling, and message passing between the UI and
    the agent. They're already the default for third-party UI delivery, and
    crucially can serve first-party UI too.


    Casas reads Anthropic's choice to deliver Claude's visualizer feature via
    MCP apps — rather than building a proprietary rendering architecture — as a
    strong strategic signal. The argument by revealed preference: if the company
    building the model uses the open protocol for its own first-party UI, a
    third-party builder has little reason to roll their own. For anyone
    designing agent-rendered interfaces, the default should be to inherit MCP's
    security and message-passing primitives instead of reinventing them,
    especially when UI is generated on the fly.
stance: >-
  MCP apps are the best delivery mechanism for generative UI because they bundle
  sandboxing, auth, and message-passing out of the box — evidenced by Anthropic
  choosing them even for first-party UI.
related:
  - INS-260605-1821
  - INS-260625-2E86
  - INS-260605-74CC
  - INS-260625-0492
  - INS-260605-1BBF
---
Once you accept that generative UI needs containment, MCP apps become the natural delivery layer: they provide a double-iframe sandbox by default, plus authentication, tool calling, and message passing between the UI and the agent. They're already the default for third-party UI delivery, and crucially can serve first-party UI too.

Casas reads Anthropic's choice to deliver Claude's visualizer feature via MCP apps — rather than building a proprietary rendering architecture — as a strong strategic signal. The argument by revealed preference: if the company building the model uses the open protocol for its own first-party UI, a third-party builder has little reason to roll their own. For anyone designing agent-rendered interfaces, the default should be to inherit MCP's security and message-passing primitives instead of reinventing them, especially when UI is generated on the fly.

---
id: INS-260605-E023
domain: ai-development
topic: architecture
title: 'Treat UI control as a spectrum: notification, tool call, then prompt'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - agentic-ui
  - control
  - interaction-design
  - spectrum
sources:
  - type: youtube
    title: 'MCP UI: Extending the frontier — Liad Yosef and Ido Salomon, MCP Apps'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=o-zkvb0iFDQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP Apps put interactions on a spectrum — notification (UI keeps most
    control), tool call (UI directs the host), prompt (UI cedes all control) —
    making the control tradeoff explicit.
  standard: >-
    Rather than a single message type, MCP Apps define a spectrum representing
    'how much control the UI wants for itself and how much control it gives to
    the host.' A notification is the highest UI control — incrementing a cart
    count goes back to Shopify and merely tells the host something happened. A
    tool call is the UI instructing the host to call a specific tool. A prompt
    is the UI 'releasing all control,' telling the host 'just run this prompt
    and see what happens.'


    The design pattern generalizes: when bridging a deterministic component (a
    UI) with a non-deterministic orchestrator (a model), expose a graded set of
    handoff primitives instead of forcing every interaction to the same level of
    delegation. Some actions are purely local and shouldn't burn model
    attention; others genuinely want the model's judgment. Making the control
    level a first-class, explicit choice lets each interaction sit at the right
    point on the autonomy curve instead of over- or under-delegating by default.
stance: >-
  Agentic UI interactions should be modeled on an explicit control spectrum
  where the UI decides how much authority to keep versus cede to the host.
related:
  - INS-260605-4860
  - INS-260423-31A1
  - INS-260321-E2FC
  - INS-260605-3553
  - INS-260403-A1FA
---
Rather than a single message type, MCP Apps define a spectrum representing 'how much control the UI wants for itself and how much control it gives to the host.' A notification is the highest UI control — incrementing a cart count goes back to Shopify and merely tells the host something happened. A tool call is the UI instructing the host to call a specific tool. A prompt is the UI 'releasing all control,' telling the host 'just run this prompt and see what happens.'

The design pattern generalizes: when bridging a deterministic component (a UI) with a non-deterministic orchestrator (a model), expose a graded set of handoff primitives instead of forcing every interaction to the same level of delegation. Some actions are purely local and shouldn't burn model attention; others genuinely want the model's judgment. Making the control level a first-class, explicit choice lets each interaction sit at the right point on the autonomy curve instead of over- or under-delegating by default.

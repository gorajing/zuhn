---
id: INS-260625-4DE2
domain: ai-development
topic: product-strategy
title: Render interactive UI inside the chat to keep users in one context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - chat-ui
  - ux
  - agent-interface
  - context-switching
sources:
  - type: youtube
    title: >-
      Building Interactive UIs in VS Code with MCP Apps — Marlene Mhangami &
      Liam Hampton, GitHub
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_xIwFcnHqp4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Embed interactive UI in the chat so users click instead of re-typing and
    never have to leave for a browser.
  standard: >-
    Text-only tool outputs force two costly patterns: the user navigates away
    (e.g., a 'can I buy this online?' answer returns links you then chase into a
    browser) or the user iterates by re-typing ('is this good? where is the time
    spent?') in a slow conversational loop. MCP apps collapse both by returning
    a live component rendered in-chat — a flame graph you read directly, a
    checkout you complete inline, a chart you click to drill into.


    The strategic claim is that the highest-friction part of agent UX is not the
    model's answer but the interaction surface around it. Whenever the next user
    action is naturally a click, a drag, or a form, expressing it as typed
    natural language is a regression. Designing the tool to return UI keeps the
    user inside one context, which compounds for commerce (Shopify is building
    full in-chat checkout) and data exploration, where leaving the chat to
    inspect a dataset breaks the flow entirely.
stance: >-
  Returning live interactive components in chat beats returning text and links
  because it eliminates the context switches and back-and-forth typing that
  drain agent UX.
related:
  - INS-260605-90CF
  - INS-260327-E75F
  - INS-260625-ED79
  - INS-260603-C8AF
  - INS-260325-175B
---
Text-only tool outputs force two costly patterns: the user navigates away (e.g., a 'can I buy this online?' answer returns links you then chase into a browser) or the user iterates by re-typing ('is this good? where is the time spent?') in a slow conversational loop. MCP apps collapse both by returning a live component rendered in-chat — a flame graph you read directly, a checkout you complete inline, a chart you click to drill into.

The strategic claim is that the highest-friction part of agent UX is not the model's answer but the interaction surface around it. Whenever the next user action is naturally a click, a drag, or a form, expressing it as typed natural language is a regression. Designing the tool to return UI keeps the user inside one context, which compounds for commerce (Shopify is building full in-chat checkout) and data exploration, where leaving the chat to inspect a dataset breaks the flow entirely.

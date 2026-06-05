---
id: INS-260605-4860
domain: ai-development
topic: architecture
title: >-
  Route UI interactions through the host, not the backend, so the model keeps
  context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - agentic-ui
  - context-management
  - message-passing
  - architecture
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
    MCP Apps standardize that UI widgets message the host (not the server
    backend directly), keeping every user action in the model's context.
  standard: >-
    The presenters frame the central architectural choice with a concrete
    failure case: if a Spotify widget favorites a song by talking straight to
    Spotify's backend, then when the user later asks Claude 'which song did I
    favorite?' the model has no idea — the action happened outside its context.
    MCP Apps fixes this by standardizing that every UI chunk sends a message
    back to the host, and the host decides what to do (e.g. issue the
    corresponding tool call). Control stays with the host and everything the
    user does stays in context.


    The general principle outlives the specific protocol: in agentic systems,
    the legible, model-readable channel must be the source of truth for state
    changes. Side-channels that mutate state without the model observing them
    create silent context gaps that degrade every downstream reasoning step.
    When designing any UI-to-agent integration, the question to ask is 'will the
    model see this action happen?' — if not, the architecture is wrong.
stance: >-
  Agentic UI must send every interaction back to the host rather than directly
  to the originating backend, or the model loses the context it needs to reason
  over later.
related:
  - INS-260403-5BD6
  - INS-260329-8F98
  - INS-260410-B3C4
  - INS-260605-E023
  - INS-260605-A4F1
  - INS-260605-743D
---
The presenters frame the central architectural choice with a concrete failure case: if a Spotify widget favorites a song by talking straight to Spotify's backend, then when the user later asks Claude 'which song did I favorite?' the model has no idea — the action happened outside its context. MCP Apps fixes this by standardizing that every UI chunk sends a message back to the host, and the host decides what to do (e.g. issue the corresponding tool call). Control stays with the host and everything the user does stays in context.

The general principle outlives the specific protocol: in agentic systems, the legible, model-readable channel must be the source of truth for state changes. Side-channels that mutate state without the model observing them create silent context gaps that degrade every downstream reasoning step. When designing any UI-to-agent integration, the question to ask is 'will the model see this action happen?' — if not, the architecture is wrong.

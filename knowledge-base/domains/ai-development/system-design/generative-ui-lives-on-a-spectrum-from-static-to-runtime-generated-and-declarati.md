---
id: INS-260605-D129
domain: ai-development
topic: system-design
title: >-
  Generative UI lives on a spectrum from static to runtime-generated, and
  declarative is today's sweet spot
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - generative-ui
  - mcp
  - design-systems
  - architecture
  - llm-frontend
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
    Choose declarative UI (LLM generates a descriptor, not the component) to
    keep your design system, predictability, speed, and lower token cost while
    gaining personalization.
  standard: >-
    Casas frames three points on a spectrum. Static components: the agent is
    just an orchestrator passing props/data to developer-built components (the
    last 20 years of UI; AG-UI, Goose Auto Visualizer). Declarative UI: the
    agent emits a JSON/YAML/Python descriptor that a rendering engine translates
    into predefined components (Vercel's JSON Render, Netflix-style
    personalization). Generative components: the model writes HTML/CSS/JS on
    demand at runtime.


    His claim is that declarative UI is the current optimum because the LLM
    generates only the descriptor, not the components — so you retain your
    design system, get predictable output, render faster, and burn far fewer
    tokens than full generation. The lesson for builders: don't jump straight to
    letting the model emit raw markup. Treat the descriptor layer as a contract
    that preserves consistency while still letting the agent personalize the
    layout per user and per context.
stance: >-
  Declarative UI — where the LLM emits a JSON/YAML descriptor mapped to
  predefined components — is the best current balance of flexibility and
  consistency, not full runtime generation.
related:
  - INS-260329-19EA
  - INS-260514-315F
  - INS-260329-CEC5
  - INS-260514-4436
  - INS-260403-141E
  - INS-260323-A5EC
---
Casas frames three points on a spectrum. Static components: the agent is just an orchestrator passing props/data to developer-built components (the last 20 years of UI; AG-UI, Goose Auto Visualizer). Declarative UI: the agent emits a JSON/YAML/Python descriptor that a rendering engine translates into predefined components (Vercel's JSON Render, Netflix-style personalization). Generative components: the model writes HTML/CSS/JS on demand at runtime.

His claim is that declarative UI is the current optimum because the LLM generates only the descriptor, not the components — so you retain your design system, get predictable output, render faster, and burn far fewer tokens than full generation. The lesson for builders: don't jump straight to letting the model emit raw markup. Treat the descriptor layer as a contract that preserves consistency while still letting the agent personalize the layout per user and per context.

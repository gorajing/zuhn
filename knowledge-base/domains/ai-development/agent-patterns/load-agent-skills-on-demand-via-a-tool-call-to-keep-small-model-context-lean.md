---
id: INS-260605-2032
domain: ai-development
topic: agent-patterns
title: Load agent skills on demand via a tool call to keep small-model context lean
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-skills
  - tool-calling
  - context-management
  - on-device
  - skill-harness
sources:
  - type: youtube
    title: >-
      From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents — Cormac
      Brick, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-TiET_K-E_g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Google's on-device skill harness exposes only skill descriptions in the
    system prompt and uses a load-skill tool call to selectively pull in a
    skill's functions only when the model decides to use it.
  standard: >-
    The skill harness built on Gemma 4 keeps the model aware of what skills
    exist without forcing every function and detail into context. The system
    prompt carries skill descriptions; when the model recognizes a need ('show
    the location of the Google office'), it fires a load-skill tool call to pull
    in the map skill's full definition, runs it, and can then call a show-JS
    tool to render a JavaScript UI inside the app.


    This lazy-loading discipline matters more on-device than in the cloud
    because tiny models have tight context budgets and slow prefill on legacy
    hardware. Front-loading every skill's full schema would waste context and
    tokens; surfacing descriptions and deferring detail until selection keeps
    the working context small enough for a small model to reason over reliably.
    The default of ~8 enabled skills for a 4B model, with reliable selection
    across a multi-turn conversation, reflects that budget discipline.
stance: >-
  On-device agents should put only skill descriptions in the prompt and load
  full skill definitions on demand through a dedicated load-skill tool call.
related:
  - INS-260320-F8FD
  - INS-260514-283E
  - INS-260605-117F
  - INS-260605-C86D
  - INS-260605-5B0A
  - INS-260605-1FD9
---
The skill harness built on Gemma 4 keeps the model aware of what skills exist without forcing every function and detail into context. The system prompt carries skill descriptions; when the model recognizes a need ('show the location of the Google office'), it fires a load-skill tool call to pull in the map skill's full definition, runs it, and can then call a show-JS tool to render a JavaScript UI inside the app.

This lazy-loading discipline matters more on-device than in the cloud because tiny models have tight context budgets and slow prefill on legacy hardware. Front-loading every skill's full schema would waste context and tokens; surfacing descriptions and deferring detail until selection keeps the working context small enough for a small model to reason over reliably. The default of ~8 enabled skills for a 4B model, with reliable selection across a multi-turn conversation, reflects that budget discipline.

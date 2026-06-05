---
id: INS-260605-3AE6
domain: ai-development
topic: foundation-models
title: Tooling built around model limitations is a depreciating asset
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-capabilities
  - strategy
  - build-vs-wait
  - vector-databases
  - agent-frameworks
sources:
  - type: youtube
    title: >-
      Prompt to Pipeline: Building with Google's Gen Media Stack — Paige &
      Guillaume, Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ns9f1fjLD7Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When everyone sprints to build the same workaround for a model limitation,
    that's a signal the limitation is temporary and the workaround is a
    depreciating asset.
  standard: >-
    Paige's recurring pattern: each time the ecosystem rushed to build tooling
    around a model constraint, the constraint disappeared and the tooling lost
    value. Vector databases were built to work around 8K-16K token context
    windows — then windows expanded. Fine-tunes (MedLM, MedPaLM,
    language-specific tunes) were built to add capabilities — then the base
    model absorbed that data and out-of-the-box Gemini with retrieval or a
    custom prompt matched them. Agent frameworks and MCP servers are following
    the same arc ('mostly people have moved away from MCP servers and are
    adopting skills, which are just fancy markdown files').


    The heuristic she offers: 'if you see everybody sprinting to do the same
    thing, that's a great indication that it's the wrong thing' — or at least a
    thing the model will eventually do natively. The defensible counterpoint,
    raised by an audience member, is that frontier labs only cater to broad use
    cases, leaving room for opinionated, vertical-specific tooling and direct
    customer problem-solving. The synthesis: build durable value in domain
    specificity and workflow opinion, not in scaffolding that compensates for
    the current model's temporary weaknesses.
stance: >-
  Infrastructure built to work around a model's current constraints will be
  absorbed into the model and become wasted effort.
related:
  - INS-260330-EE25
  - INS-260409-526E
  - INS-260410-89D0
  - INS-260410-B0D6
  - INS-260514-C4CF
  - PRI-260328-A82C
  - PRI-260403-5FC4
---
Paige's recurring pattern: each time the ecosystem rushed to build tooling around a model constraint, the constraint disappeared and the tooling lost value. Vector databases were built to work around 8K-16K token context windows — then windows expanded. Fine-tunes (MedLM, MedPaLM, language-specific tunes) were built to add capabilities — then the base model absorbed that data and out-of-the-box Gemini with retrieval or a custom prompt matched them. Agent frameworks and MCP servers are following the same arc ('mostly people have moved away from MCP servers and are adopting skills, which are just fancy markdown files').

The heuristic she offers: 'if you see everybody sprinting to do the same thing, that's a great indication that it's the wrong thing' — or at least a thing the model will eventually do natively. The defensible counterpoint, raised by an audience member, is that frontier labs only cater to broad use cases, leaving room for opinionated, vertical-specific tooling and direct customer problem-solving. The synthesis: build durable value in domain specificity and workflow opinion, not in scaffolding that compensates for the current model's temporary weaknesses.

---
id: INS-260605-59AE
domain: ai-development
topic: architecture
title: >-
  Encode agent orchestration in prompts and skills, not hardcoded state
  machines, so the system improves with every model release
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - bitter-lesson
  - prompts
  - skills
  - architecture
  - state-machine
sources:
  - type: youtube
    title: 'The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep deterministic code thin (bookkeeping only) and express decomposition,
    failure-handling, and worker behavior in prompts and skills that ride the
    model's improvement curve.
  standard: >-
    Every team building multi-agent systems fears the next model release making
    their architecture obsolete—an instance of the bitter lesson. Factory's
    response was to design Missions to get better with each model improvement.
    Almost all orchestration logic lives in prompts and skills rather than a
    hardcoded state machine: how the system decomposes features and handles
    failures is ~700 lines of text, where four sentences can dramatically alter
    execution strategy. Worker behavior is driven by skills the orchestrator
    defines per mission, yielding customized behavior. The only deterministic
    logic is thin and focused on bookkeeping—running validation, blocking
    progress when handoff issues are unaddressed. 'Missions ensure the
    discipline, and the models provide the intelligence,' using primitives
    models already know like AGENTS.md and skills. The design lesson: let
    structure handle what must be reliable, and let prompts—not code—handle what
    models are getting better at, so improvements compound rather than break
    you.
stance: >-
  Multi-agent systems should put orchestration logic in editable prompts and
  skills so each model improvement upgrades the system instead of obsoleting it.
related:
  - INS-260625-36DF
  - INS-260320-A745
  - INS-260625-76F5
  - INS-260329-500E
  - INS-260514-AC43
---
Every team building multi-agent systems fears the next model release making their architecture obsolete—an instance of the bitter lesson. Factory's response was to design Missions to get better with each model improvement. Almost all orchestration logic lives in prompts and skills rather than a hardcoded state machine: how the system decomposes features and handles failures is ~700 lines of text, where four sentences can dramatically alter execution strategy. Worker behavior is driven by skills the orchestrator defines per mission, yielding customized behavior. The only deterministic logic is thin and focused on bookkeeping—running validation, blocking progress when handoff issues are unaddressed. 'Missions ensure the discipline, and the models provide the intelligence,' using primitives models already know like AGENTS.md and skills. The design lesson: let structure handle what must be reliable, and let prompts—not code—handle what models are getting better at, so improvements compound rather than break you.

---
id: INS-260409-96B0
domain: ai-development
topic: system-building
title: >-
  LLMs give you disconnected lego pieces but no glue for assembling working
  software
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-coding
  - orchestration
  - agents
  - deployment
  - glue-code
sources:
  - type: blog
    title: Home-Cooked Software and Barefoot Developers
    url: 'https://maggieappleton.com/home-cooked-software'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs like V0 and TLDraw Make Real can generate UI elements, state
    management, API calls, and basic logic on demand, but they don't tell you
    how to deploy the result, persist data, set up auth, or assemble the pieces
    into a working application — the 'glue' layer is still
    professional-developer territory.
  standard: >-
    Appleton's 'language model legos need glue' framing: LLMs today give you a
    bunch of disconnected capabilities but no assembly instructions. You can
    generate a pretty interface, you can make API calls, you can manage state,
    you can write basic logic — but you still have no idea how to deploy that to
    a particular web domain or to your iPhone, persist data by setting up a
    database (you may not know what a database is), add multiplayer
    collaboration, or handle user permissions. A barefoot developer with only V0
    and TLDraw cannot ship a working app. The missing layer is orchestration
    agents designed to act as central coordinators for home-cooked software
    projects, guiding barefoot developers through writing technical specs and
    calling default tools (deployment pipelines, database managers, auth APIs).
    This is the specific gap between 'LLM can generate code' and 'non-developers
    can ship software.' Any team building for the barefoot developer category
    should be working on glue-layer orchestration, not more generation.
stance: >-
  Current LLM coding tools generate individual components (UI, state, API calls,
  basic logic) but cannot orchestrate them into a working deployable application
  — the orchestration layer is the next frontier.
related:
  - INS-260321-C5AA
  - INS-260327-73BE
  - INS-260404-21E6
  - INS-260330-6B7F
  - INS-260330-C2C4
  - INS-260409-3EB3
  - INS-260403-643A
  - INS-260410-1ED3
  - INS-260327-4CB3
---
Appleton's 'language model legos need glue' framing: LLMs today give you a bunch of disconnected capabilities but no assembly instructions. You can generate a pretty interface, you can make API calls, you can manage state, you can write basic logic — but you still have no idea how to deploy that to a particular web domain or to your iPhone, persist data by setting up a database (you may not know what a database is), add multiplayer collaboration, or handle user permissions. A barefoot developer with only V0 and TLDraw cannot ship a working app. The missing layer is orchestration agents designed to act as central coordinators for home-cooked software projects, guiding barefoot developers through writing technical specs and calling default tools (deployment pipelines, database managers, auth APIs). This is the specific gap between 'LLM can generate code' and 'non-developers can ship software.' Any team building for the barefoot developer category should be working on glue-layer orchestration, not more generation.

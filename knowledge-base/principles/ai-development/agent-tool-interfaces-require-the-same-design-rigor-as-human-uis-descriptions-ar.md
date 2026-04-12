---
id: PRI-260411-64C7
domain: ai-development
title: >-
  Agent tool interfaces require the same design rigor as human UIs —
  descriptions are routing signals, errors are teaching surfaces, and examples
  outweigh schemas
summary: >-
  Tools built for agents are not API wrappers — they are interaction surfaces
  that shape agent behavior as powerfully as UIs shape human behavior. Precise
  descriptions function as routing documentation for LLM dispatchers. Error
  responses teach correct usage better than error codes. Schemas define valid
  structure, but examples teach idiomatic usage. Return semantic names instead
  of UUIDs. If a human cannot pick the right tool from the description, neither
  can the agent.
confidence: high
supporting_insights:
  - INS-260410-9D86
  - INS-260410-A1E9
  - INS-260410-F910
  - INS-260410-1B17
  - INS-260410-E27A
  - INS-260410-1A22
  - INS-260410-EE5C
  - INS-260411-6106
  - INS-260410-9F17
supporting_count: 9
tags:
  - tool-design
  - agent-interfaces
  - descriptions
  - error-handling
  - schemas
date_created: '2026-04-11'
last_reviewed: '2026-04-11'
resolutions:
  one_line: >-
    Agent tool interfaces require the same design rigor as human UIs —
    descriptions are routing signals, errors are teaching surfaces, and examples
    outweigh schemas
  standard: >-
    Tools built for agents are not API wrappers — they are interaction surfaces
    that shape agent behavior as powerfully as UIs shape human behavior. Precise
    descriptions function as routing documentation for LLM dispatchers. Error
    responses teach correct usage better than error codes. Schemas define valid
    structure, but examples teach idiomatic usage. Return semantic names instead
    of UUIDs. If a human cannot pick the right tool from the description,
    neither can the agent.
lineage:
  compressed_at: '2026-04-11'
  source_insights:
    - id: INS-260410-9D86
      relation: SUPPORTS
    - id: INS-260410-A1E9
      relation: SUPPORTS
    - id: INS-260410-F910
      relation: SUPPORTS
    - id: INS-260410-1B17
      relation: EXTENDS
    - id: INS-260410-E27A
      relation: EXTENDS
    - id: INS-260410-1A22
      relation: REFINES
    - id: INS-260410-EE5C
      relation: SUPPORTS
    - id: INS-260411-6106
      relation: SUPPORTS
    - id: INS-260410-9F17
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 109 insights, 1 principle'
embedded: true
embedding_model: "nomic-embed-text"
---
Tools built for agents are not API wrappers — they are interaction surfaces that shape agent behavior as powerfully as UIs shape human behavior. Precise descriptions function as routing documentation for LLM dispatchers. Error responses teach correct usage better than error codes. Schemas define valid structure, but examples teach idiomatic usage. Return semantic names instead of UUIDs. If a human cannot pick the right tool from the description, neither can the agent.

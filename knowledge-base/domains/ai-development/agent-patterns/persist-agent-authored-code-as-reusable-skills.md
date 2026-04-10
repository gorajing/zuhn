---
id: INS-260410-0855
domain: ai-development
topic: agent-patterns
title: Persist agent-authored code as reusable skills
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - agent-architecture
  - state-persistence
  - mcp
sources:
  - type: blog
    title: 'Code execution with MCP: building more efficient AI agents'
    url: 'https://www.anthropic.com/engineering/code-execution-with-mcp'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat the execution environment's filesystem as an accumulating toolbox —
    agents should save working code as skills and import them on future runs.
  standard: >-
    When an agent successfully writes a function like saveSheetAsCsv, throwing
    that code away at the end of the session means the next run re-derives the
    same logic and pays the same token cost. Instead, the agent can write the
    file to ./skills/ and on future runs simply import it as a higher-level
    primitive.


    This ties into Anthropic's Skills concept — folders containing reusable
    instructions, scripts, and a SKILL.md file that the model can reference.
    Over time, an agent evolves its own scaffolding: the first time it handles a
    new task it writes fresh code; subsequent times it composes previously-saved
    skills. The agent is no longer stateless between sessions — it has a
    persistent execution memory expressed as code.


    This is a very different shape from 'memory' as stored text. Code-as-memory
    is executable, testable, and composable, which is why it compounds as a
    long-term capability rather than a retrieval crutch.
stance: >-
  Once an agent writes working code for a task, saving it as a named skill turns
  ephemeral problem-solving into a growing, callable capability library.
related:
  - INS-260325-2DCD
  - INS-260409-6656
  - INS-260410-F910
  - PRI-260407-D1AD
  - INS-260327-1FA1
  - INS-260410-53C2
  - INS-260410-8ECF
---
When an agent successfully writes a function like saveSheetAsCsv, throwing that code away at the end of the session means the next run re-derives the same logic and pays the same token cost. Instead, the agent can write the file to ./skills/ and on future runs simply import it as a higher-level primitive.

This ties into Anthropic's Skills concept — folders containing reusable instructions, scripts, and a SKILL.md file that the model can reference. Over time, an agent evolves its own scaffolding: the first time it handles a new task it writes fresh code; subsequent times it composes previously-saved skills. The agent is no longer stateless between sessions — it has a persistent execution memory expressed as code.

This is a very different shape from 'memory' as stored text. Code-as-memory is executable, testable, and composable, which is why it compounds as a long-term capability rather than a retrieval crutch.

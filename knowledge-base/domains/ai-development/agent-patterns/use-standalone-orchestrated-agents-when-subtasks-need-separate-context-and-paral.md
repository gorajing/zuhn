---
id: INS-260626-65D6
domain: ai-development
topic: agent-patterns
title: >-
  Use standalone orchestrated agents when subtasks need separate context and
  parallelism
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - orchestrator-pattern
  - multi-agent
  - context-management
  - adk
  - architecture
sources:
  - type: youtube
    title: 'Build connected AI: Orchestrate tools and agents with registries and ADK'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=C5zYVlBsHLQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Klook used an orchestrator/sub-agent pattern with standalone agents — not
    inlined skills — because each platform analyzer needed its own context and
    had to run in parallel.
  standard: >-
    When Klook turned its multi-step supply-research workflow into an agentic
    system, each specialized analyzer (one per social platform) was built as a
    standalone agent coordinated by an orchestrator, rather than as a skill
    plugged directly into the parent. The deciding factors were that each needed
    its own separate context and had to run in parallel — and the pattern also
    works better for models prone to 'context anxiety' when overloaded with one
    giant context.


    The heuristic generalizes into a decision rule: if a subtask can share the
    parent's context and run inline, wrap its instructions, resources, and tools
    into a single skill (faster to build); but if it needs an isolated context
    or concurrent execution, promote it to a dedicated agent. Klook scaled this
    to a multi-layer pattern — a lead 'research manager' agent that plans,
    delegates, monitors, and adjusts across sub-orchestrators, feeding a final
    report agent. Match agent granularity to context isolation and parallelism
    needs, not to conceptual tidiness.
stance: >-
  Subtasks that require their own context windows and parallel execution should
  be standalone agents under an orchestrator, not skills inlined into the
  parent.
related:
  - PRI-260328-A65A
  - PRI-260328-1ED1
  - INS-260410-1030
  - INS-260323-2E51
  - INS-260327-C1A4
---
When Klook turned its multi-step supply-research workflow into an agentic system, each specialized analyzer (one per social platform) was built as a standalone agent coordinated by an orchestrator, rather than as a skill plugged directly into the parent. The deciding factors were that each needed its own separate context and had to run in parallel — and the pattern also works better for models prone to 'context anxiety' when overloaded with one giant context.

The heuristic generalizes into a decision rule: if a subtask can share the parent's context and run inline, wrap its instructions, resources, and tools into a single skill (faster to build); but if it needs an isolated context or concurrent execution, promote it to a dedicated agent. Klook scaled this to a multi-layer pattern — a lead 'research manager' agent that plans, delegates, monitors, and adjusts across sub-orchestrators, feeding a final report agent. Match agent granularity to context isolation and parallelism needs, not to conceptual tidiness.

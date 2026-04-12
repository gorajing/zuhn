---
id: PRI-260411-78CD
domain: ai-development
title: >-
  Agent architecture complexity must be earned through measured failure at
  simpler levels — single calls before workflows, workflows before agents,
  sequential before parallel
summary: >-
  The proven escalation ladder is: single LLM call with retrieval, then
  deterministic workflow with predefined code paths, then autonomous agent with
  dynamic tool use, then multi-agent systems with coordination. Each level adds
  failure modes (compounding errors, race conditions, mis-routing, token burn).
  Multi-agent systems consume ~15x the tokens and only pay off for
  parallelizable, high-value tasks. Agent frameworks hide prompts and make
  debugging harder — start with direct API calls and adopt frameworks only when
  their value exceeds the opacity cost.
confidence: high
supporting_insights:
  - INS-260410-0E26
  - INS-260411-BCB0
  - INS-260410-BBEA
  - INS-260410-E977
  - INS-260410-77E5
  - INS-260410-1030
  - INS-260411-F590
  - INS-260327-77E7
supporting_count: 8
tags:
  - complexity-ladder
  - incremental-design
  - workflows-vs-agents
  - token-economics
  - pragmatism
date_created: '2026-04-11'
last_reviewed: '2026-04-11'
resolutions:
  one_line: >-
    Agent architecture complexity must be earned through measured failure at
    simpler levels — single calls before workflows, workflows before agents,
    sequential before parallel
  standard: >-
    The proven escalation ladder is: single LLM call with retrieval, then
    deterministic workflow with predefined code paths, then autonomous agent
    with dynamic tool use, then multi-agent systems with coordination. Each
    level adds failure modes (compounding errors, race conditions, mis-routing,
    token burn). Multi-agent systems consume ~15x the tokens and only pay off
    for parallelizable, high-value tasks. Agent frameworks hide prompts and make
    debugging harder — start with direct API calls and adopt frameworks only
    when their value exceeds the opacity cost.
lineage:
  compressed_at: '2026-04-11'
  source_insights:
    - id: INS-260410-0E26
      relation: SUPPORTS
    - id: INS-260411-BCB0
      relation: SUPPORTS
    - id: INS-260410-BBEA
      relation: SUPPORTS
    - id: INS-260410-E977
      relation: REFINES
    - id: INS-260410-77E5
      relation: EXTENDS
    - id: INS-260410-1030
      relation: SUPPORTS
    - id: INS-260411-F590
      relation: SUPPORTS
    - id: INS-260327-77E7
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 109 insights, 1 principle'
embedded: true
embedding_model: "nomic-embed-text"
---
The proven escalation ladder is: single LLM call with retrieval, then deterministic workflow with predefined code paths, then autonomous agent with dynamic tool use, then multi-agent systems with coordination. Each level adds failure modes (compounding errors, race conditions, mis-routing, token burn). Multi-agent systems consume ~15x the tokens and only pay off for parallelizable, high-value tasks. Agent frameworks hide prompts and make debugging harder — start with direct API calls and adopt frameworks only when their value exceeds the opacity cost.

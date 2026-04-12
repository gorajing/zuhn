---
id: PRI-260411-9CB1
domain: ai-development
title: >-
  Context is a finite attention budget — curate what enters, defer what can be
  fetched, discard what was consumed
summary: >-
  Every token in the context window depletes the model's attention budget.
  Preloading all tool definitions burns context before work begins — expose
  tools as discoverable modules loaded on demand. Filter large tool outputs in
  the execution sandbox before returning to the model. Use code-based
  orchestration to keep intermediate results out of the context window entirely.
  For long-horizon tasks, choose between compaction, structured note-taking, or
  sub-agents based on task shape. Smart agents fetch data via file paths and
  queries on demand rather than memorizing everything upfront.
confidence: high
supporting_insights:
  - INS-260410-9EFC
  - INS-260410-60C8
  - INS-260410-8ECF
  - INS-260410-01BC
  - INS-260410-D250
  - INS-260410-19DE
  - INS-260410-D92A
  - INS-260410-37D5
  - INS-260327-FDC1
  - INS-260327-F625
supporting_count: 10
tags:
  - context-management
  - attention-budget
  - lazy-loading
  - compaction
  - token-efficiency
date_created: '2026-04-11'
last_reviewed: '2026-04-11'
resolutions:
  one_line: >-
    Context is a finite attention budget — curate what enters, defer what can be
    fetched, discard what was consumed
  standard: >-
    Every token in the context window depletes the model's attention budget.
    Preloading all tool definitions burns context before work begins — expose
    tools as discoverable modules loaded on demand. Filter large tool outputs in
    the execution sandbox before returning to the model. Use code-based
    orchestration to keep intermediate results out of the context window
    entirely. For long-horizon tasks, choose between compaction, structured
    note-taking, or sub-agents based on task shape. Smart agents fetch data via
    file paths and queries on demand rather than memorizing everything upfront.
lineage:
  compressed_at: '2026-04-11'
  source_insights:
    - id: INS-260410-9EFC
      relation: SUPPORTS
    - id: INS-260410-60C8
      relation: SUPPORTS
    - id: INS-260410-8ECF
      relation: EXTENDS
    - id: INS-260410-01BC
      relation: SUPPORTS
    - id: INS-260410-D250
      relation: SUPPORTS
    - id: INS-260410-19DE
      relation: SUPPORTS
    - id: INS-260410-D92A
      relation: EXTENDS
    - id: INS-260410-37D5
      relation: CHALLENGES
    - id: INS-260327-FDC1
      relation: SUPPORTS
    - id: INS-260327-F625
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 109 insights, 1 principle'
embedded: true
embedding_model: "nomic-embed-text"
---
Every token in the context window depletes the model's attention budget. Preloading all tool definitions burns context before work begins — expose tools as discoverable modules loaded on demand. Filter large tool outputs in the execution sandbox before returning to the model. Use code-based orchestration to keep intermediate results out of the context window entirely. For long-horizon tasks, choose between compaction, structured note-taking, or sub-agents based on task shape. Smart agents fetch data via file paths and queries on demand rather than memorizing everything upfront.

---
id: INS-260320-E6DD
domain: ai-development
topic: ai-agents
title: Structure cross-instance knowledge as relational data not text blobs
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - knowledge-base
  - relational-data
  - multi-instance
sources:
  - type: reddit
    title: Gave all my Claudes a shared brain
    author: u/unknown
related:
  - PRI-260328-81F5
  - INS-260320-5B49
  - INS-260329-E6AF
  - INS-260423-BFDE
  - INS-260409-003A
  - INS-260409-1E5E
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Structure knowledge as a relational database (entities + relationships), not
    text blobs. Every Claude instance reads/writes the same structured knowledge
    base.
  standard: |
    For cross-instance context sharing (Claude Code, Web, Mobile), structure
    your knowledge base as relational data with explicit entities and
    relationships rather than unstructured text files. Every Claude instance
    reads from and writes to the same structured store. This enables any
    instance to understand not just isolated facts but how concepts relate
    to each other. The relational structure makes knowledge composable —
    new insights can be linked to existing entities rather than duplicated
    as standalone text.
stance: >-
  Structure knowledge as a relational database (entities + relationships), not
  text blobs
evidence:
  - id: INS-260329-E6AF
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-6494
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-B33F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260403-C135
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---

For cross-instance context sharing (Claude Code, Web, Mobile), structure
your knowledge base as relational data with explicit entities and
relationships rather than unstructured text files. Every Claude instance
reads from and writes to the same structured store. This enables any
instance to understand not just isolated facts but how concepts relate
to each other. The relational structure makes knowledge composable —
new insights can be linked to existing entities rather than duplicated
as standalone text.

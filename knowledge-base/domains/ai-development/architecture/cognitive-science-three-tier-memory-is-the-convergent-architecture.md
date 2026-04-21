---
id: INS-260421-665D
domain: ai-development
topic: architecture
title: Cognitive-science three-tier memory is the convergent architecture
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - cognitive-science
  - memory-architecture
  - convention
sources:
  - type: audio
    title: ai agents 12 ai memory meetup 2026 04 20
date_extracted: '2026-04-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemMachine, mem0, and Cognee all adopt some variant of working memory
    (short-term buffer), episodic memory (timestamped events), and semantic
    memory (extracted facts/profile).
  standard: >-
    MemMachine makes the model explicit: working memory in SQLite (rolling
    window, summarized when full), episodic memory in Neo4j (timestamped event
    nodes with neighbor relationships), semantic memory in Postgres
    (LLM-inferred stable facts about users/context). mem0 uses a simpler flat
    model but distinguishes ephemeral conversation state from extracted
    memories. Cognee builds knowledge graphs that combine event and concept
    layers.


    Alexei Khrabrov noted on stage that Cognee's founder Vasilije Markovic 'went
    back to school to study cognitive science to learn how memory works' and
    that 'we're kind of reinventing the wheel' — the block diagrams match
    50-year-old cognitive science hypotheses about brain architecture. For
    architects designing new memory systems, the three-tier pattern is now
    convention and deviating from it invites buyer confusion, not innovation
    credit.
stance: >-
  The working/episodic/semantic memory model from cognitive science has become
  the convergent architecture for production AI memory systems
related:
  - INS-260405-6C88
  - INS-260409-C133
  - INS-260421-E9FC
  - INS-260421-43EC
  - INS-260330-9D44
  - INS-260405-11EA
  - PRI-260321-D74F
---
MemMachine makes the model explicit: working memory in SQLite (rolling window, summarized when full), episodic memory in Neo4j (timestamped event nodes with neighbor relationships), semantic memory in Postgres (LLM-inferred stable facts about users/context). mem0 uses a simpler flat model but distinguishes ephemeral conversation state from extracted memories. Cognee builds knowledge graphs that combine event and concept layers.

Alexei Khrabrov noted on stage that Cognee's founder Vasilije Markovic 'went back to school to study cognitive science to learn how memory works' and that 'we're kind of reinventing the wheel' — the block diagrams match 50-year-old cognitive science hypotheses about brain architecture. For architects designing new memory systems, the three-tier pattern is now convention and deviating from it invites buyer confusion, not innovation credit.

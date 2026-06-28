---
id: INS-260626-407C
domain: ai-development
topic: architecture
title: >-
  For a personal knowledge system, plain files plus a reference index beat
  vector databases
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - second-brain
  - vector-databases
  - knowledge-management
  - file-based-memory
  - retrieval
sources:
  - type: youtube
    title: >-
      Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François
      Bouchard, Towards AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZRM_TfEZcIo'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Forget the vector-DB/knowledge-graph infrastructure you think you need; a
    personal research OS works better as plain files plus a reference-based
    index.
  standard: >-
    The presenters explicitly tell builders to 'forget the infrastructure you
    think you need, such as vector databases, knowledge graphs, semantic
    search.' Those tools are powerful at product scale but add complexity that
    is wrong for a lightly-used personal system: a RAG pipeline 'needs an
    infrastructure, it's not really human-friendly, it's hard to inspect by
    hand, you need to build everything around it.' NotebookLM fails on a
    different axis — you don't own it, can't personalize it, and it isn't
    agent-native.


    Their alternative is a system 'just based on files and just based on
    references' — rooted in how the computer already works, owned by you,
    inspectable by hand, and equally readable by humans and agents. The lesson
    generalizes: match infrastructure weight to use case. Production retrieval
    at scale justifies vector search; a single-person knowledge base that an
    agent reads does not, and the heavier stack actively costs you ownership,
    inspectability, and ease of editing.
stance: >-
  A personal research-memory system should be built on plain markdown files and
  a reference index, not vector databases, knowledge graphs, or semantic search.
related:
  - INS-260327-73BE
  - INS-260402-28BA
  - INS-260325-E23D
  - INS-260421-8004
  - INS-260405-214D
  - INS-260628-ECEB
  - INS-260625-0141
  - INS-260628-06A6
---
The presenters explicitly tell builders to 'forget the infrastructure you think you need, such as vector databases, knowledge graphs, semantic search.' Those tools are powerful at product scale but add complexity that is wrong for a lightly-used personal system: a RAG pipeline 'needs an infrastructure, it's not really human-friendly, it's hard to inspect by hand, you need to build everything around it.' NotebookLM fails on a different axis — you don't own it, can't personalize it, and it isn't agent-native.

Their alternative is a system 'just based on files and just based on references' — rooted in how the computer already works, owned by you, inspectable by hand, and equally readable by humans and agents. The lesson generalizes: match infrastructure weight to use case. Production retrieval at scale justifies vector search; a single-person knowledge base that an agent reads does not, and the heavier stack actively costs you ownership, inspectability, and ease of editing.

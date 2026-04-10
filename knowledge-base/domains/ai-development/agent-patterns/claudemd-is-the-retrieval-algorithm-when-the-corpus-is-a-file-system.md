---
id: INS-260409-7C62
domain: ai-development
topic: agent-patterns
title: CLAUDE.md is the retrieval algorithm when the corpus is a file system
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - claude-md
  - agent-instructions
  - retrieval
  - navigation
  - context-engineering
sources:
  - type: youtube
    title: 'Karpathy의 Obsidian RAG와 Claude Code 조합, 정말 치트키입니다'
    author: Tech Bridge
    url: 'https://youtu.be/k9r2pIYYV9k'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CLAUDE.md teaches the agent how to traverse the vault — it is the retrieval
    system.
  standard: >-
    In the Karpathy setup, CLAUDE.md describes the folder layout, the
    RAW-to-wiki lifecycle, the wiki link format, and how the master index
    relates to per-topic indexes. This single file does the job of a retriever
    configuration in a vector RAG stack: it tells the agent where to look first,
    how to interpret what it finds, and how to follow links between documents.
    The implication is that context engineering — carefully written per-project
    instructions — replaces infrastructure engineering for knowledge systems at
    this scale.
stance: >-
  When the knowledge base is a plain directory, the CLAUDE.md navigation guide
  functions as the entire retrieval layer, teaching the agent the traversal
  rules and link format the vault uses.
related:
  - INS-260409-B122
  - INS-260410-19DE
  - INS-260409-430B
  - INS-260327-DC4C
  - INS-260402-2342
---
In the Karpathy setup, CLAUDE.md describes the folder layout, the RAW-to-wiki lifecycle, the wiki link format, and how the master index relates to per-topic indexes. This single file does the job of a retriever configuration in a vector RAG stack: it tells the agent where to look first, how to interpret what it finds, and how to follow links between documents. The implication is that context engineering — carefully written per-project instructions — replaces infrastructure engineering for knowledge systems at this scale.

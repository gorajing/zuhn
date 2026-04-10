---
id: INS-260410-19DE
domain: ai-development
topic: agent-patterns
title: Just-in-time retrieval beats pre-loaded embeddings for capable agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - rag
  - agent-design
  - claude-code
sources:
  - type: blog
    title: Effective context engineering for AI agents
    url: >-
      https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Smart agents use file paths, queries, and links to fetch data on demand —
    like humans use file systems and bookmarks rather than memorizing
    everything.
  standard: >-
    The dominant pattern in early AI applications was embedding-based
    pre-inference retrieval (RAG). The field is shifting toward 'just in time'
    context: agents store lightweight references (file paths, stored queries,
    links) and load data dynamically through tools. Claude Code exemplifies this
    — it uses Bash primitives like head, tail, glob, and grep to navigate large
    databases without ever loading full data objects. Metadata like folder
    hierarchy, naming conventions, and timestamps become signals that guide
    exploration. The tradeoff is speed (runtime exploration is slower than
    pre-computed retrieval), but it bypasses stale indexes and lets agents
    progressively disclose context as needed. Hybrid approaches work best when
    content is less dynamic (legal, finance).
stance: >-
  Agents should maintain lightweight identifiers and load data into context at
  runtime via tools rather than pre-processing all relevant data into embeddings
  up front.
related:
  - INS-260322-22B3
  - INS-260402-2342
  - INS-260405-82DD
  - INS-260327-FDC1
  - INS-260409-7C62
  - INS-260409-430B
  - INS-260409-51B2
  - PRI-260328-81F5
  - INS-260327-DC4C
  - INS-260410-796F
---
The dominant pattern in early AI applications was embedding-based pre-inference retrieval (RAG). The field is shifting toward 'just in time' context: agents store lightweight references (file paths, stored queries, links) and load data dynamically through tools. Claude Code exemplifies this — it uses Bash primitives like head, tail, glob, and grep to navigate large databases without ever loading full data objects. Metadata like folder hierarchy, naming conventions, and timestamps become signals that guide exploration. The tradeoff is speed (runtime exploration is slower than pre-computed retrieval), but it bypasses stale indexes and lets agents progressively disclose context as needed. Hybrid approaches work best when content is less dynamic (legal, finance).

---
id: INS-260327-FDC1
domain: ai-development
topic: agent-patterns
title: >-
  Long-horizon agents need file system access as a fundamental context
  management primitive
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - file-system-access
  - context-management
  - long-horizon-agents
  - agent-primitives
sources:
  - type: youtube
    title: >-
      Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison
      Chase
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=vtugjs2chdA'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Chase argues that file system access is a non-negotiable primitive for
    long-horizon agents because it enables critical context management
    strategies: storing summarized context for later retrieval, handling large
    tool results, and maintaining state across compaction boundaries.
  standard: >-
    Chase strongly believes any long-horizon agent needs file system access, but
    not necessarily for the reasons you'd expect. The primary use isn't code
    execution — it's context management. When compacting context (necessary as
    long-running agents fill context windows), one strategy is to summarize but
    put full messages in the file system for retrieval if needed. When tool
    calls return large results, you can put them in the file system rather than
    passing everything to the model. A virtual file system backed by Postgres
    works for these patterns without actual code execution. But real file
    systems unlock additional capabilities: writing and running scripts,
    managing complex multi-file state. Chase notes this is hard to separate from
    model training — models are increasingly trained on file system
    interactions, creating a co-evolution between harness design and model
    capabilities. The open question he's grappling with: are coding agents a
    subcategory, or are all agents ultimately coding agents? If a computer's job
    is to do useful things and code is a good way to make computers do useful
    things, maybe every agent eventually needs to code.
stance: >-
  Any long-horizon agent needs access to a file system (real or virtual) as a
  core primitive — not just for code execution but for context management
  strategies like overflow storage, summarization with retrieval, and managing
  large tool call results.
related:
  - INS-260329-BD83
  - INS-260405-82DD
  - PRI-260320-07A4
  - PRI-260328-EE02
  - INS-260325-160E
  - INS-260409-7C62
evidence:
  - id: INS-260329-D868
    type: SUPPORTS
---
Chase strongly believes any long-horizon agent needs file system access, but not necessarily for the reasons you'd expect. The primary use isn't code execution — it's context management. When compacting context (necessary as long-running agents fill context windows), one strategy is to summarize but put full messages in the file system for retrieval if needed. When tool calls return large results, you can put them in the file system rather than passing everything to the model. A virtual file system backed by Postgres works for these patterns without actual code execution. But real file systems unlock additional capabilities: writing and running scripts, managing complex multi-file state. Chase notes this is hard to separate from model training — models are increasingly trained on file system interactions, creating a co-evolution between harness design and model capabilities. The open question he's grappling with: are coding agents a subcategory, or are all agents ultimately coding agents? If a computer's job is to do useful things and code is a good way to make computers do useful things, maybe every agent eventually needs to code.

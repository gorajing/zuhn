---
id: INS-260410-D92A
domain: ai-development
topic: agent-patterns
title: >-
  Compaction, note-taking, and sub-agents are the three techniques for
  long-horizon agents
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - long-horizon
  - agent-architecture
  - memory
  - sub-agents
  - compaction
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
    Long-horizon agents need compaction (for back-and-forth flow), note-taking
    (for iterative milestones), or sub-agents (for parallel research) — pick by
    task shape.
  standard: >-
    Three techniques address context-window limits for tasks spanning hours.
    Compaction summarizes the message history and reinitiates a new context
    window with the summary plus most recent state — best for tasks requiring
    conversational continuity. Structured note-taking (agentic memory) writes to
    a persisted file like NOTES.md outside the context window, retrieved on
    demand — best for iterative development with clear milestones. Sub-agent
    architectures dispatch focused tasks to specialized agents with clean
    context windows that return condensed 1-2k token summaries — best for
    parallel research where the main agent synthesizes results. The three are
    complementary rather than competing; pick by task characteristics.
stance: >-
  Tasks that exceed the context window require one of three specific
  architectural patterns — summarization compaction, persistent file-based
  notes, or sub-agent delegation — chosen by task characteristics.
related:
  - INS-260404-9E11
  - INS-260403-F6F6
  - PRI-260328-F723
  - PRI-260328-A65A
  - PRI-260411-9CB1
  - INS-260410-BDFF
---
Three techniques address context-window limits for tasks spanning hours. Compaction summarizes the message history and reinitiates a new context window with the summary plus most recent state — best for tasks requiring conversational continuity. Structured note-taking (agentic memory) writes to a persisted file like NOTES.md outside the context window, retrieved on demand — best for iterative development with clear milestones. Sub-agent architectures dispatch focused tasks to specialized agents with clean context windows that return condensed 1-2k token summaries — best for parallel research where the main agent synthesizes results. The three are complementary rather than competing; pick by task characteristics.

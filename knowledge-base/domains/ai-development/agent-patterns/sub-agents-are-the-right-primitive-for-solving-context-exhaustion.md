---
id: INS-260627-85C7
domain: ai-development
topic: agent-patterns
title: Sub-agents are the right primitive for solving context exhaustion
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sub-agents
  - context-window
  - agent-architecture
  - context-exhaustion
  - subroutines
sources:
  - type: youtube
    title: 'Amp Code: Next Generation AI Coding – Beyang Liu, Amp Code'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=gvIAkmZUEZY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sub-agents are the subroutine analog for agents — they run a subtask in a
    separate context window and return only the relevant results, conserving the
    main agent's context.
  standard: >-
    Every good coding agent hits context exhaustion: it greps and reads files to
    gather context first, leaving little window left for editing, so it stops
    prematurely. The naive fix — prompt it to read less so it can iterate more
    on edits — triggers the opposite failure, a 'doom loop' where it never
    gathers enough context, never figures out what to do, and retries the same
    thing endlessly. The real fix is sub-agents, which are the agentic analog of
    subroutine calls: a subtask runs in its own separate context window, does
    all its reading and grepping there, and returns only the relevant results to
    the main window. This factors out the context cost of subtasks, effectively
    conserving and extending the main agent's usable context. The pattern
    reframes context management from a single-window budgeting problem into a
    call-stack design problem.
stance: >-
  Context exhaustion in coding agents should be solved with sub-agents, not by
  prompting the main agent to read less.
related:
  - INS-260322-D8C3
  - INS-260327-DC4C
  - INS-260327-FE24
  - PRI-260328-A65A
  - INS-260405-8166
  - INS-260410-E977
  - INS-260410-D92A
  - INS-260410-796F
  - INS-260514-F58B
  - INS-260514-5914
---
Every good coding agent hits context exhaustion: it greps and reads files to gather context first, leaving little window left for editing, so it stops prematurely. The naive fix — prompt it to read less so it can iterate more on edits — triggers the opposite failure, a 'doom loop' where it never gathers enough context, never figures out what to do, and retries the same thing endlessly. The real fix is sub-agents, which are the agentic analog of subroutine calls: a subtask runs in its own separate context window, does all its reading and grepping there, and returns only the relevant results to the main window. This factors out the context cost of subtasks, effectively conserving and extending the main agent's usable context. The pattern reframes context management from a single-window budgeting problem into a call-stack design problem.

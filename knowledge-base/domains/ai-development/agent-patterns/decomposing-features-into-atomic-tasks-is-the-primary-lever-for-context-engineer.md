---
id: INS-260627-EFD5
domain: ai-development
topic: agent-patterns
title: >-
  Decomposing features into atomic tasks is the primary lever for context
  engineering
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - task-decomposition
  - agentic-coding
  - scope-control
sources:
  - type: youtube
    title: >-
      Backlog.md: Terminal Kanban Board for Managing Tasks with AI Agents — Alex
      Gavrilescu, Funstage
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMXKhhwiCIc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Split big features into small atomic tasks so each fits in the agent's
    context window and implements exactly what's specified, nothing more.
  standard: >-
    The pain that motivated Backlog.md is the agent that works for an hour and
    then either runs out of context window mid-task or discovers it went in the
    wrong direction. The fix is to break a large feature into small markdown
    tasks, each with a bounded description and acceptance criteria. This is
    framed explicitly as context engineering: you decide how much an agent
    should implement in a single task so it never exhausts its context, and you
    know precisely what will be built.


    The scope-control benefit is the under-appreciated half. Because each task's
    acceptance criteria define what is and isn't part of the feature, the agent
    doesn't sprawl into extra, unrequested functionality — a common failure mode
    of giving an agent a vague, large prompt. Atomic tasks turn the context
    window from a hard constraint you keep hitting into a budget you allocate
    deliberately. The unit of work, not the model, becomes the thing you
    optimize.
stance: >-
  Bounding each agent task to a small, scoped markdown spec is the most reliable
  way to keep an agent inside its context window and prevent unwanted scope.
related:
  - INS-260627-8738
  - INS-260627-85C7
  - INS-260625-447A
  - INS-260605-9976
  - INS-260627-CECD
  - INS-260605-83DA
---
The pain that motivated Backlog.md is the agent that works for an hour and then either runs out of context window mid-task or discovers it went in the wrong direction. The fix is to break a large feature into small markdown tasks, each with a bounded description and acceptance criteria. This is framed explicitly as context engineering: you decide how much an agent should implement in a single task so it never exhausts its context, and you know precisely what will be built.

The scope-control benefit is the under-appreciated half. Because each task's acceptance criteria define what is and isn't part of the feature, the agent doesn't sprawl into extra, unrequested functionality — a common failure mode of giving an agent a vague, large prompt. Atomic tasks turn the context window from a hard constraint you keep hitting into a budget you allocate deliberately. The unit of work, not the model, becomes the thing you optimize.

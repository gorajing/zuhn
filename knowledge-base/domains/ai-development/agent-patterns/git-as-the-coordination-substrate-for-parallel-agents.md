---
id: INS-260410-62E8
domain: ai-development
topic: agent-patterns
title: Git as the coordination substrate for parallel agents
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - coordination
  - git
  - parallelism
sources:
  - type: blog
    title: Building a C compiler with a team of parallel Claudes
    url: 'https://www.anthropic.com/engineering/building-c-compiler'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each agent claims a task by writing a lockfile to current_tasks/ and pushes
    via git; git's atomicity handles races and Claude handles merge conflicts.
  standard: >-
    Carlini ran 16 agents without any orchestration layer, communication
    protocol, or central planner. Coordination happened entirely through git:
    each agent cloned the repo into its own Docker container, wrote a lockfile
    like current_tasks/parse_if_statement.txt to claim work, and on conflict the
    second agent simply picked something else. Merge conflicts during push-back
    to upstream were resolved by the agent itself. This inverts the usual
    multi-agent architecture assumption — instead of building sophisticated
    messaging, the author leaned on boring infrastructure (git + Docker + a
    while loop) and trusted the model to handle ambiguity. The lesson: start
    with minimal coordination scaffolding and only add protocols where you
    observe actual coordination failures.
stance: >-
  File-based locks on a shared git repo with merge-based conflict resolution is
  sufficient coordination infrastructure for a team of parallel coding agents —
  no orchestrator needed.
related:
  - INS-260410-2C51
  - INS-260403-4D80
  - INS-260410-53C2
  - INS-260320-9D89
  - INS-260403-0350
---
Carlini ran 16 agents without any orchestration layer, communication protocol, or central planner. Coordination happened entirely through git: each agent cloned the repo into its own Docker container, wrote a lockfile like current_tasks/parse_if_statement.txt to claim work, and on conflict the second agent simply picked something else. Merge conflicts during push-back to upstream were resolved by the agent itself. This inverts the usual multi-agent architecture assumption — instead of building sophisticated messaging, the author leaned on boring infrastructure (git + Docker + a while loop) and trusted the model to handle ambiguity. The lesson: start with minimal coordination scaffolding and only add protocols where you observe actual coordination failures.

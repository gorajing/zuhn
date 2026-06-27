---
id: INS-260605-D055
domain: ai-development
topic: agent-patterns
title: Kanban plus cloud is the form factor for parallel agent work
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - ux
  - kanban
  - cloud-agents
  - parallelism
  - engineering-management
sources:
  - type: youtube
    title: 'Don''t Build Slop (4 Levels of AI Agent Maturity) - Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=yUmS-F9IX90'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agent work is inference-bound, so run several agents in parallel on isolated
    cloud machines and supervise them through a Kanban board like an engineering
    manager over ICs.
  standard: >-
    When a single agent runs 8–10 minutes per task, you're inference-bound — the
    rational response is to run two or three agents concurrently rather than
    doomscroll. But parallel agents mutate shared source, so you need state
    isolation. Khan's claim is that a Kanban board is the best UX for this: it
    isolates per-task state, gives a headline-level view of every running agent,
    and lets you compose flows between them. You become an engineering manager
    and the agents are your ICs.


    The compute belongs in the cloud. Cloud agents get a separate machine each
    with no local dependencies, can set up their own environment, run 15–60
    minutes, and even perform manual click-through QA on a VS Code extension.
    Dispatch tasks from your phone, come back, and pull down the PR. Khan's
    predicted endgame: Kanban as the UX layer, cloud as the compute layer — a
    claim partly validated when Claude Code shipped a similar Kanban feature
    hours after his March 26 tweet.
stance: >-
  Because agent work is inference-bound, Kanban boards over cloud-isolated
  agents are the right UX, making the developer an engineering manager of
  parallel ICs.
related:
  - INS-260330-7E4F
  - INS-260330-77BB
  - INS-260403-3587
  - INS-260501-AF40
  - INS-260605-9E46
  - INS-260626-2D64
  - INS-260626-13FB
  - INS-260605-083B
  - INS-260626-9E65
  - INS-260626-3796
---
When a single agent runs 8–10 minutes per task, you're inference-bound — the rational response is to run two or three agents concurrently rather than doomscroll. But parallel agents mutate shared source, so you need state isolation. Khan's claim is that a Kanban board is the best UX for this: it isolates per-task state, gives a headline-level view of every running agent, and lets you compose flows between them. You become an engineering manager and the agents are your ICs.

The compute belongs in the cloud. Cloud agents get a separate machine each with no local dependencies, can set up their own environment, run 15–60 minutes, and even perform manual click-through QA on a VS Code extension. Dispatch tasks from your phone, come back, and pull down the PR. Khan's predicted endgame: Kanban as the UX layer, cloud as the compute layer — a claim partly validated when Claude Code shipped a similar Kanban feature hours after his March 26 tweet.

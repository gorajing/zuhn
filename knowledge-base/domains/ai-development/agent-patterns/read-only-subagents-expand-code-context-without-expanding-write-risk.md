---
id: INS-260624-E89C
domain: ai-development
topic: agent-patterns
title: Read-only subagents expand code context without expanding write risk
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - subagents
  - coding-agents
  - security
  - context
sources:
  - type: paste
    title: Stanford AI Agent Seminar Slide Notes And User Field Notes
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Subagents are safest when they broaden search and context, not when every
    worker can mutate the codebase.
  standard: >-
    The patching CRS sub-agent design mirrors a Claude-Code-like split: a main
    agent can edit files and invoke subagents, while subagents have read-only
    tools such as code search, grep, list, and view. This lets the system fan
    out context gathering and hypothesis generation without multiplying
    uncontrolled write surfaces.


    The pattern generalizes beyond security. In any code agent, give specialized
    workers the tools to inspect, explain, rank, and propose, then funnel
    mutations through a narrower authority boundary. That preserves the value of
    multiagent search while keeping patch provenance and rollback tractable.
stance: >-
  Coding and patching agents should give subagents read-heavy discovery tools
  while reserving file edits for the main agent or controlled patch stage.
related:
  - INS-260329-0154
  - PRI-260403-9E80
  - INS-260619-F7E3
  - PRI-260405-2A95
  - INS-260403-27F5
  - INS-260603-6B3D
---
The patching CRS sub-agent design mirrors a Claude-Code-like split: a main agent can edit files and invoke subagents, while subagents have read-only tools such as code search, grep, list, and view. This lets the system fan out context gathering and hypothesis generation without multiplying uncontrolled write surfaces.

The pattern generalizes beyond security. In any code agent, give specialized workers the tools to inspect, explain, rank, and propose, then funnel mutations through a narrower authority boundary. That preserves the value of multiagent search while keeping patch provenance and rollback tractable.

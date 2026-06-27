---
id: INS-260627-A999
domain: ai-development
topic: agent-patterns
title: Split codebase exploration from code modification
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - coding-agents
  - context-management
  - agent-orchestration
  - read-only-tools
  - token-efficiency
sources:
  - type: blog
    title: >-
      GitHub - microsoft/fastcontext: FastContext: Training Efficient Repository
      Explorer for Coding Agents
    url: 'https://github.com/microsoft/fastcontext'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A read-only explorer subagent protects the solver from context pollution
    while still giving it precise evidence.
  standard: >-
    FastContext's key mechanism is not another general coding agent; it is a
    narrower exploration role. The explorer gets Read, Glob, and Grep-style
    tools, issues independent searches in parallel, and returns compact
    file-line citations instead of a long conversational trace. That makes
    repository search a bounded evidence-gathering step rather than part of the
    solver's permanent reasoning history.


    For Zuhn and AgentRun, this argues for treating wide workspace discovery as
    a separate, auditable phase. The tradeoff is that the explorer can miss
    relevant context, so the handoff needs a verification contract: cite files
    and line ranges, store the trajectory, and let the solver independently
    re-read the cited evidence before editing.
stance: >-
  Coding-agent systems should delegate broad repository exploration to a
  read-only specialist and reserve the main solver context for decisions, edits,
  and verification.
related:
  - INS-260409-086A
  - INS-260410-796F
  - INS-260626-A05F
  - INS-260602-1DF1
  - INS-260627-CECD
---
FastContext's key mechanism is not another general coding agent; it is a narrower exploration role. The explorer gets Read, Glob, and Grep-style tools, issues independent searches in parallel, and returns compact file-line citations instead of a long conversational trace. That makes repository search a bounded evidence-gathering step rather than part of the solver's permanent reasoning history.

For Zuhn and AgentRun, this argues for treating wide workspace discovery as a separate, auditable phase. The tradeoff is that the explorer can miss relevant context, so the handoff needs a verification contract: cite files and line ranges, store the trajectory, and let the solver independently re-read the cited evidence before editing.

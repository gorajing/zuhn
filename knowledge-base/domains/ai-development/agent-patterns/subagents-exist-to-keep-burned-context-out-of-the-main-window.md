---
id: INS-260628-0EB2
domain: ai-development
topic: agent-patterns
title: Subagents exist to keep burned context out of the main window
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-management
  - subagents
  - token-budget
  - context-window
  - delegation
sources:
  - type: youtube
    title: 'Hacking Subagents Into Codex CLI — Brian John, Betterup'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5eJqXtevlXg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Delegate context-heavy work to a subagent so the exploration tokens stay in
    its window and only the distilled answer returns to the parent.
  standard: >-
    John frames subagents first and foremost as a context-management device
    rather than a parallelism or specialization feature. The main agent hands a
    problem to a subagent; the subagent goes off, burns through whatever tokens
    the exploration requires, and passes back just the answer. All the
    intermediate context it consumed — file reads, dead-end searches, verbose
    tool output — never lands in the parent's context window.


    This reframes the design goal of any subagent boundary: the win is not
    merely dividing labor but firewalling token consumption. A task that would
    pollute the main window with thousands of tokens of raw material (searching
    a large codebase, summarizing a long document) is exactly the kind of work
    that belongs behind a subagent, because the parent only needs the
    conclusion.


    The implication for builders is to draw subagent boundaries around the most
    context-expensive, most-summarizable subtasks first. The longer and noisier
    the work and the smaller its distilled output, the higher the return on
    delegating it. This is also why the file-based result handoff is acceptable
    to be terse: the entire point is that only the compressed answer crosses
    back.
stance: >-
  The primary value of a subagent is context isolation: it spends its own tokens
  and returns only the answer.
related:
  - INS-260320-63D3
  - INS-260409-086A
  - INS-260410-796F
  - INS-260605-59FE
  - INS-260625-057C
  - INS-260626-59D9
  - INS-260626-E926
  - INS-260627-A999
  - INS-260627-F9B1
  - INS-260628-C374
---
John frames subagents first and foremost as a context-management device rather than a parallelism or specialization feature. The main agent hands a problem to a subagent; the subagent goes off, burns through whatever tokens the exploration requires, and passes back just the answer. All the intermediate context it consumed — file reads, dead-end searches, verbose tool output — never lands in the parent's context window.

This reframes the design goal of any subagent boundary: the win is not merely dividing labor but firewalling token consumption. A task that would pollute the main window with thousands of tokens of raw material (searching a large codebase, summarizing a long document) is exactly the kind of work that belongs behind a subagent, because the parent only needs the conclusion.

The implication for builders is to draw subagent boundaries around the most context-expensive, most-summarizable subtasks first. The longer and noisier the work and the smaller its distilled output, the higher the return on delegating it. This is also why the file-based result handoff is acceptable to be terse: the entire point is that only the compressed answer crosses back.

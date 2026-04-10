---
id: INS-260320-63D3
domain: ai-development
topic: system-building
title: Subagent isolation prevents context pollution in complex multi-step work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - context-management
  - isolation
sources:
  - type: paste
    title: Building the Zuhn knowledge base — lessons from Phase 1-5
    author: Jin Choi + Claude
related:
  - PRI-260328-A65A
  - INS-260410-796F
  - INS-260403-D51A
  - INS-260327-F625
  - INS-260320-9D89
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each implementation task was dispatched to a fresh subagent with exactly the
    context it needed — no accumulated confusion from previous tasks.
  standard: |
    Each implementation task was dispatched to a fresh subagent with exactly
    the context it needed. No accumulated confusion from previous tasks. The
    subagent pattern (implement then spec review then quality review) caught
    issues that a single long session would have missed.

    Context pollution is a real failure mode in long AI sessions: earlier
    mistakes, abandoned approaches, and stale assumptions accumulate in the
    context window and subtly degrade output quality. Fresh subagents start
    clean, receive only the relevant spec section and file paths, and return
    structured results.

    This validates the composition principle (PRI-260320-D5B7) at the session
    level: just as code should be composed from single-purpose modules, complex
    work should be composed from single-purpose agent sessions.
stance: >-
  Fresh subagents with exactly the context needed outperform long-running agents
  with accumulated confusion
evidence:
  - id: INS-260329-7B1D
    type: SUPPORTS
---

Each implementation task was dispatched to a fresh subagent with exactly
the context it needed. No accumulated confusion from previous tasks. The
subagent pattern (implement then spec review then quality review) caught
issues that a single long session would have missed.

Context pollution is a real failure mode in long AI sessions: earlier
mistakes, abandoned approaches, and stale assumptions accumulate in the
context window and subtly degrade output quality. Fresh subagents start
clean, receive only the relevant spec section and file paths, and return
structured results.

This validates the composition principle at the session level: just as
code should be composed from single-purpose modules, complex work should
be composed from single-purpose agent sessions.

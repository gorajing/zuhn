---
id: INS-260410-2C51
domain: ai-development
topic: agent-patterns
title: End every agent session with the codebase in mergeable state
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - session-handoff
  - git
  - multi-session
sources:
  - type: blog
    title: Effective harnesses for long-running agents
    url: >-
      https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constrain agents to one feature per session and require a git commit plus
    progress-file update before stopping, so the next session inherits a clean
    baseline.
  standard: >-
    Compaction alone is insufficient for multi-session work — it doesn't always
    pass clear instructions forward, and sessions that end mid-feature force the
    next agent to guess what happened and rebuild context. The remedy is to
    require that each session ends in 'mergeable to main' state: no
    half-implemented features, descriptive git commits, updated progress notes.


    The operational rules: work on only one feature at a time, commit progress
    with descriptive messages, write a summary to a progress file. This gives
    the next session a stable starting point and gives the agent itself the
    ability to git-revert bad changes back to a known-working state. The handoff
    protocol — not the model — is what makes multi-session work coherent.
stance: >-
  Coding agents must leave each session in clean-merge state, not
  mid-implementation, or the next session wastes its context recovering.
related:
  - INS-260320-4A82
  - INS-260327-FE24
  - INS-260410-62E8
  - INS-260410-53C2
  - INS-260410-BBC1
  - PRI-260320-467A
---
Compaction alone is insufficient for multi-session work — it doesn't always pass clear instructions forward, and sessions that end mid-feature force the next agent to guess what happened and rebuild context. The remedy is to require that each session ends in 'mergeable to main' state: no half-implemented features, descriptive git commits, updated progress notes.

The operational rules: work on only one feature at a time, commit progress with descriptive messages, write a summary to a progress file. This gives the next session a stable starting point and gives the agent itself the ability to git-revert bad changes back to a known-working state. The handoff protocol — not the model — is what makes multi-session work coherent.

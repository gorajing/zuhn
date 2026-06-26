---
id: INS-260626-E45C
domain: ai-development
topic: system-building
title: >-
  Hosting agent prompts server-side decouples behavior iteration from client
  releases
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - deployment
  - prompt-iteration
  - release-cycle
  - server-controlled
  - commands
sources:
  - type: youtube
    title: 'Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WE_Gnowy3uw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor implemented the worktree feature as backend-controlled commands
    rather than bundled skills specifically so prompts could be iterated
    server-side and reach users on next use.
  standard: >-
    Functionally Cursor's worktree commands behave just like skills — their
    prompts only load into context when the user invokes them. The one
    deliberate difference is where the prompt lives: as commands, the prompt
    text is controlled on Cursor's servers. That means the team can improve a
    prompt and every user gets the latest version the next time they run it,
    with no Cursor version bump required.


    For any product whose behavior is defined by prompts, this is a powerful
    deployment lever. Prompt quality for agentic features is highly iterative —
    you learn from real usage and want to push fixes constantly. Bundling
    prompts into a shipped client binds your iteration speed to the release
    cadence and to how quickly users update. Serving them from the backend turns
    prompt improvements into instant, universal rollouts (and enables A/B
    testing, instant rollback, and per-cohort variation). The architectural
    rule: keep the parts of an AI feature most likely to change rapidly — the
    prompts — on a surface you can update unilaterally.
stance: >-
  Serving prompt-based features from the backend lets you ship behavior fixes
  without users updating their client.
related:
  - INS-260626-2E1F
  - INS-260626-4A96
  - INS-260626-7F55
  - INS-260605-90E5
  - INS-260605-2DD5
---
Functionally Cursor's worktree commands behave just like skills — their prompts only load into context when the user invokes them. The one deliberate difference is where the prompt lives: as commands, the prompt text is controlled on Cursor's servers. That means the team can improve a prompt and every user gets the latest version the next time they run it, with no Cursor version bump required.

For any product whose behavior is defined by prompts, this is a powerful deployment lever. Prompt quality for agentic features is highly iterative — you learn from real usage and want to push fixes constantly. Bundling prompts into a shipped client binds your iteration speed to the release cadence and to how quickly users update. Serving them from the backend turns prompt improvements into instant, universal rollouts (and enables A/B testing, instant rollback, and per-cohort variation). The architectural rule: keep the parts of an AI feature most likely to change rapidly — the prompts — on a surface you can update unilaterally.

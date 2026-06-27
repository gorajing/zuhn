---
id: INS-260626-7F55
domain: ai-development
topic: system-design
title: >-
  Replacing deterministic guarantees with prompted constraints trades
  reliability for simplicity
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reliability
  - agent-safety
  - tradeoffs
  - constraints
  - vibes-based
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
    Cursor's old worktree code made escaping the checkout physically impossible;
    the markdown skill only asks the model to stay put, so models sometimes
    wander into the primary checkout.
  standard: >-
    In the hand-coded version, the agent literally could not touch files outside
    its worktree — containment was a hard guarantee enforced by the harness. The
    skill version replaces that with what Gomes openly calls a 'vibes-based'
    approach: aggressive prompting that says 'operate on this directory, do not
    escape.' Over long sessions the model can forget where it should be working,
    and weaker models hallucinate or 'go haywire.'


    This is the central tradeoff of any deterministic-to-probabilistic refactor.
    Code-enforced invariants give you certainty at the cost of maintenance and
    rigidity; prompt-enforced behavior gives you flexibility and tiny code at
    the cost of a non-zero failure rate. Before doing such a swap, ask whether
    the constraint is safety-critical (where probabilistic compliance is
    unacceptable) or merely a quality-of-life guardrail (where occasional drift
    is tolerable and recoverable). Cursor accepted the risk because worktrees
    are an advanced, recoverable workflow — but they are now investing in evals,
    system reminders, and RL specifically to claw back the reliability the
    deterministic design gave for free.
stance: >-
  Swapping hard-coded enforcement for prompt instructions cuts code but
  reintroduces probabilistic failure the old design had eliminated.
related:
  - INS-260626-BF18
  - INS-260626-2E1F
  - INS-260626-E45C
  - INS-260624-5ACA
  - INS-260627-F5A8
---
In the hand-coded version, the agent literally could not touch files outside its worktree — containment was a hard guarantee enforced by the harness. The skill version replaces that with what Gomes openly calls a 'vibes-based' approach: aggressive prompting that says 'operate on this directory, do not escape.' Over long sessions the model can forget where it should be working, and weaker models hallucinate or 'go haywire.'

This is the central tradeoff of any deterministic-to-probabilistic refactor. Code-enforced invariants give you certainty at the cost of maintenance and rigidity; prompt-enforced behavior gives you flexibility and tiny code at the cost of a non-zero failure rate. Before doing such a swap, ask whether the constraint is safety-critical (where probabilistic compliance is unacceptable) or merely a quality-of-life guardrail (where occasional drift is tolerable and recoverable). Cursor accepted the risk because worktrees are an advanced, recoverable workflow — but they are now investing in evals, system reminders, and RL specifically to claw back the reliability the deterministic design gave for free.

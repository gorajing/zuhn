---
id: INS-260605-55A6
domain: ai-development
topic: agent-patterns
title: Confidence-gating an agent's start improves output even when the math is fake
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - confidence-scoring
  - agent-patterns
  - clarifying-questions
  - spec-driven
sources:
  - type: youtube
    title: 'Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pFsfax19yOM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gate execution on a self-assessed confidence threshold so the agent extracts
    requirements from you before it starts work.
  standard: >-
    Nick's ideation plugin keeps an internal confidence counter across
    dimensions (problem clarity, goal definition, success criteria, scope,
    consistency) and refuses to start work until it crosses ~95%, using the
    model's ask-user-question tool to pull missing requirements out of the user
    with multiple-choice options. Both presenters are explicit that the
    arithmetic is not tight and does not need to be — the value is entirely in
    the iterative clarifying loop, the way a good engineer draws requirements
    out of you in a whiteboarding session. A key refinement: forcing the model
    to show *why* it's confident often makes it realize it's less confident than
    it claimed, so the score works by inducing more deliberate thinking rather
    than by being accurate. This solves the common failure where a user knows
    what they want but can't express it to the machine in one prompt; the gate
    converts a vague one-liner into a reviewed contract and phased spec.
stance: >-
  Forcing an agent to score its own confidence and ask clarifying questions
  before executing produces better results regardless of whether the score is
  rigorous.
related:
  - INS-260625-A5E7
  - INS-260605-AD25
  - INS-260403-F76E
  - INS-260605-EA2E
  - PRI-260411-14DC
---
Nick's ideation plugin keeps an internal confidence counter across dimensions (problem clarity, goal definition, success criteria, scope, consistency) and refuses to start work until it crosses ~95%, using the model's ask-user-question tool to pull missing requirements out of the user with multiple-choice options. Both presenters are explicit that the arithmetic is not tight and does not need to be — the value is entirely in the iterative clarifying loop, the way a good engineer draws requirements out of you in a whiteboarding session. A key refinement: forcing the model to show *why* it's confident often makes it realize it's less confident than it claimed, so the score works by inducing more deliberate thinking rather than by being accurate. This solves the common failure where a user knows what they want but can't express it to the machine in one prompt; the gate converts a vague one-liner into a reviewed contract and phased spec.

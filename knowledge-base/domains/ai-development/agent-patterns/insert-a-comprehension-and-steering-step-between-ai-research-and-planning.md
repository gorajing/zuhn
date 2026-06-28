---
id: INS-260605-D6EE
domain: ai-development
topic: agent-patterns
title: Insert a comprehension-and-steering step between AI research and planning
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-workflow
  - planning-mode
  - human-in-the-loop
  - steering
sources:
  - type: youtube
    title: 'The AI Skill I Rely On Daily — Priscila Andre de Oliveira, Sentry'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=li0SaBt9RDM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The standard research-plan-implement loop is missing an explicit step where
    the human understands and corrects the agent's research before it plans.
  standard: >-
    Citing the 'vibe coding our way to disaster' critique and Rich Hickey's
    simple-made-easy philosophy, Priscila accepts the three-phase
    research-planning-implementation structure (now built into tools like Claude
    Code's plan mode) but argues it omits a critical human checkpoint. After the
    agent explores the codebase, it may have understood the wrong thing; if you
    let it proceed straight to planning, the error compounds. The fix is to read
    and understand the agent's research yourself, confirm it matches reality,
    and steer it toward the correct path or toward exploring something it missed
    before authorizing a plan. Comprehension is not a passive output you skim
    past — it is the control surface for keeping the agent on track.
stance: >-
  The research-plan-implement workflow fails unless the human verifies and
  steers the AI's research before planning begins.
related:
  - INS-260605-6CBF
  - INS-260627-2925
  - INS-260627-5976
  - PRI-260328-B4BD
  - INS-260409-0DB0
---
Citing the 'vibe coding our way to disaster' critique and Rich Hickey's simple-made-easy philosophy, Priscila accepts the three-phase research-planning-implementation structure (now built into tools like Claude Code's plan mode) but argues it omits a critical human checkpoint. After the agent explores the codebase, it may have understood the wrong thing; if you let it proceed straight to planning, the error compounds. The fix is to read and understand the agent's research yourself, confirm it matches reality, and steer it toward the correct path or toward exploring something it missed before authorizing a plan. Comprehension is not a passive output you skim past — it is the control surface for keeping the agent on track.

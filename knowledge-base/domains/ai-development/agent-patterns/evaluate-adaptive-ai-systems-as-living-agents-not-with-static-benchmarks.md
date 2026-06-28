---
id: INS-260605-2186
domain: ai-development
topic: agent-patterns
title: 'Evaluate adaptive AI systems as living agents, not with static benchmarks'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - agentic-systems
  - benchmarks
  - adaptive-testing
  - observability
sources:
  - type: youtube
    title: >-
      Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests?
      — Vincent Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4VhbYlfC7Gs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat evals as a self-optimizing growing solution, not a fixed dataset
    captured at a single point in time.
  standard: >-
    Traditional AI evaluation handcrafts a set of questions, tunes the system
    until it passes offline, and ships — treating the application like static
    software. But modern harnesses (Claude, Codex, Open Claw) rewrite
    themselves: they create skills, adapt to users, and ship at lightning speed.
    A benchmark frozen at deployment time cannot keep up with software that
    mutates after deployment, so it 'calcifies' and you are back to the drawing
    board the moment something unexpected happens.


    The mindset shift is to stop treating the eval as a static data set and
    start treating it as code — a living agent that grows and self-optimizes.
    Practically, this means building evaluation infrastructure that can change
    its own test suite as the underlying system changes, rather than maintaining
    a hand-curated regression list that drifts out of sync with a moving target.
stance: >-
  Static, point-in-time benchmarks structurally fail to measure self-modifying
  agentic systems and must be replaced by evals that adapt alongside the
  application.
related:
  - INS-260410-F40F
  - INS-260605-EF23
  - INS-260625-D1F9
  - INS-260627-4072
  - INS-260626-8747
  - INS-260625-8A55
  - INS-260625-DAE9
  - INS-260625-9C3B
  - INS-260625-52C0
  - INS-260625-CD66
---
Traditional AI evaluation handcrafts a set of questions, tunes the system until it passes offline, and ships — treating the application like static software. But modern harnesses (Claude, Codex, Open Claw) rewrite themselves: they create skills, adapt to users, and ship at lightning speed. A benchmark frozen at deployment time cannot keep up with software that mutates after deployment, so it 'calcifies' and you are back to the drawing board the moment something unexpected happens.

The mindset shift is to stop treating the eval as a static data set and start treating it as code — a living agent that grows and self-optimizes. Practically, this means building evaluation infrastructure that can change its own test suite as the underlying system changes, rather than maintaining a hand-curated regression list that drifts out of sync with a moving target.

---
id: INS-260605-3285
domain: ai-development
topic: agent-patterns
title: Agentic task quality reduces to four verifiable criteria
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - task-design
  - evaluation
  - agentic-tasks
  - benchmarking
  - data-quality
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Snorkel accepts an agentic task only if it passes tests for all four
    criteria: achievable, non-trivial, functionally correct logic, and a
    reliable containerized environment.
  standard: >-
    Snorkel defines task quality in agentic (terminal-bench-style) settings as
    four concrete properties. The task must be achievable (a competent model can
    actually solve it), non-trivial (it isn't so easy that completion carries no
    signal), functionally correct (the task logic plays out as specified), and
    reliable (the containerized environment behaves deterministically across
    rollouts). They build research harnesses that test all four; a task passing
    every test is 'accepted,' otherwise 'rejected.'


    What makes this operationally useful is that quality becomes a pass/fail
    gate rather than a vibe. Containerization handles reproducibility,
    isolation, and parallel rollouts; the four criteria handle logical and
    difficulty validity. This decomposition lets a team audit exactly why a task
    was rejected and turns 'is this good data?' into a set of automatable checks
    — the precondition for scaling curation without scaling human review
    linearly.
stance: >-
  A training-worthy agentic task must be achievable, non-trivial, functionally
  correct, and run in a reliable environment — and each criterion should be
  machine-tested before acceptance.
related:
  - INS-260411-F590
  - INS-260410-E977
  - PRI-260328-F723
  - INS-260405-F26B
  - INS-260410-A27C
---
Snorkel defines task quality in agentic (terminal-bench-style) settings as four concrete properties. The task must be achievable (a competent model can actually solve it), non-trivial (it isn't so easy that completion carries no signal), functionally correct (the task logic plays out as specified), and reliable (the containerized environment behaves deterministically across rollouts). They build research harnesses that test all four; a task passing every test is 'accepted,' otherwise 'rejected.'

What makes this operationally useful is that quality becomes a pass/fail gate rather than a vibe. Containerization handles reproducibility, isolation, and parallel rollouts; the four criteria handle logical and difficulty validity. This decomposition lets a team audit exactly why a task was rejected and turns 'is this good data?' into a set of automatable checks — the precondition for scaling curation without scaling human review linearly.

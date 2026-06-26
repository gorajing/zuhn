---
id: INS-260626-D8E6
domain: ai-development
topic: agent-patterns
title: >-
  Match agent autonomy to the work type: stay in the loop for front-end
  features, fully delegate migrations
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - coding-agents
  - test-driven-development
  - frontend
  - migrations
  - delegation
sources:
  - type: youtube
    title: >-
      Software Engineering Is Becoming Plan and Review — Louis Knight-Webb, Vibe
      Kanban
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W76woOYHlvY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use a work-type matrix: front-end features are too stateful to spec, so stay
    in the loop; everything else can be plan-heavy and test-driven.
  standard: >-
    Beyond the plan-vs-review axis, Knight-Webb adds a second axis — the type of
    work — and argues the right mode depends on where you land in the matrix.
    Front-end feature development is nearly impossible to spec fully: it is
    deeply stateful, with interactions, animations, styles, and functionality
    producing endless edge cases, so being in the loop with the agent works
    better there. For almost everything else — back-end feature work,
    refactoring, and migrations — you can and should be plan-heavy: back-end
    features lend themselves to test-driven development, and migration/refactor
    work should be fully delegated with no human in the loop at all, governed
    entirely by tests. The actionable heuristic is to classify a task on these
    two axes before starting, rather than defaulting to one workflow for all
    work.
stance: >-
  Front-end feature development requires staying in the loop with the agent,
  while back-end features, refactors, and migrations should be fully delegated
  via test-driven development with no human in the loop.
related:
  - INS-260320-6F8E
  - INS-260409-04C8
  - PRI-260406-26FB
  - INS-260625-1187
  - PRI-260324-36BF
---
Beyond the plan-vs-review axis, Knight-Webb adds a second axis — the type of work — and argues the right mode depends on where you land in the matrix. Front-end feature development is nearly impossible to spec fully: it is deeply stateful, with interactions, animations, styles, and functionality producing endless edge cases, so being in the loop with the agent works better there. For almost everything else — back-end feature work, refactoring, and migrations — you can and should be plan-heavy: back-end features lend themselves to test-driven development, and migration/refactor work should be fully delegated with no human in the loop at all, governed entirely by tests. The actionable heuristic is to classify a task on these two axes before starting, rather than defaulting to one workflow for all work.

---
id: INS-260626-18A3
domain: ai-development
topic: agent-patterns
title: 'Cheap implementation collapses alignment onto the PR, where it''s too late'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - pull-requests
  - code-review
  - planning
  - workflow
  - agentic-development
sources:
  - type: youtube
    title: >-
      Collaborative AI Engineering: One Dev, Two Dozen Agents, Zero Alignment —
      Maggie Appleton, GitHub
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ClWD8OEYgp8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When the gap between logging an issue and an agent opening a PR shrinks to
    minutes, every early alignment checkpoint disappears and lands on review
    instead.
  standard: >-
    The old development process had planning, building, and review phases with
    many alignment touchpoints along the way — Slack threads, Zoom meetings,
    issue comments, draft PRs — slow enough that the whole team saw the work
    happening and stayed roughly on the same page by merge time. Because
    implementation was expensive, that pace was tolerable. Cheap, instant
    generation collapses the implementation window: teams plan less, early
    touchpoints vanish, and local agent 'plan mode' is unshared, so nobody
    reviews the plan before code ships.


    The result is that all the alignment weight falls on the pull request — a
    checkpoint that comes after implementation, on the wrong side of the work,
    and was never designed to carry team alignment in the first place. So it
    performs poorly at it. The actionable correction is that planning and
    building can no longer be separate phases; they must become a continuous
    cycle, with shared spaces where teams discuss plans and work with agents
    collectively before the agents start, not after.
stance: >-
  Fast agentic coding destroys the early planning touchpoints and dumps all
  alignment onto the pull request, which was never designed to carry it.
related:
  - INS-260625-6E19
  - INS-260625-6127
  - INS-260403-D531
  - INS-260619-F1E3
  - INS-260627-E7AE
---
The old development process had planning, building, and review phases with many alignment touchpoints along the way — Slack threads, Zoom meetings, issue comments, draft PRs — slow enough that the whole team saw the work happening and stayed roughly on the same page by merge time. Because implementation was expensive, that pace was tolerable. Cheap, instant generation collapses the implementation window: teams plan less, early touchpoints vanish, and local agent 'plan mode' is unshared, so nobody reviews the plan before code ships.

The result is that all the alignment weight falls on the pull request — a checkpoint that comes after implementation, on the wrong side of the work, and was never designed to carry team alignment in the first place. So it performs poorly at it. The actionable correction is that planning and building can no longer be separate phases; they must become a continuous cycle, with shared spaces where teams discuss plans and work with agents collectively before the agents start, not after.

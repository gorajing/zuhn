---
id: INS-260625-DA23
domain: ai-development
topic: system-design
title: Snapshot and rehydrate the agent sandbox to iterate PRs until CI is green
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - ci
  - sandboxing
  - autonomous-systems
sources:
  - type: youtube
    title: >-
      Self Driving Products: Product Signals to Pull Requests — Joshua Snyder,
      PostHog
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMiSRliEzv4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Persist a snapshot of the agent's sandbox so that when CI fails or a
    reviewer comments, you rehydrate and keep iterating until the PR turns
    green.
  standard: >-
    PostHog's execution step clones the user's repo into a sandbox (they use
    Modal), runs the Claude Agent SDK to write a fix, and pushes a PR. The
    critical design choice is what happens after: when CI fails or a comment
    lands on the PR, they rehydrate a snapshot of that sandbox and continue
    running the agent until the PR is green, rather than handing a
    half-finished, failing PR back to the human.


    The snapshot/rehydrate mechanism turns a one-shot generation into a
    persistent, resumable loop with state. The agent that reviews or the CI that
    fails becomes a trigger to re-enter the same context, not a dead end. The
    payoff is framed around the human experience: you wake up to green,
    merge-ready PRs instead of a backlog of CI failures and review comments to
    address manually in your local environment.


    The broader pattern for autonomous code systems: the deliverable bar should
    be 'passes all gates,' and the system must own the iteration loop up to that
    bar — persisting enough state to resume cheaply on each external signal —
    before involving a human. Delivering failing artifacts shifts the cleanup
    cost back to the person you were trying to free.
stance: >-
  Autonomous coding pipelines should snapshot the sandbox and rehydrate it on
  every CI failure or review comment, iterating until the PR is green, so humans
  wake to merge-ready work rather than red builds.
related:
  - INS-260605-169D
  - INS-260625-0492
  - INS-260605-6444
  - INS-260320-1B10
  - INS-260619-F1E3
  - INS-260626-A05F
---
PostHog's execution step clones the user's repo into a sandbox (they use Modal), runs the Claude Agent SDK to write a fix, and pushes a PR. The critical design choice is what happens after: when CI fails or a comment lands on the PR, they rehydrate a snapshot of that sandbox and continue running the agent until the PR is green, rather than handing a half-finished, failing PR back to the human.

The snapshot/rehydrate mechanism turns a one-shot generation into a persistent, resumable loop with state. The agent that reviews or the CI that fails becomes a trigger to re-enter the same context, not a dead end. The payoff is framed around the human experience: you wake up to green, merge-ready PRs instead of a backlog of CI failures and review comments to address manually in your local environment.

The broader pattern for autonomous code systems: the deliverable bar should be 'passes all gates,' and the system must own the iteration loop up to that bar — persisting enough state to resume cheaply on each external signal — before involving a human. Delivering failing artifacts shifts the cleanup cost back to the person you were trying to free.

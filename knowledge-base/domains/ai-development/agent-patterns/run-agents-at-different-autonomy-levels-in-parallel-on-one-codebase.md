---
id: INS-260605-9E46
domain: ai-development
topic: agent-patterns
title: Run agents at different autonomy levels in parallel on one codebase
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - parallel-agents
  - agent-orchestration
  - git-worktrees
  - developer-productivity
  - concurrency
sources:
  - type: youtube
    title: 'Cooking with Agents in VS Code — Liam Hampton, Microsoft'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=dyHpnnlkTc8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hampton solves three problems in one codebase concurrently — local agent
    writing tests, background agent building the UI, cloud agent writing docs —
    by varying autonomy so each needs a different slice of his attention.
  standard: >-
    The demo's core claim is that parallelism across agents only works because
    the agents sit at different autonomy levels. If all three demanded constant
    human-in-the-loop attention, a single developer couldn't drive them at once
    — attention is the bottleneck, not compute. By making the docs agent fully
    autonomous (cloud), the UI agent semi-autonomous (background), and only the
    test agent hands-on (local), Hampton's attention is spent almost entirely on
    the one task he chose to supervise, while the other two run unattended.


    The enabling infrastructure is isolation: background agents run in git
    worktrees (a branch mapped to an isolated subdirectory), and cloud agents
    run in separate GitHub Actions sandboxes, so three agents mutate 'one
    codebase' without colliding. The practical lesson for anyone building
    multi-agent workflows: don't parallelize at uniform autonomy. Stagger
    autonomy deliberately so your finite human attention concentrates on the one
    or two streams that actually need it, and let the rest run in isolated
    environments you check on asynchronously.
stance: >-
  A single developer can productively drive multiple agents at different
  autonomy levels simultaneously on the same repository.
related:
  - INS-260321-D3BE
  - INS-260325-D540
  - INS-260325-2DCD
  - INS-260605-D055
  - INS-260605-25B2
  - INS-260625-D295
  - INS-260627-0C43
  - INS-260626-287B
  - INS-260605-0C56
  - INS-260605-5013
---
The demo's core claim is that parallelism across agents only works because the agents sit at different autonomy levels. If all three demanded constant human-in-the-loop attention, a single developer couldn't drive them at once — attention is the bottleneck, not compute. By making the docs agent fully autonomous (cloud), the UI agent semi-autonomous (background), and only the test agent hands-on (local), Hampton's attention is spent almost entirely on the one task he chose to supervise, while the other two run unattended.

The enabling infrastructure is isolation: background agents run in git worktrees (a branch mapped to an isolated subdirectory), and cloud agents run in separate GitHub Actions sandboxes, so three agents mutate 'one codebase' without colliding. The practical lesson for anyone building multi-agent workflows: don't parallelize at uniform autonomy. Stagger autonomy deliberately so your finite human attention concentrates on the one or two streams that actually need it, and let the rest run in isolated environments you check on asynchronously.

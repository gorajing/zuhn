---
id: INS-260501-EC31
domain: ai-development
topic: claude-code
title: >-
  10-15 parallel Claude Code sessions per developer with work-tree-per-task is
  the level-7 software factory shape
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - parallel-sessions
  - work-trees
  - software-factory
  - agent-orchestration
  - claude-code
sources:
  - type: youtube
    title: How to Make Claude Code Your AI Engineering Team
    author: Y Combinator
    url: 'https://youtu.be/wkv2ifxPpF8'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tan runs 10-15 parallel Claude Code sessions per day, each in its own
    work-tree, shipping 10-50 PRs daily as orchestrator rather than implementer.
  standard: >-
    Tan's actual workflow: every idea, bug report, or X complaint becomes a new
    work-tree spawned by clicking a + in Conductor. Each session runs office
    hours → plan-CEO-engineering-design-DX-review → adversarial review →
    implementation → code review → ship. The human role is orchestration:
    clicking through reviews, approving plans, evaluating PRs in waves, watching
    for supply-chain attacks. Tan ships 10-50 PRs a day depending on meeting
    density.


    The scaling structure: parallel work-trees mean parallel agents don't
    conflict, each can complete independently, merging happens at the
    human-evaluation step. This is what level-7 looks like vs. today's typical
    'one Claude Code session per task' (level-3-4). Level-8 would be the agents
    handling QA themselves; the binding constraint Tan hit was Claude-in-Chrome
    MCP being too slow and context-heavy — he wrapped Playwright at the CLI
    level instead, getting massive performance wins.


    For builders: this is the operational pattern to imitate. Don't use Claude
    Code as a slightly-better autocomplete; use it as the orchestrator for 10+
    parallel work streams. The human bottleneck is reviewing, not writing. For
    Zuhn editorially: Tan's 'level 7 software factory' is a useful mental model
    — concrete enough to evaluate where any team is on the spectrum and what
    specifically is missing to advance.
stance: >-
  The actual maximum-leverage workflow with current Claude Code (Tan calls it
  'level 7' on a 1-10 software factory scale) is running 10-15 parallel sessions
  on different projects simultaneously, each in its own git work-tree, with the
  human acting as orchestrator-and-merger rather than implementer.
related:
  - INS-260323-2E51
  - INS-260330-7E4F
  - INS-260410-E590
  - INS-260403-08D7
  - INS-260501-814C
---
Tan's actual workflow: every idea, bug report, or X complaint becomes a new work-tree spawned by clicking a + in Conductor. Each session runs office hours → plan-CEO-engineering-design-DX-review → adversarial review → implementation → code review → ship. The human role is orchestration: clicking through reviews, approving plans, evaluating PRs in waves, watching for supply-chain attacks. Tan ships 10-50 PRs a day depending on meeting density.

The scaling structure: parallel work-trees mean parallel agents don't conflict, each can complete independently, merging happens at the human-evaluation step. This is what level-7 looks like vs. today's typical 'one Claude Code session per task' (level-3-4). Level-8 would be the agents handling QA themselves; the binding constraint Tan hit was Claude-in-Chrome MCP being too slow and context-heavy — he wrapped Playwright at the CLI level instead, getting massive performance wins.

For builders: this is the operational pattern to imitate. Don't use Claude Code as a slightly-better autocomplete; use it as the orchestrator for 10+ parallel work streams. The human bottleneck is reviewing, not writing. For Zuhn editorially: Tan's 'level 7 software factory' is a useful mental model — concrete enough to evaluate where any team is on the spectrum and what specifically is missing to advance.

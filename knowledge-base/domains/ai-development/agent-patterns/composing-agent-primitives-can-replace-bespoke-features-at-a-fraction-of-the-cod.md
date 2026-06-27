---
id: INS-260626-2E1F
domain: ai-development
topic: agent-patterns
title: >-
  Composing agent primitives can replace bespoke features at a fraction of the
  code
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - skills
  - sub-agents
  - code-reduction
  - markdown-as-code
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
    Cursor deleted ~15K LoC by re-expressing its worktree feature as a 40-line
    best-of-N skill plus a worktree skill, built only from existing skill and
    sub-agent primitives.
  standard: >-
    Cursor's original parallel-agent feature carried code for creating and
    managing worktrees, scoping agents, running setup scripts, judging outputs,
    harness changes, and disk cleanup. The team realized two pre-existing
    primitives — agent skills and sub-agents — could re-express the entire
    capability. The replacement worktree skill is a set of plain-markdown
    instructions; the best-of-N skill is ~40 lines that tells a parent agent to
    spawn one sub-agent per model, each in its own worktree, then summarize and
    compare results.


    The lesson generalizes beyond Cursor: when an agent platform already exposes
    composable primitives (skills, sub-agents, tool calls), a large bespoke
    feature is often a candidate for replacement by orchestration prompts rather
    than imperative code. The migration is not free of cost, but the maintenance
    surface collapses dramatically and the markdown version even gained
    capabilities (multi-repo, mid-chat switching, richer judging) the hand-coded
    version lacked. Treat 'could this feature be a skill?' as a default question
    before writing a heavy new subsystem.
stance: >-
  Re-implementing a complex feature as markdown skills plus sub-agents replaces
  thousands of lines of bespoke code with hundreds.
related:
  - INS-260605-158D
  - INS-260626-4A96
  - INS-260626-E45C
  - INS-260605-9276
  - INS-260627-FEB4
  - INS-260626-7F55
---
Cursor's original parallel-agent feature carried code for creating and managing worktrees, scoping agents, running setup scripts, judging outputs, harness changes, and disk cleanup. The team realized two pre-existing primitives — agent skills and sub-agents — could re-express the entire capability. The replacement worktree skill is a set of plain-markdown instructions; the best-of-N skill is ~40 lines that tells a parent agent to spawn one sub-agent per model, each in its own worktree, then summarize and compare results.

The lesson generalizes beyond Cursor: when an agent platform already exposes composable primitives (skills, sub-agents, tool calls), a large bespoke feature is often a candidate for replacement by orchestration prompts rather than imperative code. The migration is not free of cost, but the maintenance surface collapses dramatically and the markdown version even gained capabilities (multi-repo, mid-chat switching, richer judging) the hand-coded version lacked. Treat 'could this feature be a skill?' as a default question before writing a heavy new subsystem.

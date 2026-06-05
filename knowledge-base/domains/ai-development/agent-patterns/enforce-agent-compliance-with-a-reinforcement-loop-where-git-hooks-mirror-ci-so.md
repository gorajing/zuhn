---
id: INS-260605-C9E8
domain: ai-development
topic: agent-patterns
title: >-
  Enforce agent compliance with a reinforcement loop where git hooks mirror CI
  so skipped checks get caught
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness
  - ci
  - git-hooks
  - agent-enforcement
  - reinforcement-loop
  - skills
sources:
  - type: youtube
    title: >-
      BDD, ADR, PRD, WTF: Capturing Decisions for Humans and AI Alike — Michal
      Cichra, Safe Intelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=504PvfXou5Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents must produce a PR via git, so run the same linting/architecture/dedup
    checks as both git hooks and CI — if an agent skips a hook to be lazy, CI
    catches it and links it back to the rule's document.
  standard: >-
    Cichra's enforcement mechanism is 'the loop' — the harness that reminds the
    agent there are rules and how to follow them. Because an agent's goal is to
    deliver a pull request, and that requires git, git hooks become the natural
    enforcement point. The hooks run linting, formatting, type checking, code
    duplication, architecture checks, and document linting. The same tasks run
    again in CI, so 'if agents would get lazy and not want to execute them or
    skip them, then they get caught.' When a commit is rejected, the agent is
    linked back to the relevant document, reads it, fixes the issue, and
    iterates.


    The loop's structure stays constant while focused skills change its
    emphasis: an ADR skill teaches the agent how to look up and apply
    architecture records; a UI loop skips many checks and instead iterates
    quickly in a browser; a test skill selects only the suite subset implicated
    by changed files and coverage. Cichra's framing is that style debates ('tabs
    and spaces') no longer belong in code review at all — 'these things are not
    for discussion, they are rules, automated' — freeing human review for
    high-level concepts.
stance: >-
  A harness of git hooks, CI, and linters that runs identical checks at both
  stages is what keeps agents adhering to rules over long sessions.
related:
  - INS-260320-0D43
  - INS-260320-949A
  - INS-260605-9523
  - INS-260605-3872
  - INS-260605-EF9D
  - PRI-260403-9E80
  - INS-260320-4DE2
  - INS-260320-4A82
---
Cichra's enforcement mechanism is 'the loop' — the harness that reminds the agent there are rules and how to follow them. Because an agent's goal is to deliver a pull request, and that requires git, git hooks become the natural enforcement point. The hooks run linting, formatting, type checking, code duplication, architecture checks, and document linting. The same tasks run again in CI, so 'if agents would get lazy and not want to execute them or skip them, then they get caught.' When a commit is rejected, the agent is linked back to the relevant document, reads it, fixes the issue, and iterates.

The loop's structure stays constant while focused skills change its emphasis: an ADR skill teaches the agent how to look up and apply architecture records; a UI loop skips many checks and instead iterates quickly in a browser; a test skill selects only the suite subset implicated by changed files and coverage. Cichra's framing is that style debates ('tabs and spaces') no longer belong in code review at all — 'these things are not for discussion, they are rules, automated' — freeing human review for high-level concepts.

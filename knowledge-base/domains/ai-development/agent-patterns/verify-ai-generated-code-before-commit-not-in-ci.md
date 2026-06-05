---
id: INS-260605-B136
domain: ai-development
topic: agent-patterns
title: 'Verify AI-generated code before commit, not in CI'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - shift-left
  - mcp
  - ci-cd
  - agentic-workflow
  - remediation
sources:
  - type: youtube
    title: 'Can LLMs generate Enterprise Quality Code? — Prasenjit Sarkar, Sonar'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NuePCNMpWGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run static analysis on agent output in 1-5 seconds via MCP before commit, so
    the agent fixes issues before they reach the PR.
  standard: >-
    Sonar's ACDC framework (Guide, Verify, Solve) restructures the agentic dev
    loop around verification. The key move is shifting analysis left: an
    MCP-integrated analyzer inspects code the moment an agent generates it —
    before commit — in 1-5 seconds, versus a CI run that takes 1-5 minutes and
    only fires after the PR exists. Findings get pushed straight back to the
    agent, which fixes them in-loop before the developer commits.


    The Solve stage adds a remediation agent for issues that slip through: it
    can bulk-fix existing tech debt one PR per issue, but critically it re-runs
    analysis and compilation on its own fix and discards anything that
    introduces a regression. The pattern generalizes beyond Sonar — any agentic
    coding setup benefits from a tight verify loop that runs at generation time,
    and from a remediation step that self-checks before surfacing a fix to a
    human. The expensive, slow gate at the end of the pipeline is the wrong
    place to discover problems an agent could have fixed instantly.
stance: >-
  Catching defects in a sub-5-second pre-commit analysis loop is strictly better
  than waiting for the CI gate to fail.
related:
  - INS-260605-434D
  - INS-260605-A705
  - INS-260605-EA2E
  - INS-260605-E303
  - INS-260410-2C51
  - INS-260423-FF52
---
Sonar's ACDC framework (Guide, Verify, Solve) restructures the agentic dev loop around verification. The key move is shifting analysis left: an MCP-integrated analyzer inspects code the moment an agent generates it — before commit — in 1-5 seconds, versus a CI run that takes 1-5 minutes and only fires after the PR exists. Findings get pushed straight back to the agent, which fixes them in-loop before the developer commits.

The Solve stage adds a remediation agent for issues that slip through: it can bulk-fix existing tech debt one PR per issue, but critically it re-runs analysis and compilation on its own fix and discards anything that introduces a regression. The pattern generalizes beyond Sonar — any agentic coding setup benefits from a tight verify loop that runs at generation time, and from a remediation step that self-checks before surfacing a fix to a human. The expensive, slow gate at the end of the pipeline is the wrong place to discover problems an agent could have fixed instantly.

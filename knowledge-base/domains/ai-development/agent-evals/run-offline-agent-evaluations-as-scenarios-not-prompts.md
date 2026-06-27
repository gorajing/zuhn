---
id: INS-260625-18D0
domain: ai-development
topic: agent-evals
title: 'Run offline agent evaluations as scenarios, not prompts'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - scenario-evaluation
  - workflow-testing
  - task-completion-rate
  - tool-correctness
  - agent-testing
sources:
  - type: youtube
    title: >-
      Production Evals For Agentic AI Systems - Nishant Gupta, Meta
      Superintelligence Labs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vljxQZfJ9wY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Evaluate agents inside simulated workflows (support, code-gen, research)
    measuring task completion, tool correctness, planning quality, and resource
    usage — not prompt accuracy.
  standard: >-
    Offline evaluation still matters for agentic systems, but the unit of
    measurement changes. Instead of scoring a prompt against an expected answer,
    you construct a scenario — a customer support workflow, a code generation
    workflow, a research workflow — and let the agent operate inside that
    simulated environment. You then measure task completion rate, tool
    correctness, planning quality, and resource usage (which becomes
    exponentially important at scale, since cost compounds across long
    tool-calling chains).


    The key takeaway Gupta states explicitly is that agent evaluation should be
    scenario-driven, not prompt-driven. This is a direct consequence of agents
    planning, calling tools, retrieving information, and executing multi-step
    workflows rather than emitting a single answer. A prompt-level test cannot
    capture whether the agent recovered from a tool failure or planned a
    sensible sequence of actions. Scenario evals can be run before deployment to
    validate updates, and they remain a stable harness for catching regressions
    when models, prompts, or tools change.
stance: >-
  Offline evaluation for agents should simulate realistic end-to-end workflows
  rather than test isolated prompt-response pairs.
related:
  - INS-260409-655B
  - INS-260619-CBFA
  - INS-260625-B985
  - PRI-260403-7585
  - INS-260326-7F79
  - PRI-260406-3EF8
  - INS-260625-26F5
---
Offline evaluation still matters for agentic systems, but the unit of measurement changes. Instead of scoring a prompt against an expected answer, you construct a scenario — a customer support workflow, a code generation workflow, a research workflow — and let the agent operate inside that simulated environment. You then measure task completion rate, tool correctness, planning quality, and resource usage (which becomes exponentially important at scale, since cost compounds across long tool-calling chains).

The key takeaway Gupta states explicitly is that agent evaluation should be scenario-driven, not prompt-driven. This is a direct consequence of agents planning, calling tools, retrieving information, and executing multi-step workflows rather than emitting a single answer. A prompt-level test cannot capture whether the agent recovered from a tool failure or planned a sensible sequence of actions. Scenario evals can be run before deployment to validate updates, and they remain a stable harness for catching regressions when models, prompts, or tools change.

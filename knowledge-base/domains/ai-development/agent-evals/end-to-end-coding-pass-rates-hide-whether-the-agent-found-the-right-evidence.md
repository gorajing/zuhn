---
id: INS-260625-14F9
domain: ai-development
topic: agent-evals
title: End-to-end coding pass rates hide whether the agent found the right evidence
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - coding-agents
  - repository-exploration
  - eval-design
  - swe-bench
sources:
  - type: blog
    title: 'SWE-Explore: Benchmarking How Coding Agents Explore Repositories'
    url: 'https://arxiv.org/html/2606.07297v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Separate context discovery from patch generation when diagnosing
    coding-agent reliability.
  standard: >-
    SWE-Explore decomposes issue repair into an upstream ranked-region task and
    downstream patch validation. AgentRun should adopt the same pattern for code
    tasks: log files/lines inspected, compare them to expected evidence when
    possible, and gate not only on final tests but also on whether the agent
    surfaced the decisive context before editing.
subtopic: coding-agents
stance: >-
  Coding-agent evaluations that collapse exploration and patch synthesis into
  one pass rate cannot tell whether failures come from missing context or
  misusing correct context.
related:
  - INS-260624-E878
  - INS-260624-EA6B
  - INS-260626-B449
  - INS-260625-814D
  - INS-260605-6444
  - INS-260325-031F
---
SWE-Explore decomposes issue repair into an upstream ranked-region task and downstream patch validation. AgentRun should adopt the same pattern for code tasks: log files/lines inspected, compare them to expected evidence when possible, and gate not only on final tests but also on whether the agent surfaced the decisive context before editing.

---
id: INS-260625-029F
domain: ai-development
topic: agent-evals
title: 'Abstention quality is a reliability metric, not a refusal nicety'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - abstention
  - reliability
  - coding-agents
  - agent-safety
sources:
  - type: blog
    title: Benchmarking Engineering Process Discipline in Autonomous AI Coding Agents
    url: 'https://arxiv.org/html/2606.22678v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: A reliable agent must be scored on knowing when not to continue.
  standard: >-
    RigorBench includes a 'Know When to Fold' task category and an Abstention
    Quality pillar, making non-action a measurable engineering behavior. This
    matters because outcome-only coding benchmarks often reward agents for
    always trying, even when the prompt is underspecified, the requested change
    is impossible, or proceeding would damage the codebase.


    AgentRun should mirror this by treating blocked, needs_human, and explicit
    uncertainty states as legitimate endpoints when evidence supports them. A
    gate that only rewards successful mutation trains agents to keep acting past
    the point where a human engineer would ask for clarification or stop to
    protect the system.
stance: >-
  Agent benchmarks should include tasks where the correct behavior is to stop,
  ask, or refuse, because always-producing agents create production risk under
  ambiguity and impossible constraints.
related:
  - INS-260605-705B
  - INS-260605-5D5E
  - INS-260605-2D9B
  - INS-260605-8D12
  - INS-260501-9465
---
RigorBench includes a 'Know When to Fold' task category and an Abstention Quality pillar, making non-action a measurable engineering behavior. This matters because outcome-only coding benchmarks often reward agents for always trying, even when the prompt is underspecified, the requested change is impossible, or proceeding would damage the codebase.

AgentRun should mirror this by treating blocked, needs_human, and explicit uncertainty states as legitimate endpoints when evidence supports them. A gate that only rewards successful mutation trains agents to keep acting past the point where a human engineer would ask for clarification or stop to protect the system.

---
id: INS-260625-EC9A
domain: ai-development
topic: agent-evals
title: >-
  Trajectory judges should re-fetch evidence instead of trusting submitted
  artifacts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - trajectory-evaluation
  - verification
  - reward-hacking
  - computer-use
sources:
  - type: blog
    title: Introduction
    url: 'https://arxiv.org/html/2606.09426v2'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The evaluator needs its own evidence path, not just the agent's final
    artifact.
  standard: >-
    WeaveBench uses an isolated trajectory-aware judge that re-fetches evidence
    with file, image, and shell tools, decomposes deliverables into verifiable
    clauses, and checks for shortcuts such as fabricated visual evidence or
    hard-coded metrics. This is stronger than asking an LLM to read the agent's
    final answer, because the judge can compare claims against persistent state,
    screenshots, logs, and action traces.


    AgentRun gates should adopt the same pattern for high-stakes workflows: the
    verifying process should independently read outputs and environment state
    after the agent finishes. The agent's self-report can be retained for
    explanation, but it should not be the primary evidence that the requested
    side effect occurred.
stance: >-
  Agent eval judges should independently inspect the environment and action
  trace, because final deliverables can be fabricated, hard-coded, stale, or
  protocol-violating.
related:
  - INS-260410-AA6E
  - INS-260605-B13C
  - INS-260624-6753
  - INS-260625-6178
  - PRI-260411-14DC
  - INS-260403-4363
---
WeaveBench uses an isolated trajectory-aware judge that re-fetches evidence with file, image, and shell tools, decomposes deliverables into verifiable clauses, and checks for shortcuts such as fabricated visual evidence or hard-coded metrics. This is stronger than asking an LLM to read the agent's final answer, because the judge can compare claims against persistent state, screenshots, logs, and action traces.

AgentRun gates should adopt the same pattern for high-stakes workflows: the verifying process should independently read outputs and environment state after the agent finishes. The agent's self-report can be retained for explanation, but it should not be the primary evidence that the requested side effect occurred.

---
id: INS-260625-2A4F
domain: ai-development
topic: agent-evals
title: >-
  Use unanimous agent failure as a benchmark-defect signal, not just a model
  score
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - quality-control
  - benchmark-bugs
  - error-analysis
sources:
  - type: blog
    title: >-
      Power Systems Agent Benchmark: Executable Evaluation of AI Agents in
      Electric Power Engineering
    url: 'https://arxiv.org/abs/2606.20950'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Shared failures are often benchmark QA signals before they are leaderboard
    facts.
  standard: >-
    During construction, the paper found that identical failures across agents
    often exposed mismatched field descriptions, unstated conventions,
    over-strict comparisons, or even a latent evaluator bug. In the clearest
    case, agents converged on the physically correct answer while the evaluator
    was wrong because its own indicator model had an off-by-one error that
    self-consistency checks missed.


    The implication for agent/eval work is to review failure matrices across
    agents, not only per-agent scores. Agreement among independent agents can be
    a useful external check on evaluator correctness, especially when the
    evaluator and reference solver share code and therefore can share the same
    hidden mistake.
stance: >-
  When multiple independent agents fail the same executable task in the same
  way, the benchmark specification or evaluator should be inspected before the
  failure is counted as capability evidence.
related:
  - INS-260327-24F4
  - INS-260330-2154
  - INS-260323-9D6E
  - INS-260404-0EE0
  - INS-260424-F8BB
  - INS-260605-3ABF
  - INS-260625-76E9
  - PRI-260323-9D46
  - INS-260403-3DF3
  - INS-260410-0DA5
---
During construction, the paper found that identical failures across agents often exposed mismatched field descriptions, unstated conventions, over-strict comparisons, or even a latent evaluator bug. In the clearest case, agents converged on the physically correct answer while the evaluator was wrong because its own indicator model had an off-by-one error that self-consistency checks missed.

The implication for agent/eval work is to review failure matrices across agents, not only per-agent scores. Agreement among independent agents can be a useful external check on evaluator correctness, especially when the evaluator and reference solver share code and therefore can share the same hidden mistake.

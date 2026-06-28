---
id: INS-260625-52C0
domain: ai-development
topic: agent-evals
title: Keep agent benchmark contracts stable while upgrading evaluator internals
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - contracts
  - system-design
  - benchmark-design
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
    Stable task and solution schemas let evaluators grow without breaking
    agents.
  standard: >-
    The benchmark fixes a JSON contract: task files specify inputs, schemas,
    constraints, metrics, and provenance; agents write structured solutions;
    evaluators emit feasibility, score, violations, and evidence. The paper then
    defines an evaluator maturity ladder from closed-form or graph surrogates
    through deterministic engineering models and simulator-backed checks.


    For agent/eval infrastructure, this suggests separating the public task
    interface from the private checking implementation. If the agent-facing
    contract is stable, you can make the evaluator stricter or more realistic
    over time without invalidating old harness adapters or changing what agents
    are asked to produce.
stance: >-
  A benchmark can remain useful across capability tiers if the task and solution
  contract stays fixed while evaluator internals mature behind it.
related:
  - INS-260624-A121
  - INS-260627-6031
  - INS-260605-27CC
  - INS-260605-2186
  - INS-260605-6444
  - INS-260628-9115
---
The benchmark fixes a JSON contract: task files specify inputs, schemas, constraints, metrics, and provenance; agents write structured solutions; evaluators emit feasibility, score, violations, and evidence. The paper then defines an evaluator maturity ladder from closed-form or graph surrogates through deterministic engineering models and simulator-backed checks.

For agent/eval infrastructure, this suggests separating the public task interface from the private checking implementation. If the agent-facing contract is stable, you can make the evaluator stricter or more realistic over time without invalidating old harness adapters or changing what agents are asked to produce.

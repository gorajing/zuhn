---
id: INS-260625-1826
domain: ai-development
topic: system-building
title: >-
  Sandbox isolation must structurally block evaluator access, not merely
  instruct agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - sandboxing
  - security
  - tool-use
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
  one_line: Do not rely on policy text to keep agents away from the oracle.
  standard: >-
    The benchmark packages tasks with answer keys and evaluator internals
    removed, then runs agents in a sandbox without a path back to the benchmark
    code. The paper notes that an agent with autonomous filesystem access can
    otherwise inspect a reachable evaluator and use it as an oracle, and that a
    written instruction not to do so provides no real safeguard.


    For agent system builders, this generalizes beyond benchmarks. Any
    tool-using agent with read access can route around a policy if the
    prohibited resource is still reachable, so eval integrity and production
    safety both need capability boundaries, not just prompt boundaries.
stance: >-
  Agent evaluation isolation must be enforced structurally because instructions
  not to inspect evaluators or answer keys are not security controls.
related:
  - INS-260627-6E3C
  - INS-260626-F490
  - INS-260320-9D89
  - INS-260605-705B
  - INS-260626-9155
---
The benchmark packages tasks with answer keys and evaluator internals removed, then runs agents in a sandbox without a path back to the benchmark code. The paper notes that an agent with autonomous filesystem access can otherwise inspect a reachable evaluator and use it as an oracle, and that a written instruction not to do so provides no real safeguard.

For agent system builders, this generalizes beyond benchmarks. Any tool-using agent with read access can route around a policy if the prohibited resource is still reachable, so eval integrity and production safety both need capability boundaries, not just prompt boundaries.

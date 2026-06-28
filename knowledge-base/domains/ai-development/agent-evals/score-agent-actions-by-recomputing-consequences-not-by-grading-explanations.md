---
id: INS-260625-9644
domain: ai-development
topic: agent-evals
title: 'Score agent actions by recomputing consequences, not by grading explanations'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - executable-evaluation
  - deterministic-checks
  - llm-as-judge
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
    When a task has objective consequences, evaluate the consequence, not the
    prose around it.
  standard: >-
    Power Systems Agent Benchmark makes agents return structured solutions that
    are recomputed by deterministic evaluators against physical constraints,
    while natural-language rationales are retained only for diagnosis. The paper
    explicitly argues that QA-style references and LLM judges are weak in
    domains where many answers can be admissible and where a fluent explanation
    can still violate network physics or operating limits.


    The system-building implication is direct: for agent workflows, the default
    eval should be executable wherever possible. Use judges for cases without
    deterministic checks, but do not let explanation quality raise an outcome
    score when the state, artifact, or external consequence can be checked by
    code.
stance: >-
  Agent evaluations should score the checked consequences of an action whenever
  deterministic verification is available, because fluent rationales can hide
  invalid decisions.
related:
  - INS-260325-0FED
  - INS-260330-81E0
  - INS-260330-14CA
  - INS-260403-9DE0
  - INS-260403-C7D8
  - INS-260627-47A6
  - INS-260625-7592
  - INS-260627-3BE0
  - PRI-260405-0676
  - INS-260627-9E3D
---
Power Systems Agent Benchmark makes agents return structured solutions that are recomputed by deterministic evaluators against physical constraints, while natural-language rationales are retained only for diagnosis. The paper explicitly argues that QA-style references and LLM judges are weak in domains where many answers can be admissible and where a fluent explanation can still violate network physics or operating limits.

The system-building implication is direct: for agent workflows, the default eval should be executable wherever possible. Use judges for cases without deterministic checks, but do not let explanation quality raise an outcome score when the state, artifact, or external consequence can be checked by code.

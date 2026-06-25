---
id: INS-260625-B296
domain: ai-development
topic: agent-evals
title: Runtime verification beats static labels for agent skill risk
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - runtime-verification
  - skills
  - security
sources:
  - type: blog
    title: 'MalSkillBench: A Runtime-Verified Benchmark of Malicious Agent Skills'
    url: 'https://arxiv.org/abs/2606.07131'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A malicious agent skill is not a true positive until its side effect fires
    in a controlled runtime.
  standard: >-
    MalSkillBench's strongest measurement design choice is its
    Generate-Verify-Feedback loop: generated malicious skills are only admitted
    when behavior fires inside a Docker sandbox with system-call monitoring and
    judge review. That turns the benchmark from a taxonomy of scary-looking
    artifacts into a runtime-grounded reliability test.


    For AgentRun, this argues that high-risk tool, plugin, or skill evaluations
    should not stop at source inspection or natural-language intent
    classification. A verification gate should require observed side-effect
    evidence in an isolated environment before a run claims that a risk was
    detected, mitigated, or reproduced.
stance: >-
  Agent skill benchmarks should admit malicious examples only when the behavior
  actually executes under monitored runtime conditions, because static labels
  cannot prove the code-instruction-tool bundle is operationally dangerous.
related:
  - INS-260410-9B0E
  - INS-260624-9A4B
  - INS-260605-74E8
  - INS-260605-9276
  - INS-260605-C436
  - INS-260423-FF52
---
MalSkillBench's strongest measurement design choice is its Generate-Verify-Feedback loop: generated malicious skills are only admitted when behavior fires inside a Docker sandbox with system-call monitoring and judge review. That turns the benchmark from a taxonomy of scary-looking artifacts into a runtime-grounded reliability test.

For AgentRun, this argues that high-risk tool, plugin, or skill evaluations should not stop at source inspection or natural-language intent classification. A verification gate should require observed side-effect evidence in an isolated environment before a run claims that a risk was detected, mitigated, or reproduced.

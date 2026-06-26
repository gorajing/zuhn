---
id: INS-260626-1045
domain: ai-development
topic: agent-evals
title: Conformance tests are not outcome evaluations
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - conformance
  - evaluation-design
  - coding-agents
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A harness can prove that gates reject constructed bad inputs without proving
    it improves developer outcomes.
  standard: >-
    The paper reports conformance tests where all canonical agent definitions
    compiled and injected violations triggered the intended controls. It is
    explicit that this answers whether the mechanisms reject bad inputs, not
    whether Rel(AI)Build improves productivity, reduces defects, or works in
    deployment.


    This is a useful evaluation distinction for agent systems. First verify that
    each control enforces its invariant; then run a separate controlled study
    with baseline arms for time-to-merge, defects, scope creep, and human
    overhead before claiming real-world effectiveness.
stance: >-
  Agent governance mechanisms need separate conformance tests and outcome
  evaluations because passing injected violations does not prove field
  effectiveness.
related:
  - INS-260625-2B5A
  - INS-260625-D842
  - PRI-260328-7A4D
  - INS-260626-485E
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260514-4FDC
---
The paper reports conformance tests where all canonical agent definitions compiled and injected violations triggered the intended controls. It is explicit that this answers whether the mechanisms reject bad inputs, not whether Rel(AI)Build improves productivity, reduces defects, or works in deployment.

This is a useful evaluation distinction for agent systems. First verify that each control enforces its invariant; then run a separate controlled study with baseline arms for time-to-merge, defects, scope creep, and human overhead before claiming real-world effectiveness.

---
id: INS-260625-D938
domain: ai-development
topic: agent-evals
title: Partial-progress metrics matter when binary pass rates hide agent learning
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evaluation
  - fix-rate
  - partial-progress
  - agent-benchmarks
sources:
  - type: blog
    title: >-
      SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution
      Scenarios
    url: 'https://arxiv.org/html/2512.18470v6'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SWE-EVO's Fix Rate captures agents that fix some failing tests without fully
    resolving a release-sized task.
  standard: >-
    The contradiction scout should not simply downgrade agents from a binary
    success rate. SWE-EVO introduces Fix Rate because release-sized tasks can
    include hundreds or thousands of tests, making all-or-nothing resolved rate
    too coarse for comparing partial capability.


    This supports a narrower update: confidence in autonomous end-to-end
    completion should fall, but confidence in measurable incremental usefulness
    should not fall as much. Agents may already produce partial fixes,
    diagnosis, or scoped patches even when they are not reliable release-level
    owners.
stance: >-
  Long-horizon agent benchmarks need partial-progress metrics because binary
  resolved rates obscure useful but incomplete repairs.
related:
  - INS-260321-2482
  - INS-260320-9D89
  - INS-260323-01F9
  - INS-260329-F84E
  - INS-260329-D2CA
  - INS-260410-62E8
  - INS-260410-7ED2
  - INS-260501-3502
  - INS-260514-84FC
  - INS-260519-224B
---
The contradiction scout should not simply downgrade agents from a binary success rate. SWE-EVO introduces Fix Rate because release-sized tasks can include hundreds or thousands of tests, making all-or-nothing resolved rate too coarse for comparing partial capability.

This supports a narrower update: confidence in autonomous end-to-end completion should fall, but confidence in measurable incremental usefulness should not fall as much. Agents may already produce partial fixes, diagnosis, or scoped patches even when they are not reliable release-level owners.

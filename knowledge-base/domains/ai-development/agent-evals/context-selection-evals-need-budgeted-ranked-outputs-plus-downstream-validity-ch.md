---
id: INS-260625-869B
domain: ai-development
topic: agent-evals
title: >-
  Context-selection evals need budgeted ranked outputs plus downstream validity
  checks
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - ranking
  - retrieval
  - external-validity
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
    Budgeted ranked evidence is a stronger context gate than raw file-hit or
    token-count metrics.
  standard: >-
    SWE-Explore evaluates coverage, ranking, and context efficiency, then
    verifies that the selected context improves a fixed repair agent. This
    suggests AgentRun should prefer line-budgeted ranked evidence gates over
    broad 'read many files' telemetry, and should periodically validate that
    better context scores predict better production outcomes.
subtopic: context-selection
stance: >-
  A repository-exploration metric is only useful if it rewards decisive evidence
  appearing early under a fixed budget and correlates with downstream repair
  success.
related:
  - INS-260628-9D66
  - PRI-260426-9E23
  - INS-260626-6AF4
  - INS-260403-A1B6
  - INS-260423-2B80
---
SWE-Explore evaluates coverage, ranking, and context efficiency, then verifies that the selected context improves a fixed repair agent. This suggests AgentRun should prefer line-budgeted ranked evidence gates over broad 'read many files' telemetry, and should periodically validate that better context scores predict better production outcomes.

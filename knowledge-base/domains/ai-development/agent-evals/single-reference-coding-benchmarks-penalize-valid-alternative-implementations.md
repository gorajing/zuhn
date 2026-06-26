---
id: INS-260625-2B5A
domain: ai-development
topic: agent-evals
title: Single-reference coding benchmarks penalize valid alternative implementations
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - benchmark-validity
  - coding-agents
  - behavioral-specs
  - swe-bench
sources:
  - type: blog
    title: >-
      Position: Coding Benchmarks Are Misaligned with Agentic Software
      Engineering
    url: 'https://arxiv.org/html/2606.17799v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Correctness gates should encode behavior, not proximity to one historical
    patch.
  standard: >-
    The critique argues that agentic software systems need independent
    behavioral specifications instead of single-reference solution matching.
    AgentRun gates should therefore prefer executable contracts, mutation
    checks, reviewer rubrics, and invariants over golden-patch similarity
    whenever multiple correct implementations are possible.
subtopic: benchmark-validity
stance: >-
  Benchmarks anchored to one reference patch confuse behavioral correctness with
  solution similarity and can mark acceptable agentic implementations as
  failures.
related:
  - INS-260625-C1E8
  - INS-260625-FDC1
  - INS-260625-A5E7
  - INS-260605-07E5
  - INS-260625-8BC8
---
The critique argues that agentic software systems need independent behavioral specifications instead of single-reference solution matching. AgentRun gates should therefore prefer executable contracts, mutation checks, reviewer rubrics, and invariants over golden-patch similarity whenever multiple correct implementations are possible.

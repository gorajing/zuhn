---
id: INS-260624-B6EA
domain: ai-development
topic: agent-patterns
title: >-
  Agent tool calls should be scheduled as dependency graphs, not serial
  transcripts
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tool-calling
  - parallelism
  - agent-harness
  - latency
sources:
  - type: audio
    title: Stanford Hospital at 300 Pasteur Drive
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Independent agent tool calls should run concurrently even if the model emits
    them sequentially.
  standard: >-
    The talk used function calling to show a common inefficiency: the model
    emits one search or lookup, waits for it, then emits another even when the
    two calls are independent. A harness can treat tasks as a dependency graph
    and dispatch independent calls in parallel.


    For production agents, this means the orchestration layer should understand
    dependency, cancellation, and result joining instead of passively executing
    tool calls in transcript order. The model supplies intent; the harness
    should own scheduling.
stance: >-
  Agent harnesses should parallelize independent tool calls and serialize only
  true dependencies, because language-model token order should not dictate
  execution order.
related:
  - INS-260605-0819
  - INS-260627-8B10
  - INS-260627-AB66
  - INS-260626-475E
  - INS-260626-BC79
---
The talk used function calling to show a common inefficiency: the model emits one search or lookup, waits for it, then emits another even when the two calls are independent. A harness can treat tasks as a dependency graph and dispatch independent calls in parallel.

For production agents, this means the orchestration layer should understand dependency, cancellation, and result joining instead of passively executing tool calls in transcript order. The model supplies intent; the harness should own scheduling.

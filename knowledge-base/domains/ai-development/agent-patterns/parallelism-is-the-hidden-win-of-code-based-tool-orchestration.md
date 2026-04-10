---
id: INS-260410-CD01
domain: ai-development
topic: agent-patterns
title: Parallelism is the hidden win of code-based tool orchestration
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - parallelism
  - latency
  - tool-use
  - async
sources:
  - type: blog
    title: Introducing advanced tool use on the Claude Developer Platform
    url: 'https://www.anthropic.com/engineering/advanced-tool-use'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Code-driven orchestration unlocks asyncio.gather across independent tool
    calls, collapsing sequential round-trips into one concurrent batch.
  standard: >-
    When Claude expresses orchestration in Python, independent operations can
    run concurrently via asyncio.gather — fetching 20 employees' expenses in
    parallel instead of 20 sequential tool calls. The blog's example shows this
    explicitly: budget lookups and expense fetches each fan out in parallel, and
    the script only blocks on results it actually needs next.


    Natural-language tool calling cannot express this cleanly. Each call is a
    separate inference pass, and even 'parallel tool use' features still
    serialize through the model's reasoning. A five-step workflow with four
    independent calls becomes five sequential round-trips instead of two
    concurrent batches.


    When designing tools you plan to expose programmatically, mark the ones that
    are idempotent and safe to run in parallel, document return formats
    precisely so the model can write correct parsing logic, and treat the code
    execution environment as a genuine runtime — not just a sandbox for the
    model to emit JSON.
stance: >-
  The biggest latency gains from code-driven tool calling come from parallel
  execution, not just fewer inference passes.
related:
  - INS-260410-1030
  - INS-260403-08D7
  - INS-260330-3EFC
  - INS-260410-D250
  - INS-260404-29AF
---
When Claude expresses orchestration in Python, independent operations can run concurrently via asyncio.gather — fetching 20 employees' expenses in parallel instead of 20 sequential tool calls. The blog's example shows this explicitly: budget lookups and expense fetches each fan out in parallel, and the script only blocks on results it actually needs next.

Natural-language tool calling cannot express this cleanly. Each call is a separate inference pass, and even 'parallel tool use' features still serialize through the model's reasoning. A five-step workflow with four independent calls becomes five sequential round-trips instead of two concurrent batches.

When designing tools you plan to expose programmatically, mark the ones that are idempotent and safe to run in parallel, document return formats precisely so the model can write correct parsing logic, and treat the code execution environment as a genuine runtime — not just a sandbox for the model to emit JSON.

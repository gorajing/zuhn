---
id: INS-260410-D250
domain: ai-development
topic: agent-patterns
title: >-
  Let models orchestrate tools through code when workflows involve intermediate
  data
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - code-execution
  - orchestration
  - context-window
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
    Natural-language tool chains force every intermediate result through the
    context window; code orchestration keeps only the final answer.
  standard: >-
    Traditional tool calling has two failure modes at scale: intermediate
    results pollute context (a 10MB log file enters the window even if the model
    only needs error frequencies), and each call requires a full inference pass
    for manual synthesis. A five-tool workflow becomes five round-trips plus
    error-prone natural-language reasoning over the accumulated data.


    Programmatic Tool Calling lets Claude write Python that executes in a
    sandbox, pausing to call your tools and resuming with their results — none
    of which enter the model's context. Only the final script output does. In
    the example budget-check workflow, raw data drops from 200KB to 1KB. Average
    token consumption on complex research tasks dropped 37% (43,588 → 27,297),
    and accuracy on GIA benchmarks rose from 46.5% to 51.2%.


    The deeper point is about where control flow belongs. Loops, conditionals,
    parallel dispatch, and error handling are explicit and reliable in code but
    fragile when expressed through sequential inference passes. Use code when
    you can; use inference when you must.
stance: >-
  Multi-step tool workflows should be expressed as code the model writes, not as
  chains of natural-language tool calls.
related:
  - INS-260410-1030
  - INS-260410-60C8
  - INS-260403-643A
  - INS-260330-81D3
  - INS-260330-112E
  - INS-260410-CD01
---
Traditional tool calling has two failure modes at scale: intermediate results pollute context (a 10MB log file enters the window even if the model only needs error frequencies), and each call requires a full inference pass for manual synthesis. A five-tool workflow becomes five round-trips plus error-prone natural-language reasoning over the accumulated data.

Programmatic Tool Calling lets Claude write Python that executes in a sandbox, pausing to call your tools and resuming with their results — none of which enter the model's context. Only the final script output does. In the example budget-check workflow, raw data drops from 200KB to 1KB. Average token consumption on complex research tasks dropped 37% (43,588 → 27,297), and accuracy on GIA benchmarks rose from 46.5% to 51.2%.

The deeper point is about where control flow belongs. Loops, conditionals, parallel dispatch, and error handling are explicit and reliable in code but fragile when expressed through sequential inference passes. Use code when you can; use inference when you must.

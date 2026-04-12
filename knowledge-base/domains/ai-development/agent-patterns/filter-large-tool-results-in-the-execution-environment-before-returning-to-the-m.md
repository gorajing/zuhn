---
id: INS-260410-01BC
domain: ai-development
topic: agent-patterns
title: >-
  Filter large tool results in the execution environment before returning to the
  model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - context-efficiency
  - data-pipeline
  - agent-architecture
sources:
  - type: blog
    title: 'Code execution with MCP: building more efficient AI agents'
    url: 'https://www.anthropic.com/engineering/code-execution-with-mcp'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When a tool returns large data, filter and aggregate it in the code
    execution sandbox and only log the relevant slice.
  standard: >-
    Direct MCP tool calls route every byte of intermediate data through the
    model: a 10,000-row spreadsheet must fully enter context just to find the 12
    rows that matter, and a 2-hour meeting transcript may pass through twice for
    a read-then-write workflow, eating 50,000+ tokens or exceeding the context
    window entirely.


    With code execution, the agent writes `allRows.filter(...)` inside the
    sandbox and only logs the first five matches. The model sees a tiny summary
    instead of the full dataset, and complex operations like joins,
    aggregations, and field extraction happen in familiar code rather than by
    chaining tool calls.


    This reframes the role of the model from 'data pipeline' to 'orchestrator' —
    data stays in the execution environment, and only decisions and summaries
    reach the context window. For any workflow involving large documents,
    spreadsheets, or API responses, this pattern is the default.
stance: >-
  Letting agents transform and filter tool outputs in code before surfacing them
  to the model is strictly more token-efficient than piping raw results through
  the context window.
related:
  - INS-260329-E4F6
  - INS-260410-F5EC
  - PRI-260411-9CB1
  - INS-260403-EE38
  - INS-260403-643A
  - INS-260320-71C1
---
Direct MCP tool calls route every byte of intermediate data through the model: a 10,000-row spreadsheet must fully enter context just to find the 12 rows that matter, and a 2-hour meeting transcript may pass through twice for a read-then-write workflow, eating 50,000+ tokens or exceeding the context window entirely.

With code execution, the agent writes `allRows.filter(...)` inside the sandbox and only logs the first five matches. The model sees a tiny summary instead of the full dataset, and complex operations like joins, aggregations, and field extraction happen in familiar code rather than by chaining tool calls.

This reframes the role of the model from 'data pipeline' to 'orchestrator' — data stays in the execution environment, and only decisions and summaries reach the context window. For any workflow involving large documents, spreadsheets, or API responses, this pattern is the default.

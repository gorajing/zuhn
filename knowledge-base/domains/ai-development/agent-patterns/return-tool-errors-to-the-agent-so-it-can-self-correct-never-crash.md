---
id: INS-260605-35B4
domain: ai-development
topic: agent-patterns
title: 'Return tool errors to the agent so it can self-correct, never crash'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - agentic-search
  - self-correction
  - tool-design
sources:
  - type: youtube
    title: 'Agentic Search for Context Engineering — Leonie Monigatti, Elastic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ynJyIKwjonM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Catch tool exceptions and return the error text to the agent as the tool
    response so it can self-correct, rather than letting the system crash.
  standard: >-
    When a tool lets the agent write something complex from scratch — like a raw
    ESQL or SQL query — invalid output is likely. Monigatti wraps such tools in
    a try/except that returns the error message back to the agent as the tool
    response instead of raising and crashing the system. The agent reads the
    error and rewrites the query on its next turn. She calls this generally
    important for any agent tool, and especially load-bearing for
    general-purpose, high-ceiling tools where the failure rate is higher.


    A related subtlety she flags: with search tools you must decide whether zero
    results is a valid answer or a failure mode. In her demo the agent wrote
    ESQL using SQL's '%' wildcard instead of ESQL's '*', producing an
    exact-match query that silently returned zero rows — a 'success' that was
    actually wrong. Distinguishing legitimate emptiness from a malformed query
    is part of designing the tool's response contract.
stance: >-
  Wrapping a search tool to return its error string to the agent lets the model
  rewrite a failing query, which is essential for general-purpose tools.
related:
  - INS-260329-72E0
  - INS-260329-3FC9
  - INS-260410-E27A
  - INS-260602-EA48
  - INS-260605-C726
  - INS-260626-8C66
  - INS-260605-2A69
  - INS-260605-37DA
  - INS-260605-3588
  - INS-260625-86CF
---
When a tool lets the agent write something complex from scratch — like a raw ESQL or SQL query — invalid output is likely. Monigatti wraps such tools in a try/except that returns the error message back to the agent as the tool response instead of raising and crashing the system. The agent reads the error and rewrites the query on its next turn. She calls this generally important for any agent tool, and especially load-bearing for general-purpose, high-ceiling tools where the failure rate is higher.

A related subtlety she flags: with search tools you must decide whether zero results is a valid answer or a failure mode. In her demo the agent wrote ESQL using SQL's '%' wildcard instead of ESQL's '*', producing an exact-match query that silently returned zero rows — a 'success' that was actually wrong. Distinguishing legitimate emptiness from a malformed query is part of designing the tool's response contract.

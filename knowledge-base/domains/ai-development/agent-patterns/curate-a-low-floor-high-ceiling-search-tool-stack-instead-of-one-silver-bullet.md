---
id: INS-260605-2C70
domain: ai-development
topic: agent-patterns
title: >-
  Curate a 'low floor, high ceiling' search tool stack instead of one silver
  bullet
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-search
  - tool-design
  - agent-architecture
  - retrieval
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
    Pair low-floor specialized tools (simple params, cheap model, few mistakes)
    with high-ceiling general-purpose tools (shell/query-execution) that handle
    the long tail.
  standard: >-
    Monigatti borrows the UX concept of 'low floor, high ceiling' for search
    tools. A low-floor tool — e.g. get-customer-by-ID or a single-string
    semantic search — has simple parameters, works with a weak/cheap model,
    rarely errors, and needs few iterations. These cover frequent, predictable
    operations efficiently.


    But specialized tools fail on unexpected or complex queries ('I can't solve
    this'). So you also want a high-ceiling tool — a shell/bash tool or a
    general-purpose query-execution tool (e.g. letting the agent write raw
    ESQL/SQL) — that can in principle answer anything. The tradeoff:
    high-ceiling tools demand more parameter complexity, stronger models, and
    more iterations to get right. The recommendation is a deliberate
    combination, not a search for one universal tool, because 'doing good search
    is incredibly difficult' and no single technique covers the full query
    distribution.
stance: >-
  Agents need both specialized tools the model uses correctly out-of-the-box and
  general-purpose tools that handle unexpected queries, not a single universal
  search tool.
related:
  - INS-260605-0C88
  - INS-260404-CCB1
  - INS-260625-3EE6
  - INS-260626-21EA
  - INS-260326-2410
---
Monigatti borrows the UX concept of 'low floor, high ceiling' for search tools. A low-floor tool — e.g. get-customer-by-ID or a single-string semantic search — has simple parameters, works with a weak/cheap model, rarely errors, and needs few iterations. These cover frequent, predictable operations efficiently.

But specialized tools fail on unexpected or complex queries ('I can't solve this'). So you also want a high-ceiling tool — a shell/bash tool or a general-purpose query-execution tool (e.g. letting the agent write raw ESQL/SQL) — that can in principle answer anything. The tradeoff: high-ceiling tools demand more parameter complexity, stronger models, and more iterations to get right. The recommendation is a deliberate combination, not a search for one universal tool, because 'doing good search is incredibly difficult' and no single technique covers the full query distribution.

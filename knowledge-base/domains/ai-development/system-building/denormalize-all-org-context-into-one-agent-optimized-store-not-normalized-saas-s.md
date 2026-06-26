---
id: INS-260626-B94C
domain: ai-development
topic: system-building
title: >-
  Denormalize all org context into one agent-optimized store, not normalized
  SaaS sprawl
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - data-architecture
  - retrieval
  - agent-infrastructure
  - denormalization
sources:
  - type: youtube
    title: Inside YC's AI Playbook
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=B246K_G7mHU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents answer arbitrary questions only when all the important context lives
    in one denormalized, agent-shaped store — like Google's BigTable move
    applied to organizational knowledge.
  standard: >-
    YC's unlock was that it runs on its own software backed by a single Postgres
    database holding everything — companies, founders, financial transactions,
    CRM notes. Giving an agent read-only SQL access plus a little schema context
    let non-engineers ask arbitrary cross-cutting questions ('investors who
    funded space companies in the last four batches') that previously cost hours
    of BI work. Koomen frames the general pattern as a repeat of Google's shift
    from normalized schemas-with-joins to one map-reducible 'big table': you
    take data spread across many systems and denormalize it into a format
    optimized for a specific agent harness's retrieval (rag, graph-rag, hybrid
    RRF, reranking). The lesson for any organization is that the
    highest-leverage infrastructure investment is a common context layer — a
    data warehouse where as much internal truth as possible lives in one place —
    because, just as a coding agent in a monorepo is more efficient, an agent
    over one unified schema dramatically outperforms one stitching together many
    MCP sources.
stance: >-
  Org-wide agents become useful only when important context is denormalized into
  a single agent-optimized store, not scattered across normalized third-party
  SaaS tools.
related:
  - INS-260421-60D9
  - INS-260329-E6AF
  - INS-260605-014F
  - INS-260320-E6DD
  - INS-260603-1BC0
---
YC's unlock was that it runs on its own software backed by a single Postgres database holding everything — companies, founders, financial transactions, CRM notes. Giving an agent read-only SQL access plus a little schema context let non-engineers ask arbitrary cross-cutting questions ('investors who funded space companies in the last four batches') that previously cost hours of BI work. Koomen frames the general pattern as a repeat of Google's shift from normalized schemas-with-joins to one map-reducible 'big table': you take data spread across many systems and denormalize it into a format optimized for a specific agent harness's retrieval (rag, graph-rag, hybrid RRF, reranking). The lesson for any organization is that the highest-leverage infrastructure investment is a common context layer — a data warehouse where as much internal truth as possible lives in one place — because, just as a coding agent in a monorepo is more efficient, an agent over one unified schema dramatically outperforms one stitching together many MCP sources.

---
id: INS-260625-A668
domain: ai-development
topic: agent-patterns
title: Parameterized tools buy determinism that free-form generation can't
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - determinism
  - reliability
  - mcp
  - agent-patterns
sources:
  - type: youtube
    title: 'Agent development and AgentOps with BigQuery, ADK, and MCP'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=tQGalTBL1Ek'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constrain the agent's action surface to passing parameters into pre-written
    logic, rather than generating the logic, to trade flexibility for
    determinism.
  standard: >-
    The single thing the presenter wants the audience to remember about the MCP
    toolbox is its ability to define custom tools via parameterized SQL: the
    developer writes the SQL with named parameters (e.g. find a hotel by
    `name`), and the agent never authors SQL — it just supplies the parameter.
    The stated payoff is determinism: 'in some cases that gives you a lot more
    determinism in your agentic actions.' This generalizes well beyond SQL.
    Every place an agent generates a freeform artifact (a query, an API call, a
    shell command) is a place it can hallucinate or drift; pre-committing the
    artifact and exposing only the variable slots collapses the failure surface
    to argument selection. The design heuristic is to move as much of each tool
    call as possible from 'the model decides the whole thing' to 'the model
    fills a typed blank,' reserving full generative latitude (an
    execute-arbitrary-SQL tool) for the genuinely open-ended cases where the
    determinism cost is worth it.
stance: >-
  Wrapping a fixed query behind a parameterized tool so the agent only supplies
  arguments produces more reliable agentic actions than letting the agent author
  the query itself.
related:
  - INS-260325-7FAF
  - INS-260410-0FC1
  - INS-260605-E303
  - INS-260605-8109
  - INS-260605-3AAF
  - INS-260626-9FFD
  - INS-260327-4CB3
  - PRI-260325-08FB
  - INS-260626-04E5
---
The single thing the presenter wants the audience to remember about the MCP toolbox is its ability to define custom tools via parameterized SQL: the developer writes the SQL with named parameters (e.g. find a hotel by `name`), and the agent never authors SQL — it just supplies the parameter. The stated payoff is determinism: 'in some cases that gives you a lot more determinism in your agentic actions.' This generalizes well beyond SQL. Every place an agent generates a freeform artifact (a query, an API call, a shell command) is a place it can hallucinate or drift; pre-committing the artifact and exposing only the variable slots collapses the failure surface to argument selection. The design heuristic is to move as much of each tool call as possible from 'the model decides the whole thing' to 'the model fills a typed blank,' reserving full generative latitude (an execute-arbitrary-SQL tool) for the genuinely open-ended cases where the determinism cost is worth it.

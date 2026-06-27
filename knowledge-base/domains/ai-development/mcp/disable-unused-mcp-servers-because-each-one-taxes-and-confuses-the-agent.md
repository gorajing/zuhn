---
id: INS-260627-B416
domain: ai-development
topic: mcp
title: Disable unused MCP servers because each one taxes and confuses the agent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - context-engineering
  - tool-bloat
  - system-prompt
  - agent-patterns
sources:
  - type: youtube
    title: 'Agentic Engineering: Working With AI, Not Just Using It — Brendan O''Leary'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BEKc4P87XKo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every enabled MCP server injects tool descriptions into every system prompt
    — disable the ones you aren't using or they waste tokens and mislead the
    agent.
  standard: >-
    MCP solved a real problem (giving models tools beyond text-in/text-out —
    GitHub for PRs/issues, Context7 for up-to-date framework docs past the
    training cutoff), and there are now thousands of servers. But the popularity
    created a trap: every enabled server adds its tool descriptions to the
    system prompt that gets sent on every single interaction. With many servers
    always-on, this is a major contributor to the context bloat that pushes you
    toward the quality-degradation zone.


    The sharper, less obvious point is that wasted tokens aren't the only harm.
    O'Leary's example: a Postgres MCP connected to your database, left enabled
    during pure front-end work, is not just dead weight — it can actively
    confuse the agent into thinking the database is in scope when it shouldn't
    touch it at all. The discipline is to enable MCP servers only when the
    current task needs them. For internal/enterprise APIs he gives a decision
    ladder before reaching for a custom MCP: use an existing OpenAPI/Swagger
    spec if one exists; otherwise convert the API docs to markdown stored in the
    repo; use a pull-on-demand reference URL for frequently-changing APIs; and
    build your own MCP server only for genuinely complex multi-step,
    multi-system workflows.
stance: >-
  Leaving unused MCP servers enabled actively degrades agent performance by
  bloating the system prompt and confusing the agent about what it should touch.
related:
  - INS-260410-358E
  - INS-260410-8ECF
  - INS-260605-3588
  - INS-260625-52B6
  - INS-260626-BC79
  - INS-260627-6217
  - INS-260626-7359
  - INS-260627-1B54
---
MCP solved a real problem (giving models tools beyond text-in/text-out — GitHub for PRs/issues, Context7 for up-to-date framework docs past the training cutoff), and there are now thousands of servers. But the popularity created a trap: every enabled server adds its tool descriptions to the system prompt that gets sent on every single interaction. With many servers always-on, this is a major contributor to the context bloat that pushes you toward the quality-degradation zone.

The sharper, less obvious point is that wasted tokens aren't the only harm. O'Leary's example: a Postgres MCP connected to your database, left enabled during pure front-end work, is not just dead weight — it can actively confuse the agent into thinking the database is in scope when it shouldn't touch it at all. The discipline is to enable MCP servers only when the current task needs them. For internal/enterprise APIs he gives a decision ladder before reaching for a custom MCP: use an existing OpenAPI/Swagger spec if one exists; otherwise convert the API docs to markdown stored in the repo; use a pull-on-demand reference URL for frequently-changing APIs; and build your own MCP server only for genuinely complex multi-step, multi-system workflows.

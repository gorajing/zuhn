---
id: INS-260626-9732
domain: ai-development
topic: agents
title: >-
  Lengthening agent run times force a shift from supervising one agent to
  managing many in parallel
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - coding-agents
  - parallelization
  - time-horizon
  - focus
  - workflow-tools
sources:
  - type: youtube
    title: >-
      Software Engineering Is Becoming Plan and Review — Louis Knight-Webb, Vibe
      Kanban
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W76woOYHlvY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When agents cross the ~5-minute run threshold, the job becomes
    parallel-managing multiple agents while minimizing brain-frying context
    switches.
  standard: >-
    Agent execution time keeps growing because each capability added — returning
    code, then running a type checker, then running tests, then driving a
    browser via Playwright MCP for front-end QA — is an order of magnitude
    slower than the last, but worth it because higher accuracy from longer runs
    minimizes total human time spent. Knight-Webb pegs ~5 minutes as the
    threshold past which you can no longer reasonably sit and watch logs; beyond
    it, the rational move is parallelism — running several agents at once so
    that as you finish reviewing one, another has completed. This demands new
    interfaces (his Vibe Kanban being one attempt: git-worktree-isolated
    workspaces, diffs, inline comments, live previews). The key human constraint
    he names is 'focus maxing': tooling should let an agent run as long as
    possible before yielding, because yanking a human in and out of context
    every 30 seconds fries their brain and destroys productivity. He forecasts
    that within roughly nine months agents will autonomously QA front-end work,
    collapsing most of the back-and-forth.
stance: >-
  Once agents routinely run longer than about five minutes, developers must
  orchestrate multiple parallel agents and protect deep focus rather than
  babysit any single run.
related:
  - INS-260321-18D0
  - PRI-260328-A65A
  - INS-260605-AE0D
  - INS-260605-F8EF
  - INS-260605-9976
  - INS-260605-46A8
  - INS-260605-B136
  - INS-260625-FDC1
  - INS-260626-2D64
  - INS-260327-C1A4
---
Agent execution time keeps growing because each capability added — returning code, then running a type checker, then running tests, then driving a browser via Playwright MCP for front-end QA — is an order of magnitude slower than the last, but worth it because higher accuracy from longer runs minimizes total human time spent. Knight-Webb pegs ~5 minutes as the threshold past which you can no longer reasonably sit and watch logs; beyond it, the rational move is parallelism — running several agents at once so that as you finish reviewing one, another has completed. This demands new interfaces (his Vibe Kanban being one attempt: git-worktree-isolated workspaces, diffs, inline comments, live previews). The key human constraint he names is 'focus maxing': tooling should let an agent run as long as possible before yielding, because yanking a human in and out of context every 30 seconds fries their brain and destroys productivity. He forecasts that within roughly nine months agents will autonomously QA front-end work, collapsing most of the back-and-forth.

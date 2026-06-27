---
id: INS-260627-4693
domain: ai-development
topic: infrastructure
title: >-
  Scaling AI tooling across a large org requires a paved path, not free-for-all
  building
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - paved-path
  - platform-engineering
  - mcp
  - developer-experience
  - governance
sources:
  - type: youtube
    title: >-
      What We Learned Deploying AI within Bloomberg’s Engineering Organization –
      Lei Zhang, Bloomberg
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Q81AzlA-VE8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bloomberg built a 'paved path' — a model gateway, an MCP discovery hub, and
    a standard deployment platform — to stop 9,000 engineers from chaotically
    duplicating AI tools, guided by 'make the right thing extremely easy and the
    wrong thing ridiculously hard.'
  standard: >-
    With 9,000 engineers, Bloomberg found that many teams independently building
    PR-review bots and incident-response agents quickly became 'chaotic' and
    duplicative. Their answer was a paved path (golden path) co-built with their
    AI organization, sitting between two extremes: full team autonomy versus a
    rigidly mandated platform. The path has three components — a model gateway
    (so teams can experiment to find the best-fit model while the platform keeps
    visibility into usage), an MCP discovery hub (a directory so a team can find
    and partner with whoever is already building a needed MCP server instead of
    rebuilding it), and a standard tool-creation-and-deployment service that
    handles runtime, auth, and SDLC to reduce friction.


    The governing principle is sharp and reusable: 'make the right thing
    extremely easy to do, and make the wrong thing ridiculously hard to do.' A
    deliberate design tension runs through it — keep demos and proof-of-concept
    generation frictionless to preserve creativity, while gating production
    behind real quality control because system reliability is core to the
    business. Any org scaling AI tooling past a handful of teams should expect
    duplication and chaos by default and treat a paved path as the antidote, not
    premature over-engineering.
stance: >-
  Letting thousands of engineers build AI agents and MCP servers without a paved
  path produces chaotic duplication, so platforms should make the right approach
  the easy one.
related:
  - INS-260327-ACB3
  - INS-260404-B18A
  - INS-260405-A5C8
  - INS-260625-20D7
  - PRI-260406-806C
  - PRI-260328-9EC9
---
With 9,000 engineers, Bloomberg found that many teams independently building PR-review bots and incident-response agents quickly became 'chaotic' and duplicative. Their answer was a paved path (golden path) co-built with their AI organization, sitting between two extremes: full team autonomy versus a rigidly mandated platform. The path has three components — a model gateway (so teams can experiment to find the best-fit model while the platform keeps visibility into usage), an MCP discovery hub (a directory so a team can find and partner with whoever is already building a needed MCP server instead of rebuilding it), and a standard tool-creation-and-deployment service that handles runtime, auth, and SDLC to reduce friction.

The governing principle is sharp and reusable: 'make the right thing extremely easy to do, and make the wrong thing ridiculously hard to do.' A deliberate design tension runs through it — keep demos and proof-of-concept generation frictionless to preserve creativity, while gating production behind real quality control because system reliability is core to the business. Any org scaling AI tooling past a handful of teams should expect duplication and chaos by default and treat a paved path as the antidote, not premature over-engineering.

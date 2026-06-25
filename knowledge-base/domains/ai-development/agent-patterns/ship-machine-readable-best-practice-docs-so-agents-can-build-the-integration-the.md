---
id: INS-260625-7A1A
domain: ai-development
topic: agent-patterns
title: >-
  Ship machine-readable best-practice docs so agents can build the integration
  themselves
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - agents
  - developer-experience
  - context-engineering
  - documentation
sources:
  - type: youtube
    title: >-
      From MCP to Scale: Pipelines That Build Themselves — Rafael Levi, Bright
      Data
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zTZ0qunQXnM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Host a docs/skills page the agent pulls into context, and it will author the
    scraper itself instead of you maintaining a bespoke SDK.
  standard: >-
    Bright Data exposes a public 'skills' GitHub page of scraper best practices;
    when asked to build a scraper, the agent first pulls that knowledge into
    context, then uses the MCP tools to inspect the page and writes the code.
    The capability isn't baked into a fixed SDK surface — it's delivered as
    reference material the agent consumes just-in-time and turns into bespoke
    code per request.


    This inverts the traditional integration model. Instead of shipping and
    versioning a client library for every use case, you ship the knowledge an
    agent needs to generate the right code itself, and let it adapt that code to
    the specific site, schema, or task. The leverage is that one well-written
    corpus of best-practices serves an unbounded space of generated
    integrations, and improvements to the docs propagate to all future
    generations without a release cycle. For anyone building agent-facing
    products, treat documentation as an executable surface: write for the agent
    that will read it and build from it, not only for the human skimming it.
stance: >-
  You scale agent capability faster by publishing reference 'skills' the agent
  reads on demand than by hand-coding every integration.
related:
  - INS-260501-01A5
  - INS-260605-CEB5
  - INS-260605-82BC
  - INS-260605-6591
  - INS-260605-9276
  - INS-260605-C86D
  - INS-260625-D2E3
---
Bright Data exposes a public 'skills' GitHub page of scraper best practices; when asked to build a scraper, the agent first pulls that knowledge into context, then uses the MCP tools to inspect the page and writes the code. The capability isn't baked into a fixed SDK surface — it's delivered as reference material the agent consumes just-in-time and turns into bespoke code per request.

This inverts the traditional integration model. Instead of shipping and versioning a client library for every use case, you ship the knowledge an agent needs to generate the right code itself, and let it adapt that code to the specific site, schema, or task. The leverage is that one well-written corpus of best-practices serves an unbounded space of generated integrations, and improvements to the docs propagate to all future generations without a release cycle. For anyone building agent-facing products, treat documentation as an executable surface: write for the agent that will read it and build from it, not only for the human skimming it.

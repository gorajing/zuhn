---
id: INS-260605-988D
domain: ai-development
topic: architecture
title: 'MCP and skills are complementary layers, not competitors'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - skills
  - architecture
  - integration
  - tool-design
sources:
  - type: youtube
    title: >-
      Skill Issue: How We Used AI to Make Agents Actually Good at Supabase —
      Pedro Rodrigues, Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GmAQKINjv1E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use MCP to provide the authenticated, environment-independent action (the
    tool) and a skill to describe the intent and workflow for using it.
  standard: >-
    The 'MCP versus skills' framing is a category error — apples to oranges. MCP
    tools don't need a local environment to run, carry authentication baked into
    the protocol, and execute server-side so the agent never manages keys or
    tokens; they're the right choice for any integration to a service,
    especially in production or on remote projects. Scripts inside skills, by
    contrast, run on the agent's local machine and are tied to its OS and
    environment.


    The canonical pattern when both are needed: for querying a large database
    progressively, use an MCP tool to do the extraction (standardized,
    authenticated, no local key management) and wrap it in a skill that states
    'use this tool to load X in chunks.' The tool enables the integration; the
    skill describes how and when to use it. Pedro's strong recommendation for
    the action layer is MCP, reserving skills for the context, descriptions, and
    workflows you 'don't have space to define on the MCP tools.'
stance: >-
  Integrations belong in MCP tools and workflow/context belongs in skills, so
  the right answer to 'MCP or skills' is almost always both.
related:
  - INS-260627-FEB4
  - INS-260327-5AFE
  - INS-260410-095B
  - INS-260626-A2B9
  - PRI-260405-49C0
  - INS-260625-CF6B
  - INS-260627-F5A8
---
The 'MCP versus skills' framing is a category error — apples to oranges. MCP tools don't need a local environment to run, carry authentication baked into the protocol, and execute server-side so the agent never manages keys or tokens; they're the right choice for any integration to a service, especially in production or on remote projects. Scripts inside skills, by contrast, run on the agent's local machine and are tied to its OS and environment.

The canonical pattern when both are needed: for querying a large database progressively, use an MCP tool to do the extraction (standardized, authenticated, no local key management) and wrap it in a skill that states 'use this tool to load X in chunks.' The tool enables the integration; the skill describes how and when to use it. Pedro's strong recommendation for the action layer is MCP, reserving skills for the context, descriptions, and workflows you 'don't have space to define on the MCP tools.'

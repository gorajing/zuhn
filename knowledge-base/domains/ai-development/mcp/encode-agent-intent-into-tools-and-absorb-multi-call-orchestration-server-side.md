---
id: INS-260626-BC79
domain: ai-development
topic: mcp
title: Encode agent intent into tools and absorb multi-call orchestration server-side
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - reliability
  - context-efficiency
  - api-design
  - round-trips
sources:
  - type: youtube
    title: 'Scaling GitHub for your Agents — Sam Morrow, GitHub'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0n3MKk7r60w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    GitHub pushed tool success rates above 95% by encoding agent intent into the
    tool surface — making five API calls server-side inside one tool instead of
    forcing the agent to chain them.
  standard: >-
    A naive MCP server mirrors the platform API: one tool per endpoint. GitHub
    found this both unreliable and token-hungry. Their reliability push raised
    tool success to over 95%, mostly 'by encoding a sort of agent intent into
    our tool surface.' Where a robust operation might require five API calls,
    they perform all five inside the server during a single tool call. This
    collapses round trips, which 'saves context, saves time, and makes the
    agents more successful.'


    The design principle is that the unit of a tool should be a unit of agent
    intent, not a unit of REST plumbing. Pushing orchestration server-side keeps
    the agent's context window clean (it sees one call and one result, not five)
    and removes whole classes of failure where an agent forgets a step or
    mis-sequences calls. They paired this with aggressive output-token trimming
    — tailoring exactly what a tool like list_pull_requests returns cut more
    than 75% of its output tokens. Note the limit: not all failure is
    preventable, since agents still hallucinate which repos they have write
    access to. Intent-based design fixes orchestration failures, not permission
    ignorance.
stance: >-
  Tools should expose high-level agent intent and perform multi-step API
  orchestration on the server rather than mirror the raw underlying API
  one-to-one.
related:
  - INS-260410-AB4A
  - INS-260410-358E
  - INS-260514-1841
  - INS-260514-822C
  - INS-260522-C5C2
  - INS-260605-98BD
  - INS-260605-0819
  - INS-260605-D710
  - INS-260605-1A2D
  - INS-260605-37DA
---
A naive MCP server mirrors the platform API: one tool per endpoint. GitHub found this both unreliable and token-hungry. Their reliability push raised tool success to over 95%, mostly 'by encoding a sort of agent intent into our tool surface.' Where a robust operation might require five API calls, they perform all five inside the server during a single tool call. This collapses round trips, which 'saves context, saves time, and makes the agents more successful.'

The design principle is that the unit of a tool should be a unit of agent intent, not a unit of REST plumbing. Pushing orchestration server-side keeps the agent's context window clean (it sees one call and one result, not five) and removes whole classes of failure where an agent forgets a step or mis-sequences calls. They paired this with aggressive output-token trimming — tailoring exactly what a tool like list_pull_requests returns cut more than 75% of its output tokens. Note the limit: not all failure is preventable, since agents still hallucinate which repos they have write access to. Intent-based design fixes orchestration failures, not permission ignorance.

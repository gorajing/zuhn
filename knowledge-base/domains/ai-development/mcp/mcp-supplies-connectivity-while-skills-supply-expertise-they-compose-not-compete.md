---
id: INS-260627-2831
domain: ai-development
topic: mcp
title: >-
  MCP supplies connectivity while skills supply expertise — they compose, not
  compete
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - skills
  - agent-stack
  - integration
sources:
  - type: youtube
    title: >-
      Don't Build Agents, Build Skills Instead – Barry Zhang & Mahesh Murag,
      Anthropic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CEvIs9y1uog'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pair MCP servers (the connection to the outside world) with skills (the
    expertise to orchestrate that connectivity) rather than treating either as a
    substitute for the other.
  standard: >-
    The skills ecosystem is complementing, not replacing, the MCP server
    ecosystem built up over the year. Developers are building skills that
    orchestrate workflows across multiple MCP tools stitched together to do more
    complex things with external data — MCP provides the connection to the
    outside world while skills provide the expertise. In the converging
    architecture, an agent loop with a code runtime is connected to MCP servers
    for outside tools and data, and additionally given a library of hundreds of
    skills it pulls into context only at runtime. Anthropic used exactly this
    pattern to ship financial-services and life-sciences offerings: each came
    with a set of MCP servers plus a set of skills. The directional implication
    for builders: equipping an agent for a new vertical is increasingly a
    packaging exercise of the right MCP servers and the right skill library, not
    a from-scratch build.
stance: >-
  MCP servers and skills are complementary layers, with MCP providing connection
  to external data and skills providing the procedural expertise to use it.
related:
  - INS-260330-B771
  - INS-260403-13E6
  - INS-260410-8ECF
  - INS-260501-F90F
  - INS-260605-B794
  - INS-260605-E16A
  - INS-260625-7365
  - INS-260625-75D6
  - INS-260327-5AFE
  - INS-260627-E34D
---
The skills ecosystem is complementing, not replacing, the MCP server ecosystem built up over the year. Developers are building skills that orchestrate workflows across multiple MCP tools stitched together to do more complex things with external data — MCP provides the connection to the outside world while skills provide the expertise. In the converging architecture, an agent loop with a code runtime is connected to MCP servers for outside tools and data, and additionally given a library of hundreds of skills it pulls into context only at runtime. Anthropic used exactly this pattern to ship financial-services and life-sciences offerings: each came with a set of MCP servers plus a set of skills. The directional implication for builders: equipping an agent for a new vertical is increasingly a packaging exercise of the right MCP servers and the right skill library, not a from-scratch build.

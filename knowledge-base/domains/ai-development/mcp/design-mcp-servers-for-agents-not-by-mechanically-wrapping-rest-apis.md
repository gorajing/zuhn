---
id: INS-260626-7359
domain: ai-development
topic: mcp
title: 'Design MCP servers for agents, not by mechanically wrapping REST APIs'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - server-design
  - api-design
  - agent-ux
  - rich-semantics
sources:
  - type: youtube
    title: 'The Future of MCP — David Soria Parra, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v3Fr2JR47KA'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stop building REST-to-MCP conversion tools — design the server for the agent
    (start from how a human would want to interact) and use MCP's rich
    primitives rather than flattening endpoints into tools.
  standard: >-
    Soria Parra is openly critical of the common pattern of taking an existing
    REST API and auto-mapping each endpoint one-to-one into an MCP server — he
    calls it 'a bit cringe' because it produces 'horrible things.' A REST
    surface is shaped by HTTP resource conventions and human/programmatic
    callers, not by what an agent needs to accomplish a task, so the mechanical
    translation inherits the wrong granularity and semantics.


    The better starting point is to design for the agent — and a useful proxy is
    to design for how you, as a human, would actually want to interact with the
    capability, because that tends to be a good fit for an agent too. Beyond
    shaping the tools, server authors should lean into the rich semantics MCP
    offers over the alternatives: ship MCP applications (UI served over the
    protocol), skills over MCP, asynchronous tasks, and elicitations — things
    only MCP can do. These primitives are currently underused.


    The underlying principle is that agent-facing interfaces are a distinct
    design discipline, not a serialization of an existing API. The MCP-specific
    corollary is that the protocol's value is in its semantics (UI, long-running
    tasks, resources, governance), so a server that only exposes flattened
    endpoints leaves most of that value on the table.
stance: >-
  Auto-converting a REST API one-to-one into an MCP server produces bad agent
  experiences; servers should be designed around how an agent would actually
  want to interact.
related:
  - INS-260327-63B5
  - INS-260330-B771
  - INS-260514-6DB9
  - INS-260605-D710
  - INS-260625-2439
  - INS-260626-3C9A
  - INS-260626-6F6E
  - INS-260626-FEA0
  - INS-260627-ADB1
---
Soria Parra is openly critical of the common pattern of taking an existing REST API and auto-mapping each endpoint one-to-one into an MCP server — he calls it 'a bit cringe' because it produces 'horrible things.' A REST surface is shaped by HTTP resource conventions and human/programmatic callers, not by what an agent needs to accomplish a task, so the mechanical translation inherits the wrong granularity and semantics.

The better starting point is to design for the agent — and a useful proxy is to design for how you, as a human, would actually want to interact with the capability, because that tends to be a good fit for an agent too. Beyond shaping the tools, server authors should lean into the rich semantics MCP offers over the alternatives: ship MCP applications (UI served over the protocol), skills over MCP, asynchronous tasks, and elicitations — things only MCP can do. These primitives are currently underused.

The underlying principle is that agent-facing interfaces are a distinct design discipline, not a serialization of an existing API. The MCP-specific corollary is that the protocol's value is in its semantics (UI, long-running tasks, resources, governance), so a server that only exposes flattened endpoints leaves most of that value on the table.

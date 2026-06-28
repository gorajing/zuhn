---
id: INS-260627-E34D
domain: ai-development
topic: mcp
title: MCP supplies access; Skills supply expertise
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - agent-skills
  - tool-use
  - composition
sources:
  - type: youtube
    title: 'Katelyn Lesse – Evolving Claude APIs for Agents, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=aqW68Is_Kj4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP gives an agent access to external tools and context, while agent skills
    give it the domain expertise to actually use that access well — and they
    compose.
  standard: >-
    Lesse draws a clean division of labor: MCP (Model Context Protocol) is the
    standardized way for agents to reach external systems — it provides access
    to tools and to context that lives outside the agent's window. Agent skills
    are folders of scripts, instructions, and resources that Claude pulls into
    context based on a skill's description; they provide the expertise to make
    good use of those tools and that context. The web-design example makes it
    concrete: MCP might connect to GitHub, but a 'web design' skill is what
    knows the design system to follow when building a landing page.


    The actionable framing is to stop conflating 'can the agent reach X' with
    'does the agent know how to do X well.' When an agent underperforms,
    diagnose which layer is missing: it may have the tool access but no encoded
    expertise, or vice versa. Building both — connectors for access and skills
    for expertise — is how you get reliable, professional outputs rather than an
    agent that can technically call a tool but uses it naively.
stance: >-
  Agent capability decomposes into an access layer (tools and external context)
  and an expertise layer (how to use them well), and you need both.
related:
  - INS-260327-94FE
  - INS-260327-5AFE
  - INS-260501-C59A
  - INS-260501-F90F
  - INS-260514-4436
  - INS-260514-5914
  - INS-260522-213D
  - INS-260605-90E5
  - INS-260605-988D
  - INS-260605-6722
---
Lesse draws a clean division of labor: MCP (Model Context Protocol) is the standardized way for agents to reach external systems — it provides access to tools and to context that lives outside the agent's window. Agent skills are folders of scripts, instructions, and resources that Claude pulls into context based on a skill's description; they provide the expertise to make good use of those tools and that context. The web-design example makes it concrete: MCP might connect to GitHub, but a 'web design' skill is what knows the design system to follow when building a landing page.

The actionable framing is to stop conflating 'can the agent reach X' with 'does the agent know how to do X well.' When an agent underperforms, diagnose which layer is missing: it may have the tool access but no encoded expertise, or vice versa. Building both — connectors for access and skills for expertise — is how you get reliable, professional outputs rather than an agent that can technically call a tool but uses it naively.

---
id: INS-260627-962C
domain: ai-development
topic: mcp
title: A badly designed MCP server is automatically a badly secured one
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - security
  - interface-design
  - agentic-systems
  - owasp
sources:
  - type: youtube
    title: "Your Insecure MCP Server Won't Survive Production —\_Tun Shwe, Lenses"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BurJvbqFr4c'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Poor MCP design and poor MCP security compound each other; you cannot patch
    a bad interface with authentication.
  standard: >-
    Teams typically treat MCP design (which tools, what schemas, what responses)
    and MCP security (OAuth, TLS, rate limiting) as separate workstreams handled
    by different people at different times. Tun Shwe's thesis collapses them:
    every design choice casts a 'security shadow.' A server that exposes many
    fine-grained tools, accepts free-form payloads, or returns oversharing
    responses has already created the attack surface that OWASP's MCP Top 10
    enumerates, before any auth code is written.


    The practical consequence is sequencing. The five design principles (shrink
    the attack surface, constrain inputs at the schema level, treat docs as a
    defensive layer, return only what the agent needs, minimize blast radius)
    each give protection against the OWASP MCP Top 10 'before you write a single
    line of OAuth code.' OAuth controls who calls your server; it does nothing
    about a tool that can delete users when the agent only needed to check an
    order. If you get the design wrong, OAuth will faithfully authenticate the
    attacker into the vulnerability you built.


    The actionable reframe: review MCP design decisions through a security lens
    and security decisions through a design lens, treating them as one review
    rather than two gates. The fastest security win is usually deleting a tool,
    not adding a control.
stance: >-
  MCP design quality and MCP security are the same discipline, so no amount of
  OAuth can rescue a poorly scoped server.
related:
  - INS-260327-6D77
  - INS-260403-C3DF
  - INS-260403-4501
  - INS-260330-BA13
  - INS-260323-8D12
  - INS-260627-5A21
  - INS-260329-67CB
  - INS-260605-19B4
---
Teams typically treat MCP design (which tools, what schemas, what responses) and MCP security (OAuth, TLS, rate limiting) as separate workstreams handled by different people at different times. Tun Shwe's thesis collapses them: every design choice casts a 'security shadow.' A server that exposes many fine-grained tools, accepts free-form payloads, or returns oversharing responses has already created the attack surface that OWASP's MCP Top 10 enumerates, before any auth code is written.

The practical consequence is sequencing. The five design principles (shrink the attack surface, constrain inputs at the schema level, treat docs as a defensive layer, return only what the agent needs, minimize blast radius) each give protection against the OWASP MCP Top 10 'before you write a single line of OAuth code.' OAuth controls who calls your server; it does nothing about a tool that can delete users when the agent only needed to check an order. If you get the design wrong, OAuth will faithfully authenticate the attacker into the vulnerability you built.

The actionable reframe: review MCP design decisions through a security lens and security decisions through a design lens, treating them as one review rather than two gates. The fastest security win is usually deleting a tool, not adding a control.

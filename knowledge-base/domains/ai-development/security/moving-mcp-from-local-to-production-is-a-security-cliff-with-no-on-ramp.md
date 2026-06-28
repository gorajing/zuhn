---
id: INS-260627-5EB3
domain: ai-development
topic: security
title: Moving MCP from local to production is a security cliff with no on-ramp
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - security
  - deployment
  - transport
  - stdio-vs-http
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
    Going from local stdio to remote HTTP MCP flips you from zero security
    surface to OAuth, tokens, CORS, TLS, and rate limiting all at once, with no
    halfway house.
  standard: >-
    Local stdio MCP is a walled garden: a single local process, one user, no
    network exposure, no auth needed. It works beautifully for single-player
    developer productivity but cannot scale; StackLock's load test showed 20 of
    22 requests failing at just 20 simultaneous connections. The moment you add
    concurrency, stdio falls over, so to serve a team or a fleet of agents you
    must adopt the streamable HTTP transport.


    The trap is that this transition is a cliff, not a ramp. The instant you go
    remote you simultaneously need OAuth, token management, CORS configuration,
    TLS, and rate limiting, all at once. 'You can't do a little bit of
    production. You're either behind the wall or you're standing out in the
    open.' Teams that defer security planning assuming they can harden
    incrementally discover the entire OWASP-shaped surface appears in a single
    step.


    The planning implication: budget for the full production security stack as a
    precondition of remote deployment, not as a later iteration. And do not stay
    local 'and hope for the best' as an evasion; the concurrency ceiling of
    stdio forces the crossing as soon as the capability is shared. Treat the
    stdio-to-HTTP move as a discrete project with its own threat model, not a
    config flag.
stance: >-
  There is no incremental path from local stdio MCP to production remote MCP;
  security concerns must be adopted wholesale because you cannot do a little bit
  of production.
related:
  - INS-260322-37EE
  - INS-260423-9225
  - INS-260627-C0F1
  - INS-260514-8F90
  - INS-260403-C7E3
---
Local stdio MCP is a walled garden: a single local process, one user, no network exposure, no auth needed. It works beautifully for single-player developer productivity but cannot scale; StackLock's load test showed 20 of 22 requests failing at just 20 simultaneous connections. The moment you add concurrency, stdio falls over, so to serve a team or a fleet of agents you must adopt the streamable HTTP transport.

The trap is that this transition is a cliff, not a ramp. The instant you go remote you simultaneously need OAuth, token management, CORS configuration, TLS, and rate limiting, all at once. 'You can't do a little bit of production. You're either behind the wall or you're standing out in the open.' Teams that defer security planning assuming they can harden incrementally discover the entire OWASP-shaped surface appears in a single step.

The planning implication: budget for the full production security stack as a precondition of remote deployment, not as a later iteration. And do not stay local 'and hope for the best' as an evasion; the concurrency ceiling of stdio forces the crossing as soon as the capability is shared. Treat the stdio-to-HTTP move as a discrete project with its own threat model, not a config flag.

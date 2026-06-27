---
id: INS-260627-F851
domain: ai-development
topic: mcp
title: >-
  Whether you control the MCP client is the master variable for agent-interface
  design
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - architecture
  - agent-design
  - system-design
  - client-server
sources:
  - type: youtube
    title: 'Your MCP Server is Bad (and you should feel bad) - Jeremiah Lowin, Prefect'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=96G7FLab8xc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you own the client (internal tools, your own mobile app), you can do
    progressive disclosure, custom doc placement, masking, and elicitation; if
    you don't, you must design for the worst-possible client.
  standard: >-
    Lowin observes that 'honestly, many of the answers in MCP space boil down
    to: do you control the client?' When you do — an internal team standardized
    on one client, or a mobile app whose agentic interface you build — you gain
    real design freedom on both sides of the protocol. You can document a server
    as files or Claude skills instead of polluting context, knowing your
    workflows. You can rely on progressive disclosure, elicitation
    (mid-execution requests for more input), and per-tool masking, because you
    know how the client will handle them. You know the actual token budget and
    can optimize against it.


    When you don't control the client, you must assume the worst possible one.
    You must document everything in each tool's docstring, because the
    server-level instructions field isn't respected by every client (and Claude
    Desktop, for instance, hashes tools into SQLite on first contact and ignores
    later spec-compliant updates like notifications). Spec-compliant techniques
    for shrinking the handshake can silently fail in non-compliant clients. For
    external-facing servers facing a heavy fixed tool set (his example: a
    company with 800 endpoints that wouldn't fit any context budget), there is
    often simply no good solution — the constraint is the uncontrolled client,
    not the protocol. So before choosing an architecture, settle this question
    first; it gates every other option.
stance: >-
  The single question 'do you control the client?' determines which
  agent-interface optimizations are available — most MCP design tradeoffs
  bifurcate on its answer.
related:
  - INS-260327-63B5
  - INS-260514-A15D
  - INS-260323-2559
  - PRI-260407-B808
  - PRI-260328-FD47
---
Lowin observes that 'honestly, many of the answers in MCP space boil down to: do you control the client?' When you do — an internal team standardized on one client, or a mobile app whose agentic interface you build — you gain real design freedom on both sides of the protocol. You can document a server as files or Claude skills instead of polluting context, knowing your workflows. You can rely on progressive disclosure, elicitation (mid-execution requests for more input), and per-tool masking, because you know how the client will handle them. You know the actual token budget and can optimize against it.

When you don't control the client, you must assume the worst possible one. You must document everything in each tool's docstring, because the server-level instructions field isn't respected by every client (and Claude Desktop, for instance, hashes tools into SQLite on first contact and ignores later spec-compliant updates like notifications). Spec-compliant techniques for shrinking the handshake can silently fail in non-compliant clients. For external-facing servers facing a heavy fixed tool set (his example: a company with 800 endpoints that wouldn't fit any context budget), there is often simply no good solution — the constraint is the uncontrolled client, not the protocol. So before choosing an architecture, settle this question first; it gates every other option.

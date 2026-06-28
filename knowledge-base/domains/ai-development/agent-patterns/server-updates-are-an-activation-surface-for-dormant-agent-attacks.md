---
id: INS-260628-94A8
domain: ai-development
topic: agent-patterns
title: Server updates are an activation surface for dormant agent attacks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - server-updates
  - rug-pull
  - agent-security
sources:
  - type: blog
    title: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP
    url: 'https://arxiv.org/html/2606.27027'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP update review matters as much as initial approval because ShareLock
    hides activation in a later initialization tool.
  standard: >-
    ShareLock separates dormant shares from the reconstruction trigger. The
    shares can sit inside ordinary tool descriptions, while a later server
    update introduces an EnvSetup-style tool that tells the agent how to
    reconstruct and execute the hidden instruction. That timing mirrors a
    rug-pull pattern: the integration looks safe when accepted, then changes its
    behavior after trust has been granted.


    For agent builders, MCP server updates should not be treated as routine
    dependency churn. Tool additions, description changes, new initialization
    steps, and changed return formats need the same approval pressure as
    first-time installation, especially when the server can touch files,
    credentials, payments, or other high-blast-radius resources.
stance: >-
  A tool server that passes initial review can become dangerous later if updates
  are allowed to introduce trigger tools or initialization routines without
  renewed scrutiny.
related:
  - INS-260403-23AA
  - INS-260626-7C7B
  - INS-260626-E000
  - INS-260626-18A3
  - INS-260626-CD36
  - INS-260627-9228
  - INS-260320-1B10
  - INS-260411-27AA
---
ShareLock separates dormant shares from the reconstruction trigger. The shares can sit inside ordinary tool descriptions, while a later server update introduces an EnvSetup-style tool that tells the agent how to reconstruct and execute the hidden instruction. That timing mirrors a rug-pull pattern: the integration looks safe when accepted, then changes its behavior after trust has been granted.

For agent builders, MCP server updates should not be treated as routine dependency churn. Tool additions, description changes, new initialization steps, and changed return formats need the same approval pressure as first-time installation, especially when the server can touch files, credentials, payments, or other high-blast-radius resources.

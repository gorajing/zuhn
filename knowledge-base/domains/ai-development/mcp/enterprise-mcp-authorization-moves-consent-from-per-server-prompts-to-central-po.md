---
id: INS-260626-8B56
domain: ai-development
topic: mcp
title: >-
  Enterprise MCP authorization moves consent from per-server prompts to central
  policy
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - mcp
  - oauth
  - authorization
  - enterprise
sources:
  - type: blog
    title: Model Context Protocol Blog
    author: The MCP project
    url: 'https://blog.modelcontextprotocol.io/'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP tool access should be audited against the enterprise policy authority
    that granted it.
  standard: >-
    Stable EMA is a meaningful security and operations primitive for MCP at
    scale. It reduces repeated consent prompts and makes connected MCP servers
    usable in enterprise environments, but the permission boundary moves upward
    into central policy. AgentRun should capture authorization_mode,
    policy_authority, server identity, and whether the run used user-granted,
    enterprise-managed, or local credentials.
  deep: >-
    This matters for Zuhn because MCP tools are increasingly ambient in agent
    sessions. If access is centrally managed, a future run may have capabilities
    the user did not explicitly approve in that session. Recording policy
    provenance keeps post-run review honest about why the agent could see or
    mutate a resource.
subtopic: authorization
stance: >-
  MCP Enterprise-Managed Authorization makes authorization a centrally governed
  organization primitive rather than a repeated per-server consent interaction.
  This improves deployability, but it means agent traces need to record policy
  authority and token audience, not just the MCP server name.
related:
  - INS-260605-013A
  - INS-260626-F069
  - INS-260403-23AA
  - INS-260625-BEFE
  - INS-260605-3588
---
Stable EMA is a meaningful security and operations primitive for MCP at scale. It reduces repeated consent prompts and makes connected MCP servers usable in enterprise environments, but the permission boundary moves upward into central policy. AgentRun should capture authorization_mode, policy_authority, server identity, and whether the run used user-granted, enterprise-managed, or local credentials.

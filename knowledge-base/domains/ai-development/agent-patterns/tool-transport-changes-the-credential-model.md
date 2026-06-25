---
id: INS-260605-52E4
domain: ai-development
topic: agent-patterns
title: Tool transport changes the credential model
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - mcp
  - stdio
  - http-transport
  - credentials
  - agent-tools
sources:
  - type: blog
    title: Authorization - Model Context Protocol
    url: >-
      https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Local tools and remote tools should not share the same credential
    assumptions.
  standard: >-
    The MCP Authorization spec says HTTP transports should conform to the OAuth
    authorization flow when authorization is supported, while STDIO transports
    should not follow this flow and should retrieve credentials from the
    environment. That distinction is easy to miss when all tools appear in one
    agent UI.


    Harness policy should therefore classify tools by transport. Local STDIO
    tools need environment and filesystem isolation; remote HTTP tools need
    resource indicators, audience validation, scope and expiry, and redirect
    safety. One generic 'tools allowed' list is not enough authority modeling.
stance: >-
  A harness should treat STDIO tools and HTTP tools as different trust regimes
  because MCP authorization expects local STDIO credentials from the environment
  and HTTP credentials from transport-level OAuth.
related:
  - INS-260328-6898
  - INS-260605-3588
  - INS-260409-665F
  - INS-260625-FACB
  - INS-260403-9C60
---
The MCP Authorization spec says HTTP transports should conform to the OAuth authorization flow when authorization is supported, while STDIO transports should not follow this flow and should retrieve credentials from the environment. That distinction is easy to miss when all tools appear in one agent UI.

Harness policy should therefore classify tools by transport. Local STDIO tools need environment and filesystem isolation; remote HTTP tools need resource indicators, audience validation, scope and expiry, and redirect safety. One generic 'tools allowed' list is not enough authority modeling.

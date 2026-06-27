---
id: INS-260627-1B11
domain: ai-development
topic: mcp
title: MCP becomes safer when mediated by a policy proxy instead of exposed directly
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-use
  - policy
  - authorization
  - agent-infrastructure
sources:
  - type: blog
    title: >-
      A hardware-safety-gated system for LLM-written native ARTIQ control code
      on a trapped-ion platform
    url: 'https://arxiv.org/html/2606.27231'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The agent never talks directly to artiq-mcp; it talks to a safety-filter
    proxy that authorizes or blocks each call before forwarding it.
  standard: >-
    The paper's artiq-mcp server wraps ARTIQ functions as normal agent-callable
    tools, while a separate safety-filter MCP proxy is the exclusive path
    between the agent and backend tools. That proxy binds approval tokens to
    call contents, enforces block-by-default behavior, and keeps audit logs.


    For MCP-based agent products, the implication is that raw tool exposure is
    rarely the right security boundary. The safer architecture is a mediating
    layer that understands policy, effect classes, token scope, and audit
    requirements, while backend MCP servers remain capability adapters.
stance: >-
  MCP tool servers should often sit behind a policy-enforcing proxy because the
  protocol exposes useful capabilities but does not itself define sufficient
  authority boundaries.
related:
  - INS-260626-091B
  - INS-260626-A499
  - INS-260605-41AE
  - INS-260625-DD6D
  - INS-260627-35B1
---
The paper's artiq-mcp server wraps ARTIQ functions as normal agent-callable tools, while a separate safety-filter MCP proxy is the exclusive path between the agent and backend tools. That proxy binds approval tokens to call contents, enforces block-by-default behavior, and keeps audit logs.

For MCP-based agent products, the implication is that raw tool exposure is rarely the right security boundary. The safer architecture is a mediating layer that understands policy, effect classes, token scope, and audit requirements, while backend MCP servers remain capability adapters.

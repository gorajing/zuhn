---
id: INS-260628-573E
domain: ai-development
topic: agent-evals
title: 'Toolchain attacks should be tested across clients, not only models'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - mcp
  - clients
  - tool-orchestration
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
    ShareLock evaluates both models and MCP clients, which is the right shape
    for agent security because orchestration behavior is part of the attack
    surface.
  standard: >-
    The paper evaluates mainstream LLMs across two MCP clients, Cherry Studio
    and Cline, and observes that attack success depends on the model's tool-use
    stability and the client-mediated workflow. That matters because MCP
    security is not just a property of the language model. The client decides
    which tools are exposed, how descriptions enter context, how calls are
    approved, and how tool results return to the model.


    For agent/eval infrastructure, treat model, client, server, permission
    policy, and approval UI as separate experimental factors. A model-only
    safety score will miss failures introduced by a permissive client or a
    server update path that silently changes tool metadata.
stance: >-
  Agent security results are incomplete if they vary only the base LLM while
  holding the MCP client and tool orchestration environment fixed.
related:
  - INS-260327-7299
  - INS-260327-76B2
  - INS-260403-2FAE
  - INS-260605-310E
  - INS-260605-0A68
  - INS-260605-5CF8
  - INS-260625-D943
  - INS-260625-386B
  - INS-260627-1CF9
  - INS-260627-08FA
---
The paper evaluates mainstream LLMs across two MCP clients, Cherry Studio and Cline, and observes that attack success depends on the model's tool-use stability and the client-mediated workflow. That matters because MCP security is not just a property of the language model. The client decides which tools are exposed, how descriptions enter context, how calls are approved, and how tool results return to the model.

For agent/eval infrastructure, treat model, client, server, permission policy, and approval UI as separate experimental factors. A model-only safety score will miss failures introduced by a permissive client or a server update path that silently changes tool metadata.

---
id: INS-260605-8AFF
domain: ai-development
topic: governance
title: Tool allowlists do not cover every execution path
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-security
  - tool-permissions
  - iam
  - harness
  - defense-in-depth
sources:
  - type: blog
    title: Connect to tools - Amazon Bedrock AgentCore
    url: >-
      https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/harness-tools.html
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Scope the model's tools and the runtime's direct command permissions
    separately.
  standard: >-
    AWS AgentCore documents that `allowedTools` scopes LLM tool selection during
    harness invocation, but does not affect `InvokeAgentRuntimeCommand`, a
    separate IAM-controlled API that executes commands directly without passing
    through the LLM. Preventing that path requires not granting the runtime
    command IAM action.


    The general harness lesson is that policy must cover all control planes, not
    just the model-facing one. A UI may show 'the agent cannot use shell,' while
    an infrastructure API still allows direct shell execution. Security reviews
    should enumerate every path that can cause side effects.
stance: >-
  A harness-level tool allowlist is insufficient unless the surrounding
  infrastructure permissions also block direct runtime command APIs that bypass
  the model loop.
related:
  - INS-260626-F069
  - INS-260626-07B6
  - INS-260605-BC6F
  - INS-260625-0148
  - INS-260627-CEC6
---
AWS AgentCore documents that `allowedTools` scopes LLM tool selection during harness invocation, but does not affect `InvokeAgentRuntimeCommand`, a separate IAM-controlled API that executes commands directly without passing through the LLM. Preventing that path requires not granting the runtime command IAM action.

The general harness lesson is that policy must cover all control planes, not just the model-facing one. A UI may show 'the agent cannot use shell,' while an infrastructure API still allows direct shell execution. Security reviews should enumerate every path that can cause side effects.

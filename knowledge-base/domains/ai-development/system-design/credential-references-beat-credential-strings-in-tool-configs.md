---
id: INS-260605-5F0C
domain: ai-development
topic: system-design
title: Credential references beat credential strings in tool configs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - credentials
  - token-vault
  - agent-security
  - tool-config
  - secret-isolation
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
  one_line: 'Put credential handles in manifests, not credentials.'
  standard: >-
    AgentCore's documentation shows remote MCP tools using AgentCore Identity
    Token Vault ARNs inside headers, with the ARN resolved to the actual API key
    at invocation time. It also recommends Gateway and Identity for managed
    credential rotation and OAuth-protected tools.


    This suggests a general manifest rule: agent-visible tool config should
    contain opaque credential references, not secrets. The harness or proxy can
    resolve those references under policy, log their use, rotate them, and
    prevent prompt-injected code from reading raw tokens.
stance: >-
  Agent tool configurations should reference credential providers instead of
  embedding secret strings, so credentials resolve at invocation time outside
  the model-visible harness surface.
related:
  - INS-260626-60DB
  - INS-260412-1440
  - INS-260329-C81C
  - INS-260405-B22F
  - INS-260410-992A
---
AgentCore's documentation shows remote MCP tools using AgentCore Identity Token Vault ARNs inside headers, with the ARN resolved to the actual API key at invocation time. It also recommends Gateway and Identity for managed credential rotation and OAuth-protected tools.

This suggests a general manifest rule: agent-visible tool config should contain opaque credential references, not secrets. The harness or proxy can resolve those references under policy, log their use, rotate them, and prevent prompt-injected code from reading raw tokens.

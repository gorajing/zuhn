---
id: INS-260605-E7AD
domain: ai-development
topic: agent-patterns
title: 'Inline functions are approval gates, not ordinary tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - approval-gates
  - inline-functions
  - agent-tools
  - policy
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
    Use inline functions when the host, not the model, must retain decision
    authority.
  standard: >-
    AgentCore distinguishes inline functions from tools that execute on the
    harness VM: an inline function call returns to client code, which decides
    what to do and sends a result back. AWS explicitly points to this for human
    approvals and custom integrations.


    This is a crisp design primitive for local agent harnesses. Approval should
    not be an agent politely asking in chat and then continuing. It should be a
    typed pause where trusted host code or a human policy UI approves, edits,
    rejects, or substitutes the action, with the result recorded in the run
    ledger.
stance: >-
  Client-side inline functions are the clean harness pattern for approvals and
  sensitive integrations because they pause the agent and let trusted host code
  decide the outcome.
related:
  - INS-260625-5E87
  - INS-260329-9CFE
  - INS-260626-15F3
  - INS-260605-4860
  - INS-260403-BA81
  - INS-260626-2133
---
AgentCore distinguishes inline functions from tools that execute on the harness VM: an inline function call returns to client code, which decides what to do and sends a result back. AWS explicitly points to this for human approvals and custom integrations.

This is a crisp design primitive for local agent harnesses. Approval should not be an agent politely asking in chat and then continuing. It should be a typed pause where trusted host code or a human policy UI approves, edits, rejects, or substitutes the action, with the result recorded in the run ledger.

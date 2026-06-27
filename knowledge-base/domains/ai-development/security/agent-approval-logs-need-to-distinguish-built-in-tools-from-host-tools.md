---
id: INS-260626-F069
domain: ai-development
topic: security
title: Agent approval logs need to distinguish built-in tools from host tools
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - vercel-ai-sdk
  - tool-approvals
  - opencode
  - deepagents
  - permissions
sources:
  - type: blog
    title: Deep Agents and OpenCode are now available in the AI SDK Harness - Vercel
    url: 'https://vercel.com/changelog/deepagents-and-opencode-harness-adapters'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Approval records should include tool authority and runtime boundary.
  standard: >-
    The adapter update surfaces an important permission distinction. Built-in
    tools belong to the coding-agent runtime; host tools belong to the embedding
    application. A trace that only says 'approved tool call' cannot explain
    whether the user approved a sandbox-local file operation, a host-provided
    capability, or a bridge across that boundary. AgentRun should add
    approval-origin fields for built-in runtime tools versus host tools.
  deep: >-
    This becomes more important as runtimes are wrapped by third-party
    harnesses. The same visible action, such as editing a file or running a
    shell command, may be governed by different policy layers depending on
    whether it is implemented inside OpenCode, Deep Agents, Vercel Sandbox, or
    the host app. Incident review needs that boundary.
subtopic: tool-approvals
stance: >-
  Vercel's OpenCode and Deep Agents adapters exposing both built-in and host
  tool approvals means an approval event is incomplete unless it names which
  authority owned the tool.
related:
  - INS-260605-013A
  - INS-260605-8AFF
  - INS-260626-8B56
  - INS-260626-FC7A
  - INS-260626-C563
---
The adapter update surfaces an important permission distinction. Built-in tools belong to the coding-agent runtime; host tools belong to the embedding application. A trace that only says 'approved tool call' cannot explain whether the user approved a sandbox-local file operation, a host-provided capability, or a bridge across that boundary. AgentRun should add approval-origin fields for built-in runtime tools versus host tools.

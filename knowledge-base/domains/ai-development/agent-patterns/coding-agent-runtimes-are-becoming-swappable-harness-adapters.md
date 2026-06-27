---
id: INS-260626-CC4A
domain: ai-development
topic: agent-patterns
title: Coding-agent runtimes are becoming swappable harness adapters
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - vercel-ai-sdk
  - harness
  - coding-agents
  - runtime-adapters
  - sandbox
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
  one_line: Record harness adapter identity whenever comparing agent runs.
  standard: >-
    The AI SDK Harness now spans Claude Code, Codex, Deep Agents, OpenCode, and
    Pi. That makes it easier to swap coding-agent runtimes without rewriting
    application code, but it also means behavior depends on the adapter's tool
    surface, sandbox semantics, session model, and approval implementation.
    AgentRun should store the harness name, sandbox provider, runtime version,
    and event stream format for any run mediated through a common harness.
  deep: >-
    This is a stronger primitive than another model route because it
    commoditizes the shell around the model. Once multiple coding agents share
    an interface, platform builders can run A/B evals across runtimes, fallback
    between runtimes, or route tasks by tool/approval needs. The danger is false
    equivalence: two adapters behind the same `HarnessAgent` can still differ
    radically in filesystem persistence, host-tool exposure, and recovery
    behavior.
subtopic: runtime-adapters
stance: >-
  Vercel adding Deep Agents and OpenCode to AI SDK Harness confirms that coding
  agents are turning into runtime plugins behind a common application interface,
  so traces must identify the harness adapter, not just the model.
related:
  - INS-260626-4639
  - INS-260514-4FDC
  - INS-260626-5B28
  - INS-260625-9096
  - PRI-260426-890F
---
The AI SDK Harness now spans Claude Code, Codex, Deep Agents, OpenCode, and Pi. That makes it easier to swap coding-agent runtimes without rewriting application code, but it also means behavior depends on the adapter's tool surface, sandbox semantics, session model, and approval implementation. AgentRun should store the harness name, sandbox provider, runtime version, and event stream format for any run mediated through a common harness.

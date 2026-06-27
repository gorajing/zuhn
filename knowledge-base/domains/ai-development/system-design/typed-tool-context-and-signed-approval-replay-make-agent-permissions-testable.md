---
id: INS-260626-FC7A
domain: ai-development
topic: system-design
title: Typed tool context and signed approval replay make agent permissions testable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - permissions
  - tool-calling
  - approval-replay
  - runtime-context
sources:
  - type: blog
    title: AI SDK 7 is now available - Vercel
    url: 'https://vercel.com/changelog/ai-sdk-7'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI SDK 7 turns per-tool context, approval policies, HMAC-bound approval
    replay, and timeouts into explicit runtime controls.
  standard: >-
    The important change is not just more agent features; it is that the
    permission boundary is becoming programmable. Tools can declare a
    contextSchema, callers pass scoped toolsContext, high-risk tool calls can
    require approval, approvals can be revalidated before continuation, and HMAC
    signing binds the original tool inputs to the approval token. First-class
    total, step, chunk, and tool timeout budgets add another explicit failure
    boundary.


    AgentRun should mirror this shape. Side effects should not be recorded only
    as prose; they should carry required approval state, scoped credential
    exposure, timeout budget, and replay evidence. This also gives Zuhn a design
    cue for future MCP/tool integrations: prefer typed context injection and
    approval artifacts over broad environment variables or prompt-level
    promises.
stance: >-
  Agent safety improves when secrets, tool context, approval policy, and
  approval replay are explicit typed runtime surfaces instead of hidden prompt
  conventions.
related:
  - INS-260403-23AA
  - INS-260411-27AA
  - INS-260625-BEFE
  - INS-260625-99B0
  - INS-260626-04E5
  - INS-260626-F069
---
The important change is not just more agent features; it is that the permission boundary is becoming programmable. Tools can declare a contextSchema, callers pass scoped toolsContext, high-risk tool calls can require approval, approvals can be revalidated before continuation, and HMAC signing binds the original tool inputs to the approval token. First-class total, step, chunk, and tool timeout budgets add another explicit failure boundary.

AgentRun should mirror this shape. Side effects should not be recorded only as prose; they should carry required approval state, scoped credential exposure, timeout budget, and replay evidence. This also gives Zuhn a design cue for future MCP/tool integrations: prefer typed context injection and approval artifacts over broad environment variables or prompt-level promises.

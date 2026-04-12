---
id: INS-260411-52C8
domain: ai-development
topic: agent-patterns
title: >-
  Parallel fan-out agents must write to unique state keys to avoid race
  conditions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - parallel-agents
  - race-conditions
  - state-management
  - concurrency
  - adk
sources:
  - type: blog
    title: Developer’s guide to multi-agent patterns in ADK- Google Developers Blog
    url: >-
      https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/
date_extracted: '2026-04-11'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When running agents in parallel with shared session state, assign each agent
    a unique output_key to prevent data corruption.
  standard: >-
    Google's ParallelAgent primitive runs sub-agents simultaneously to reduce
    latency — for example, a SecurityAuditor, StyleEnforcer, and
    PerformanceAnalyst reviewing code at the same time. However, because these
    agents share the same session.state, concurrent writes to the same key will
    corrupt data.


    The fix is simple but critical: each parallel agent must write to a unique
    key (security_report, style_report, performance_report), with a downstream
    synthesizer reading all keys. This is the agent-world equivalent of
    thread-safe programming — same principle, new context. Teams that skip this
    step get non-deterministic failures that are extremely hard to reproduce.
stance: >-
  Parallel agents sharing session state will produce corrupt results unless each
  agent writes to a distinct output key, because shared-state concurrency in
  agent systems creates the same race conditions as in traditional software.
related:
  - INS-260329-0EAC
  - INS-260410-62E8
  - INS-260410-566F
  - INS-260411-D060
  - INS-260323-2E51
  - INS-260321-18D0
  - INS-260330-7E4F
---
Google's ParallelAgent primitive runs sub-agents simultaneously to reduce latency — for example, a SecurityAuditor, StyleEnforcer, and PerformanceAnalyst reviewing code at the same time. However, because these agents share the same session.state, concurrent writes to the same key will corrupt data.

The fix is simple but critical: each parallel agent must write to a unique key (security_report, style_report, performance_report), with a downstream synthesizer reading all keys. This is the agent-world equivalent of thread-safe programming — same principle, new context. Teams that skip this step get non-deterministic failures that are extremely hard to reproduce.

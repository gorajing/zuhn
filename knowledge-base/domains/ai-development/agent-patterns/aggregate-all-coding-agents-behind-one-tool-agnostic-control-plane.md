---
id: INS-260605-0628
domain: ai-development
topic: agent-patterns
title: Aggregate all coding agents behind one tool-agnostic control plane
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - control-plane
  - single-pane-of-glass
  - multi-agent
  - architecture
  - interoperability
sources:
  - type: youtube
    title: >-
      Let's Talk About FOMAT: Fear of Missing Agent Time — Michael Richman,
      Cmd+Ctrl
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W-SX_srBa3Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run a lightweight daemon next to each agent platform that reports lifecycle
    to a central control plane, so all sessions are reachable through one UI
    regardless of tool or location.
  standard: >-
    Richman's architecture puts a Command and Control daemon alongside each
    agent platform (Claude Code, Cursor, Codex, Gemini, Open Code). Each daemon
    monitors its agent's lifecycle and reports up to a shared control-plane
    layer; the UI then talks back to that layer. The control plane aggregates
    every agent regardless of whether it runs on a dev Mac, a cloud VM, or both.


    The design principle is tool-agnosticism by default: the daemon layer is
    open source so any framework can plug in, and a single UI then reaches all
    of them. This is the standard observability/control-plane pattern
    (agent-side collectors → central aggregator → client) applied to the
    heterogeneous, fast-moving coding-agent ecosystem. The bet is that no single
    vendor's tool will win, so the durable layer is the one that unifies them —
    'whatever your agent, you can reach it, and it can reach you.'
stance: >-
  Multi-agent workflows need a single pane of glass that unifies sessions across
  every coding tool, machine, and cloud VM.
related:
  - INS-260327-FE24
  - INS-260605-0C56
  - INS-260605-D710
  - INS-260605-83DA
  - INS-260619-90F6
---
Richman's architecture puts a Command and Control daemon alongside each agent platform (Claude Code, Cursor, Codex, Gemini, Open Code). Each daemon monitors its agent's lifecycle and reports up to a shared control-plane layer; the UI then talks back to that layer. The control plane aggregates every agent regardless of whether it runs on a dev Mac, a cloud VM, or both.

The design principle is tool-agnosticism by default: the daemon layer is open source so any framework can plug in, and a single UI then reaches all of them. This is the standard observability/control-plane pattern (agent-side collectors → central aggregator → client) applied to the heterogeneous, fast-moving coding-agent ecosystem. The bet is that no single vendor's tool will win, so the durable layer is the one that unifies them — 'whatever your agent, you can reach it, and it can reach you.'

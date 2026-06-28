---
id: INS-260627-AB66
domain: ai-development
topic: tooling
title: Put tool governance at the gateway boundary
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - security
  - tools
  - governance
sources:
  - type: blog
    title: >-
      GitHub - tsouth89/conduit: One local gateway for all your MCP servers, set
      up once and shared by every AI client (Claude, Cursor, VS Code, Codex).
      Lazy discovery collapses them to 3 meta-tools the agent searches on
      demand, ~90% fewer tokens. Keys in your OS keychain, no cloud.
    url: 'https://github.com/tsouth89/conduit'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'Centralize tool policy where calls route, not inside each agent prompt.'
  standard: >-
    Conduit uses the gateway as a choke point: per-client profiles limit which
    servers are visible, destructive tools can be hidden or blocked, tool
    definitions are fingerprinted for drift, and suspicious tool results are
    labeled as external data. The tradeoff is that the gateway becomes critical
    infrastructure and must be observable itself. For AgentRun, similar policy
    should live beside tool dispatch and produce auditable side-effect records
    rather than relying on prompt reminders.
  deep: >-
    The pattern is especially relevant for mixed-trust workflows: user-facing
    agents, browser agents, and coding agents should not each implement their
    own one-off tool safety logic. A shared dispatcher can make policy changes
    visible, testable, and consistent across clients.
subtopic: mcp-security
stance: >-
  An agent tool gateway is the right place to enforce profile scoping,
  destructive-tool policy, tool drift detection, and untrusted-result labeling
  because every tool call crosses that boundary.
related:
  - INS-260605-0819
  - INS-260624-B6EA
  - INS-260625-73BD
  - INS-260626-091B
  - INS-260626-A499
  - INS-260626-BC79
  - INS-260626-8A80
  - INS-260627-1B11
  - INS-260605-6591
  - INS-260602-EA48
---
Conduit uses the gateway as a choke point: per-client profiles limit which servers are visible, destructive tools can be hidden or blocked, tool definitions are fingerprinted for drift, and suspicious tool results are labeled as external data. The tradeoff is that the gateway becomes critical infrastructure and must be observable itself. For AgentRun, similar policy should live beside tool dispatch and produce auditable side-effect records rather than relying on prompt reminders.

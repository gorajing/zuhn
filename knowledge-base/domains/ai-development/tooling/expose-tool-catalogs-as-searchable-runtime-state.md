---
id: INS-260627-B2C4
domain: ai-development
topic: tooling
title: Expose tool catalogs as searchable runtime state
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - tooling
  - context-management
  - agent-architecture
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
  one_line: >-
    Replace flat tool exposure with lazy discovery when the available tool
    surface is larger than the task needs.
  standard: >-
    Conduit's mechanism is to advertise three stable meta-tools, then let the
    agent search and call downstream tools on demand. The tradeoff is an extra
    search round trip and a dependency on retrieval quality, but the benefit is
    a flatter context cost as tool count grows. For Zuhn/AgentRun, this argues
    for treating large tool or source catalogs as runtime-searchable state with
    measured recall, not as always-on prompt inventory.
  deep: >-
    Verification should compare task success and total tokens in flat versus
    lazy modes, not just count removed schema tokens. A lazy layer is only
    justified if it preserves correct tool selection on realistic tasks;
    otherwise it saves context by hiding necessary affordances.
subtopic: mcp
stance: >-
  Large MCP/tool catalogs should be represented to agents as a tiny
  search-and-call interface instead of loading every tool schema into every
  model request.
related:
  - INS-260402-AC3D
  - INS-260410-60C8
  - INS-260605-92FF
  - INS-260626-181F
  - PRI-260411-9CB1
  - INS-260626-1BB0
---
Conduit's mechanism is to advertise three stable meta-tools, then let the agent search and call downstream tools on demand. The tradeoff is an extra search round trip and a dependency on retrieval quality, but the benefit is a flatter context cost as tool count grows. For Zuhn/AgentRun, this argues for treating large tool or source catalogs as runtime-searchable state with measured recall, not as always-on prompt inventory.

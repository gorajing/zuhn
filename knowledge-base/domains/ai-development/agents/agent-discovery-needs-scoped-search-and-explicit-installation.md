---
id: INS-260626-7C7B
domain: ai-development
topic: agents
title: Agent discovery needs scoped search and explicit installation
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - copilot
  - ard
  - capability-discovery
  - mcp
sources:
  - type: blog
    title: Agent finder for GitHub Copilot now available
    author: Allison
    url: >-
      https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Zuhn should prefer search-before-install for skills and tools, with explicit
    approval before wiring anything in.
  standard: >-
    Agent Finder turns tool discovery into a runtime operation while preserving
    control over catalogs and installation. This is a direct pattern for Zuhn
    and AgentRun: keep a searchable registry of skills, MCP servers, and
    automation affordances, but record the registry scope and require explicit
    installation or activation before the agent can use a capability.
  deep: >-
    The risk is that discovery without scoping becomes context stuffing by
    another name. GitHub's design points to the better invariant: the model can
    ask what exists, rank candidates, and explain why a capability fits, while
    enterprise policy determines which registry is visible and the human or
    runner decides what gets connected.
subtopic: capability-discovery
stance: >-
  GitHub's Agent Finder confirms that capability discovery is moving away from
  preloading every MCP server, skill, and tool into context. The useful
  primitive is a governed search layer: agents can rank resources from an
  approved registry, but installation remains explicit rather than automatic.
related:
  - PRI-260322-3DA5
  - INS-260602-EA48
  - INS-260624-E89C
  - INS-260626-E56B
  - INS-260403-648C
---
Agent Finder turns tool discovery into a runtime operation while preserving control over catalogs and installation. This is a direct pattern for Zuhn and AgentRun: keep a searchable registry of skills, MCP servers, and automation affordances, but record the registry scope and require explicit installation or activation before the agent can use a capability.

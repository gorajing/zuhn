---
id: INS-260605-0A68
domain: ai-development
topic: architecture
title: ACP standardizes human-agent interaction the way MCP standardizes tool access
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - acp
  - mcp
  - protocols
  - interoperability
  - agent-frameworks
sources:
  - type: youtube
    title: 'Scaling Agents on Kubernetes with acpx and ACP — Onur Solmaz, OpenClaw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VaS2h-dY1-4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MCP gives tools to the model; ACP standardizes how a client (human or
    another agent) drives an agent — two orthogonal layers, not competitors.
  standard: >-
    Most people conflate ACP (Agent Client Protocol) with MCP, but they solve
    different problems. MCP is about giving tools to a model. ACP standardizes
    the agent-to-client interaction surface — how a human (or another agent
    acting as a client) initiates, steers, and receives output from an agent
    session. The payoff is the same logic that makes MCP valuable: instead of
    every editor (VS Code, Zed, Cloud Code) building its own bespoke plugin
    against each agent, you build the integration once against the standard and
    ship everywhere.


    The practical lesson for anyone building agent tooling is to separate these
    concerns. A tool-provisioning protocol and a client-interaction protocol can
    coexist, and you will eventually want both plus agent-to-agent protocols.
    Solmaz notes an agent can even use the human-facing client protocol to talk
    to other agents, so the boundaries blur — but recognizing that 'how do I
    give the agent capabilities' and 'how do I drive the agent' are distinct
    axes prevents you from building one monolithic, IDE-specific integration
    that has to be rewritten for every new harness.
stance: >-
  Agent interoperability requires a separate protocol layer for client-agent
  interaction, not just a tool-provisioning protocol like MCP.
related:
  - INS-260410-FEFA
  - INS-260514-33FB
  - INS-260605-20DD
  - INS-260326-2410
  - INS-260501-2A52
  - INS-260519-20E0
  - INS-260624-B6EA
  - INS-260625-75D6
---
Most people conflate ACP (Agent Client Protocol) with MCP, but they solve different problems. MCP is about giving tools to a model. ACP standardizes the agent-to-client interaction surface — how a human (or another agent acting as a client) initiates, steers, and receives output from an agent session. The payoff is the same logic that makes MCP valuable: instead of every editor (VS Code, Zed, Cloud Code) building its own bespoke plugin against each agent, you build the integration once against the standard and ship everywhere.

The practical lesson for anyone building agent tooling is to separate these concerns. A tool-provisioning protocol and a client-interaction protocol can coexist, and you will eventually want both plus agent-to-agent protocols. Solmaz notes an agent can even use the human-facing client protocol to talk to other agents, so the boundaries blur — but recognizing that 'how do I give the agent capabilities' and 'how do I drive the agent' are distinct axes prevents you from building one monolithic, IDE-specific integration that has to be rewritten for every new harness.

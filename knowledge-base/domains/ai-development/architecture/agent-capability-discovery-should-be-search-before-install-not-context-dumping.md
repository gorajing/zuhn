---
id: INS-260626-3ACC
domain: ai-development
topic: architecture
title: >-
  Agent capability discovery should be search-before-install, not context
  dumping
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - capability-discovery
  - mcp
  - skills
  - registries
sources:
  - type: blog
    title: 'Agentic Resource Discovery: Let agents search'
    author: ben burtenshaw
    url: 'https://huggingface.co/blog/agentic-resource-discovery-launch'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agentic Resource Discovery moves tool and skill selection outside the model
    context into federated natural-language search.
  standard: >-
    ARD reframes the agent-tool problem from execution to discovery. MCP,
    skills, and A2A already describe how to use a capability once known, but
    they assume the user or developer preselected it. ARD adds a searchable
    catalog layer with publisher identity, representative queries, compliance
    signals, tags, and media types, letting clients ask for a capability at
    runtime and receive the appropriate artifact envelope.


    For Zuhn, this matters because tool overload is already a practical
    constraint. A future Zuhn or AgentRun capability registry should not eagerly
    expose every MCP tool to the model. It should index local tools, skills,
    runbooks, and agents, retrieve a small candidate set by task intent, and
    record which discovery result was actually installed or invoked.
stance: >-
  Federated capability search is a better scaling primitive than preinstalling
  every tool or stuffing tool descriptions into the model context.
related:
  - INS-260325-175B
  - INS-260626-181F
  - INS-260603-A506
  - INS-260327-79E8
  - INS-260328-C246
  - INS-260627-9068
---
ARD reframes the agent-tool problem from execution to discovery. MCP, skills, and A2A already describe how to use a capability once known, but they assume the user or developer preselected it. ARD adds a searchable catalog layer with publisher identity, representative queries, compliance signals, tags, and media types, letting clients ask for a capability at runtime and receive the appropriate artifact envelope.

For Zuhn, this matters because tool overload is already a practical constraint. A future Zuhn or AgentRun capability registry should not eagerly expose every MCP tool to the model. It should index local tools, skills, runbooks, and agents, retrieve a small candidate set by task intent, and record which discovery result was actually installed or invoked.

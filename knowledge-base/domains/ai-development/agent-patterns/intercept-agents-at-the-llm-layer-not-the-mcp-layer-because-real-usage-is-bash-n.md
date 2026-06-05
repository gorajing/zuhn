---
id: INS-260605-3553
domain: ai-development
topic: agent-patterns
title: >-
  Intercept agents at the LLM layer, not the MCP layer, because real usage is
  bash not structured tool calls
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-calls
  - observability
  - agent-architecture
  - interception-point
sources:
  - type: youtube
    title: 'What if the network was the sandbox? — Remy Guercio, Tailscale'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BM2JX9hqsVQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Building control at the MCP layer captures a shrinking slice of agent
    behavior; building it at the LLM/network layer captures everything,
    including the bash commands that actually dominate real workloads.
  standard: >-
    Tailscale originally considered enforcing at the MCP layer but concluded the
    LLM layer was 'way more valuable' — and the reason generalizes. Agents are
    'somewhat moving away from tool calls and executing code,' which makes some
    traffic harder to parse but far more important to see. The empirical tell:
    on their internal instance, 'bash dominates everything else,' and many teams
    admitted they didn't even know whether their agents were using MCPs or just
    bash. Whatever an agent does, it 'typically still has to run something' that
    crosses the LLM gateway, so positioning control there survives the shift
    away from MCP. The lesson for anyone building agent observability or
    guardrails: pick the interception point by where behavior is converging
    (model calls), not by the structured abstraction that happens to be
    fashionable (tool schemas).
stance: >-
  The LLM layer is a more durable interception point for agent governance than
  the MCP/tool-call layer because agents are migrating from structured tool
  calls to executing code.
related:
  - INS-260403-A1FA
  - INS-260605-5C58
  - INS-260605-5404
  - INS-260605-0C56
  - INS-260421-60D9
  - INS-260605-2DD5
  - INS-260605-9976
  - INS-260605-98BD
  - INS-260605-E023
---
Tailscale originally considered enforcing at the MCP layer but concluded the LLM layer was 'way more valuable' — and the reason generalizes. Agents are 'somewhat moving away from tool calls and executing code,' which makes some traffic harder to parse but far more important to see. The empirical tell: on their internal instance, 'bash dominates everything else,' and many teams admitted they didn't even know whether their agents were using MCPs or just bash. Whatever an agent does, it 'typically still has to run something' that crosses the LLM gateway, so positioning control there survives the shift away from MCP. The lesson for anyone building agent observability or guardrails: pick the interception point by where behavior is converging (model calls), not by the structured abstraction that happens to be fashionable (tool schemas).

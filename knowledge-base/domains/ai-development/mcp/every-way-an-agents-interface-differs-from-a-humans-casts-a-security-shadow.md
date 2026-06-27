---
id: INS-260627-1CF9
domain: ai-development
topic: mcp
title: Every way an agent's interface differs from a human's casts a security shadow
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - security
  - agent-vs-human
  - tool-poisoning
  - data-leakage
sources:
  - type: youtube
    title: "Your Insecure MCP Server Won't Survive Production —\_Tun Shwe, Lenses"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BurJvbqFr4c'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Map each human/agent interface difference to its security shadow: discovery
    to tool poisoning, iteration to data leakage, limited context to
    oversharing.
  standard: >-
    Jeremy Lowin (Fast MCP) framed three dimensions where agents and humans
    diverge; the talk's contribution is showing each one is also a security
    surface. Discovery: a human reads API docs once and ignores them, but an
    agent re-enumerates every tool and reads every description on every
    connection, so each description is a surface for tool poisoning (hidden
    instructions invisible in the UI that the model obeys). More tools means
    more injection surface.


    Iteration: when a human's script fails they rerun it cheaply, but when an
    agent retries it resends the full conversation history over the wire,
    including any sensitive data returned by previous tool calls. An agent
    iterating against a poorly scoped server is broadcasting your data on every
    round trip, each one a chance for leakage. Context: a human has decades of
    intuition, an agent has roughly 200K tokens and must load all context before
    deciding, so a server that dumps unfiltered data hands PII, credentials, and
    system details into a window one prompt injection away from exfiltration
    (OWASP MCP #10, context injection and oversharing).


    The value of the framework is that it makes vulnerabilities predictable
    rather than discovered after an incident: if you can name how the agent's
    use of your interface differs from a human's, you can name the corresponding
    attack. The recurring remedy is curation, exposing the smallest amount of
    tooling and information; less exposed means less attackable.
stance: >-
  The three ways agents differ from humans (discovery, iteration, context) each
  create a distinct, predictable MCP vulnerability class.
related:
  - INS-260627-FEB4
  - INS-260605-83DA
  - INS-260519-20E0
  - INS-260627-08FA
  - INS-260410-9D86
---
Jeremy Lowin (Fast MCP) framed three dimensions where agents and humans diverge; the talk's contribution is showing each one is also a security surface. Discovery: a human reads API docs once and ignores them, but an agent re-enumerates every tool and reads every description on every connection, so each description is a surface for tool poisoning (hidden instructions invisible in the UI that the model obeys). More tools means more injection surface.

Iteration: when a human's script fails they rerun it cheaply, but when an agent retries it resends the full conversation history over the wire, including any sensitive data returned by previous tool calls. An agent iterating against a poorly scoped server is broadcasting your data on every round trip, each one a chance for leakage. Context: a human has decades of intuition, an agent has roughly 200K tokens and must load all context before deciding, so a server that dumps unfiltered data hands PII, credentials, and system details into a window one prompt injection away from exfiltration (OWASP MCP #10, context injection and oversharing).

The value of the framework is that it makes vulnerabilities predictable rather than discovered after an incident: if you can name how the agent's use of your interface differs from a human's, you can name the corresponding attack. The recurring remedy is curation, exposing the smallest amount of tooling and information; less exposed means less attackable.

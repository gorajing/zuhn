---
id: INS-260605-6134
domain: ai-development
topic: agent-patterns
title: Tool descriptions are the agent's UI — audit them for intent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-design
  - mcp
  - prompting
  - discoverability
sources:
  - type: youtube
    title: >-
      Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents —
      Michael Hablich, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_B4Pv9ttFgY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The schema is the UI for the agent; 97% of MCP tool descriptions have
    quality smells, so make the UI better.
  standard: >-
    When Chrome DevTools decomposed one monolithic 'debug webpage' tool into 25
    specialized tools, it traded a capability problem for a discoverability
    problem: with 25 tools, how does the agent know which to use when? Hablich
    cites research finding 97% of MCP tool descriptions have quality smells, and
    reframes the fix — the schema *is* the agent's UI.


    Two relatively uncontroversial practices: define purpose (clearly state the
    tool's core function) and provide usage guidelines (clear activation
    criteria). Their performance tool description names the concrete metrics it
    addresses — LCP, INP, CLS — so the agent can bridge from a user goal
    ('improve page load') to the right tool. The description does the reasoning
    bridge that a human would do by reading a label.


    But description quality is itself a trade-off space: richer descriptions
    consume context window, and smaller models get biased toward over-using
    verbosely-described tools they shouldn't call. There is no fixed optimum —
    it's an 'endless quest for minimum viable description' as models and
    harnesses keep changing. This is a moving target, not a one-time fix.
stance: >-
  An MCP tool's schema and description function as the user interface for the
  agent, so vague descriptions cause tool-selection failures the same way bad UI
  causes human errors.
related:
  - INS-260403-B08E
  - INS-260320-0F7C
  - INS-260410-EE5C
  - INS-260410-4F43
  - PRI-260411-64C7
  - INS-260605-6591
---
When Chrome DevTools decomposed one monolithic 'debug webpage' tool into 25 specialized tools, it traded a capability problem for a discoverability problem: with 25 tools, how does the agent know which to use when? Hablich cites research finding 97% of MCP tool descriptions have quality smells, and reframes the fix — the schema *is* the agent's UI.

Two relatively uncontroversial practices: define purpose (clearly state the tool's core function) and provide usage guidelines (clear activation criteria). Their performance tool description names the concrete metrics it addresses — LCP, INP, CLS — so the agent can bridge from a user goal ('improve page load') to the right tool. The description does the reasoning bridge that a human would do by reading a label.

But description quality is itself a trade-off space: richer descriptions consume context window, and smaller models get biased toward over-using verbosely-described tools they shouldn't call. There is no fixed optimum — it's an 'endless quest for minimum viable description' as models and harnesses keep changing. This is a moving target, not a one-time fix.

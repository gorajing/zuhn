---
id: INS-260411-6106
domain: ai-development
topic: agent-patterns
title: >-
  Sub-agent descriptions are the routing API — imprecise descriptions cause
  mis-routing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - routing
  - coordinator-pattern
  - agent-descriptions
  - dispatcher
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
    Write sub-agent descriptions with the same precision as API documentation —
    they are the routing signal for LLM-driven delegation.
  standard: >-
    Google's Coordinator/Dispatcher pattern uses a central agent that analyzes
    user intent and routes to specialist sub-agents via ADK's AutoFlow
    mechanism. The routing decision is driven entirely by the description field
    on each sub-agent — the LLM reads these descriptions to decide where to send
    the request.


    This means imprecise or overlapping descriptions directly cause mis-routing.
    'Handles billing stuff' vs 'Handles billing inquiries, invoice disputes, and
    payment method changes' will produce very different routing accuracy.
    Google's pro-tip makes this explicit: 'the description field of your
    sub-agents is effectively your API documentation for the LLM.' This
    parallels Anthropic's insight about treating tool interfaces with the same
    rigor as human UIs.
stance: >-
  In coordinator/dispatcher patterns, the description field of sub-agents
  functions as API documentation for the LLM router, and vague descriptions are
  the primary cause of mis-routing.
related:
  - INS-260322-DAFB
  - INS-260327-7F56
  - PRI-260328-F0E4
  - INS-260410-096F
  - PRI-260411-64C7
  - INS-260411-5478
---
Google's Coordinator/Dispatcher pattern uses a central agent that analyzes user intent and routes to specialist sub-agents via ADK's AutoFlow mechanism. The routing decision is driven entirely by the description field on each sub-agent — the LLM reads these descriptions to decide where to send the request.

This means imprecise or overlapping descriptions directly cause mis-routing. 'Handles billing stuff' vs 'Handles billing inquiries, invoice disputes, and payment method changes' will produce very different routing accuracy. Google's pro-tip makes this explicit: 'the description field of your sub-agents is effectively your API documentation for the LLM.' This parallels Anthropic's insight about treating tool interfaces with the same rigor as human UIs.

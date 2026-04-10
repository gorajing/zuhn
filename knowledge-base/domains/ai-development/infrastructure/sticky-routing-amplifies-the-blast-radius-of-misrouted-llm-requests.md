---
id: INS-260410-ED34
domain: ai-development
topic: infrastructure
title: Sticky routing amplifies the blast radius of misrouted LLM requests
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - load-balancing
  - incident-response
  - serving-infrastructure
  - reliability
sources:
  - type: blog
    title: A postmortem of three recent issues
    url: 'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When LLM routing is sticky, a 0.8% misroute rate becomes a 100% bad
    experience for the unlucky users rather than a rare glitch for everyone.
  standard: >-
    Anthropic's August context-window routing bug initially misrouted 0.8% of
    Sonnet 4 requests to servers configured for the 1M-token context. Because
    routing was sticky, users whose first request hit a misconfigured server
    kept getting bad responses on follow-ups, meaning roughly 30% of Claude Code
    users experienced at least one degraded message during the worst period.


    This is the core failure mode of stickiness under partial-failure
    conditions: it trades statistical smoothing for session coherence. When the
    underlying pool is healthy, stickiness improves cache hit rates and
    conversational continuity. When a fraction of the pool is broken, stickiness
    concentrates damage onto specific users, producing the 'it's broken for me
    but fine for everyone else' reports that are hardest to triage.


    For anyone operating stateful LLM serving: stickiness should be paired with
    per-session health checks, and incident dashboards should measure affected
    users rather than affected requests. The two numbers diverge dramatically
    under sticky routing, and the user number is the one that matches reality.
stance: >-
  Session-sticky load balancing turns small routing errors into concentrated
  per-user outages rather than evenly distributed noise.
related:
  - INS-260321-A3A1
  - INS-260323-61CD
  - INS-260405-8B05
  - INS-260410-C2E6
  - INS-260403-5683
  - INS-260330-BCD8
---
Anthropic's August context-window routing bug initially misrouted 0.8% of Sonnet 4 requests to servers configured for the 1M-token context. Because routing was sticky, users whose first request hit a misconfigured server kept getting bad responses on follow-ups, meaning roughly 30% of Claude Code users experienced at least one degraded message during the worst period.

This is the core failure mode of stickiness under partial-failure conditions: it trades statistical smoothing for session coherence. When the underlying pool is healthy, stickiness improves cache hit rates and conversational continuity. When a fraction of the pool is broken, stickiness concentrates damage onto specific users, producing the 'it's broken for me but fine for everyone else' reports that are hardest to triage.

For anyone operating stateful LLM serving: stickiness should be paired with per-session health checks, and incident dashboards should measure affected users rather than affected requests. The two numbers diverge dramatically under sticky routing, and the user number is the one that matches reality.

---
id: INS-260605-2D9B
domain: ai-development
topic: agents
title: Never trade trust boundaries for agent convenience
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - agent-safety
  - prompt-injection
  - trust-boundaries
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
    In a world of delegated agent work, some friction is by design — don't
    compromise trust for convenience.
  standard: >-
    Users asked Chrome DevTools to 'remember my choice' so they wouldn't click
    allow every time the agent shares their screen. In traditional UX that's a
    clear win — remove the friction. But Hablich argues that when you delegate
    work to agents, that friction is a trust boundary, and they kept it by
    design. The reasoning rests on Simon Willison's 'lethal trifecta': private
    data + untrusted content + external communication is where exfiltration
    attacks live.


    He maps three tiers of browsing agents. Tier one is local development with a
    human in the loop granting time-bound access — this is where all three
    trifecta elements converge, so per-action human consent is required every
    time. Tier two is CI/controlled environments needing data separation
    (containers, separate Chrome profiles, remote debugging ports). Tier three
    is full-internet 'YOLO mode' where every webpage can prompt-inject the
    agent, requiring domain allow-lists and injection mitigations.


    Key design principle: a local tier-one agent and a tier-three research fleet
    might share a *tool* (Chrome DevTools for agents) but must share nothing of
    the security model. The interface is reusable; the trust posture is not.
stance: >-
  Friction like per-action consent should be preserved by design when an agent
  combines private data access, untrusted content, and external communication,
  even though removing it would improve UX.
related:
  - INS-260402-2D7B
  - INS-260405-FE94
  - INS-260605-ED35
  - INS-260403-0350
  - INS-260627-8B75
  - INS-260605-3AAF
  - INS-260625-029F
  - INS-260627-9D3D
---
Users asked Chrome DevTools to 'remember my choice' so they wouldn't click allow every time the agent shares their screen. In traditional UX that's a clear win — remove the friction. But Hablich argues that when you delegate work to agents, that friction is a trust boundary, and they kept it by design. The reasoning rests on Simon Willison's 'lethal trifecta': private data + untrusted content + external communication is where exfiltration attacks live.

He maps three tiers of browsing agents. Tier one is local development with a human in the loop granting time-bound access — this is where all three trifecta elements converge, so per-action human consent is required every time. Tier two is CI/controlled environments needing data separation (containers, separate Chrome profiles, remote debugging ports). Tier three is full-internet 'YOLO mode' where every webpage can prompt-inject the agent, requiring domain allow-lists and injection mitigations.

Key design principle: a local tier-one agent and a tier-three research fleet might share a *tool* (Chrome DevTools for agents) but must share nothing of the security model. The interface is reusable; the trust posture is not.

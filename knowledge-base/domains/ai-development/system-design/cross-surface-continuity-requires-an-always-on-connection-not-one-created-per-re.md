---
id: INS-260605-75BB
domain: ai-development
topic: system-design
title: >-
  Cross-surface continuity requires an always-on connection, not one created per
  request
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - continuity
  - multi-device
  - real-time
  - sync
  - ux
sources:
  - type: youtube
    title: >-
      Why Your AI UX Is Broken (and It's Not the Model's Fault) — Mike
      Christensen, Ably
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YNJvm7t3yq8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Clients hold a continuously maintained connection to a shared session so a
    second tab or phone has instant visibility and an upstream channel to the
    working agent.
  standard: >-
    Swapping SSE for WebSockets fixes directionality but not multi-surface
    presence: a second tab that didn't initiate the request still has no
    visibility into the live stream and no upstream channel to send a follow-up.
    The deeper fix is that every client holds a persistent connection to an
    always-active durable session — not a connection that exists only while a
    single request is in flight. Because the session is a shared resource the
    agent also sees, any tab or device can both observe ongoing activity and
    route messages to the agent (e.g., switching to your phone mid-task and
    saying 'Wednesday, not Tuesday'). Continuity and live control across
    surfaces fall out of the shared-session design rather than being bolted on.
stance: >-
  AI sessions should follow the user across tabs and devices, which is
  impossible when the connection only exists for the lifetime of a single
  request.
related:
  - INS-260409-E8B3
  - INS-260605-48CA
  - INS-260625-2439
  - INS-260605-0374
  - INS-260411-52C8
---
Swapping SSE for WebSockets fixes directionality but not multi-surface presence: a second tab that didn't initiate the request still has no visibility into the live stream and no upstream channel to send a follow-up. The deeper fix is that every client holds a persistent connection to an always-active durable session — not a connection that exists only while a single request is in flight. Because the session is a shared resource the agent also sees, any tab or device can both observe ongoing activity and route messages to the agent (e.g., switching to your phone mid-task and saying 'Wednesday, not Tuesday'). Continuity and live control across surfaces fall out of the shared-session design rather than being bolted on.

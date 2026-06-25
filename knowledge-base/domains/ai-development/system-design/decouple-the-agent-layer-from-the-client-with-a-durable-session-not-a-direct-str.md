---
id: INS-260605-48CA
domain: ai-development
topic: system-design
title: >-
  Decouple the agent layer from the client with a durable session, not a direct
  stream
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-sessions
  - streaming
  - agent-architecture
  - decoupling
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
    Put a persistent, stateful shared resource between agents and clients so
    stream health no longer depends on any one connection.
  standard: >-
    The default AI chat pattern uses direct HTTP streaming (SSE) where a single
    client opens a single point-to-point connection to a single agent. This
    couples everything to one request: if the connection drops, the stream is
    gone; other tabs and devices have zero visibility into the in-progress
    response; and no other client can reach the agent to steer or interrupt it.
    The fix is to insert a durable session — a persistent, stateful medium
    (effectively pub/sub) sitting between the agent layer and the client layer.
    Agents write events to the session without caring about any client's
    connection health, and clients connect to the session to read, resume, or
    interact. This single architectural move is what separates a fragile demo
    from a production AI product.
stance: >-
  Binding the live agent response stream to a single client's HTTP connection is
  the root architectural cause of fragile AI UX.
related:
  - INS-260409-E8B3
  - INS-260605-8409
  - INS-260605-75BB
  - INS-260625-75D6
  - INS-260423-74BF
---
The default AI chat pattern uses direct HTTP streaming (SSE) where a single client opens a single point-to-point connection to a single agent. This couples everything to one request: if the connection drops, the stream is gone; other tabs and devices have zero visibility into the in-progress response; and no other client can reach the agent to steer or interrupt it. The fix is to insert a durable session — a persistent, stateful medium (effectively pub/sub) sitting between the agent layer and the client layer. Agents write events to the session without caring about any client's connection health, and clients connect to the session to read, resume, or interact. This single architectural move is what separates a fragile demo from a production AI product.

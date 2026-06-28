---
id: INS-260627-718B
domain: ai-development
topic: architecture
title: 'Persist agent output streams keyed by run ID, not bound to the request'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - resumable-streams
  - durability
  - client-reconnect
  - ux
  - state-management
sources:
  - type: youtube
    title: >-
      Building durable Agents with Workflow DevKit & AI SDK - Peter Wielander,
      Vercel
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kmV-qg4uoNI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Decouple the response stream from the API handler by storing it (Redis in
    prod, a file locally) under the workflow's run ID so any client can
    reconnect and resume.
  standard: >-
    In a naive agent server, the response stream lives and dies with the API
    handler: lose the connection and you lose the session. The workflow model
    decouples them. Calling `getWritable()` creates a stream associated with the
    workflow's run ID — backed by a file in local dev, by something like Redis
    in production — that any step can write to and any client can attach to. The
    run ID is returned to the UI (e.g., as a header), and a dedicated reconnect
    endpoint streams from the stored stream, optionally from a given chunk index
    so a client can resume mid-stream.


    This reframes durability as something the *connection* needs, not just the
    compute. A user who closes their laptop, loses Wi-Fi, or reloads the page
    can reattach to the live agent run instead of restarting it. It also enables
    fan-out patterns: multiple named streams per workflow, multiple consumers on
    one stream, and background runs whose output is simply waiting in a stream
    nobody is currently watching.


    A subtle constraint falls out of the determinism rule: the orchestration
    layer cannot write to a stream directly, because the loop replays and would
    re-emit every packet. Stream writes must happen inside steps (or via logged
    side-channels), so the deterministic layer stays clean. The general
    principle transfers beyond this library: treat the output channel as
    durable, externally-stored state keyed to the run, not as a property of the
    request that started it.
stance: >-
  An agent's output stream should be persisted and addressed by run ID so
  clients can disconnect and reconnect without losing the session, rather than
  being tied to the lifetime of the HTTP handler.
related:
  - INS-260625-B67E
  - INS-260627-44FD
  - INS-260627-68FC
  - INS-260627-AA19
  - INS-260627-F5A8
---
In a naive agent server, the response stream lives and dies with the API handler: lose the connection and you lose the session. The workflow model decouples them. Calling `getWritable()` creates a stream associated with the workflow's run ID — backed by a file in local dev, by something like Redis in production — that any step can write to and any client can attach to. The run ID is returned to the UI (e.g., as a header), and a dedicated reconnect endpoint streams from the stored stream, optionally from a given chunk index so a client can resume mid-stream.

This reframes durability as something the *connection* needs, not just the compute. A user who closes their laptop, loses Wi-Fi, or reloads the page can reattach to the live agent run instead of restarting it. It also enables fan-out patterns: multiple named streams per workflow, multiple consumers on one stream, and background runs whose output is simply waiting in a stream nobody is currently watching.

A subtle constraint falls out of the determinism rule: the orchestration layer cannot write to a stream directly, because the loop replays and would re-emit every packet. Stream writes must happen inside steps (or via logged side-channels), so the deterministic layer stays clean. The general principle transfers beyond this library: treat the output channel as durable, externally-stored state keyed to the run, not as a property of the request that started it.

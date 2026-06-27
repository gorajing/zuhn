---
id: INS-260625-75D6
domain: ai-development
topic: system-design
title: Separate the rendering host from the connection-holding client
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - mcp
  - host-client-server
  - separation-of-concerns
  - rendering
  - protocol-design
sources:
  - type: youtube
    title: >-
      Building Interactive UIs in VS Code with MCP Apps — Marlene Mhangami &
      Liam Hampton, GitHub
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_xIwFcnHqp4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let the host fetch and render UI from a resource reference while a separate
    client holds the one-to-one server connection.
  standard: >-
    In MCP apps the roles are deliberately split: the server returns tool
    results plus a resource reference pointing to stored HTML; the host (VS
    Code) fetches that HTML and renders it in a sandboxed iframe; and a separate
    client (GitHub Copilot) maintains the one-to-one connection to the server.
    Crucially, it is the host — not the client — that does the rendering, while
    the rendered app calls back to the server for fresh data.


    The design lesson is to separate the surface that displays and sandboxes
    untrusted UI from the surface that negotiates and holds the model-to-server
    connection. They have different lifecycles (a frame can be torn down and
    re-rendered independently of the live connection) and different trust
    postures (the host enforces isolation; the client manages auth and session).
    Collapsing them into one component would entangle UI security with
    connection state. This particular role split is tied to MCP's current shape
    and may evolve, but the underlying separation-of-concerns is durable.
stance: >-
  The component that fetches and renders tool UI should be distinct from the
  component that maintains the model-server connection, because rendering and
  connection management are different trust and lifecycle concerns.
related:
  - INS-260605-1821
  - INS-260605-743D
  - INS-260605-48CA
  - INS-260627-ADB1
  - INS-260625-2439
---
In MCP apps the roles are deliberately split: the server returns tool results plus a resource reference pointing to stored HTML; the host (VS Code) fetches that HTML and renders it in a sandboxed iframe; and a separate client (GitHub Copilot) maintains the one-to-one connection to the server. Crucially, it is the host — not the client — that does the rendering, while the rendered app calls back to the server for fresh data.

The design lesson is to separate the surface that displays and sandboxes untrusted UI from the surface that negotiates and holds the model-to-server connection. They have different lifecycles (a frame can be torn down and re-rendered independently of the live connection) and different trust postures (the host enforces isolation; the client manages auth and session). Collapsing them into one component would entangle UI security with connection state. This particular role split is tied to MCP's current shape and may evolve, but the underlying separation-of-concerns is durable.

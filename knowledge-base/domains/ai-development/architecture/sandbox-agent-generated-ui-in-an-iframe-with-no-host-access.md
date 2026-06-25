---
id: INS-260625-3FBF
domain: ai-development
topic: architecture
title: Sandbox agent-generated UI in an iframe with no host access
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - iframe
  - sandboxing
  - security
  - isolation
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
    Render untrusted server-supplied HTML in a sandboxed iframe so it cannot
    touch the host's settings, APIs, or environment.
  standard: >-
    When a tool can return arbitrary HTML/JS to be rendered in your application,
    that markup is untrusted code from a third party — the same threat class as
    running a random dependency. The MCP apps design renders it inside a
    sandboxed iframe (the 'hamster in a cage' analogy: contain it or it chews up
    the room), explicitly denying it access to VS Code settings, internal APIs,
    and anything external.


    The principle generalizes beyond MCP: any time an agent or server controls a
    rendering surface in your trusted application, the default posture is
    isolation, not trust. Make the boundary structural (a sandboxed frame with
    an explicit allowlist of capabilities) rather than relying on reviewing the
    generated markup, because the markup changes on every call and can be
    adversarial. Interaction with the host should flow only through the narrow,
    audited channel back to the server — not through ambient access to the host
    environment.
stance: >-
  Server-generated UI must run in a sandboxed iframe with zero access to host
  settings, APIs, or external resources, because the rendering surface is
  untrusted by default.
related:
  - INS-260605-1BBF
  - INS-260625-5CE4
  - INS-260625-07CB
  - INS-260625-4559
  - INS-260605-41AE
---
When a tool can return arbitrary HTML/JS to be rendered in your application, that markup is untrusted code from a third party — the same threat class as running a random dependency. The MCP apps design renders it inside a sandboxed iframe (the 'hamster in a cage' analogy: contain it or it chews up the room), explicitly denying it access to VS Code settings, internal APIs, and anything external.

The principle generalizes beyond MCP: any time an agent or server controls a rendering surface in your trusted application, the default posture is isolation, not trust. Make the boundary structural (a sandboxed frame with an explicit allowlist of capabilities) rather than relying on reviewing the generated markup, because the markup changes on every call and can be adversarial. Interaction with the host should flow only through the narrow, audited channel back to the server — not through ambient access to the host environment.

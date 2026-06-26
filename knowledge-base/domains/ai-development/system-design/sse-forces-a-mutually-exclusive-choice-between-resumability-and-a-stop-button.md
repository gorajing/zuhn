---
id: INS-260605-E16A
domain: ai-development
topic: system-design
title: SSE forces a mutually exclusive choice between resumability and a stop button
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sse
  - websockets
  - bidirectional
  - cancellation
  - transport
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
    Because SSE is strictly one-way, a client closing the connection is
    ambiguous — buffer-to-resume or cancel-the-LLM — so you cannot support both
    resume and a stop button.
  standard: >-
    SSE is a strictly one-way pipe from server to client, so a client has no
    upstream channel to signal intent. The only action it can take is closing
    the connection, which is ambiguous: should the agent keep generating and
    buffer events assuming the client will reconnect and resume, or treat the
    close as a cancellation and stop burning expensive tokens? You cannot do
    both. Vercel's AI SDK documents exactly this — abort is incompatible with
    its resume functionality because it defaults to SSE. The implication is that
    any product wanting both resumable streams and live control (a stop button,
    steering) needs a bidirectional transport like WebSockets, ideally fronted
    by a durable session layer.
stance: >-
  Server-sent events make resume and cancel mutually exclusive, so any AI
  product needing both must abandon SSE for a bidirectional transport.
related:
  - INS-260626-15F3
  - INS-260330-258F
  - INS-260423-81B6
  - INS-260409-78E1
  - INS-260624-9A4B
---
SSE is a strictly one-way pipe from server to client, so a client has no upstream channel to signal intent. The only action it can take is closing the connection, which is ambiguous: should the agent keep generating and buffer events assuming the client will reconnect and resume, or treat the close as a cancellation and stop burning expensive tokens? You cannot do both. Vercel's AI SDK documents exactly this — abort is incompatible with its resume functionality because it defaults to SSE. The implication is that any product wanting both resumable streams and live control (a stop button, steering) needs a bidirectional transport like WebSockets, ideally fronted by a durable session layer.

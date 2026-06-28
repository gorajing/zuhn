---
id: INS-260626-E5E5
domain: ai-development
topic: system-building
title: >-
  Ephemeral tokens let clients connect directly to realtime APIs without
  exposing long-lived keys
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ephemeral-tokens
  - websockets
  - latency
  - secrets-management
  - realtime
sources:
  - type: youtube
    title: >-
      Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cVzf49yg0D8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A thin backend mints short-lived tokens from the real API key and hands them
    to the browser, which opens the WebSocket directly — removing a proxy hop
    while limiting blast radius if a token leaks.
  standard: >-
    The naive realtime setup proxies the model connection through your server:
    client → server WebSocket → model WebSocket. That adds a full network hop of
    latency to every audio/video frame, which is painful in a conversational
    loop. The alternative is to let the client connect straight to the realtime
    API — but you can't ship a long-lived API key to a browser or phone.


    Ephemeral tokens resolve the tension. A slim backend holds the real API key
    and does exactly one job: generate a short-lived token with an explicit
    expiration and return it to the client. The client then opens the WebSocket
    directly to the Live API using that token. If the token leaks, the damage is
    bounded by its short TTL rather than the lifetime of your account key.


    This is a reusable pattern for any client-direct connection to a privileged
    realtime service: keep the durable secret server-side, mint
    capability-scoped, time-boxed credentials for the edge, and let the client
    take the low-latency direct path. The cost is an extra token-issuance round
    trip at session start, which is negligible compared to per-frame latency
    savings over the life of a conversation.
stance: >-
  Minting short-lived ephemeral tokens server-side lets clients connect directly
  to realtime APIs, cutting latency without exposing long-lived secrets.
related:
  - INS-260410-992A
  - INS-260501-22BF
  - INS-260626-93C7
  - INS-260605-6F34
  - INS-260626-C51E
  - INS-260323-8D12
---
The naive realtime setup proxies the model connection through your server: client → server WebSocket → model WebSocket. That adds a full network hop of latency to every audio/video frame, which is painful in a conversational loop. The alternative is to let the client connect straight to the realtime API — but you can't ship a long-lived API key to a browser or phone.

Ephemeral tokens resolve the tension. A slim backend holds the real API key and does exactly one job: generate a short-lived token with an explicit expiration and return it to the client. The client then opens the WebSocket directly to the Live API using that token. If the token leaks, the damage is bounded by its short TTL rather than the lifetime of your account key.

This is a reusable pattern for any client-direct connection to a privileged realtime service: keep the durable secret server-side, mint capability-scoped, time-boxed credentials for the edge, and let the client take the low-latency direct path. The cost is an extra token-issuance round trip at session start, which is negligible compared to per-frame latency savings over the life of a conversation.

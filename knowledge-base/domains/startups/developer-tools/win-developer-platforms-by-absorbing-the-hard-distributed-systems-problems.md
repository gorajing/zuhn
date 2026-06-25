---
id: INS-260625-13E1
domain: startups
topic: developer-tools
title: Win developer platforms by absorbing the hard distributed-systems problems
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - developer-tools
  - platform-strategy
  - abstraction
  - resumability
  - infrastructure-moat
sources:
  - type: youtube
    title: >-
      Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carey,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SKDJo2CopRs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Resumable streaming, multi-tab/multi-device sync, and real-time
    collaboration should come out of the box from the platform — not force every
    app team to become distributed-systems engineers.
  standard: >-
    A recurring pitch in the talk is that hard infrastructure problems —
    resumable streaming (refresh mid-stream and it continues), multi-tab and
    multi-device sync, real-time collaborative editing — should be solved once
    by the platform and handed to developers for free, rather than patched into
    every application in userland. In a stateless world each of these forces you
    into databases, replication, and sticky sessions; with a stateful primitive
    you just reconnect to the same instance and it resumes. The framing is
    blunt: 'make it Cloudflare's problem,' so app teams can 'worry about making
    money.'


    The strategic lesson generalizes beyond Cloudflare: the durable way to win
    developer mindshare is to absorb the problems that are genuinely hard and
    genuinely off the customer's critical path to value. The observation that
    you still cannot share a live ChatGPT conversation and collaborate in it —
    because that multiplayer plumbing was never built — illustrates the gap; the
    platform that ships it by default captures the use cases others defer. ('AI
    should be a multiplayer game.')


    There is also a moat dimension: Cloudflare's structurally low prices come
    from architecture decisions made a decade ago (installing hardware near
    ISPs, bulk bandwidth deals across boundaries) rather than from subsidizing
    as a marketing expense. A cost advantage that falls out of your architecture
    is durable in a way that a subsidized one is not — the same logic that makes
    absorbing hard problems a moat rather than a cost center.
stance: >-
  Infrastructure platforms should make sync, resumability, and multiplayer state
  their problem so application developers never rebuild distributed systems in
  userland.
related:
  - INS-260403-7B04
  - INS-260424-123B
  - INS-260514-D155
  - INS-260514-C1B3
  - INS-260330-A25A
---
A recurring pitch in the talk is that hard infrastructure problems — resumable streaming (refresh mid-stream and it continues), multi-tab and multi-device sync, real-time collaborative editing — should be solved once by the platform and handed to developers for free, rather than patched into every application in userland. In a stateless world each of these forces you into databases, replication, and sticky sessions; with a stateful primitive you just reconnect to the same instance and it resumes. The framing is blunt: 'make it Cloudflare's problem,' so app teams can 'worry about making money.'

The strategic lesson generalizes beyond Cloudflare: the durable way to win developer mindshare is to absorb the problems that are genuinely hard and genuinely off the customer's critical path to value. The observation that you still cannot share a live ChatGPT conversation and collaborate in it — because that multiplayer plumbing was never built — illustrates the gap; the platform that ships it by default captures the use cases others defer. ('AI should be a multiplayer game.')

There is also a moat dimension: Cloudflare's structurally low prices come from architecture decisions made a decade ago (installing hardware near ISPs, bulk bandwidth deals across boundaries) rather than from subsidizing as a marketing expense. A cost advantage that falls out of your architecture is durable in a way that a subsidized one is not — the same logic that makes absorbing hard problems a moat rather than a cost center.

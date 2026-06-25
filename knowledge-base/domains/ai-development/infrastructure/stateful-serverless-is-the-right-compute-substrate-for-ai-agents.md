---
id: INS-260625-E7CD
domain: ai-development
topic: infrastructure
title: Stateful serverless is the right compute substrate for AI agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-objects
  - stateful-serverless
  - agent-runtime
  - cloudflare
  - persistence
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
    Agents need an addressable, hibernating, persistent compute unit — not a
    stateless function that vanishes after each request.
  standard: >-
    The classic serverless model (a function that takes a request, returns a
    response, and disappears) breaks for agents because there is no place for
    state to live — a naive counter always reads zero, and you are forced to
    bolt on a database, replication, and sticky sessions. Cloudflare's durable
    objects flip this: for a given ID, a class spins up once and every
    subsequent request or websocket lands in the same instance, giving each
    agent a stable address, in-process state, and SQLite alongside it.


    This matters because agents are not request/response — they run long tasks
    in the background even when no request is inbound, they hibernate when idle
    and wake on demand, and they persist across reconnects. A single addressable
    unit that scales to absurd numbers but behaves like a single stateful server
    is, in the speakers' framing, 'the perfect compute unit for building AI
    agents.'


    The practical implication for builders: choose your agent runtime around
    statefulness and addressability first. If your platform forces you to
    reconstruct agent state from an external database on every invocation, you
    are reimplementing in userland what a stateful primitive gives you for free
    — and you will rebuild distributed-systems plumbing you did not set out to
    build.
stance: >-
  Long-running AI agents should run on addressable, persistent compute units
  rather than stateless serverless functions.
related:
  - INS-260605-61D9
  - INS-260625-B67E
  - INS-260605-ACC9
  - INS-260505-C5D8
  - INS-260410-AA40
---
The classic serverless model (a function that takes a request, returns a response, and disappears) breaks for agents because there is no place for state to live — a naive counter always reads zero, and you are forced to bolt on a database, replication, and sticky sessions. Cloudflare's durable objects flip this: for a given ID, a class spins up once and every subsequent request or websocket lands in the same instance, giving each agent a stable address, in-process state, and SQLite alongside it.

This matters because agents are not request/response — they run long tasks in the background even when no request is inbound, they hibernate when idle and wake on demand, and they persist across reconnects. A single addressable unit that scales to absurd numbers but behaves like a single stateful server is, in the speakers' framing, 'the perfect compute unit for building AI agents.'

The practical implication for builders: choose your agent runtime around statefulness and addressability first. If your platform forces you to reconstruct agent state from an external database on every invocation, you are reimplementing in userland what a stateful primitive gives you for free — and you will rebuild distributed-systems plumbing you did not set out to build.

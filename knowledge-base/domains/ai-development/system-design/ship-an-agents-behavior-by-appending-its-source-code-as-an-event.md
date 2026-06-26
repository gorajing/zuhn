---
id: INS-260605-9A01
domain: ai-development
topic: system-design
title: Ship an agent's behavior by appending its source code as an event
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - dynamic-deployment
  - code-as-data
  - serverless
  - secret-injection
  - cloudflare-workers
sources:
  - type: youtube
    title: >-
      Make your own event-sourced agent harness using stream processors — Jonas
      Templestein, Iterate
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vi-2nasppAg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Deploy agent logic with zero infra by appending a 'dynamic worker
    configured' event whose payload is the reducer+after-append source, run in a
    spun-up worker, with API keys substituted into outbound headers so secrets
    never touch the log.
  standard: >-
    The most ambitious idea in the workshop: a stream that 'knows nothing about
    the world' becomes an agent the instant you append a single event whose
    payload is a string of JavaScript defining a reducer and after-append hook.
    The platform runs it (in Cloudflare dynamic workers) on every subsequent
    event, 'horizontally scalable,' with no server deployment. The ~40 lines for
    a basic OpenAI agent can be bundled into an event, and appending it to any
    stream makes that stream an agent.


    This is code-as-data taken to its limit, and it raises two design questions
    the talk answers. Secrets: you don't put the OpenAI key in the stream
    (everyone can read it); instead an 'enforce' mechanism substitutes the
    secret into the outbound fetch header at request time. Errors: since the
    only thing that can happen is an event, a runtime error just produces an
    error event you can react to — e.g. feed a TypeScript compiler error back
    through an LLM to auto-fix and emit corrected code. The same envelope even
    enables an agent to rewrite its own functionality by appending a different
    worker script. It's framed as the exciting-but-unproven frontier of the
    design (it broke during the live demo), so confidence is low, but it
    illustrates how far the 'everything is an event' constraint can be pushed.
stance: >-
  A stream can be turned into a working agent by appending one event containing
  the processor's source code, with secrets injected at fetch time rather than
  stored in the stream.
related:
  - INS-260410-38C8
  - INS-260410-358E
  - INS-260411-52C8
  - INS-260514-5914
  - INS-260605-E303
  - INS-260605-C122
  - INS-260625-6FC0
  - INS-260625-73BD
  - INS-260625-1C5E
---
The most ambitious idea in the workshop: a stream that 'knows nothing about the world' becomes an agent the instant you append a single event whose payload is a string of JavaScript defining a reducer and after-append hook. The platform runs it (in Cloudflare dynamic workers) on every subsequent event, 'horizontally scalable,' with no server deployment. The ~40 lines for a basic OpenAI agent can be bundled into an event, and appending it to any stream makes that stream an agent.

This is code-as-data taken to its limit, and it raises two design questions the talk answers. Secrets: you don't put the OpenAI key in the stream (everyone can read it); instead an 'enforce' mechanism substitutes the secret into the outbound fetch header at request time. Errors: since the only thing that can happen is an event, a runtime error just produces an error event you can react to — e.g. feed a TypeScript compiler error back through an LLM to auto-fix and emit corrected code. The same envelope even enables an agent to rewrite its own functionality by appending a different worker script. It's framed as the exciting-but-unproven frontier of the design (it broke during the live demo), so confidence is low, but it illustrates how far the 'everything is an event' constraint can be pushed.

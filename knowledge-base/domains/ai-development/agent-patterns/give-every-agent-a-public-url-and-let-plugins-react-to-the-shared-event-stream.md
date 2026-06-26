---
id: INS-260605-8409
domain: ai-development
topic: agent-patterns
title: Give every agent a public URL and let plugins react to the shared event stream
actionability: inspiration
confidence: low
shelf_life: evergreen
status: active
tags:
  - http-agents
  - composability
  - plugins
  - distributed-agents
  - webhooks
  - integration
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
    Treat an agent as a publicly-routable HTTP service over a tolerant event
    stream, so Slack webhooks, web-form submissions, and third-party plugins all
    become events instead of requiring a bespoke connector concept.
  standard: >-
    Templestein's opinion is that 'the moment an agent exists, it should have a
    URL' — an internet-connected server program that speaks HTTP, with a
    tolerant event log as its only interface. Because the stream accepts almost
    any payload (even invalid events become error events), raw third-party
    webhooks can be POSTed directly and the LLM is 'good enough to consume raw
    webhooks from anywhere and roughly do the right thing.' This sidesteps the
    trap of 'inventing a connector concept' just to get Slack messages or form
    submissions into the agent.


    The design implication is composability across machines and languages:
    plugins are independent processors that subscribe (pull via SSE) or are
    pushed events, can run on different servers in different languages (Rust
    here, TypeScript there), and can append to child/parent paths to model
    sub-agents (append to ./Boris, subscribe to Boris's 'I have the result'
    event). The acknowledged downside is that distribution invites race
    conditions and infinite loops between plugins — which is why the platform
    ships a circuit breaker that pauses a stream after ~100 events/second. The
    whole approach is presented as exploratory ('is this dumb or cool?'), hence
    low confidence, but the underlying principle — one universal primitive (the
    event) over an HTTP-addressable log — is the reusable idea.
stance: >-
  An agent should have an HTTP URL and a tolerant event log from the moment it
  exists, so integrations are events rather than a bolted-on connector layer.
related:
  - INS-260530-B694
  - INS-260605-48CA
  - INS-260625-2439
  - PRI-260501-168F
  - INS-260423-74BF
  - INS-260626-09E1
---
Templestein's opinion is that 'the moment an agent exists, it should have a URL' — an internet-connected server program that speaks HTTP, with a tolerant event log as its only interface. Because the stream accepts almost any payload (even invalid events become error events), raw third-party webhooks can be POSTed directly and the LLM is 'good enough to consume raw webhooks from anywhere and roughly do the right thing.' This sidesteps the trap of 'inventing a connector concept' just to get Slack messages or form submissions into the agent.

The design implication is composability across machines and languages: plugins are independent processors that subscribe (pull via SSE) or are pushed events, can run on different servers in different languages (Rust here, TypeScript there), and can append to child/parent paths to model sub-agents (append to ./Boris, subscribe to Boris's 'I have the result' event). The acknowledged downside is that distribution invites race conditions and infinite loops between plugins — which is why the platform ships a circuit breaker that pauses a stream after ~100 events/second. The whole approach is presented as exploratory ('is this dumb or cool?'), hence low confidence, but the underlying principle — one universal primitive (the event) over an HTTP-addressable log — is the reusable idea.

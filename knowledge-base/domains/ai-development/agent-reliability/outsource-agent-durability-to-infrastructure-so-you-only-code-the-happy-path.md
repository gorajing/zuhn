---
id: INS-260627-E496
domain: ai-development
topic: agent-reliability
title: Outsource agent durability to infrastructure so you only code the happy path
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - temporal
  - fault-tolerance
  - production-agents
  - event-sourcing
sources:
  - type: youtube
    title: >-
      OpenAI + @Temporalio : Building Durable, Production Ready Agents -
      Cornelia Davis, Temporal
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k8cnVCMYmNc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let a durable-execution layer like Temporal own retries and crash recovery
    so agent code expresses only business logic, never failure plumbing.
  standard: >-
    The central argument for production agents is that durability is a
    distributed-systems concern that does not belong in the agent's business
    logic. With a durable-execution backing service, the developer programs only
    the 'happy path' — call the LLM, run a tool, loop back — while the service
    transparently provides configurable retries (exponential backoff, retry
    caps, max windows), queue-based message passing, and state persistence. The
    mechanism is event sourcing: every activity call and result is recorded, so
    the execution can be reconstituted from event history after any failure.


    The payoff is concrete and quantified in the talk: if your application
    crashes on the 1,350th turn of a long agentic loop, the service has recorded
    every prior LLM call and return, so it resumes from that point without
    re-burning tokens. The cost is small — roundtrips to the service add only
    tens of milliseconds per activity, negligible for agents running over
    minutes, hours, or days. One startup reported flipping from spending 75% of
    engineering time on Kafka/Redis operations to spending 75% on business logic
    after adopting this pattern.


    The actionable takeaway: when an agent must survive crashes, rate limits, or
    downstream outages, do not write try/retry/checkpoint code inside the loop.
    Wrap external or expensive work as 'activities,' orchestrate them in a
    'workflow,' and let the runtime guarantee durability. This is the difference
    between a proof-of-concept agent (a single Python process that loses
    everything when killed) and a production agent that scales horizontally and
    resumes after failure.
stance: >-
  Production agents should delegate retries, crash recovery, and rate-limit
  handling to a durable-execution backing service rather than implementing that
  logic in agent code.
related:
  - INS-260501-9465
  - INS-260605-CA2B
  - INS-260605-ACC9
  - INS-260605-8D12
  - INS-260624-223D
  - INS-260627-E7AE
  - INS-260627-1443
  - INS-260627-B44E
  - INS-260627-5F5A
---
The central argument for production agents is that durability is a distributed-systems concern that does not belong in the agent's business logic. With a durable-execution backing service, the developer programs only the 'happy path' — call the LLM, run a tool, loop back — while the service transparently provides configurable retries (exponential backoff, retry caps, max windows), queue-based message passing, and state persistence. The mechanism is event sourcing: every activity call and result is recorded, so the execution can be reconstituted from event history after any failure.

The payoff is concrete and quantified in the talk: if your application crashes on the 1,350th turn of a long agentic loop, the service has recorded every prior LLM call and return, so it resumes from that point without re-burning tokens. The cost is small — roundtrips to the service add only tens of milliseconds per activity, negligible for agents running over minutes, hours, or days. One startup reported flipping from spending 75% of engineering time on Kafka/Redis operations to spending 75% on business logic after adopting this pattern.

The actionable takeaway: when an agent must survive crashes, rate limits, or downstream outages, do not write try/retry/checkpoint code inside the loop. Wrap external or expensive work as 'activities,' orchestrate them in a 'workflow,' and let the runtime guarantee durability. This is the difference between a proof-of-concept agent (a single Python process that loses everything when killed) and a production agent that scales horizontally and resumes after failure.

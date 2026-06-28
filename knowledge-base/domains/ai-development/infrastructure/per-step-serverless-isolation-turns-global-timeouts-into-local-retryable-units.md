---
id: INS-260627-51BE
domain: ai-development
topic: infrastructure
title: >-
  Per-step serverless isolation turns global timeouts into local, retryable
  units
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - serverless
  - scaling
  - timeouts
  - concurrency
  - retries
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
    Because each step runs on its own serverless function, platform timeouts
    apply per-step — long workflows just split into more steps, and concurrency
    is bounded only by the provider.
  standard: >-
    In this architecture the orchestration layer is invoked only briefly to
    dispatch each step; every step then executes on its own serverless instance.
    That has two consequences. First, the platform's function timeout (5–15 min
    on typical serverless) applies to individual steps, not the whole workflow —
    so a workflow can run for a year while no single execution exceeds the
    limit. If a step risks timing out, you split it into two steps; if it fails,
    it retries in isolation, and the observability UI shows that one step
    retrying rather than the whole run failing.


    Second, because every workflow and step is just a serverless invocation,
    concurrency is effectively unbounded — you can kick off ten or ten thousand
    background agent runs and scale to whatever compute the provider offers,
    with no queue infrastructure of your own. Each run is addressable: you can
    list active runs, see which version and step each is on, and cancel them via
    API/CLI/UI.


    The practical lesson for anyone building long-running or high-fan-out
    agents: design step granularity deliberately. Step boundaries are
    simultaneously your retry boundaries, your timeout boundaries, your caching
    boundaries, and (coming) your concurrency-limit boundaries. Too coarse and
    you hit timeouts and re-do expensive work on retry; too fine and you add
    overhead. The granularity decision is the main lever you control.
stance: >-
  Running each agent step in its own serverless instance converts a workflow's
  global timeout and retry problem into independent per-step concerns that scale
  with unlimited concurrency.
related:
  - INS-260330-3EFC
  - INS-260330-A260
  - INS-260625-E19F
  - INS-260627-AA19
  - INS-260404-D646
  - INS-260327-B9AD
  - INS-260405-CA27
---
In this architecture the orchestration layer is invoked only briefly to dispatch each step; every step then executes on its own serverless instance. That has two consequences. First, the platform's function timeout (5–15 min on typical serverless) applies to individual steps, not the whole workflow — so a workflow can run for a year while no single execution exceeds the limit. If a step risks timing out, you split it into two steps; if it fails, it retries in isolation, and the observability UI shows that one step retrying rather than the whole run failing.

Second, because every workflow and step is just a serverless invocation, concurrency is effectively unbounded — you can kick off ten or ten thousand background agent runs and scale to whatever compute the provider offers, with no queue infrastructure of your own. Each run is addressable: you can list active runs, see which version and step each is on, and cancel them via API/CLI/UI.

The practical lesson for anyone building long-running or high-fan-out agents: design step granularity deliberately. Step boundaries are simultaneously your retry boundaries, your timeout boundaries, your caching boundaries, and (coming) your concurrency-limit boundaries. Too coarse and you hit timeouts and re-do expensive work on retry; too fine and you add overhead. The granularity decision is the main lever you control.

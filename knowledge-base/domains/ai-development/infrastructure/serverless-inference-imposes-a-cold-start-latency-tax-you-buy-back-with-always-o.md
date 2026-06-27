---
id: INS-260625-E19F
domain: ai-development
topic: infrastructure
title: >-
  Serverless inference imposes a cold-start latency tax you buy back with
  always-on workers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cold-start
  - latency
  - serverless
  - inference
  - tradeoffs
sources:
  - type: youtube
    title: 'Under 5 minutes to a deployed LLM endpoint — Audry Hsu, RunPod'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ILdE7FaAjVA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The first serverless request sat in queue ~41s for cold start while
    execution took only ~1.5s, so production latency requires configuring
    always-on 'active' workers.
  standard: >-
    In the live demo the first request waited about 41 seconds in the queue
    while execution itself took only ~1.5 seconds. The gap was almost entirely
    cold start: the container had to be created and the model downloaded before
    any work happened. Subsequent requests, hitting already-warm workers,
    returned far faster.


    This is the central tension of serverless inference. The cost savings come
    from spinning workers down when idle, but spinning down is exactly what
    creates the cold-start tax on the next request. RunPod's answer is 'active
    workers' — a configurable number of always-on workers that keep the model
    resident and respond immediately. So the real design decision is not
    serverless-vs-always-on but how many workers to pin warm: zero for
    cost-optimized batch work that tolerates latency, some for production APIs
    where first-request latency is user-visible. You are explicitly buying back
    latency with money, and the knob is exposed.
stance: >-
  Latency-sensitive serverless inference requires paying for always-on warm
  workers because cold starts dominate first-request latency.
related:
  - INS-260323-8896
  - INS-260625-8E1D
  - INS-260330-C06E
  - INS-260409-D012
  - INS-260627-51BE
  - INS-260423-6879
---
In the live demo the first request waited about 41 seconds in the queue while execution itself took only ~1.5 seconds. The gap was almost entirely cold start: the container had to be created and the model downloaded before any work happened. Subsequent requests, hitting already-warm workers, returned far faster.

This is the central tension of serverless inference. The cost savings come from spinning workers down when idle, but spinning down is exactly what creates the cold-start tax on the next request. RunPod's answer is 'active workers' — a configurable number of always-on workers that keep the model resident and respond immediately. So the real design decision is not serverless-vs-always-on but how many workers to pin warm: zero for cost-optimized batch work that tolerates latency, some for production APIs where first-request latency is user-visible. You are explicitly buying back latency with money, and the knob is exposed.

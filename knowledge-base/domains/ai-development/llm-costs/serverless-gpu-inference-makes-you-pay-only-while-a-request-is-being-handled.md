---
id: INS-260625-1C5E
domain: ai-development
topic: llm-costs
title: Serverless GPU inference makes you pay only while a request is being handled
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - serverless
  - gpu
  - inference
  - cost-optimization
  - autoscaling
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
    Serverless GPU endpoints spin workers down when idle and bill per-second
    only while handling requests, inverting the always-on cost model for spiky
    workloads.
  standard: >-
    RunPod's serverless product charges 'only while the worker is actually
    running and handling a request' — workers spin down when idle and cost
    nothing, versus an always-on container that bills continuously. The pricing
    in the demo was a fraction of a cent per second of active execution.


    The structural lesson generalizes past any one vendor: inference demand is
    usually bursty, and provisioning for peak load with always-on hardware
    wastes money during the troughs. Serverless shifts the cost curve to track
    actual utilization, which is the right default when you can't predict load
    ahead of time. The teams that benefit most are those that 'don't need to
    preempt and figure out how much compute they need' — the platform absorbs
    the capacity-planning problem in exchange for a per-request premium. The
    tradeoff to weigh is that per-request pricing carries a cold-start latency
    cost, which is why latency-sensitive paths still keep some capacity warm.
stance: >-
  For bursty or spiky inference workloads, serverless GPU billing that charges
  only during active request handling beats always-on provisioning.
related:
  - INS-260412-06A1
  - INS-260627-C559
  - INS-260327-5690
  - INS-260605-9A01
  - PRI-260411-9CB1
---
RunPod's serverless product charges 'only while the worker is actually running and handling a request' — workers spin down when idle and cost nothing, versus an always-on container that bills continuously. The pricing in the demo was a fraction of a cent per second of active execution.

The structural lesson generalizes past any one vendor: inference demand is usually bursty, and provisioning for peak load with always-on hardware wastes money during the troughs. Serverless shifts the cost curve to track actual utilization, which is the right default when you can't predict load ahead of time. The teams that benefit most are those that 'don't need to preempt and figure out how much compute they need' — the platform absorbs the capacity-planning problem in exchange for a per-request premium. The tradeoff to weigh is that per-request pricing carries a cold-start latency cost, which is why latency-sensitive paths still keep some capacity warm.

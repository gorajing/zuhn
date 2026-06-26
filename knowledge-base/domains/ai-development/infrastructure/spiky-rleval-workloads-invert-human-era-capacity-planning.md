---
id: INS-260625-7926
domain: ai-development
topic: infrastructure
title: Spiky RL/eval workloads invert human-era capacity planning
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - capacity-planning
  - rl-workloads
  - compute-economics
  - utilization
  - agent-infrastructure
sources:
  - type: youtube
    title: >-
      AI Agents Need Computers: 74% MoM Growth, 850K/Day Runs, & New Agent Cloud
      — Ivan Burazin, Daytona
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=kaX43RRRUKY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Background agents follow predictable human-like 'follow-the-sun' usage, but
    RL/eval runs are square-wave bursts (0 to 100k CPUs and back), pushing mean
    utilization to ~15% against 90% peaks and forcing capacity commitments.
  standard: >-
    Daytona splits its load into two patterns. Background/long-running agents
    (Cognition, Lovable, Harvey, OpenHands) usage mirrors humans — peaks at
    noon, troughs at midnight, low on weekends — which is projectable, so a
    high-growth company's capacity can be planned ahead. RL and eval workloads
    behave oppositely: a researcher fires off a run that instantly saturates
    10k-100k CPUs at 100%, runs to completion, then drops to zero, and they fire
    at unpredictable times (kicking off a run before sleep, not during business
    hours). The amplitude of these spikes is unprecedented in human
    infrastructure.


    The economic consequence is brutal: Daytona's mean utilization is ~15% even
    though it hits 90% at peak, because it must hold idle capacity to absorb
    bursts. Burazin reports the same problem voiced by Neon, Parallel, and
    others building agent-first infra — it is a shared, new class of problem.
    The mitigations are imperfect: lock customers into capacity commitments to
    fund peak reservation; geo-shift load Cloudflare-style (works for
    follow-the-sun, poorly for square-wave bursts); or buy 'just-in-time'
    overflow compute from other clouds at a loss when you exceed 100%. JIT
    overflow trades cost for latency, which is fatal for RL because idle CPU
    spin-up stalls the expensive GPU it feeds.


    The takeaway for anyone building or pricing agent compute: the
    unit-economics model from human cloud (steady, projectable load) does not
    transfer. You either over-provision, contractually pre-commit customers to
    peak, or accept money-losing overflow — and the right mix depends on whether
    the customer's latency tolerance lets you queue.
stance: >-
  Agent RL and eval workloads are so spiky that follow-the-sun capacity planning
  fails and providers must reserve for peak via customer commits.
related:
  - INS-260410-AF66
  - INS-260625-C69F
  - INS-260605-2186
  - INS-260605-6444
  - INS-260625-BB42
  - INS-260410-F40F
---
Daytona splits its load into two patterns. Background/long-running agents (Cognition, Lovable, Harvey, OpenHands) usage mirrors humans — peaks at noon, troughs at midnight, low on weekends — which is projectable, so a high-growth company's capacity can be planned ahead. RL and eval workloads behave oppositely: a researcher fires off a run that instantly saturates 10k-100k CPUs at 100%, runs to completion, then drops to zero, and they fire at unpredictable times (kicking off a run before sleep, not during business hours). The amplitude of these spikes is unprecedented in human infrastructure.

The economic consequence is brutal: Daytona's mean utilization is ~15% even though it hits 90% at peak, because it must hold idle capacity to absorb bursts. Burazin reports the same problem voiced by Neon, Parallel, and others building agent-first infra — it is a shared, new class of problem. The mitigations are imperfect: lock customers into capacity commitments to fund peak reservation; geo-shift load Cloudflare-style (works for follow-the-sun, poorly for square-wave bursts); or buy 'just-in-time' overflow compute from other clouds at a loss when you exceed 100%. JIT overflow trades cost for latency, which is fatal for RL because idle CPU spin-up stalls the expensive GPU it feeds.

The takeaway for anyone building or pricing agent compute: the unit-economics model from human cloud (steady, projectable load) does not transfer. You either over-provision, contractually pre-commit customers to peak, or accept money-losing overflow — and the right mix depends on whether the customer's latency tolerance lets you queue.

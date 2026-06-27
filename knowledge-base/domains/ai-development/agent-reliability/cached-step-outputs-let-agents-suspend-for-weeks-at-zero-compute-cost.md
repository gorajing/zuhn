---
id: INS-260627-AA19
domain: ai-development
topic: agent-reliability
title: Cached step outputs let agents suspend for weeks at zero compute cost
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - long-running-agents
  - state-management
  - cron
  - serverless
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
    Persisting each step's output means a workflow can sleep indefinitely and
    resume by replaying the deterministic loop over cached state — no process
    stays alive.
  standard: >-
    Conventionally, an agent that must wait — for a human approval, a scheduled
    time, an external event — either holds an expensive long-lived process open
    or is bolted onto queues and a database with hand-written retry and
    state-persistence code. The workflow model eliminates the wait cost
    entirely: calling `sleep('3 days')` inside the orchestration layer pauses
    the workflow and consumes nothing while paused. When the time elapses (or a
    webhook fires), the runtime replays the deterministic loop, rehydrates state
    from cached step outputs, and continues from exactly the line it left off.


    This collapses a whole category of infrastructure into a single primitive. A
    daily agent ('every morning read my emails and summarize') becomes `while
    (true) { await sleep('1 day'); ... }` — a cron job expressed as ordinary
    control flow, with no external scheduler. Agents can run over multi-month
    time horizons because waiting is free and state survives the death of any
    individual worker.


    The key distinction is that sleep is not a paused thread; it is a complete
    suspension. Nothing runs, no instance is held. The cached input/output of
    every completed step is the durable record, and replay-from-cache (not
    re-execution) is what reconstitutes the agent. This is the same log-centric
    idea that makes the executing worker disposable — the durable state lives
    outside any one process.
stance: >-
  A durable agent can wait days, weeks, or a year for an event without consuming
  any compute, because cached step outputs let the orchestrator rehydrate and
  resume instead of holding a process open.
related:
  - INS-260605-5159
  - INS-260619-16EF
  - INS-260627-51BE
  - INS-260627-8BD6
  - INS-260626-B5A6
  - INS-260627-718B
---
Conventionally, an agent that must wait — for a human approval, a scheduled time, an external event — either holds an expensive long-lived process open or is bolted onto queues and a database with hand-written retry and state-persistence code. The workflow model eliminates the wait cost entirely: calling `sleep('3 days')` inside the orchestration layer pauses the workflow and consumes nothing while paused. When the time elapses (or a webhook fires), the runtime replays the deterministic loop, rehydrates state from cached step outputs, and continues from exactly the line it left off.

This collapses a whole category of infrastructure into a single primitive. A daily agent ('every morning read my emails and summarize') becomes `while (true) { await sleep('1 day'); ... }` — a cron job expressed as ordinary control flow, with no external scheduler. Agents can run over multi-month time horizons because waiting is free and state survives the death of any individual worker.

The key distinction is that sleep is not a paused thread; it is a complete suspension. Nothing runs, no instance is held. The cached input/output of every completed step is the durable record, and replay-from-cache (not re-execution) is what reconstitutes the agent. This is the same log-centric idea that makes the executing worker disposable — the durable state lives outside any one process.

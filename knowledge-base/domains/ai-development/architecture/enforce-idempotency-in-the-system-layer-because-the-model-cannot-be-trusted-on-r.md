---
id: INS-260625-FA31
domain: ai-development
topic: architecture
title: >-
  Enforce Idempotency in the System Layer Because the Model Cannot Be Trusted on
  Retries
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - idempotency
  - state-management
  - reliability
  - retries
  - agent-memory
sources:
  - type: youtube
    title: 'Build Systems, Not Code - Angie Jones, Agentic AI Foundation'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZD9-4fW2HhM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Design agentic systems for idempotency in the system layer — logging every
    side-effecting action to memory — because a retry can cause a model to
    reword the request enough to look like a fresh task.
  standard: >-
    A prompt can run once and be done, but a useful agentic system has to
    survive messy realities: webhooks fire twice, runs fail to complete, flows
    get retried. That forces the agent to track its state — was this action
    already taken, did the input change, did the session crash, which parts can
    be safely retried — and this is not an exceptional case but the normal
    operating condition. The answer is the same one traditional software already
    uses: design for idempotency, so running the same thing twice doesn't cause
    a mess on the second run.


    Agents add a specific trap that ordinary software doesn't have: you cannot
    trust the model, because its outputs vary, so a naive retry risks the model
    rewording the request just enough that it looks like a brand-new task and
    fires the side effect again. Idempotency therefore has to be enforced by the
    system, not delegated to the model. In the example, the agent emails the
    realtor and logs that action to memory, then crashes before blocking the
    calendar; a later lint pass (which Jones notes you must run to keep agents
    healthy) sees the email went out but the calendar wasn't blocked, retries,
    and finishes only the missing step — crucially, it does not email the
    realtor again. It knows this only because it checks what the system wrote
    down. The persisted action log, not the model's memory, is what makes the
    retry safe.
stance: >-
  Agentic systems must enforce idempotency in surrounding code and persisted
  state rather than relying on the model, because a retried prompt can be
  reworded into what looks like a brand-new task and re-trigger side effects.
related:
  - INS-260410-1ED3
  - INS-260605-0C5C
  - INS-260605-83DA
  - INS-260627-3963
  - INS-260627-6418
  - INS-260605-3163
  - INS-260625-4DDB
  - INS-260626-9D78
  - INS-260627-2524
---
A prompt can run once and be done, but a useful agentic system has to survive messy realities: webhooks fire twice, runs fail to complete, flows get retried. That forces the agent to track its state — was this action already taken, did the input change, did the session crash, which parts can be safely retried — and this is not an exceptional case but the normal operating condition. The answer is the same one traditional software already uses: design for idempotency, so running the same thing twice doesn't cause a mess on the second run.

Agents add a specific trap that ordinary software doesn't have: you cannot trust the model, because its outputs vary, so a naive retry risks the model rewording the request just enough that it looks like a brand-new task and fires the side effect again. Idempotency therefore has to be enforced by the system, not delegated to the model. In the example, the agent emails the realtor and logs that action to memory, then crashes before blocking the calendar; a later lint pass (which Jones notes you must run to keep agents healthy) sees the email went out but the calendar wasn't blocked, retries, and finishes only the missing step — crucially, it does not email the realtor again. It knows this only because it checks what the system wrote down. The persisted action log, not the model's memory, is what makes the retry safe.

---
id: INS-260605-3206
domain: ai-development
topic: infrastructure
title: Externalize agent state so sandboxes can be disposable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-agents
  - sandboxing
  - state-management
  - rehydration
  - compute
sources:
  - type: blog
    title: The next evolution of the Agents SDK
    url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk/'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: The sandbox should be replaceable; the agent run should not be.
  standard: >-
    OpenAI frames harness/compute separation as a security, durability, and
    scaling primitive. If agent state is externalized, a failed or expired
    sandbox can be replaced and the run can continue from a checkpoint;
    subagents can also be routed to isolated sandboxes and parallelized.


    This sharpens the existing durable-agent lesson: don't merely persist chat
    logs. Persist the operational state needed to rehydrate work into fresh
    compute: manifests, checkpoints, tool history, output locations, and
    authority decisions. Compute becomes a per-step resource, not the identity
    of the agent run.
stance: >-
  A production agent harness should treat compute containers as disposable and
  keep run state outside them so failures, expiry, or parallelization do not
  destroy the task.
related:
  - INS-260605-41AE
  - INS-260605-A28F
  - INS-260625-EC7C
  - INS-260625-0492
  - INS-260605-74CC
---
OpenAI frames harness/compute separation as a security, durability, and scaling primitive. If agent state is externalized, a failed or expired sandbox can be replaced and the run can continue from a checkpoint; subagents can also be routed to isolated sandboxes and parallelized.

This sharpens the existing durable-agent lesson: don't merely persist chat logs. Persist the operational state needed to rehydrate work into fresh compute: manifests, checkpoints, tool history, output locations, and authority decisions. Compute becomes a per-step resource, not the identity of the agent run.

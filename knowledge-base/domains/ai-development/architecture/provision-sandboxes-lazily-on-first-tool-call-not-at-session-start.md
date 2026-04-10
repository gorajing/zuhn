---
id: INS-260410-0B73
domain: ai-development
topic: architecture
title: 'Provision sandboxes lazily on first tool call, not at session start'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - ttft
  - lazy-provisioning
  - performance
sources:
  - type: blog
    title: 'Scaling Managed Agents: Decoupling the brain from the hands'
    url: 'https://www.anthropic.com/engineering/managed-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Move container provisioning behind the first tool call so sessions that
    don't need a sandbox never wait for one — Anthropic saw p50 TTFT drop ~60%
    and p95 drop >90% from this change alone.
  standard: >-
    When Anthropic colocated the brain with the sandbox in a single container,
    every session had to wait for that container to be provisioned before
    inference could start — cloning the repo, booting the process, fetching
    pending events — even for sessions that would never touch the sandbox. That
    dead time shows up directly as time-to-first-token (TTFT), which is the
    latency users feel most acutely.


    Decoupling made containers into tools called on demand via execute(name,
    input) → string. A session that doesn't need a container right away doesn't
    wait for one; inference begins as soon as the orchestration layer pulls
    pending events from the session log. The measured payoff was roughly 60%
    reduction in p50 TTFT and over 90% reduction in p95 TTFT. Scaling to many
    concurrent agents became a matter of starting many stateless harnesses and
    connecting them to hands only if needed.


    The general lesson for agent infrastructure: audit which resources are
    provisioned eagerly per-session, ask whether they are on the critical path
    to the first response, and lazy-provision anything that isn't. The TTFT win
    compounds when brains outnumber hands — which is the common case.
stance: >-
  Eagerly provisioning an execution container for every agent session — even
  ones that may never touch a sandbox — forces users to pay full container setup
  cost before any inference can begin, and decoupling eliminates that latency.
related:
  - INS-260410-346B
  - INS-260325-EE14
  - INS-260410-303B
  - INS-260403-34A6
  - INS-260403-19C9
---
When Anthropic colocated the brain with the sandbox in a single container, every session had to wait for that container to be provisioned before inference could start — cloning the repo, booting the process, fetching pending events — even for sessions that would never touch the sandbox. That dead time shows up directly as time-to-first-token (TTFT), which is the latency users feel most acutely.

Decoupling made containers into tools called on demand via execute(name, input) → string. A session that doesn't need a container right away doesn't wait for one; inference begins as soon as the orchestration layer pulls pending events from the session log. The measured payoff was roughly 60% reduction in p50 TTFT and over 90% reduction in p95 TTFT. Scaling to many concurrent agents became a matter of starting many stateless harnesses and connecting them to hands only if needed.

The general lesson for agent infrastructure: audit which resources are provisioned eagerly per-session, ask whether they are on the critical path to the first response, and lazy-provision anything that isn't. The TTFT win compounds when brains outnumber hands — which is the common case.

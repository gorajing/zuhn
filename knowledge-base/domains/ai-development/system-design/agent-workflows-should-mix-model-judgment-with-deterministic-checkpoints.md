---
id: INS-260619-CBFA
domain: ai-development
topic: system-design
title: Agent workflows should mix model judgment with deterministic checkpoints
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - workflow
  - reliability
  - orchestration
sources:
  - type: audio
    title: The St. Regis San Francisco 2
date_extracted: '2026-06-19'
last_accessed: null
access_count: 0
indexed: true
embedded: false
resolutions:
  one_line: >-
    Do not make the agent responsible for remembering every operational step;
    put stable steps in the workflow and reserve model calls for judgment.
  standard: >-
    The speaker described coding agents that can plan, implement, commit,
    deploy, inspect logs, and loop, but also observed that unconstrained agent
    runs sometimes stop before the operationally important step. The remedy was
    to divide the job into explicit workflow stages, so the system can rely on
    the model for reasoning while the platform enforces the boring parts.


    This is the practical architecture of autonomy: intelligence where ambiguity
    exists, deterministic rails where product outcomes require consistency.
stance: >-
  Reliable autonomy comes from letting the model reason inside a workflow while
  making commit, deploy, log-checking, retry, and reporting steps deterministic
  enough to guarantee outcome completion.
---
The speaker described coding agents that can plan, implement, commit, deploy, inspect logs, and loop, but also observed that unconstrained agent runs sometimes stop before the operationally important step. The remedy was to divide the job into explicit workflow stages, so the system can rely on the model for reasoning while the platform enforces the boring parts.

This is the practical architecture of autonomy: intelligence where ambiguity exists, deterministic rails where product outcomes require consistency.

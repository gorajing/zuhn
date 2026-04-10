---
id: INS-260410-1ED3
domain: ai-development
topic: system-design
title: 'Agents are stateful, so production needs checkpoints not restarts'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reliability
  - production
  - state-management
  - error-handling
sources:
  - type: blog
    title: How we built our multi-agent research system
    url: 'https://www.anthropic.com/engineering/multi-agent-research-system'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In agentic systems a minor bug cascades across many turns, so production
    requires resumable execution, retry logic, and rainbow deployments — not
    stateless request handling.
  standard: >-
    Traditional software engineering assumes failures can be retried cheaply
    from the start of a request. Agents violate this: they run for long
    stretches, maintain state across many tool calls, and errors compound — one
    bad tool call can send the agent down an entirely different trajectory.
    Restarting a 50-turn research session because turn 47 failed is both
    expensive and infuriating for users.


    Anthropic's response was to build durable execution: checkpoints that let
    the agent resume from near the failure point, and to lean on the model's own
    intelligence to handle failures gracefully (telling the agent 'this tool is
    down' and letting it adapt works surprisingly well). Deterministic
    safeguards — retry logic, regular state snapshots — wrap the probabilistic
    core.


    Deployment is equally hard: since agents may be at any point in a long
    process, rolling updates would break in-flight agents. They use 'rainbow
    deployments' running old and new versions concurrently and gradually
    shifting traffic. The general principle: anything stateful needs explicit
    design for partial failure and in-flight upgrades, not the stateless
    assumptions of web services.
stance: >-
  Long-running agents must resume from checkpoints on failure because
  restart-from-scratch is prohibitively expensive and errors compound across
  turns.
related:
  - INS-260329-5EE7
  - INS-260409-96B0
  - INS-260410-7ED2
  - INS-260410-0E26
  - PRI-260328-F723
  - INS-260327-13B3
  - PRI-260323-1CF9
---
Traditional software engineering assumes failures can be retried cheaply from the start of a request. Agents violate this: they run for long stretches, maintain state across many tool calls, and errors compound — one bad tool call can send the agent down an entirely different trajectory. Restarting a 50-turn research session because turn 47 failed is both expensive and infuriating for users.

Anthropic's response was to build durable execution: checkpoints that let the agent resume from near the failure point, and to lean on the model's own intelligence to handle failures gracefully (telling the agent 'this tool is down' and letting it adapt works surprisingly well). Deterministic safeguards — retry logic, regular state snapshots — wrap the probabilistic core.

Deployment is equally hard: since agents may be at any point in a long process, rolling updates would break in-flight agents. They use 'rainbow deployments' running old and new versions concurrently and gradually shifting traffic. The general principle: anything stateful needs explicit design for partial failure and in-flight upgrades, not the stateless assumptions of web services.

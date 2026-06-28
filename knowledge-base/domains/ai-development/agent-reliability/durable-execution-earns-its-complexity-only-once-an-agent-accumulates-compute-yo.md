---
id: INS-260627-1443
domain: ai-development
topic: agent-reliability
title: >-
  Durable execution earns its complexity only once an agent accumulates compute
  you can't afford to lose
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - durable-execution
  - long-running-agents
  - fault-tolerance
  - temporal
  - deep-research
sources:
  - type: youtube
    title: 'From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=flf_IKnFYnE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Single-shot LLM calls don't need durable execution; long-running agents that
    have spent real time and money on intermediate steps do, because a crash
    forces a full restart.
  standard: >-
    A one-turn 'ask the LLM a question' interaction mostly just works and needs
    no durability layer. The cost-benefit flips once a workflow runs long enough
    that you've done enough compute, or spent enough wall-clock time, that
    losing it and restarting from scratch is genuinely painful for the user. The
    trigger isn't task complexity per se but accumulated,
    non-reproducible-for-free progress: a deep-research agent that has already
    run ten parallel web searches, or a 20-questions loop that's 46 steps deep,
    is exactly the case where an unreliable endpoint or a Kubernetes scale-down
    event would otherwise wipe everything.


    The practical decision rule: estimate the expected cost of a mid-run failure
    (time + inference spend + user-perceived latency to redo it) against the
    engineering overhead of adopting a durable framework. OpenAI reportedly runs
    its deep research on Temporal for exactly this reason. Reach for durable
    execution when long-horizon, multi-step, expensive-to-replay agents are in
    production — and skip it for short, cheap, idempotent calls where retrying
    the whole thing is trivial.
stance: >-
  Add durable execution when restarting from scratch becomes unacceptably
  costly, not as a default for every LLM call.
related:
  - INS-260327-1599
  - INS-260501-9465
  - INS-260605-D912
  - INS-260605-CA2B
  - INS-260605-E145
  - INS-260605-2627
  - INS-260625-E3A2
  - INS-260627-E496
---
A one-turn 'ask the LLM a question' interaction mostly just works and needs no durability layer. The cost-benefit flips once a workflow runs long enough that you've done enough compute, or spent enough wall-clock time, that losing it and restarting from scratch is genuinely painful for the user. The trigger isn't task complexity per se but accumulated, non-reproducible-for-free progress: a deep-research agent that has already run ten parallel web searches, or a 20-questions loop that's 46 steps deep, is exactly the case where an unreliable endpoint or a Kubernetes scale-down event would otherwise wipe everything.

The practical decision rule: estimate the expected cost of a mid-run failure (time + inference spend + user-perceived latency to redo it) against the engineering overhead of adopting a durable framework. OpenAI reportedly runs its deep research on Temporal for exactly this reason. Reach for durable execution when long-horizon, multi-step, expensive-to-replay agents are in production — and skip it for short, cheap, idempotent calls where retrying the whole thing is trivial.

---
id: INS-260605-0E19
domain: ai-development
topic: agent-patterns
title: >-
  Build agents as a dispatcher defining goals, not a traffic controller defining
  steps
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - control
  - mental-models
  - workflow-design
  - non-determinism
sources:
  - type: youtube
    title: >-
      Why (Senior) Engineers Struggle to Build AI Agents — Philipp Schmid,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3_gYbhABcAE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Traditional software made you a traffic controller dictating every move;
    agents make you a dispatcher who states the destination and trusts the agent
    to find the route.
  standard: >-
    Traditional development is a spec-code-test-deploy pipeline where the
    engineer controls exactly how the program behaves, like a traffic controller
    setting the lights, speeds, and allowed roads. Agent development inverts
    this: you write instructions, run the agent, observe, adjust prompts and
    tools, and run again in an iterative reliability loop. The right metaphor
    becomes a dispatcher — you say 'get me from Germany to London' and the agent
    decides whether to take the train, fly, or drive, sometimes doing weird
    things en route but still achieving the outcome.


    The practical implication is that the senior engineer's instinct to force a
    model into a rigid step-1-do-this, step-2-do-that workflow actively fights
    the model and degrades it. The advice is 'stop fighting the model': define
    the goal precisely, constrain the tools and guardrails, but let the agent
    choose its own path. This is the single hardest unlearning for experienced
    engineers because deterministic control was previously the mark of good
    engineering.
stance: >-
  Engineers should specify the agent's desired outcome and surrender control
  over the intermediate steps rather than scripting a deterministic workflow.
related:
  - INS-260412-0F9A
  - INS-260524-B783
  - INS-260524-2C7C
  - INS-260327-13B3
  - INS-260605-90E5
  - INS-260327-FE24
---
Traditional development is a spec-code-test-deploy pipeline where the engineer controls exactly how the program behaves, like a traffic controller setting the lights, speeds, and allowed roads. Agent development inverts this: you write instructions, run the agent, observe, adjust prompts and tools, and run again in an iterative reliability loop. The right metaphor becomes a dispatcher — you say 'get me from Germany to London' and the agent decides whether to take the train, fly, or drive, sometimes doing weird things en route but still achieving the outcome.

The practical implication is that the senior engineer's instinct to force a model into a rigid step-1-do-this, step-2-do-that workflow actively fights the model and degrades it. The advice is 'stop fighting the model': define the goal precisely, constrain the tools and guardrails, but let the agent choose its own path. This is the single hardest unlearning for experienced engineers because deterministic control was previously the mark of good engineering.

---
id: INS-260410-E977
domain: ai-development
topic: agent-patterns
title: Agents earn their cost only when tasks are open-ended and verifiable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - feedback-loops
  - verification
  - cost
sources:
  - type: blog
    title: Building Effective AI Agents
    url: 'https://www.anthropic.com/engineering/building-effective-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use true agents only when the task is open-ended enough that you can't
    hardcode the path, and the environment provides ground-truth feedback at
    each step to keep errors from compounding.
  standard: >-
    Anthropic's criteria for deploying a real agent (vs. a workflow) are strict:
    the task has to be open-ended enough that you can't predict the number of
    steps or hardcode a path, and you must have trust in the model's
    decision-making across many turns. Because agents operate autonomously,
    costs are higher and errors compound — one wrong decision early can poison
    everything downstream.


    The mitigation is environmental ground truth. Coding agents work because
    tests verify each change. Customer support agents work because resolution is
    observable. Without a feedback signal at each step, an autonomous loop
    becomes a hallucination amplifier. This is why the two applications
    Anthropic highlights (coding and customer support) both have clear success
    criteria and tight feedback loops — and why open-ended 'research agents'
    without such signals tend to drift. Extensive sandboxed testing and stopping
    conditions (max iterations) are non-negotiable safety rails.
stance: >-
  Agentic autonomy should be reserved for problems where the number of steps is
  unpredictable AND there is ground-truth environmental feedback to prevent
  compounding errors.
related:
  - INS-260403-0350
  - INS-260410-A27C
  - INS-260410-F910
  - INS-260410-38C8
  - PRI-260328-F723
---
Anthropic's criteria for deploying a real agent (vs. a workflow) are strict: the task has to be open-ended enough that you can't predict the number of steps or hardcode a path, and you must have trust in the model's decision-making across many turns. Because agents operate autonomously, costs are higher and errors compound — one wrong decision early can poison everything downstream.

The mitigation is environmental ground truth. Coding agents work because tests verify each change. Customer support agents work because resolution is observable. Without a feedback signal at each step, an autonomous loop becomes a hallucination amplifier. This is why the two applications Anthropic highlights (coding and customer support) both have clear success criteria and tight feedback loops — and why open-ended 'research agents' without such signals tend to drift. Extensive sandboxed testing and stopping conditions (max iterations) are non-negotiable safety rails.

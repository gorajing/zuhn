---
id: INS-260605-C513
domain: ai-development
topic: agent-patterns
title: >-
  Concentrate evaluation effort on the unpredictable 20% that breaks the
  business
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - edge-cases
  - risk
  - long-tail
  - agent-monitoring
sources:
  - type: youtube
    title: >-
      Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests?
      — Vincent Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4VhbYlfC7Gs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You can define 80% of agent behavior statically and intentfully, but the
    ever-changing 20% is where the disasters live — so point your adaptive evals
    there.
  standard: >-
    Koc frames the risk surface as an 80/20 split: about 80% of agent behavior
    can be defined statically in an intentful manner, but the remaining 20%
    always keeps changing — someone asks a weird question or uses the agent in a
    strange way — and 'it's that 20% that's going to mess up your business.'
    That long tail is precisely what static benchmarks cannot anticipate.


    The actionable move is to build agents whose job is to manage and watch that
    20%: monitor for the strange usage, and adapt the evals in response. Rather
    than trying to pre-enumerate every edge case (impossible), accept that the
    tail is dynamic and dedicate adaptive, always-on evaluation capacity
    specifically to detecting and absorbing it.
stance: >-
  The stable 80% of agent behavior is largely solved; evaluation attention
  belongs on the perpetually-shifting 20% edge that actually causes business
  failures.
related:
  - PRI-260328-39FA
  - INS-260625-DF35
  - INS-260605-6444
  - PRI-260407-00A1
  - INS-260605-365A
---
Koc frames the risk surface as an 80/20 split: about 80% of agent behavior can be defined statically in an intentful manner, but the remaining 20% always keeps changing — someone asks a weird question or uses the agent in a strange way — and 'it's that 20% that's going to mess up your business.' That long tail is precisely what static benchmarks cannot anticipate.

The actionable move is to build agents whose job is to manage and watch that 20%: monitor for the strange usage, and adapt the evals in response. Rather than trying to pre-enumerate every edge case (impossible), accept that the tail is dynamic and dedicate adaptive, always-on evaluation capacity specifically to detecting and absorbing it.

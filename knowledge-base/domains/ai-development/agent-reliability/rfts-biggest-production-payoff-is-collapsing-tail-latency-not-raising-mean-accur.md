---
id: INS-260627-D03E
domain: ai-development
topic: agent-reliability
title: >-
  RFT's biggest production payoff is collapsing tail latency, not raising mean
  accuracy
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - rft
  - tool-calls
  - production-reliability
  - p95
sources:
  - type: youtube
    title: 'Agent Reinforcement Fine Tuning – Will Hang & Cathy Zhou, OpenAI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=p1CmPZ2j6Lk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RFT tightens the distribution of tool-call counts, killing the slow, erratic
    long-tail runs that dominate production pain.
  standard: >-
    Across multiple case studies the headline accuracy gains were modest (Codeto
    +6%, Cognition +5 to +10 points) but the distributional change was dramatic.
    Before RFT, GPT-5 would occasionally fall into bad runs with 15+ tool calls
    per sample, or in Cosine's case 100+ messages in a single trajectory — slow,
    expensive, and behaviorally inconsistent. After RFT these long-tail
    trajectories disappeared and the distribution recentered tightly around two
    to four tool calls. Cognition's planning agent dropped from 8-10 alternating
    reason/call steps to 4 by learning to launch tool calls in parallel at the
    first step.


    The reason this matters more than the mean is that production reliability
    and cost are governed by the tail, not the average. A P95 run that takes 15+
    tool calls determines user-perceived latency and per-request cost far more
    than the median. RFT can be steered toward this directly by imposing a
    tool-call budget with a penalty for exceeding it; the model learns to stay
    within budget while preserving or exceeding the original accuracy. Framing
    RFT as a 'stabilizer' — it makes the agent's behavior predictable — is often
    a stronger business case than the accuracy delta alone.
stance: >-
  Reinforcement fine-tuning's most valuable production effect is eliminating P95
  long-tail tool-call runs, not improving average accuracy.
related:
  - INS-260605-1A2D
  - INS-260409-665F
  - INS-260626-2727
  - INS-260605-D0A0
  - INS-260626-475E
---
Across multiple case studies the headline accuracy gains were modest (Codeto +6%, Cognition +5 to +10 points) but the distributional change was dramatic. Before RFT, GPT-5 would occasionally fall into bad runs with 15+ tool calls per sample, or in Cosine's case 100+ messages in a single trajectory — slow, expensive, and behaviorally inconsistent. After RFT these long-tail trajectories disappeared and the distribution recentered tightly around two to four tool calls. Cognition's planning agent dropped from 8-10 alternating reason/call steps to 4 by learning to launch tool calls in parallel at the first step.

The reason this matters more than the mean is that production reliability and cost are governed by the tail, not the average. A P95 run that takes 15+ tool calls determines user-perceived latency and per-request cost far more than the median. RFT can be steered toward this directly by imposing a tool-call budget with a penalty for exceeding it; the model learns to stay within budget while preserving or exceeding the original accuracy. Framing RFT as a 'stabilizer' — it makes the agent's behavior predictable — is often a stronger business case than the accuracy delta alone.

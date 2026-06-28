---
id: INS-260627-16FE
domain: ai-development
topic: agent-patterns
title: 'Fine-tuning is the last lever in agent optimization, not the first'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - agent-optimization
  - rft
  - prompt-engineering
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
    Climb the optimization hierarchy — prompting, then task design, then RFT —
    and only fine-tune when cheaper levers are exhausted.
  standard: >-
    OpenAI frames agent improvement as a strict hierarchy: prompt engineering
    first (steer behavior cheaply), then task optimization (simplify the task,
    add guardrails, add/subtract tools, change tool behavior), and only then
    reinforcement fine-tuning, which changes model weights. RFT is the most
    powerful lever but also the most expensive and operationally heavy, so it is
    positioned as the move you make only after you've 'squeezed all the juice
    out of the task' with the earlier techniques.


    The practical discipline is to never reach for fine-tuning off the bat.
    Before training, your train and eval sets must closely match production
    traffic, you must establish a base-model baseline so you know what to
    expect, and you must apply prompt/task optimization. Fine-tuning then
    'pushes the frontier' from that optimized baseline rather than papering over
    problems that a better prompt or a removed tool would have fixed for free.
    Inverting this order wastes compute and obscures whether the weight changes
    are actually what helped.
stance: >-
  Teams should exhaust prompt optimization and task optimization before reaching
  for reinforcement fine-tuning.
related:
  - INS-260322-31F8
  - INS-260329-D062
  - INS-260330-70F5
  - INS-260330-A660
  - INS-260403-C709
  - INS-260625-02C7
  - PRI-260324-12CF
  - INS-260627-3D9A
  - INS-260628-29DF
  - PRI-260406-8FDF
---
OpenAI frames agent improvement as a strict hierarchy: prompt engineering first (steer behavior cheaply), then task optimization (simplify the task, add guardrails, add/subtract tools, change tool behavior), and only then reinforcement fine-tuning, which changes model weights. RFT is the most powerful lever but also the most expensive and operationally heavy, so it is positioned as the move you make only after you've 'squeezed all the juice out of the task' with the earlier techniques.

The practical discipline is to never reach for fine-tuning off the bat. Before training, your train and eval sets must closely match production traffic, you must establish a base-model baseline so you know what to expect, and you must apply prompt/task optimization. Fine-tuning then 'pushes the frontier' from that optimized baseline rather than papering over problems that a better prompt or a removed tool would have fixed for free. Inverting this order wastes compute and obscures whether the weight changes are actually what helped.

---
id: INS-260628-3C54
domain: ai-development
topic: agent-patterns
title: Latency-optimized agents are easier to steer through hidden tool chains
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-design
  - human-in-the-loop
  - latency
  - security
sources:
  - type: blog
    title: A Stealthy Multi-Tool Threshold Poisoning Attack Against MCP
    url: 'https://arxiv.org/html/2606.27027'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The paper's failure modes imply that consent friction and interaction
    checkpoints are security controls, not mere UX costs.
  standard: >-
    ShareLock failures often came from tool invocation fragility, models
    skipping auxiliary steps under time pressure, or aligned agents asking
    explicit user consent before the final malicious action. Those failures
    point to an agent-design trade-off: highly autonomous, latency-optimized
    agents can carry hidden tool chains to completion, while agents that pause
    on sensitive file, credential, payment, or cross-server actions can expose
    the attack.


    The practical implication for agent/system builders is to reserve friction
    for high-blast-radius operations. Do not make every tool call interactive,
    but do require explicit review for operations that cross trust boundaries or
    touch sensitive assets, especially when the action was not clearly requested
    by the user.
stance: >-
  Agents optimized to complete tasks without pausing can be more vulnerable to
  stealthy multi-step attacks than agents that deliberately interrupt risky
  actions.
related:
  - INS-260410-761E
  - INS-260329-BD83
  - PRI-260406-598F
  - INS-260329-4D24
  - INS-260405-5617
---
ShareLock failures often came from tool invocation fragility, models skipping auxiliary steps under time pressure, or aligned agents asking explicit user consent before the final malicious action. Those failures point to an agent-design trade-off: highly autonomous, latency-optimized agents can carry hidden tool chains to completion, while agents that pause on sensitive file, credential, payment, or cross-server actions can expose the attack.

The practical implication for agent/system builders is to reserve friction for high-blast-radius operations. Do not make every tool call interactive, but do require explicit review for operations that cross trust boundaries or touch sensitive assets, especially when the action was not clearly requested by the user.

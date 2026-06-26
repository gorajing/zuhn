---
id: INS-260626-0E8C
domain: ai-development
topic: alignment
title: 'Attack-derived blocklists cover known incidents, not novel threats'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-security
  - blocklists
  - prompt-injection
  - supply-chain
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Blocklists should trace to real incident patterns and carry an explicit
    maintenance burden.
  standard: >-
    The paper maps blocklist patterns to known software supply-chain incidents,
    including auto-confirm package execution, curl-pipe-shell delivery, detached
    process spawning, persistence paths, and git hook manipulation. It also
    states the limitation plainly: novel variants are not covered until new
    patterns are added.


    A good agent harness can use such blocklists as cheap pre-execution
    tripwires, but should not confuse them with full adversarial security. Their
    value comes from fast deterministic refusal on known bad shapes plus a
    process for adding newly observed attack patterns.
stance: >-
  Command and path blocklists are useful agent safety controls only when treated
  as maintained incident-derived defenses rather than complete security
  boundaries.
related:
  - INS-260530-AA02
  - INS-260605-93B8
  - INS-260626-14AE
  - INS-260403-9DB6
  - INS-260329-9010
---
The paper maps blocklist patterns to known software supply-chain incidents, including auto-confirm package execution, curl-pipe-shell delivery, detached process spawning, persistence paths, and git hook manipulation. It also states the limitation plainly: novel variants are not covered until new patterns are added.

A good agent harness can use such blocklists as cheap pre-execution tripwires, but should not confuse them with full adversarial security. Their value comes from fast deterministic refusal on known bad shapes plus a process for adding newly observed attack patterns.

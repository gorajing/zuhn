---
id: INS-260626-54A5
domain: ai-development
topic: agent-patterns
title: The verifier's rule governs which agent tasks actually get solved
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - verifiers-rule
  - verification
  - agents
  - rl-environments
  - task-design
sources:
  - type: youtube
    title: 'Agents need more than a chat - Jacob Lauritzen, CTO Legora'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XNtkiQJ49Ps'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a task is solvable and easy to verify, AI will solve it — verifiability,
    not solvability, is the gating factor.
  standard: >-
    The 'verifier's rule' (coined by Jason Wei for foundation models) states
    that a solvable task with cheap verification will get solved, because cheap
    verification enables RL environments, post-training, or simply running an
    agent in a loop with 'you did this wrong, fix it' until it converges.
    Lauritzen argues the rule applies to agents, not just model training.


    Crucially, generation difficulty and verification difficulty are independent
    axes. In legal: checking that all definitions in a contract are used and
    defined is trivially verifiable; writing a contract is easy to generate but
    nearly impossible to verify (true verification only happens when a judge
    rules on the language in court); litigation strategy is impossible to verify
    because five lawyers give five different answers with no objective truth.
    Coding shows the same split — a unit-tested feature is verifiable, but 'will
    this consumer app succeed' is not. When designing where to deploy agents,
    the question to ask is not 'can the model produce this?' but 'can I cheaply
    tell whether the output is right?'
stance: >-
  A task gets reliably solved by agents only to the degree that its output is
  easy to verify, regardless of how easy it is to generate.
related:
  - INS-260626-D7AE
  - PRI-260328-8E01
  - INS-260409-6833
  - INS-260330-5609
  - INS-260322-32E3
---
The 'verifier's rule' (coined by Jason Wei for foundation models) states that a solvable task with cheap verification will get solved, because cheap verification enables RL environments, post-training, or simply running an agent in a loop with 'you did this wrong, fix it' until it converges. Lauritzen argues the rule applies to agents, not just model training.

Crucially, generation difficulty and verification difficulty are independent axes. In legal: checking that all definitions in a contract are used and defined is trivially verifiable; writing a contract is easy to generate but nearly impossible to verify (true verification only happens when a judge rules on the language in court); litigation strategy is impossible to verify because five lawyers give five different answers with no objective truth. Coding shows the same split — a unit-tested feature is verifiable, but 'will this consumer app succeed' is not. When designing where to deploy agents, the question to ask is not 'can the model produce this?' but 'can I cheaply tell whether the output is right?'

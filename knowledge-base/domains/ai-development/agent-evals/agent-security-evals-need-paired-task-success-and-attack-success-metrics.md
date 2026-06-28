---
id: INS-260628-AF81
domain: ai-development
topic: agent-evals
title: Agent security evals need paired task-success and attack-success metrics
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - security-evals
  - asr
  - task-completion
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
    Measure security attacks by both compromise and normal task completion; a
    stealthy agent exploit succeeds because the user still gets the expected
    answer.
  standard: >-
    The paper evaluates ShareLock with Attack Success Rate, Task Completion
    Rate, and a harmonic metric combining both. This is better than reporting
    compromise alone because a disruptive exploit is easier for users or
    operators to notice. ShareLock is concerning precisely because the agent can
    perform the unauthorized action while still completing the user's primary
    Travel, Coding, Finance, or Office task.


    For agent/eval work, the implication is direct: security benchmarks should
    include benign-task quality under attack, user-visible disruption, and
    hidden side effects. A defense that lowers attack success by forcing every
    workflow into consent prompts may be valid, but the eval should make that
    autonomy/usability trade-off explicit rather than hiding it behind a single
    safety score.
stance: >-
  An agent attack is more operationally dangerous when it preserves normal task
  completion, so security evals should measure task completion alongside
  compromise rate.
related:
  - INS-260322-2E33
  - INS-260323-E874
  - INS-260410-382D
  - INS-260627-CFA6
  - INS-260627-08FA
  - INS-260627-8B75
  - INS-260327-76B2
  - INS-260628-09BA
---
The paper evaluates ShareLock with Attack Success Rate, Task Completion Rate, and a harmonic metric combining both. This is better than reporting compromise alone because a disruptive exploit is easier for users or operators to notice. ShareLock is concerning precisely because the agent can perform the unauthorized action while still completing the user's primary Travel, Coding, Finance, or Office task.

For agent/eval work, the implication is direct: security benchmarks should include benign-task quality under attack, user-visible disruption, and hidden side effects. A defense that lowers attack success by forcing every workflow into consent prompts may be valid, but the eval should make that autonomy/usability trade-off explicit rather than hiding it behind a single safety score.

---
id: INS-260505-A413
domain: ai-development
topic: research-methodology
title: >-
  Reasoning models spin up 'internal societies' of personalities to solve hard
  problems
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - reasoning-models
  - internal-society
  - rl-emergence
  - diversity
sources:
  - type: audio
    title: Final Panel
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Train an RL reasoning model on hard problems, and inside the reasoning trace
    it spins up little debate societies — more dramatic, extroverted, less
    agreeable than the base model.
  standard: >-
    James Evans's research on what's inside deep reasoning models: take an
    autoregressive LLM, RL it on a bank of 100K problems with reward for
    correctness, and look inside the resulting reasoning traces. Systematic
    finding: ~500% more conversational behavior than base models, ~9000% more
    positive-vs-negative engagement between internal sub-agents. The harder the
    problem, the more 'internal societies' the model spins up. These societies
    are diverse — Big Five analyses show them more dramatic, more extroverted,
    more open, less agreeable than the base model on average. Forcing models to
    talk to themselves inside contexts via Shapley-style mechanisms reproduces
    this benefit. Mechanism: diverse perspectives are required to escape local
    optima in hard problem search.


    Application: when deploying reasoning models for hard scientific problems,
    the diversity-of-perspectives inside the reasoning trace is part of how the
    model works, not noise to filter out. Don't naively summarize away the
    internal debate. For Memric audits specifically: the audit's value is
    showing the firm's own internal debate (slack threads, dissent, retirement
    events) — same pattern, captured at the firm level rather than the model
    level.
stance: >-
  Modern reasoning models (RL-trained on math problem banks) systematically
  generate internal multi-perspective conversations within their reasoning
  traces — about 9000% more positive-vs-negative engagement than base models —
  suggesting that diverse-perspective reasoning is what reinforcement learning
  on hard problems naturally produces.
related:
  - INS-260323-E520
  - INS-260330-CD7A
  - INS-260330-F140
  - INS-260403-2138
  - INS-260404-3959
  - INS-260403-5F41
  - INS-260403-AB55
  - INS-260403-BADB
  - INS-260410-939B
  - INS-260625-25BF
---
James Evans's research on what's inside deep reasoning models: take an autoregressive LLM, RL it on a bank of 100K problems with reward for correctness, and look inside the resulting reasoning traces. Systematic finding: ~500% more conversational behavior than base models, ~9000% more positive-vs-negative engagement between internal sub-agents. The harder the problem, the more 'internal societies' the model spins up. These societies are diverse — Big Five analyses show them more dramatic, more extroverted, more open, less agreeable than the base model on average. Forcing models to talk to themselves inside contexts via Shapley-style mechanisms reproduces this benefit. Mechanism: diverse perspectives are required to escape local optima in hard problem search.

Application: when deploying reasoning models for hard scientific problems, the diversity-of-perspectives inside the reasoning trace is part of how the model works, not noise to filter out. Don't naively summarize away the internal debate. For Memric audits specifically: the audit's value is showing the firm's own internal debate (slack threads, dissent, retirement events) — same pattern, captured at the firm level rather than the model level.

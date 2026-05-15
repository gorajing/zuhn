---
id: INS-260514-8413
domain: ai-development
topic: system-design
title: >-
  Code is no longer the scarce resource — human time, attention, and context
  window are
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - resource-inversion
  - agentic-development
  - openai
  - harness-engineering
sources:
  - type: youtube
    title: "Harness Engineering: How to Build Software When Humans Steer, Agents Execute —\_Ryan Lopopolo, OpenAI"
    author: AI Engineer
    url: 'https://youtu.be/am_oeAoUhew'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each engineer has access to 5, 50, or 5,000 engineers' worth of capacity
    24/7. Code is free. Human attention is what's scarce.
  standard: >-
    Lopopolo's framing of the post-2025 software engineering economics:
    implementation used to be the scarce resource that determined what a team
    could ship. In late 2025, GPT-5.2 reached capability where models produce
    code at quality isomorphic to human engineers. Code is now free — produce,
    refactor, delete at near-zero marginal cost. The scarce resources are: (1)
    human time required to direct the work, (2) human and model attention
    required to evaluate work, (3) model context window required to load
    relevant context. P3 tickets that previously never shipped now ship
    immediately because the human cost of writing them is gone — only the human
    cost of approving them remains.


    Application: stack-rank work by what consumes scarce resources (human
    attention, context budget), not by what consumes the freely-available
    resource (code). For Memric: same logic — the audit-deliverable cycle should
    optimize for human attention (Jin's review time, customer's intake time) not
    for code (which can be regenerated cheaply via agents). The Garbage
    Collection Day pattern (one day/week to eliminate friction) directly
    applies.
stance: >-
  In AI-assisted software development circa 2025-2026, the scarce resources have
  inverted: code itself is essentially free (agents produce it 24/7 in
  parallel), while the genuinely scarce resources are human time, human and
  model attention, and model context window — and engineering teams that don't
  recognize this inversion will misallocate effort.
related:
  - INS-260322-E8BA
  - INS-260327-CED9
  - INS-260328-8B2C
  - INS-260330-7241
  - INS-260405-A5C8
  - INS-260501-15D5
  - INS-260514-CEEA
  - INS-260423-E12B
  - INS-260405-880C
  - INS-260514-6EE6
---
Lopopolo's framing of the post-2025 software engineering economics: implementation used to be the scarce resource that determined what a team could ship. In late 2025, GPT-5.2 reached capability where models produce code at quality isomorphic to human engineers. Code is now free — produce, refactor, delete at near-zero marginal cost. The scarce resources are: (1) human time required to direct the work, (2) human and model attention required to evaluate work, (3) model context window required to load relevant context. P3 tickets that previously never shipped now ship immediately because the human cost of writing them is gone — only the human cost of approving them remains.

Application: stack-rank work by what consumes scarce resources (human attention, context budget), not by what consumes the freely-available resource (code). For Memric: same logic — the audit-deliverable cycle should optimize for human attention (Jin's review time, customer's intake time) not for code (which can be regenerated cheaply via agents). The Garbage Collection Day pattern (one day/week to eliminate friction) directly applies.

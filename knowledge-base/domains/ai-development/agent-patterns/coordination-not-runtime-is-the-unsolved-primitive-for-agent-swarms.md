---
id: INS-260605-A803
domain: ai-development
topic: agent-patterns
title: 'Coordination, not runtime, is the unsolved primitive for agent swarms'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-swarms
  - coordination
  - infrastructure
  - software-factory
  - orchestration
sources:
  - type: youtube
    title: 'The Missing Primitive for Agent Swarms — Lou Bichard, Ona'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5Sui_OnSRlY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When scaling coding-agent swarms, runtime, orchestration, and triggering are
    largely solved — coordination (agents picking up tasks from and
    collaborating with each other) is the actual bottleneck.
  standard: >-
    Bichard decomposes the infrastructure of an autonomous 'software factory'
    into three pillars: a runtime (somewhere for the agent to run),
    orchestration (scaling agents up and down, triggering them), and
    coordination (how agents interact, pick up tasks from each other, and
    collaborate). He argues the first two are effectively solved — there are
    many sandbox, container, and VM solutions for runtime, and webhook
    infrastructure already handles triggering on PRs or tickets.


    The genuinely hard, unsolved layer is coordination. Without it, you can spin
    up many agents but cannot get them to collaborate coherently or know when a
    human should intervene. For anyone building multi-agent systems, this
    reframes where engineering effort should go: not into yet another sandbox or
    scheduler, but into the coordination substrate that lets parallel agents
    share state and hand off work.
stance: >-
  Agent runtime and orchestration are effectively solved problems, and the real
  bottleneck for scaling agent swarms is coordination.
related:
  - INS-260326-7F79
  - INS-260327-C1A4
  - INS-260327-EDF0
  - INS-260327-33FA
  - PRI-260328-B4BD
  - PRI-260328-1ED1
  - PRI-260328-A65A
  - INS-260329-422F
  - INS-260330-8F07
  - INS-260330-77BB
---
Bichard decomposes the infrastructure of an autonomous 'software factory' into three pillars: a runtime (somewhere for the agent to run), orchestration (scaling agents up and down, triggering them), and coordination (how agents interact, pick up tasks from each other, and collaborate). He argues the first two are effectively solved — there are many sandbox, container, and VM solutions for runtime, and webhook infrastructure already handles triggering on PRs or tickets.

The genuinely hard, unsolved layer is coordination. Without it, you can spin up many agents but cannot get them to collaborate coherently or know when a human should intervene. For anyone building multi-agent systems, this reframes where engineering effort should go: not into yet another sandbox or scheduler, but into the coordination substrate that lets parallel agents share state and hand off work.

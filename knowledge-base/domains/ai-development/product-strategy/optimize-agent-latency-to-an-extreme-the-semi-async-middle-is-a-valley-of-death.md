---
id: INS-260627-A842
domain: ai-development
topic: product-strategy
title: >-
  Optimize agent latency to an extreme — the semi-async middle is a valley of
  death
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-ux
  - latency
  - interaction-design
  - coding-agents
  - product-design
sources:
  - type: youtube
    title: "Building Cursor Composer –\_Lee Robinson, Cursor"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fL1iJHtl51Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents that take 10-20 minutes land in a 'semi-async valley of death' — too
    slow to stay in the loop, too fast to fully context-switch away — so
    deliberately target either fast-synchronous or slow-autonomous, not the
    middle.
  standard: >-
    Robinson frames agent latency with two analogies: 'airplane Wi-Fi' (it
    works, but it's slow enough that you almost wish it weren't there) and the
    'semi-async valley of death.' When an agent takes 10-20 minutes, the user is
    trapped: it's too slow to keep them in the synchronous flow of hand-coding,
    but not slow enough to justify context-switching to other work the way a
    30-minute or multi-day background job would.


    The design implication is that latency is not a single axis to monotonically
    improve — it's a choice between two distinct interaction modes.
    Fast-and-synchronous keeps the human in the loop and feels like writing code
    by hand (Composer's target). Slow-and-autonomous lets the human fire off a
    task and walk away (the frontier-model-in-the-background mode). The worst
    place to land is the middle, where neither mental model holds.


    This generalizes beyond coding agents to any human-in-the-loop AI product:
    identify which interaction mode you're serving and optimize hard toward that
    extreme, rather than landing on an average latency that satisfies neither.
    Cursor's answer was to build a deliberately fast model (Composer) for the
    synchronous mode while using a frontier model (GPT-5.1-codex) for the slower
    planning/background mode.
stance: >-
  Coding agents should be either fast-and-synchronous or slow-and-autonomous;
  the 10-20 minute middle latency band destroys the user experience.
related:
  - INS-260405-5670
  - INS-260412-D787
  - INS-260501-4646
  - INS-260605-90FB
  - INS-260627-63F2
  - INS-260627-FF6C
  - INS-260424-3176
---
Robinson frames agent latency with two analogies: 'airplane Wi-Fi' (it works, but it's slow enough that you almost wish it weren't there) and the 'semi-async valley of death.' When an agent takes 10-20 minutes, the user is trapped: it's too slow to keep them in the synchronous flow of hand-coding, but not slow enough to justify context-switching to other work the way a 30-minute or multi-day background job would.

The design implication is that latency is not a single axis to monotonically improve — it's a choice between two distinct interaction modes. Fast-and-synchronous keeps the human in the loop and feels like writing code by hand (Composer's target). Slow-and-autonomous lets the human fire off a task and walk away (the frontier-model-in-the-background mode). The worst place to land is the middle, where neither mental model holds.

This generalizes beyond coding agents to any human-in-the-loop AI product: identify which interaction mode you're serving and optimize hard toward that extreme, rather than landing on an average latency that satisfies neither. Cursor's answer was to build a deliberately fast model (Composer) for the synchronous mode while using a frontier model (GPT-5.1-codex) for the slower planning/background mode.

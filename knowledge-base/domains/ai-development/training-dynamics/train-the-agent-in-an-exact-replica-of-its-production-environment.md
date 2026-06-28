---
id: INS-260627-C70B
domain: ai-development
topic: training-dynamics
title: Train the agent in an exact replica of its production environment
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - train-inference-parity
  - tool-use
  - environment-design
  - agent-training
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
    Cursor's RL goal was to mirror the production cursor environment 'as close
    as we possibly can' — same tools, same tool format, same tool responses —
    and the payoff is a model that becomes a 'power user' of tools like semantic
    search because it trained in exactly the environment it runs in.
  standard: >-
    The central design principle behind Composer's RL is train-inference parity.
    The team runs rollouts that pretend to be real cursor queries, using exactly
    the same ~10 tools (read files, edit files, codebase search, lints, shell),
    the same tool format, and the same tool responses the model will see in
    production. Any drift between the training environment and production
    degrades the transfer.


    The striking evidence is semantic search. Cursor trained its own embedding
    model for natural-language codebase queries. They found semantic search
    helped every model in the agent harness, but it helped Composer the most —
    because Composer was trained in the exact environment where that tool
    exists. The model effectively learns to be a power user of its own toolset,
    exploiting tool affordances that a model bolted onto the harness after the
    fact never internalized.


    The transferable lesson: an agent's tools are not interchangeable
    accessories added at inference time; they are part of the training
    environment. If you want an agent to wield a tool expertly, that tool must
    be present, identical, and exercised during training. This raises the bar
    for environment engineering — burstiness, consistency, and tool-response
    fidelity all become first-class training concerns.
stance: >-
  An agent trained in an environment identical to production inference becomes a
  disproportionately effective power user of its own tools.
related:
  - INS-260327-26BF
  - INS-260627-09DE
  - INS-260627-C44E
  - PRI-260411-9CB1
  - INS-260323-AF7B
  - INS-260627-FEB4
  - INS-260628-17BE
---
The central design principle behind Composer's RL is train-inference parity. The team runs rollouts that pretend to be real cursor queries, using exactly the same ~10 tools (read files, edit files, codebase search, lints, shell), the same tool format, and the same tool responses the model will see in production. Any drift between the training environment and production degrades the transfer.

The striking evidence is semantic search. Cursor trained its own embedding model for natural-language codebase queries. They found semantic search helped every model in the agent harness, but it helped Composer the most — because Composer was trained in the exact environment where that tool exists. The model effectively learns to be a power user of its own toolset, exploiting tool affordances that a model bolted onto the harness after the fact never internalized.

The transferable lesson: an agent's tools are not interchangeable accessories added at inference time; they are part of the training environment. If you want an agent to wield a tool expertly, that tool must be present, identical, and exercised during training. This raises the bar for environment engineering — burstiness, consistency, and tool-response fidelity all become first-class training concerns.

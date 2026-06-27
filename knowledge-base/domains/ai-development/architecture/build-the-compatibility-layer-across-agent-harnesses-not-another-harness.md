---
id: INS-260625-25AC
domain: ai-development
topic: architecture
title: 'Build the compatibility layer across agent harnesses, not another harness'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - infrastructure
  - abstraction-layers
  - model-portability
  - platform-strategy
sources:
  - type: youtube
    title: >-
      The Agent Cloud: Databricks’ Bet on the Future of AI — Matei Zaharia and
      Reynold Xin
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Yp_u1NpbkJg'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The valuable layer to own in agent infrastructure is the uniform interface
    that maps every harness and model to one API, so swapping them doesn't break
    sessions.
  standard: >-
    Databricks built Omnigent around a single common API: an agent session takes
    in messages or files and streams out text and tool calls, with cancel/turn
    controls — and that same interface is mapped onto Claude Code, Codex, the
    OpenAI SDK, Cursor, and others. Zaharia's point is that this mapping is the
    part worth maintaining: 'whenever Claude changes its API, you've got to
    tweak your thing or it's going to lose some messages.' The harnesses, UIs,
    and even the models are commoditizing and churning every few months; the
    abstraction that absorbs that churn is what teams actually depend on.


    The deeper principle is that in a fast-moving stack, value accrues to
    whoever owns the stable interface that survives the volatility underneath it
    — the same logic behind network protocols (IP) and Spark's connector
    ecosystem. They deliberately did NOT try to be a full stack: you can plug
    your own UI on top of the same server. For anyone building agent tooling,
    the lesson is to resist re-implementing yet another orchestrator and instead
    invest in the portability layer, because that is the asset that compounds
    while the layers above and below it get rewritten.
stance: >-
  In agentic infrastructure, the durable and defensible value is the common API
  that abstracts over harnesses and models, not any individual harness or UI.
related:
  - INS-260626-5B28
  - INS-260423-85B3
  - INS-260501-E377
  - INS-260626-E253
  - INS-260605-0A68
  - INS-260627-F9F3
---
Databricks built Omnigent around a single common API: an agent session takes in messages or files and streams out text and tool calls, with cancel/turn controls — and that same interface is mapped onto Claude Code, Codex, the OpenAI SDK, Cursor, and others. Zaharia's point is that this mapping is the part worth maintaining: 'whenever Claude changes its API, you've got to tweak your thing or it's going to lose some messages.' The harnesses, UIs, and even the models are commoditizing and churning every few months; the abstraction that absorbs that churn is what teams actually depend on.

The deeper principle is that in a fast-moving stack, value accrues to whoever owns the stable interface that survives the volatility underneath it — the same logic behind network protocols (IP) and Spark's connector ecosystem. They deliberately did NOT try to be a full stack: you can plug your own UI on top of the same server. For anyone building agent tooling, the lesson is to resist re-implementing yet another orchestrator and instead invest in the portability layer, because that is the asset that compounds while the layers above and below it get rewritten.

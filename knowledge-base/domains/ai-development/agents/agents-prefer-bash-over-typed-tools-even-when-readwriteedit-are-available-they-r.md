---
id: INS-260514-1D60
domain: ai-development
topic: agents
title: >-
  Agents prefer bash over typed tools — even when read/write/edit are available,
  they reroute through bash
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-tool-preferences
  - bash-tool
  - typed-tools
  - tool-design
  - empirical-agent-behavior
sources:
  - type: youtube
    title: Pi.dev explained by its creators | AI Agents Under the Hood
    author: Merantix AI Campus
    url: 'https://youtu.be/BQ_Es8k650I'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents prefer bash over typed tools — even when read/write/edit exist, they
    route through bash. Make bash safe and useful instead of building tools the
    model won't choose.
  standard: >-
    Max's empirical observation from running 10-20 Pi sessions daily: even with
    read/write/edit as first-class typed tools, agents tend to perform those
    operations through bash anyway. Grep, find, ls are off by default in Pi
    'because nobody uses them' — because the agent does the equivalent through
    bash. 'Agent's choice,' as Max puts it. This is a non-trivial design
    implication: the work to build elaborate typed-tool APIs (with type-checked
    arguments, structured returns, fine-grained permissions per tool) is
    significantly wasted effort if the model will just route around them via
    bash to get the same outcome. The harness design implications: (1) make bash
    safe — hook-based filtering, custom permissions, sandboxing if needed —
    rather than trying to constrain the agent by removing bash; (2) prefer
    composable bash conventions over typed tool APIs; (3) accept that the model
    has an emergent preference for the most flexible primitive available, and
    design with that grain rather than against it. The deeper observation:
    agents trained on internet code have seen millions of bash one-liners and
    very few examples of bespoke typed-tool APIs, so bash is the agent's native
    language. This effect may diminish as models are trained more on
    agent-tool-calling traces, but the current observation is structural.
    Implication for builders: ask yourself before adding a typed tool 'would the
    agent choose this over bash?' — if the answer is unclear, don't build the
    tool.
stance: >-
  Even when a coding harness exposes typed file-manipulation tools (read, write,
  edit), agents empirically prefer to do everything through bash — meaning
  building elaborate typed tool APIs may be wasted effort because the model will
  route around them via bash anyway, and the right design choice is to make bash
  safe and useful rather than to add tools the model won't use.
related:
  - INS-260605-0C88
  - INS-260409-3C6A
  - INS-260625-3768
  - INS-260605-F512
  - INS-260602-EA48
---
Max's empirical observation from running 10-20 Pi sessions daily: even with read/write/edit as first-class typed tools, agents tend to perform those operations through bash anyway. Grep, find, ls are off by default in Pi 'because nobody uses them' — because the agent does the equivalent through bash. 'Agent's choice,' as Max puts it. This is a non-trivial design implication: the work to build elaborate typed-tool APIs (with type-checked arguments, structured returns, fine-grained permissions per tool) is significantly wasted effort if the model will just route around them via bash to get the same outcome. The harness design implications: (1) make bash safe — hook-based filtering, custom permissions, sandboxing if needed — rather than trying to constrain the agent by removing bash; (2) prefer composable bash conventions over typed tool APIs; (3) accept that the model has an emergent preference for the most flexible primitive available, and design with that grain rather than against it. The deeper observation: agents trained on internet code have seen millions of bash one-liners and very few examples of bespoke typed-tool APIs, so bash is the agent's native language. This effect may diminish as models are trained more on agent-tool-calling traces, but the current observation is structural. Implication for builders: ask yourself before adding a typed tool 'would the agent choose this over bash?' — if the answer is unclear, don't build the tool.

---
id: INS-260327-79E8
domain: ai-development
topic: agent-patterns
title: Train agents through RL discovery rather than programming tool usage patterns
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - reinforcement-learning
  - agent-training
  - tool-discovery
  - emergent-behavior
sources:
  - type: youtube
    title: 'OpenAI Just Released ChatGPT Agent, Its Most Powerful Agent Yet'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=YNWWu0aZ5pY'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenAI trained ChatGPT Agent via RL across thousands of VMs, letting the
    model discover when to use text vs visual browsing rather than programming
    tool selection rules.
  standard: >-
    Rather than programming rules for when the agent should use each tool, the
    OpenAI team let the model discover optimal strategies through reinforcement
    learning across thousands of virtual machines. The model learned when text
    browsing is more efficient versus when visual browsing is necessary (e.g.,
    for search filters, seeing product images, or accessing paywalled content).


    This approach produces agents that are more flexible and capable than
    hand-coded alternatives because the model can discover tool usage patterns
    humans wouldn't think to specify. It also scales better: as new tools are
    added, RL can learn the optimal interleaving without manual programming of
    every tool-tool interaction. This represents a broader shift in AI
    development where product insights about what tools to provide matter as
    much as raw compute power.
stance: >-
  Letting models discover optimal tool usage strategies through reinforcement
  learning across thousands of virtual machines produces more capable and
  flexible agents than hand-coding specific tool usage patterns.
related:
  - INS-260327-C962
  - INS-260329-B2F4
  - INS-260404-CE26
  - INS-260329-BCB7
  - INS-260410-F985
evidence:
  - id: INS-260325-175B
    type: SUPPORTS
  - id: INS-260329-BCB7
    type: SUPPORTS
  - id: INS-260329-70D5
    type: SUPPORTS
  - id: INS-260329-E208
    type: SUPPORTS
---
Rather than programming rules for when the agent should use each tool, the OpenAI team let the model discover optimal strategies through reinforcement learning across thousands of virtual machines. The model learned when text browsing is more efficient versus when visual browsing is necessary (e.g., for search filters, seeing product images, or accessing paywalled content).

This approach produces agents that are more flexible and capable than hand-coded alternatives because the model can discover tool usage patterns humans wouldn't think to specify. It also scales better: as new tools are added, RL can learn the optimal interleaving without manual programming of every tool-tool interaction. This represents a broader shift in AI development where product insights about what tools to provide matter as much as raw compute power.

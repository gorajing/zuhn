---
id: INS-260605-303C
domain: ai-development
topic: agents
title: 'Agent autonomy is bottlenecked by the interaction channel, not the model'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-autonomy
  - human-in-the-loop
  - tooling
  - interaction-design
sources:
  - type: youtube
    title: >-
      Let's Talk About FOMAT: Fear of Missing Agent Time — Michael Richman,
      Cmd+Ctrl
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=W-SX_srBa3Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents look less autonomous than they are because you can only reach them in
    their native environment, not because the models are weak.
  standard: >-
    The common framing is that agents aren't autonomous enough because the
    models can't yet run unsupervised. Richman reframes the bottleneck as the
    interaction surface: agents 'are not yet' maximally autonomous 'especially
    not if you're limited to how you can interact with them to their native
    environments.' An agent that blocks for input two minutes into a 30-minute
    task and waits idle is not failing on capability — it's failing on
    reachability.


    This matters because it changes where you invest. Rather than waiting for a
    smarter model to remove the human from the loop, you can recover most of the
    lost value today by building channels that let the agent reach you and you
    reach it from anywhere. As task durations stretch from minutes to hours to
    days, the cost of an unreachable blocked agent compounds — idle time is the
    tax you pay for a poor interaction channel.
stance: >-
  Coding agents are constrained more by being trapped in their native
  terminal/IDE than by their underlying intelligence.
related:
  - INS-260412-3C64
  - INS-260408-C572
  - INS-260501-E377
  - INS-260501-FDF0
  - INS-260605-20DD
---
The common framing is that agents aren't autonomous enough because the models can't yet run unsupervised. Richman reframes the bottleneck as the interaction surface: agents 'are not yet' maximally autonomous 'especially not if you're limited to how you can interact with them to their native environments.' An agent that blocks for input two minutes into a 30-minute task and waits idle is not failing on capability — it's failing on reachability.

This matters because it changes where you invest. Rather than waiting for a smarter model to remove the human from the loop, you can recover most of the lost value today by building channels that let the agent reach you and you reach it from anywhere. As task durations stretch from minutes to hours to days, the cost of an unreachable blocked agent compounds — idle time is the tax you pay for a poor interaction channel.

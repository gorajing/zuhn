---
id: INS-260627-B093
domain: ai-development
topic: system-building
title: >-
  Training reward can disagree with deployment reliability in crowded physical
  systems
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - metrics
  - rl
  - deployment
  - reliability
  - physical-ai
sources:
  - type: blog
    title: >-
      Reinforcement Learning Enables Autonomous Microrobot Navigation and
      Intervention in Simulated Blood Capillaries
    url: 'https://arxiv.org/html/2606.26154'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Reward peaks and deployment success peaks are not the same surface.
  standard: >-
    The paper reports that cumulative training reward peaks for faster
    lower-mid-size robots, while the highest deployment success probability
    occurs for mid-sized robots at moderate speed. Faster agents learn to reach
    targets quickly and accumulate reward, but appear more exposed to
    catastrophic failures in crowded capillary flow. This is a durable metric
    lesson: reward can track progress under the training objective while missing
    stability under deployment perturbations. For agent systems, the analogue is
    optimizing for quick task completion while underweighting robustness to
    interrupts, malformed state, adversarial inputs, or environmental friction.
stance: >-
  Optimization metrics that reward fast progress can select policies or hardware
  regimes that are less reliable under real deployment constraints.
related:
  - INS-260330-DC78
  - INS-260402-7E2A
  - INS-260325-3B58
  - INS-260325-4846
  - PRI-260406-8A97
  - PRI-260406-818D
---
The paper reports that cumulative training reward peaks for faster lower-mid-size robots, while the highest deployment success probability occurs for mid-sized robots at moderate speed. Faster agents learn to reach targets quickly and accumulate reward, but appear more exposed to catastrophic failures in crowded capillary flow. This is a durable metric lesson: reward can track progress under the training objective while missing stability under deployment perturbations. For agent systems, the analogue is optimizing for quick task completion while underweighting robustness to interrupts, malformed state, adversarial inputs, or environmental friction.

---
id: INS-260404-DDC8
domain: ai-development
topic: ai-capabilities
title: >-
  Figure AI replaced 100K lines of robotics code with a layered neural network
  architecture
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - robotics
  - neural-networks
  - humanoid-robots
  - figure-ai
  - vla-models
sources:
  - type: blog
    title: Neuralink's 21 Telepathy Trials in 2 Years
    author: Chamath Palihapitiya
    url: 'https://chamath.substack.com/p/what-i-read-this-week-171'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Figure AI's Helix 02 replaces over 100,000 lines of C++ with a three-layer
    neural network that handles balance, sensor fusion, and reasoning in a
    single system.
  standard: >-
    Figure AI's Helix 02 architecture demonstrates the power of end-to-end
    neural control over traditional hand-coded robotics. Their System 0 (trained
    on 1,000+ hours of human motion for balance), System 1 (sensor-to-actuator
    control), and System 2 (semantic reasoning) layers replace a massive C++
    codebase with a unified visuomotor neural network.


    The key innovation is solving loco-manipulation — coordinating walking and
    object handling simultaneously — which was previously intractable because
    each action shifts the balance requirements of every other action. Palm
    cameras and 3-gram tactile sensitivity show that the bottleneck in robotics
    is shifting from hardware to the control software paradigm. This suggests
    general-purpose humanoid robots will be enabled not by better motors, but by
    better neural architectures.
stance: >-
  Monolithic neural network control systems will outperform hand-coded robotics
  stacks for general-purpose humanoid robots
related:
  - INS-260330-189F
  - INS-260404-E91F
  - INS-260403-219F
  - INS-260327-35C7
  - INS-260405-E4FC
---
Figure AI's Helix 02 architecture demonstrates the power of end-to-end neural control over traditional hand-coded robotics. Their System 0 (trained on 1,000+ hours of human motion for balance), System 1 (sensor-to-actuator control), and System 2 (semantic reasoning) layers replace a massive C++ codebase with a unified visuomotor neural network.

The key innovation is solving loco-manipulation — coordinating walking and object handling simultaneously — which was previously intractable because each action shifts the balance requirements of every other action. Palm cameras and 3-gram tactile sensitivity show that the bottleneck in robotics is shifting from hardware to the control software paradigm. This suggests general-purpose humanoid robots will be enabled not by better motors, but by better neural architectures.

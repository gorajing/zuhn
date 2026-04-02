---
id: INS-260327-9EFE
domain: ai-development
topic: agent-patterns
title: End-to-end learning beats modular pipelines for physical intelligence
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - robotics
  - end-to-end-learning
  - modular-design
  - system-architecture
sources:
  - type: youtube
    title: >-
      Training General Robots for Any Task: Physical Intelligence’s Karol
      Hausman and Tobi Springenberg
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=OJCT-HGxPjk'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The classical robotics pipeline failed not because individual components
    were bad, but because the hand-designed interfaces between them could not
    capture real-world complexity.
  standard: >-
    Physical Intelligence's founders describe three eras of robotics:
    hand-coding rules (failed because the world is too complex), learning
    individual components separately (better but still brittle), and end-to-end
    pixels-to-actions learning (current approach). The critical insight is that
    decomposing the problem into perception, planning, and control created
    artificial interfaces that became the failure points.


    When you pick up a glass, you don't think in terms of 'perceive object
    position, plan trajectory, execute control.' The pipeline approach imposed
    interfaces that broke down in practice. Vision-language-action models solved
    this by going straight from sensory inputs to motor outputs, letting the
    learning algorithm figure out how to decompose the task internally. This
    mirrors the broader AI trend where end-to-end approaches consistently
    outperform hand-engineered pipelines.
stance: >-
  Breaking robotics into separate perception, planning, and control modules was
  fundamentally wrong because the predefined interfaces between components are
  the pieces that fail, not the individual components themselves.
related:
  - INS-260321-D370
  - PRI-260328-7A4D
  - INS-260402-F479
  - INS-260321-9906
  - PRI-260328-1ED1
---
Physical Intelligence's founders describe three eras of robotics: hand-coding rules (failed because the world is too complex), learning individual components separately (better but still brittle), and end-to-end pixels-to-actions learning (current approach). The critical insight is that decomposing the problem into perception, planning, and control created artificial interfaces that became the failure points.

When you pick up a glass, you don't think in terms of 'perceive object position, plan trajectory, execute control.' The pipeline approach imposed interfaces that broke down in practice. Vision-language-action models solved this by going straight from sensory inputs to motor outputs, letting the learning algorithm figure out how to decompose the task internally. This mirrors the broader AI trend where end-to-end approaches consistently outperform hand-engineered pipelines.

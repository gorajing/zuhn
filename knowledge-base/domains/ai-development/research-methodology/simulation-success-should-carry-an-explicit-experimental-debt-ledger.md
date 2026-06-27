---
id: INS-260627-C757
domain: ai-development
topic: research-methodology
title: Simulation success should carry an explicit experimental-debt ledger
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-for-science
  - simulation
  - experimental-constraints
  - research-methodology
  - deployment-gap
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
  one_line: >-
    The paper's credibility comes partly from naming the physics it has not
    solved yet.
  standard: >-
    The authors are explicit that the result is simulation-bound: red blood
    cells are simplified as spherical effective particles, vessel walls are
    rigid, physiological flow speeds are much higher than simulated flow,
    pulsatility is not modeled, chemical gradients may advect at higher speeds,
    and code/data are only promised for release. This matters because the AI
    capability is not the full product; hardware propulsion, sensing, in vivo
    gradients, and 3D fluid dynamics remain gating constraints. A good AI
    application digest should preserve that boundary. In agent/eval work, every
    impressive simulated result should include the non-model constraints that
    still determine real-world viability.
stance: >-
  AI-for-science results are more useful when the remaining non-AI constraints
  are named as first-class blockers instead of buried as generic limitations.
related:
  - INS-260412-15D0
  - PRI-260406-7EFF
  - INS-260410-81DC
  - INS-260327-3F40
  - INS-260505-5A06
---
The authors are explicit that the result is simulation-bound: red blood cells are simplified as spherical effective particles, vessel walls are rigid, physiological flow speeds are much higher than simulated flow, pulsatility is not modeled, chemical gradients may advect at higher speeds, and code/data are only promised for release. This matters because the AI capability is not the full product; hardware propulsion, sensing, in vivo gradients, and 3D fluid dynamics remain gating constraints. A good AI application digest should preserve that boundary. In agent/eval work, every impressive simulated result should include the non-model constraints that still determine real-world viability.

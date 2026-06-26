---
id: INS-260625-ECB6
domain: ai-development
topic: limitations
title: Imitation-shaped rewards suppress exploration of alternative valid solutions
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reward-design
  - exploration
  - reinforcement-learning
  - limitations
  - imitation
sources:
  - type: youtube
    title: SWE-RL by Meta — Reinforcement Learning for Software Engineering LLMs
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=DimD-eX0DW8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because SWE-RL scores patches against the one merged PR, it may penalize
    correct fixes that differ from how the human originally solved it.
  standard: >-
    The paper itself flags a limitation of the similarity-to-oracle reward:
    there is usually more than one correct way to fix a bug, but the reward only
    credits resemblance to the specific patch a human merged. This biases the
    policy toward reproducing the demonstrated solution and away from exploring
    alternative approaches that may be equally or more correct. This is the
    inherent cost of any imitation-shaped reward — it inherits the solution
    distribution of the reference corpus and caps the model's creativity at that
    distribution. When designing reference-similarity rewards, treat the
    reference as one point in a solution space, not the boundary of it;
    execution-based or multi-reference rewards better preserve exploration.
stance: >-
  Rewarding similarity to a single reference solution constrains a model to
  imitate the demonstrated approach rather than discovering equally-valid
  alternatives.
related:
  - INS-260501-AE73
  - INS-260605-80D0
  - INS-260625-8BC8
  - INS-260329-F84E
  - PRI-260327-8D8C
  - INS-260514-6DF3
---
The paper itself flags a limitation of the similarity-to-oracle reward: there is usually more than one correct way to fix a bug, but the reward only credits resemblance to the specific patch a human merged. This biases the policy toward reproducing the demonstrated solution and away from exploring alternative approaches that may be equally or more correct. This is the inherent cost of any imitation-shaped reward — it inherits the solution distribution of the reference corpus and caps the model's creativity at that distribution. When designing reference-similarity rewards, treat the reference as one point in a solution space, not the boundary of it; execution-based or multi-reference rewards better preserve exploration.

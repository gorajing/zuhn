---
id: INS-260605-564D
domain: ai-development
topic: llm-training
title: >-
  Reinforcement learning is the only technique that integrates feedback
  mathematically
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - post-training
  - instruction-fine-tuning
  - rlhf
  - feedback
sources:
  - type: youtube
    title: >-
      Lessons from Trillion Token Deployments at Fortune 500s — Alessandro
      Cappelli, Adaptive ML
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X6NShR2ccOg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Prompting, SFT, and RL all steer model behavior, but RL integrates feedback
    as a reward signal by design and reaches the same quality with a much
    smaller model.
  standard: >-
    Prompting, instruction fine-tuning, and reinforcement learning all aim at
    the same goal — steering a model's behavior — but they are not equally
    effective. RL is disproportionately more effective because it absorbs
    feedback from heterogeneous sources (client feedback, business metrics,
    environmental reward) into a reward signal almost by construction, rather
    than forcing you to manually edit prompts or regenerate training data every
    week.


    The practical payoff is 'outsize performance': RL can match the quality of
    supervised fine-tuning with a substantially smaller model. That smaller
    footprint is what actually unlocks production, because the downstream
    economics and latency only work at a smaller model size. The catch is that
    RL is genuinely hard — algorithms like PPO require orchestrating four large
    language models simultaneously — which is why most teams default to the
    weaker but easier prompt/SFT levers and then stall.
stance: >-
  Reinforcement learning is disproportionately more effective than instruction
  fine-tuning or prompting because it integrates feedback by design rather than
  requiring you to rebuild datasets or hand-tune prompts.
related:
  - INS-260412-9777
  - INS-260605-B82E
  - INS-260501-FDF0
  - INS-260605-D895
  - INS-260412-1A10
---
Prompting, instruction fine-tuning, and reinforcement learning all aim at the same goal — steering a model's behavior — but they are not equally effective. RL is disproportionately more effective because it absorbs feedback from heterogeneous sources (client feedback, business metrics, environmental reward) into a reward signal almost by construction, rather than forcing you to manually edit prompts or regenerate training data every week.

The practical payoff is 'outsize performance': RL can match the quality of supervised fine-tuning with a substantially smaller model. That smaller footprint is what actually unlocks production, because the downstream economics and latency only work at a smaller model size. The catch is that RL is genuinely hard — algorithms like PPO require orchestrating four large language models simultaneously — which is why most teams default to the weaker but easier prompt/SFT levers and then stall.

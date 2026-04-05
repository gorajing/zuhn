---
id: INS-260403-5FD1
domain: ai-development
topic: llm-training
title: Pure reinforcement learning can match supervised fine-tuning for reasoning
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - chain-of-thought
  - training-methodology
  - deepseek
sources:
  - type: youtube
    title: This free Chinese AI just crushed OpenAI's $200 o1 model...
    author: Fireship
    url: 'https://www.youtube.com/watch?v=-2k1rcRzsLA'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepSeek R1 achieves o1-level reasoning using pure RL instead of supervised
    fine-tuning with worked examples.
  standard: >-
    DeepSeek R1 demonstrates that a model can develop strong chain-of-thought
    reasoning through direct reinforcement learning alone — giving the model
    problems without solutions and letting it learn by trial and reward scoring.
    This contrasts with the supervised fine-tuning approach where models are
    shown step-by-step solutions evaluated by humans or other models.


    The implication is significant: if pure RL can match SFT-based reasoning,
    the bottleneck shifts from expensive human-curated training data to compute
    and reward function design. This could accelerate reasoning model
    development for teams that lack proprietary training datasets but have
    compute resources.
stance: >-
  Direct reinforcement learning without supervised fine-tuning examples produces
  reasoning capabilities on par with models trained with human-curated
  step-by-step demonstrations.
related:
  - INS-260325-6FA7
  - INS-260403-2138
  - INS-260322-32E3
  - INS-260325-20C4
  - INS-260329-04FA
  - INS-260329-939E
evidence:
  - id: INS-260329-939E
    type: CHALLENGES
    classified_at: '2026-04-05'
---
DeepSeek R1 demonstrates that a model can develop strong chain-of-thought reasoning through direct reinforcement learning alone — giving the model problems without solutions and letting it learn by trial and reward scoring. This contrasts with the supervised fine-tuning approach where models are shown step-by-step solutions evaluated by humans or other models.

The implication is significant: if pure RL can match SFT-based reasoning, the bottleneck shifts from expensive human-curated training data to compute and reward function design. This could accelerate reasoning model development for teams that lack proprietary training datasets but have compute resources.

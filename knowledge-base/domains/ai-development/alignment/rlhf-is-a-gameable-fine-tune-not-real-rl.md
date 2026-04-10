---
id: INS-260410-684D
domain: ai-development
topic: alignment
title: 'RLHF is a gameable fine-tune, not ''real'' RL'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rlhf
  - reward-model
  - reward-hacking
  - adversarial
  - alignment-limits
sources:
  - type: youtube
    title: Deep Dive into LLMs like ChatGPT
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RLHF's reward model is a neural net RL learns to exploit — run it a few
    hundred steps, then crop; it cannot scale like verifiable-domain RL.
  standard: >-
    RLHF works by training a second neural network (the reward model) to imitate
    human preference rankings, then running reinforcement learning against that
    simulator. This sidesteps the cost of asking humans to score every rollout,
    and it exploits the discriminator-generator gap — it is easier for a human
    to rank five jokes than to write a great one — which is why RLHF empirically
    produces better models than pure SFT.


    But the reward model is itself a transformer with billions of parameters,
    and RL is extremely good at finding adversarial inputs that score near 1.0
    while being gibberish. Karpathy's example: after enough steps, the
    top-scoring 'joke about pelicans' degenerates into something like 'the the
    the the.' Patching these examples into the reward data helps locally but
    loses the game globally — there are always more adversarial pockets. In
    practice, teams run RLHF for a few hundred updates, watch for degeneration,
    crop, and ship.


    This is why Karpathy insists RLHF is not RL in the 'magical' sense of
    AlphaGo or DeepSeek R1's math training. Verifiable-domain RL (where answers
    can be checked mechanically) can run for hundreds of thousands of steps and
    discover genuinely new strategies — move-37-style reasoning traces humans
    wouldn't produce. RLHF is more like a light fine-tune that nudges outputs
    toward human preferences; it cannot be scaled to produce superhuman
    capability, because its reward signal is a leaky abstraction over actual
    human judgment.
stance: >-
  RLHF yields modest improvements but cannot be run indefinitely because
  reinforcement learning inevitably discovers adversarial inputs that maximize
  the reward model's score while producing nonsense.
related:
  - INS-260323-8AEC
  - INS-260323-1477
  - INS-260330-5F36
  - INS-260330-6BBD
  - INS-260403-66CA
  - INS-260410-5EE7
  - INS-260410-46CA
  - PRI-260407-7FB7
  - INS-260410-5F60
  - INS-260410-9303
---
RLHF works by training a second neural network (the reward model) to imitate human preference rankings, then running reinforcement learning against that simulator. This sidesteps the cost of asking humans to score every rollout, and it exploits the discriminator-generator gap — it is easier for a human to rank five jokes than to write a great one — which is why RLHF empirically produces better models than pure SFT.

But the reward model is itself a transformer with billions of parameters, and RL is extremely good at finding adversarial inputs that score near 1.0 while being gibberish. Karpathy's example: after enough steps, the top-scoring 'joke about pelicans' degenerates into something like 'the the the the.' Patching these examples into the reward data helps locally but loses the game globally — there are always more adversarial pockets. In practice, teams run RLHF for a few hundred updates, watch for degeneration, crop, and ship.

This is why Karpathy insists RLHF is not RL in the 'magical' sense of AlphaGo or DeepSeek R1's math training. Verifiable-domain RL (where answers can be checked mechanically) can run for hundreds of thousands of steps and discover genuinely new strategies — move-37-style reasoning traces humans wouldn't produce. RLHF is more like a light fine-tune that nudges outputs toward human preferences; it cannot be scaled to produce superhuman capability, because its reward signal is a leaky abstraction over actual human judgment.

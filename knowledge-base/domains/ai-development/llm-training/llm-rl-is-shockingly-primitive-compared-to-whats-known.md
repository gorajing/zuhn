---
id: INS-260410-CDE9
domain: ai-development
topic: llm-training
title: LLM RL is shockingly primitive compared to what's known
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - reinforcement-learning
  - value-functions
  - rlhf
  - td-learning
sources:
  - type: youtube
    title: Adam Marblestone – AI is missing something fundamental about the brain
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=_9V_Hbe-N1A'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frontier RL post-training uses a simpler algorithm than 2015-era Atari
    agents, and it works — but nobody knows why.
  standard: >-
    Marblestone (echoing Ilya Sutskever) points out that current RL fine-tuning
    is astonishingly crude: trajectories that succeed get every token
    upweighted, with no value function, no temporal-difference credit
    assignment, and no model-based planning. Atari-era Q-learning was already
    more sophisticated. Meanwhile, neuroscience has extensive evidence that
    dopamine encodes a reward prediction error (TD signal), and that the
    striatum and basal ganglia implement something genuinely
    value-function-shaped.


    The fact that the dumber approach is beating the more principled one on LLMs
    is a signal that either (a) the representational power of the pretrained
    base model absorbs most of what value functions would provide, or (b)
    there's a massive overhang where adding proper value functions, model-based
    components, or TD-style credit assignment will unlock another step change.


    Either way, the current setup is unlikely to be the endpoint — and teams
    that figure out how to graft more sophisticated RL onto large pretrained
    models may see disproportionate gains.
stance: >-
  Modern LLM RL (every-token upweight on successful trajectories, no value
  functions) is a strictly dumber technique than Q-learning from a decade ago —
  and its effectiveness is unexplained.
related:
  - PRI-260407-9DDF
  - INS-260403-B73D
  - INS-260424-0554
  - PRI-260411-ACEF
  - INS-260423-6172
  - INS-260421-E9FC
---
Marblestone (echoing Ilya Sutskever) points out that current RL fine-tuning is astonishingly crude: trajectories that succeed get every token upweighted, with no value function, no temporal-difference credit assignment, and no model-based planning. Atari-era Q-learning was already more sophisticated. Meanwhile, neuroscience has extensive evidence that dopamine encodes a reward prediction error (TD signal), and that the striatum and basal ganglia implement something genuinely value-function-shaped.

The fact that the dumber approach is beating the more principled one on LLMs is a signal that either (a) the representational power of the pretrained base model absorbs most of what value functions would provide, or (b) there's a massive overhang where adding proper value functions, model-based components, or TD-style credit assignment will unlock another step change.

Either way, the current setup is unlikely to be the endpoint — and teams that figure out how to graft more sophisticated RL onto large pretrained models may see disproportionate gains.

---
id: INS-260627-EEDE
domain: ai-development
topic: llm-training
title: RL with verifiable rewards breaks the human-imitation ceiling that caps SFT
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - rlvr
  - post-training
  - sft
  - exploration
sources:
  - type: youtube
    title: 'Let LLMs Wander: Engineering RL Environments — Stefano Fiorucci'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=71V3fTaUp2Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SFT makes a model imitate curated examples and stay near their distribution;
    RLVR lets it explore its own trajectories and discover strategies better
    than any human example provided.
  standard: >-
    In supervised fine-tuning the model learns by statistical imitation of
    prompt/response pairs, so its completions tend to stay close to the
    distribution of those curated examples — its ceiling is the quality of the
    human data. With reinforcement learning from verifiable rewards (RLVR), the
    model is only given a question, generates a reasoning trace and answer, and
    the outcome is checked automatically (correct answer, won game, successful
    tool call). Because the signal is the verified outcome rather than a target
    completion, the model is free to explore different trajectories drawn from
    its pre-training and reinforce the ones that maximize reward.


    This is the structural reason RLVR can keep improving models when
    pre-training scaling stalls (the Ilya Sutskever NeurIPS 2024 observation)
    and why DeepSeek R1, OpenAI o1, and others used it to teach effective
    chain-of-thought rather than buying expensive curated reasoning data. The
    practical consequence: when a task's outcome is automatically verifiable,
    you should prefer building a reward signal over collecting more
    demonstrations, because trial-and-error discovery can find more efficient
    strategies than imitation ever could.
stance: >-
  Reinforcement learning with verifiable rewards lets a model surpass the
  quality of its human demonstration data, whereas supervised fine-tuning
  cannot.
related:
  - INS-260327-7299
  - INS-260328-C246
  - INS-260403-0A97
  - INS-260405-227C
  - INS-260410-F5C5
  - INS-260410-3A08
  - INS-260505-1684
  - INS-260605-738E
  - INS-260605-6C0C
  - INS-260605-CFB7
---
In supervised fine-tuning the model learns by statistical imitation of prompt/response pairs, so its completions tend to stay close to the distribution of those curated examples — its ceiling is the quality of the human data. With reinforcement learning from verifiable rewards (RLVR), the model is only given a question, generates a reasoning trace and answer, and the outcome is checked automatically (correct answer, won game, successful tool call). Because the signal is the verified outcome rather than a target completion, the model is free to explore different trajectories drawn from its pre-training and reinforce the ones that maximize reward.

This is the structural reason RLVR can keep improving models when pre-training scaling stalls (the Ilya Sutskever NeurIPS 2024 observation) and why DeepSeek R1, OpenAI o1, and others used it to teach effective chain-of-thought rather than buying expensive curated reasoning data. The practical consequence: when a task's outcome is automatically verifiable, you should prefer building a reward signal over collecting more demonstrations, because trial-and-error discovery can find more efficient strategies than imitation ever could.

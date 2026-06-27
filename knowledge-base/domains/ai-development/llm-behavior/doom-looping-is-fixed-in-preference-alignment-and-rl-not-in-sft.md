---
id: INS-260626-9B36
domain: ai-development
topic: llm-behavior
title: 'Doom looping is fixed in preference alignment and RL, not in SFT'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - doom-loops
  - reasoning-models
  - rl
  - dpo
  - preference-alignment
  - failure-modes
sources:
  - type: youtube
    title: >-
      Everything I Learned Training Frontier Small Models — Maxime Labonne,
      Liquid AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fLUtUkqYHnQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Doom-loop ratio for a small reasoning model stayed ~15-16% through SFT but
    dropped sharply after DPO and became almost nonexistent after RL with
    verifiable rewards plus an n-gram repetition penalty.
  standard: >-
    Doom looping — a model endlessly repeating a sequence of words — is acute
    when small size, reasoning mode, and a too-hard task coincide (e.g. a tiny
    reasoning model on very difficult math). Labonne shows the failure is not
    addressable at the SFT stage: a 1.2B thinking model held a ~15-16% doom-loop
    ratio across benchmarks after pre-training and SFT barely moved it. The fix
    lives later in the pipeline. Solution one is preference alignment: generate
    diverse rollouts via temperature sampling plus a deliberately-looping
    temperature-zero rollout, then use an LLM jury to mark looping outputs as
    'rejected' so DPO trains the behavior out. Solution two is RL with
    verifiable rewards — a looping answer never reaches the final answer, so it
    earns no reward — augmented with a small n-gram repetition penalty. After RL
    the problem is almost gone. The diagnostic takeaway: match the intervention
    to the stage. Repetition pathologies are a preference/reward problem, and
    trying to patch them with more SFT data is the wrong tool. (Models like Qwen
    3.5 0.8B that skip this show >50% doom loops, evidence they are merely
    scaled-down big models.)
stance: >-
  Supervised fine-tuning barely reduces repetitive 'doom loop' generation;
  preference alignment and RL with verifiable rewards nearly eliminate it.
related:
  - INS-260409-17E9
  - INS-260626-518C
  - INS-260323-584D
  - INS-260410-13C8
  - PRI-260323-8E89
  - INS-260627-4130
---
Doom looping — a model endlessly repeating a sequence of words — is acute when small size, reasoning mode, and a too-hard task coincide (e.g. a tiny reasoning model on very difficult math). Labonne shows the failure is not addressable at the SFT stage: a 1.2B thinking model held a ~15-16% doom-loop ratio across benchmarks after pre-training and SFT barely moved it. The fix lives later in the pipeline. Solution one is preference alignment: generate diverse rollouts via temperature sampling plus a deliberately-looping temperature-zero rollout, then use an LLM jury to mark looping outputs as 'rejected' so DPO trains the behavior out. Solution two is RL with verifiable rewards — a looping answer never reaches the final answer, so it earns no reward — augmented with a small n-gram repetition penalty. After RL the problem is almost gone. The diagnostic takeaway: match the intervention to the stage. Repetition pathologies are a preference/reward problem, and trying to patch them with more SFT data is the wrong tool. (Models like Qwen 3.5 0.8B that skip this show >50% doom loops, evidence they are merely scaled-down big models.)

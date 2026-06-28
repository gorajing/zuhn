---
id: INS-260628-EBA5
domain: ai-development
topic: training-dynamics
title: 'Build RL curricula on difficulty, not on context length'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - curriculum-learning
  - long-context
  - catastrophic-forgetting
  - training-dynamics
sources:
  - type: youtube
    title: >-
      Z.ai GLM 4.6: What We Learned From 100 Million Open Source Downloads —
      Yuxuan Zhang, Z.ai
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m6MF1OR_9kM'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Stage RL by problem difficulty (medium then hard) for steady gains, but
    never stage by context length—progressive context curricula make a
    long-context model forget its long-context ability irrecoverably.
  standard: >-
    Z.ai reports two seemingly opposite curriculum results that resolve into one
    rule. On difficulty, a two-stage curriculum wins: stage one uses
    medium-difficulty problems where rewards have meaningful variance across a
    batch (so gradients are informative), then stage two switches to extremely
    hard problems where even at 512 samples you occasionally get a correct
    solution. The reward curve keeps climbing after the switch to hard problems,
    whereas staying on medium difficulty plateaus.


    On context length, the opposite holds. Prior work used multi-stage context
    curricula (e.g., 16K → 32K → 48K → 64K tokens), but for a model already
    SFT'd at 64K tokens, those shorter intermediate stages make it forget its
    long-context ability, and the final 64K stage can't fully recover the loss.
    Z.ai instead trains a single stage directly at 64K tokens, which clearly
    outperforms the multi-stage curve. The unifying lesson: curriculum over the
    difficulty of the objective helps the model bootstrap signal, but curriculum
    over a capability the model already possesses (long context) just induces
    catastrophic forgetting—don't make a model relearn what it already knows.
stance: >-
  RL training benefits from a difficulty curriculum but is harmed by a
  context-length curriculum, so stage problems by difficulty while training at
  full context length from the start.
related:
  - INS-260625-E500
  - INS-260625-AACE
  - INS-260627-21D0
  - INS-260627-3D0E
  - INS-260627-D9CE
  - INS-260627-E257
---
Z.ai reports two seemingly opposite curriculum results that resolve into one rule. On difficulty, a two-stage curriculum wins: stage one uses medium-difficulty problems where rewards have meaningful variance across a batch (so gradients are informative), then stage two switches to extremely hard problems where even at 512 samples you occasionally get a correct solution. The reward curve keeps climbing after the switch to hard problems, whereas staying on medium difficulty plateaus.

On context length, the opposite holds. Prior work used multi-stage context curricula (e.g., 16K → 32K → 48K → 64K tokens), but for a model already SFT'd at 64K tokens, those shorter intermediate stages make it forget its long-context ability, and the final 64K stage can't fully recover the loss. Z.ai instead trains a single stage directly at 64K tokens, which clearly outperforms the multi-stage curve. The unifying lesson: curriculum over the difficulty of the objective helps the model bootstrap signal, but curriculum over a capability the model already possesses (long context) just induces catastrophic forgetting—don't make a model relearn what it already knows.

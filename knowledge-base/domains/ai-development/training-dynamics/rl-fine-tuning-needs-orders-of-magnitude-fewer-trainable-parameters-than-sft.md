---
id: INS-260627-6A8B
domain: ai-development
topic: training-dynamics
title: RL fine-tuning needs orders of magnitude fewer trainable parameters than SFT
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - sft
  - lora
  - parameter-efficiency
  - rl
sources:
  - type: youtube
    title: 'Jack Morris: Stuffing Context is not Memory, Updating Weights is'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Jty4s9-Jb78'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because an RL reward is just one bit (right/wrong) while SFT supervises
    every token, RL can reach the same accuracy with vastly fewer trainable
    parameters — even single digits.
  standard: >-
    Morris's (then-unreleased) research found that to reach equivalent task
    performance, SFT requires on the order of 1000x more trainable parameters
    than RL. On GSM8K math reasoning with GRPO, a 'tiny LoRA' variant trained
    just 14 parameters and hit ~91% accuracy; even a single trainable parameter
    (controlling many random projections) produced a measurable ~5% gain. The
    explanation is information-theoretic: SFT applies cross-entropy loss across
    all output tokens (including thinking tokens), which is a high-bandwidth,
    high-bits learning signal demanding many parameters to absorb. RL gives only
    a sparse scalar — a 1 if correct (no new information if you already knew it)
    or effectively one bit if wrong.


    The nuance, and the open conflict in the field, is that this is
    training-mechanism-dependent. The 'LoRA learns less and forgets less' result
    suggests parameter-efficient methods underperform full fine-tuning for SFT,
    while Thinking Machines reports LoRA roughly matches full fine-tuning for
    RL. So the heuristic is: for SFT you may genuinely need full fine-tuning to
    store enough information; for RL, parameter-efficient methods like LoRA are
    likely sufficient. This is why per-user personalization (a few MB of LoRA
    per user, batched à la Tinker) becomes economically plausible at the 10–100M
    user scale.
stance: >-
  Reinforcement learning can match supervised fine-tuning performance while
  training roughly 1000x fewer parameters, because its reward signal carries far
  less information per step.
related:
  - INS-260323-D9CE
  - INS-260329-7A7F
  - INS-260402-613D
  - INS-260403-66CA
  - INS-260410-8E1C
  - INS-260410-E1D9
  - INS-260413-A950
  - INS-260605-4A94
  - INS-260625-8FC6
  - INS-260626-BA05
---
Morris's (then-unreleased) research found that to reach equivalent task performance, SFT requires on the order of 1000x more trainable parameters than RL. On GSM8K math reasoning with GRPO, a 'tiny LoRA' variant trained just 14 parameters and hit ~91% accuracy; even a single trainable parameter (controlling many random projections) produced a measurable ~5% gain. The explanation is information-theoretic: SFT applies cross-entropy loss across all output tokens (including thinking tokens), which is a high-bandwidth, high-bits learning signal demanding many parameters to absorb. RL gives only a sparse scalar — a 1 if correct (no new information if you already knew it) or effectively one bit if wrong.

The nuance, and the open conflict in the field, is that this is training-mechanism-dependent. The 'LoRA learns less and forgets less' result suggests parameter-efficient methods underperform full fine-tuning for SFT, while Thinking Machines reports LoRA roughly matches full fine-tuning for RL. So the heuristic is: for SFT you may genuinely need full fine-tuning to store enough information; for RL, parameter-efficient methods like LoRA are likely sufficient. This is why per-user personalization (a few MB of LoRA per user, batched à la Tinker) becomes economically plausible at the 10–100M user scale.

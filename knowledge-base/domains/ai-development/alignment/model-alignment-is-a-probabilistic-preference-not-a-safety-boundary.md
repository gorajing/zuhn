---
id: INS-260627-915A
domain: ai-development
topic: alignment
title: 'Model alignment is a probabilistic preference, not a safety boundary'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - alignment
  - adversarial-attacks
  - jailbreak
  - transferability
  - llm-security
sources:
  - type: youtube
    title: >-
      $1 AI Guardrails: The Unreasonable Effectiveness of Finetuned ModernBERTs
      – Diego Carpentero
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YZHPEkfy2kc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Refusal is a probabilistic preference, so gradient-found gibberish suffixes
    can push the next-token distribution into compliance — and those suffixes
    transfer to closed models.
  standard: >-
    Greedy-coordinate-gradient attacks initialize placeholder tokens (e.g. 20
    exclamation marks for exploratory space) and iteratively minimize the loss
    of the model *not* opening with an affirmation. Once the model emits 'Sure,
    here's how,' auto-completion carries it through a harmful response. This
    works because alignment is a learned probabilistic boundary, not a hard
    constraint.


    The non-obvious and dangerous part: although the attack needs open weights
    to run the gradient search, the resulting suffixes transfer to black-box
    models. Models trained on similar data with similar RLHF pipelines develop
    geometrically similar refusal boundaries, so the same gibberish breaks
    closed models too. The practical consequence is that you cannot rely on the
    base model's own alignment as your safety layer — defense has to be an
    external, independently-trained checkpoint, because the thing you'd be
    trusting is a soft preference that an attacker can quantify and move.
stance: >-
  Alignment cannot serve as a hard safety constraint because it is a soft
  probability gradient that adversarial suffixes can shift — and the breaking
  suffixes transfer to black-box models.
related:
  - INS-260329-FEA6
  - INS-260404-5B6A
  - INS-260403-5564
  - INS-260410-9EEF
  - INS-260410-EFB8
  - INS-260409-667F
  - INS-260625-DF0F
  - INS-260403-141E
  - INS-260323-584D
---
Greedy-coordinate-gradient attacks initialize placeholder tokens (e.g. 20 exclamation marks for exploratory space) and iteratively minimize the loss of the model *not* opening with an affirmation. Once the model emits 'Sure, here's how,' auto-completion carries it through a harmful response. This works because alignment is a learned probabilistic boundary, not a hard constraint.

The non-obvious and dangerous part: although the attack needs open weights to run the gradient search, the resulting suffixes transfer to black-box models. Models trained on similar data with similar RLHF pipelines develop geometrically similar refusal boundaries, so the same gibberish breaks closed models too. The practical consequence is that you cannot rely on the base model's own alignment as your safety layer — defense has to be an external, independently-trained checkpoint, because the thing you'd be trusting is a soft preference that an attacker can quantify and move.

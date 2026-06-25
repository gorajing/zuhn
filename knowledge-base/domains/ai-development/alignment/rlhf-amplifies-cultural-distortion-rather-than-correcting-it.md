---
id: INS-260625-DF0F
domain: ai-development
topic: alignment
title: RLHF amplifies cultural distortion rather than correcting it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rlhf
  - sycophancy
  - human-feedback
  - post-training
  - alignment-failure
sources:
  - type: youtube
    title: >-
      The Miranda Hypothesis: How Hamilton Poisoned Persona Evals - Jacob E.
      Thomas, Results Gen
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IJXjTLPzvAU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimizing for human preference optimizes for the version of reality the
    rater already believes — so post-training reinforces compositing rather than
    patching it.
  standard: >-
    A natural assumption is that post-training and RLHF pull a model back toward
    the documentary record. The talk argues the opposite: alignment amplifies
    the distortion, for a structural reason. Human raters evaluate outputs using
    their own conceptual frameworks, and those frameworks were built by the same
    culturally dominant narratives that saturate the corpus — the rater grew up
    with the same mythologized Hamilton or Lincoln everyone did. So when
    alignment optimizes for human preference, it optimizes for outputs that
    conform to the rater's already-mythologized experience.


    This is named 'algorithmic sycophancy' with a specific target: the model is
    rewarded for handing you the figure you already believe in. The implication
    for anyone shipping these systems is that compositing is not a bug you can
    patch in post-training — post-training reinforces it. This sharpens the
    general sycophancy literature into a concrete, measurable claim: where
    ground truth diverges from popular belief, preference-based alignment will
    systematically drag outputs toward popular belief, and the divergence is
    largest precisely for the most culturally salient subjects.
stance: >-
  Alignment from human preference reinforces the mythologized composite instead
  of pulling the model back toward the record, because raters share the same
  culturally saturated priors as the training corpus.
related:
  - INS-260322-B693
  - INS-260409-667F
  - INS-260410-CDE9
  - INS-260501-35E3
  - INS-260505-A0F7
  - INS-260605-AA21
  - INS-260605-A9B4
  - INS-260403-A101
  - PRI-260322-94C4
  - INS-260409-1FD3
---
A natural assumption is that post-training and RLHF pull a model back toward the documentary record. The talk argues the opposite: alignment amplifies the distortion, for a structural reason. Human raters evaluate outputs using their own conceptual frameworks, and those frameworks were built by the same culturally dominant narratives that saturate the corpus — the rater grew up with the same mythologized Hamilton or Lincoln everyone did. So when alignment optimizes for human preference, it optimizes for outputs that conform to the rater's already-mythologized experience.

This is named 'algorithmic sycophancy' with a specific target: the model is rewarded for handing you the figure you already believe in. The implication for anyone shipping these systems is that compositing is not a bug you can patch in post-training — post-training reinforces it. This sharpens the general sycophancy literature into a concrete, measurable claim: where ground truth diverges from popular belief, preference-based alignment will systematically drag outputs toward popular belief, and the divergence is largest precisely for the most culturally salient subjects.

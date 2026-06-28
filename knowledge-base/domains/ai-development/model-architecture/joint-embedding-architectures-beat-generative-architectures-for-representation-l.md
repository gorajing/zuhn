---
id: INS-260514-9281
domain: ai-development
topic: model-architecture
title: >-
  Joint embedding architectures beat generative architectures for representation
  learning on images and video
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - joint-embedding
  - self-supervised
  - dino
  - imagenet
sources:
  - type: youtube
    title: Yann LeCun's $1B Bet Against LLMs
    author: Welch Labs
    url: 'https://youtu.be/kYkIdXwW2AE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DINO v3 hit 88.4% on ImageNet with zero labels — first self-supervised model
    to match weakly-supervised baselines. Generative pretraining was the wrong
    path for vision.
  standard: >-
    Welch Labs traces the 2020-2025 arc: in 2021, Barlow Twins (LeCun + Stefan
    Deny) used cross-correlation loss to solve representation collapse — get
    embedding vectors to align on the diagonal of a correlation matrix and
    decorrelate elsewhere, mimicking Horace Barlow's 1961 hypothesis about
    neural decorrelation in vision. This unlocked joint embedding learning at
    scale. By August 2025, DINO v3 reached 88.4% ImageNet accuracy with zero
    labels, comparable to weakly-supervised vision transformers (88.6%). The
    'next-token prediction wins everywhere' narrative is empirically falsified
    for vision — different modalities require different self-supervised training
    architectures.


    Application: when adapting AI methodologies from one modality to another,
    don't assume the dominant approach in modality A is right for modality B.
    Language: generative pretraining works. Vision: joint embedding works.
    Investment-firm decision data (Memric's domain): structured discriminative
    learning over typed entity graphs may work better than either — vertical
    structure dictates architecture, not modality precedent.
stance: >-
  By 2024-2025, joint embedding predictive architectures (JEPA, DINO v3) have
  closed the gap with supervised models on ImageNet (88.4% vs 88.6%) while
  requiring zero labels — empirically demonstrating that generative pretraining
  is not the right path for vision representation learning, contrary to the
  narrative that 'next-token prediction works for everything.'
related:
  - INS-260412-9777
  - INS-260627-C44E
  - INS-260410-F985
  - INS-260626-8E45
  - INS-260625-D790
---
Welch Labs traces the 2020-2025 arc: in 2021, Barlow Twins (LeCun + Stefan Deny) used cross-correlation loss to solve representation collapse — get embedding vectors to align on the diagonal of a correlation matrix and decorrelate elsewhere, mimicking Horace Barlow's 1961 hypothesis about neural decorrelation in vision. This unlocked joint embedding learning at scale. By August 2025, DINO v3 reached 88.4% ImageNet accuracy with zero labels, comparable to weakly-supervised vision transformers (88.6%). The 'next-token prediction wins everywhere' narrative is empirically falsified for vision — different modalities require different self-supervised training architectures.

Application: when adapting AI methodologies from one modality to another, don't assume the dominant approach in modality A is right for modality B. Language: generative pretraining works. Vision: joint embedding works. Investment-firm decision data (Memric's domain): structured discriminative learning over typed entity graphs may work better than either — vertical structure dictates architecture, not modality precedent.

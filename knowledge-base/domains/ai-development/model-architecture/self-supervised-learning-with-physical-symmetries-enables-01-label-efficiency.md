---
id: INS-260505-0EB5
domain: ai-development
topic: model-architecture
title: >-
  Self-supervised learning with physical symmetries enables 0.1% label
  efficiency
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-supervised-learning
  - physical-symmetries
  - data-efficiency
  - neutrino-physics
sources:
  - type: audio
    title: Lightning talks
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Train an encoder to map symmetry-related views to the same latent point,
    then 1000 labeled images do as well as a million.
  standard: >-
    Sam at SLAC: neutrino detector images are 3D high-resolution. Today's
    standard is supervised training on simulated data, but simulations don't
    perfectly capture neutrino-argon nucleus interactions, and that
    simulation-to-reality gap is the next-generation experimental bottleneck.
    Alternative: pretrain self-supervised on real raw detector data using
    physical symmetries (an electron is still an electron after
    rotation/translation/masking). Generate multiple physically-plausible views,
    train encoder to map them to the same latent point. The learned
    representations cluster meaningfully by particle type without ever seeing
    labels. With 0.1% of original training data (1K images vs 1M),
    self-supervised pretrained model matches the current state-of-art.


    Application: any domain with known symmetries (physics, structural biology,
    materials, chemistry) should explore symmetry-aware self-supervision before
    scaling labeled data collection. The symmetry priors do most of the
    representational work.
stance: >-
  When a domain has known physical symmetries (rotation, translation, mirror), a
  self-supervised pretraining objective that enforces invariance to those
  symmetries enables label-free training that matches state-of-art performance
  using as little as 0.1% of the labeled data.
related:
  - INS-260323-22E8
  - INS-260330-4B84
  - INS-260330-81A7
  - INS-260410-B501
  - INS-260603-6E59
  - INS-260605-C46E
  - PRI-260406-FA5B
---
Sam at SLAC: neutrino detector images are 3D high-resolution. Today's standard is supervised training on simulated data, but simulations don't perfectly capture neutrino-argon nucleus interactions, and that simulation-to-reality gap is the next-generation experimental bottleneck. Alternative: pretrain self-supervised on real raw detector data using physical symmetries (an electron is still an electron after rotation/translation/masking). Generate multiple physically-plausible views, train encoder to map them to the same latent point. The learned representations cluster meaningfully by particle type without ever seeing labels. With 0.1% of original training data (1K images vs 1M), self-supervised pretrained model matches the current state-of-art.

Application: any domain with known symmetries (physics, structural biology, materials, chemistry) should explore symmetry-aware self-supervision before scaling labeled data collection. The symmetry priors do most of the representational work.

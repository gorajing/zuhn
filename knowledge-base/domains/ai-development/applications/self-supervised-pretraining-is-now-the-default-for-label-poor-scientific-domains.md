---
id: INS-260505-A0F7
domain: ai-development
topic: applications
title: >-
  Self-supervised pretraining is now the default for label-poor scientific
  domains
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - self-supervised-learning
  - simulation-gap
  - pretraining
  - scientific-ml
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
    Old paradigm: train on simulations. New paradigm: pretrain on raw real data,
    fine-tune on the few labels you have.
  standard: >-
    Cross-talk pattern from the lightning talks: previous-generation scientific
    ML pipelines train supervised on simulated data, then deploy on real data
    and accept the simulation-reality gap. The new paradigm: pretrain
    self-supervised on real raw data (no labels needed), fine-tune on the small
    set of available labeled examples. SLAC neutrino physics: 0.1% of labels
    matches state-of-art. The bottleneck shifts from 'we don't have enough
    labels' to 'we don't have a good self-supervised objective yet.'


    Application: any team with a 'we'd train on simulations because we don't
    have labels' problem should ask 'what self-supervised objective could we
    define on the real raw data?' first. The answer often unlocks a 10-100x
    sample-efficiency improvement.
stance: >-
  Across multiple unrelated scientific ML talks, self-supervised pretraining
  (rather than supervised training on simulated data) is becoming the default
  approach when real-world labels are scarce — simulation-to-reality gaps are
  the bottleneck, not label availability.
related:
  - INS-260320-922A
  - INS-260329-5F96
  - INS-260330-B08E
  - INS-260505-D440
  - INS-260408-C572
  - INS-260326-DBEF
  - INS-260403-FFEA
  - INS-260505-AFAB
  - INS-260605-738E
---
Cross-talk pattern from the lightning talks: previous-generation scientific ML pipelines train supervised on simulated data, then deploy on real data and accept the simulation-reality gap. The new paradigm: pretrain self-supervised on real raw data (no labels needed), fine-tune on the small set of available labeled examples. SLAC neutrino physics: 0.1% of labels matches state-of-art. The bottleneck shifts from 'we don't have enough labels' to 'we don't have a good self-supervised objective yet.'

Application: any team with a 'we'd train on simulations because we don't have labels' problem should ask 'what self-supervised objective could we define on the real raw data?' first. The answer often unlocks a 10-100x sample-efficiency improvement.

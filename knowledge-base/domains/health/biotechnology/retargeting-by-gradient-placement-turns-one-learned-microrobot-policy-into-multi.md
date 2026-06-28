---
id: INS-260627-FC32
domain: health
topic: biotechnology
title: >-
  Retargeting by gradient placement turns one learned microrobot policy into
  multiple interventions
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - microrobotics
  - drug-delivery
  - thrombolysis
  - embolotherapy
  - generalization
sources:
  - type: blog
    title: >-
      Reinforcement Learning Enables Autonomous Microrobot Navigation and
      Intervention in Simulated Blood Capillaries
    url: 'https://arxiv.org/html/2606.26154'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Changing the field can change the task without retraining the controller.
  standard: >-
    The same Run-and-Rotate policy, trained for chemotactic navigation, is
    reused without retraining for targeted blocking and unblocking of simulated
    capillary flow. The intervention is specified by placing chemical sources;
    the policy only follows local gradient changes. That is the field-specific
    mechanism: task programming shifts from rewriting controllers to shaping the
    signal landscape. For system builders, this resembles designing stable
    primitives whose goals are retargeted through configuration, constraints, or
    external state rather than new training runs.
stance: >-
  A learned local-gradient controller can generalize to new medical tasks when
  task goals are represented as external fields rather than hard-coded
  destinations.
related:
  - INS-260321-A56C
  - INS-260627-8738
  - INS-260627-01E1
  - INS-260627-FAFC
  - INS-260627-92C0
---
The same Run-and-Rotate policy, trained for chemotactic navigation, is reused without retraining for targeted blocking and unblocking of simulated capillary flow. The intervention is specified by placing chemical sources; the policy only follows local gradient changes. That is the field-specific mechanism: task programming shifts from rewriting controllers to shaping the signal landscape. For system builders, this resembles designing stable primitives whose goals are retargeted through configuration, constraints, or external state rather than new training runs.

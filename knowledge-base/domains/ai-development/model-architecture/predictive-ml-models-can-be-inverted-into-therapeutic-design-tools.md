---
id: INS-260505-1684
domain: ai-development
topic: model-architecture
title: Predictive ML models can be inverted into therapeutic design tools
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-inversion
  - therapeutic-design
  - differentiable-models
  - crispr
sources:
  - type: audio
    title: Anshul kundaje
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Same model that predicts what a variant does can be inverted to design what
    variant to make.
  standard: >-
    Anshul Kundaje's Variant Effects Platform (VEP) with Jesse Engreitz: take
    the deep learning model that predicts how a DNA variant affects gene
    activity, then invert the model — instead of 'sequence to activity,' run
    'desired activity to sequence edit.' Combined with CRISPR prime editing,
    this enables systematic therapeutic design: 10-base edits to control
    elements can change gene dosage by 200%. The same neural network is both a
    microscope (interpretation) and a design tool (intervention).


    Application: this is a generalizable pattern beyond genomics. Any predictive
    ML model that's differentiable AND defined over a designable input space
    (sequence, molecular structure, image) can be inverted into a design tool.
    Look for opportunities to do this whenever you ship a useful predictor — the
    design-application is often only weeks of additional engineering.
stance: >-
  Deep learning models trained to predict variant effects from sequence can be
  inverted (run gradients backward) to design sequence edits that achieve
  desired phenotypic outcomes — the same model serves diagnosis and therapeutic
  design.
related:
  - INS-260403-6632
  - INS-260524-1A41
  - INS-260625-3EE6
  - INS-260624-4205
  - INS-260501-FDF0
  - INS-260403-0A97
  - INS-260514-3B3C
---
Anshul Kundaje's Variant Effects Platform (VEP) with Jesse Engreitz: take the deep learning model that predicts how a DNA variant affects gene activity, then invert the model — instead of 'sequence to activity,' run 'desired activity to sequence edit.' Combined with CRISPR prime editing, this enables systematic therapeutic design: 10-base edits to control elements can change gene dosage by 200%. The same neural network is both a microscope (interpretation) and a design tool (intervention).

Application: this is a generalizable pattern beyond genomics. Any predictive ML model that's differentiable AND defined over a designable input space (sequence, molecular structure, image) can be inverted into a design tool. Look for opportunities to do this whenever you ship a useful predictor — the design-application is often only weeks of additional engineering.

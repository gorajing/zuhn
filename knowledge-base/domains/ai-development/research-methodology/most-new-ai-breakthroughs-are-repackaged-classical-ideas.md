---
id: INS-260625-5694
domain: ai-development
topic: research-methodology
title: Most 'new' AI breakthroughs are repackaged classical ideas
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - research-strategy
  - first-principles
  - inductive-bias
  - generalization
  - no-free-lunch
sources:
  - type: youtube
    title: 'Inference, Diffusion, World Models, and More | YC Paper Club'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=wE1ZgJdt4uM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    World models trace to Sutton 1990, generalization 'mysteries' dissolve into
    PAC-Bayes, and infinite-compute wins come from ensembling and distillation —
    the archive is an underexploited research edge.
  standard: >-
    Three of the five talks independently make the same point: what looks new is
    mostly old. Isaac Ward shows the modern 'world model' is described almost
    verbatim in a 1990 NeurIPS flyer by Richard Sutton — a black box mapping
    situation and action to a predicted next situation. Akshay Vegesna,
    presenting Andrew Gordon Wilson's work, shows that deep learning's
    celebrated 'mysteries' (overparameterization, benign overfitting, double
    descent) are not mysterious at all once you apply classical generalization
    theory: PAC-Bayes plus soft inductive biases explain why bigger models
    generalize better (more parameters yield more compressible, flatter minima).
    Konwoo Kim's infinite-compute wins come entirely from reviving ensembling,
    regularization, and distillation — techniques that have existed for decades.


    The deeper version of this principle is the no-free-lunch theorem: the only
    way to improve learning efficiency is through better inductive biases. Given
    that AI is orders of magnitude behind humans on intelligence-per-sample,
    finding the right inductive biases — often by understanding why classical
    methods worked — is framed as one of the highest-leverage bets available.


    For researchers and founders, the actionable stance is contrarian: instead
    of assuming the frontier requires inventing something unprecedented,
    systematically re-read the pre-deep-learning literature for ideas that were
    data- or compute-starved at the time and now have the resources to shine.
    The packaging is new advertising; the substance is often a problem someone
    already framed well decades ago.
stance: >-
  Mining decades-old classical theory and techniques is a more reliable source
  of frontier progress than chasing novelty, because most current breakthroughs
  are old ideas re-advertised for the scaling era.
related:
  - PRI-260328-9E3F
  - PRI-260403-8EC2
  - INS-260410-F053
  - PRI-260323-2FEE
  - INS-260410-7292
---
Three of the five talks independently make the same point: what looks new is mostly old. Isaac Ward shows the modern 'world model' is described almost verbatim in a 1990 NeurIPS flyer by Richard Sutton — a black box mapping situation and action to a predicted next situation. Akshay Vegesna, presenting Andrew Gordon Wilson's work, shows that deep learning's celebrated 'mysteries' (overparameterization, benign overfitting, double descent) are not mysterious at all once you apply classical generalization theory: PAC-Bayes plus soft inductive biases explain why bigger models generalize better (more parameters yield more compressible, flatter minima). Konwoo Kim's infinite-compute wins come entirely from reviving ensembling, regularization, and distillation — techniques that have existed for decades.

The deeper version of this principle is the no-free-lunch theorem: the only way to improve learning efficiency is through better inductive biases. Given that AI is orders of magnitude behind humans on intelligence-per-sample, finding the right inductive biases — often by understanding why classical methods worked — is framed as one of the highest-leverage bets available.

For researchers and founders, the actionable stance is contrarian: instead of assuming the frontier requires inventing something unprecedented, systematically re-read the pre-deep-learning literature for ideas that were data- or compute-starved at the time and now have the resources to shine. The packaging is new advertising; the substance is often a problem someone already framed well decades ago.

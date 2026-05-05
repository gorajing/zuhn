---
id: INS-260505-050B
domain: ai-development
topic: applications
title: Scientific deep learning models function as both microscopes and design tools
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scientific-ml
  - interpretability
  - model-applications
  - design
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
    One model + interpretation methods = microscope (understand) + design tool
    (intervene) — two products from one training run.
  standard: >-
    Kundaje's framing: their DNA-to-activity models serve dual purposes. (1)
    Microscope mode: use interpretation methods to extract the regulatory
    grammar — what DNA words matter, how syntax constraints work, how cell-type
    context shifts the rules. (2) Design tool mode: invert the model to design
    sequence edits that achieve target phenotypes (variant effects platform).
    The same forward-trained model, plus appropriate post-training tooling
    (interpretation, gradient-based design), yields both products.


    Application: when planning ML investment in a scientific domain, count both
    microscope and design uses against the model's training cost. Models that
    only support prediction (no interpretation, no inversion) underrealize their
    value. For research project scoping: budget for interpretation/inversion
    tooling alongside training, not as an afterthought.
stance: >-
  A well-trained scientific deep learning model is simultaneously an
  interpretation tool (extract domain rules) and a design tool (invert to
  generate solutions) — this dual-use justifies the engineering investment in
  model interpretation.
related:
  - INS-260323-DA4A
  - INS-260327-79E8
  - INS-260403-9774
  - INS-260405-227C
  - INS-260403-5F41
---
Kundaje's framing: their DNA-to-activity models serve dual purposes. (1) Microscope mode: use interpretation methods to extract the regulatory grammar — what DNA words matter, how syntax constraints work, how cell-type context shifts the rules. (2) Design tool mode: invert the model to design sequence edits that achieve target phenotypes (variant effects platform). The same forward-trained model, plus appropriate post-training tooling (interpretation, gradient-based design), yields both products.

Application: when planning ML investment in a scientific domain, count both microscope and design uses against the model's training cost. Models that only support prediction (no interpretation, no inversion) underrealize their value. For research project scoping: budget for interpretation/inversion tooling alongside training, not as an afterthought.

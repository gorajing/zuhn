---
id: INS-260330-DE16
domain: ai-development
topic: architecture
title: Constraining transformations to be linear makes them tractable and composable
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - linear-algebra
  - constraints
  - composability
  - neural-networks
sources:
  - type: youtube
    title: 'Linear transformations and matrices | Chapter 3, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=kYB8IZa5AuE'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Linear transformations are powerful precisely because their constraints —
    parallel gridlines, fixed origin — make them fully describable, composable,
    and invertible.
  standard: >-
    Arbitrary transformations of space can do anything — curves, folds, tears.
    But this generality makes them impossible to reason about compactly. Linear
    transformations sacrifice expressiveness for tractability: by requiring that
    gridlines stay parallel and evenly spaced (and the origin stays fixed), you
    get a class of operations that are fully described by finite matrices, can
    be composed by matrix multiplication, and can often be inverted.


    This is the foundational tradeoff underlying neural network architecture.
    Individual linear layers are limited (they can only rotate, scale, shear,
    and project), but they're cheap, composable, and analyzable. Nonlinear
    activation functions between layers restore expressiveness. The entire deep
    learning paradigm is built on alternating tractable linear transformations
    with pointwise nonlinearities — understanding why linearity alone is both
    powerful and limited is essential to understanding why architectures are
    designed the way they are.
stance: >-
  The power of linear transformations comes not from what they can do, but from
  what they cannot — the constraints of preserving parallel gridlines and fixing
  the origin enable tractable composition and analysis.
related:
  - INS-260330-BF2A
  - INS-260330-D7CA
  - INS-260330-DEF7
  - PRI-260325-EEE9
  - INS-260330-3B6C
  - INS-260330-E059
  - INS-260330-4E95
evidence:
  - id: INS-260330-6B7F
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-DEF7
    type: REFINES
    classified_at: '2026-04-02'
  - id: INS-260330-4E95
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260403-AABF
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
Arbitrary transformations of space can do anything — curves, folds, tears. But this generality makes them impossible to reason about compactly. Linear transformations sacrifice expressiveness for tractability: by requiring that gridlines stay parallel and evenly spaced (and the origin stays fixed), you get a class of operations that are fully described by finite matrices, can be composed by matrix multiplication, and can often be inverted.

This is the foundational tradeoff underlying neural network architecture. Individual linear layers are limited (they can only rotate, scale, shear, and project), but they're cheap, composable, and analyzable. Nonlinear activation functions between layers restore expressiveness. The entire deep learning paradigm is built on alternating tractable linear transformations with pointwise nonlinearities — understanding why linearity alone is both powerful and limited is essential to understanding why architectures are designed the way they are.

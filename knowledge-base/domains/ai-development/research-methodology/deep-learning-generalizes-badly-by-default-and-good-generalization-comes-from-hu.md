---
id: INS-260410-F436
domain: ai-development
topic: research-methodology
title: >-
  Deep learning generalizes badly by default and good generalization comes from
  human researchers, not gradient descent
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - generalization
  - deep-learning
  - transfer-learning
  - catastrophic-forgetting
  - sutton
sources:
  - type: youtube
    title: Richard Sutton – Father of RL thinks LLMs are a dead end
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=21EYKqUsPfg'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gradient descent makes you solve the training problem, not generalize well —
    catastrophic forgetting is the natural default and good transfer happens
    only when researchers iterate until they find a representation that
    transfers.
  standard: >-
    Sutton makes a sharp distinction between solving a problem and generalizing
    well. Generalization means that training on one state affects what you do in
    other states in a beneficial way. Deep learning's default behavior is
    catastrophic interference: train on new data, and old capabilities degrade.
    This is the signature of poor generalization, not good generalization.


    The reason modern systems appear to generalize at all, he argues, is that
    researchers iterate — they try representations, architectures, and training
    regimes until they settle on one that transfers. This is human selection
    pressure, not an algorithmic property. There are no automated techniques
    actively used in modern deep learning that promote generalization as a
    first-class objective.


    This has implications for claims that LLMs 'generalize' across math problems
    or coding tasks. Sutton counters that if there is only one way to solve a
    problem, finding that way is not generalization — it is just finding the
    solution. True generalization is when multiple solutions exist and the
    system picks the one that transfers. Most reported LLM generalization
    conflates these two cases, and the field lacks the experimental controls
    (because LLMs have been fed so much data) to distinguish them. This is one
    reason LLMs are a poor substrate for doing science on intelligence — you
    cannot tell what the system started with.
stance: >-
  Gradient descent does not produce good generalization — it only finds any
  solution to the training problem, and apparent generalization in modern AI is
  the product of human researchers sculpting representations until transfer
  happens to work.
related:
  - PRI-260403-35FE
  - PRI-260405-6A4E
  - PRI-260407-ED1C
  - PRI-260403-EA13
  - INS-260321-8C35
---
Sutton makes a sharp distinction between solving a problem and generalizing well. Generalization means that training on one state affects what you do in other states in a beneficial way. Deep learning's default behavior is catastrophic interference: train on new data, and old capabilities degrade. This is the signature of poor generalization, not good generalization.

The reason modern systems appear to generalize at all, he argues, is that researchers iterate — they try representations, architectures, and training regimes until they settle on one that transfers. This is human selection pressure, not an algorithmic property. There are no automated techniques actively used in modern deep learning that promote generalization as a first-class objective.

This has implications for claims that LLMs 'generalize' across math problems or coding tasks. Sutton counters that if there is only one way to solve a problem, finding that way is not generalization — it is just finding the solution. True generalization is when multiple solutions exist and the system picks the one that transfers. Most reported LLM generalization conflates these two cases, and the field lacks the experimental controls (because LLMs have been fed so much data) to distinguish them. This is one reason LLMs are a poor substrate for doing science on intelligence — you cannot tell what the system started with.

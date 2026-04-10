---
id: INS-260330-2689
domain: psychology
topic: mental-models
title: 'Define concepts by their operations, not their representation'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - abstraction
  - operations
  - interfaces
  - mathematical-thinking
sources:
  - type: youtube
    title: 'Vectors | Chapter 1, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The mathematician defines a vector by what you can do with it (add, scale),
    not by what it is — this yields maximum generality.
  standard: >-
    The mathematician's perspective on vectors deliberately ignores what vectors
    look like (arrows or lists) and instead defines them purely by the
    operations they support: addition and scalar multiplication. Anything that
    satisfies these operations 'is' a vector. This operational definition is
    what allows linear algebra to apply to function spaces, polynomial spaces,
    and other domains far beyond geometric arrows.


    This pattern — defining things by their interface rather than their
    implementation — is a powerful mental model. In software, it's the principle
    behind duck typing and interface-based design. In business, it means
    defining a product by the job it does, not the form it takes. The takeaway:
    when you want maximum generalizability, strip away representational details
    and define the concept by its operations.
stance: >-
  The most generalizable understanding of a concept comes from defining it by
  what operations it supports rather than what it looks like
related:
  - INS-260330-02A7
  - INS-260330-4B84
  - INS-260330-4F49
  - PRI-260406-6D40
  - PRI-260406-FA5B
  - INS-260330-BFD0
  - INS-260330-367B
  - INS-260330-CCA2
  - INS-260410-351E
evidence:
  - id: INS-260330-CCA2
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-4B84
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-4B30
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-02A7
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-2117
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260329-ADCD
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
  - id: INS-260403-280B
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
The mathematician's perspective on vectors deliberately ignores what vectors look like (arrows or lists) and instead defines them purely by the operations they support: addition and scalar multiplication. Anything that satisfies these operations 'is' a vector. This operational definition is what allows linear algebra to apply to function spaces, polynomial spaces, and other domains far beyond geometric arrows.

This pattern — defining things by their interface rather than their implementation — is a powerful mental model. In software, it's the principle behind duck typing and interface-based design. In business, it means defining a product by the job it does, not the form it takes. The takeaway: when you want maximum generalizability, strip away representational details and define the concept by its operations.

---
id: INS-260330-CE2F
domain: psychology
topic: mental-models
title: >-
  Prototypal inheritance breaks the classical OOP mental model most developers
  carry
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mental-models
  - javascript
  - object-oriented-programming
  - prototypal-inheritance
sources:
  - type: youtube
    title: 100+ JavaScript Concepts you Need to Know
    author: Fireship
    url: 'https://www.youtube.com/watch?v=lkIFF4maKMU'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    JS classes are syntactic sugar over prototypal inheritance, where real
    objects link to real objects rather than abstract class hierarchies.
  standard: >-
    Most developers learn class-based OOP first (Java, C++, Python) and then
    project that mental model onto JavaScript's class keyword. But JS classes
    are syntactic sugar — underneath, every object has a private prototype
    property linking to exactly one other real, in-memory object. This is
    prototypal inheritance, not classical.


    The practical consequence is that JS inheritance operates on concrete
    instances, not abstract blueprints. Understanding this distinction prevents
    a class of bugs around 'this' binding, method resolution, and property
    shadowing. More broadly, it illustrates how carrying the wrong mental model
    from one domain into another creates systematic misunderstanding — a pattern
    that recurs whenever expertise in one system becomes an obstacle to learning
    a structurally different one.
stance: >-
  JavaScript's prototype chain — where classes are syntactic sugar over real
  in-memory objects linking to other objects — is a fundamentally different
  inheritance model that most developers misunderstand because they map
  class-based OOP assumptions onto it.
related:
  - INS-260329-1610
  - INS-260329-BA12
  - INS-260329-E280
  - INS-260329-4D03
  - INS-260329-41BC
  - INS-260329-DBFE
  - INS-260329-C33B
evidence:
  - id: INS-260329-4D03
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-BA12
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-C33B
    type: REFINES
    classified_at: '2026-04-02'
  - id: INS-260329-E280
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-1610
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-DEA1
    type: EXTENDS
    classified_at: '2026-04-02'
---
Most developers learn class-based OOP first (Java, C++, Python) and then project that mental model onto JavaScript's class keyword. But JS classes are syntactic sugar — underneath, every object has a private prototype property linking to exactly one other real, in-memory object. This is prototypal inheritance, not classical.

The practical consequence is that JS inheritance operates on concrete instances, not abstract blueprints. Understanding this distinction prevents a class of bugs around 'this' binding, method resolution, and property shadowing. More broadly, it illustrates how carrying the wrong mental model from one domain into another creates systematic misunderstanding — a pattern that recurs whenever expertise in one system becomes an obstacle to learning a structurally different one.

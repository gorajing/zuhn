---
id: INS-260329-6773
domain: psychology
topic: math-perception
title: >-
  Mathematical constants are defined by their useful properties, not discovered
  as pre-existing numbers
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mathematics
  - abstraction
  - first-principles
  - elegance
  - definitions
sources:
  - type: youtube
    title: Calculus 1 - Full College Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=HfACrKJ_Y2w'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The number e is defined by the property that d/dx(e^x) = e^x, illustrating
    how mathematical constants are constructed from desired functional
    properties rather than discovered empirically.
  standard: >-
    The course presents three equivalent facts about e: (1) e = lim(1 + 1/n)^n
    as n→∞, (2) lim(e^h - 1)/h = 1 as h→0, and (3) the derivative of e^x is e^x.
    Any one of these can serve as the definition, and the others follow as
    theorems. This reveals something profound about how mathematics works: e
    isn't a number that was found in nature and then turned out to have nice
    properties. It was constructed because mathematicians needed a base whose
    exponential function would be its own derivative.


    This constructive approach to definitions appears throughout mathematics and
    transfers to system design. When you define objects by the properties you
    need them to have (rather than by their internal structure), you get cleaner
    abstractions that compose well. The same principle applies to API design,
    type systems, and interface definitions — define things by what they do, not
    what they are internally.
stance: >-
  The number e is not a mysterious constant that happens to have special
  properties — it is literally defined as the unique number whose exponential
  function equals its own derivative, and this definitional approach reveals how
  mathematics constructs its objects from desired behaviors.
related:
  - INS-260325-1CE4
  - INS-260329-9391
  - INS-260329-196E
  - INS-260330-F493
  - INS-260329-C5C6
  - INS-260329-1F17
  - INS-260330-083D
evidence:
  - id: INS-260330-F493
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The course presents three equivalent facts about e: (1) e = lim(1 + 1/n)^n as n→∞, (2) lim(e^h - 1)/h = 1 as h→0, and (3) the derivative of e^x is e^x. Any one of these can serve as the definition, and the others follow as theorems. This reveals something profound about how mathematics works: e isn't a number that was found in nature and then turned out to have nice properties. It was constructed because mathematicians needed a base whose exponential function would be its own derivative.

This constructive approach to definitions appears throughout mathematics and transfers to system design. When you define objects by the properties you need them to have (rather than by their internal structure), you get cleaner abstractions that compose well. The same principle applies to API design, type systems, and interface definitions — define things by what they do, not what they are internally.

---
id: INS-260404-C7A1
domain: psychology
topic: cognition
title: Composability as the ultimate cognitive leverage in system design
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - composability
  - expressions
  - cognitive-leverage
  - system-design
  - combinatorics
sources:
  - type: blog
    title: What Made Lisp Different
    url: 'https://paulgraham.com/diff.html'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Making everything an expression rather than mixing expressions with
    statements enables arbitrary composition — a multiplicative increase in what
    you can express.
  standard: >-
    Graham highlights that when a language is made entirely of expressions, 'you
    can compose expressions however you want.' The if-then-else can go inside an
    assignment or wrap one — both are valid. This isn't just syntactic
    convenience; it's a combinatorial explosion of expressiveness from a single
    design choice. Mixing composable elements (expressions) with non-composable
    ones (statements) arbitrarily limits what you can build.


    This principle extends far beyond programming. Any system where all
    components share a uniform interface that allows arbitrary nesting and
    combination will be exponentially more powerful than one with special-case
    components. Unix pipes, functional composition, LEGO bricks, and modular
    synthesizers all exploit this same insight. When designing systems, the
    question to ask is: are there elements that break composability, and can
    they be reformulated as composable units without losing their function?
stance: >-
  Systems built entirely from composable units (expressions) enable
  exponentially more combinations than systems with non-composable elements
  (statements), giving designers fundamentally more leverage
related:
  - INS-260329-04A5
  - INS-260330-AA77
  - INS-260404-5440
  - INS-260329-21C0
  - INS-260329-BA12
  - INS-260329-33D4
---
Graham highlights that when a language is made entirely of expressions, 'you can compose expressions however you want.' The if-then-else can go inside an assignment or wrap one — both are valid. This isn't just syntactic convenience; it's a combinatorial explosion of expressiveness from a single design choice. Mixing composable elements (expressions) with non-composable ones (statements) arbitrarily limits what you can build.

This principle extends far beyond programming. Any system where all components share a uniform interface that allows arbitrary nesting and combination will be exponentially more powerful than one with special-case components. Unix pipes, functional composition, LEGO bricks, and modular synthesizers all exploit this same insight. When designing systems, the question to ask is: are there elements that break composability, and can they be reformulated as composable units without losing their function?

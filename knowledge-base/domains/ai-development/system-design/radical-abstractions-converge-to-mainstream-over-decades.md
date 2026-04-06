---
id: INS-260404-B1BC
domain: ai-development
topic: system-design
title: Radical abstractions converge to mainstream over decades
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - language-design
  - convergence
  - abstraction
  - lisp
  - innovation-diffusion
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
    Lisp's nine radical ideas from 1958 gradually became standard features in
    mainstream languages, proving theoretical purity wins over time.
  standard: >-
    McCarthy designed Lisp not to fix Fortran's mistakes but as a byproduct of
    axiomatizing computation — a purely theoretical exercise. Yet five of his
    nine innovations are now universal (conditionals, first-class functions,
    recursion, dynamic variables, garbage collection), and expression-based
    composition is spreading. This pattern suggests that building from first
    principles, even when impractical for current hardware, produces designs
    that outlast pragmatic compromises.


    The implication for system design is significant: when choosing between a
    theoretically clean abstraction and a practical hack, the clean abstraction
    often wins on a long enough timeline. The 'random expedients' other
    languages adopted were responses to 1950s hardware constraints that became
    entrenched through path dependency, not because they were better designs.
    This is a strong argument for investing in correct abstractions even when
    they seem over-engineered for today's constraints.
stance: >-
  Programming language features that seem radical at introduction become
  universal defaults within 30-50 years, suggesting that theoretically grounded
  design beats pragmatic incrementalism long-term
related:
  - INS-260325-C7FA
  - INS-260330-9A46
  - INS-260404-86DE
  - INS-260327-9377
  - INS-260329-ACE6
---
McCarthy designed Lisp not to fix Fortran's mistakes but as a byproduct of axiomatizing computation — a purely theoretical exercise. Yet five of his nine innovations are now universal (conditionals, first-class functions, recursion, dynamic variables, garbage collection), and expression-based composition is spreading. This pattern suggests that building from first principles, even when impractical for current hardware, produces designs that outlast pragmatic compromises.

The implication for system design is significant: when choosing between a theoretically clean abstraction and a practical hack, the clean abstraction often wins on a long enough timeline. The 'random expedients' other languages adopted were responses to 1950s hardware constraints that became entrenched through path dependency, not because they were better designs. This is a strong argument for investing in correct abstractions even when they seem over-engineered for today's constraints.

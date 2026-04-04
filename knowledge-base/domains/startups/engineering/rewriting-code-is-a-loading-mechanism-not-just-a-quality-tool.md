---
id: INS-260403-0A7A
domain: startups
topic: engineering
title: 'Rewriting code is a loading mechanism, not just a quality tool'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - refactoring
  - prototyping
  - code-quality
  - mental-models
sources:
  - type: blog
    title: Holding a Program in One's Head
    url: 'https://paulgraham.com/head.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Rewriting code you've already written forces you to fully understand it,
    which is the prerequisite for seeing fundamentally better designs.
  standard: >-
    Conventional wisdom treats code rewrites as wasteful unless the resulting
    code is measurably better. Graham reframes rewriting as a cognitive tool:
    the act of rewriting forces you to hold the entire program in your head,
    which is itself the goal. The improved design is a frequent side effect, but
    even without it, the rewrite accomplishes something valuable — deep mental
    loading.


    This explains why 'labors of love' that get rewritten multiple times often
    end up with surprisingly elegant architectures. It's not just because the
    programmer had more time; it's because each rewrite forced a complete
    re-internalization that made previously invisible design possibilities
    visible. The implication for engineering practice is that planned rewrites
    of prototypes should be budgeted as a thinking tool, not just a code quality
    measure.
stance: >-
  The primary value of rewriting working code is that it forces complete mental
  internalization of the program, which enables redesign that wouldn't otherwise
  be conceivable.
related:
  - INS-260321-703F
  - INS-260329-44C9
  - INS-260329-500E
  - INS-260329-E333
  - INS-260329-6D6C
  - INS-260329-18C9
  - INS-260329-1ACD
  - INS-260329-CB03
---
Conventional wisdom treats code rewrites as wasteful unless the resulting code is measurably better. Graham reframes rewriting as a cognitive tool: the act of rewriting forces you to hold the entire program in your head, which is itself the goal. The improved design is a frequent side effect, but even without it, the rewrite accomplishes something valuable — deep mental loading.

This explains why 'labors of love' that get rewritten multiple times often end up with surprisingly elegant architectures. It's not just because the programmer had more time; it's because each rewrite forced a complete re-internalization that made previously invisible design possibilities visible. The implication for engineering practice is that planned rewrites of prototypes should be budgeted as a thinking tool, not just a code quality measure.

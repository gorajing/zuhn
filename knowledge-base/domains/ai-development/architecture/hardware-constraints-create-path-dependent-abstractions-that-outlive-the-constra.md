---
id: INS-260404-5440
domain: ai-development
topic: architecture
title: >-
  Hardware constraints create path-dependent abstractions that outlive the
  constraints
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - path-dependency
  - technical-debt
  - abstraction
  - hardware-constraints
  - language-design
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
    Fortran's expression/statement distinction existed because of punch cards,
    but persisted in languages long after that constraint vanished.
  standard: >-
    The expression vs. statement distinction in programming languages is
    Graham's most illustrative example of path dependency. Fortran was
    line-oriented because input came from punch cards — you couldn't nest
    statements, so there was no point making everything return a value. When
    block-structured languages arrived and removed the physical constraint, the
    conceptual distinction was already entrenched and propagated through Algol
    into virtually every mainstream language.


    This is a warning for any system architect: constraints from your current
    environment will get baked into your abstractions, and those abstractions
    will outlive the constraints by decades. The people who design the next
    layer won't question the distinction because it's 'how things are done.' The
    antidote is periodically asking whether your foundational abstractions still
    reflect real constraints or just historical accidents — exactly what Lisp's
    expression-only approach implicitly asked.
stance: >-
  Temporary hardware limitations get permanently encoded into software
  abstractions through language design choices, creating technical debt that
  persists for decades
related:
  - INS-260330-6494
  - INS-260330-B640
  - INS-260404-C7A1
  - INS-260323-3920
  - INS-260329-0A55
---
The expression vs. statement distinction in programming languages is Graham's most illustrative example of path dependency. Fortran was line-oriented because input came from punch cards — you couldn't nest statements, so there was no point making everything return a value. When block-structured languages arrived and removed the physical constraint, the conceptual distinction was already entrenched and propagated through Algol into virtually every mainstream language.

This is a warning for any system architect: constraints from your current environment will get baked into your abstractions, and those abstractions will outlive the constraints by decades. The people who design the next layer won't question the distinction because it's 'how things are done.' The antidote is periodically asking whether your foundational abstractions still reflect real constraints or just historical accidents — exactly what Lisp's expression-only approach implicitly asked.

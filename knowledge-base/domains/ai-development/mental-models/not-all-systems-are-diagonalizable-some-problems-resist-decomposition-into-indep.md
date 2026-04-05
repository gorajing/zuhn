---
id: INS-260330-D7CA
domain: ai-development
topic: mental-models
title: >-
  Not all systems are diagonalizable — some problems resist decomposition into
  independent parts
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - shear
  - non-diagonalizable
  - irreducible-complexity
  - coupling
sources:
  - type: youtube
    title: 'Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A shear transformation has too few eigenvectors to form an eigenbasis,
    meaning it cannot be decomposed into independent scaling operations along
    any set of axes.
  standard: >-
    A 90-degree rotation has no real eigenvectors at all — no vector stays on
    its span. A shear has eigenvectors but not enough to span the full space.
    These are structurally different from diagonalizable transformations: they
    contain irreducible coupling between dimensions that no change of
    coordinates can eliminate.


    This is a useful diagnostic in any domain: when you can't decompose a
    problem into independent subproblems, it might not be a failure of your
    decomposition strategy — it might be that the problem genuinely has
    irreducible interdependencies. In software, some modules are truly coupled
    and forcing separation creates worse abstractions. In organizations, some
    functions genuinely can't operate independently. Recognizing
    non-diagonalizability prevents wasting effort searching for a clean
    decomposition that structurally cannot exist.
stance: >-
  The inability to find enough eigenvectors to span a space is a genuine
  structural property of certain transformations, not a failure of analysis.
related:
  - INS-260330-798D
  - INS-260330-BF2A
  - INS-260330-DE16
  - INS-260330-E059
  - INS-260330-CCA2
evidence:
  - id: INS-260330-9A83
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
A 90-degree rotation has no real eigenvectors at all — no vector stays on its span. A shear has eigenvectors but not enough to span the full space. These are structurally different from diagonalizable transformations: they contain irreducible coupling between dimensions that no change of coordinates can eliminate.

This is a useful diagnostic in any domain: when you can't decompose a problem into independent subproblems, it might not be a failure of your decomposition strategy — it might be that the problem genuinely has irreducible interdependencies. In software, some modules are truly coupled and forcing separation creates worse abstractions. In organizations, some functions genuinely can't operate independently. Recognizing non-diagonalizability prevents wasting effort searching for a clean decomposition that structurally cannot exist.

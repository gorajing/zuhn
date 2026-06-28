---
id: INS-260627-E230
domain: ai-development
topic: agent-reliability
title: >-
  As implementation gets verified, the specification becomes the dominant source
  of bugs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - specifications
  - formal-verification
  - bug-definition
  - requirements
  - spec-driven-development
sources:
  - type: youtube
    title: 'Vision: Zero Bugs — Johann Schleier-Smith, Temporal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qLqttdO33UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Verification is only as good as its specification — anything you forget to
    check is an opening for bugs — so as agents nail implementation, the spec
    becomes the bottleneck.
  standard: >-
    A bug is best defined by outcome: the program's behavior doesn't match the
    end user's expectations. The user doesn't care whether it was a flawed
    product spec or a forgotten null check — it just doesn't matter. This
    reframes verification: proving code correct only proves it correct against
    what you specified.


    The speaker's formal-methods demo makes the limit concrete. A Dafny verifier
    proved an array-search function correct and caught an injected bug — but its
    guarantee only covers the assertions written down. 'Verification is only as
    good as the specification. If I leave out anything that needs to be checked,
    that creates an opportunity for bugs.' Specifications unavoidably carry some
    ambiguity, and the real world produces unmodeled situations.


    The implication for agentic and verified workflows: as the implementation
    layer gets reliably handled, the locus of bugs shifts upward to the spec.
    Invest in detailed, complete specifications and explicit risk analysis — the
    incompleteness of what you asked for, not the correctness of what was built,
    becomes the thing most likely to bite you.
stance: >-
  When formal methods and agents eliminate implementation errors, incomplete or
  ambiguous specifications become the dominant remaining source of bugs.
related:
  - INS-260320-4B31
  - PRI-260403-5B3D
  - INS-260410-A1E9
  - INS-260603-6FE3
  - INS-260605-AE67
  - INS-260605-5CF8
  - INS-260626-73D4
  - PRI-260405-3080
  - INS-260605-BAB5
  - INS-260626-DA0A
---
A bug is best defined by outcome: the program's behavior doesn't match the end user's expectations. The user doesn't care whether it was a flawed product spec or a forgotten null check — it just doesn't matter. This reframes verification: proving code correct only proves it correct against what you specified.

The speaker's formal-methods demo makes the limit concrete. A Dafny verifier proved an array-search function correct and caught an injected bug — but its guarantee only covers the assertions written down. 'Verification is only as good as the specification. If I leave out anything that needs to be checked, that creates an opportunity for bugs.' Specifications unavoidably carry some ambiguity, and the real world produces unmodeled situations.

The implication for agentic and verified workflows: as the implementation layer gets reliably handled, the locus of bugs shifts upward to the spec. Invest in detailed, complete specifications and explicit risk analysis — the incompleteness of what you asked for, not the correctness of what was built, becomes the thing most likely to bite you.

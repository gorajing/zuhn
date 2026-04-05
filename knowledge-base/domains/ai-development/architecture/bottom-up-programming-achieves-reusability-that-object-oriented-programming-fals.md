---
id: INS-260402-2D95
domain: ai-development
topic: architecture
title: >-
  Bottom-up programming achieves reusability that object-oriented programming
  falsely claims
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reusability
  - bottom-up
  - object-oriented
  - domain-specific-languages
  - abstraction-layers
sources:
  - type: blog
    title: The Hundred-Year Language
    url: 'https://paulgraham.com/hundred.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Libraries are reusable because they are language, not because they are
    object-oriented.
  standard: >-
    Graham argues that reusability got incorrectly attached to object-oriented
    programming in the 1980s and has never been dislodged despite contrary
    evidence. The actual source of reusability is bottom-up programming —
    writing a program as a series of layers where each layer serves as a
    language for the one above. Libraries are reusable because they function as
    language, regardless of whether they use OOP patterns. A language is by
    definition reusable; the more of your application you push into a language
    for writing that type of application, the more reusable your software
    becomes.


    Graham's devastating observation that 'object-oriented programming offers a
    sustainable way to write spaghetti code' and 'lets you accrete programs as a
    series of patches' explains OOP's persistence in large organizations despite
    its theoretical shortcomings. Large organizations naturally develop software
    through accretion, and OOP accommodates this tendency. The insight for
    practitioners: when designing for reusability, think in terms of composable
    abstractions and DSLs, not class hierarchies.
stance: >-
  Reusability comes from building programs as layers of domain-specific
  languages (bottom-up), not from object-oriented inheritance hierarchies,
  despite OOP's decades-long association with reusability.
related:
  - INS-260329-6A26
  - INS-260330-C2C4
  - INS-260403-F100
  - INS-260405-F6A6
  - INS-260330-81D3
  - INS-260329-EDA2
evidence:
  - id: INS-260330-C2C4
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-81D3
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260327-2C5F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260402-0D16
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260403-F100
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Graham argues that reusability got incorrectly attached to object-oriented programming in the 1980s and has never been dislodged despite contrary evidence. The actual source of reusability is bottom-up programming — writing a program as a series of layers where each layer serves as a language for the one above. Libraries are reusable because they function as language, regardless of whether they use OOP patterns. A language is by definition reusable; the more of your application you push into a language for writing that type of application, the more reusable your software becomes.

Graham's devastating observation that 'object-oriented programming offers a sustainable way to write spaghetti code' and 'lets you accrete programs as a series of patches' explains OOP's persistence in large organizations despite its theoretical shortcomings. Large organizations naturally develop software through accretion, and OOP accommodates this tendency. The insight for practitioners: when designing for reusability, think in terms of composable abstractions and DSLs, not class hierarchies.

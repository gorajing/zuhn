---
id: INS-260329-BA12
domain: ai-development
topic: system-building
title: Inheritance creates fragile hierarchies — composition is often superior
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - inheritance
  - composition
  - OOP
  - coupling
  - design-patterns
sources:
  - type: youtube
    title: C# Tutorial - Full Course for Beginners
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Inheritance (Chef is-a subclass of Person) seems elegant but creates rigid
    hierarchies — in practice, composition ('has-a') produces more flexible
    systems.
  standard: >-
    The tutorial teaches inheritance through a classic example: a Chef class
    inherits from a Person class, gaining all its properties while adding
    cooking-specific behavior. This is the textbook OOP pattern. However, the
    tutorial inadvertently demonstrates inheritance's limitation — what happens
    when a Chef is also a Teacher? Multiple inheritance isn't supported in C#.


    This is a well-known tension in software design. The 'Gang of Four' famously
    advised 'favor composition over inheritance.' In practice, deep inheritance
    hierarchies (Animal → Mammal → Dog → GoldenRetriever) create brittle systems
    where changes to parent classes ripple unpredictably through children.
    Composition — where objects contain references to other objects rather than
    inheriting from them — is more flexible. The insight applies beyond OOP: any
    system with rigid hierarchical dependencies becomes harder to change than
    one with modular, composable parts.
stance: >-
  While inheritance enables code reuse through 'is-a' relationships, deep
  inheritance hierarchies create tight coupling that makes systems fragile and
  hard to modify — favor composition for most real-world designs.
related:
  - INS-260329-40B6
  - INS-260329-6A26
  - INS-260330-CE2F
  - INS-260329-1610
  - INS-260402-F479
  - INS-260330-72C2
  - INS-260330-AA77
evidence:
  - id: INS-260329-40B6
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-CE2F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-72C2
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-DBFE
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260330-AA77
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260402-F479
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The tutorial teaches inheritance through a classic example: a Chef class inherits from a Person class, gaining all its properties while adding cooking-specific behavior. This is the textbook OOP pattern. However, the tutorial inadvertently demonstrates inheritance's limitation — what happens when a Chef is also a Teacher? Multiple inheritance isn't supported in C#.

This is a well-known tension in software design. The 'Gang of Four' famously advised 'favor composition over inheritance.' In practice, deep inheritance hierarchies (Animal → Mammal → Dog → GoldenRetriever) create brittle systems where changes to parent classes ripple unpredictably through children. Composition — where objects contain references to other objects rather than inheriting from them — is more flexible. The insight applies beyond OOP: any system with rigid hierarchical dependencies becomes harder to change than one with modular, composable parts.

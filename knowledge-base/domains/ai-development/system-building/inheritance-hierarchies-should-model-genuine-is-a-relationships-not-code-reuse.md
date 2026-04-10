---
id: INS-260329-6A26
domain: ai-development
topic: system-building
title: >-
  Inheritance hierarchies should model genuine is-a relationships, not code
  reuse
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - inheritance
  - composition
  - oop-design
  - code-reuse
  - taxonomy
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
    Inheritance should model genuine is-a relationships; using it purely for
    code reuse creates brittle hierarchies.
  standard: >-
    The tutorial introduces inheritance with a Chef class and an ItalianChef
    subclass that inherits base cooking methods while adding specializations.
    This works because an Italian chef genuinely is-a chef. However, the
    tutorial's simplicity masks a crucial design tension: in real systems,
    inheritance hierarchies often grow to model relationships that aren't truly
    taxonomic (e.g., a FlyingCar inheriting from both Car and Aircraft).


    In AI system design, this manifests as the temptation to create deep class
    hierarchies for different agent types (ResearchAgent → CodeAgent →
    DebugAgent) when composition of capabilities (tools, prompts, constraints)
    would be more flexible. The principle: inherit for identity ('this IS a type
    of that'), compose for capability ('this CAN DO what that does'). Most
    real-world systems benefit from shallow hierarchies with rich composition.
stance: >-
  Using inheritance purely for code reuse rather than genuine taxonomic
  relationships creates brittle hierarchies that resist change, making
  composition preferable for most real-world modeling.
related:
  - PRI-260406-D02A
  - PRI-260406-788D
  - INS-260329-1277
  - INS-260329-BA12
  - INS-260404-21E6
  - INS-260325-890D
  - INS-260410-1B17
evidence:
  - id: INS-260329-C401
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The tutorial introduces inheritance with a Chef class and an ItalianChef subclass that inherits base cooking methods while adding specializations. This works because an Italian chef genuinely is-a chef. However, the tutorial's simplicity masks a crucial design tension: in real systems, inheritance hierarchies often grow to model relationships that aren't truly taxonomic (e.g., a FlyingCar inheriting from both Car and Aircraft).

In AI system design, this manifests as the temptation to create deep class hierarchies for different agent types (ResearchAgent → CodeAgent → DebugAgent) when composition of capabilities (tools, prompts, constraints) would be more flexible. The principle: inherit for identity ('this IS a type of that'), compose for capability ('this CAN DO what that does'). Most real-world systems benefit from shallow hierarchies with rich composition.

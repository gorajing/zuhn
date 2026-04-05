---
id: INS-260329-1610
domain: ai-development
topic: system-building
title: Static vs instance attributes model the class-object duality
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - OOP
  - class-design
  - static-members
  - mental-models
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
    Static attributes reveal that classes are first-class entities with their
    own state, not merely blueprints for objects.
  standard: >-
    The tutorial introduces a Song class with a static songCount that increments
    in the constructor. By printing songCount between object creations, students
    see it go from 0 to 1 to 2. The key conceptual leap: you access it via
    Song.songCount (the class), not holiday.songCount (an object). This
    distinction — that a class is itself an entity that can hold state — is one
    of the hardest OOP concepts for beginners. Most learners think of classes
    purely as templates. The static keyword breaks that mental model in a
    productive way, revealing the class-object duality that underlies patterns
    like singletons, factory methods, and dependency injection.
stance: >-
  The static keyword is the clearest teaching moment for understanding that
  classes are themselves entities with state, not just templates for objects
related:
  - PRI-260320-467A
  - INS-260330-CE2F
  - INS-260329-C33B
  - INS-260329-9157
  - INS-260329-41BC
evidence:
  - id: INS-260330-CE2F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-41BC
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The tutorial introduces a Song class with a static songCount that increments in the constructor. By printing songCount between object creations, students see it go from 0 to 1 to 2. The key conceptual leap: you access it via Song.songCount (the class), not holiday.songCount (an object). This distinction — that a class is itself an entity that can hold state — is one of the hardest OOP concepts for beginners. Most learners think of classes purely as templates. The static keyword breaks that mental model in a productive way, revealing the class-object duality that underlies patterns like singletons, factory methods, and dependency injection.

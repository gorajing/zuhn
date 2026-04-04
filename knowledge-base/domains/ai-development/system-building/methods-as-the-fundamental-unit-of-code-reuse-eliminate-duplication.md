---
id: INS-260329-6D6C
domain: ai-development
topic: system-building
title: Methods as the fundamental unit of code reuse eliminate duplication
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - methods
  - functions
  - DRY
  - refactoring
  - abstraction
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
    When you find yourself writing the same logic twice, extract it into a
    method with parameters — this is the most impactful refactoring pattern.
  standard: >-
    The tutorial demonstrates methods through a concrete example: a 'sayHi'
    function that takes a name and age parameter. Instead of writing greeting
    logic repeatedly for different people, you write it once and call it with
    different arguments. The tutorial shows how methods accept parameters
    (inputs), return values (outputs), and encapsulate logic.


    This is the fundamental unit of abstraction in programming. The tutorial's
    progression from inline code → methods → classes mirrors how real codebases
    evolve: first you write it inline, then you notice duplication, then you
    extract. The key insight is that methods aren't just about reducing lines of
    code — they're about creating named, testable units of behavior. When a
    method has a clear name and well-defined inputs/outputs, the code becomes
    self-documenting.
stance: >-
  Extracting repeated logic into named methods with parameters is the single
  highest-leverage refactoring pattern — it reduces duplication, centralizes
  change, and makes code self-documenting.
related:
  - INS-260330-F5A1
  - INS-260329-7B1D
  - INS-260325-FDA9
  - INS-260329-E333
  - INS-260403-FF4E
evidence:
  - id: INS-260329-7B1D
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-E333
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-E208
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The tutorial demonstrates methods through a concrete example: a 'sayHi' function that takes a name and age parameter. Instead of writing greeting logic repeatedly for different people, you write it once and call it with different arguments. The tutorial shows how methods accept parameters (inputs), return values (outputs), and encapsulate logic.

This is the fundamental unit of abstraction in programming. The tutorial's progression from inline code → methods → classes mirrors how real codebases evolve: first you write it inline, then you notice duplication, then you extract. The key insight is that methods aren't just about reducing lines of code — they're about creating named, testable units of behavior. When a method has a clear name and well-defined inputs/outputs, the code becomes self-documenting.

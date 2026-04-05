---
id: INS-260329-35F2
domain: ai-development
topic: system-building
title: Exception handling as a contract between program and unpredictable input
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - defensive-programming
  - system-boundaries
  - input-validation
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
    Demonstrating program crashes from bad input before introducing try-catch
    makes error handling feel necessary rather than ceremonial.
  standard: >-
    The tutorial lets the program crash twice — once from dividing by zero, once
    from converting a letter to an integer — before introducing try-catch.
    Students see the unhandled exception dialog and experience the program
    terminating. This creates visceral motivation for exception handling. The
    key insight is that exceptions represent a boundary between what your
    program controls (internal logic) and what it doesn't (user input, external
    data). This maps directly to a broader system design principle: validate and
    handle errors at system boundaries, trust internal code. The tutorial's
    approach of crash-first-then-handle teaches this boundary thinking
    implicitly.
stance: >-
  Teaching try-catch through division-by-zero and type conversion failures
  builds a stronger mental model of defensive programming than teaching
  exception syntax in isolation
related:
  - INS-260329-A6FB
  - INS-260329-F635
  - INS-260329-3441
  - INS-260329-9010
  - INS-260329-3FC9
  - INS-260329-A218
  - INS-260329-72E0
  - INS-260330-82B5
evidence:
  - id: INS-260329-A218
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The tutorial lets the program crash twice — once from dividing by zero, once from converting a letter to an integer — before introducing try-catch. Students see the unhandled exception dialog and experience the program terminating. This creates visceral motivation for exception handling. The key insight is that exceptions represent a boundary between what your program controls (internal logic) and what it doesn't (user input, external data). This maps directly to a broader system design principle: validate and handle errors at system boundaries, trust internal code. The tutorial's approach of crash-first-then-handle teaches this boundary thinking implicitly.

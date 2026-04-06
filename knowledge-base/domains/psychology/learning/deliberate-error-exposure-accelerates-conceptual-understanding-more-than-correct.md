---
id: INS-260329-F892
domain: psychology
topic: learning
title: >-
  Deliberate error exposure accelerates conceptual understanding more than
  correct-first instruction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-driven-learning
  - pedagogy
  - debugging
  - mental-models
sources:
  - type: youtube
    title: Microsoft Excel Tutorial for Beginners - Full Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Letting learners encounter predictable errors (negative overtime, wrong
    relative references) before introducing the fix creates deeper understanding
    than presenting the correct solution first.
  standard: >-
    The course repeatedly uses a pattern: attempt the naive solution, observe it
    fail, then introduce the correct concept. For overtime calculation, the
    simple formula (hours - 40) produces negative values for employees under 40
    hours — the IF function is introduced as the rescue. For multi-week payroll,
    copy-pasting formulas silently produces absurd wage numbers ($3,300/week)
    because relative references shift the wage column — absolute references
    ($C4) are introduced as the fix. For the gradebook percentage, fill-down
    produces a #DIV/0! error because relative referencing moves the denominator
    away from the 'points possible' row.


    This 'productive failure' pedagogy works because the error creates a
    specific question in the learner's mind ('why did that happen?') before the
    answer is provided. Cognitive science research supports this — information
    presented as an answer to an actively-held question is retained far better
    than information presented preemptively. The instructor isn't being
    inefficient by showing wrong approaches; he's engineering the precise
    cognitive state that makes the correct approach memorable.
stance: >-
  Showing learners the wrong result before explaining the correct approach
  creates stronger mental models than demonstrating only the correct solution
related:
  - INS-260329-F84E
  - INS-260329-DABC
  - INS-260329-8896
  - INS-260322-C935
  - INS-260329-023F
  - INS-260330-5609
evidence:
  - id: INS-260329-F84E
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-8896
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260322-C935
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The course repeatedly uses a pattern: attempt the naive solution, observe it fail, then introduce the correct concept. For overtime calculation, the simple formula (hours - 40) produces negative values for employees under 40 hours — the IF function is introduced as the rescue. For multi-week payroll, copy-pasting formulas silently produces absurd wage numbers ($3,300/week) because relative references shift the wage column — absolute references ($C4) are introduced as the fix. For the gradebook percentage, fill-down produces a #DIV/0! error because relative referencing moves the denominator away from the 'points possible' row.

This 'productive failure' pedagogy works because the error creates a specific question in the learner's mind ('why did that happen?') before the answer is provided. Cognitive science research supports this — information presented as an answer to an actively-held question is retained far better than information presented preemptively. The instructor isn't being inefficient by showing wrong approaches; he's engineering the precise cognitive state that makes the correct approach memorable.

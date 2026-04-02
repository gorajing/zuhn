---
id: INS-260329-9927
domain: psychology
topic: learning
title: Zero-based indexing reveals the gap between human intuition and formal systems
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - cognitive-load
  - abstraction
  - mental-models
  - programming-pedagogy
sources:
  - type: youtube
    title: Learn JavaScript - Full Course for Beginners
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Zero-based indexing is counter-intuitive because humans count from 1, and
    this mismatch creates ongoing off-by-one errors even in experienced
    programmers.
  standard: >-
    The course spends significant time explaining that 'most modern programming
    languages like JavaScript don't start counting at 1 like humans do — they
    start at 0, which is called zero-based indexing.' This isn't just a
    beginner's hurdle; off-by-one errors remain one of the most common bug
    categories across all experience levels.


    This reveals a broader principle about system design: when a formal system's
    conventions contradict deeply ingrained human intuition (like counting from
    1), the cognitive tax is permanent, not temporary. Designers of APIs, AI
    prompt systems, and user interfaces should minimize these mismatches. Where
    mismatches are unavoidable (as with array indexing for performance reasons),
    the system should provide abstractions that let users think in their natural
    mental model — like forEach loops and .length properties that hide the raw
    index math.
stance: >-
  The persistent difficulty learners have with zero-based indexing demonstrates
  that formal system conventions that violate natural counting intuition create
  a permanent cognitive tax, not a temporary learning curve.
related:
  - INS-260326-CAAB
  - INS-260329-4870
  - INS-260329-7A6A
  - INS-260329-D8BC
  - INS-260329-4109
  - INS-260325-FDA9
evidence:
  - id: INS-260326-CAAB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-D8BC
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The course spends significant time explaining that 'most modern programming languages like JavaScript don't start counting at 1 like humans do — they start at 0, which is called zero-based indexing.' This isn't just a beginner's hurdle; off-by-one errors remain one of the most common bug categories across all experience levels.

This reveals a broader principle about system design: when a formal system's conventions contradict deeply ingrained human intuition (like counting from 1), the cognitive tax is permanent, not temporary. Designers of APIs, AI prompt systems, and user interfaces should minimize these mismatches. Where mismatches are unavoidable (as with array indexing for performance reasons), the system should provide abstractions that let users think in their natural mental model — like forEach loops and .length properties that hide the raw index math.

---
id: INS-260329-3C75
domain: ai-development
topic: system-building
title: Self-documenting structure beats inline comments for maintainability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-quality
  - documentation
  - semantic-html
  - naming
sources:
  - type: youtube
    title: HTML Full Course - Build a Website Tutorial
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Semantic naming and structural clarity communicate intent more reliably than
    comments because structure can't drift out of sync with behavior.
  standard: >-
    The tutorial's advice to use semantic HTML elements (header, nav, main,
    footer) instead of generic divs with comments illustrates a broader
    principle: structure that encodes meaning is more maintainable than
    arbitrary structure plus explanatory annotations. Comments are a form of
    documentation debt — they require manual synchronization with the code they
    describe, and this synchronization always eventually fails.


    This maps directly to system design beyond HTML: naming functions by what
    they do rather than adding comments explaining what they do; using type
    systems to encode constraints rather than documenting them; choosing data
    structures that make invalid states unrepresentable rather than validating
    against them. The underlying insight is that meaning embedded in structure
    is self-enforcing, while meaning added as annotation is self-decaying.
    Prefer the former whenever the domain allows it.
stance: >-
  Code that uses semantic naming and clear structure communicates intent more
  reliably than inline comments, because comments drift from code while
  structure is the code
related:
  - PRI-260407-1D23
  - INS-260411-59F7
  - INS-260409-B13F
  - INS-260410-EE5C
  - INS-260329-12D1
evidence:
  - id: INS-260330-3C2F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-B33F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260327-4C73
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260403-ABB7
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
The tutorial's advice to use semantic HTML elements (header, nav, main, footer) instead of generic divs with comments illustrates a broader principle: structure that encodes meaning is more maintainable than arbitrary structure plus explanatory annotations. Comments are a form of documentation debt — they require manual synchronization with the code they describe, and this synchronization always eventually fails.

This maps directly to system design beyond HTML: naming functions by what they do rather than adding comments explaining what they do; using type systems to encode constraints rather than documenting them; choosing data structures that make invalid states unrepresentable rather than validating against them. The underlying insight is that meaning embedded in structure is self-enforcing, while meaning added as annotation is self-decaying. Prefer the former whenever the domain allows it.

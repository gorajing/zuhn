---
id: INS-260329-CB03
domain: ai-development
topic: system-building
title: Self-documenting code is superior to commented messy code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - conventions
  - debugging
  - code-quality
  - documentation
  - simplicity
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
    Comments should explain why, not what — if code needs a comment to explain
    what it does, the code itself should be rewritten.
  standard: >-
    The instructor makes a pointed argument against comment-heavy code:
    developers who write messy HTML and then add comments explaining what each
    section does are solving the wrong problem. The real fix is rewriting the
    code to be readable without commentary. Comments should be reserved for
    things that cannot be expressed through the code itself — the 'why' behind a
    decision, not the 'what' of the implementation. This principle scales beyond
    HTML to all programming: self-documenting code through clear naming, proper
    indentation, semantic structure, and logical organization is always
    preferable to a wall of explanatory comments sitting atop tangled logic.
    Comments that restate what code does actually create a maintenance burden
    because they can drift out of sync with the code they describe, creating
    misleading documentation that's worse than no documentation at all.
stance: >-
  Comments that explain what messy code does are a sign of failure — the correct
  fix is rewriting the code to be self-explanatory, not adding documentation on
  top of confusion
related:
  - INS-260329-500E
  - INS-260321-703F
  - INS-260330-2C97
  - INS-260321-82FE
  - INS-260329-F362
---
The instructor makes a pointed argument against comment-heavy code: developers who write messy HTML and then add comments explaining what each section does are solving the wrong problem. The real fix is rewriting the code to be readable without commentary. Comments should be reserved for things that cannot be expressed through the code itself — the 'why' behind a decision, not the 'what' of the implementation. This principle scales beyond HTML to all programming: self-documenting code through clear naming, proper indentation, semantic structure, and logical organization is always preferable to a wall of explanatory comments sitting atop tangled logic. Comments that restate what code does actually create a maintenance burden because they can drift out of sync with the code they describe, creating misleading documentation that's worse than no documentation at all.

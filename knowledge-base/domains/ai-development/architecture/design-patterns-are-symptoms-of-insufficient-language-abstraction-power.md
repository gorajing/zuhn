---
id: INS-260402-06DB
domain: ai-development
topic: architecture
title: Design patterns are symptoms of insufficient language abstraction power
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - programming-languages
  - design-patterns
  - abstraction
  - metaprogramming
sources:
  - type: blog
    title: Revenge of the Nerds
    url: 'https://paulgraham.com/icad.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Patterns in code signal you're hand-compiling abstractions your language
    should provide natively.
  standard: >-
    Graham cites Peter Norvig's finding that 16 of 23 Gang of Four design
    patterns are 'invisible or simpler' in Lisp, and frames this through
    Greenspun's Tenth Rule: any sufficiently complex program in a less powerful
    language ends up reimplementing half of Lisp ad hoc. The deeper claim is
    that visible regularity in code — patterns — should be a red flag, not a
    best practice. The shape of a program should reflect only the problem
    domain; any other structure means you're generating by hand what a macro or
    higher-level abstraction should generate automatically.


    This has direct implications for AI-assisted code generation: if patterns
    are really manual compilation artifacts, then AI tools that generate
    boilerplate pattern code are automating a symptom rather than solving the
    root cause. The more powerful path is tools that let you express the intent
    directly and generate the pattern expansion — which is essentially what Lisp
    macros do.
stance: >-
  Recurring design patterns in code indicate the programmer is manually
  compensating for missing language features rather than solving the actual
  problem.
related:
  - INS-260323-AF96
  - INS-260329-393C
  - INS-260329-E015
  - INS-260329-9745
  - INS-260329-B170
  - INS-260330-0E6E
  - INS-260330-E5F7
  - INS-260329-A461
  - INS-260329-25FC
evidence:
  - id: INS-260329-393C
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-25FC
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Graham cites Peter Norvig's finding that 16 of 23 Gang of Four design patterns are 'invisible or simpler' in Lisp, and frames this through Greenspun's Tenth Rule: any sufficiently complex program in a less powerful language ends up reimplementing half of Lisp ad hoc. The deeper claim is that visible regularity in code — patterns — should be a red flag, not a best practice. The shape of a program should reflect only the problem domain; any other structure means you're generating by hand what a macro or higher-level abstraction should generate automatically.

This has direct implications for AI-assisted code generation: if patterns are really manual compilation artifacts, then AI tools that generate boilerplate pattern code are automating a symptom rather than solving the root cause. The more powerful path is tools that let you express the intent directly and generate the pattern expansion — which is essentially what Lisp macros do.

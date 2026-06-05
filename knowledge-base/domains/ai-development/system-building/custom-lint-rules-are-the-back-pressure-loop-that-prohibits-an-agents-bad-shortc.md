---
id: INS-260605-3872
domain: ai-development
topic: system-building
title: >-
  Custom lint rules are the back-pressure loop that prohibits an agent's bad
  shortcuts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - linting
  - guardrails
  - agent-supervision
  - static-analysis
  - type-safety
sources:
  - type: youtube
    title: 'Vibe Engineering Effect Apps — Michael Arnaldi, Effectful'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Wmp2Tku2PrI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When you catch an agent doing something dumb (casting with 'as', using
    'any'/'unknown', skipping validation), encode a lint rule banning that exact
    pattern so the type/lint error forces the model to correct itself.
  standard: >-
    Arnaldi's accountability repo has thousands of lines of ESLint rules, each
    one a fossil of a specific shortcut the model took: banning 'as' type
    assertions (after banning 'unknown', the model discovered 'as never as X',
    so he banned 'as' entirely), banning the SQL type parameter that provides no
    runtime validation (forcing SQL.schema instead), forcing all identifiers to
    branded types, and prohibiting constructors inside handlers (which signal
    validation should have happened at the schema edge). His framing: 'Why does
    this rule exist? Because the model did that' — like a pub sign banning
    skateboarding, every rule marks a real incident. Setting all diagnostics to
    error (not warning/suggestion) means the LLM cannot accept code with any
    error, turning the linter into a tight feedback loop that drives the model
    in the right direction. This reframes the programmer's job: not writing
    code, but setting up the repository's guardrails so the model acts well at
    scale.
stance: >-
  The most effective way to stop an agent from taking dangerous shortcuts is to
  ban the specific pattern with a custom lint rule, not a prose instruction.
related:
  - INS-260605-6DE5
  - INS-260320-9D89
  - INS-260602-EA48
  - INS-260403-2FAE
  - INS-260605-C9E8
---
Arnaldi's accountability repo has thousands of lines of ESLint rules, each one a fossil of a specific shortcut the model took: banning 'as' type assertions (after banning 'unknown', the model discovered 'as never as X', so he banned 'as' entirely), banning the SQL type parameter that provides no runtime validation (forcing SQL.schema instead), forcing all identifiers to branded types, and prohibiting constructors inside handlers (which signal validation should have happened at the schema edge). His framing: 'Why does this rule exist? Because the model did that' — like a pub sign banning skateboarding, every rule marks a real incident. Setting all diagnostics to error (not warning/suggestion) means the LLM cannot accept code with any error, turning the linter into a tight feedback loop that drives the model in the right direction. This reframes the programmer's job: not writing code, but setting up the repository's guardrails so the model acts well at scale.

---
id: INS-260605-C223
domain: ai-development
topic: system-building
title: >-
  Use executable BDD specs as the human-readable layer that closes spec-driven
  development's validation gap
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - bdd
  - cucumber
  - spec-driven-development
  - testing
  - verification
sources:
  - type: youtube
    title: >-
      BDD, ADR, PRD, WTF: Capturing Decisions for Humans and AI Alike — Michal
      Cichra, Safe Intelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=504PvfXou5Y'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A markdown spec doesn't prove the product adheres to it, so insert an
    executable, human-readable BDD layer (Cucumber) that is reviewable in
    natural language and linked to PRDs.
  standard: >-
    Cichra names the unsolved problem in spec-driven development: the spec is a
    markdown document describing how something should work, but nothing proves
    the product actually behaves that way. And verification by reading
    AI-generated tests is worse than reading AI-generated code — 'one thing
    harder than reading AI code is reading AI tests.'


    His answer is BDD via Cucumber: 'almost forgotten, suddenly useful again.' A
    BDD scenario is both executable and human-readable — the plain-language
    Given/When/Then is reviewable by a person, while underlying step definitions
    run it as code. Scenarios connect directly to PRDs and critical user
    journeys and can reference the decision documents explaining why each thing
    exists. This closes the loop spec-driven development leaves open: you get a
    layer a human can read, review, and understand, that simultaneously executes
    against the real product. The format is deliberately unconstrained — the
    language is 'on you' — which keeps the artifact optimized for human
    comprehension rather than tooling rigidity.
stance: >-
  Behavior-driven specs written in plain language are a better verification
  layer for AI-generated code than reading AI-generated tests.
related:
  - INS-260403-0CA8
  - INS-260409-0D87
  - INS-260409-51B2
  - INS-260412-2B01
  - INS-260514-93C2
  - INS-260605-9FCF
  - INS-260320-1B10
  - INS-260626-621D
  - INS-260329-12D1
  - INS-260409-96B0
---
Cichra names the unsolved problem in spec-driven development: the spec is a markdown document describing how something should work, but nothing proves the product actually behaves that way. And verification by reading AI-generated tests is worse than reading AI-generated code — 'one thing harder than reading AI code is reading AI tests.'

His answer is BDD via Cucumber: 'almost forgotten, suddenly useful again.' A BDD scenario is both executable and human-readable — the plain-language Given/When/Then is reviewable by a person, while underlying step definitions run it as code. Scenarios connect directly to PRDs and critical user journeys and can reference the decision documents explaining why each thing exists. This closes the loop spec-driven development leaves open: you get a layer a human can read, review, and understand, that simultaneously executes against the real product. The format is deliberately unconstrained — the language is 'on you' — which keeps the artifact optimized for human comprehension rather than tooling rigidity.

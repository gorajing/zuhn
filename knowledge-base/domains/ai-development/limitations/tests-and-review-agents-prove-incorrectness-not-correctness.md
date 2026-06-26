---
id: INS-260605-FD3D
domain: ai-development
topic: limitations
title: 'Tests and review agents prove incorrectness, not correctness'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - testing
  - code-review
  - verification
  - llm-error
  - guardrails
sources:
  - type: youtube
    title: 'Why Rust is the Ideal Language for Vibe-Coding — Daniel Szoke, Sentry'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ugUeZ8-b-u0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tests only prove incorrectness when they fail; LLMs that write the tests (or
    reviews) can be wrong in the same direction as the code.
  standard: >-
    A common defense against LLM-generated bugs is heavy testing plus
    code-review agents. Szoke flags the limits: poorly prompted agents write
    tests after the implementation, so they test implementation details rather
    than behavior; tests only ever prove incorrectness when they fail, since you
    can't exhaustively test every input combination; and when the LLM generates
    both the code and the tests (or the review), it can make correlated mistakes
    in both. These are statistical filters, not deterministic guarantees.
    Because LLMs are non-deterministic by design and therefore permanently
    fallible, Murphy's Law applies — without an absolute deterministic guard,
    failures eventually slip through, and they slip through more often in
    languages that lack such guardrails.
stance: >-
  Tests and code-review agents can only catch failures they happen to hit, so
  they cannot be the absolute guardrail against LLM error.
related:
  - INS-260327-924F
  - INS-260403-0803
  - INS-260403-AA5B
  - INS-260405-2CDB
  - INS-260605-3AFB
  - INS-260329-500E
  - PRI-260406-FB98
  - INS-260605-77EB
  - INS-260625-4355
---
A common defense against LLM-generated bugs is heavy testing plus code-review agents. Szoke flags the limits: poorly prompted agents write tests after the implementation, so they test implementation details rather than behavior; tests only ever prove incorrectness when they fail, since you can't exhaustively test every input combination; and when the LLM generates both the code and the tests (or the review), it can make correlated mistakes in both. These are statistical filters, not deterministic guarantees. Because LLMs are non-deterministic by design and therefore permanently fallible, Murphy's Law applies — without an absolute deterministic guard, failures eventually slip through, and they slip through more often in languages that lack such guardrails.

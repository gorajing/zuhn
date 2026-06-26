---
id: INS-260605-34B0
domain: ai-development
topic: agent-patterns
title: >-
  Make validators adversarial by giving them fresh context and behavioral
  end-to-end testing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - validation
  - creator-verifier
  - qa
  - computer-use
  - code-review
sources:
  - type: youtube
    title: 'The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Separate implementation and validation into different agents with different
    context, and validate behavior by actually running the app, not just linting
    and tests.
  standard: >-
    Missions splits work into a creator-verifier pattern where neither validator
    has seen the code before—'validation is adversarial by design.' The
    implementing agent has a cost bias toward making its code 'work'; a fresh
    agent with fresh context is far more likely to find real issues, mirroring
    why humans do code review. Two validators run at each milestone: a scrutiny
    validator (test suite, type checking, lints, plus dedicated code-review
    agents per feature) and a user-testing validator that behaves like a QA
    engineer—it spawns the live application, drives it via computer use, fills
    forms, clicks buttons, and confirms functional flows work end-to-end.
    Notably, most of a mission's wall-clock time is spent here waiting on
    real-world execution rather than generating tokens. The deeper point is that
    behavioral validation against an independent contract is what catches the
    bugs that implementation-shaped tests miss.
stance: >-
  Verification only works when the validator never saw the code and tests actual
  behavior, not just whether the code looks right.
related:
  - INS-260321-C5AA
  - INS-260403-F7A9
  - INS-260320-63D3
  - INS-260605-AD25
  - INS-260626-35A9
  - INS-260605-86F6
  - INS-260410-F910
  - INS-260626-34FB
---
Missions splits work into a creator-verifier pattern where neither validator has seen the code before—'validation is adversarial by design.' The implementing agent has a cost bias toward making its code 'work'; a fresh agent with fresh context is far more likely to find real issues, mirroring why humans do code review. Two validators run at each milestone: a scrutiny validator (test suite, type checking, lints, plus dedicated code-review agents per feature) and a user-testing validator that behaves like a QA engineer—it spawns the live application, drives it via computer use, fills forms, clicks buttons, and confirms functional flows work end-to-end. Notably, most of a mission's wall-clock time is spent here waiting on real-world execution rather than generating tokens. The deeper point is that behavioral validation against an independent contract is what catches the bugs that implementation-shaped tests miss.

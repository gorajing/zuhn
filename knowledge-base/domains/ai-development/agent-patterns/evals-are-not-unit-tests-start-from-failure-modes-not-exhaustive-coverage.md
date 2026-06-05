---
id: INS-260605-773B
domain: ai-development
topic: agent-patterns
title: 'Evals are not unit tests — start from failure modes, not exhaustive coverage'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - agent-quality
  - testing
  - failure-modes
sources:
  - type: youtube
    title: 'The maturity phases of running evals — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FB-MLPhL9Ms'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build evals high-level around specific failure modes a subject-matter expert
    identifies, not exhaustively like unit tests.
  standard: >-
    Unit tests aim for exhaustive coverage of everything that could break a
    function. Evals cannot work this way because the failure space of a
    non-deterministic agent is effectively infinite — trying to cover it
    exhaustively means you spend all your time writing tests and none shipping.
    Instead, you or a subject-matter expert should enumerate the specific,
    high-level failure modes the agent actually exhibits, and build evals
    targeted at those.


    This also reframes what 'passing' means. Eval results don't need to be
    perfect; they can be directional. LLM-as-judge techniques won't score 100%
    every time, and that's acceptable as long as the trend moves the right way.
    The goal is confidence in agent quality and defense against reputational,
    cost, and compliance risk — not the binary green/red of a deterministic test
    suite.
stance: >-
  You should build evals around a handful of expert-identified failure modes
  rather than trying to exhaustively test every way an agent could fail.
related:
  - INS-260329-4D24
  - INS-260330-A3B7
  - INS-260410-AF66
  - INS-260605-FCDA
  - INS-260403-C0D4
  - INS-260410-FD24
---
Unit tests aim for exhaustive coverage of everything that could break a function. Evals cannot work this way because the failure space of a non-deterministic agent is effectively infinite — trying to cover it exhaustively means you spend all your time writing tests and none shipping. Instead, you or a subject-matter expert should enumerate the specific, high-level failure modes the agent actually exhibits, and build evals targeted at those.

This also reframes what 'passing' means. Eval results don't need to be perfect; they can be directional. LLM-as-judge techniques won't score 100% every time, and that's acceptable as long as the trend moves the right way. The goal is confidence in agent quality and defense against reputational, cost, and compliance risk — not the binary green/red of a deterministic test suite.

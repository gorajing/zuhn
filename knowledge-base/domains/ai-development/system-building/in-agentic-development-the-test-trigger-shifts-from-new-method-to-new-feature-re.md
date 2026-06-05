---
id: INS-260605-3B8B
domain: ai-development
topic: system-building
title: >-
  In agentic development the test trigger shifts from new method to new feature
  request
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - testing
  - tdd
  - behavior-driven
  - workflow
sources:
  - type: youtube
    title: >-
      Beyond Code Coverage: Functionality Testing with Playwright MCP — Marlene
      Mhangami, Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FWEInOtngmM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Write a behavioral test when a feature request arrives, not when you add a
    method to a class.
  standard: >-
    Traditional unit-testing practice tied test-writing to implementation events
    — adding a new method to a class triggered a new unit test, which is why
    suites end up coupled to internal structure. The behavior-first reframing
    makes the trigger a feature request: an incoming feature is what prompts
    writing a failing test that captures the desired end-to-end behavior. This
    keeps tests anchored to stable, user-visible contracts that survive internal
    refactors, and it maps cleanly onto agentic workflows where a feature
    request (e.g. pulled from an email via a skill like Microsoft Work IQ)
    becomes the unit of work an agent plans, tests, and implements against.
stance: >-
  The signal that should trigger writing a test moves from adding a class method
  to receiving a feature request.
related:
  - INS-260329-8226
  - INS-260410-4067
  - INS-260410-DABE
  - INS-260605-3AFB
  - INS-260605-BDFF
  - INS-260330-2F22
  - INS-260329-D2CA
---
Traditional unit-testing practice tied test-writing to implementation events — adding a new method to a class triggered a new unit test, which is why suites end up coupled to internal structure. The behavior-first reframing makes the trigger a feature request: an incoming feature is what prompts writing a failing test that captures the desired end-to-end behavior. This keeps tests anchored to stable, user-visible contracts that survive internal refactors, and it maps cleanly onto agentic workflows where a feature request (e.g. pulled from an email via a skill like Microsoft Work IQ) becomes the unit of work an agent plans, tests, and implements against.

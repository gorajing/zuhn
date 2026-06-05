---
id: INS-260605-C436
domain: ai-development
topic: system-building
title: Replace unit tests with evals because agents are non-deterministic
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - testing
  - reliability
  - llm-as-judge
  - non-determinism
sources:
  - type: youtube
    title: >-
      Why (Senior) Engineers Struggle to Build AI Agents — Philipp Schmid,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3_gYbhABcAE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Input A no longer reliably yields output C, so you must measure how OFTEN an
    agent succeeds rather than asserting it always does.
  standard: >-
    Unit, integration, and smoke tests assume input A through code B always
    yields output C. Agents are non-deterministic — the same prompt can take
    different steps and produce different results — so deterministic assertions
    break down. Reliability is the whole game: a customer agent whose prompt
    works one in ten times is too flaky for production. The shift is from
    assert-based tests to evals that measure the success rate across many runs.


    Because agent outputs are subjective (a research report or a
    customer-feedback response has no single correct string), evaluation needs
    qualitative feedback — LLM-as-a-judge or human experts — plus tracing of
    what the agent did. Critically, you should grade on the outcome, not the
    path: one user might need four extra research steps and more tokens than
    another, and that's fine as long as the end result meets the bar. The
    summary principle is 'evaluate, don't only assert', and finding the
    acceptable success threshold becomes a product decision.
stance: >-
  Agent quality must be measured by pass-rate evals and subjective judging
  rather than deterministic assert-based unit tests.
related:
  - INS-260322-A36C
  - INS-260329-E96A
  - INS-260403-8439
  - INS-260403-A70D
  - INS-260501-9465
  - INS-260501-033E
  - INS-260519-224B
  - INS-260524-0DC3
  - INS-260605-667B
  - INS-260605-9F5C
---
Unit, integration, and smoke tests assume input A through code B always yields output C. Agents are non-deterministic — the same prompt can take different steps and produce different results — so deterministic assertions break down. Reliability is the whole game: a customer agent whose prompt works one in ten times is too flaky for production. The shift is from assert-based tests to evals that measure the success rate across many runs.

Because agent outputs are subjective (a research report or a customer-feedback response has no single correct string), evaluation needs qualitative feedback — LLM-as-a-judge or human experts — plus tracing of what the agent did. Critically, you should grade on the outcome, not the path: one user might need four extra research steps and more tokens than another, and that's fine as long as the end result meets the bar. The summary principle is 'evaluate, don't only assert', and finding the acceptable success threshold becomes a product decision.

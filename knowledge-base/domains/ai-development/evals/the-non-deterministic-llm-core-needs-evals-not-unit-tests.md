---
id: INS-260628-5ACA
domain: ai-development
topic: evals
title: 'The non-deterministic LLM core needs evals, not unit tests'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - reliability
  - testing
  - production
  - llm-behavior
sources:
  - type: youtube
    title: 'Evals Are Not Unit Tests — Ido Pesok, Vercel v0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L8OoYeDI_ls'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Roughly 95% of an AI app is deterministic and unit-testable, but the crucial
    ~5% LLM core fails non-deterministically and requires evals.
  standard: >-
    Pesok frames the core problem with a strawberry-counting app that returns
    '3' twice in testing and then '2' in production. Login, sign-out, and
    plumbing are all deterministic functions you can cover with unit and
    end-to-end tests — that's the 95% that works 100% of the time. The
    reliability that determines whether users keep the product lives in the 5%
    that runs through the LLM, where the same input can produce different
    outputs and users supply queries you never imagined.


    This is why AI apps are uniquely 'demo-savvy': they look flawless in a demo
    and to coworkers, then hallucinate the moment they hit production traffic. A
    passing unit test gives false confidence here because it asserts a single
    deterministic outcome, not behavior across a distribution of inputs and
    stochastic generations. Evals are the right instrument — they sample many
    representative inputs and measure how often the model lands the shot — and
    treating them as a separate discipline from unit testing is the mental shift
    the talk is built around.
stance: >-
  The part of an AI app that actually breaks in production cannot be protected
  by unit tests and must be covered by evals instead.
related:
  - INS-260628-5DBC
  - INS-260628-3746
  - INS-260625-9C3B
  - INS-260627-A81B
  - INS-260625-36DF
---
Pesok frames the core problem with a strawberry-counting app that returns '3' twice in testing and then '2' in production. Login, sign-out, and plumbing are all deterministic functions you can cover with unit and end-to-end tests — that's the 95% that works 100% of the time. The reliability that determines whether users keep the product lives in the 5% that runs through the LLM, where the same input can produce different outputs and users supply queries you never imagined.

This is why AI apps are uniquely 'demo-savvy': they look flawless in a demo and to coworkers, then hallucinate the moment they hit production traffic. A passing unit test gives false confidence here because it asserts a single deterministic outcome, not behavior across a distribution of inputs and stochastic generations. Evals are the right instrument — they sample many representative inputs and measure how often the model lands the shot — and treating them as a separate discipline from unit testing is the mental shift the talk is built around.

---
id: INS-260627-0A69
domain: ai-development
topic: agent-evals
title: >-
  Evaluate flexible loop-agents with back-tests and 'agent smell,' not
  benchmarks
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - back-testing
  - agent-smell
  - benchmarks
  - llm-as-judge
sources:
  - type: youtube
    title: 'How Claude Code Works - Jared Zoneraich, PromptLayer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RFKCzGlAU6Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start by capturing historical runs and back-testing them; track 'agent
    smell' (tool-call count, retries, latency) for sanity checks, and test the
    deterministic tools as plain functions.
  standard: >-
    Zoneraich is blunt that 'benchmarks are pretty useless' — they've become
    marketing, and every model somehow beats them. The simple-loop architecture
    he advocates is harder to eval precisely because it leans on model
    flexibility, so there's no fixed path to assert against. His mental model
    offers three options in order of preference: end-to-end integration tests
    ('does it fix the problem?'), point-in-time tests (inject a half-finished
    conversation where you know a specific tool call should fire), and — most
    recommended — back-tests: start capturing historical data now and simply
    re-run it.


    He introduces 'agent smell' as a complementary lens: run the agent and watch
    how many times it calls tools, how often it retries, and how long it takes.
    These are surface-level metrics, not correctness measures, but they're
    excellent for sanity-checking behavior. The deeper structural advice is to
    offload determinism to the tools: treat each tool as a function with a
    testable input and output, so the parts of your system that must be reliable
    can be rigorously evaluated and versioned even while the surrounding loop
    stays flexible. His own LLM-as-judge example (does the generated email
    contain greeting, body, and signature?) shows how a narrowly-scoped,
    lower-flexibility workflow becomes dramatically easier to eval — you can
    iterate until it scores 100% on your sample set.
stance: >-
  Because flexible loop-based agents resist unit testing, the most practical
  evaluation is back-testing over captured historical data plus surface-level
  behavioral metrics, since benchmarks have become marketing.
related:
  - INS-260403-B08E
  - INS-260410-14E5
  - INS-260423-FF52
  - INS-260423-6879
  - INS-260605-CF2E
  - INS-260605-0819
  - INS-260605-159E
  - INS-260625-36DF
  - INS-260626-715B
  - INS-260605-A2AD
---
Zoneraich is blunt that 'benchmarks are pretty useless' — they've become marketing, and every model somehow beats them. The simple-loop architecture he advocates is harder to eval precisely because it leans on model flexibility, so there's no fixed path to assert against. His mental model offers three options in order of preference: end-to-end integration tests ('does it fix the problem?'), point-in-time tests (inject a half-finished conversation where you know a specific tool call should fire), and — most recommended — back-tests: start capturing historical data now and simply re-run it.

He introduces 'agent smell' as a complementary lens: run the agent and watch how many times it calls tools, how often it retries, and how long it takes. These are surface-level metrics, not correctness measures, but they're excellent for sanity-checking behavior. The deeper structural advice is to offload determinism to the tools: treat each tool as a function with a testable input and output, so the parts of your system that must be reliable can be rigorously evaluated and versioned even while the surrounding loop stays flexible. His own LLM-as-judge example (does the generated email contain greeting, body, and signature?) shows how a narrowly-scoped, lower-flexibility workflow becomes dramatically easier to eval — you can iterate until it scores 100% on your sample set.

---
id: INS-260605-C37E
domain: ai-development
topic: system-design
title: Inject a blank to causally measure whether retrieved context helps
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - rag
  - causal-inference
  - ab-testing
sources:
  - type: youtube
    title: 'How Lovable self-improves every hour — Benjamin Verbeek, Lovable'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KA5kPbdkK2E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When your injector detects a relevant answer, sometimes inject nothing —
    then compare success rates between injected and would-have-injected cohorts.
  standard: >-
    Lovable runs a lightweight model that injects relevant 'Stack Overflow'
    context into the main agent when it detects an applicable issue. The
    non-obvious move: for a small sample where injection WOULD fire, they
    deliberately inject a blank. This creates a clean holdout — the same trigger
    condition with and without the treatment — so they can measure causal lift
    rather than correlation.


    This matters because eligibility itself is confounded: cases that trigger
    injection are systematically different from cases that don't. Comparing
    injected-vs-never-eligible tells you nothing. Comparing
    injected-vs-would-have-been-injected isolates the context's actual effect.
    Items that lift success get shown more; items that don't get shown less or
    thrown out. It's a bandit/RCT pattern applied to a live RAG system, and it's
    what lets them prune aggressively instead of accumulating
    plausible-but-useless context.
stance: >-
  Randomly withholding injected context on a sample of eligible cases is the
  only honest way to know if your knowledge bank improves production outcomes.
related:
  - INS-260330-8A5C
  - INS-260501-6A56
  - INS-260605-FE67
  - INS-260330-8BDA
  - INS-260605-C436
  - INS-260329-E96A
---
Lovable runs a lightweight model that injects relevant 'Stack Overflow' context into the main agent when it detects an applicable issue. The non-obvious move: for a small sample where injection WOULD fire, they deliberately inject a blank. This creates a clean holdout — the same trigger condition with and without the treatment — so they can measure causal lift rather than correlation.

This matters because eligibility itself is confounded: cases that trigger injection are systematically different from cases that don't. Comparing injected-vs-never-eligible tells you nothing. Comparing injected-vs-would-have-been-injected isolates the context's actual effect. Items that lift success get shown more; items that don't get shown less or thrown out. It's a bandit/RCT pattern applied to a live RAG system, and it's what lets them prune aggressively instead of accumulating plausible-but-useless context.

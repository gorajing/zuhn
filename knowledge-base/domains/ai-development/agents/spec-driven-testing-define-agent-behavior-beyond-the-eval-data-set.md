---
id: INS-260605-3A60
domain: ai-development
topic: agents
title: 'Spec-driven testing: define agent behavior beyond the eval data set'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - agent-testing
  - specification
  - integration-tests
sources:
  - type: youtube
    title: >-
      Spec-Driven Testing for Agents With A Brain the Size of A Planet — Steven
      Willmott, SafeIntelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UQKg0td-Bf4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Specify agent behavior with ground-truth examples plus rules, ontologies,
    internal terminology, domain knowledge, rights/roles, and robustness
    requirements — not just a test set.
  standard: >-
    In ML, you specify behavior with a data set and measure F1/accuracy.
    Willmott argues that for agents the eval data set is only one component of a
    fuller specification. A complete spec also includes: hard rules ('never give
    a discount over 10%', 'no refunds past 30 days'); ontologies and
    dictionaries (an airline bot only flies to certain destinations); internal
    terminology and policies no one outside the company knows; domain knowledge
    about which terms are validly substitutable (gross profit vs. gross sales
    are interchangeable to a generic LLM but distinct in finance); and
    rights/roles (behavior differs logged-in vs. logged-out).


    These elements are often implicit; the discipline is making them explicit.
    From an engineering lens these resemble integration tests rather than a flat
    benchmark. Crucially, a testing system can't validate substitutions or rule
    adherence unless you hand it this context — the spec is the input the tester
    needs, not just documentation for humans.
stance: >-
  An eval data set of good input/output pairs is insufficient to specify what an
  agent should do.
related:
  - INS-260514-F58B
  - INS-260605-3285
  - INS-260605-3B8B
  - INS-260405-F26B
  - INS-260410-E977
  - INS-260605-27CC
---
In ML, you specify behavior with a data set and measure F1/accuracy. Willmott argues that for agents the eval data set is only one component of a fuller specification. A complete spec also includes: hard rules ('never give a discount over 10%', 'no refunds past 30 days'); ontologies and dictionaries (an airline bot only flies to certain destinations); internal terminology and policies no one outside the company knows; domain knowledge about which terms are validly substitutable (gross profit vs. gross sales are interchangeable to a generic LLM but distinct in finance); and rights/roles (behavior differs logged-in vs. logged-out).

These elements are often implicit; the discipline is making them explicit. From an engineering lens these resemble integration tests rather than a flat benchmark. Crucially, a testing system can't validate substitutions or rule adherence unless you hand it this context — the spec is the input the tester needs, not just documentation for humans.

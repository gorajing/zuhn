---
id: INS-260625-D8C4
domain: ai-development
topic: agent-evals
title: Production text-to-SQL needs near-100% accuracy that benchmarks don't measure
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - text-to-sql
  - accuracy-gap
  - benchmarks
  - production-readiness
sources:
  - type: youtube
    title: Power intelligent agents with AI-native databases
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=7awKinJhGPo'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A top benchmark ranking was achieved using only schema ontologies, but
    reaching the near-100% accuracy production needs requires two further
    context layers — query blueprints and value searches — that no benchmark
    captures.
  standard: >-
    The presenters were unusually candid about the gap between a benchmark
    number and a production system. Their #1 ranking on the Bird text-to-SQL
    leaderboard used only one of their three context mechanisms — schema
    ontologies (descriptions of the schema). The other two, query blueprints
    (injecting bespoke interpretations of specific question fragments) and value
    searches (disambiguating the natural-language question against the actual
    data values in the database), are what they claim takes a system the rest of
    the way to near-100%. Production database agents need that accuracy ceiling
    because a confidently-wrong answer about money or operations is worse than
    no answer.


    The transferable lesson is an eval one: a high score on a public text-to-SQL
    benchmark certifies only the schema-comprehension layer, not the
    per-deployment context engineering that determines real accuracy. This
    mirrors a recurring Zuhn theme that benchmarks measure the model in
    isolation while production reliability is a property of the whole harness.
    When evaluating a natural-language-to-query capability, do not read the
    benchmark rank as the production accuracy you'll get; the last mile is
    grounding the model in your specific schema semantics, your domain's
    question idioms, and your actual data values — none of which a shared
    leaderboard exercises.
stance: >-
  Leaderboard text-to-SQL scores reflect only schema-level context; closing the
  demo-to-production accuracy gap requires layered context the benchmark never
  tests.
related:
  - PRI-260413-A957
  - INS-260514-3974
  - INS-260625-224F
  - INS-260327-33FA
  - INS-260625-99AE
---
The presenters were unusually candid about the gap between a benchmark number and a production system. Their #1 ranking on the Bird text-to-SQL leaderboard used only one of their three context mechanisms — schema ontologies (descriptions of the schema). The other two, query blueprints (injecting bespoke interpretations of specific question fragments) and value searches (disambiguating the natural-language question against the actual data values in the database), are what they claim takes a system the rest of the way to near-100%. Production database agents need that accuracy ceiling because a confidently-wrong answer about money or operations is worse than no answer.

The transferable lesson is an eval one: a high score on a public text-to-SQL benchmark certifies only the schema-comprehension layer, not the per-deployment context engineering that determines real accuracy. This mirrors a recurring Zuhn theme that benchmarks measure the model in isolation while production reliability is a property of the whole harness. When evaluating a natural-language-to-query capability, do not read the benchmark rank as the production accuracy you'll get; the last mile is grounding the model in your specific schema semantics, your domain's question idioms, and your actual data values — none of which a shared leaderboard exercises.

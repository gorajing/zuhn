---
id: INS-260625-7165
domain: ai-development
topic: agent-evals
title: >-
  Persona benchmarks structurally cannot detect their systems' dominant failure
  mode
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - benchmarks
  - persona
  - metric-validity
  - role-playing-agents
sources:
  - type: youtube
    title: >-
      The Miranda Hypothesis: How Hamilton Poisoned Persona Evals - Jacob E.
      Thomas, Results Gen
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IJXjTLPzvAU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Convincingness and fidelity are independent properties, so an eval that
    scores convincingness tells you nothing about whether the persona's
    reasoning is faithful to the record.
  standard: >-
    The field's gold-standard persona benchmarks evaluate whether a model
    reproduces a character's Big Five profile, register, and motivational
    architecture — and report state-of-the-art scores around 80.7% alignment
    with human-perceived personality. What they have no mechanism to measure is
    whether the model constrains that character to what he could have known,
    believed, or argued at a specific moment in his life. Because a system can
    score perfectly on personality consistency while reasoning from knowledge
    its historical counterpart never possessed, convincingness and fidelity are
    mathematically independent axes.


    This is the 'thermometer that returns a confident number but is measuring
    something else' problem: the benchmark reports a number it calls fidelity,
    but it is actually reading fluency. The practical consequence is that any
    team shipping character bots, companion AI, pedagogical agents, or
    historical simulations whose eval stack rewards 'sounds like the person' is
    blind to its most consequential failure. The fix is not a better fluency
    metric but a different axis entirely — one that scores reasoning against a
    documentary record, even at the cost of penalizing fluent-but-anachronistic
    outputs and crediting flat-but-faithful ones.
stance: >-
  If a system's dominant failure mode is anachronistic compositing while its
  evals measure fluency and personality consistency, those evals are
  constitutionally incapable of catching the failure.
related:
  - INS-260403-AC74
  - INS-260403-4363
  - INS-260409-5975
  - INS-260605-72C4
  - INS-260605-3119
  - INS-260403-22FE
  - PRI-260406-E602
---
The field's gold-standard persona benchmarks evaluate whether a model reproduces a character's Big Five profile, register, and motivational architecture — and report state-of-the-art scores around 80.7% alignment with human-perceived personality. What they have no mechanism to measure is whether the model constrains that character to what he could have known, believed, or argued at a specific moment in his life. Because a system can score perfectly on personality consistency while reasoning from knowledge its historical counterpart never possessed, convincingness and fidelity are mathematically independent axes.

This is the 'thermometer that returns a confident number but is measuring something else' problem: the benchmark reports a number it calls fidelity, but it is actually reading fluency. The practical consequence is that any team shipping character bots, companion AI, pedagogical agents, or historical simulations whose eval stack rewards 'sounds like the person' is blind to its most consequential failure. The fix is not a better fluency metric but a different axis entirely — one that scores reasoning against a documentary record, even at the cost of penalizing fluent-but-anachronistic outputs and crediting flat-but-faithful ones.

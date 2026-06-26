---
id: INS-260625-36DF
domain: ai-development
topic: architecture
title: >-
  Production AI evaluation needs a behavioral layer, not just format and
  semantic checks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - llm-as-judge
  - agents
  - observability
  - production-ai
sources:
  - type: youtube
    title: >-
      The Production AI Playbook: Deploying Agents at Enterprise Scale —
      Sandipan Bhaumik, Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ObTPqBGsEbA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Layer evaluation into deterministic (format/regex/classic-ML),
    non-deterministic semantic (LLM-as-judge), and behavioral (tool-call
    efficiency, loop detection) — the behavioral layer is the one most teams
    skip and it catches the costly bugs.
  standard: >-
    Bhaumik frames evaluation as the *specification* for an AI system and
    decomposes it into three architectural layers. The first is deterministic
    and cheap: regex format checks (email, phone), and classic ML for intent
    classification, named-entity recognition, and PII detection — the things
    engineering has done for years. The second is non-deterministic semantic
    evaluation: LLM-as-judge, where a separate model scores the primary model's
    output for groundedness, safety, and relevance, ideally against the golden
    dataset. These two are widely understood.


    The insight is the third layer — behavioral evaluation — which most teams
    omit. A response can pass both format and semantic checks (e.g. 'your
    account balance is $X' is correct and well-formed) while the agent silently
    made three duplicate database calls to produce it, retried failed calls, or
    got stuck in a loop. In a demo, three API calls are invisible; at thousands
    of production queries per day, that duplication is a real and growing cost.
    Behavioral evals audit *how* the agent arrived at the answer — whether it
    called the right tools, how many times, and whether it looped — which is
    invisible to output-only checks.


    The claim is directional and testable: it asserts that output-correctness
    evaluation is insufficient and that a distinct behavioral layer is required
    to surface efficiency and reliability defects. This depends on having
    tracing in place (every decision captured), which is why evaluation and
    observability are sibling pillars — the behavioral layer reads the traces.
    It is an architectural decision because the three layers have different cost
    profiles and tooling, and must be designed in deliberately rather than
    bolted on.
stance: >-
  An evaluation system that only checks output format and semantic correctness
  will miss expensive failure modes that only a behavioral layer auditing tool
  calls and loops can catch.
related:
  - INS-260409-5D67
  - INS-260410-F5EC
  - INS-260410-5D66
  - INS-260605-59AE
  - INS-260605-C1A4
  - INS-260605-A8A9
  - INS-260625-9C3B
  - INS-260625-C08B
  - INS-260522-2CE8
  - INS-260626-8DAD
---
Bhaumik frames evaluation as the *specification* for an AI system and decomposes it into three architectural layers. The first is deterministic and cheap: regex format checks (email, phone), and classic ML for intent classification, named-entity recognition, and PII detection — the things engineering has done for years. The second is non-deterministic semantic evaluation: LLM-as-judge, where a separate model scores the primary model's output for groundedness, safety, and relevance, ideally against the golden dataset. These two are widely understood.

The insight is the third layer — behavioral evaluation — which most teams omit. A response can pass both format and semantic checks (e.g. 'your account balance is $X' is correct and well-formed) while the agent silently made three duplicate database calls to produce it, retried failed calls, or got stuck in a loop. In a demo, three API calls are invisible; at thousands of production queries per day, that duplication is a real and growing cost. Behavioral evals audit *how* the agent arrived at the answer — whether it called the right tools, how many times, and whether it looped — which is invisible to output-only checks.

The claim is directional and testable: it asserts that output-correctness evaluation is insufficient and that a distinct behavioral layer is required to surface efficiency and reliability defects. This depends on having tracing in place (every decision captured), which is why evaluation and observability are sibling pillars — the behavioral layer reads the traces. It is an architectural decision because the three layers have different cost profiles and tooling, and must be designed in deliberately rather than bolted on.

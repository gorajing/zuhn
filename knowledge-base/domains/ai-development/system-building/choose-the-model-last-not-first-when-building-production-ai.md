---
id: INS-260625-00D5
domain: ai-development
topic: system-building
title: 'Choose the model last, not first, when building production AI'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - production-ai
  - evaluation
  - project-sequencing
  - model-selection
  - agents
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
    Defer model selection until you have an evaluation dataset to score
    candidates on, so the choice becomes a quick measurement instead of a
    weeks-long opinion war.
  standard: >-
    Bhaumik observed that nearly every failed AI project started with 'shall we
    use GPT or Claude?' — teams burned weeks debating models, built a demo on
    clean data, got leadership sign-off, then watched it collapse in production
    with no way to explain why. The inversion that worked across his client
    engagements: treat the model as the last variable, not the first. In the
    8-week retail-banking case study, weeks 1-2 built the evaluation layer (200
    real human-agent answers, quantified success metrics, an automated scoring
    pipeline), the middle weeks built the data foundation and tracing, and the
    model was only chosen in week 7.


    The payoff is that model selection stops being a matter of opinion and
    becomes a measurement: with a golden evaluation dataset in hand, you run
    each candidate model against it, compare outputs to expected answers, and
    read off an accuracy number. A decision that previously consumed weeks of
    debate collapses to a fast, evidence-based comparison. This sequencing also
    future-proofs the system against model churn — when providers ship upgrades,
    you re-run the same eval rather than re-litigating the choice.


    The directional claim is strong because it inverts the industry's default
    behavior and is backed by a concrete before/after: an $85K, 6-month POC that
    failed under the model-first approach versus an 8-week success under the
    model-last approach. The deeper principle is that the model is the cheapest,
    most swappable component; the expensive, durable assets are the evaluation
    harness and data foundation that let you judge any model.
stance: >-
  Model selection should be the final decision in a production AI project, made
  after evaluation and data foundations exist, not the opening debate.
related:
  - INS-260327-B605
  - INS-260403-63E6
  - INS-260409-A1D3
  - INS-260605-6C0C
  - INS-260619-AD94
  - INS-260625-D1F9
  - INS-260403-5F41
  - INS-260625-1187
---
Bhaumik observed that nearly every failed AI project started with 'shall we use GPT or Claude?' — teams burned weeks debating models, built a demo on clean data, got leadership sign-off, then watched it collapse in production with no way to explain why. The inversion that worked across his client engagements: treat the model as the last variable, not the first. In the 8-week retail-banking case study, weeks 1-2 built the evaluation layer (200 real human-agent answers, quantified success metrics, an automated scoring pipeline), the middle weeks built the data foundation and tracing, and the model was only chosen in week 7.

The payoff is that model selection stops being a matter of opinion and becomes a measurement: with a golden evaluation dataset in hand, you run each candidate model against it, compare outputs to expected answers, and read off an accuracy number. A decision that previously consumed weeks of debate collapses to a fast, evidence-based comparison. This sequencing also future-proofs the system against model churn — when providers ship upgrades, you re-run the same eval rather than re-litigating the choice.

The directional claim is strong because it inverts the industry's default behavior and is backed by a concrete before/after: an $85K, 6-month POC that failed under the model-first approach versus an 8-week success under the model-last approach. The deeper principle is that the model is the cheapest, most swappable component; the expensive, durable assets are the evaluation harness and data foundation that let you judge any model.

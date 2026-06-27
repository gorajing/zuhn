---
id: INS-260625-C08B
domain: ai-development
topic: llm-costs
title: Reach for cheap deterministic evals before expensive LLM-as-judge
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - cost
  - determinism
  - golden-datasets
sources:
  - type: youtube
    title: 'LLM Observability, Evaluation, Experimentation Platform — Dat Ngo, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JsCCrBF7F1g'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Not every eval needs an LLM call or a human — deterministic checks (valid
    JSON, schema, non-null fields) are nearly free, so use the cheapest signal
    that works.
  standard: >-
    Ngo breaks evaluation signal into roughly five flavors: LLM-as-judge, human
    feedback (end users, PMs, domain experts), golden datasets,
    deterministic/logic-based checks, and business metrics (make money, save
    money, save time). The key cost insight is that 'you don't always have to
    use an LLM call or even humans — determinism is super nice.' If an agent is
    supposed to emit JSON, you can deterministically check whether it is valid
    JSON, has the right schema, and has non-null required fields — at near-zero
    cost and zero latency, with no model in the loop.


    The corollary is a cost-ordered hierarchy of signal: deterministic checks
    are cheapest, LLM-as-judge is moderately expensive and scales with traffic,
    and human labeling is the most expensive but highest-trust. Golden datasets
    sit across this hierarchy as a calibration tool — you run an LLM-as-judge
    against a trusted human-labeled set so the judge learns to approximate the
    domain expert, getting human-quality signal at LLM-scale cost.


    The operating principle: pick the cheapest signal source that actually
    answers your question. Promote a judgment up the cost ladder (deterministic
    → LLM-judge → human) only when the cheaper mechanism genuinely cannot
    capture what you need. This keeps evaluation affordable enough to run
    continuously rather than as an occasional luxury.
stance: >-
  Default to deterministic and logic-based evals and reserve costly LLM-as-judge
  or human review for genuinely semantic judgments.
related:
  - INS-260625-36DF
  - INS-260625-8A55
  - INS-260626-60C2
  - INS-260625-9C3B
  - INS-260626-8DAD
---
Ngo breaks evaluation signal into roughly five flavors: LLM-as-judge, human feedback (end users, PMs, domain experts), golden datasets, deterministic/logic-based checks, and business metrics (make money, save money, save time). The key cost insight is that 'you don't always have to use an LLM call or even humans — determinism is super nice.' If an agent is supposed to emit JSON, you can deterministically check whether it is valid JSON, has the right schema, and has non-null required fields — at near-zero cost and zero latency, with no model in the loop.

The corollary is a cost-ordered hierarchy of signal: deterministic checks are cheapest, LLM-as-judge is moderately expensive and scales with traffic, and human labeling is the most expensive but highest-trust. Golden datasets sit across this hierarchy as a calibration tool — you run an LLM-as-judge against a trusted human-labeled set so the judge learns to approximate the domain expert, getting human-quality signal at LLM-scale cost.

The operating principle: pick the cheapest signal source that actually answers your question. Promote a judgment up the cost ladder (deterministic → LLM-judge → human) only when the cheaper mechanism genuinely cannot capture what you need. This keeps evaluation affordable enough to run continuously rather than as an occasional luxury.

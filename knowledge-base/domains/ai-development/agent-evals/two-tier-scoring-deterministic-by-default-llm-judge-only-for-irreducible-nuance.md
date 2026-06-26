---
id: INS-260626-8DAD
domain: ai-development
topic: agent-evals
title: >-
  Two-tier scoring: deterministic by default, LLM-judge only for irreducible
  nuance
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - llm-as-judge
  - scoring
  - cost-management
  - sampling
sources:
  - type: youtube
    title: Shipping complex AI applications — Braintrust & Trainline
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZdheJTfLu-s'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you can write it as a deterministic check, do; only fall back to
    LLM-as-judge for nuance like tone or brand fit—and sample its use to control
    cost.
  standard: >-
    The workshop draws a sharp line between two scoring types. Deterministic
    scores (schema validity, category present, escalation reason exists when
    needed) are analogous to unit tests: cheap, fast, no model call, so run them
    on 100% of traffic continuously. LLM-as-judge scores are reserved for what
    can't be captured deterministically—branding style, tone of voice,
    customer-satisfaction nuance. The governing rule: 'if you cannot write it in
    a deterministic way, you want to be using LLM-as-judge.'


    Because LLM-judge calls cost real money and reasoning compute, sampling
    economics matter. On a new system you start with a high sampling rate to
    establish a baseline, then once you trust the output you drop the LLM-judge
    sampling rate to roughly 5–10% to manage cost—while keeping deterministic
    scores running everywhere all the time. This tiering is how you get
    meaningful online quality signal on production logs without an unbounded
    inference bill.
stance: >-
  Reserve expensive LLM-as-judge scoring strictly for quality dimensions that
  cannot be checked deterministically, and run the cheap deterministic checks
  all the time.
related:
  - INS-260605-C009
  - INS-260605-0C24
  - INS-260625-36DF
  - INS-260625-C08B
  - INS-260605-EC51
  - INS-260625-9C3B
---
The workshop draws a sharp line between two scoring types. Deterministic scores (schema validity, category present, escalation reason exists when needed) are analogous to unit tests: cheap, fast, no model call, so run them on 100% of traffic continuously. LLM-as-judge scores are reserved for what can't be captured deterministically—branding style, tone of voice, customer-satisfaction nuance. The governing rule: 'if you cannot write it in a deterministic way, you want to be using LLM-as-judge.'

Because LLM-judge calls cost real money and reasoning compute, sampling economics matter. On a new system you start with a high sampling rate to establish a baseline, then once you trust the output you drop the LLM-judge sampling rate to roughly 5–10% to manage cost—while keeping deterministic scores running everywhere all the time. This tiering is how you get meaningful online quality signal on production logs without an unbounded inference bill.

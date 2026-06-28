---
id: INS-260626-CE12
domain: ai-development
topic: llm-behavior
title: >-
  The biggest LLM pitfall: you can't see how much training data backs any given
  answer
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-behavior
  - out-of-distribution
  - calibration
  - retrieval
  - context-engineering
sources:
  - type: youtube
    title: The Most AI-Pilled CEO We Know
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=mPAHvz8kW24'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You have no sense of how much training data a model has seen for the exact
    thing you're asking — so out-of-distribution answers arrive as confidently
    as well-grounded ones, and your job is to detect and fill those gaps.
  standard: >-
    Franceschi frames the central LLM pitfall as a hidden distribution problem:
    'imagine if every time you asked an LLM a question it gave you the sampling
    frequency of this in my dataset.' One answer might be backed by frequency X
    and another by 0.00001X, and you'd trust them completely differently — but
    the model surfaces neither, so confidence is decoupled from how much
    evidence the model actually saw. He notes the models are also more biased
    than we credit, because their builders' defaults leak in (his example: an
    accounting-categorization model that reaches for 'AI capex' as its first
    example, because that's what the model-builders think about).


    The actionable counter is to deliberately fill out-of-distribution regions
    with your own retrieval. He describes building 'GBrain' — a personal
    retrieval system with 350,000 markdown pages — and using deep research to
    read 'every single paper and article' on a niche topic, commit it to a git
    repo, and retrieve it later, effectively packing the model with the context
    it lacked. The same move scales to anything: ingest the top 500 books on
    running a restaurant and you hold the compendium the base model never
    reliably memorized.


    This is also the durable business of data-labeling companies like Mercor —
    finding LLM blind spots — but it carries a 'curse of not knowing the bounds
    of knowledge': to know what the model is missing you must be an expert, yet
    a founder searching for an idea often isn't, which can make you believe you
    understand something the model doesn't actually understand either.
stance: >-
  LLMs answer out-of-distribution questions with the same confidence as
  well-represented ones, so the durable skill is identifying which topics the
  model barely saw and back-filling them with your own curated context.
related:
  - INS-260330-0FCC
  - INS-260410-4E62
  - INS-260505-5510
  - INS-260505-CBE5
  - INS-260605-8F5E
  - INS-260605-9CE2
  - INS-260625-0D5D
  - INS-260625-D790
  - INS-260627-040E
  - INS-260627-92C0
---
Franceschi frames the central LLM pitfall as a hidden distribution problem: 'imagine if every time you asked an LLM a question it gave you the sampling frequency of this in my dataset.' One answer might be backed by frequency X and another by 0.00001X, and you'd trust them completely differently — but the model surfaces neither, so confidence is decoupled from how much evidence the model actually saw. He notes the models are also more biased than we credit, because their builders' defaults leak in (his example: an accounting-categorization model that reaches for 'AI capex' as its first example, because that's what the model-builders think about).

The actionable counter is to deliberately fill out-of-distribution regions with your own retrieval. He describes building 'GBrain' — a personal retrieval system with 350,000 markdown pages — and using deep research to read 'every single paper and article' on a niche topic, commit it to a git repo, and retrieve it later, effectively packing the model with the context it lacked. The same move scales to anything: ingest the top 500 books on running a restaurant and you hold the compendium the base model never reliably memorized.

This is also the durable business of data-labeling companies like Mercor — finding LLM blind spots — but it carries a 'curse of not knowing the bounds of knowledge': to know what the model is missing you must be an expert, yet a founder searching for an idea often isn't, which can make you believe you understand something the model doesn't actually understand either.

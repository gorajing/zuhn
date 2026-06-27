---
id: INS-260605-80B6
domain: ai-development
topic: system-building
title: >-
  Generative AI inverts the data science pipeline: the model ships pre-built, so
  value moves to inputs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - foundation-models
  - ml-pipeline
  - agents
  - data-science
sources:
  - type: youtube
    title: 'Does GenAI "belong" to data scientists? — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NKwIX3CiRgU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic/OpenAI already did the data-pipeline-train-deploy work, so your
    lever is the inputs you feed the model, not feature engineering or
    retraining.
  standard: >-
    Traditional ML adds value by adding training data, engineering features, and
    A/B testing model changes — a pipeline that ends in a deployed model.
    Generative AI collapses that pipeline: the labs have already trained and
    deployed the LLM behind an endpoint. The one part teams still own is
    evaluating the model's behavior inside their own product. Because
    fine-tuning is rare, the way to change application behavior is to change the
    inputs — prompts and context. This reframes 'improving the agent' from a
    data/feature-engineering task into a context-engineering task, which opens
    the work to people who understand the problem domain rather than only those
    who understand model internals.
stance: >-
  With foundation models already trained, the leverage in building agents is
  changing inputs (prompts, context) rather than training data or feature
  engineering.
related:
  - INS-260625-3EE6
  - INS-260403-7A48
  - INS-260627-C258
  - INS-260603-DFA6
  - INS-260625-3768
---
Traditional ML adds value by adding training data, engineering features, and A/B testing model changes — a pipeline that ends in a deployed model. Generative AI collapses that pipeline: the labs have already trained and deployed the LLM behind an endpoint. The one part teams still own is evaluating the model's behavior inside their own product. Because fine-tuning is rare, the way to change application behavior is to change the inputs — prompts and context. This reframes 'improving the agent' from a data/feature-engineering task into a context-engineering task, which opens the work to people who understand the problem domain rather than only those who understand model internals.

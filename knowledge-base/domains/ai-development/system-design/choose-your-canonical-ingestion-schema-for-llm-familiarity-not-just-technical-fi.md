---
id: INS-260628-789C
domain: ai-development
topic: system-design
title: >-
  Choose your canonical ingestion schema for LLM familiarity, not just technical
  fit
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - schema-design
  - data-modeling
  - knowledge-graph
  - etl
  - llm-grounding
  - standards
sources:
  - type: youtube
    title: >-
      Multi Agent AI and Network Knowledge Graphs for Change — Ola Mabadeje,
      Cisco
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m0dxZ-NDKHo'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cisco normalized heterogeneous network data (YANG, JSON, streaming
    telemetry) into OpenConfig specifically because it is heavily documented
    online, so LLMs already understand it well.
  standard: >-
    When you build an ETL pipeline to consolidate messy, multi-vendor data into
    a single canonical schema, the usual selection criteria are technical:
    expressiveness, relationship modeling, performance. Cisco added a criterion
    most teams overlook — how well an LLM already reasons over the schema. They
    chose OpenConfig as their single normalized schema explicitly because
    'there's a lot of documentation about it on the internet, so the LLM
    understands this very well.'


    This reframes schema choice as a grounding decision. A schema saturated in
    public documentation is one the model has seen thousands of times in
    pretraining, so it generates valid queries, interprets fields correctly, and
    hallucinates less — for free, with no fine-tuning. A bespoke or
    obscure-but-technically-superior schema forces you to teach the model
    everything from scratch via context or fine-tuning. When two schemas are
    roughly comparable on technical merits, the one with denser public
    documentation is the better LLM-facing choice. Concretely: prefer open
    standards over proprietary formats, and well-known formats over niche ones,
    when an LLM sits in the loop.
stance: >-
  Picking a data schema that LLMs already understand from public documentation
  matters as much as its technical suitability.
related:
  - INS-260403-EF2C
  - INS-260625-D148
  - INS-260404-8A8A
  - INS-260605-48CA
  - PRI-260328-7007
---
When you build an ETL pipeline to consolidate messy, multi-vendor data into a single canonical schema, the usual selection criteria are technical: expressiveness, relationship modeling, performance. Cisco added a criterion most teams overlook — how well an LLM already reasons over the schema. They chose OpenConfig as their single normalized schema explicitly because 'there's a lot of documentation about it on the internet, so the LLM understands this very well.'

This reframes schema choice as a grounding decision. A schema saturated in public documentation is one the model has seen thousands of times in pretraining, so it generates valid queries, interprets fields correctly, and hallucinates less — for free, with no fine-tuning. A bespoke or obscure-but-technically-superior schema forces you to teach the model everything from scratch via context or fine-tuning. When two schemas are roughly comparable on technical merits, the one with denser public documentation is the better LLM-facing choice. Concretely: prefer open standards over proprietary formats, and well-known formats over niche ones, when an LLM sits in the loop.

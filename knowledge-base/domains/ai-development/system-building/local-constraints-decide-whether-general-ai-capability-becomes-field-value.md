---
id: INS-260626-45E4
domain: ai-development
topic: system-building
title: Local constraints decide whether general AI capability becomes field value
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - domain-specificity
  - system-design
  - clinical-ai
  - deployment
sources:
  - type: blog
    title: >-
      AI support tool improved clinician decisions in real-world primary care
      trial
    url: 'https://www.eurekalert.org/news-releases/1133583'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI Consult's value came from constraining an LLM inside Kenyan clinical
    guidelines, EMR context, and clinician accountability rather than exposing a
    generic chatbot.
  standard: >-
    The AI capability doing the work was an LLM that could synthesize clinical
    notes into diagnostic and treatment suggestions. But the field value came
    from surrounding constraints: Kenyan national clinical guidelines, EMR
    integration, color-coded concern levels, clinician autonomy, and a
    randomized evaluation frame.


    This generalizes to agent building. The model is rarely the product in a
    serious domain; the product is the constrained loop that turns model
    suggestions into accountable, measurable action. Field bottlenecks are
    usually at the interface between model output and institutional workflow,
    not at the language model alone.
stance: >-
  General LLM capability becomes valuable in a domain only after it is
  constrained by local guidelines, workflow surfaces, accountability boundaries,
  and measurement design.
related:
  - INS-260409-8C6C
  - INS-260410-A365
  - INS-260423-D900
  - INS-260519-7744
  - INS-260325-175B
---
The AI capability doing the work was an LLM that could synthesize clinical notes into diagnostic and treatment suggestions. But the field value came from surrounding constraints: Kenyan national clinical guidelines, EMR integration, color-coded concern levels, clinician autonomy, and a randomized evaluation frame.

This generalizes to agent building. The model is rarely the product in a serious domain; the product is the constrained loop that turns model suggestions into accountable, measurable action. Field bottlenecks are usually at the interface between model output and institutional workflow, not at the language model alone.

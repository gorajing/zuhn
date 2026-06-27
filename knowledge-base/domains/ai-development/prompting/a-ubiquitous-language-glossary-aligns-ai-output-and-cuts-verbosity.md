---
id: INS-260626-0704
domain: ai-development
topic: prompting
title: A ubiquitous-language glossary aligns AI output and cuts verbosity
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ubiquitous-language
  - domain-driven-design
  - shared-vocabulary
  - context-engineering
  - verbosity
sources:
  - type: youtube
    title: '"Software Fundamentals Matter More Than Ever" — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v4F1gFy-hqg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A domain-driven-design ubiquitous-language file — a markdown glossary of
    terms you and the AI agree on — closes the language gap that makes AI
    verbose and misaligned.
  standard: >-
    A second failure mode is the AI being too verbose, as if you're talking at
    cross-purposes using different languages. Pocock maps this onto the classic
    developer/domain-expert language gap and reaches for domain-driven design's
    ubiquitous language: a single domain model from which code, developer
    conversations, and expert conversations are all derived. Concretely it's a
    markdown file of agreed terms, kept aligned with what they actually mean and
    used consistently in code, in discussion, and when talking to the AI. His
    ubiquitous-language skill scans the codebase, extracts terminology, and
    generates the glossary tables; he keeps it open while planning. Reading the
    AI's thinking traces, he found it not only improved planning but let the AI
    think less verbosely and produce implementations more aligned with the plan
    — establishing shared vocabulary is a concrete, reusable lever for AI
    alignment.
stance: >-
  Maintaining a shared domain glossary with the AI makes its reasoning less
  verbose and its implementation more aligned with the plan.
related:
  - INS-260321-0C99
  - INS-260514-4436
  - INS-260605-C223
  - INS-260603-A506
  - INS-260327-2C5F
---
A second failure mode is the AI being too verbose, as if you're talking at cross-purposes using different languages. Pocock maps this onto the classic developer/domain-expert language gap and reaches for domain-driven design's ubiquitous language: a single domain model from which code, developer conversations, and expert conversations are all derived. Concretely it's a markdown file of agreed terms, kept aligned with what they actually mean and used consistently in code, in discussion, and when talking to the AI. His ubiquitous-language skill scans the codebase, extracts terminology, and generates the glossary tables; he keeps it open while planning. Reading the AI's thinking traces, he found it not only improved planning but let the AI think less verbosely and produce implementations more aligned with the plan — establishing shared vocabulary is a concrete, reusable lever for AI alignment.

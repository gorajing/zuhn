---
id: INS-260627-040E
domain: ai-development
topic: agent-patterns
title: >-
  Make agent tasks in-distribution by translating data into formats the model
  already knows
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - context-engineering
  - in-distribution
  - sql
  - interface-design
  - data
sources:
  - type: youtube
    title: 'Claude Agent SDK [Full Workshop] — Thariq Shihipar, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TqC1qOfiVcQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Transform your data into something the model knows cold — SQL, XML,
    spreadsheet-range syntax — so an out-of-distribution problem becomes
    in-distribution and the agent's pretrained knowledge does the work.
  standard: >-
    When designing how an agent gathers context and takes action, the
    highest-leverage move is to translate a domain-specific or proprietary data
    source into an interface the model has seen massively during training. The
    workshop's worked example: to search a spreadsheet, you can query a CSV
    directly through SQLite — because the agent knows SQL extremely well, far
    better than any custom search API you would invent. The same logic extends
    to representing xlsx files as XML (which they natively are) for structured
    XML queries, or using spreadsheet range syntax like B3:B5 that the model
    recognizes. Your real problem is almost always out-of-distribution in some
    way (unique data not on the internet); the engineering job is to massage it
    to be as in-distribution as possible.


    This reframes context-gathering as a creative, iterative search-interface
    design problem rather than a solved one. A single attempt is rarely enough —
    try grep, awk, SQL, XML, and metadata-annotation preprocessing across a few
    fixed test queries, then read the transcripts to see which interface the
    agent actually uses well and which it stumbles on. Preprocessing steps
    (translating to a queryable format, or having a sub-agent annotate the data
    first) can dramatically improve retrieval. The skill is closer to an art
    than a science: you are matching the interface to the model's existing
    competence, not forcing the model to learn your schema.
stance: >-
  Converting unfamiliar data into model-native interfaces like SQL or XML makes
  an agent far more reliable than inventing a bespoke query scheme.
related:
  - INS-260605-7125
  - INS-260626-CE12
  - INS-260626-B833
  - INS-260603-6FE3
  - INS-260625-3768
  - INS-260627-EEDE
---
When designing how an agent gathers context and takes action, the highest-leverage move is to translate a domain-specific or proprietary data source into an interface the model has seen massively during training. The workshop's worked example: to search a spreadsheet, you can query a CSV directly through SQLite — because the agent knows SQL extremely well, far better than any custom search API you would invent. The same logic extends to representing xlsx files as XML (which they natively are) for structured XML queries, or using spreadsheet range syntax like B3:B5 that the model recognizes. Your real problem is almost always out-of-distribution in some way (unique data not on the internet); the engineering job is to massage it to be as in-distribution as possible.

This reframes context-gathering as a creative, iterative search-interface design problem rather than a solved one. A single attempt is rarely enough — try grep, awk, SQL, XML, and metadata-annotation preprocessing across a few fixed test queries, then read the transcripts to see which interface the agent actually uses well and which it stumbles on. Preprocessing steps (translating to a queryable format, or having a sub-agent annotate the data first) can dramatically improve retrieval. The skill is closer to an art than a science: you are matching the interface to the model's existing competence, not forcing the model to learn your schema.

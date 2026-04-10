---
id: INS-260410-3F1A
domain: ai-development
topic: llm-costs
title: Prompt caching makes per-chunk LLM preprocessing economically viable
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - prompt-caching
  - llm-costs
  - preprocessing
  - rag
sources:
  - type: blog
    title: Contextual Retrieval in AI Systems
    url: 'https://www.anthropic.com/engineering/contextual-retrieval'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Loading a document once into the prompt cache and referencing it across many
    chunk-context calls drops the cost of LLM-generated chunk annotations to
    roughly $1 per million document tokens.
  standard: >-
    Contextual Retrieval would normally be absurd — you'd be re-sending the
    entire parent document with every chunk you annotate. Prompt caching
    collapses that cost: load the document once, then reference it across
    hundreds of chunk calls. Anthropic reports $1.02 per million document tokens
    for the full annotation pass under typical assumptions.


    The broader implication is architectural. Prompt caching unlocks a category
    of 'use the LLM as a preprocessor' patterns that previously failed the
    unit-economics test. Anywhere you have a long parent context and many small
    derived calls — chunk annotation, per-row enrichment, per-frame description
    — caching changes what's worth building.
stance: >-
  Prompt caching transforms preprocessing patterns that would be prohibitively
  expensive at scale into routine, sub-dollar-per-million-token operations.
related:
  - INS-260320-CE36
  - INS-260409-B15B
  - INS-260410-B8EB
  - INS-260410-2F8D
  - INS-260410-4D86
  - INS-260410-264E
  - INS-260409-C158
  - INS-260410-C022
---
Contextual Retrieval would normally be absurd — you'd be re-sending the entire parent document with every chunk you annotate. Prompt caching collapses that cost: load the document once, then reference it across hundreds of chunk calls. Anthropic reports $1.02 per million document tokens for the full annotation pass under typical assumptions.

The broader implication is architectural. Prompt caching unlocks a category of 'use the LLM as a preprocessor' patterns that previously failed the unit-economics test. Anywhere you have a long parent context and many small derived calls — chunk annotation, per-row enrichment, per-frame description — caching changes what's worth building.

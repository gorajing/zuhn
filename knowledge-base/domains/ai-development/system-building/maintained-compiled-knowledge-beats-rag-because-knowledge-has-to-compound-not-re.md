---
id: INS-260409-BA55
domain: ai-development
topic: system-building
title: >-
  Maintained compiled knowledge beats RAG because knowledge has to compound, not
  re-synthesize
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - knowledge-compounding
  - llm-wiki
  - retrieval
  - karpathy
sources:
  - type: youtube
    title: 'Karpathy''s LLM Wiki: What It Means & How to Build One'
    author: Onchain AI Garage
    url: 'https://youtu.be/zVEb19AwkqM'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RAG rediscovers connections on every query; a maintained wiki preserves them
    so knowledge compounds.
  standard: >-
    Standard RAG pipelines retrieve chunks and synthesize at query time, which
    means each question reconstructs context from fragments. If a subtle
    question requires synthesizing five different documents, the LLM has to find
    and connect those pieces every single time — there is no memory, no
    cross-references, no accumulated understanding. The LLM-wiki pattern flips
    this: the LLM builds a persistent interlinked structure up front so
    cross-references already exist, contradictions are already flagged, and
    syntheses already reflect everything ingested. The valuable artifact is the
    maintained compiled knowledge, not the retrieval mechanism on top of it.
    This is why Zuhn's 5-level compression hierarchy exists — retrieval is cheap
    and commoditized; curated synthesis is the moat.
stance: >-
  RAG loses to maintained LLM-wikis because nothing accumulates between queries
  — each question rediscovers connections from scratch instead of benefiting
  from prior synthesis work.
related:
  - INS-260329-2612
  - INS-260405-16AB
  - INS-260409-95C8
  - INS-260409-654B
  - INS-260409-212F
  - INS-260409-5CF4
  - INS-260409-003A
  - INS-260320-E6DD
  - INS-260409-2D5C
---
Standard RAG pipelines retrieve chunks and synthesize at query time, which means each question reconstructs context from fragments. If a subtle question requires synthesizing five different documents, the LLM has to find and connect those pieces every single time — there is no memory, no cross-references, no accumulated understanding. The LLM-wiki pattern flips this: the LLM builds a persistent interlinked structure up front so cross-references already exist, contradictions are already flagged, and syntheses already reflect everything ingested. The valuable artifact is the maintained compiled knowledge, not the retrieval mechanism on top of it. This is why Zuhn's 5-level compression hierarchy exists — retrieval is cheap and commoditized; curated synthesis is the moat.

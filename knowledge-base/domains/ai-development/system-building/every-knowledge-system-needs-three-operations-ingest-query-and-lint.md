---
id: INS-260409-5065
domain: ai-development
topic: system-building
title: 'Every knowledge system needs three operations: ingest, query, and lint'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - operations
  - ingest
  - query
  - lint
  - maintenance
  - contradiction-detection
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
    Ingest adds new material; query probes and adds explorations; lint finds
    contradictions, orphans, and gaps.
  standard: >-
    Three core operations define a healthy LLM-wiki: (1) ingest — drop a source
    into the raw folder, LLM reads it, extracts concepts and claims, writes a
    summary page, updates ten to fifteen existing entity and concept pages,
    flags contradictions, updates the index, appends to the log; (2) query — ask
    questions against the wiki, LLM reads relevant pages and synthesizes
    answers, and good answers get filed back as new wiki pages so explorations
    compound the same way ingested sources do; (3) lint — the maintenance pass,
    where the LLM health-checks for contradictions, stale claims, orphan pages
    with no incoming links, missing cross-references, and gaps that could be
    filled by web search. Running only one of these produces a broken system:
    ingest-only drifts, query-only never grows, lint-only has nothing to clean.
    This maps almost exactly onto Zuhn's ingest/search/learn pipeline.
stance: >-
  An LLM-wiki stops compounding unless all three operations — ingest, query, and
  lint — run regularly, because ingest alone produces drift, query alone
  produces stagnation, and lint alone has nothing to maintain.
related:
  - PRI-260409-0156
  - INS-260410-C045
  - INS-260323-8D12
  - INS-260402-89DE
  - INS-260321-9824
---
Three core operations define a healthy LLM-wiki: (1) ingest — drop a source into the raw folder, LLM reads it, extracts concepts and claims, writes a summary page, updates ten to fifteen existing entity and concept pages, flags contradictions, updates the index, appends to the log; (2) query — ask questions against the wiki, LLM reads relevant pages and synthesizes answers, and good answers get filed back as new wiki pages so explorations compound the same way ingested sources do; (3) lint — the maintenance pass, where the LLM health-checks for contradictions, stale claims, orphan pages with no incoming links, missing cross-references, and gaps that could be filled by web search. Running only one of these produces a broken system: ingest-only drifts, query-only never grows, lint-only has nothing to clean. This maps almost exactly onto Zuhn's ingest/search/learn pipeline.

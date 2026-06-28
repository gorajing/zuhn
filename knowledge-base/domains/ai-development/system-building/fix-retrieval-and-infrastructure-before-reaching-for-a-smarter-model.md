---
id: INS-260628-930A
domain: ai-development
topic: system-building
title: Fix retrieval and infrastructure before reaching for a smarter model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - infrastructure
  - tool-design
  - metadata-filters
  - agent-architecture
  - bottleneck
sources:
  - type: youtube
    title: How to look at your data — Jeff Huber (Chroma) + Jason Liu (567)
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jryZvCuA0Uc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You earn the right to tinker with the LLM by having good retrieval first,
    because LLMs keep improving on their own but a better model won't fix bad
    retrieval — and most fixes are infrastructure (a missing time filter, one
    more OCR step), not intelligence.
  standard: >-
    Both speakers converge on the same prioritization: retrieval is the only
    thing an LLM improvement won't fix. Foundation models get better over time
    for free, so you 'earn the right' to tune prompts and models only after
    retrieval is solid. Measure inputs first, focus on retrieval, and build
    evals on your own data rather than public benchmarks.


    Liu reinforces this on the output side: 'oftentimes the solution isn't
    really making the AI better, it's really just providing the right
    infrastructure.' Concrete examples — if many queries need time filters and
    you never added one, adding it can lift your eval substantially; if you need
    to know whether contracts were signed, extracting one more field in the OCR
    step unlocks large-scale filtering. The goal is a portfolio of tools,
    metadata filters, and data sources that lets the agent do its job.


    The practical heuristic: when an agent underperforms, first ask what data,
    filter, or tool is missing before assuming you need a more capable model.
    Pair this with segmented KPI analysis so the infrastructure you build is
    impact-weighted toward where users actually are and you are actually weak.
stance: >-
  The biggest agent quality gains come from fixing retrieval and adding the
  right tools, filters, and data sources — not from a smarter LLM, which won't
  compensate for bad retrieval.
related:
  - INS-260327-FFA7
  - INS-260404-2365
  - INS-260404-A246
  - INS-260409-FA5E
  - INS-260530-E6AA
  - INS-260625-99AE
  - INS-260625-1022
  - INS-260625-5EEE
  - INS-260625-355D
  - INS-260625-4248
---
Both speakers converge on the same prioritization: retrieval is the only thing an LLM improvement won't fix. Foundation models get better over time for free, so you 'earn the right' to tune prompts and models only after retrieval is solid. Measure inputs first, focus on retrieval, and build evals on your own data rather than public benchmarks.

Liu reinforces this on the output side: 'oftentimes the solution isn't really making the AI better, it's really just providing the right infrastructure.' Concrete examples — if many queries need time filters and you never added one, adding it can lift your eval substantially; if you need to know whether contracts were signed, extracting one more field in the OCR step unlocks large-scale filtering. The goal is a portfolio of tools, metadata filters, and data sources that lets the agent do its job.

The practical heuristic: when an agent underperforms, first ask what data, filter, or tool is missing before assuming you need a more capable model. Pair this with segmented KPI analysis so the infrastructure you build is impact-weighted toward where users actually are and you are actually weak.

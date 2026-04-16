---
id: INS-260409-5C6B
domain: ai-development
topic: agent-patterns
title: >-
  Linting a knowledge base finds contradictions, orphans, and gaps that the LLM
  can suggest filling
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - lint
  - health-check
  - contradiction-detection
  - orphan-detection
  - gap-detection
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
    LLMs reliably catch contradictions, orphans, and gaps in a wiki because the
    work is global reading — tedious for humans, cheap for LLMs.
  standard: >-
    The lint operation is the maintenance pass where the LLM reads across the
    full wiki looking for contradictions between claims, stale claims that newer
    sources invalidated, orphan pages with no incoming or outgoing
    cross-references, missing cross-references between clearly related pages,
    and gaps where a web search could fill a missing concept. The LLM is also
    good at proposing new questions to investigate based on what's thin in the
    current coverage. This is the operation humans hate most in manual wiki
    maintenance — global consistency checking that requires holding the entire
    structure in mind — and the one LLMs do most reliably, because it reduces to
    parallel reads followed by pairwise consistency judgments, both of which are
    well-matched to how LLMs actually work.
stance: >-
  LLMs are uniquely good at the maintenance pass on a knowledge base — spotting
  contradictions, orphan pages, and gaps — because this work requires global
  reading that humans find tedious and LLMs do cheaply.
related:
  - INS-260325-24D1
  - INS-260409-212F
  - INS-260409-0EEE
  - INS-260409-2D5C
  - INS-260409-654B
  - INS-260409-EA5A
  - PRI-260409-9D7B
---
The lint operation is the maintenance pass where the LLM reads across the full wiki looking for contradictions between claims, stale claims that newer sources invalidated, orphan pages with no incoming or outgoing cross-references, missing cross-references between clearly related pages, and gaps where a web search could fill a missing concept. The LLM is also good at proposing new questions to investigate based on what's thin in the current coverage. This is the operation humans hate most in manual wiki maintenance — global consistency checking that requires holding the entire structure in mind — and the one LLMs do most reliably, because it reduces to parallel reads followed by pairwise consistency judgments, both of which are well-matched to how LLMs actually work.

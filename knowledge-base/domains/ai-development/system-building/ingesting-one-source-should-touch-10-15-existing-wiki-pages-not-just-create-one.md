---
id: INS-260409-D5BD
domain: ai-development
topic: system-building
title: >-
  Ingesting one source should touch 10-15 existing wiki pages, not just create
  one new page
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ingest-pipeline
  - cross-linking
  - compounding
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
    A single ingested source should ripple through 10-15 existing pages; if it
    only creates one new page, the system isn't compounding.
  standard: >-
    The ingest operation has seven steps: read the raw source, extract concepts
    and entities and claims and data points, write a summary page with metadata
    and tags, update all existing entity and concept pages with the new
    information, flag any contradictions where new data conflicts with existing
    claims, update the master index, and append a timestamped entry to the log.
    A single source typically touches ten to fifteen existing pages. This is the
    compounding effect in action — each drop makes the entire wiki slightly
    smarter because it rewrites related structure, not just appends. Systems
    that only create new files on ingest (no cross-updates, no contradiction
    flagging) are just append-only logs, not knowledge bases.
stance: >-
  An ingest pipeline that only writes a new summary without updating existing
  pages fails the compounding test, because the real value is in cross-linking
  new claims into existing structure.
related:
  - INS-260403-410A
  - PRI-260409-0156
  - INS-260409-086A
  - PRI-260406-7D93
  - INS-260405-A103
  - PRI-260328-4FA6
---
The ingest operation has seven steps: read the raw source, extract concepts and entities and claims and data points, write a summary page with metadata and tags, update all existing entity and concept pages with the new information, flag any contradictions where new data conflicts with existing claims, update the master index, and append a timestamped entry to the log. A single source typically touches ten to fifteen existing pages. This is the compounding effect in action — each drop makes the entire wiki slightly smarter because it rewrites related structure, not just appends. Systems that only create new files on ingest (no cross-updates, no contradiction flagging) are just append-only logs, not knowledge bases.

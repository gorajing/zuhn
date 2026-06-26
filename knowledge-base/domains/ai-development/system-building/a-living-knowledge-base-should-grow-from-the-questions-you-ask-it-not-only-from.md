---
id: INS-260626-BE0D
domain: ai-development
topic: system-building
title: >-
  A living knowledge base should grow from the questions you ask it, not only
  from ingestion
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - knowledge-management
  - agent-memory
  - compounding-knowledge
  - self-improving-systems
  - wiki
sources:
  - type: youtube
    title: >-
      Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François
      Bouchard, Towards AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZRM_TfEZcIo'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Make every query leave a trace — a new concept, note, or comparison file —
    so the knowledge base evolves as you talk to it, not just when you ingest
    data.
  standard: >-
    In their V3 system 'the wiki is actually alive — every question leaves a
    trace.' For each query the LLM can create a new concept file, note file, or
    comparison file, and every question is recorded in a log. So 'the wiki
    doesn't evolve only when you ingest new data or do a deep research round; it
    actually evolves as you start talking with it.' Over time this yields 'a
    true reflection of yourself — of what you haven't understood, of all your
    questions from the past.'


    The design principle: treat interaction itself as an ingestion event. Most
    knowledge systems only grow when you explicitly add documents; here, usage
    is the primary growth mechanism, so the base compounds toward exactly the
    topics the user actually asks about. The same source can also be re-ingested
    or re-researched at any point, so the store is never frozen — it accretes
    both from new sources and from the act of querying.
stance: >-
  An agent-backed knowledge base should write a new artifact for every query so
  it compounds through use, not just through ingestion events.
related:
  - INS-260320-E6DD
  - INS-260320-47FA
  - INS-260409-95C8
  - INS-260409-5065
  - INS-260409-BA55
  - INS-260409-B3DC
  - INS-260514-00D3
  - INS-260605-C0BF
  - INS-260605-2ECD
  - INS-260625-355D
---
In their V3 system 'the wiki is actually alive — every question leaves a trace.' For each query the LLM can create a new concept file, note file, or comparison file, and every question is recorded in a log. So 'the wiki doesn't evolve only when you ingest new data or do a deep research round; it actually evolves as you start talking with it.' Over time this yields 'a true reflection of yourself — of what you haven't understood, of all your questions from the past.'

The design principle: treat interaction itself as an ingestion event. Most knowledge systems only grow when you explicitly add documents; here, usage is the primary growth mechanism, so the base compounds toward exactly the topics the user actually asks about. The same source can also be re-ingested or re-researched at any point, so the store is never frozen — it accretes both from new sources and from the act of querying.

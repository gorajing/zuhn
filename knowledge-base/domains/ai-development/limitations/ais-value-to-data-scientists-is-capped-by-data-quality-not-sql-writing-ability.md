---
id: INS-260627-3AF7
domain: ai-development
topic: limitations
title: >-
  AI's value to data scientists is capped by data quality, not SQL-writing
  ability
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - data-science
  - enterprise-data
  - tacit-knowledge
  - data-quality
  - ai-limitations
sources:
  - type: youtube
    title: >-
      How METR measures Long Tasks and Experienced Open Source Dev Productivity
      - Joel Becker, METR
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=k1t2xyWMUdY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models write SQL well but fail at real data-science tasks because the
    underlying enterprise data is a contradictory, undocumented mess.
  standard: >-
    Models have become genuinely good at writing SQL and Pandas/Polars, so the
    naive expectation is that AI should massively accelerate data scientists.
    The discussion argues the opposite: AI fails on essentially all complex
    data-analysis tasks because the bottleneck was never query syntax — it's the
    catastrophic state of underlying enterprise data. The concrete example:
    LinkedIn has roughly 5,000 tables containing a column named 'impressions,'
    and an analyst asking 'how many impressions happened on a page' has no way
    to know which one is authoritative.


    Worse, the data contains contradictory facts that no schema documents. A
    'time_started' field might hold only dates until a certain month, then only
    month-granularity, then full timestamps — and successfully querying it
    requires knowing those undocumented cutoff dates. A realistic task ('give me
    the P90 time between deployments at this company, broken down by team
    hierarchy, with the PRs in each deployment') fails because deployment
    start/end isn't clear in base telemetry, team-hierarchy data lives
    elsewhere, and PR-to-deployment mapping may require calling the GitHub API.
    No current agent reliably reconstructs that.


    The deeper lesson is that much of an organization's knowledge is tacit and
    embedded in people, not captured in any RL training environment or queryable
    table. This both predicts where AI will underdeliver relative to hype (real
    ML work is mostly data curation, not model training) and suggests the
    durable fix is unglamorous: fix data quality at the source and build the
    missing infrastructure, rather than expecting a smarter model to paper over
    it.
stance: >-
  AI delivers far less value to data scientists than to software engineers
  because enterprise data is messy and undocumented, not because models can't
  write SQL.
related:
  - INS-260323-216A
  - INS-260330-775F
  - INS-260327-956D
  - INS-260530-E6AA
  - INS-260625-C6F4
  - INS-260628-1AF2
---
Models have become genuinely good at writing SQL and Pandas/Polars, so the naive expectation is that AI should massively accelerate data scientists. The discussion argues the opposite: AI fails on essentially all complex data-analysis tasks because the bottleneck was never query syntax — it's the catastrophic state of underlying enterprise data. The concrete example: LinkedIn has roughly 5,000 tables containing a column named 'impressions,' and an analyst asking 'how many impressions happened on a page' has no way to know which one is authoritative.

Worse, the data contains contradictory facts that no schema documents. A 'time_started' field might hold only dates until a certain month, then only month-granularity, then full timestamps — and successfully querying it requires knowing those undocumented cutoff dates. A realistic task ('give me the P90 time between deployments at this company, broken down by team hierarchy, with the PRs in each deployment') fails because deployment start/end isn't clear in base telemetry, team-hierarchy data lives elsewhere, and PR-to-deployment mapping may require calling the GitHub API. No current agent reliably reconstructs that.

The deeper lesson is that much of an organization's knowledge is tacit and embedded in people, not captured in any RL training environment or queryable table. This both predicts where AI will underdeliver relative to hype (real ML work is mostly data curation, not model training) and suggests the durable fix is unglamorous: fix data quality at the source and build the missing infrastructure, rather than expecting a smarter model to paper over it.

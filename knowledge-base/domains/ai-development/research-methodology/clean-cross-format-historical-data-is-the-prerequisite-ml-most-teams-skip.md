---
id: INS-260410-83CF
domain: ai-development
topic: research-methodology
title: 'Clean, cross-format historical data is the prerequisite ML most teams skip'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-engineering
  - etl
  - renaissance-technologies
  - historical-data
  - ml-infrastructure
  - data-quality
sources:
  - type: youtube
    title: Renaissance Technologies (Audio)
    author: Acquired
    url: 'https://www.youtube.com/watch?v=2KjW4BqNFy0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sandor Strauss's self-motivated project of ingesting, cleaning, and unifying
    tick data alongside 1800s-era historical pricing — years before anyone had
    models that could use it — is what made Medallion's later machine learning
    possible.
  standard: >-
    In the early 1980s, standard financial data providers offered open/close
    daily prices. Strauss went further — scraping intraday tick data, unearthing
    19th-century historical records, and painstakingly cleaning all of it into a
    single unified format. Nobody asked him to do this. There was no immediate
    use case. The models that would eventually consume this data didn't exist
    yet. He was doing ETL before the term existed.


    That pile of clean, historically deep, format-unified data became the unfair
    advantage Rentech would exploit for four decades. When Bob Mercer and Peter
    Brown arrived with sophisticated signal-processing techniques, they had
    something no other firm had: a spotless multi-decade dataset to learn from.
    The models were important, but they were downstream of the data.


    The pattern repeats everywhere in modern ML. The teams that win are often
    the ones that invested in boring data infrastructure years before their
    models could use it. In any ML project, ask: what is the data equivalent of
    Strauss's tick-data obsession? What cleaning and unification work would seem
    premature today but pay off when the models are ready? The answer is almost
    always worth more than another round of model tuning.
stance: >-
  The durable advantage in ML-driven systems comes from obsessive data cleaning
  and format unification long before sophisticated models exist, not from model
  architecture.
related:
  - INS-260325-2CC7
  - INS-260325-D033
  - INS-260330-4F7B
  - INS-260330-9A46
  - INS-260410-4AD0
  - INS-260325-5B7F
  - INS-260410-00F0
  - INS-260325-21D1
  - INS-260325-2B76
---
In the early 1980s, standard financial data providers offered open/close daily prices. Strauss went further — scraping intraday tick data, unearthing 19th-century historical records, and painstakingly cleaning all of it into a single unified format. Nobody asked him to do this. There was no immediate use case. The models that would eventually consume this data didn't exist yet. He was doing ETL before the term existed.

That pile of clean, historically deep, format-unified data became the unfair advantage Rentech would exploit for four decades. When Bob Mercer and Peter Brown arrived with sophisticated signal-processing techniques, they had something no other firm had: a spotless multi-decade dataset to learn from. The models were important, but they were downstream of the data.

The pattern repeats everywhere in modern ML. The teams that win are often the ones that invested in boring data infrastructure years before their models could use it. In any ML project, ask: what is the data equivalent of Strauss's tick-data obsession? What cleaning and unification work would seem premature today but pay off when the models are ready? The answer is almost always worth more than another round of model tuning.

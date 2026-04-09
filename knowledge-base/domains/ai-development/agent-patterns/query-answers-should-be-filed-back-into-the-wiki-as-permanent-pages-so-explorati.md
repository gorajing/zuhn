---
id: INS-260409-95C8
domain: ai-development
topic: agent-patterns
title: >-
  Query answers should be filed back into the wiki as permanent pages so
  explorations compound
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - query-persistence
  - compounding
  - exploration
  - human-curation
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
    Your questions reveal what matters; file the answers back as permanent wiki
    pages or lose that signal.
  standard: >-
    When you query an LLM-wiki and it answers well, the answer should be filed
    back as a new wiki page so future queries can reference it without
    re-synthesis. This matters for two reasons. First, the question you asked is
    signal — it encodes what you actually care about, not what the original
    sources happened to cover, so the answers tend to be better organized around
    the real axes of interest. Second, if the wiki lacks information and the LLM
    has to do web searches to answer, the backfilled web findings become
    permanent — the wiki gets smarter on its own just from being used. A
    query-answer loop that doesn't persist is throwing away the most valuable
    derivative work in the entire system.
stance: >-
  A knowledge system that doesn't persist its query answers wastes the most
  expensive part of the workflow — the question-driven synthesis — because user
  questions encode what the human actually cares about.
related:
  - INS-260409-BA55
  - INS-260403-C1C4
  - INS-260320-47FA
  - INS-260409-654B
  - INS-260402-1414
  - INS-260409-DBCF
---
When you query an LLM-wiki and it answers well, the answer should be filed back as a new wiki page so future queries can reference it without re-synthesis. This matters for two reasons. First, the question you asked is signal — it encodes what you actually care about, not what the original sources happened to cover, so the answers tend to be better organized around the real axes of interest. Second, if the wiki lacks information and the LLM has to do web searches to answer, the backfilled web findings become permanent — the wiki gets smarter on its own just from being used. A query-answer loop that doesn't persist is throwing away the most valuable derivative work in the entire system.

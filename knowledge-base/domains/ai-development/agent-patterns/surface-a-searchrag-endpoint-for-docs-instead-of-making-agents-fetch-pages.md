---
id: INS-260605-CEB5
domain: ai-development
topic: agent-patterns
title: Surface a search/RAG endpoint for docs instead of making agents fetch pages
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - documentation
  - search-endpoint
  - skills
  - production-signal
sources:
  - type: youtube
    title: >-
      Skill issue: Lessons from skilling up coding agents to use Langfuse - Marc
      Klingen, Clickhouse
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vNCY9kXXyDQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give the agent a single search endpoint over your docs rather than 500
    fetchable pages, and instrument it to learn which problems users hit.
  standard: >-
    With ~500 documentation pages, an agent that fetches-and-reads loops wastes
    tokens and turns: fetch one page, reason, fetch another, reason. Langfuse
    repurposed an existing docs Q&A RAG stack as a search endpoint the coding
    agent calls with a natural-language query and gets back relevant chunks
    directly — solving the problem in one hop instead of five.


    The second, less obvious payoff is observability. When an agent silently
    fetches doc pages on the user's laptop, the vendor can't see what it
    struggled with. When the agent instead hits a search endpoint, every query
    is captured — revealing which problems users actually run into and where
    documentation is missing or unexpected. The search endpoint is
    simultaneously a retrieval optimization and a production-feedback
    instrument. (Related supporting moves: expose an agent-oriented sitemap as
    the first stop, and advertise markdown content-negotiation so agents don't
    waste tokens parsing HTML.)
stance: >-
  Exposing a natural-language doc-search endpoint to agents beats page-fetching
  and turns agent queries into production signal about doc gaps.
related:
  - INS-260627-4946
  - INS-260619-F1E3
  - INS-260625-7A1A
  - INS-260626-05D4
  - INS-260410-19DE
  - INS-260605-4C0A
---
With ~500 documentation pages, an agent that fetches-and-reads loops wastes tokens and turns: fetch one page, reason, fetch another, reason. Langfuse repurposed an existing docs Q&A RAG stack as a search endpoint the coding agent calls with a natural-language query and gets back relevant chunks directly — solving the problem in one hop instead of five.

The second, less obvious payoff is observability. When an agent silently fetches doc pages on the user's laptop, the vendor can't see what it struggled with. When the agent instead hits a search endpoint, every query is captured — revealing which problems users actually run into and where documentation is missing or unexpected. The search endpoint is simultaneously a retrieval optimization and a production-feedback instrument. (Related supporting moves: expose an agent-oriented sitemap as the first stop, and advertise markdown content-negotiation so agents don't waste tokens parsing HTML.)

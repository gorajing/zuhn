---
id: INS-260628-0AC7
domain: ai-development
topic: evals
title: >-
  Measure retrieval with fast cheap golden-dataset evals, not expensive
  LLM-judge frameworks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - golden-dataset
  - experimentation-velocity
  - rag
  - fast-evals
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
    A fast eval is a set of query-document pairs you measure by checking whether
    the right docs come back in the top-k, and it should run in seconds for
    pennies.
  standard: >-
    Huber's core contention is that you can only manage what you measure, and
    the binding constraint on improving a retrieval system is experimentation
    velocity. The dominant alternatives are bad: guessing, public benchmarks, or
    LLM-as-judge frameworks that 'cost $600 and take three hours to run.' When
    an eval takes six hours, you stop experimenting.


    The alternative is a 'fast eval': a golden dataset of query-document pairs.
    You feed all queries in and measure whether the paired documents appear in
    the retrieved top-5/10/20 (success rate / recall@k). Because it is pure
    retrieval over an existing index, it runs extremely fast and cheap, which
    lets you run many experiments quickly.


    The practical payoff: when a hyped new embedding model appears, you stop
    guessing-and-checking in production and instead empirically ask 'do I get
    back more of my documents than before?' This makes system improvement
    systematic and deterministic rather than vibes-driven.
stance: >-
  Retrieval quality should be measured with fast query-document golden datasets
  that cost pennies, not LLM-as-judge factuality frameworks that cost hundreds
  of dollars and hours to run.
related:
  - INS-260625-0E60
  - INS-260625-8A55
  - INS-260628-A747
  - INS-260626-8747
  - INS-260628-C95B
---
Huber's core contention is that you can only manage what you measure, and the binding constraint on improving a retrieval system is experimentation velocity. The dominant alternatives are bad: guessing, public benchmarks, or LLM-as-judge frameworks that 'cost $600 and take three hours to run.' When an eval takes six hours, you stop experimenting.

The alternative is a 'fast eval': a golden dataset of query-document pairs. You feed all queries in and measure whether the paired documents appear in the retrieved top-5/10/20 (success rate / recall@k). Because it is pure retrieval over an existing index, it runs extremely fast and cheap, which lets you run many experiments quickly.

The practical payoff: when a hyped new embedding model appears, you stop guessing-and-checking in production and instead empirically ask 'do I get back more of my documents than before?' This makes system improvement systematic and deterministic rather than vibes-driven.

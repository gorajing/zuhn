---
id: INS-260605-CF15
domain: ai-development
topic: architecture
title: Caching a correct agent answer turns tomorrow's reply into a lie
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - caching
  - context-engineering
  - staleness
  - latency
sources:
  - type: youtube
    title: 'Stop babysitting your agents... — Brandon Waselnuk, Unblocked'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BiG2ssibKGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Unblocked cached high-quality answers for latency and learned that a correct
    answer is like freshly written docs — invalid the moment it's saved — so a
    cached reply re-served 24 hours later probably lies.
  standard: >-
    A natural optimization is to cache answers that earned positive feedback to
    cut latency and cost. Unblocked found this backfires. A correct answer about
    a living system is exactly like documentation: the instant you write it
    down, the underlying code, config, or decisions start drifting, so it begins
    going stale immediately. Cache a right answer today, replay it for the same
    question tomorrow, and you've likely told the user something false because
    the system changed within the 24-hour window. Some questions are genuinely
    stable, but the team recommends against answer-caching even when it's
    tempting for performance. The deeper principle: in dynamic-context
    retrieval, freshness is part of correctness, and any optimization that
    decouples the answer from a live recompute is a correctness regression in
    disguise.
stance: >-
  You should not cache 'good' answers from a context system because a correct
  answer decays the moment systems change, so replaying it later silently serves
  stale falsehoods.
related:
  - INS-260410-9D04
  - INS-260625-C6F4
  - INS-260626-BC32
  - INS-260329-4842
  - INS-260603-6FE3
---
A natural optimization is to cache answers that earned positive feedback to cut latency and cost. Unblocked found this backfires. A correct answer about a living system is exactly like documentation: the instant you write it down, the underlying code, config, or decisions start drifting, so it begins going stale immediately. Cache a right answer today, replay it for the same question tomorrow, and you've likely told the user something false because the system changed within the 24-hour window. Some questions are genuinely stable, but the team recommends against answer-caching even when it's tempting for performance. The deeper principle: in dynamic-context retrieval, freshness is part of correctness, and any optimization that decouples the answer from a live recompute is a correctness regression in disguise.

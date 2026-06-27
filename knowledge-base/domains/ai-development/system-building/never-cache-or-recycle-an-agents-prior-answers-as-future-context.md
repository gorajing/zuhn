---
id: INS-260626-E1CB
domain: ai-development
topic: system-building
title: Never cache or recycle an agent's prior answers as future context
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - caching
  - context-engineering
  - knowledge-staleness
  - agent-memory
  - context-pollution
sources:
  - type: youtube
    title: >-
      Mergeable by default: Building the context engine to save time and tokens
      — Peter Werry, Unblocked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5ID22ACI7IM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two tempting shortcuts — caching answers and reusing prior answers as
    context — both backfire: code/docs/rationale change constantly, and
    recycling outputs regresses the system toward the mean.
  standard: >-
    Werry flags answer-caching as a 'really bad idea' that many teams try. The
    obvious-in-retrospect reason: everything underlying an answer changes
    constantly — code changes, docs change, and the reasons for things change —
    so a cached answer to a 'similar' question is stale by construction. A
    context engine's value is precisely freshness; Unblocked rebuilds graph data
    on real-time webhooks where available and cron jobs otherwise, and serves
    answers from current state rather than a cache.


    The second, subtler failure is using previous answers as context for new
    answers. If the model misbehaves or produces something subtly wrong and that
    output is continuously brought back into context, it pollutes future context
    and the whole system regresses toward the mean — errors compound rather than
    wash out. The distinction worth preserving: incremental/derived structures
    that change slowly (a social graph, distilled best practices that shift
    week-to-week) can be cached and updated incrementally, but generated answers
    — which are downstream of fast-churning ground truth — should not be.
stance: >-
  Caching an agent's answer to re-serve for similar questions, or feeding prior
  answers back in as context, degrades quality because knowledge churns and the
  system regresses toward the mean.
related:
  - INS-260410-D250
  - INS-260625-C700
  - INS-260514-00D3
  - INS-260329-4842
  - INS-260625-B09C
---
Werry flags answer-caching as a 'really bad idea' that many teams try. The obvious-in-retrospect reason: everything underlying an answer changes constantly — code changes, docs change, and the reasons for things change — so a cached answer to a 'similar' question is stale by construction. A context engine's value is precisely freshness; Unblocked rebuilds graph data on real-time webhooks where available and cron jobs otherwise, and serves answers from current state rather than a cache.

The second, subtler failure is using previous answers as context for new answers. If the model misbehaves or produces something subtly wrong and that output is continuously brought back into context, it pollutes future context and the whole system regresses toward the mean — errors compound rather than wash out. The distinction worth preserving: incremental/derived structures that change slowly (a social graph, distilled best practices that shift week-to-week) can be cached and updated incrementally, but generated answers — which are downstream of fast-churning ground truth — should not be.

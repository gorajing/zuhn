---
id: INS-260626-7F76
domain: ai-development
topic: product-strategy
title: Optimize the default config because users never touch the elegant opt-in knobs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - defaults
  - developer-experience
  - configuration
  - adoption
  - product-design
sources:
  - type: youtube
    title: 'Scaling GitHub for your Agents — Sam Morrow, GitHub'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=0n3MKk7r60w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    GitHub built tool-sets, dynamic discovery, and a RAG tool-search to tame
    context bloat, but 'everyone used the default settings,' so the only fix
    that mattered was tightening the default itself.
  standard: >-
    Facing tool proliferation, GitHub's team shipped several elegant escape
    hatches: 'tool sets' (grouping related tools), dynamic tool selection where
    agents discover and switch on tool chunks, and even an unreleased RAG-based
    semantic tool search. Each required the user to configure a little JSON —
    and almost nobody did. As Morrow put it, 'in a way we had all these elegant
    solutions... all they did was require users to actually configure the JSON a
    little bit, and most users just don't.' Even their read-only mode, which
    maps cleanly to enterprise needs, is used by only ~17% of users.


    The transferable lesson is that defaults dominate behavior far more than any
    optional feature, so engineering effort spent on opt-in flexibility is
    largely wasted unless the default is also fixed. The actual win came from
    re-tuning the default tool set based on real usage patterns: a 49% cut in
    initial context load by focusing tools on the general case, then grouping
    CRUD tools to land at ~40 default tools that users can expand or contract.
    Build for the user who changes nothing, not for the power user who reads the
    docs.
stance: >-
  Investing in the out-of-the-box default beats building elegant configuration
  options that require users to edit JSON.
related:
  - INS-260626-B983
  - INS-260626-2727
  - INS-260410-60C8
  - INS-260325-EE14
  - INS-260409-1E3C
---
Facing tool proliferation, GitHub's team shipped several elegant escape hatches: 'tool sets' (grouping related tools), dynamic tool selection where agents discover and switch on tool chunks, and even an unreleased RAG-based semantic tool search. Each required the user to configure a little JSON — and almost nobody did. As Morrow put it, 'in a way we had all these elegant solutions... all they did was require users to actually configure the JSON a little bit, and most users just don't.' Even their read-only mode, which maps cleanly to enterprise needs, is used by only ~17% of users.

The transferable lesson is that defaults dominate behavior far more than any optional feature, so engineering effort spent on opt-in flexibility is largely wasted unless the default is also fixed. The actual win came from re-tuning the default tool set based on real usage patterns: a 49% cut in initial context load by focusing tools on the general case, then grouping CRUD tools to land at ~40 default tools that users can expand or contract. Build for the user who changes nothing, not for the power user who reads the docs.

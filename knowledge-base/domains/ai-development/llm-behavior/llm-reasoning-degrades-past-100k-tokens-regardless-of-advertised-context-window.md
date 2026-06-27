---
id: INS-260626-105D
domain: ai-development
topic: llm-behavior
title: >-
  LLM reasoning degrades past ~100K tokens regardless of advertised context
  window
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - smart-zone
  - task-sizing
  - attention
  - compaction
sources:
  - type: youtube
    title: 'Full Walkthrough: Workflow for AI Coding — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-QFHIoCo-Ko'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An LLM has a 'smart zone' (~under 100K tokens) and a 'dumb zone' beyond it,
    so size every task to finish inside the smart zone rather than trusting a
    200K or 1M window.
  standard: >-
    Pocock frames LLM degradation through Dex Hardy's 'smart zone vs dumb zone':
    attention relationships scale quadratically with token count (like added
    matches when you add a team to a league), so each token added strains
    reasoning. The practical marker is ~100K tokens — it does not matter whether
    the window is 200K or 1M; quality starts dropping around the same absolute
    size, and a larger window mostly 'ships you more dumb zone' that is good for
    retrieval (finding facts in a huge document) but worse for coding.


    The operational consequence is to keep system prompts tiny, watch an exact
    token counter in the status line every session, and decompose large goals
    into small tasks that each complete within the smart zone. This revives
    pre-AI advice (Fowler's Refactoring, The Pragmatic Programmer's 'don't bite
    off more than you can chew') as a hard LLM constraint rather than mere
    style.


    Pocock also prefers clearing context (returning to the clean base state,
    'like the guy from Memento') over compacting, because a cleared session is
    reproducibly the same starting point while compaction accumulates lossy
    'sediment.' This makes context hygiene a first-class engineering concern,
    not an afterthought.
stance: >-
  Coding tasks must be sized to stay under roughly 100K tokens because LLM
  quality collapses well before the advertised context limit, not at it.
related:
  - INS-260328-6A18
  - INS-260330-BC8E
  - INS-260412-2D3A
  - INS-260501-22BF
  - INS-260321-C14C
  - INS-260403-A4CF
  - INS-260605-91A9
  - INS-260625-78EC
---
Pocock frames LLM degradation through Dex Hardy's 'smart zone vs dumb zone': attention relationships scale quadratically with token count (like added matches when you add a team to a league), so each token added strains reasoning. The practical marker is ~100K tokens — it does not matter whether the window is 200K or 1M; quality starts dropping around the same absolute size, and a larger window mostly 'ships you more dumb zone' that is good for retrieval (finding facts in a huge document) but worse for coding.

The operational consequence is to keep system prompts tiny, watch an exact token counter in the status line every session, and decompose large goals into small tasks that each complete within the smart zone. This revives pre-AI advice (Fowler's Refactoring, The Pragmatic Programmer's 'don't bite off more than you can chew') as a hard LLM constraint rather than mere style.

Pocock also prefers clearing context (returning to the clean base state, 'like the guy from Memento') over compacting, because a cleared session is reproducibly the same starting point while compaction accumulates lossy 'sediment.' This makes context hygiene a first-class engineering concern, not an afterthought.

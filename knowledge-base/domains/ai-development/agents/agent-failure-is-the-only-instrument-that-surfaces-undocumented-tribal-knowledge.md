---
id: INS-260605-610E
domain: ai-development
topic: agents
title: >-
  Agent failure is the only instrument that surfaces undocumented tribal
  knowledge
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - knowledge-gaps
  - documentation
  - tribal-knowledge
  - discovery
sources:
  - type: youtube
    title: >-
      Demand-Driven Context: A Methodology for Coherent Knowledge Bases Through
      Agent Failure
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_QAVExf_1uw'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Asking 'what should we document?' yields nothing actionable; running an
    agent against a concrete problem mechanically surfaces the precise gaps that
    were never written down.
  standard: >-
    In a typical enterprise knowledge base, ~40% of operational knowledge is
    tribal — it lives in people's heads and is never documented. The classic
    failure mode is asking a domain expert 'what's missing from the docs?' —
    they can't answer because there's too much in their head to enumerate, and
    they don't know what they know. Demand-driven context solves this by
    inverting the question: give an agent a specific incident or ticket, and
    when it hits something it can't resolve from the monolith, it reports a
    confidence score plus the exact terminologies and business logic it doesn't
    understand. That report IS the list of undocumented knowledge — surfaced as
    a side effect of attempting real work. The speaker frames this as the single
    highest-value outcome of the whole approach: 'knowing the unknown.' Without
    it, teams spin endlessly on a Miro board guessing at gaps; with it, prior
    work items (archived Jira tickets, past incidents, support tickets) become
    an automated audit of what your documentation is actually missing.
stance: >-
  You cannot know what knowledge is missing from your docs until an agent fails
  a real task and tells you exactly what it couldn't find.
related:
  - INS-260605-D404
  - INS-260410-9F17
  - PRI-260320-C14C
  - INS-260320-9D89
  - INS-260603-6FE3
---
In a typical enterprise knowledge base, ~40% of operational knowledge is tribal — it lives in people's heads and is never documented. The classic failure mode is asking a domain expert 'what's missing from the docs?' — they can't answer because there's too much in their head to enumerate, and they don't know what they know. Demand-driven context solves this by inverting the question: give an agent a specific incident or ticket, and when it hits something it can't resolve from the monolith, it reports a confidence score plus the exact terminologies and business logic it doesn't understand. That report IS the list of undocumented knowledge — surfaced as a side effect of attempting real work. The speaker frames this as the single highest-value outcome of the whole approach: 'knowing the unknown.' Without it, teams spin endlessly on a Miro board guessing at gaps; with it, prior work items (archived Jira tickets, past incidents, support tickets) become an automated audit of what your documentation is actually missing.

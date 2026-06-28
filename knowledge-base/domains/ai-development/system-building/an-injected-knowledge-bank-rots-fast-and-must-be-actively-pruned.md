---
id: INS-260605-E06C
domain: ai-development
topic: system-building
title: An injected-knowledge bank rots fast and must be actively pruned
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-rot
  - knowledge-management
  - maintenance
  - model-drift
sources:
  - type: youtube
    title: 'How Lovable self-improves every hour — Benjamin Verbeek, Lovable'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KA5kPbdkK2E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Knowledge entries go stale on every model release and feature change, and
    stale context actively hampers the agent — so continuous deletion is as
    important as collection.
  standard: >-
    Verbeek emphasizes this step harder than any other: the bank of injected
    solutions 'gets stale whenever a new model is released, gets stale whenever
    we change features, gets stale incredibly quickly.' A fix that was essential
    for last month's model can be redundant or actively misleading for this
    month's, producing context rot that degrades the very agent it was meant to
    help.


    The implication for anyone building accumulating knowledge systems
    (including personal KBs and agent memories): the default assumption that
    more remembered context is better is wrong. A self-improving loop without an
    equally aggressive forgetting loop converges to a pile of deprecated advice.
    The continuous re-evaluation — measuring each entry's live lift and
    discarding losers — is what keeps the system at the frontier of what's
    currently solvable rather than anchored to what used to be true.
stance: >-
  Retrieved context becomes net-negative the moment the underlying model or
  product changes, so a self-improving system must throw knowledge away as fast
  as it adds it.
related:
  - INS-260421-43EC
  - INS-260501-E843
  - INS-260603-6FE3
  - INS-260501-E377
  - INS-260605-295D
  - INS-260627-623A
  - INS-260605-672C
  - INS-260605-82BC
---
Verbeek emphasizes this step harder than any other: the bank of injected solutions 'gets stale whenever a new model is released, gets stale whenever we change features, gets stale incredibly quickly.' A fix that was essential for last month's model can be redundant or actively misleading for this month's, producing context rot that degrades the very agent it was meant to help.

The implication for anyone building accumulating knowledge systems (including personal KBs and agent memories): the default assumption that more remembered context is better is wrong. A self-improving loop without an equally aggressive forgetting loop converges to a pile of deprecated advice. The continuous re-evaluation — measuring each entry's live lift and discarding losers — is what keeps the system at the frontier of what's currently solvable rather than anchored to what used to be true.

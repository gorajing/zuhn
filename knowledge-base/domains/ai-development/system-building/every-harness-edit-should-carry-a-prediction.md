---
id: INS-260605-15B8
domain: ai-development
topic: system-building
title: Every harness edit should carry a prediction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - decision-observability
  - harness-engineering
  - predictions
  - evaluation
  - agentic-workflow
sources:
  - type: blog
    title: >-
      Agentic Harness Engineering: Observability-Driven Automatic Evolution of
      Coding-Agent Harnesses
    url: 'https://arxiv.org/abs/2604.25850'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: 'Turn harness edits into falsifiable contracts, not untracked tweaks.'
  standard: >-
    AHE's decision observability pairs every harness edit with a self-declared
    prediction that is later verified against the next round's task-level
    outcomes. This is the move that prevents self-evolving harnesses from
    becoming trial-and-error churn.


    For a personal coding harness, a skill or hook change should say what
    failure it expects to reduce: fewer stalled runs, fewer stale-file edits,
    better post-ingest health, lower retry count, faster source extraction.
    Future runs can then confirm or falsify the edit. Without a prediction
    ledger, harness evolution accumulates folklore.
stance: >-
  Harness changes become autonomous engineering only when each edit declares a
  prediction that can be checked against later task outcomes.
related:
  - INS-260627-9BC5
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260625-2563
  - INS-260605-E193
---
AHE's decision observability pairs every harness edit with a self-declared prediction that is later verified against the next round's task-level outcomes. This is the move that prevents self-evolving harnesses from becoming trial-and-error churn.

For a personal coding harness, a skill or hook change should say what failure it expects to reduce: fewer stalled runs, fewer stale-file edits, better post-ingest health, lower retry count, faster source extraction. Future runs can then confirm or falsify the edit. Without a prediction ledger, harness evolution accumulates folklore.

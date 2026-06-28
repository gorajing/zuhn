---
id: INS-260627-DF16
domain: ai-development
topic: system-building
title: >-
  Long-running agent experiments need cache and bypass primitives, not just
  retries
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - fault-tolerance
  - caching
  - evaluation
sources:
  - type: blog
    title: >-
      An open-source framework for principled, agentic AI-driven
      hardware/software co-design research
    url: 'https://arxiv.org/html/2606.27350'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    CHIA makes nodes the unit of retry, caching, bypass, subprocess tracking,
    and profiling so long-running evaluations can recover without discarding
    expensive intermediate work.
  standard: >-
    The CHIA paper emphasizes that hardware/software co-design evaluations can
    run for hours or days across heterogeneous machines, making worker failures
    and interruptions normal rather than exceptional. Its runtime can reschedule
    failed nodes, stop leaked subprocesses, persist selected node outputs, and
    bypass expensive or nondeterministic nodes during restarts. Agent-system
    builders should treat recovery and reproducibility as core harness features
    when evaluation cost is high.
  deep: >-
    This applies beyond hardware. Any expensive agent workflow with slow tools,
    external APIs, or nondeterministic model calls benefits from node-level
    checkpoints and bypasses. The important detail is granularity: caching a
    whole run is too coarse, but caching individual tool/evaluator nodes
    preserves enough structure to replay, debug, and compare alternatives.
subtopic: fault-tolerance
stance: supported
related:
  - INS-260329-2612
  - INS-260627-6ACC
  - INS-260627-D190
  - INS-260627-FE77
  - INS-260627-F6CA
  - INS-260627-0A69
  - INS-260530-C385
---
The CHIA paper emphasizes that hardware/software co-design evaluations can run for hours or days across heterogeneous machines, making worker failures and interruptions normal rather than exceptional. Its runtime can reschedule failed nodes, stop leaked subprocesses, persist selected node outputs, and bypass expensive or nondeterministic nodes during restarts. Agent-system builders should treat recovery and reproducibility as core harness features when evaluation cost is high.

---
id: INS-260626-F01D
domain: ai-development
topic: system-building
title: >-
  Agent memory should distinguish stable knowledge bases from run-local
  trajectory memory
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-building
  - memory
  - agent-harnesses
  - knowledge-bases
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NOVA loads a static knowledge base for prior effective directions but keeps
    current modifications, diagnostics, and metric feedback in trajectory
    memory.
  standard: >-
    NOVA initializes from production code, source documents, and a static
    knowledge base of historical evidence, then updates a separate trajectory
    memory during the current run with modifications, diagnostics, failures, and
    metric feedback. The distinction matters because stable priors and run-local
    evidence have different lifetimes and trust boundaries.


    For agent systems, this supports a two-memory design: durable knowledge for
    reusable patterns, plus an auditable run ledger for immediate search state.
    Mixing the two can either pollute long-term memory with transient failures
    or deprive the active run of the exact evidence needed to choose the next
    step.
stance: >-
  Long-running agent systems need separate stores for reusable domain knowledge
  and volatile per-run trajectory evidence.
related:
  - INS-260327-35C7
  - INS-260627-C258
  - INS-260625-4AB6
  - INS-260605-014F
  - INS-260625-0A79
---
NOVA initializes from production code, source documents, and a static knowledge base of historical evidence, then updates a separate trajectory memory during the current run with modifications, diagnostics, failures, and metric feedback. The distinction matters because stable priors and run-local evidence have different lifetimes and trust boundaries.

For agent systems, this supports a two-memory design: durable knowledge for reusable patterns, plus an auditable run ledger for immediate search state. Mixing the two can either pollute long-term memory with transient failures or deprive the active run of the exact evidence needed to choose the next step.

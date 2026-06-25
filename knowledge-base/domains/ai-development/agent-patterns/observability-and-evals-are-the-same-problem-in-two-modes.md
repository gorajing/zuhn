---
id: INS-260605-A03E
domain: ai-development
topic: agent-patterns
title: Observability and evals are the same problem in two modes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - observability
  - iteration-loop
  - experimentation
  - production
sources:
  - type: youtube
    title: 'How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XBaznoTRDFI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Evals and observability are the same scoring problem — evals just know the
    inputs ahead of time and run in batch, while observability scores unknown
    inputs in real time.
  standard: >-
    Braintrust treats observability and evaluation as one problem solved by one
    system. The only differences: in evals you know the inputs ahead of time and
    run scoring in batch; in observability you don't know the inputs and you
    score in real time as traffic arrives. Collapsing them onto shared
    infrastructure is what makes the iteration loop tight — a problem spotted in
    a production trace can be added directly to an offline dataset and
    experimented against, so the path from 'observed failure' to 'fix verified
    by experiment' is short and direct. The practical move: don't build separate
    eval and monitoring stacks; design so a production trace can become an eval
    case with one step.
stance: >-
  Production observability and offline evals should run on a single system
  because they differ only in input timing and batching.
related:
  - INS-260605-72C4
  - INS-260605-E9A6
  - INS-260605-E18B
  - INS-260605-6C72
  - INS-260605-809A
  - INS-260605-8B25
  - INS-260605-1B9D
  - INS-260625-019F
  - INS-260625-8EC6
---
Braintrust treats observability and evaluation as one problem solved by one system. The only differences: in evals you know the inputs ahead of time and run scoring in batch; in observability you don't know the inputs and you score in real time as traffic arrives. Collapsing them onto shared infrastructure is what makes the iteration loop tight — a problem spotted in a production trace can be added directly to an offline dataset and experimented against, so the path from 'observed failure' to 'fix verified by experiment' is short and direct. The practical move: don't build separate eval and monitoring stacks; design so a production trace can become an eval case with one step.

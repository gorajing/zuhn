---
id: INS-260605-0C5C
domain: ai-development
topic: infrastructure
title: The PR is a human-latency artifact that collapses at agent scale
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ci-cd
  - pull-requests
  - agentic-development
  - developer-tools
  - merge-queue
sources:
  - type: youtube
    title: >-
      CI/CD Is Dead, Agents Need Continuous Compute and Computers — Hugo Santos
      and Madison Faulkner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VktrqzQgytY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The PR encodes assumptions of delayed human feedback and serialized handoffs
    that break when agents produce thousands of short-lived branches.
  standard: >-
    The pull request was engineered for a world where a developer submits one or
    two diffs a week and colleagues review them asynchronously over hours or
    days. Its slow machinery — review handoffs, batched CI, merge queues — was
    hidden behind human latency and felt acceptable. When agents generate N PRs
    across N repos with thousands of short-lived branches pulling the same
    codebase in different directions, the same machinery becomes the bottleneck.
    The act of merging starts to resemble a high-performance database problem: a
    single ledger (the git repo) that every change must serialize into, with a
    lock held during commit. That lock window is tolerable at human change-rates
    but catastrophic at machine change-rates. The implication for tool builders
    is that the PR abstraction itself, not just its speed, is what fails — you
    cannot fix agent-scale development by making PR review faster.
stance: >-
  Pull requests are the wrong unit of work for agentic development because they
  were designed around slow human review and delayed feedback.
related:
  - INS-260325-F981
  - INS-260501-4903
  - PRI-260407-D1AD
  - INS-260605-5404
  - PRI-260403-EA13
  - INS-260423-85B3
  - INS-260403-F6F6
---
The pull request was engineered for a world where a developer submits one or two diffs a week and colleagues review them asynchronously over hours or days. Its slow machinery — review handoffs, batched CI, merge queues — was hidden behind human latency and felt acceptable. When agents generate N PRs across N repos with thousands of short-lived branches pulling the same codebase in different directions, the same machinery becomes the bottleneck. The act of merging starts to resemble a high-performance database problem: a single ledger (the git repo) that every change must serialize into, with a lock held during commit. That lock window is tolerable at human change-rates but catastrophic at machine change-rates. The implication for tool builders is that the PR abstraction itself, not just its speed, is what fails — you cannot fix agent-scale development by making PR review faster.

---
id: INS-260627-D190
domain: ai-development
topic: agent-patterns
title: >-
  Drive large refactors with a verifier-then-fixer pipeline over
  dependency-graph batches
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - refactoring
  - dependency-graph
  - verifier-fixer
  - agent-orchestration
  - batching
sources:
  - type: youtube
    title: >-
      Automating Large Scale Refactors with Parallel Agents - Robert Brennan,
      OpenHands
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rcsliSIy_YU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Batch files into PR-sized chunks via the dependency graph, run a verifier to
    flag problems, spin up fixer agents that emit reviewable PRs, and process
    leaf-first until the whole graph turns green.
  standard: >-
    Calvin's demo on the OpenHands codebase (380 files, 60,000 lines) shows a
    concrete, reusable architecture for scale refactors. First, build and
    visualize the dependency graph where nodes are files and edges are imports.
    Then batch files into PR-sized, human-comprehensible chunks — they use the
    existing directory structure so semantically related files land in the same
    batch, noting that graph-theoretic algorithms give stronger guarantees but
    directory structure is a pragmatic proxy. A second, coarser graph is then
    built where nodes are batches and edges are inherited cross-batch
    dependencies, which fits on a single screen and makes the whole structure
    legible.


    The processing loop has two stages. The verifier identifies what is wrong in
    each batch — it can be programmatic (run a linter, unit tests, a type check)
    or an LLM scanning for code smells against a provided rule set. A batch
    passes (turns green) or fails (turns red). The fixer then addresses red
    batches; the most powerful form spins up a full OpenHands agent with a clean
    copy of the code and access to tools (run tests, read docs, examine code),
    and every fixer emits a tidy pull request ready for human approval. Order
    matters: process in dependency order, leaf-first, picking only batches whose
    dependencies are already analyzed, so each fix builds on already-corrected
    foundations. The end-state goal is literally visual — turn every node on the
    batch graph green.


    The value of the graph view is twofold: it surfaces complexity signals (a
    batch of four chunky high-complexity files warrants more careful review than
    a trivial empty file) and it gives a live progress dashboard. The general
    loop — verify to find problems, fix to spin up agents that resolve them,
    review and merge the PRs, unblock downstream batches, repeat — generalizes
    well beyond code-smell removal to typing, test improvement, and migrations.
stance: >-
  Large refactors should run as a verifier-then-fixer pipeline over PR-sized
  dependency-graph batches, processed leaf-first until every node passes.
related:
  - INS-260605-434D
  - INS-260605-CE25
  - INS-260625-EF29
  - INS-260625-DA23
  - INS-260627-B5F2
  - INS-260627-DF16
---
Calvin's demo on the OpenHands codebase (380 files, 60,000 lines) shows a concrete, reusable architecture for scale refactors. First, build and visualize the dependency graph where nodes are files and edges are imports. Then batch files into PR-sized, human-comprehensible chunks — they use the existing directory structure so semantically related files land in the same batch, noting that graph-theoretic algorithms give stronger guarantees but directory structure is a pragmatic proxy. A second, coarser graph is then built where nodes are batches and edges are inherited cross-batch dependencies, which fits on a single screen and makes the whole structure legible.

The processing loop has two stages. The verifier identifies what is wrong in each batch — it can be programmatic (run a linter, unit tests, a type check) or an LLM scanning for code smells against a provided rule set. A batch passes (turns green) or fails (turns red). The fixer then addresses red batches; the most powerful form spins up a full OpenHands agent with a clean copy of the code and access to tools (run tests, read docs, examine code), and every fixer emits a tidy pull request ready for human approval. Order matters: process in dependency order, leaf-first, picking only batches whose dependencies are already analyzed, so each fix builds on already-corrected foundations. The end-state goal is literally visual — turn every node on the batch graph green.

The value of the graph view is twofold: it surfaces complexity signals (a batch of four chunky high-complexity files warrants more careful review than a trivial empty file) and it gives a live progress dashboard. The general loop — verify to find problems, fix to spin up agents that resolve them, review and merge the PRs, unblock downstream batches, repeat — generalizes well beyond code-smell removal to typing, test improvement, and migrations.

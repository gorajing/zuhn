---
id: INS-260627-B34D
domain: ai-development
topic: architecture
title: Code architecture determines whether AI coding gains materialize at all
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-architecture
  - monorepo
  - context-engineering
  - productivity-gains
  - developer-tools
sources:
  - type: youtube
    title: >-
      What Data from 20m Pull Requests Reveal About AI Transformation — Nick
      Arcolano, Jellyfish
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WqZq8L-v9pA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Segmenting AI throughput gains by active-repos-per-engineer reveals ~4x
    gains for centralized/balanced architectures, ~2x for distributed, and
    roughly zero (slightly negative) for highly distributed ones.
  standard: >-
    Jellyfish's headline finding is that AI coding adoption doubles PR
    throughput on average. But that 2x is an artifact of averaging across very
    different architectures. When the same data is segmented by 'active repos
    per engineer' (a scale-independent metric of how distributed a codebase is),
    the picture fractures: centralized and balanced architectures trend toward
    4x gains, plain distributed architectures track the global 2x, and highly
    distributed architectures show essentially no correlation between AI
    adoption and throughput — the weak trend that exists is slightly negative.


    The mechanism is context. Most current coding tools and agents are built to
    work one repo at a time; stitching context across many repos is hard for
    both tools and humans, and the relationships between repos are frequently
    undocumented — locked in senior engineers' heads and invisible to agents. So
    a team that 'did everything right' on adoption can still see no gains if its
    code is shattered across many repos.


    The practical implication: if high adoption isn't producing the promised
    gains, look at architecture before blaming the tools. The fix is context
    engineering — making cross-repo relationships explicit and accessible — and
    the regime could flip entirely once autonomous agents handle cross-repo
    context, potentially making distributed architectures the most productive.
stance: >-
  Centralized codebases capture far larger AI productivity gains than highly
  distributed ones, because today's tools can only hold context for one repo at
  a time.
related:
  - INS-260627-6F60
  - INS-260627-8F2A
  - INS-260514-CEEA
  - INS-260627-6F57
  - INS-260403-1EFF
---
Jellyfish's headline finding is that AI coding adoption doubles PR throughput on average. But that 2x is an artifact of averaging across very different architectures. When the same data is segmented by 'active repos per engineer' (a scale-independent metric of how distributed a codebase is), the picture fractures: centralized and balanced architectures trend toward 4x gains, plain distributed architectures track the global 2x, and highly distributed architectures show essentially no correlation between AI adoption and throughput — the weak trend that exists is slightly negative.

The mechanism is context. Most current coding tools and agents are built to work one repo at a time; stitching context across many repos is hard for both tools and humans, and the relationships between repos are frequently undocumented — locked in senior engineers' heads and invisible to agents. So a team that 'did everything right' on adoption can still see no gains if its code is shattered across many repos.

The practical implication: if high adoption isn't producing the promised gains, look at architecture before blaming the tools. The fix is context engineering — making cross-repo relationships explicit and accessible — and the regime could flip entirely once autonomous agents handle cross-repo context, potentially making distributed architectures the most productive.

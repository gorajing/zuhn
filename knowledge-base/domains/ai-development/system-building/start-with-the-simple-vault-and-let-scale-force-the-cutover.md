---
id: INS-260409-7162
domain: ai-development
topic: system-building
title: Start with the simple vault and let scale force the cutover
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - yagni
  - scaling
  - premature-optimization
  - decision-making
  - build-vs-buy
sources:
  - type: youtube
    title: 'Karpathy의 Obsidian RAG와 Claude Code 조합, 정말 치트키입니다'
    author: Tech Bridge
    url: 'https://youtu.be/k9r2pIYYV9k'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start with the simple vault; let scale failures force the cutover, don't
    pre-argue it.
  standard: >-
    The video explicitly calls out the trap of endless debate over which RAG
    architecture is theoretically best. The practical answer is that the
    Obsidian setup is cheap enough to try, and the experience of actually
    hitting its ceiling will be more informative than any a-priori comparison.
    This is a general principle: for infrastructure decisions where the scaling
    regime is uncertain, building the simplest working version and measuring
    where it breaks is cheaper than choosing the 'right' system upfront. The
    cost of switching from a markdown vault to a vector RAG later is low because
    the vault content is the source of truth either way.
stance: >-
  The correct path for building a personal knowledge base is to start with an
  Obsidian vault plus Claude Code and only migrate to a vector or graph RAG when
  the simple system demonstrably breaks, rather than debating the choice
  upfront.
related:
  - INS-260328-EA3A
  - INS-260323-7EEB
  - PRI-260406-9DD4
  - INS-260329-9074
  - INS-260405-736C
---
The video explicitly calls out the trap of endless debate over which RAG architecture is theoretically best. The practical answer is that the Obsidian setup is cheap enough to try, and the experience of actually hitting its ceiling will be more informative than any a-priori comparison. This is a general principle: for infrastructure decisions where the scaling regime is uncertain, building the simplest working version and measuring where it breaks is cheaper than choosing the 'right' system upfront. The cost of switching from a markdown vault to a vector RAG later is low because the vault content is the source of truth either way.

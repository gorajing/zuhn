---
id: INS-260628-47B1
domain: ai-development
topic: architecture
title: >-
  Choose and mix LLM extraction strategy by document complexity, not a single
  standard
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - context-window
  - extraction
  - llm-strategy
  - document-processing
sources:
  - type: youtube
    title: >-
      How BlackRock Builds Custom Knowledge Apps at Scale — Vaibhav Page &
      Infant Vasanth, BlackRock
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=08mH36_NVos'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A vanilla corporate bond extracts fine with an in-context model on a small
    document, but 10,000-page prospectuses blow past million-token limits—so
    BlackRock chooses and mixes strategies (in-context, RAG, chain-of-thought)
    per instrument rather than standardizing on one.
  standard: >-
    BlackRock frames 'LLM strategy' as a first-class design decision distinct
    from prompting. For a simple, vanilla investment-grade corporate bond with a
    small document, an in-context model returns the needed fields directly. But
    the same extraction task fails when documents run thousands to 10,000+
    pages, because you cannot pass more than the model's context window (they
    cite roughly a million tokens) into the model. At that point a different
    strategy—RAG-based retrieval, chain-of-thought, or a blend—becomes
    mandatory.


    Crucially, even the 'simple' task of data extraction varies highly by
    instrument and document size, so the strategy choice cannot be fixed at the
    platform level; it must be a tunable knob the team iterates on alongside
    prompts. Their workflow deliberately mixes strategies with prompts in an
    iterative loop, and one of their three explicit takeaways is that educating
    the firm on 'what an LLM strategy means' and how to fit the right one to a
    use case is a core organizational capability—not just an engineering detail.


    The transferable lesson: treat extraction strategy as a per-document-class
    decision and build the tooling so practitioners can swap and combine
    strategies cheaply. Standardizing on a single approach (e.g., 'always RAG'
    or 'always in-context') guarantees failure on the tail of complex documents,
    which in finance are often the highest-value ones.
stance: >-
  No single LLM extraction strategy scales across document types; the strategy
  must be selected and blended per instrument and document size.
related:
  - PRI-260406-80E7
  - PRI-260407-93D7
  - INS-260410-C022
  - INS-260627-E257
  - INS-260404-A526
---
BlackRock frames 'LLM strategy' as a first-class design decision distinct from prompting. For a simple, vanilla investment-grade corporate bond with a small document, an in-context model returns the needed fields directly. But the same extraction task fails when documents run thousands to 10,000+ pages, because you cannot pass more than the model's context window (they cite roughly a million tokens) into the model. At that point a different strategy—RAG-based retrieval, chain-of-thought, or a blend—becomes mandatory.

Crucially, even the 'simple' task of data extraction varies highly by instrument and document size, so the strategy choice cannot be fixed at the platform level; it must be a tunable knob the team iterates on alongside prompts. Their workflow deliberately mixes strategies with prompts in an iterative loop, and one of their three explicit takeaways is that educating the firm on 'what an LLM strategy means' and how to fit the right one to a use case is a core organizational capability—not just an engineering detail.

The transferable lesson: treat extraction strategy as a per-document-class decision and build the tooling so practitioners can swap and combine strategies cheaply. Standardizing on a single approach (e.g., 'always RAG' or 'always in-context') guarantees failure on the tail of complex documents, which in finance are often the highest-value ones.

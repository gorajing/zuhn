---
id: INS-260410-2F8D
domain: ai-development
topic: embeddings
title: Prepend LLM-generated context to chunks before embedding
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - contextual-retrieval
  - preprocessing
  - anthropic
sources:
  - type: blog
    title: Contextual Retrieval in AI Systems
    url: 'https://www.anthropic.com/engineering/contextual-retrieval'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Have Claude write a 50-100 token explanation of where each chunk sits in the
    parent document, prepend it to the chunk, then embed and BM25-index the
    combined text.
  standard: >-
    Anthropic's Contextual Retrieval works by passing the whole document plus
    the target chunk to Claude with a prompt asking for a 'short succinct
    context to situate this chunk within the overall document.' That preamble is
    then prepended to the chunk before both embedding and BM25 indexing.
    Reported impact: a 35% reduction in top-20 retrieval failure rate from
    contextual embeddings alone, 49% when combined with contextual BM25, and 67%
    when stacked with a reranker.


    This is one of those rare interventions that touches only the preprocessing
    pipeline — no model swaps, no architecture changes, no runtime cost — and
    yet shifts the most painful number in RAG (retrieval failure rate). The fix
    is closer to good editing than to ML.
stance: >-
  Using an LLM to write a short situating preamble for each chunk before
  embedding and indexing reduces RAG retrieval failures by roughly half, more
  than any reranker or embedding-model upgrade alone.
related:
  - INS-260410-3F1A
  - INS-260409-1078
  - INS-260330-00D5
  - INS-260323-A5EC
  - INS-260323-8D12
  - INS-260410-4D86
  - INS-260410-264E
---
Anthropic's Contextual Retrieval works by passing the whole document plus the target chunk to Claude with a prompt asking for a 'short succinct context to situate this chunk within the overall document.' That preamble is then prepended to the chunk before both embedding and BM25 indexing. Reported impact: a 35% reduction in top-20 retrieval failure rate from contextual embeddings alone, 49% when combined with contextual BM25, and 67% when stacked with a reranker.

This is one of those rare interventions that touches only the preprocessing pipeline — no model swaps, no architecture changes, no runtime cost — and yet shifts the most painful number in RAG (retrieval failure rate). The fix is closer to good editing than to ML.

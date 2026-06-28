---
id: INS-260627-1589
domain: ai-development
topic: embeddings
title: 'Late interaction matches the whole query to a page, not one token to one patch'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - late-interaction
  - maxsim
  - embeddings
  - retrieval
  - colbert
sources:
  - type: youtube
    title: "VoiceVision RAG - Integrating Visual Document Intelligence with Voice Response —\_Suman Debnath, AWS"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hwCmfThIiS4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MaxSim scoring — dot-product every query token against every page patch,
    take the max per token, sum them — ranks pages by whole-query relevance
    rather than single-keyword presence.
  standard: >-
    Late interaction stores one embedding per image patch (and per query token)
    ahead of time, deferring all cross-comparison to query time, where it is
    just cheap dot products against pre-computed vectors. For each query token,
    you find its maximum similarity across all patches of a page, then sum those
    maxima to score the page. This MaxSim operation is what the Qdrant
    'multi-vector comparator' implements, and it isn't supported by every vector
    database.


    The reason this matters over naive single-vector retrieval: imagine querying
    'positional embedding' against the Attention Is All You Need paper. That
    phrase appears on nearly every page, so a method that fires on any single
    matching token would return five essentially random pages. MaxSim instead
    rewards the page where all the query's tokens find strong matches together,
    surfacing the page that actually explains positional embeddings rather than
    any page that merely mentions the term.


    A non-obvious training detail the speaker stresses: the model learned to
    chunk a page into patches and preserve cross-patch relationships during
    pre-training, where high loss on split tables/figures forced it to encode
    those relationships. So you don't need to engineer chunk boundaries — the
    patching semantics are baked into the trained weights.
stance: >-
  Summing per-token maximum similarities across page patches retrieves the page
  that satisfies the entire query, avoiding pages that merely contain one
  frequently-occurring term.
related:
  - INS-260405-3F0F
  - INS-260605-33B4
  - INS-260325-9C89
  - INS-260403-FF45
  - INS-260402-E040
  - INS-260625-D8C4
---
Late interaction stores one embedding per image patch (and per query token) ahead of time, deferring all cross-comparison to query time, where it is just cheap dot products against pre-computed vectors. For each query token, you find its maximum similarity across all patches of a page, then sum those maxima to score the page. This MaxSim operation is what the Qdrant 'multi-vector comparator' implements, and it isn't supported by every vector database.

The reason this matters over naive single-vector retrieval: imagine querying 'positional embedding' against the Attention Is All You Need paper. That phrase appears on nearly every page, so a method that fires on any single matching token would return five essentially random pages. MaxSim instead rewards the page where all the query's tokens find strong matches together, surfacing the page that actually explains positional embeddings rather than any page that merely mentions the term.

A non-obvious training detail the speaker stresses: the model learned to chunk a page into patches and preserve cross-patch relationships during pre-training, where high loss on split tables/figures forced it to encode those relationships. So you don't need to engineer chunk boundaries — the patching semantics are baked into the trained weights.

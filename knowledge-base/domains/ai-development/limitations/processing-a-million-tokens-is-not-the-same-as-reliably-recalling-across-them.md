---
id: INS-260625-BF8B
domain: ai-development
topic: limitations
title: Processing a million tokens is not the same as reliably recalling across them
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - long-context
  - retrieval
  - evaluation
  - context-window
sources:
  - type: youtube
    title: The End of Standard Attention in LLMs? | DeepSeek-V4 Paper Explained
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=Bnr8_4IKFpw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepSeek-V4's multi-needle retrieval stays stable to ~128k tokens, then
    degrades — still impressive at 1M but no longer reliable — showing that
    mechanical capacity to process a context outruns the ability to recall from
    it.
  standard: >-
    DeepSeek-V4 can computationally handle a 1-million-token context, but its
    multi-needle retrieval results reveal a separate, weaker curve: accuracy
    holds stable up to about 128k tokens, then declines as the context grows
    toward 1M. Performance remains better than predecessors at the extreme, but
    the degradation is real. The headline 'million-token context' describes what
    the architecture can ingest, not what it can dependably remember.


    The practical caveat for builders: a model's advertised context length and
    its effective recall length are different numbers, and the gap widens with
    the compression-based efficiency tricks that make long context affordable in
    the first place. Heavy compression is exactly what you would expect to cost
    you fine-grained recall of needles buried deep in the document — efficiency
    and perfect recall are in tension. Attention without compression caches
    everything and recalls perfectly; compression trades some of that recall
    away for tractability.


    When relying on long context for retrieval-critical tasks (finding specific
    facts in a large corpus), do not assume uniform reliability across the whole
    window. Treat ~128k as the stable zone and design verification or chunked
    retrieval for anything beyond it, rather than trusting that a model which
    can read 1M tokens has actually internalized all of them.
stance: >-
  Efficient million-token context processing does not guarantee reliable
  million-token recall; retrieval accuracy still degrades meaningfully past
  roughly 128k tokens.
related:
  - INS-260402-5034
  - INS-260330-6CB7
  - INS-260409-8408
  - INS-260409-ADD0
  - INS-260410-376A
  - INS-260421-BD7F
  - INS-260625-05FF
  - INS-260627-E257
  - INS-260626-20B7
  - INS-260409-1078
---
DeepSeek-V4 can computationally handle a 1-million-token context, but its multi-needle retrieval results reveal a separate, weaker curve: accuracy holds stable up to about 128k tokens, then declines as the context grows toward 1M. Performance remains better than predecessors at the extreme, but the degradation is real. The headline 'million-token context' describes what the architecture can ingest, not what it can dependably remember.

The practical caveat for builders: a model's advertised context length and its effective recall length are different numbers, and the gap widens with the compression-based efficiency tricks that make long context affordable in the first place. Heavy compression is exactly what you would expect to cost you fine-grained recall of needles buried deep in the document — efficiency and perfect recall are in tension. Attention without compression caches everything and recalls perfectly; compression trades some of that recall away for tractability.

When relying on long context for retrieval-critical tasks (finding specific facts in a large corpus), do not assume uniform reliability across the whole window. Treat ~128k as the stable zone and design verification or chunked retrieval for anything beyond it, rather than trusting that a model which can read 1M tokens has actually internalized all of them.

---
id: INS-260410-4D86
domain: ai-development
topic: embeddings
title: 'Traditional RAG chunking destroys context, crippling retrieval'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - retrieval
  - chunking
  - context-loss
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
    RAG chunks lose the document-level context that determines whether they're
    relevant to a query, which is why retrieval fails even when the right chunk
    exists.
  standard: >-
    When you split a document into a few-hundred-token chunk, you usually strip
    away the metadata that made the chunk meaningful: which company, which
    quarter, which case, which file. The example Anthropic uses is a chunk
    reading 'The company's revenue grew by 3% over the previous quarter' —
    semantically clean, but unretrievable for any query that names the company
    or the period.


    The deeper point is that the failure isn't in the embedding model or the
    vector store. It's in the preprocessing step that everyone treats as
    boilerplate. Before reaching for fancier retrievers or larger embedding
    models, audit whether your chunks are self-contained enough to answer the
    queries you expect.
stance: >-
  Splitting documents into chunks for RAG silently strips the situational
  context that makes those chunks retrievable, and this is the dominant failure
  mode in production RAG systems.
related:
  - INS-260410-3F1A
  - INS-260410-2F8D
  - INS-260320-5B49
  - INS-260403-7D7A
  - INS-260329-818A
---
When you split a document into a few-hundred-token chunk, you usually strip away the metadata that made the chunk meaningful: which company, which quarter, which case, which file. The example Anthropic uses is a chunk reading 'The company's revenue grew by 3% over the previous quarter' — semantically clean, but unretrievable for any query that names the company or the period.

The deeper point is that the failure isn't in the embedding model or the vector store. It's in the preprocessing step that everyone treats as boilerplate. Before reaching for fancier retrievers or larger embedding models, audit whether your chunks are self-contained enough to answer the queries you expect.

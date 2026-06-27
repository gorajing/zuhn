---
id: INS-260627-A7F8
domain: ai-development
topic: embeddings
title: Storing only embeddings gives zero privacy — source text is reconstructable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - vector-database
  - security
  - privacy
  - rag
sources:
  - type: youtube
    title: 'Jack Morris: Stuffing Context is not Memory, Updating Weights is'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Jty4s9-Jb78'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Embeddings are not anonymized text — Morris's research recovered ~90% of
    source text exactly from stored vectors, so treat a vector DB as sensitive
    as the raw documents.
  standard: >-
    A common false premise is that because embeddings look like meaningless
    arrays of floats, sending or storing only embeddings (as Pinecone,
    Turbopuffer, Chroma, etc. do) is safe with no exposure of the underlying
    text. Morris spent roughly a year of his PhD building embedding-inversion
    models: a multi-round correction system that takes a stored embedding and
    reconstructs text extremely close to the original — at sufficient length,
    recovering about 90% of the text exactly.


    The operational consequence is that an embedding is analogous to the text
    itself, not a one-way hash of it. Any team handling sensitive data (medical,
    legal, financial, internal wiki content) in a RAG system must apply the same
    access controls, encryption, and threat modeling to their vector store that
    they would to the raw source documents. 'We only ship embeddings' is not a
    compliance or security argument.
stance: >-
  A vector database that stores only embeddings offers no security benefit,
  because a motivated attacker can invert the embeddings back to roughly the
  original text.
related:
  - INS-260409-0D87
  - INS-260412-4493
  - INS-260605-A7C1
  - INS-260603-6E59
  - INS-260320-0F7C
---
A common false premise is that because embeddings look like meaningless arrays of floats, sending or storing only embeddings (as Pinecone, Turbopuffer, Chroma, etc. do) is safe with no exposure of the underlying text. Morris spent roughly a year of his PhD building embedding-inversion models: a multi-round correction system that takes a stored embedding and reconstructs text extremely close to the original — at sufficient length, recovering about 90% of the text exactly.

The operational consequence is that an embedding is analogous to the text itself, not a one-way hash of it. Any team handling sensitive data (medical, legal, financial, internal wiki content) in a RAG system must apply the same access controls, encryption, and threat modeling to their vector store that they would to the raw source documents. 'We only ship embeddings' is not a compliance or security argument.

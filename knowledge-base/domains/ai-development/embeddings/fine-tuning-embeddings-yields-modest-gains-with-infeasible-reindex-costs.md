---
id: INS-260409-3230
domain: ai-development
topic: embeddings
title: Fine-tuning embeddings yields modest gains with infeasible reindex costs
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - fine-tuning
  - embeddings
  - reindex-cost
  - marginal-gains
  - deployment
sources:
  - type: blog
    title: RAG Is A Hack - with Jerry Liu from LlamaIndex
    author:
      - '@type': Person
        name: Jerry Liu
        url: 'https://substack.com/@jerryjliu0'
        description: Co-founder/CEO at LlamaIndex
        identifier: 'user:172379178'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!6vHh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71b7ff02-8910-41a3-bf47-6d7918c21c72_558x558.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!6vHh!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71b7ff02-8910-41a3-bf47-6d7918c21c72_558x558.jpeg
    url: 'https://www.latent.space/p/llamaindex'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    Jerry Liu: fine-tuning embedding models 'you're going to have to reindex all
    your documents. For a lot of people, that's not feasible' — and the
    performance gains are typically modest (~5-10%), not large enough to justify
    the full-corpus reindex that fine-tuning requires.
  standard: >-
    A natural first instinct for improving RAG quality is to fine-tune the
    embedding model on your domain data. Jerry Liu's practical experience: the
    gains are real but modest — typically 5-10% improvement on domain-specific
    retrieval benchmarks — and the cost is enormous: when the embedding model
    changes, EVERY document in the corpus has to be re-embedded because the new
    embeddings are incompatible with the old ones. For a corpus of millions of
    documents, this is infeasible on cost, time, and operational complexity
    grounds. Most teams that start down the fine-tune-the-embeddings path
    abandon it after measuring the reindex cost against the marginal
    improvement. Better alternatives: query-side transforms (rewriting or
    expanding the query at inference time), hybrid retrieval (combining dense
    and sparse search), or structural retrieval (metadata filtering, graph
    traversal) — all of which avoid reindexing while often producing similar or
    better improvements. The lesson: before fine-tuning embeddings, exhaust
    query-side and structural options, because the asymmetry between reindex
    cost and marginal gain makes fine-tuning a poor ROI move in most cases.
stance: >-
  Fine-tuning an embedding model for domain-specific retrieval produces only
  5-10% improvement and requires reindexing every document in the corpus, making
  it infeasible for most real-world deployments.
---
A natural first instinct for improving RAG quality is to fine-tune the embedding model on your domain data. Jerry Liu's practical experience: the gains are real but modest — typically 5-10% improvement on domain-specific retrieval benchmarks — and the cost is enormous: when the embedding model changes, EVERY document in the corpus has to be re-embedded because the new embeddings are incompatible with the old ones. For a corpus of millions of documents, this is infeasible on cost, time, and operational complexity grounds. Most teams that start down the fine-tune-the-embeddings path abandon it after measuring the reindex cost against the marginal improvement. Better alternatives: query-side transforms (rewriting or expanding the query at inference time), hybrid retrieval (combining dense and sparse search), or structural retrieval (metadata filtering, graph traversal) — all of which avoid reindexing while often producing similar or better improvements. The lesson: before fine-tuning embeddings, exhaust query-side and structural options, because the asymmetry between reindex cost and marginal gain makes fine-tuning a poor ROI move in most cases.

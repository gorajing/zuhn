---
id: INS-260409-FA5E
domain: ai-development
topic: embeddings
title: >-
  RAG is a software engineering hack around frozen LLMs, not a principled ML
  solution
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - rag
  - llm-architecture
  - workaround
  - frozen-models
  - jerry-liu
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
    Jerry Liu — the builder of LlamaIndex, the most widely used RAG framework —
    says 'RAG is basically just a hack, but it turns out it's a very good hack'
    because it keeps models frozen and patches them with external algorithms for
    retrieval that are guaranteed to be suboptimal relative to an end-to-end
    trained system.
  standard: >-
    The honest framing from inside the RAG ecosystem: retrieval-augmented
    generation exists because fine-tuning on every new document is expensive and
    fine-tuning APIs don't actually support knowledge injection well. So
    instead, we freeze the model and patch it at query time with external
    retrieval. Jerry Liu: 'RAG is basically just... a hack, but it turns out
    it's a very good hack.' The hack is that you're stitching together
    components (embedder, vector store, reranker, synthesizer) that were never
    co-trained and have no guarantee of aligning. 'Unless the software
    engineering lens, there's pieces in here that are going to be like
    suboptimal.' This is worth internalizing: RAG is a pragmatic patch, not a
    principled solution. The principled solution would be end-to-end trained
    retrieval systems that co-optimize retrieval and generation — these don't
    scale well yet, which is why RAG dominates. Marks as time-sensitive because
    2024-26 advances in long context and native retrieval training may
    eventually obsolete pieces of this critique.
stance: >-
  Retrieval-augmented generation is a practical workaround that patches
  fixed-weight LLMs with external retrieval pipelines, not a principled machine
  learning approach.
---
The honest framing from inside the RAG ecosystem: retrieval-augmented generation exists because fine-tuning on every new document is expensive and fine-tuning APIs don't actually support knowledge injection well. So instead, we freeze the model and patch it at query time with external retrieval. Jerry Liu: 'RAG is basically just... a hack, but it turns out it's a very good hack.' The hack is that you're stitching together components (embedder, vector store, reranker, synthesizer) that were never co-trained and have no guarantee of aligning. 'Unless the software engineering lens, there's pieces in here that are going to be like suboptimal.' This is worth internalizing: RAG is a pragmatic patch, not a principled solution. The principled solution would be end-to-end trained retrieval systems that co-optimize retrieval and generation — these don't scale well yet, which is why RAG dominates. Marks as time-sensitive because 2024-26 advances in long context and native retrieval training may eventually obsolete pieces of this critique.

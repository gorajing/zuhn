---
id: INS-260409-8DA0
domain: ai-development
topic: embeddings
title: Top-K vector similarity is the weakest link in RAG pipelines
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - vector-search
  - top-k
  - bottleneck
  - rag
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
    Jerry Liu: 'If you're just doing top-k similarity... you might not be able
    to be fetching the right information from the documents' — meaning the
    retrieval step is where most RAG systems fail, not the synthesis step, and
    naive cosine similarity over embeddings is structurally insufficient for
    complex queries.
  standard: >-
    When a RAG system answers a question incorrectly, the instinctive blame is
    the LLM — it hallucinated, it misunderstood, it got the synthesis wrong.
    Jerry Liu's contrary observation from building LlamaIndex: the failure mode
    is more often that the retrieval step never surfaced the right chunks at
    all. The model was asked to synthesize from context that didn't contain the
    answer. Naive top-K vector similarity is too blunt an instrument for complex
    queries, especially those requiring multi-hop reasoning, temporal
    specificity, or subtle distinctions between similar concepts. The
    implication: RAG evaluation should primarily measure retrieval quality (R@K,
    precision@K) before evaluating answer quality, because bad retrieval
    guarantees bad answers regardless of the model. LlamaIndex's emphasis on
    routers, recursive retrieval, reranking, and tree indices is all aimed at
    the same failure mode — naive top-K isn't enough.
stance: >-
  Retrieval quality, not synthesis, is the bottleneck in RAG systems — naive
  top-K vector similarity frequently fails to find the right context even when
  the model would answer correctly given it.
---
When a RAG system answers a question incorrectly, the instinctive blame is the LLM — it hallucinated, it misunderstood, it got the synthesis wrong. Jerry Liu's contrary observation from building LlamaIndex: the failure mode is more often that the retrieval step never surfaced the right chunks at all. The model was asked to synthesize from context that didn't contain the answer. Naive top-K vector similarity is too blunt an instrument for complex queries, especially those requiring multi-hop reasoning, temporal specificity, or subtle distinctions between similar concepts. The implication: RAG evaluation should primarily measure retrieval quality (R@K, precision@K) before evaluating answer quality, because bad retrieval guarantees bad answers regardless of the model. LlamaIndex's emphasis on routers, recursive retrieval, reranking, and tree indices is all aimed at the same failure mode — naive top-K isn't enough.

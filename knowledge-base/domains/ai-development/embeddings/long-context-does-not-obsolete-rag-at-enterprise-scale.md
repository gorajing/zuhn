---
id: INS-260409-384A
domain: ai-development
topic: embeddings
title: Long context does not obsolete RAG at enterprise scale
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - long-context
  - rag
  - enterprise-scale
  - network-costs
  - data-scale
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
    Jerry Liu: even with a hypothetically infinite context window, dumping
    enterprise data (gigabytes to terabytes) into every model call is 'very
    inefficient... you have these network transfer costs' — long context helps
    at personal scale but does not obsolete retrieval at enterprise scale.
  standard: >-
    A common prediction in 2023-25: once context windows grow to millions of
    tokens, RAG will become obsolete — just stuff everything into the prompt.
    Jerry Liu's response is pragmatic: this works only for data that fits, and
    enterprise data does not fit. A mid-size company has gigabytes of documents,
    Slack messages, tickets, and code. A large enterprise has terabytes. No
    context window obsoletes terabyte-scale retrieval. Even setting aside model
    cost and latency, 'you have these network transfer costs' — you can't move
    terabytes of data into every inference call. The corollary: the scale at
    which long context beats RAG is narrow — bounded below by 'can the model
    process it at all' and bounded above by 'is it economically feasible to
    transfer that much per call.' For most personal use cases (a few thousand
    documents, under ~1M tokens), long context + minimal retrieval may be the
    right answer. For any organization with more data than that, RAG remains
    necessary. Marks time-sensitive because the bounds shift as context windows
    grow and network/compute costs fall.
stance: >-
  Larger context windows cannot replace retrieval for organizations with data
  measured in gigabytes or terabytes — both network transfer costs and economics
  make full-context approaches infeasible at scale.
---
A common prediction in 2023-25: once context windows grow to millions of tokens, RAG will become obsolete — just stuff everything into the prompt. Jerry Liu's response is pragmatic: this works only for data that fits, and enterprise data does not fit. A mid-size company has gigabytes of documents, Slack messages, tickets, and code. A large enterprise has terabytes. No context window obsoletes terabyte-scale retrieval. Even setting aside model cost and latency, 'you have these network transfer costs' — you can't move terabytes of data into every inference call. The corollary: the scale at which long context beats RAG is narrow — bounded below by 'can the model process it at all' and bounded above by 'is it economically feasible to transfer that much per call.' For most personal use cases (a few thousand documents, under ~1M tokens), long context + minimal retrieval may be the right answer. For any organization with more data than that, RAG remains necessary. Marks time-sensitive because the bounds shift as context windows grow and network/compute costs fall.

---
id: INS-260409-2A51
domain: ai-development
topic: agent-patterns
title: Multi-step question decomposition beats naive retrieval for complex queries
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - question-decomposition
  - multi-step-retrieval
  - agents
  - complex-queries
  - retrieval-quality
sources:
  - type: blog
    title: RAG Is A Hack - with Jerry Liu from LlamaIndex
    author: Jerry Liu
    url: 'https://www.latent.space/p/llamaindex'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Jerry Liu: 'You can take a question, break it down into smaller components
    and use that to actually send to your retrieval system. And that gives you
    better results' than passing the full question as a single vector lookup.
  standard: >-
    Naive RAG takes the user's full question, embeds it, and does top-K
    similarity search. This works for simple factual lookups ('what is the GDP
    of Japan in 2023?') but fails on complex multi-part queries ('compare
    Japan's GDP trajectory to Germany's over the last decade, and explain what
    policy differences contributed to the divergence'). The failure mode: the
    full question's embedding is a superposition of multiple sub-topics that no
    single cluster of documents cleanly matches. Jerry Liu's recommended fix:
    use an LLM to decompose the question into sub-questions ('what was Japan's
    GDP each year 2013-2023?', 'what was Germany's GDP each year 2013-2023?',
    'what notable economic policy changes did Japan make 2013-2023?', 'what
    notable economic policy changes did Germany make 2013-2023?'), retrieve for
    each sub-question separately, then synthesize. The retrieval quality per
    sub-question is much higher because each sub-question has a single clear
    topic. This is essentially applying divide-and-conquer to retrieval, and it
    generalizes to any multi-part query. Modern agentic RAG systems are built
    around this pattern — the agent plans sub-queries, retrieves, iterates.
stance: >-
  Complex questions should be decomposed into sub-questions by an LLM and each
  sub-question sent to retrieval separately, rather than passing the full
  question as a single retrieval query.
related:
  - INS-260325-E652
  - INS-260320-47FA
  - INS-260402-28BA
  - INS-260403-1448
  - INS-260403-FFF0
  - INS-260403-49E1
  - INS-260409-5CF4
  - INS-260409-B13F
  - INS-260410-9D16
  - INS-260410-2067
---
Naive RAG takes the user's full question, embeds it, and does top-K similarity search. This works for simple factual lookups ('what is the GDP of Japan in 2023?') but fails on complex multi-part queries ('compare Japan's GDP trajectory to Germany's over the last decade, and explain what policy differences contributed to the divergence'). The failure mode: the full question's embedding is a superposition of multiple sub-topics that no single cluster of documents cleanly matches. Jerry Liu's recommended fix: use an LLM to decompose the question into sub-questions ('what was Japan's GDP each year 2013-2023?', 'what was Germany's GDP each year 2013-2023?', 'what notable economic policy changes did Japan make 2013-2023?', 'what notable economic policy changes did Germany make 2013-2023?'), retrieve for each sub-question separately, then synthesize. The retrieval quality per sub-question is much higher because each sub-question has a single clear topic. This is essentially applying divide-and-conquer to retrieval, and it generalizes to any multi-part query. Modern agentic RAG systems are built around this pattern — the agent plans sub-queries, retrieves, iterates.

---
id: INS-260627-4946
domain: ai-development
topic: agent-patterns
title: >-
  Agentic retrieval beats static top-K by letting the model decide what to
  search
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rag
  - agentic-retrieval
  - tool-use
  - retrieval
  - agents
sources:
  - type: youtube
    title: "OpenRAG: An open-source stack for RAG —\_Phil Nash"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4TxOBhDRRCM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Instead of one embed-search-top-K pass and hoping the answer is in the
    chunks, give the agent the query plus search tools and let it run as many
    searches as it needs.
  standard: >-
    A traditional RAG generation pipeline embeds the user query once, runs a
    single nearest-neighbor search over chunks, presents the top-K results to
    the LLM, and hopes the answer is contained in them and the model is smart
    enough to extract it. Agentic retrieval inverts the control flow: the user's
    query is handed to an agent along with instructions and search tools, and
    the *model* decides what searches to perform, how many, and what to do with
    the results.


    This matters because a single-shot embedding of the raw query is often the
    wrong query—it may need decomposition, rephrasing, filtering, or multiple
    passes. An agent can reformulate, search again on partial results, apply
    metadata filters, and iterate until it has enough context. The cost is more
    latency and more tokens per question; the benefit is robustness on queries
    where one similarity search would silently miss the relevant chunks. Adopt
    agentic retrieval when answer quality matters more than per-query cost, and
    when your corpus rewards multi-step exploration over a single top-K grab.
stance: >-
  Handing retrieval to an agent with search tools outperforms embedding the
  query once and presenting top-K chunks.
related:
  - INS-260409-2A51
  - INS-260605-F5FB
  - INS-260605-CEB5
  - INS-260605-9F7A
  - INS-260625-3A20
---
A traditional RAG generation pipeline embeds the user query once, runs a single nearest-neighbor search over chunks, presents the top-K results to the LLM, and hopes the answer is contained in them and the model is smart enough to extract it. Agentic retrieval inverts the control flow: the user's query is handed to an agent along with instructions and search tools, and the *model* decides what searches to perform, how many, and what to do with the results.

This matters because a single-shot embedding of the raw query is often the wrong query—it may need decomposition, rephrasing, filtering, or multiple passes. An agent can reformulate, search again on partial results, apply metadata filters, and iterate until it has enough context. The cost is more latency and more tokens per question; the benefit is robustness on queries where one similarity search would silently miss the relevant chunks. Adopt agentic retrieval when answer quality matters more than per-query cost, and when your corpus rewards multi-step exploration over a single top-K grab.

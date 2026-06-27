---
id: INS-260627-0691
domain: ai-development
topic: architecture
title: >-
  RAG isn't dead—large context windows lose on cost and RAG stays hard
  per-project
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - context-windows
  - retrieval
  - cost
  - system-design
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
    The 'just dump everything in the context window' argument fails on token
    cost and ignores that RAG is hard for different reasons in every project.
  standard: >-
    The 'RAG is dead' claim assumes context windows are large enough to skip
    retrieval, but this only holds if a business has under a million tokens of
    data—and paying for a million input tokens on every single query is
    economically absurd at scale. The stronger version of the claim, 'RAG is
    solved,' is also wrong: RAG is hard, and hard for *different* reasons across
    projects. PDFs are painful to parse, chunking strategies are fiddly to tune
    and test, embeddings keep improving (so a model from a year ago is now
    stale), and new search techniques (chunk summaries, chunk expansion,
    cross-encoder reranking, query rewriting) arrive constantly.


    The deeper point is that every system has different documents, users,
    questions, interaction patterns, and expectations, so no single RAG recipe
    generalizes. Treating retrieval as a solved footnote in 'context
    engineering' underestimates the per-project engineering required. The
    practical implication: budget for RAG as ongoing tuning work, not a one-time
    integration, and don't let cheap context-window framing talk you out of
    retrieval when your corpus exceeds what you can afford to re-send every
    query.
stance: >-
  Bigger context windows do not retire RAG; for any business with more than a
  million tokens of data, retrieval remains cheaper and necessary.
related:
  - INS-260320-CE36
  - INS-260409-384A
  - INS-260605-2531
  - INS-260624-F048
  - INS-260625-5045
  - INS-260627-266C
---
The 'RAG is dead' claim assumes context windows are large enough to skip retrieval, but this only holds if a business has under a million tokens of data—and paying for a million input tokens on every single query is economically absurd at scale. The stronger version of the claim, 'RAG is solved,' is also wrong: RAG is hard, and hard for *different* reasons across projects. PDFs are painful to parse, chunking strategies are fiddly to tune and test, embeddings keep improving (so a model from a year ago is now stale), and new search techniques (chunk summaries, chunk expansion, cross-encoder reranking, query rewriting) arrive constantly.

The deeper point is that every system has different documents, users, questions, interaction patterns, and expectations, so no single RAG recipe generalizes. Treating retrieval as a solved footnote in 'context engineering' underestimates the per-project engineering required. The practical implication: budget for RAG as ongoing tuning work, not a one-time integration, and don't let cheap context-window framing talk you out of retrieval when your corpus exceeds what you can afford to re-send every query.

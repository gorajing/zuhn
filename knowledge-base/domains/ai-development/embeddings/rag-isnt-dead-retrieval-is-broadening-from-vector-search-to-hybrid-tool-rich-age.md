---
id: INS-260625-CF5E
domain: ai-development
topic: embeddings
title: >-
  RAG isn't dead — retrieval is broadening from vector search to hybrid
  tool-rich agentic retrieval
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - retrieval
  - vector-search
  - agentic-search
  - hybrid-search
  - bm25
sources:
  - type: youtube
    title: 'RAG is dead, right?? — Kuba Rogut, Turbopuffer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UM6sFg_jdlE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The 'RAG is dead' claim conflates RAG with simple vector search;
    retrieval-augmented generation actually spans vector search, BM25 full-text,
    grep/glob/regex, and filters — so 'agentic search' is a richer form of RAG,
    not its replacement.
  standard: >-
    The viral 'RAG is dead, agentic file search is all we need' narrative rests
    on a definitional error: it treats RAG as nothing more than embedding a
    corpus, doing one vector lookup, and stuffing the result into the context
    window. But the 'retrieval' in retrieval-augmented generation is a family of
    techniques — dense vector search, sparse full-text search (BM25), grepping,
    globbing, regex, and ordinary metadata filters — and the 'augmented
    generation' is just passing whatever you found into an LLM. By that
    definition, Claude Code's grep-through-the-filesystem loop is itself a form
    of retrieval, not an alternative to it. Google Trends backs the reframe
    rather than the obituary: RAG search volume hit a new inflection point and
    went 'through the roof' mid-2025, exactly when Twitter was declaring it
    dead. The practical takeaway is to stop arguing vector-vs-grep and instead
    give agents a toolbox of retrieval methods to pick from per query; 'agentic
    search' is best understood as hybrid, tool-rich retrieval, not a post-RAG
    paradigm.
stance: >-
  RAG is not dead; it is being redefined from naive one-shot vector search into
  hybrid, tool-rich retrieval that the 'agentic search' camp has simply renamed.
related:
  - INS-260409-5CF4
  - INS-260524-8320
  - INS-260605-4C0A
  - INS-260605-B8D3
  - INS-260409-2A51
  - INS-260625-E1AA
  - INS-260424-5759
---
The viral 'RAG is dead, agentic file search is all we need' narrative rests on a definitional error: it treats RAG as nothing more than embedding a corpus, doing one vector lookup, and stuffing the result into the context window. But the 'retrieval' in retrieval-augmented generation is a family of techniques — dense vector search, sparse full-text search (BM25), grepping, globbing, regex, and ordinary metadata filters — and the 'augmented generation' is just passing whatever you found into an LLM. By that definition, Claude Code's grep-through-the-filesystem loop is itself a form of retrieval, not an alternative to it. Google Trends backs the reframe rather than the obituary: RAG search volume hit a new inflection point and went 'through the roof' mid-2025, exactly when Twitter was declaring it dead. The practical takeaway is to stop arguing vector-vs-grep and instead give agents a toolbox of retrieval methods to pick from per query; 'agentic search' is best understood as hybrid, tool-rich retrieval, not a post-RAG paradigm.

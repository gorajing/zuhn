---
id: INS-260403-BE4D
domain: ai-development
topic: limitations
title: Context injection is the most underrated high-leverage prompting technique
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - context-window
  - rag
  - information-retrieval
  - llm-performance
sources:
  - type: blog
    title: >-
      AI prompt engineering in 2025: What works and what doesn’t | Sander
      Schulhoff (Learn Prompting, HackAPrompt)
    author: Lenny Rachitsky
    url: >-
      https://www.lennysnewsletter.com/p/ai-prompt-engineering-in-2025-sander-schulhoff
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Including relevant background data (bios, papers, past interactions) in the
    right format and order can make or break prompt performance more than any
    clever technique.
  standard: >-
    Among all the advanced techniques studied — chain-of-thought, decomposition,
    ensembling, self-criticism — Schulhoff highlights that simply giving the
    model more relevant context is massively impactful and consistently
    underrated. The format and ordering of that context matter: structured data,
    relevant background, and properly sequenced information all contribute to
    better outputs.


    This insight connects to the broader RAG (Retrieval-Augmented Generation)
    movement but goes further. It's not just about retrieval — it's about
    curation and presentation of context. Including a user's bio, relevant
    research papers, or past interaction history in a well-structured format can
    produce accuracy improvements that rival or exceed sophisticated prompting
    techniques that took years of research to develop. For anyone building
    AI-powered products, investing in context quality and information
    architecture is likely higher-ROI than optimizing prompt wording or adopting
    the latest prompting technique.
stance: >-
  Simply providing more relevant background information to an LLM produces
  larger accuracy gains than most sophisticated prompting techniques, yet
  practitioners systematically underinvest in context quality.
related:
  - INS-260320-5B49
  - PRI-260406-1AC6
  - INS-260320-4993
  - INS-260403-49D1
  - INS-260321-82FE
---
Among all the advanced techniques studied — chain-of-thought, decomposition, ensembling, self-criticism — Schulhoff highlights that simply giving the model more relevant context is massively impactful and consistently underrated. The format and ordering of that context matter: structured data, relevant background, and properly sequenced information all contribute to better outputs.

This insight connects to the broader RAG (Retrieval-Augmented Generation) movement but goes further. It's not just about retrieval — it's about curation and presentation of context. Including a user's bio, relevant research papers, or past interaction history in a well-structured format can produce accuracy improvements that rival or exceed sophisticated prompting techniques that took years of research to develop. For anyone building AI-powered products, investing in context quality and information architecture is likely higher-ROI than optimizing prompt wording or adopting the latest prompting technique.

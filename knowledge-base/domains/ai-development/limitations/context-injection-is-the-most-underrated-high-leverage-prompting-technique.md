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
    author:
      - '@type': Person
        name: Lenny Rachitsky
        url: 'https://substack.com/@lenny'
        description: Writing • Angel investing • Advising
        identifier: 'user:1849774'
        sameAs:
          - 'https://twitter.com/lennysan'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
    url: >-
      https://www.lennysnewsletter.com/p/ai-prompt-engineering-in-2025-sander-schulhoff
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
Among all the advanced techniques studied — chain-of-thought, decomposition, ensembling, self-criticism — Schulhoff highlights that simply giving the model more relevant context is massively impactful and consistently underrated. The format and ordering of that context matter: structured data, relevant background, and properly sequenced information all contribute to better outputs.

This insight connects to the broader RAG (Retrieval-Augmented Generation) movement but goes further. It's not just about retrieval — it's about curation and presentation of context. Including a user's bio, relevant research papers, or past interaction history in a well-structured format can produce accuracy improvements that rival or exceed sophisticated prompting techniques that took years of research to develop. For anyone building AI-powered products, investing in context quality and information architecture is likely higher-ROI than optimizing prompt wording or adopting the latest prompting technique.

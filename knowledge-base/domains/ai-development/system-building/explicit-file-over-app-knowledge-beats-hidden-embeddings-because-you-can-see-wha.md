---
id: INS-260409-156A
domain: ai-development
topic: system-building
title: >-
  Explicit, file-over-app knowledge beats hidden embeddings because you can see
  what the AI knows
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - explicit-knowledge
  - file-over-app
  - embeddings-critique
  - interoperability
  - unix-philosophy
sources:
  - type: youtube
    title: 'Karpathy''s LLM Wiki: What It Means & How to Build One'
    author: Onchain AI Garage
    url: 'https://youtu.be/zVEb19AwkqM'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Markdown files beat embeddings for personal KBs because you can navigate,
    audit, and grep what the AI actually believes.
  standard: >-
    Four principles make the LLM-wiki approach win: (1) explicit — knowledge is
    visible in a navigable wiki; you can see exactly what the AI knows and
    doesn't know, with no hidden embeddings or opaque memory system; (2) yours —
    local files on your computer, customizable, not locked into any provider;
    (3) file-over-app — everything in universal formats (markdown, images)
    interoperable with any tool, CLI, or viewer, so the entire Unix toolkit
    works on your data; (4) bring your own AI — plug in Claude, GPT, Codex,
    open-source models, or even fine-tune on the wiki so it knows your data in
    weights, not just in context. Embedding-only systems fail the first two
    tests: you cannot audit what the system believes, and you cannot easily
    migrate off a provider. The explicit markdown layer is the moat that lets
    you keep ownership of the knowledge over time.
stance: >-
  A navigable markdown wiki is strictly better than an opaque embedding store
  for personal knowledge because explicit structure lets you see exactly what
  the system knows and does not know.
related:
  - INS-260409-4CE8
  - INS-260320-0F7C
  - INS-260404-5017
  - INS-260329-DABC
  - INS-260329-206D
---
Four principles make the LLM-wiki approach win: (1) explicit — knowledge is visible in a navigable wiki; you can see exactly what the AI knows and doesn't know, with no hidden embeddings or opaque memory system; (2) yours — local files on your computer, customizable, not locked into any provider; (3) file-over-app — everything in universal formats (markdown, images) interoperable with any tool, CLI, or viewer, so the entire Unix toolkit works on your data; (4) bring your own AI — plug in Claude, GPT, Codex, open-source models, or even fine-tune on the wiki so it knows your data in weights, not just in context. Embedding-only systems fail the first two tests: you cannot audit what the system believes, and you cannot easily migrate off a provider. The explicit markdown layer is the moat that lets you keep ownership of the knowledge over time.

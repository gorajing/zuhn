---
id: INS-260403-7596
domain: ai-development
topic: platform-shifts
title: Context engineering replaces prompt engineering as the core AI skill
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - prompt-engineering
  - llm-usage
  - karpathy
sources:
  - type: blog
    title: "AGI Is Closer Than You Think\U0001F4A1, Prompt Engineering Is Dead\U0001F9E0, AI Will Eat Application Software⚠️"
    author:
      - '@type': Person
        name: Ruben Dominguez
        url: 'https://substack.com/@rubendominguez'
        description: 'Investing, building, writing '
        identifier: 'user:95342670'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
    url: 'https://www.thevccorner.com/p/agi-is-closer-than-you-think-prompt'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    The real leverage with LLMs comes from curating what context they see, not
    how you phrase the question.
  standard: >-
    Andrej Karpathy frames modern LLMs as computers where prompts are
    instructions and context is memory. This reframe shifts the skill ceiling
    from wordsmithing queries to architecting entire information environments —
    choosing what documents to retrieve, what examples to include, what
    constraints to impose, and what memory to persist. This maps directly to how
    production AI systems work: RAG pipelines, tool-use schemas, system prompts,
    and conversation management are all context engineering problems. The
    practical implication is that investing in better retrieval, structured
    context windows, and information curation yields far higher returns than
    refining prompt phrasing.
stance: >-
  Designing the information environment around an LLM query matters far more
  than crafting the query itself, making context engineering the successor skill
  to prompt engineering.
---
Andrej Karpathy frames modern LLMs as computers where prompts are instructions and context is memory. This reframe shifts the skill ceiling from wordsmithing queries to architecting entire information environments — choosing what documents to retrieve, what examples to include, what constraints to impose, and what memory to persist. This maps directly to how production AI systems work: RAG pipelines, tool-use schemas, system prompts, and conversation management are all context engineering problems. The practical implication is that investing in better retrieval, structured context windows, and information curation yields far higher returns than refining prompt phrasing.

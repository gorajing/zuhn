---
id: INS-260403-F664
domain: ai-development
topic: system-building
title: >-
  Product-level prompt engineering is fundamentally different from
  conversational prompting
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - production-systems
  - system-prompts
  - product-development
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
    Production system prompts that run millions of times must be hardened and
    optimized like code, representing a distinct discipline from conversational
    prompting.
  standard: >-
    Schulhoff distinguishes two types of prompt engineering: conversational
    (chatting with ChatGPT) and product-focused (crafting system prompts
    embedded in applications). Most people think of prompting as the former, but
    the real leverage is in the latter. A system prompt that runs millions of
    times across a user base has compounding impact — a 5% accuracy improvement
    at that scale is transformative.


    This reframing matters because it shifts prompt engineering from a casual
    skill to an engineering discipline. Product prompts need versioning, A/B
    testing, regression testing, and performance benchmarks — the same rigor
    applied to production code. Techniques like decomposition (breaking problems
    into sub-problems), self-criticism (having the model critique its own
    output), and ensembling (running multiple prompt variations and aggregating
    results) become practical tools in this context, whereas they'd be overkill
    for casual chat interactions.
stance: >-
  The highest-leverage prompt engineering happens in production system prompts
  running at scale, not in interactive chat sessions, and requires engineering
  discipline rather than creative chatting.
---
Schulhoff distinguishes two types of prompt engineering: conversational (chatting with ChatGPT) and product-focused (crafting system prompts embedded in applications). Most people think of prompting as the former, but the real leverage is in the latter. A system prompt that runs millions of times across a user base has compounding impact — a 5% accuracy improvement at that scale is transformative.

This reframing matters because it shifts prompt engineering from a casual skill to an engineering discipline. Product prompts need versioning, A/B testing, regression testing, and performance benchmarks — the same rigor applied to production code. Techniques like decomposition (breaking problems into sub-problems), self-criticism (having the model critique its own output), and ensembling (running multiple prompt variations and aggregating results) become practical tools in this context, whereas they'd be overkill for casual chat interactions.

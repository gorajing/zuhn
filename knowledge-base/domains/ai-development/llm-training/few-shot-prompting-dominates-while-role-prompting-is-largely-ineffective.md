---
id: INS-260403-18CA
domain: ai-development
topic: llm-training
title: Few-shot prompting dominates while role prompting is largely ineffective
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - prompt-engineering
  - few-shot
  - role-prompting
  - llm-accuracy
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
    Few-shot prompting can take accuracy from 0% to 90%, while role prompting
    has negligible effect on correctness.
  standard: >-
    Research across 1,500+ academic papers shows that few-shot prompting —
    providing the model with example input-output pairs — remains one of the
    highest-leverage techniques available. Schulhoff cites a medical-coding use
    case that went from complete failure to near-perfect output by simply adding
    a few examples. This works because examples ground the model in concrete
    patterns rather than abstract instructions.


    In contrast, role prompting (e.g., 'You are a math professor') has been
    shown to have little to no effect on improving correctness, despite its
    popularity. Research indicates role prompts may influence tone and writing
    style but do not meaningfully improve the accuracy of outputs. This is a
    significant finding because role prompting is one of the most commonly
    recommended techniques in popular prompt engineering guides, meaning most
    practitioners are spending effort on a low-value technique while
    underutilizing few-shot examples.
stance: >-
  Providing concrete input-output examples (few-shot prompting) is dramatically
  more effective than role assignment for improving LLM accuracy, with role
  prompting only useful for tone and style.
---
Research across 1,500+ academic papers shows that few-shot prompting — providing the model with example input-output pairs — remains one of the highest-leverage techniques available. Schulhoff cites a medical-coding use case that went from complete failure to near-perfect output by simply adding a few examples. This works because examples ground the model in concrete patterns rather than abstract instructions.

In contrast, role prompting (e.g., 'You are a math professor') has been shown to have little to no effect on improving correctness, despite its popularity. Research indicates role prompts may influence tone and writing style but do not meaningfully improve the accuracy of outputs. This is a significant finding because role prompting is one of the most commonly recommended techniques in popular prompt engineering guides, meaning most practitioners are spending effort on a low-value technique while underutilizing few-shot examples.

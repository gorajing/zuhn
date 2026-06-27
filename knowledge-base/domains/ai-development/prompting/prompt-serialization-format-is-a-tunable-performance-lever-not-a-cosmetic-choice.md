---
id: INS-260627-E8B8
domain: ai-development
topic: prompting
title: >-
  Prompt serialization format is a tunable performance lever, not a cosmetic
  choice
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - adapters
  - prompt-format
  - baml
  - json
  - token-efficiency
sources:
  - type: youtube
    title: 'DSPy: The End of Prompt Engineering - Kevin Madura, AlixPartners'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-cKUW6n8hBU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    How structured inputs/outputs are serialized into the prompt is a swappable
    lever that measurably affects accuracy and token cost.
  standard: >-
    DSPy's adapters sit between your signature and the raw string sent to the
    model, controlling serialization format. Madura cites testing (by Pashant)
    showing the BAML adapter can outperform the default JSON adapter by roughly
    5-10% on some use cases, while also being more token-efficient and more
    human-readable — and switching is a one-line change with the rest of the
    program untouched. The same abstraction handles multimodality (images,
    audio, PDFs) by formatting attachments into the prompt automatically.


    The broader lesson for anyone hand-rolling structured prompts: the wire
    format of your structured data is an experimental variable worth A/B
    testing, not a default to accept blindly. Different models respond
    differently to XML vs JSON vs BAML, and on complex schemas the messy
    verbosity of JSON schema dumps can degrade results. Isolating format behind
    a swappable adapter (rather than hardcoding it) lets you tune this lever
    cheaply; coupling format into your application logic forecloses the
    optimization.
stance: >-
  Swapping the structured-prompt format (e.g. JSON to BAML) can change task
  performance by 5-10% with no other code changes.
related:
  - INS-260626-411D
  - PRI-260406-1AC6
  - INS-260410-B8EB
  - INS-260403-7D7A
  - INS-260403-F400
---
DSPy's adapters sit between your signature and the raw string sent to the model, controlling serialization format. Madura cites testing (by Pashant) showing the BAML adapter can outperform the default JSON adapter by roughly 5-10% on some use cases, while also being more token-efficient and more human-readable — and switching is a one-line change with the rest of the program untouched. The same abstraction handles multimodality (images, audio, PDFs) by formatting attachments into the prompt automatically.

The broader lesson for anyone hand-rolling structured prompts: the wire format of your structured data is an experimental variable worth A/B testing, not a default to accept blindly. Different models respond differently to XML vs JSON vs BAML, and on complex schemas the messy verbosity of JSON schema dumps can degrade results. Isolating format behind a swappable adapter (rather than hardcoding it) lets you tune this lever cheaply; coupling format into your application logic forecloses the optimization.

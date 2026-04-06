---
id: INS-260405-DA33
domain: ai-development
topic: llm-costs
title: >-
  Architectural efficiency gains can improve model capability without increasing
  size or cost
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - efficiency
  - architecture
  - scaling
  - deepseek
  - capability
sources:
  - type: blog
    title: 'WIRTW: Deepseek Breakthrough'
    author: Chamath Palihapitiya
    url: 'https://chamath.substack.com/p/what-i-read-this-week-167'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepSeek's mHC demonstrates that structural improvements to information flow
    yield real capability gains without added cost.
  standard: >-
    The dominant paradigm for improving AI models has been scaling — more
    parameters, more data, more compute. DeepSeek's mHC result challenges the
    assumption that capability is primarily a function of scale. By improving
    how information moves through existing layers rather than adding new ones,
    they achieve accuracy gains with negligible cost increase.


    This matters for the economics of AI development: if architectural
    innovation can substitute for scaling, then labs with less compute can
    remain competitive by innovating on structure rather than raw size. It also
    suggests that the current generation of large models may be leaving
    significant capability on the table through suboptimal internal connectivity
    — a different kind of 'low-hanging fruit' than dataset curation or RLHF
    tuning.
stance: >-
  Better internal information routing — not just more parameters or more compute
  — is a viable and underexplored path to capability gains in frontier models.
related:
  - INS-260323-8897
  - INS-260404-573C
  - INS-260327-BE4E
  - PRI-260328-A82C
  - INS-260403-976C
  - INS-260405-16AB
---
The dominant paradigm for improving AI models has been scaling — more parameters, more data, more compute. DeepSeek's mHC result challenges the assumption that capability is primarily a function of scale. By improving how information moves through existing layers rather than adding new ones, they achieve accuracy gains with negligible cost increase.

This matters for the economics of AI development: if architectural innovation can substitute for scaling, then labs with less compute can remain competitive by innovating on structure rather than raw size. It also suggests that the current generation of large models may be leaving significant capability on the table through suboptimal internal connectivity — a different kind of 'low-hanging fruit' than dataset curation or RLHF tuning.

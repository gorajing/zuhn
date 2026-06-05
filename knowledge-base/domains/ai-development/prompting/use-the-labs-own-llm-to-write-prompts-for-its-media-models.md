---
id: INS-260605-D659
domain: ai-development
topic: prompting
title: Use the lab's own LLM to write prompts for its media models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multimodal
  - prompt-engineering
  - gen-media
  - co-training
sources:
  - type: youtube
    title: 'Let''s go Bananas with GenMedia — Guillaume Vernade, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BcWFc3H7Khg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gen Media models are trained on Gemini-written prompts, so having Gemini
    author the prompts produces unusually faithful results.
  standard: >-
    A non-obvious feedback loop drives prompting quality: a large share of the
    training data for Google's image, video, and music models consists of
    prompts authored by Gemini itself. As Vernade puts it, the media models
    'have been trained to listen to him very well.' The practical consequence is
    that the cheapest way to get high-quality, controllable generations is to
    let the flagship text model write the media prompts rather than writing
    terse prompts by hand. This generalizes beyond Google: whenever a media
    model is co-trained with a sibling LLM, that LLM is the privileged prompt
    author. It reframes prompt engineering from a human craft into a
    model-to-model handoff, where the human's job is to direct the LLM's intent
    rather than to phrase the final prompt.
stance: >-
  Generating media prompts with the same vendor's flagship LLM beats
  hand-writing them because the media models were trained on that LLM's prompts.
related:
  - INS-260320-508F
  - INS-260321-82FE
  - INS-260320-4993
  - INS-260321-703F
  - INS-260320-D972
  - PRI-260320-6847
  - INS-260327-79E8
  - INS-260403-07FB
  - PRI-260406-1AC6
  - INS-260409-325B
---
A non-obvious feedback loop drives prompting quality: a large share of the training data for Google's image, video, and music models consists of prompts authored by Gemini itself. As Vernade puts it, the media models 'have been trained to listen to him very well.' The practical consequence is that the cheapest way to get high-quality, controllable generations is to let the flagship text model write the media prompts rather than writing terse prompts by hand. This generalizes beyond Google: whenever a media model is co-trained with a sibling LLM, that LLM is the privileged prompt author. It reframes prompt engineering from a human craft into a model-to-model handoff, where the human's job is to direct the LLM's intent rather than to phrase the final prompt.

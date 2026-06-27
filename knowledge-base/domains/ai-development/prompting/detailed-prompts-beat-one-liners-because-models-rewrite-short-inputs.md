---
id: INS-260605-287A
domain: ai-development
topic: prompting
title: Detailed prompts beat one-liners because models rewrite short inputs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-engineering
  - gen-media
  - controllability
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
    Gen Media models silently rewrite one-liner prompts, so the longer your
    prompt the more control you keep over the output.
  standard: >-
    Vernade notes that Gen Media models 'always' do a bit of internal rewriting
    of your prompt before generating, because a one-liner gives the model
    nothing interesting to work with. The model fills the gap with its own
    assumptions. The longer and more specific your prompt, the less the model
    improvises and the more closely the output follows your intent. This inverts
    the intuition that short prompts are cleaner — under the hood, brevity hands
    control to the model's prior. For production media generation, invest in
    verbose, structured prompts (style, composition, character descriptions) and
    treat prompt length as a controllability lever, not noise.
stance: >-
  Longer, more specific prompts yield more interesting and more faithful
  generations than short ones.
related:
  - INS-260320-D972
  - PRI-260320-6847
  - INS-260403-31E4
  - INS-260409-1812
  - INS-260514-5389
  - INS-260519-ED17
  - INS-260605-D659
  - INS-260514-AC43
  - INS-260605-6752
  - INS-260625-B09C
---
Vernade notes that Gen Media models 'always' do a bit of internal rewriting of your prompt before generating, because a one-liner gives the model nothing interesting to work with. The model fills the gap with its own assumptions. The longer and more specific your prompt, the less the model improvises and the more closely the output follows your intent. This inverts the intuition that short prompts are cleaner — under the hood, brevity hands control to the model's prior. For production media generation, invest in verbose, structured prompts (style, composition, character descriptions) and treat prompt length as a controllability lever, not noise.

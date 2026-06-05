---
id: INS-260605-DD16
domain: ai-development
topic: llm-behavior
title: Conversation history anchors generations toward sameness
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-window
  - gen-media
  - consistency
  - diversity-tradeoff
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
    Chat history is a double-edged sword: it preserves style consistency across
    generations but biases new outputs to imitate earlier ones.
  standard: >-
    Vernade wanted distinct music for each book chapter but got songs that all
    sounded alike. He diagnosed it as 'the price we pay for using chat mode' —
    because the model remembers the prompts and outputs it produced before, it
    anchors new generations to the same structure and phrasing. The same history
    that gives you character and style consistency for images works against you
    when you want variety. This is a concrete instance of a general tension:
    shared context buys coherence at the cost of diversity. When you need varied
    outputs, isolate each generation in a fresh context; when you need
    consistency (recurring characters, a unified style), keep the shared
    history. Choose per axis rather than globally.
stance: >-
  Keeping chat history improves cross-output consistency but anchors new
  generations toward repeating prior ones.
related:
  - INS-260330-5C80
  - INS-260330-14E1
  - INS-260403-368A
  - INS-260403-DC52
  - INS-260410-D31B
  - INS-260323-9B68
  - INS-260405-06B0
---
Vernade wanted distinct music for each book chapter but got songs that all sounded alike. He diagnosed it as 'the price we pay for using chat mode' — because the model remembers the prompts and outputs it produced before, it anchors new generations to the same structure and phrasing. The same history that gives you character and style consistency for images works against you when you want variety. This is a concrete instance of a general tension: shared context buys coherence at the cost of diversity. When you need varied outputs, isolate each generation in a fresh context; when you need consistency (recurring characters, a unified style), keep the shared history. Choose per axis rather than globally.

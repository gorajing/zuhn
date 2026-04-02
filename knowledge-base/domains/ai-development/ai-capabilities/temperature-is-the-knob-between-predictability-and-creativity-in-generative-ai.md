---
id: INS-260330-264B
domain: ai-development
topic: ai-capabilities
title: Temperature is the knob between predictability and creativity in generative AI
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai
  - decision-making
  - tradeoffs
  - creativity
  - optimization
  - generation
sources:
  - type: youtube
    title: 'Transformers, the tech behind LLMs | Deep Learning Chapter 5'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=wjZofJX0v4M'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Temperature in LLM sampling controls the predictability-creativity tradeoff,
    with zero producing derivative text and high values risking incoherence.
  standard: >-
    The temperature parameter in softmax sampling directly controls how much
    weight lower-probability tokens receive. At temperature zero, the model
    always picks the most likely next token, producing safe but derivative
    output (the Goldilocks story example). Higher temperatures distribute
    probability more evenly, enabling surprising word choices that can produce
    more original text but risk degenerating into nonsense. This maps to a
    broader principle in decision-making and creative work: there is always a
    tension between exploitation (doing what's most likely to work) and
    exploration (trying unlikely options). The optimal temperature depends
    entirely on context — customer-facing factual responses want low
    temperature, while brainstorming wants high. Understanding this tradeoff is
    immediately actionable for anyone building AI products or using LLM APIs.
stance: >-
  Softmax temperature controls a fundamental tradeoff in text generation — low
  temperature produces safe, predictable, derivative output while high
  temperature enables originality at the cost of coherence, and there is no
  universally correct setting because the optimal balance depends entirely on
  the use case.
related:
  - INS-260330-B08E
  - INS-260330-00D5
  - INS-260330-2F13
  - PRI-260321-14D8
  - INS-260323-584D
  - INS-260402-3FD8
  - INS-260402-9D7B
evidence:
  - id: INS-260330-B08E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-2F13
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260322-5CBF
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The temperature parameter in softmax sampling directly controls how much weight lower-probability tokens receive. At temperature zero, the model always picks the most likely next token, producing safe but derivative output (the Goldilocks story example). Higher temperatures distribute probability more evenly, enabling surprising word choices that can produce more original text but risk degenerating into nonsense. This maps to a broader principle in decision-making and creative work: there is always a tension between exploitation (doing what's most likely to work) and exploration (trying unlikely options). The optimal temperature depends entirely on context — customer-facing factual responses want low temperature, while brainstorming wants high. Understanding this tradeoff is immediately actionable for anyone building AI products or using LLM APIs.

---
id: INS-260327-F4DD
domain: ai-development
topic: product-strategy
title: >-
  AI-native products must expose application primitives to models, not staple AI
  onto GUIs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-native-design
  - product-architecture
  - model-integration
  - application-design
sources:
  - type: youtube
    title: 'Anthropic CPO Mike Krieger: Building AI Products From the Bottom Up'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=Js1gU6L1Zi8'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Products that start AI-light and go AI-heavy end up with AI in a sidebar
    that can't fully access the application; true AI-native products expose all
    primitives to models.
  standard: >-
    Krieger identifies two common mistakes in AI application building. First,
    products that add AI as a secondary surface (sidebar, chatbot) find it
    increasingly hard to make that surface full-featured as capabilities go
    agentic. Second, 'a shocking number of AI-native products don't expose the
    primitives of the application to the models enough' -- when a user asks
    something and gets 'sorry I can't do that,' it's because the model was never
    given access to that capability.


    The root cause is building a GUI first and then 'stapling a model on top'
    rather than treating the model as the primary user of the application. Over
    70% of Anthropic's pull requests are Claude Code generated, which raises new
    questions about code review and architectural oversight. The insight is that
    AI shouldn't just be a feature of your product -- the model should be able
    to operate your product as a first-class user.
stance: >-
  Products that bolt AI as a sidebar onto existing interfaces will lose to
  products that make their core primitives natively accessible to AI models.
related:
  - PRI-260328-DD90
  - INS-260327-30E4
  - INS-260329-8F98
  - INS-260321-807B
  - INS-260327-FDF4
  - INS-260409-533A
evidence:
  - id: INS-260327-30E4
    type: SUPPORTS
    classified_at: '2026-04-02'
---
Krieger identifies two common mistakes in AI application building. First, products that add AI as a secondary surface (sidebar, chatbot) find it increasingly hard to make that surface full-featured as capabilities go agentic. Second, 'a shocking number of AI-native products don't expose the primitives of the application to the models enough' -- when a user asks something and gets 'sorry I can't do that,' it's because the model was never given access to that capability.

The root cause is building a GUI first and then 'stapling a model on top' rather than treating the model as the primary user of the application. Over 70% of Anthropic's pull requests are Claude Code generated, which raises new questions about code review and architectural oversight. The insight is that AI shouldn't just be a feature of your product -- the model should be able to operate your product as a first-class user.

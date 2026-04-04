---
id: INS-260329-5ECD
domain: ai-development
topic: ai-capabilities
title: AI code editors need one-screen-at-a-time feeding to avoid spatial confusion
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - ai-coding
  - mobile-development
  - prompting
  - spatial-reasoning
sources:
  - type: youtube
    title: 'Figma To App Store In 37 Minutes With AI [Tutorial]'
    author: Starter Story Build
    url: 'https://youtube.com/watch?v=adVJ0DBNOAw'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Feed AI code editors one screen at a time with explicit spatial descriptions
    because they misplace UI elements when given multiple screens at once.
  standard: >-
    Ross discovered that sending multiple Figma screens simultaneously to
    Windsurf produces poor results — the AI conflates elements across screens
    and mispositions components. His workaround is feeding one screen at a time
    with explicit spatial context ('the button is at the bottom of the screen,
    the logo is at the top'). This reveals a fundamental limitation: AI coding
    tools can generate code but lack the spatial reasoning to understand where
    elements should be positioned relative to a mobile viewport. This limitation
    likely persists because training data contains code but not the visual
    layouts the code produces. The workaround of narrating spatial relationships
    is essentially converting visual information into the textual format AI can
    process.
stance: >-
  Current AI coding tools cannot reliably implement multi-screen mobile apps
  from a single prompt because they lack spatial reasoning about element
  positioning within mobile viewports.
related:
  - INS-260329-44C9
  - INS-260329-9CFE
  - INS-260329-7B1D
  - INS-260403-C514
  - INS-260329-979B
evidence:
  - id: INS-260329-9CFE
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-7B1D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-979B
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-7DCF
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Ross discovered that sending multiple Figma screens simultaneously to Windsurf produces poor results — the AI conflates elements across screens and mispositions components. His workaround is feeding one screen at a time with explicit spatial context ('the button is at the bottom of the screen, the logo is at the top'). This reveals a fundamental limitation: AI coding tools can generate code but lack the spatial reasoning to understand where elements should be positioned relative to a mobile viewport. This limitation likely persists because training data contains code but not the visual layouts the code produces. The workaround of narrating spatial relationships is essentially converting visual information into the textual format AI can process.

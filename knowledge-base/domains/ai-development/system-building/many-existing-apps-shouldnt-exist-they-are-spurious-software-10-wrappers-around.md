---
id: INS-260501-7726
domain: ai-development
topic: system-building
title: >-
  Many existing apps shouldn't exist — they are spurious software 1.0 wrappers
  around what neural nets now do natively
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - software-3.0
  - menu-gen
  - nano-banana
  - model-is-not-the-moat
  - issue-3
sources:
  - type: youtube
    title: 'Andrej Karpathy: From Vibe Coding to Agentic Engineering'
    author: Sequoia Capital
    url: 'https://youtu.be/96jN2OCOfLs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Karpathy built Menu Gen as a multi-step app, then realized Gemini + Nano
    Banana renders the entire thing in one shot — the app shouldn't exist.
  standard: >-
    Karpathy's Menu Gen example: he vibe-coded an app that OCRs a menu photo,
    calls an image generator per item, and re-renders the menu. Then he realized
    Gemini's Nano Banana could do the entire thing in one prompt — input the
    photo, output the rendered menu with items overlaid. The app he built is
    'spurious' — it works in the old paradigm where you orchestrate primitives,
    but the primitive itself can now do the orchestration.


    The broader pattern: previous code worked over structured data. With LLMs,
    raw documents become first-class inputs and outputs — Karpathy's
    wiki-from-articles example couldn't have existed before because no code
    could 'create a knowledge base based on a bunch of facts.' Builders should
    not just ask 'how can AI speed up what I'm building?' but 'is this entire
    artifact rendered obsolete by a single model call?' This is the operational
    form of the model-is-not-the-moat thesis: products built as orchestration
    over models become disposable when the model can orchestrate itself.
stance: >-
  When a single neural network call (image-to-image, doc-to-wiki) can do what
  previously required an app of orchestration code, the app is technical debt,
  not value.
related:
  - INS-260409-6AEB
  - INS-260501-52B5
  - INS-260329-560D
  - INS-260410-BCA3
  - INS-260321-C5AA
  - INS-260404-D646
---
Karpathy's Menu Gen example: he vibe-coded an app that OCRs a menu photo, calls an image generator per item, and re-renders the menu. Then he realized Gemini's Nano Banana could do the entire thing in one prompt — input the photo, output the rendered menu with items overlaid. The app he built is 'spurious' — it works in the old paradigm where you orchestrate primitives, but the primitive itself can now do the orchestration.

The broader pattern: previous code worked over structured data. With LLMs, raw documents become first-class inputs and outputs — Karpathy's wiki-from-articles example couldn't have existed before because no code could 'create a knowledge base based on a bunch of facts.' Builders should not just ask 'how can AI speed up what I'm building?' but 'is this entire artifact rendered obsolete by a single model call?' This is the operational form of the model-is-not-the-moat thesis: products built as orchestration over models become disposable when the model can orchestrate itself.

---
id: INS-260605-B230
domain: ai-development
topic: architecture
title: Ship low-level AI primitives and let others build the agent layer on top
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - primitives
  - agent-frameworks
  - platform-design
  - abstraction-layers
  - prompt-api
sources:
  - type: youtube
    title: 'Gemini Nano on device — Florina Muntenescu & Oli Gaymond, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=owH1f0N-keY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Android deliberately ships the low-level Prompt API rather than a skills
    system, because a skill is just text composed into a prompt — so the
    platform provides the substrate and lets agent frameworks build on top.
  standard: >-
    When asked whether developers could write 'skills' to improve responses, the
    team explained that a skill is fundamentally 'just something you stick into
    the prompt alongside the rest of your query' — there's no separate magic. So
    the platform's role is to provide the low-level primitives (the Prompt API
    accepting text and image input), and higher-level constructs like skill
    composition are left to frameworks built on top. They pointed to agent
    runtimes like Pocket Claw / Open Claw as the layer that takes skills,
    composes them into a prompt, and runs them through the underlying API.


    This is a conscious abstraction-boundary decision: the platform owns the
    substrate (model delivery, hardware optimization, scheduling, the inference
    API) and refuses to own the application-level orchestration. The benefit is
    that the primitive stays general — anyone can build any agent pattern on it
    — while the platform avoids prematurely freezing one opinionated agent
    abstraction into the OS. The same reasoning explains why an embedding API
    for RAG is 'coming soon' as another primitive rather than a packaged RAG
    product: give builders composable parts, not finished solutions.
stance: >-
  Platform AI providers should expose raw prompt/inference primitives rather
  than finished agent abstractions like skills.
related:
  - INS-260330-0E6E
  - INS-260330-B771
  - INS-260403-F148
  - INS-260501-9E23
  - INS-260501-F90F
  - INS-260625-03A6
  - INS-260605-9276
  - INS-260329-4D06
  - INS-260603-1BC0
  - INS-260605-50FB
---
When asked whether developers could write 'skills' to improve responses, the team explained that a skill is fundamentally 'just something you stick into the prompt alongside the rest of your query' — there's no separate magic. So the platform's role is to provide the low-level primitives (the Prompt API accepting text and image input), and higher-level constructs like skill composition are left to frameworks built on top. They pointed to agent runtimes like Pocket Claw / Open Claw as the layer that takes skills, composes them into a prompt, and runs them through the underlying API.

This is a conscious abstraction-boundary decision: the platform owns the substrate (model delivery, hardware optimization, scheduling, the inference API) and refuses to own the application-level orchestration. The benefit is that the primitive stays general — anyone can build any agent pattern on it — while the platform avoids prematurely freezing one opinionated agent abstraction into the OS. The same reasoning explains why an embedding API for RAG is 'coming soon' as another primitive rather than a packaged RAG product: give builders composable parts, not finished solutions.

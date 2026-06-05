---
id: INS-260605-8691
domain: ai-development
topic: product-strategy
title: Match model choice to the latency contract of each interaction phase
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - latency
  - consumer-ai
  - model-selection
  - ux-tradeoffs
  - reasoning-models
sources:
  - type: youtube
    title: 'Building a Chess Coach — Anant Dole and Asbjorn Steinskog, Take Take Take'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FlzpEGHNVKQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use Gemini Flash for the sub-3-second post-game review; save reasoning
    models for the patient 'chat with your coach' experience.
  standard: >-
    Because users finishing a chess game want to cycle through move-by-move
    analysis immediately, Play Magnus couldn't show an indefinite 'coach is
    thinking' screen while reasoning tokens streamed. They targeted sub-3-second
    feedback and chose Gemini 3 Flash: roughly one-second time-to-first-token
    and about three-second end-to-end latency. Reasoning models produced quality
    that 'is definitely good' but with unpredictable completion time —
    unacceptable for the instant-feedback phase.


    Their resolution is not 'reasoning models are bad' but phase-appropriate
    model selection: the same product is planning a separate 'chat with your
    coach' mode where users expect to wait for a response, and there a reasoning
    model fits. The design principle is to identify each interaction's latency
    contract and pick the cheapest, fastest model that satisfies it, rather than
    defaulting to the most capable model everywhere. Predictability of latency,
    not just average latency, was a deciding factor — a model that is usually
    fast but occasionally slow breaks an instant-feedback UX.
stance: >-
  Consumer AI should use a fast non-reasoning model where the UX demands
  near-instant output and reserve slower reasoning models for interactions where
  users will tolerate waiting.
related:
  - INS-260330-C13A
  - INS-260603-C8AF
  - INS-260404-023C
  - INS-260403-3F12
  - INS-260330-568F
---
Because users finishing a chess game want to cycle through move-by-move analysis immediately, Play Magnus couldn't show an indefinite 'coach is thinking' screen while reasoning tokens streamed. They targeted sub-3-second feedback and chose Gemini 3 Flash: roughly one-second time-to-first-token and about three-second end-to-end latency. Reasoning models produced quality that 'is definitely good' but with unpredictable completion time — unacceptable for the instant-feedback phase.

Their resolution is not 'reasoning models are bad' but phase-appropriate model selection: the same product is planning a separate 'chat with your coach' mode where users expect to wait for a response, and there a reasoning model fits. The design principle is to identify each interaction's latency contract and pick the cheapest, fastest model that satisfies it, rather than defaulting to the most capable model everywhere. Predictability of latency, not just average latency, was a deciding factor — a model that is usually fast but occasionally slow breaks an instant-feedback UX.

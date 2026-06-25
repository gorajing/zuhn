---
id: INS-260605-7A70
domain: ai-development
topic: product-strategy
title: Wrap existing agents instead of forcing a rebuild to win adoption
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - developer-experience
  - adoption
  - integration
  - platform-design
sources:
  - type: youtube
    title: 'Give Your Chat Agent a Voice — Luke Harries, Head of Growth, ElevenLabs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=DCZZ3AJKzuc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Customers who already built agents (evals, RAG, tool calling) reject
    rebuilds, so the product that wraps their work beats the one that replaces
    it.
  standard: >-
    ElevenLabs initially built an out-of-the-box conversational agent platform,
    but discovered that many target customers had already invested heavily in
    their own chat agents — building evals, transcriptions, RAG, and tool
    integrations. These customers refused to 'completely replace and rebuild'
    what already worked. The strategic pivot was to extract just the voice
    engine (speech-to-text, text-to-speech, turn-taking) into a standalone
    primitive that wraps any existing agent.


    The lesson generalizes beyond voice: when entering a market where customers
    have already made sunk-cost investments in adjacent infrastructure, the
    integration surface area matters more than feature completeness. A product
    that demands a rebuild forces customers to discard working systems and
    re-validate them; a product that wraps lets them keep their evals and tool
    calling while adding one new capability. The wrapper path dramatically
    lowers the activation barrier — 'one prompt to convert an existing chat
    agent to a voice agent' — converting a months-long migration into a same-day
    add-on.
stance: >-
  Voice/AI platforms should ship a thin wrapper primitive around customers'
  existing agents rather than a rip-and-replace platform.
related:
  - INS-260410-AB4A
  - INS-260605-C726
  - INS-260327-A9D5
  - INS-260530-D34F
  - INS-260325-D540
---
ElevenLabs initially built an out-of-the-box conversational agent platform, but discovered that many target customers had already invested heavily in their own chat agents — building evals, transcriptions, RAG, and tool integrations. These customers refused to 'completely replace and rebuild' what already worked. The strategic pivot was to extract just the voice engine (speech-to-text, text-to-speech, turn-taking) into a standalone primitive that wraps any existing agent.

The lesson generalizes beyond voice: when entering a market where customers have already made sunk-cost investments in adjacent infrastructure, the integration surface area matters more than feature completeness. A product that demands a rebuild forces customers to discard working systems and re-validate them; a product that wraps lets them keep their evals and tool calling while adding one new capability. The wrapper path dramatically lowers the activation barrier — 'one prompt to convert an existing chat agent to a voice agent' — converting a months-long migration into a same-day add-on.

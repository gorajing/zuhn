---
id: INS-260605-C132
domain: ai-development
topic: architecture
title: Factor voice agents into a voice engine wrapping an agent orchestration core
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - voice-agents
  - separation-of-concerns
  - system-design
  - orchestration
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
    Every production voice agent converges on a voice engine
    (STT/TTS/turn-taking) sitting in front of an agent orchestration layer
    (LLM/RAG/tools), and keeping them separable is what makes wrapping possible.
  standard: >-
    Harries observes that essentially every company building voice agents —
    including ones powering Revolut's customer support — converges on the same
    two-layer architecture: a voice engine handling text-to-speech,
    speech-to-text, and turn-taking, sitting in front of an agent orchestration
    layer that combines LLMs, RAG, tool calling, and integrations. 'Probably a
    bunch of us in this room have either built the same system or pitched the
    same slide.'


    The architectural insight is that these two layers have fundamentally
    different concerns and change at different rates, so they should be cleanly
    separable rather than fused. The voice engine is a horizontal capability
    (the same STT/TTS/turn-taking works for any domain), while the orchestration
    layer encodes business-specific logic. Treating the voice engine as its own
    first-class primitive that proxies sessions to the orchestration layer means
    teams can upgrade voice models independently, and — critically — bolt voice
    onto an agent that was originally built text-only. The convergence of
    independent teams on the same diagram is itself a signal that this factoring
    is correct.
stance: >-
  Voice agents should be architected as a swappable voice engine layer proxying
  to a separate agent orchestration layer, not a monolith.
related:
  - PRI-260501-168F
  - INS-260605-0126
  - INS-260605-2E27
  - INS-260627-8425
  - INS-260605-50FB
---
Harries observes that essentially every company building voice agents — including ones powering Revolut's customer support — converges on the same two-layer architecture: a voice engine handling text-to-speech, speech-to-text, and turn-taking, sitting in front of an agent orchestration layer that combines LLMs, RAG, tool calling, and integrations. 'Probably a bunch of us in this room have either built the same system or pitched the same slide.'

The architectural insight is that these two layers have fundamentally different concerns and change at different rates, so they should be cleanly separable rather than fused. The voice engine is a horizontal capability (the same STT/TTS/turn-taking works for any domain), while the orchestration layer encodes business-specific logic. Treating the voice engine as its own first-class primitive that proxies sessions to the orchestration layer means teams can upgrade voice models independently, and — critically — bolt voice onto an agent that was originally built text-only. The convergence of independent teams on the same diagram is itself a signal that this factoring is correct.

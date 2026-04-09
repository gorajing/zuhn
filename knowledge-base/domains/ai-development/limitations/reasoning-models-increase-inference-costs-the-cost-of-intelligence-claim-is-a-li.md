---
id: INS-260323-7625
domain: ai-development
topic: limitations
title: >-
  Reasoning models increase inference costs — the 'cost of intelligence' claim
  is a lie
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - ai-skepticism
  - zitron
  - inference-costs
  - reasoning-models
  - token-economics
sources:
  - type: youtube
    title: 'AI Bubble: Nobody will pay for unsubsidised AI | Ed Zitron'
    author: The Tech Report
    url: 'https://youtu.be/oAbpVCn-Ox0'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    While per-token costs have decreased, reasoning models burn dramatically
    more tokens per task, so actual inference costs per useful output have
    increased — the opposite of what AI CEOs claim.
  standard: >-
    Sam Altman and others repeatedly claim 'the cost of intelligence is going
    down.' Zitron dismantles this: while the cost per individual token may
    decrease, reasoning models (introduced September 2024) evaluate multiple
    steps per query, with each step having its own hallucination risk. The total
    tokens consumed per useful output have exploded.


    A single person refactoring code on an OpenAI reasoning model can consume
    4-12 GPUs simultaneously. Coding LLMs are especially token-hungry because
    complex reasoning chains multiply both cost and error probability. Each
    reasoning step can hallucinate, sending the model down expensive dead ends.
    This means the headline metric (cost per token) is misleading — the real
    metric (cost per correct output) is rising. Any AI company or investor using
    per-token cost curves to project profitability is using the wrong
    denominator.
related:
  - INS-260405-A22F
  - PRI-260328-D893
  - INS-260405-6A94
  - INS-260325-BEAC
  - INS-260403-91F7
  - INS-260320-9FD5
  - INS-260325-206C
  - INS-260329-0D70
  - INS-260405-3240
  - INS-260409-17E9
stance: >-
  While per-token costs have decreased, reasoning models burn dramatically more
  tokens per task, so actual inference costs per useful output have inc...
evidence:
  - id: INS-260325-BEAC
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260322-D079
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260325-4FF3
    type: EXTENDS
    classified_at: '2026-04-02'
---
Sam Altman and others repeatedly claim 'the cost of intelligence is going down.' Zitron dismantles this: while the cost per individual token may decrease, reasoning models (introduced September 2024) evaluate multiple steps per query, with each step having its own hallucination risk. The total tokens consumed per useful output have exploded.

A single person refactoring code on an OpenAI reasoning model can consume 4-12 GPUs simultaneously. Coding LLMs are especially token-hungry because complex reasoning chains multiply both cost and error probability. Each reasoning step can hallucinate, sending the model down expensive dead ends. This means the headline metric (cost per token) is misleading — the real metric (cost per correct output) is rising. Any AI company or investor using per-token cost curves to project profitability is using the wrong denominator.

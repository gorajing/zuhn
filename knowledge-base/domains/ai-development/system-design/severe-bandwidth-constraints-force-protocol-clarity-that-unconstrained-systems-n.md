---
id: INS-260412-4773
domain: ai-development
topic: system-design
title: >-
  Severe bandwidth constraints force protocol clarity that unconstrained systems
  never achieve
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - bandwidth-constraints
  - protocol-design
  - communication-efficiency
  - VLF-radio
sources:
  - type: youtube
    title: 'Living Underwater: How Submarines Work'
    author: Wendover Productions
    url: 'https://www.youtube.com/watch?v=gdy0gBVWAzE'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Submarine VLF communication at 700 words per minute in text-only forces
    message protocols to be maximally clear and unambiguous — a discipline that
    disappears when bandwidth is cheap.
  standard: >-
    Submarines communicate via Very Low Frequency radio that penetrates seawater
    but maxes out at ~700 words per minute of text — no audio, no video, no
    back-and-forth. This extreme constraint means every message must be
    self-contained, unambiguous, and pre-structured. There's no room for
    clarifying questions or casual context.


    This maps directly to AI system design and agent architectures. When
    designing communication between AI agents or between agents and tools,
    artificially constraining the message format forces better protocol design.
    Systems with unlimited context windows and token budgets tend to develop
    bloated, redundant communication patterns. The submarine model suggests that
    imposing strict message budgets on inter-agent communication — structured
    schemas, fixed-length fields, no free-text clarifications — produces more
    reliable coordination than giving agents unlimited bandwidth to 'figure it
    out' conversationally.
stance: >-
  Systems designed under extreme communication constraints develop more robust
  and unambiguous protocols than those with abundant bandwidth, because every
  bit must carry maximum information density
related:
  - INS-260321-E4EB
  - INS-260410-E660
  - INS-260327-E75F
  - INS-260410-F06E
  - INS-260410-25AF
---
Submarines communicate via Very Low Frequency radio that penetrates seawater but maxes out at ~700 words per minute of text — no audio, no video, no back-and-forth. This extreme constraint means every message must be self-contained, unambiguous, and pre-structured. There's no room for clarifying questions or casual context.

This maps directly to AI system design and agent architectures. When designing communication between AI agents or between agents and tools, artificially constraining the message format forces better protocol design. Systems with unlimited context windows and token budgets tend to develop bloated, redundant communication patterns. The submarine model suggests that imposing strict message budgets on inter-agent communication — structured schemas, fixed-length fields, no free-text clarifications — produces more reliable coordination than giving agents unlimited bandwidth to 'figure it out' conversationally.

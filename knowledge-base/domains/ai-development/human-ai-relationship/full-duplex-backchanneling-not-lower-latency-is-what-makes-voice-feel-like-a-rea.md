---
id: INS-260605-E490
domain: ai-development
topic: human-ai-relationship
title: >-
  Full-duplex backchanneling, not lower latency, is what makes voice feel like a
  real conversation
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - voice-ai
  - full-duplex
  - backchanneling
  - conversation-design
  - human-ai-relationship
sources:
  - type: youtube
    title: 'Voice AI: when is the "Her" moment? — Neil Zeghidour, CEO, Gradium AI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=P_RI1kCkRbo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Half-duplex models that only listen OR speak break on the overlap, coughs,
    and 'mhm' backchanneling that make human talk human — up to 20% of a
    conversation is overlapping speech.
  standard: >-
    Almost every speech-to-speech model is half-duplex: it is either listening
    or speaking, and cannot handle the ambiguity of real conversation where
    people talk over one another, cough, or interject 'mhm' to signal active
    listening. This backchanneling is not noise — in some cultures (e.g.,
    Japanese) it signals politeness and attention, and up to 20% of conversation
    time is overlapped speech. A half-duplex model treats backchannel as an
    interruption and stops, which becomes maddening (and is why most voice demos
    are shot in quiet rooms). Moshi demonstrates the alternative: it begins
    answering before you finish, lets you talk over it without ignoring you, and
    stays robust to noise and multiple speakers. The lesson for builders is that
    naturalness is gated on duplexity and overlap-handling, not just on shaving
    latency.
stance: >-
  Conversation feels human only when the model is full-duplex — able to listen
  and speak simultaneously and tolerate overlap — which every major
  speech-to-speech model except Moshi lacks.
related:
  - INS-260403-5CA6
  - INS-260605-510C
  - INS-260605-9877
  - INS-260605-D37A
  - INS-260605-8AEE
  - INS-260625-9C3D
  - INS-260409-78E1
---
Almost every speech-to-speech model is half-duplex: it is either listening or speaking, and cannot handle the ambiguity of real conversation where people talk over one another, cough, or interject 'mhm' to signal active listening. This backchanneling is not noise — in some cultures (e.g., Japanese) it signals politeness and attention, and up to 20% of conversation time is overlapped speech. A half-duplex model treats backchannel as an interruption and stops, which becomes maddening (and is why most voice demos are shot in quiet rooms). Moshi demonstrates the alternative: it begins answering before you finish, lets you talk over it without ignoring you, and stays robust to noise and multiple speakers. The lesson for builders is that naturalness is gated on duplexity and overlap-handling, not just on shaving latency.

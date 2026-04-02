---
id: INS-260402-5CF0
domain: ai-development
topic: agent-patterns
title: Rejected results are high-value negative signal for agent memory systems
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-memory
  - negative-signal
  - feedback-loops
  - decision-quality
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When users reject cached results, that negative signal shapes future
    retrieval quality more than successful matches do.
  standard: >-
    In the research agent demo, rejected results created a visibly different
    graph shape than accepted ones — a structural signal detectable through
    graph pattern matching alone. When a user searching for dog training advice
    about a non-terrier breed rejected cached terrier training results, that
    rejection was stored with a timestamp and relationship context.


    This negative signal serves multiple purposes: it prevents future false
    matches on similar queries, it captures preference evolution over time (a
    rejection today might become an acceptance later, like policy reversals),
    and it provides training signal for improving similarity thresholds. Most
    agent memory systems only store successful retrievals, missing the equally
    valuable information contained in what was explicitly rejected. The temporal
    dimension matters too — tracking when rejections and acceptances occur
    reveals how knowledge relevance shifts over time.
stance: >-
  Storing and analyzing rejection patterns in agent memory provides more
  decision-making value than storing only successful outcomes
related:
  - INS-260402-1D32
  - INS-260329-4842
  - INS-260329-EECD
  - INS-260330-82B5
  - INS-260329-92E9
evidence:
  - id: INS-260329-4842
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-EECD
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-92E9
    type: SUPPORTS
    classified_at: '2026-04-02'
---
In the research agent demo, rejected results created a visibly different graph shape than accepted ones — a structural signal detectable through graph pattern matching alone. When a user searching for dog training advice about a non-terrier breed rejected cached terrier training results, that rejection was stored with a timestamp and relationship context.

This negative signal serves multiple purposes: it prevents future false matches on similar queries, it captures preference evolution over time (a rejection today might become an acceptance later, like policy reversals), and it provides training signal for improving similarity thresholds. Most agent memory systems only store successful retrievals, missing the equally valuable information contained in what was explicitly rejected. The temporal dimension matters too — tracking when rejections and acceptances occur reveals how knowledge relevance shifts over time.

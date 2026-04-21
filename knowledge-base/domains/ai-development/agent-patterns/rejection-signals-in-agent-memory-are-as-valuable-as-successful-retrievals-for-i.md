---
id: INS-260405-02BE
domain: ai-development
topic: agent-patterns
title: >-
  Rejection signals in agent memory are as valuable as successful retrievals for
  improving future decisions
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - negative-signal
  - feedback-loops
  - agent-memory
  - retrieval-quality
sources:
  - type: audio
    title: Code with claw
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Storing rejection events alongside successful retrievals lets agents learn
    what not to suggest, creating a temporal record of evolving preferences.
  standard: >-
    The demo showed a concrete case: the agent cached dog training results for
    terriers, but when a user asked about a different breed and rejected the
    terrier suggestion, that rejection was stored in the graph with a timestamp.
    This negative signal serves multiple purposes: it prevents the same
    irrelevant suggestion from resurfacing, it captures that user preferences
    evolved over time (like a legal precedent being reversed), and it provides
    training signal for improving similarity thresholds. Most agent memory
    implementations focus exclusively on storing successful interactions,
    missing the equally informative pattern of what was offered and declined.
    The graph structure makes this particularly natural since rejections are
    just edges with a different label connecting the same nodes.
stance: >-
  Tracking when a user rejects a cached result provides critical negative signal
  that improves future retrieval quality, yet most agent memory systems only
  store positive outcomes.
related:
  - INS-260328-41C9
  - INS-260329-92E9
  - INS-260402-5CF0
  - INS-260404-5365
  - INS-260330-8A0C
  - INS-260412-347D
  - INS-260421-CE27
evidence:
  - id: INS-260328-41C9
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260329-92E9
    type: CONTRADICTS
    classified_at: '2026-04-05'
  - id: INS-260404-5365
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260330-8A0C
    type: CHALLENGES
    classified_at: '2026-04-05'
---
The demo showed a concrete case: the agent cached dog training results for terriers, but when a user asked about a different breed and rejected the terrier suggestion, that rejection was stored in the graph with a timestamp. This negative signal serves multiple purposes: it prevents the same irrelevant suggestion from resurfacing, it captures that user preferences evolved over time (like a legal precedent being reversed), and it provides training signal for improving similarity thresholds. Most agent memory implementations focus exclusively on storing successful interactions, missing the equally informative pattern of what was offered and declined. The graph structure makes this particularly natural since rejections are just edges with a different label connecting the same nodes.

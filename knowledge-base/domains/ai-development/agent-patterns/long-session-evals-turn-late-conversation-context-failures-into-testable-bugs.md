---
id: INS-260605-A3F4
domain: ai-development
topic: agent-patterns
title: Long-session evals turn late-conversation context failures into testable bugs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - long-sessions
  - testing
  - observability
sources:
  - type: youtube
    title: How we solved Context Management in Agents — Sally-Ann Delucia
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=esY99nYXxR4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because users stay in one long chat, load 10 turns and test the 11th so
    context-management failures surface in evals instead of in user reports.
  standard: >-
    Users rarely restart their chats — they travel across the application within
    a single growing conversation, pushing from under 10 turns to 20-plus. This
    means context-management failures appear late, and the team initially only
    discovered them when a user complained or Delucia happened to spot it in the
    data.


    Their solution was long-session evals: load 10 turns of conversation, then
    test the 11th turn to measure how well context is holding up deep into a
    session. This makes late-conversation bugs testable and reproducible rather
    than something you wait to discover in production. Delucia frames evaluation
    as one of the three things that matter most (alongside context engineering
    and memory), and long-session evals are how you get an early signal that
    your truncation or memory strategy is degrading over the lengths real users
    actually reach.
stance: >-
  Loading N turns and testing turn N+1 converts context-degradation failures
  into a reproducible, automated signal.
related:
  - INS-260320-CE36
  - INS-260605-90CF
  - INS-260605-DCE5
  - INS-260625-B4AC
  - INS-260625-C69F
  - INS-260322-D1AB
---
Users rarely restart their chats — they travel across the application within a single growing conversation, pushing from under 10 turns to 20-plus. This means context-management failures appear late, and the team initially only discovered them when a user complained or Delucia happened to spot it in the data.

Their solution was long-session evals: load 10 turns of conversation, then test the 11th turn to measure how well context is holding up deep into a session. This makes late-conversation bugs testable and reproducible rather than something you wait to discover in production. Delucia frames evaluation as one of the three things that matter most (alongside context engineering and memory), and long-session evals are how you get an early signal that your truncation or memory strategy is degrading over the lengths real users actually reach.

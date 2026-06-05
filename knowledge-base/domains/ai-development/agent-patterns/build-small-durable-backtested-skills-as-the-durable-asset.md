---
id: INS-260605-02FB
domain: ai-development
topic: agent-patterns
title: 'Build small, durable, backtested skills as the durable asset'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - backtesting
  - durability
  - progressive-disclosure
  - feedback-loops
sources:
  - type: youtube
    title: >-
      How Building with AI Can Double the Throughput of Your Engineering Team —
      Brian Scanlan, Intercom
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4_VQBbs2iQA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Encapsulate work in small, durable, testable skills and prove their quality
    by backtesting against your body of past code, changes, and incidents.
  standard: >-
    Intercom is technically conservative — they prefer single tools used
    extremely well, which is why they run Ruby on Rails monoliths. They apply
    the same lens to AI: rather than have everyone build bespoke multi-agent
    orchestrators, they focus attention on small, high-quality, durable,
    testable skills that 'do the job extremely well,' considering the lifetime
    value of what they produce. Specific implementations will change, but
    Scanlan is confident that 'writing down how to do work in Intercom will be
    valuable no matter what happens.'


    Critically, they validate skills empirically. Their huge body of historical
    work — code changes, incidents, prior PRs — becomes a backtesting corpus to
    prove skills operate at high quality, and they design skills to be
    self-updating (continuous improvement). His flaky-spec-fixing skill wasn't
    hand-authored; he gave the agent a goal and a feedback loop while fixing
    real flaky specs, and the agent wrote a well-organized skill with
    lookup-table 'cheat codes' using progressive disclosure — output he'd praise
    if a senior Rails engineer had produced it.
stance: >-
  The lasting value in AI engineering is small, high-quality, testable skills
  validated against your historical data — not the agents or models themselves.
related:
  - INS-260320-A4BF
  - INS-260327-D888
  - INS-260322-C6CE
  - INS-260605-25B2
  - INS-260530-D34F
  - INS-260329-500E
---
Intercom is technically conservative — they prefer single tools used extremely well, which is why they run Ruby on Rails monoliths. They apply the same lens to AI: rather than have everyone build bespoke multi-agent orchestrators, they focus attention on small, high-quality, durable, testable skills that 'do the job extremely well,' considering the lifetime value of what they produce. Specific implementations will change, but Scanlan is confident that 'writing down how to do work in Intercom will be valuable no matter what happens.'

Critically, they validate skills empirically. Their huge body of historical work — code changes, incidents, prior PRs — becomes a backtesting corpus to prove skills operate at high quality, and they design skills to be self-updating (continuous improvement). His flaky-spec-fixing skill wasn't hand-authored; he gave the agent a goal and a feedback loop while fixing real flaky specs, and the agent wrote a well-organized skill with lookup-table 'cheat codes' using progressive disclosure — output he'd praise if a senior Rails engineer had produced it.

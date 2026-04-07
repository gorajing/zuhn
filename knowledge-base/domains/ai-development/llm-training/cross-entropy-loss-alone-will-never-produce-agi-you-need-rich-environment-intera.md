---
id: INS-260323-2651
domain: ai-development
topic: llm-training
title: >-
  Cross-entropy loss alone will never produce AGI — you need rich environment
  interaction and something beyond next-token prediction
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agi
  - loss-functions
  - training
  - reinforcement-learning
sources:
  - type: youtube
    title: >-
      George Hotz: Tiny Corp, Twitter, AI Safety, Self-Driving, GPT, AGI & God |
      Lex Fridman Podcast #387
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=dNrTrx42DGQ'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hotz argues that maximizing compression (cross-entropy) can never reach AGI
    because it produces 'mid' outputs — competent but never brilliant — and
    lacks the embodied feedback loops of human learning.
  standard: >-
    When Hotz says 'GPT-12 will not be AGI,' his argument is specific:
    cross-entropy loss as a training objective produces outputs that converge to
    the statistical middle of the training distribution. His concrete example:
    ChatGPT writes raps that sound like YouTube comment raps — technically
    competent but 'mid.' The loss function optimizes for average plausibility,
    not excellence or originality. He argues you need 'probably RL, fancy
    environments' to get something considered AGI — rich interaction loops that
    go beyond predicting the next token.


    This connects to a deeper point about human intelligence: the human 'loss
    function' is vastly more complex than RLHF, incorporating embodied
    experience, emotional valence, social dynamics, and environmental feedback.
    For AI developers working on AGI approaches: the path likely requires moving
    beyond pure language modeling into environments where agents get rich,
    multi-modal feedback on their actions — not just predicting what text comes
    next.
related:
  - PRI-260407-7FB7
  - PRI-260405-9504
  - INS-260330-2F13
  - PRI-260321-14D8
  - PRI-260322-94C4
  - INS-260326-8201
stance: >-
  Hotz argues that maximizing compression (cross-entropy) can never reach AGI
  because it produces 'mid' outputs
evidence:
  - id: INS-260330-2F13
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-7FAC
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260402-70FD
    type: CHALLENGES
    classified_at: '2026-04-03'
---
When Hotz says 'GPT-12 will not be AGI,' his argument is specific: cross-entropy loss as a training objective produces outputs that converge to the statistical middle of the training distribution. His concrete example: ChatGPT writes raps that sound like YouTube comment raps — technically competent but 'mid.' The loss function optimizes for average plausibility, not excellence or originality. He argues you need 'probably RL, fancy environments' to get something considered AGI — rich interaction loops that go beyond predicting the next token.

This connects to a deeper point about human intelligence: the human 'loss function' is vastly more complex than RLHF, incorporating embodied experience, emotional valence, social dynamics, and environmental feedback. For AI developers working on AGI approaches: the path likely requires moving beyond pure language modeling into environments where agents get rich, multi-modal feedback on their actions — not just predicting what text comes next.

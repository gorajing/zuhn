---
id: INS-260605-D1F1
domain: ai-development
topic: llm-behavior
title: 'LLMs fail at chess because of training objective, not transformer architecture'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - transformers
  - training-objective
  - reasoning-limits
  - model-capabilities
sources:
  - type: youtube
    title: 'Building a Chess Coach — Anant Dole and Asbjorn Steinskog, Take Take Take'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FlzpEGHNVKQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    There is nothing wrong with the transformer for chess — DeepMind trained one
    to grandmaster strength by predicting Stockfish evaluations rather than
    language.
  standard: >-
    The speakers debunk the common assumption that LLMs are bad at chess because
    transformers can't do it. Language-trained LLMs hallucinate moves because
    they were trained on text and cannot calculate, but DeepMind trained a
    transformer on millions of (chess position → Stockfish evaluation) pairs and
    it reached grandmaster-level play. The architecture was never the
    constraint; the next-token-prediction objective over language was.


    The practical lesson generalizes beyond chess: when an LLM fails at a
    structured task, the right diagnosis is usually 'this capability was never
    in its training objective,' not 'this model class is incapable.' That
    reframing points to two distinct fixes — either train (or fine-tune) on the
    right objective, or, as Play Magnus chose, hand the calculation to a
    specialized system and use the LLM only for what its language training
    actually gave it. A chess-evaluation transformer plays brilliantly but
    cannot explain; a language LLM explains but cannot play. Bridging two narrow
    systems beats demanding one model do both.
stance: >-
  Transformers can reach grandmaster-level chess when trained to predict
  evaluations instead of next tokens, so the model's competence ceiling is set
  by what it was trained to do, not by its architecture.
related:
  - INS-260408-B5EC
  - INS-260410-67D5
  - INS-260605-9F16
  - PRI-260405-2DE5
  - INS-260603-F0BE
---
The speakers debunk the common assumption that LLMs are bad at chess because transformers can't do it. Language-trained LLMs hallucinate moves because they were trained on text and cannot calculate, but DeepMind trained a transformer on millions of (chess position → Stockfish evaluation) pairs and it reached grandmaster-level play. The architecture was never the constraint; the next-token-prediction objective over language was.

The practical lesson generalizes beyond chess: when an LLM fails at a structured task, the right diagnosis is usually 'this capability was never in its training objective,' not 'this model class is incapable.' That reframing points to two distinct fixes — either train (or fine-tune) on the right objective, or, as Play Magnus chose, hand the calculation to a specialized system and use the LLM only for what its language training actually gave it. A chess-evaluation transformer plays brilliantly but cannot explain; a language LLM explains but cannot play. Bridging two narrow systems beats demanding one model do both.

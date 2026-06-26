---
id: INS-260605-0C24
domain: ai-development
topic: system-design
title: >-
  Separate the analysis pipeline from language generation to suppress
  hallucination
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hallucination
  - grounding
  - pipeline-architecture
  - llm-as-translator
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
    Compute the truth deterministically, then give the LLM only the job of
    putting that truth into words.
  standard: >-
    Play Magnus's chess coach does all the actual chess reasoning outside the
    LLM: Stockfish computes the best move, custom detectors find forks, pins,
    skewers, and structural weaknesses, and the Maia model estimates how likely
    a human at a given rating is to find each move. Only after all this
    structured context is assembled does the LLM enter — and its sole job is to
    translate that information into English. The team is explicit that they
    'really don't want it to try to figure out too much on its own, because it
    quickly leads to hallucination.'


    The general principle for any domain AI product: the LLM is the worst place
    to compute facts and one of the best places to phrase them. When a
    deterministic engine or detector can establish ground truth, do that first
    and feed it in. The LLM's freedom to reason is inversely proportional to its
    reliability, so deliberately shrinking its scope to 'narrate these verified
    facts' is a feature, not a limitation. Their first listed learning was
    exactly this: 'separate the data pipeline from the language generation.'
stance: >-
  Restricting the LLM to translating pre-computed structured facts into prose,
  rather than reasoning itself, is the reliable way to ground domain-specific AI
  output.
related:
  - INS-260330-78B8
  - INS-260330-6165
  - INS-260626-8DAD
  - INS-260410-4518
  - INS-260330-12DC
  - INS-260403-4CF9
---
Play Magnus's chess coach does all the actual chess reasoning outside the LLM: Stockfish computes the best move, custom detectors find forks, pins, skewers, and structural weaknesses, and the Maia model estimates how likely a human at a given rating is to find each move. Only after all this structured context is assembled does the LLM enter — and its sole job is to translate that information into English. The team is explicit that they 'really don't want it to try to figure out too much on its own, because it quickly leads to hallucination.'

The general principle for any domain AI product: the LLM is the worst place to compute facts and one of the best places to phrase them. When a deterministic engine or detector can establish ground truth, do that first and feed it in. The LLM's freedom to reason is inversely proportional to its reliability, so deliberately shrinking its scope to 'narrate these verified facts' is a feature, not a limitation. Their first listed learning was exactly this: 'separate the data pipeline from the language generation.'

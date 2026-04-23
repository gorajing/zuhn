---
id: INS-260320-8FFC
domain: ai-development
topic: system-building
title: >-
  Stateless ID generation avoids LLM hallucination — never ask an AI to track
  sequential counters
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - id-generation
  - hallucination
  - stateless-design
sources:
  - type: paste
    title: Building the Zuhn knowledge base — lessons from Phase 1-5
    author: Jin Choi + Claude
related:
  - INS-260320-0F7C
  - INS-260423-FB98
  - PRI-260406-6AE6
  - INS-260412-8A13
  - INS-260327-BE1F
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Sequential IDs stored in a file would be hallucinated by the LLM — timestamp
    plus title hash made file creation completely stateless with zero collisions
    across 74 insights.
  standard: |
    An external reviewer identified that sequential IDs stored in a counter
    file would eventually be hallucinated by the LLM — skipping numbers,
    guessing the next value, or creating duplicates. The solution was a
    ULID-inspired scheme: timestamp (date) plus a 4-character SHA256 hash of
    the title, making file creation completely stateless.

    Validated: zero ID collisions across 74 insights. No counter file to
    read, no state to maintain, no race conditions between concurrent agents.
    Each agent can independently generate a unique ID from just the title
    string and the current date.

    General principle: never ask an LLM to maintain sequential state. LLMs
    hallucinate counters, skip numbers, and lose track of sequences. Design
    stateless operations where each invocation is self-contained and
    deterministic from its inputs alone.
stance: >-
  Timestamp-plus-hash IDs are superior to sequential IDs because they are
  completely stateless
evidence:
  - id: INS-260327-4434
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-BE1F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-CA1F
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-956D
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-FEDD
    type: CHALLENGES
    classified_at: '2026-04-05'
---

An external reviewer identified that sequential IDs stored in a counter
file would eventually be hallucinated by the LLM — skipping numbers,
guessing the next value, or creating duplicates. The solution was a
ULID-inspired scheme: timestamp (date) plus a 4-character SHA256 hash of
the title, making file creation completely stateless.

Validated: zero ID collisions across 74 insights. No counter file to
read, no state to maintain, no race conditions between concurrent agents.
Each agent can independently generate a unique ID from just the title
string and the current date.

General principle: never ask an LLM to maintain sequential state. LLMs
hallucinate counters, skip numbers, and lose track of sequences. Design
stateless operations where each invocation is self-contained and
deterministic from its inputs alone.

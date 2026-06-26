---
id: INS-260626-8D05
domain: ai-development
topic: system-design
title: >-
  Surface conflicts an agent can't resolve rather than hiding them behind naive
  heuristics
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - conflict-resolution
  - context-engineering
  - human-in-the-loop
  - knowledge-management
  - truth-modeling
sources:
  - type: youtube
    title: >-
      Mergeable by default: Building the context engine to save time and tokens
      — Peter Werry, Unblocked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5ID22ACI7IM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't resolve every conflict with a heuristic and bury the ones you got
    wrong — surface unresolvable conflicts to the human and capture their
    correction as weighted memory.
  standard: >-
    Unblocked's early conflict resolution was naive: first bias toward recency,
    then bias toward code ('main branch is the source of truth'). Both fail.
    Recency loses because people write docs and chat messages that aren't
    aligned with how the system actually works. Code-bias loses because what
    often matters is where the work is going, not where it has been — the
    in-flight task's intent can override the current main-branch reality. The
    deeper mistake was hiding conflicts: not ignoring them, but resolving them
    with weak strategies and never surfacing the ones the system couldn't
    actually adjudicate.


    The lesson is that a context engine can't always determine truth, and when
    it can't it should say so — instruct the agent that the conflict is
    unresolved, surface the references to the human, and learn from the
    correction. Crucially, those corrections must be weighted by source trust:
    an expert saying 'that's not right' should mint a durable memory, while the
    same words from a new engineer aren't yet a trustworthy signal. Unblocked
    uses its experts/social graph to supply that weight, and finds humans
    readily give natural-language feedback (hundreds of corrections even on
    20-30 person teams), turning the conflict surface into a high-volume
    human-intelligence capture mechanism.
stance: >-
  A context system should explicitly flag conflicts it cannot confidently
  resolve and learn from human correction, instead of silently picking a winner
  via recency or main-branch bias.
related:
  - INS-260405-1D7B
  - INS-260625-6260
  - INS-260410-939B
  - INS-260329-64B8
  - PRI-260327-8D8C
  - PRI-260406-CF83
---
Unblocked's early conflict resolution was naive: first bias toward recency, then bias toward code ('main branch is the source of truth'). Both fail. Recency loses because people write docs and chat messages that aren't aligned with how the system actually works. Code-bias loses because what often matters is where the work is going, not where it has been — the in-flight task's intent can override the current main-branch reality. The deeper mistake was hiding conflicts: not ignoring them, but resolving them with weak strategies and never surfacing the ones the system couldn't actually adjudicate.

The lesson is that a context engine can't always determine truth, and when it can't it should say so — instruct the agent that the conflict is unresolved, surface the references to the human, and learn from the correction. Crucially, those corrections must be weighted by source trust: an expert saying 'that's not right' should mint a durable memory, while the same words from a new engineer aren't yet a trustworthy signal. Unblocked uses its experts/social graph to supply that weight, and finds humans readily give natural-language feedback (hundreds of corrections even on 20-30 person teams), turning the conflict surface into a high-volume human-intelligence capture mechanism.

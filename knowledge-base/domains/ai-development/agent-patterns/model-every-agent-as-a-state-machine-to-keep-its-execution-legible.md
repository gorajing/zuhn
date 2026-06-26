---
id: INS-260605-E693
domain: ai-development
topic: agent-patterns
title: Model every agent as a state machine to keep its execution legible
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - state-machine
  - architecture
  - mental-models
sources:
  - type: youtube
    title: 'Don''t Build Slop (4 Levels of AI Agent Maturity) - Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=yUmS-F9IX90'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every agent is a recursive while-loop with a few conditions and end states,
    so design it as a state machine you can always locate yourself within.
  standard: >-
    Beneath every hype cycle, an agent is a recursive while-loop with conditions
    and terminal states — user task → tool/action state → completion. The
    discipline is maintaining a mental model of which state the agent occupies
    at any moment, whether the loop runs for seconds or hours.


    This legibility is what makes agents debuggable and extensible. If you can
    visualize the state machine, every design decision — what tools exist, what
    transitions are legal, where it terminates — becomes a concrete question
    rather than a vibe. The architecture of that state machine is the part Khan
    argues must be authored by a human, not generated.
stance: >-
  Agents should be designed and reasoned about as explicit state machines, not
  opaque pipelines.
related:
  - INS-260327-BF89
  - INS-260410-E658
  - INS-260605-07E5
  - INS-260605-6444
  - INS-260625-3866
  - INS-260605-8D12
  - INS-260625-AF2A
  - INS-260625-B6E9
---
Beneath every hype cycle, an agent is a recursive while-loop with conditions and terminal states — user task → tool/action state → completion. The discipline is maintaining a mental model of which state the agent occupies at any moment, whether the loop runs for seconds or hours.

This legibility is what makes agents debuggable and extensible. If you can visualize the state machine, every design decision — what tools exist, what transitions are legal, where it terminates — becomes a concrete question rather than a vibe. The architecture of that state machine is the part Khan argues must be authored by a human, not generated.

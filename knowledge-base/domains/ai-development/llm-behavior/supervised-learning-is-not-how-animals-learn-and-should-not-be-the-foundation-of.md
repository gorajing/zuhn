---
id: INS-260410-1248
domain: ai-development
topic: llm-behavior
title: >-
  Supervised learning is not how animals learn and should not be the foundation
  of AI
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - supervised-learning
  - reinforcement-learning
  - animal-cognition
  - foundations
  - sutton
sources:
  - type: youtube
    title: Richard Sutton – Father of RL thinks LLMs are a dead end
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=21EYKqUsPfg'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Squirrels don't go to school — animal learning is prediction and
    trial-and-error, and supervised learning is a special human exception we
    have built entire AI paradigms around.
  standard: >-
    Sutton argues that psychology and animal behavior studies make it obvious
    that supervised learning is not a basic learning mechanism in nature. There
    are no examples of 'correct actions' presented to infants or squirrels. What
    exists are examples of 'we did something and there were consequences' —
    trial-and-error control — and 'one event followed another' — prediction
    learning. Even imitation learning, which humans clearly do, is a thin
    cultural layer on top of these basic mechanisms.


    The contrarian move is to treat humans as animals first. If you understood
    how a squirrel learns to navigate its world, Sutton claims, you would be
    'almost all the way there' to understanding human intelligence — language is
    a small veneer. This inverts the common framing that focuses on what makes
    humans special (language, culture, symbolic reasoning) and instead focuses
    on what humans share with all mammals: continual learning from sensation,
    action, and reward.


    For AI researchers, the implication is that building from supervised
    learning on human-generated text — the LLM paradigm — starts in exactly the
    wrong place. You are imitating the surface layer of a stack whose bottom
    layers (prediction, trial-and-error, goal-directed action) you have not yet
    built. Moravec's paradox resurfaces here: LLMs solve IMO-level math but
    cannot do what every mammal does (continual learning), which suggests we are
    optimizing the wrong end of the intelligence stack.
stance: >-
  Imitation and supervised learning are rare veneer on top of trial-and-error
  and prediction learning, so grounding AI in supervised next-token prediction
  inverts the natural hierarchy of how intelligence actually develops.
related:
  - INS-260325-B11F
  - INS-260330-E126
  - INS-260403-141E
  - PRI-260403-67FC
  - PRI-260405-0676
  - INS-260410-06DB
  - INS-260403-CDB0
---
Sutton argues that psychology and animal behavior studies make it obvious that supervised learning is not a basic learning mechanism in nature. There are no examples of 'correct actions' presented to infants or squirrels. What exists are examples of 'we did something and there were consequences' — trial-and-error control — and 'one event followed another' — prediction learning. Even imitation learning, which humans clearly do, is a thin cultural layer on top of these basic mechanisms.

The contrarian move is to treat humans as animals first. If you understood how a squirrel learns to navigate its world, Sutton claims, you would be 'almost all the way there' to understanding human intelligence — language is a small veneer. This inverts the common framing that focuses on what makes humans special (language, culture, symbolic reasoning) and instead focuses on what humans share with all mammals: continual learning from sensation, action, and reward.

For AI researchers, the implication is that building from supervised learning on human-generated text — the LLM paradigm — starts in exactly the wrong place. You are imitating the surface layer of a stack whose bottom layers (prediction, trial-and-error, goal-directed action) you have not yet built. Moravec's paradox resurfaces here: LLMs solve IMO-level math but cannot do what every mammal does (continual learning), which suggests we are optimizing the wrong end of the intelligence stack.

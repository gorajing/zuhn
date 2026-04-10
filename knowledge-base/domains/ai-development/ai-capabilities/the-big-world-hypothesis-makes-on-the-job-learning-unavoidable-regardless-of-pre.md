---
id: INS-260410-38C9
domain: ai-development
topic: ai-capabilities
title: >-
  The big world hypothesis makes on-the-job learning unavoidable regardless of
  pre-training
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - big-world-hypothesis
  - continual-learning
  - deployment
  - context
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
    No amount of pre-training can encode the idiosyncrasies of a specific job,
    client, or environment — the world is too big, so on-the-job learning into
    the weights is unavoidable.
  standard: >-
    The big world hypothesis says the world is so large that you cannot
    anticipate everything in advance. The LLM dream — train once, know
    everything, deploy without further learning — crashes into the reality that
    every job, every client, every environment has idiosyncrasies that no
    pre-training corpus captures. A human onboarding at a job rapidly absorbs
    preferences, company conventions, and tacit context. That absorption has to
    go somewhere.


    Sutton distinguishes sharply between LLM context windows (where new
    information lives temporarily and is lost) and continual learning into the
    weights (where new information becomes part of the policy). The LLM paradigm
    tries to use context as a substitute for learning, but context is bounded,
    expensive, and non-persistent. A system that learns into its weights can
    compound knowledge indefinitely and develop a policy specific to its actual
    environment.


    The immediate implication for anyone building agentic systems: the moat is
    not in the base model, it is in the ability to specialize to a specific
    deployment. Whoever solves weight-level on-the-job learning first unlocks
    the ability for agents to become genuinely useful in particular contexts in
    ways that pre-trained systems cannot. This is the piece the field has been
    unable to solve and is the reason every mammal has a capability that no
    current AI has.
stance: >-
  The world is too large and idiosyncratic for any amount of pre-training to
  substitute for continual learning during deployment, so any AI that must be
  useful in a specific context must learn during that context.
related:
  - INS-260410-F985
  - PRI-260407-2ACF
  - INS-260323-D400
  - INS-260410-B7B1
  - PRI-260328-094A
---
The big world hypothesis says the world is so large that you cannot anticipate everything in advance. The LLM dream — train once, know everything, deploy without further learning — crashes into the reality that every job, every client, every environment has idiosyncrasies that no pre-training corpus captures. A human onboarding at a job rapidly absorbs preferences, company conventions, and tacit context. That absorption has to go somewhere.

Sutton distinguishes sharply between LLM context windows (where new information lives temporarily and is lost) and continual learning into the weights (where new information becomes part of the policy). The LLM paradigm tries to use context as a substitute for learning, but context is bounded, expensive, and non-persistent. A system that learns into its weights can compound knowledge indefinitely and develop a policy specific to its actual environment.

The immediate implication for anyone building agentic systems: the moat is not in the base model, it is in the ability to specialize to a specific deployment. Whoever solves weight-level on-the-job learning first unlocks the ability for agents to become genuinely useful in particular contexts in ways that pre-trained systems cannot. This is the piece the field has been unable to solve and is the reason every mammal has a capability that no current AI has.

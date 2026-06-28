---
id: INS-260628-ACEA
domain: ai-development
topic: agent-evals
title: Evaluation becomes first-class only when model output directly drives actions
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - agency
  - risk
  - observability
  - decision-systems
sources:
  - type: youtube
    title: >-
      2025 is the Year of Evals! Just like 2024, and 2023, and … — John
      Dickerson, CEO Mozilla AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CQGuvf6gSrM'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before agents, ML output was ingested into complex downstream systems that
    erased the need to scrutinize the model itself; agency makes the output
    consequential, which is what forces evaluation to the surface.
  standard: >-
    Dickerson observes that traditional ML 'spit out numbers that would then be
    ingested into a more complex system,' and that complexity erased the
    top-of-mind need to think about what the model itself produced. The model's
    quality got wrapped into an opaque box that never escalated past the CIO, so
    each year was never 'the year of evals.'


    What changed is that agentic systems now perceive, reason, and act —
    autonomously or semi-autonomously — taking complex steps toward an action.
    When a model's output is no longer a buried input but the direct cause of a
    decision or action, its errors become consequential and visible, which is
    precisely what makes evaluation unavoidable rather than optional.


    The design implication: if you want evaluation to be taken seriously inside
    a system, locate the points where model output crosses the line from 'input
    to something else' to 'cause of an action.' Those action boundaries are
    where risk concentrates and where evaluation investment has the clearest
    payoff. Conversely, models buried deep in pipelines will be chronically
    under-evaluated until something elevates their output to a decision.
stance: >-
  A model's output only attracts serious evaluation once it directly drives
  decisions or actions, rather than being absorbed as one input into a larger
  opaque system.
related:
  - INS-260605-C436
  - INS-260501-E377
  - INS-260625-DF35
  - INS-260405-E8A1
  - INS-260403-0350
---
Dickerson observes that traditional ML 'spit out numbers that would then be ingested into a more complex system,' and that complexity erased the top-of-mind need to think about what the model itself produced. The model's quality got wrapped into an opaque box that never escalated past the CIO, so each year was never 'the year of evals.'

What changed is that agentic systems now perceive, reason, and act — autonomously or semi-autonomously — taking complex steps toward an action. When a model's output is no longer a buried input but the direct cause of a decision or action, its errors become consequential and visible, which is precisely what makes evaluation unavoidable rather than optional.

The design implication: if you want evaluation to be taken seriously inside a system, locate the points where model output crosses the line from 'input to something else' to 'cause of an action.' Those action boundaries are where risk concentrates and where evaluation investment has the clearest payoff. Conversely, models buried deep in pipelines will be chronically under-evaluated until something elevates their output to a decision.

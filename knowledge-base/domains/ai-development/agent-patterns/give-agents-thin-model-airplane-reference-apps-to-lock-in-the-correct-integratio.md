---
id: INS-260626-35A9
domain: ai-development
topic: agent-patterns
title: >-
  Give agents thin 'model airplane' reference apps to lock in the correct
  integration shape
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reference-implementations
  - context-engineering
  - coding-agents
  - token-efficiency
  - patterns
sources:
  - type: youtube
    title: 'LLM codegen fails and how to stop ''em — Danilo Campos, PostHog'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=juoNbJiZUi0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hand the agent a token-cheap fake app that is auth-shaped and login-shaped
    so it learns where the right events belong, without dragging a whole
    production codebase into context.
  standard: >-
    Models were trained on countless projects of varying architecture quality,
    so an agent's own conception of how to assemble an integration is often
    workable but not ideal. PostHog counters this with 'model airplanes':
    reference projects implementing PostHog across many frameworks and
    languages, but deliberately thin — the auth, for example, accepts any
    password and logs you in. It is auth-shaped without being real auth.


    Because the airplane carries the structural shape of a real application
    rather than its full production logic, the agent can see 'when auth shows
    up, this is where the login/identity tracking goes,' and it is far more
    token-efficient than feeding a real app. PostHog flattens all the airplanes
    into a single markdown reference inside a skill file that the agent can grep
    and churn through, giving it both plain-prose documentation and a worked
    example of a successful integration. The general pattern: when you need an
    agent to produce a consistent shape, give it a minimal, cheap exemplar of
    that shape rather than prose rules alone.
stance: >-
  Maintaining stripped-down simulacrum applications that have the shape of a
  real app but none of the production weight makes agents complete the correct
  integration pattern consistently.
related:
  - INS-260410-992A
  - INS-260424-273F
  - INS-260501-F258
  - INS-260605-8409
  - INS-260605-5DE9
  - INS-260605-91A9
  - INS-260605-34B0
  - INS-260605-7B06
  - INS-260625-A7AD
  - INS-260625-02A3
---
Models were trained on countless projects of varying architecture quality, so an agent's own conception of how to assemble an integration is often workable but not ideal. PostHog counters this with 'model airplanes': reference projects implementing PostHog across many frameworks and languages, but deliberately thin — the auth, for example, accepts any password and logs you in. It is auth-shaped without being real auth.

Because the airplane carries the structural shape of a real application rather than its full production logic, the agent can see 'when auth shows up, this is where the login/identity tracking goes,' and it is far more token-efficient than feeding a real app. PostHog flattens all the airplanes into a single markdown reference inside a skill file that the agent can grep and churn through, giving it both plain-prose documentation and a worked example of a successful integration. The general pattern: when you need an agent to produce a consistent shape, give it a minimal, cheap exemplar of that shape rather than prose rules alone.

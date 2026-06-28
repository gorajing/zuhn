---
id: INS-260626-DCB8
domain: automation
topic: self-improving-systems
title: Turn every human correction into an eval that rewrites the agent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-improving-systems
  - evals
  - agents
  - feedback-loops
  - continuous-improvement
sources:
  - type: youtube
    title: The Most AI-Pilled CEO We Know
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=mPAHvz8kW24'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most companies get an agent working but never make it improve daily; the
    unlock is turning every human interaction the agent couldn't handle into an
    eval that triggers an agent to modify the codebase and prompts until it
    passes.
  standard: >-
    Franceschi's biggest critique of how companies deploy agents: 'they spend a
    lot of time getting an agent working but never think about how to make the
    agent improve every day.' The fix is to make every human interaction become
    an eval. When Brex's onboarding agent hits a KYC exception it can't resolve,
    the manual human resolution is captured as a 'breaking change' — a new eval
    case. When someone has a rough conversation with the expense agent, that
    flagged issue becomes a bug, and the bug triggers an agent to modify the
    codebase and prompts to make the eval pass; if the automated fix doesn't
    work, an engineer steps in.


    The goal is a self-learning system with a nightly 'dream cycle' that reviews
    everything that happened, asks 'is there a pattern here, what actually
    happened, how do I root-cause this,' and folds the learning back into the
    agents and products it ships. The design principle is to bake this dream
    cycle directly into the products rather than treating evals as a one-time
    pre-launch gate.


    A related practice: run cross-model evals against each other, and treat
    domain-specific agents as composable building blocks. Brex builds a
    well-bounded 'customer world model' agent with clear APIs (total information
    awareness on every customer touchpoint, from button clicks to support-ticket
    sentiment), then builds higher-level agents — like one that turns customer
    conversations into a product roadmap — on top of that trusted block, rather
    than one monolithic model that ingests everything with no lens.
stance: >-
  The largest agent unlock is not getting it working once but wiring every
  manual exception and complaint into an eval that triggers automated code and
  prompt changes, making the whole system self-learning.
related:
  - INS-260605-3AB7
  - INS-260626-9155
  - INS-260627-09D8
  - INS-260605-6444
  - INS-260627-01CF
---
Franceschi's biggest critique of how companies deploy agents: 'they spend a lot of time getting an agent working but never think about how to make the agent improve every day.' The fix is to make every human interaction become an eval. When Brex's onboarding agent hits a KYC exception it can't resolve, the manual human resolution is captured as a 'breaking change' — a new eval case. When someone has a rough conversation with the expense agent, that flagged issue becomes a bug, and the bug triggers an agent to modify the codebase and prompts to make the eval pass; if the automated fix doesn't work, an engineer steps in.

The goal is a self-learning system with a nightly 'dream cycle' that reviews everything that happened, asks 'is there a pattern here, what actually happened, how do I root-cause this,' and folds the learning back into the agents and products it ships. The design principle is to bake this dream cycle directly into the products rather than treating evals as a one-time pre-launch gate.

A related practice: run cross-model evals against each other, and treat domain-specific agents as composable building blocks. Brex builds a well-bounded 'customer world model' agent with clear APIs (total information awareness on every customer touchpoint, from button clicks to support-ticket sentiment), then builds higher-level agents — like one that turns customer conversations into a product roadmap — on top of that trusted block, rather than one monolithic model that ingests everything with no lens.

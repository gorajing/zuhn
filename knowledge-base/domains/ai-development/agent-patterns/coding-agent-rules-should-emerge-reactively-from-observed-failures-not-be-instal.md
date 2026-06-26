---
id: INS-260626-0CFF
domain: ai-development
topic: agent-patterns
title: >-
  Coding-agent rules should emerge reactively from observed failures, not be
  installed comprehensively upfront
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cursor-rules
  - guardrails
  - agent-steering
  - instruction-following
  - model-human-gap
sources:
  - type: youtube
    title: 'Building your own software factory — Eric Zakariasson, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rnDm57Py54A'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't install every available rule for your stack — create a rule only when
    you catch an agent going off the rails, treating rules as SOPs that emerge
    dynamically.
  standard: >-
    The common assumption when Cursor launched rules was to install every rule
    available for your stack (e.g., all the Next.js rules). Zakariasson found
    the opposite works better: rules should emerge dynamically, created only
    when you observe agents going off the rails. A rule is best understood as
    the bridge between model behavior and human intent — a way to encode where
    the model's default (the statistically 'right' way) diverges from what your
    specific organization wants. His canonical example: Cursor avoids foreign
    keys in database migrations for performance reasons, but models always add
    them because that's textbook-correct, so a single emergent rule in Bugbot
    flags it. Because models keep improving at instruction-following, you also
    need fewer rules over time, and you should prefer ephemeral specs and plans
    before reaching for a permanent rule. The implication is that a large
    preinstalled rule library is mostly dead weight; the signal is in the
    specific, hard-won deltas between model default and your actual conventions.
stance: >-
  Agent rules created in response to observed misbehavior outperform
  comprehensive rule sets installed preemptively for a stack.
related:
  - INS-260605-8A88
  - PRI-260403-9E80
  - INS-260320-9D89
  - INS-260514-EE1D
  - INS-260321-2482
---
The common assumption when Cursor launched rules was to install every rule available for your stack (e.g., all the Next.js rules). Zakariasson found the opposite works better: rules should emerge dynamically, created only when you observe agents going off the rails. A rule is best understood as the bridge between model behavior and human intent — a way to encode where the model's default (the statistically 'right' way) diverges from what your specific organization wants. His canonical example: Cursor avoids foreign keys in database migrations for performance reasons, but models always add them because that's textbook-correct, so a single emergent rule in Bugbot flags it. Because models keep improving at instruction-following, you also need fewer rules over time, and you should prefer ephemeral specs and plans before reaching for a permanent rule. The implication is that a large preinstalled rule library is mostly dead weight; the signal is in the specific, hard-won deltas between model default and your actual conventions.
